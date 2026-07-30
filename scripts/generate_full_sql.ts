import fs from 'fs';
import * as V from '../src/utils/vehicle';
import { vehicles as dataVehicles } from '../src/utils/data';
import type { Vehicle } from '../src/types';

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

  Object.values(V).forEach(val => walk(val));
  dataVehicles.forEach(val => walk(val));

  return rawList;
}

function deduplicateVehicles(vehicles: Vehicle[]): Vehicle[] {
  const map = new Map<string, Vehicle>();

  for (const v of vehicles) {
    const brandNorm = v.brand.toLowerCase().replace(/[^a-z0-9]/g, '');
    const modelNorm = v.model.toLowerCase().replace(/[^a-z0-9]/g, '');
    const normKey = `${brandNorm}-${modelNorm}`;

    const existing = map.get(normKey);
    if (!existing) {
      map.set(normKey, v);
    } else {
      const existingScore = (existing.images?.length || 0) * 10 + (existing.description?.length || 0) + (existing.variants?.length || 0) * 20;
      const currentScore = (v.images?.length || 0) * 10 + (v.description?.length || 0) + (v.variants?.length || 0) * 20;

      if (currentScore > existingScore) {
        map.set(normKey, v);
      }
    }
  }

  return Array.from(map.values());
}

function escapeSqlStr(str: string | undefined | null): string {
  if (!str) return "''";
  return "'" + str.replace(/'/g, "''") + "'";
}

function escapeSqlArray(arr: string[] | undefined | null): string {
  if (!arr || arr.length === 0) return "'{}'";
  const escapedElements = arr.map(item => {
    let s = item.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/'/g, "''");
    return `"${s}"`;
  });
  return "'" + `{${escapedElements.join(',')}}` + "'";
}

function generateSql() {
  const allVehicles = extractAllVehicles();
  const deduplicated = deduplicateVehicles(allVehicles);
  console.log(`Deduplicated ${allVehicles.length} vehicles down to ${deduplicated.length} unique vehicles.`);

  let sqlInserts = `-- ========================================================\n-- SEEDING ALL ${deduplicated.length} DEDUPLICATED VEHICLES AND VARIANTS\n-- ========================================================\n\n`;

  for (const v of deduplicated) {
    const safeId = v.id || v.slug || `${v.brand.toLowerCase().replace(/\s+/g, '-')}-${v.model.toLowerCase().replace(/\s+/g, '-')}`;
    const safeSlug = v.slug || safeId;

    const id = escapeSqlStr(safeId);
    const slug = escapeSqlStr(safeSlug);
    const category = escapeSqlStr(v.category || 'car');
    const brand = escapeSqlStr(v.brand);
    const model = escapeSqlStr(v.model);
    const year = v.year || 2026;
    const starting_price = v.startingPrice || 0;
    const emi_from = v.emiFrom || Math.round((v.startingPrice || 0) * 0.015);
    const images = escapeSqlArray(v.images && v.images.length > 0 ? v.images : [v.thumbnailUrl || '']);
    const three_sixty_images = escapeSqlArray(v.threeSixtyImages || []);
    const thumbnail_url = escapeSqlStr(v.thumbnailUrl || (v.images && v.images[0]) || '');
    const fuel_types = escapeSqlArray(v.fuelTypes || ['Petrol']);
    const transmissions = escapeSqlArray(v.transmissions || ['Manual']);
    const mileage = escapeSqlStr(v.mileage || '18.0 kmpl');
    const features = escapeSqlArray(v.features || []);
    const colors = escapeSqlArray(v.colors || []);
    const rating = v.rating || 4.5;
    const review_count = v.reviewCount || 100;
    const is_new = v.isNew ? 'TRUE' : 'FALSE';
    const is_best_seller = v.isBestSeller ? 'TRUE' : 'FALSE';
    const is_ev = v.isEV || v.fuelTypes?.includes('Electric') || v.category === 'ev' ? 'TRUE' : 'FALSE';
    const seating_capacity = v.seatingCapacity || 5;
    const boot_space_l = v.bootSpaceL || 350;
    const engine_cc = v.engineCC || 1197;
    const power_bhp = v.powerBHP || 100;
    const torque_nm = v.torqueNm || 150;
    const safety_rating = v.safetyRating || 5;
    const description = escapeSqlStr(v.description || `${v.brand} ${v.model} offers superior comfort, advanced safety features, and great fuel efficiency.`);
    const pros = escapeSqlArray(v.pros || []);
    const cons = escapeSqlArray(v.cons || []);
    const ground_clearance = v.groundClearance || 180;

    sqlInserts += `INSERT INTO public.vehicles (id, slug, category, brand, model, year, starting_price, emi_from, images, three_sixty_images, thumbnail_url, fuel_types, transmissions, mileage, features, colors, rating, review_count, is_new, is_best_seller, is_ev, seating_capacity, boot_space_l, engine_cc, power_bhp, torque_nm, safety_rating, description, pros, cons, ground_clearance) VALUES (${id}, ${slug}, ${category}, ${brand}, ${model}, ${year}, ${starting_price}, ${emi_from}, ${images}, ${three_sixty_images}, ${thumbnail_url}, ${fuel_types}, ${transmissions}, ${mileage}, ${features}, ${colors}, ${rating}, ${review_count}, ${is_new}, ${is_best_seller}, ${is_ev}, ${seating_capacity}, ${boot_space_l}, ${engine_cc}, ${power_bhp}, ${torque_nm}, ${safety_rating}, ${description}, ${pros}, ${cons}, ${ground_clearance}) ON CONFLICT (id) DO UPDATE SET starting_price = EXCLUDED.starting_price, images = EXCLUDED.images, colors = EXCLUDED.colors;\n`;

    if (v.variants && Array.isArray(v.variants)) {
      v.variants.forEach((vr, idx) => {
        const varId = escapeSqlStr(vr.id || `${safeId}-v${idx + 1}`);
        const varVehId = id;
        const varName = escapeSqlStr(vr.name);
        const varPrice = vr.price || v.startingPrice || 0;
        const varFuel = escapeSqlStr(vr.fuelType || v.fuelTypes?.[0] || 'Petrol');
        const varTrans = escapeSqlStr(vr.transmission || v.transmissions?.[0] || 'Manual');
        const varEngine = vr.engineCC || v.engineCC || 1197;
        const varPower = vr.powerBHP || v.powerBHP || 100;
        const varTorque = vr.torqueNm || v.torqueNm || 150;
        const varMileage = vr.mileageKmpl || 18.0;
        const varRange = vr.rangeKm || 0;

        sqlInserts += `INSERT INTO public.variants (id, vehicle_id, name, price, fuel_type, transmission, engine_cc, power_bhp, torque_nm, mileage_kmpl, range_km) VALUES (${varId}, ${varVehId}, ${varName}, ${varPrice}, ${varFuel}, ${varTrans}, ${varEngine}, ${varPower}, ${varTorque}, ${varMileage}, ${varRange}) ON CONFLICT (id) DO NOTHING;\n`;
      });
    }
  }

  fs.writeFileSync('g:/buywheels main/code buywheels/buywheels-car-main/buywheels-car-main/scratch_generated_vehicles.sql', sqlInserts, 'utf8');
  console.log('Successfully generated scratch_generated_vehicles.sql with escaped quotes!');
}

generateSql();
