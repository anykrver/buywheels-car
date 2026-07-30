import { createClient } from '@supabase/supabase-js';
import * as V from '../src/utils/vehicle';
import { vehicles as dataVehicles } from '../src/utils/data';
import type { Vehicle } from '../src/types';

const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://rewmnpywlvhwzqzlaidq.supabase.co';
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJld21ucHl3bHZod3pxemxhaWRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUwNTMxNzMsImV4cCI6MjEwMDYyOTE3M30.pYpxfyYZAVgnr0u3w0JcrNXG_8XdaooSD5cFOQu56vs';

const supabase = createClient(supabaseUrl, supabaseKey);

function extractAllVehicles(): Vehicle[] {
  const rawList: Vehicle[] = [];

  function walk(obj: any) {
    if (!obj) return;
    if (Array.isArray(obj)) {
      obj.forEach(item => walk(item));
    } else if (typeof obj === 'object' && obj.slug && obj.brand && obj.model) {
      rawList.push(obj as Vehicle);
    } else if (typeof obj === 'object') {
      Object.values(obj).forEach(val => {
        if (val && typeof val === 'object' && (val as any).slug && (val as any).brand) {
          rawList.push(val as Vehicle);
        }
      });
    }
  }

  // Gather from vehicle.ts
  Object.values(V).forEach(val => walk(val));
  // Gather from data.ts
  dataVehicles.forEach(val => walk(val));

  return rawList;
}

function deduplicateVehicles(vehicles: Vehicle[]): Vehicle[] {
  const map = new Map<string, Vehicle>();

  for (const v of vehicles) {
    // Generate normalized key based on brand and model (e.g. "kia-seltos", "maruti-suzuki-swift")
    const brandNorm = v.brand.toLowerCase().replace(/[^a-z0-9]/g, '');
    const modelNorm = v.model.toLowerCase().replace(/[^a-z0-9]/g, '');
    const normKey = `${brandNorm}-${modelNorm}`;

    const existing = map.get(normKey);
    if (!existing) {
      map.set(normKey, v);
    } else {
      // Pick the richer entry (more images, longer description, or more variants)
      const existingScore = (existing.images?.length || 0) * 10 + (existing.description?.length || 0) + (existing.variants?.length || 0) * 20;
      const currentScore = (v.images?.length || 0) * 10 + (v.description?.length || 0) + (v.variants?.length || 0) * 20;

      if (currentScore > existingScore) {
        map.set(normKey, v);
      }
    }
  }

  return Array.from(map.values());
}

async function syncToSupabase() {
  console.log('🚀 Starting Supabase Vehicle Sync...');
  const allVehicles = extractAllVehicles();
  console.log(`Found total raw vehicle instances: ${allVehicles.length}`);

  const deduplicated = deduplicateVehicles(allVehicles);
  console.log(`Deduplicated to ${deduplicated.length} unique vehicle models.`);

  // Clear existing vehicles & variants from Supabase to remove duplicates
  console.log('🧹 Clearing existing vehicle and variant records from Supabase...');
  const { error: delVarErr } = await supabase.from('variants').delete().neq('id', '___none___');
  if (delVarErr) console.warn('Note deleting variants:', delVarErr.message);

  const { error: delVehErr } = await supabase.from('vehicles').delete().neq('id', '___none___');
  if (delVehErr) console.warn('Note deleting vehicles:', delVehErr.message);

  console.log('📤 Uploading clean vehicle records...');

  const vehicleRows = [];
  const variantRows = [];

  for (const v of deduplicated) {
    // Ensure clean ID & Slug
    const safeId = v.id || v.slug || `${v.brand.toLowerCase().replace(/\s+/g, '-')}-${v.model.toLowerCase().replace(/\s+/g, '-')}`;
    const safeSlug = v.slug || safeId;

    vehicleRows.push({
      id: safeId,
      slug: safeSlug,
      category: v.category || 'car',
      brand: v.brand,
      model: v.model,
      year: v.year || 2026,
      starting_price: v.startingPrice || 0,
      emi_from: v.emiFrom || Math.round((v.startingPrice || 0) * 0.015),
      images: v.images && v.images.length > 0 ? v.images : [v.thumbnailUrl || ''],
      three_sixty_images: v.threeSixtyImages || [],
      thumbnail_url: v.thumbnailUrl || (v.images && v.images[0]) || '',
      fuel_types: v.fuelTypes || ['Petrol'],
      transmissions: v.transmissions || ['Manual'],
      mileage: v.mileage || '18.0 kmpl',
      features: v.features || [],
      colors: v.colors || [],
      rating: v.rating || 4.5,
      review_count: v.reviewCount || 100,
      is_new: v.isNew ?? true,
      is_best_seller: v.isBestSeller ?? false,
      is_ev: v.isEV ?? (v.fuelTypes?.includes('Electric') || v.category === 'ev'),
      seating_capacity: v.seatingCapacity || 5,
      boot_space_l: v.bootSpaceL || 350,
      engine_cc: v.engineCC || 1197,
      power_bhp: v.powerBHP || 100,
      torque_nm: v.torqueNm || 150,
      safety_rating: v.safetyRating || 5,
      description: v.description || `${v.brand} ${v.model} offers superior comfort, advanced safety features, and great fuel efficiency.`,
      pros: v.pros || [],
      cons: v.cons || [],
      ground_clearance: v.groundClearance || 180
    });

    if (v.variants && Array.isArray(v.variants)) {
      v.variants.forEach((vr, idx) => {
        variantRows.push({
          id: vr.id || `${safeId}-v${idx + 1}`,
          vehicle_id: safeId,
          name: vr.name,
          price: vr.price || v.startingPrice || 0,
          fuel_type: vr.fuelType || v.fuelTypes?.[0] || 'Petrol',
          transmission: vr.transmission || v.transmissions?.[0] || 'Manual',
          engine_cc: vr.engineCC || v.engineCC || 1197,
          power_bhp: vr.powerBHP || v.powerBHP || 100,
          torque_nm: vr.torqueNm || v.torqueNm || 150,
          mileage_kmpl: vr.mileageKmpl || 18.0,
          range_km: vr.rangeKm || 0
        });
      });
    }
  }

  // Insert vehicles in batches of 20
  const BATCH_SIZE = 20;
  for (let i = 0; i < vehicleRows.length; i += BATCH_SIZE) {
    const batch = vehicleRows.slice(i, i + BATCH_SIZE);
    const { error: vInsertErr } = await supabase.from('vehicles').upsert(batch);
    if (vInsertErr) {
      console.error(`Error inserting vehicle batch ${i}:`, vInsertErr.message);
    } else {
      console.log(`✅ Uploaded vehicles batch ${i + 1} to ${Math.min(i + BATCH_SIZE, vehicleRows.length)}`);
    }
  }

  // Insert variants in batches of 50
  if (variantRows.length > 0) {
    for (let i = 0; i < variantRows.length; i += 50) {
      const batch = variantRows.slice(i, i + 50);
      const { error: varInsertErr } = await supabase.from('variants').upsert(batch);
      if (varInsertErr) {
        console.error(`Error inserting variant batch ${i}:`, varInsertErr.message);
      } else {
        console.log(`✅ Uploaded variants batch ${i + 1} to ${Math.min(i + 50, variantRows.length)}`);
      }
    }
  }

  console.log('🎉 VEHICLE SYNC COMPLETED SUCCESSFULLY!');
}

syncToSupabase().catch(err => {
  console.error('Fatal sync error:', err);
  process.exit(1);
});
