import { supabase } from './supabaseClient';
import type { Vehicle, Brand, Dealer, Review, Offer, FAQItem, BlogPost } from '../types';
import {
  vehicles as mockVehicles,
  brands as mockBrands,
  dealers as mockDealers,
  reviews as mockReviews,
  offers as mockOffers,
  faqs as mockFAQs,
  blogPosts as mockBlogPosts
} from './data';

export async function fetchVehicles(): Promise<Vehicle[]> {
  try {
    const { data, error } = await supabase
      .from('vehicles')
      .select(`
        *,
        variants (*),
        dealer_prices (
          price,
          discount,
          dealers (
            id,
            name,
            location,
            rating
          )
        )
      `);

    if (error || !data || data.length === 0) {
      if (error) console.error('Error fetching vehicles from Supabase, using mock fallback:', error);
      return mockVehicles;
    }

    const mapped = data.map((v: any) => {
      const mock = mockVehicles.find(mv => mv.id === v.id || mv.slug === v.slug);
      return {
        id: v.id,
        slug: v.slug,
        category: v.category,
        brand: v.brand,
        model: v.model,
        year: v.year,
        startingPrice: Number(v.starting_price),
        emiFrom: Number(v.emi_from),
        images: v.images || [],
        threeSixtyImages: v.three_sixty_images || [],
        thumbnailUrl: v.thumbnail_url,
        fuelTypes: v.fuel_types || [],
        transmissions: v.transmissions || [],
        mileage: v.mileage,
        features: v.features || [],
        colors: v.colors || [],
        rating: Number(v.rating),
        reviewCount: Number(v.review_count),
        isNew: v.is_new,
        isBestSeller: v.is_best_seller,
        isEV: v.is_ev,
        seatingCapacity: v.seating_capacity,
        bootSpaceL: v.boot_space_l,
        engineCC: v.engine_cc,
        powerBHP: Number(v.power_bhp),
        torqueNm: Number(v.torque_nm),
        safetyRating: v.safety_rating,
        description: v.description,
        pros: (v.pros && v.pros.length > 0) ? v.pros : (mock?.pros || []),
        cons: (v.cons && v.cons.length > 0) ? v.cons : (mock?.cons || []),
        groundClearance: v.ground_clearance !== null && v.ground_clearance !== undefined ? v.ground_clearance : mock?.groundClearance,
        variants: (() => {
          const parsed = (v.variants || []).map((vr: any) => ({
            id: vr.id,
            name: vr.name,
            price: Number(vr.price),
            fuelType: vr.fuel_type,
            transmission: vr.transmission,
            engineCC: vr.engine_cc,
            powerBHP: Number(vr.power_bhp),
            torqueNm: Number(vr.torque_nm),
            mileageKmpl: Number(vr.mileage_kmpl),
            rangeKm: Number(vr.range_km)
          }));
          return parsed.length > 0 ? parsed : (mock?.variants || [{
            id: `default-${v.id}`,
            name: 'Standard',
            price: Number(v.starting_price),
            fuelType: v.fuel_types?.[0] || 'Petrol',
            transmission: v.transmissions?.[0] || 'Manual',
            engineCC: v.engine_cc,
            powerBHP: Number(v.power_bhp),
            torqueNm: Number(v.torque_nm),
            mileageKmpl: Number(v.mileage) || 0,
            rangeKm: 0
          }]);
        })(),
        dealerPrices: (() => {
          const parsed = (v.dealer_prices || []).map((dp: any) => ({
            dealerId: dp.dealers?.id || '',
            dealerName: dp.dealers?.name || '',
            location: dp.dealers?.location || '',
            price: Number(dp.price),
            discount: Number(dp.discount),
            rating: Number(dp.dealers?.rating || 0)
          }));
          return parsed.length > 0 ? parsed : (mock?.dealerPrices || []);
        })()
      };
    });

    return mapped.length > 0 ? mapped : mockVehicles;
  } catch (err) {
    console.error('Exception fetching vehicles, using mock fallback:', err);
    return mockVehicles;
  }
}

const BRAND_LOGOS_OVERRIDE: Record<string, string> = {
  'Maruti Suzuki': 'https://static-cdn.cars24.com/prod/bikes/2025/05/27/Suzuki_Logos_176x176_4cdbf2d508-81f7c4b3-7c01-4de6-8bd1-5c970e9e26d4.png?w=60&dpr=3&optimize=low&format=auto&quality=50',
  'Hyundai': 'https://static-cdn.cars24.com/prod/bikes/2025/06/25/Hyundai-c380f1c1-86a1-4444-a5a9-6f68306b023c.png?w=60&dpr=3&optimize=low&format=auto&quality=50',
  'Tata': 'https://static-cdn.cars24.com/prod/bikes/2025/07/01/Container-1-47cf9d69-e2e2-4bae-b6c2-811bab4544ba.png?w=60&dpr=3&optimize=low&format=auto&quality=50',
  'Mahindra': 'https://static-cdn.cars24.com/prod/bikes/2025/06/25/Mahindra-29d3c1df-fd38-4d36-9491-2319596e9032.png?w=60&dpr=3&optimize=low&format=auto&quality=50',
  'Toyota': 'https://static-cdn.cars24.com/prod/bikes/2025/06/25/Toyota-098fa7f6-4842-422e-8b8a-1dc97641a2fe.png?w=60&dpr=3&optimize=low&format=auto&quality=50',
  'Honda': 'https://static-cdn.cars24.com/prod/bikes/2025/06/25/Container-5-d813c3ab-e96c-4f3c-80df-c45f70b7b527.png?w=60&dpr=3&optimize=low&format=auto&quality=50',
  'Kia': 'https://static-cdn.cars24.com/prod/bikes/2025/06/25/Kia-64a3d6aa-8cc7-4f6b-8bd8-e71c4a7a5832.png?w=60&dpr=3&optimize=low&format=auto&quality=50',
  'Skoda': 'https://static-cdn.cars24.com/prod/bikes/2025/07/01/Container-4-fe646a5a-1f0b-4ca1-a70c-2b0d7ad1cd19.png?w=60&dpr=3&optimize=low&format=auto&quality=50',
  'Citroen': 'https://static-cdn.cars24.com/prod/bikes/2025/06/25/Citroen-c99960d3-a967-412f-b579-99c41d62f1b0.png?w=60&dpr=2&optimize=low&format=auto&quality=50',
  'MG': 'https://static-cdn.cars24.com/prod/bikes/2025/06/25/MG-29145582-cf3b-4edf-9e6b-5bb79036108d.png?w=60&dpr=3&optimize=low&format=auto&quality=50',
  'Volkswagen': 'https://static-cdn.cars24.com/prod/bikes/2025/06/25/VW-bb54ceb0-f19f-4a47-98e9-47107a96de6e.png?w=60&dpr=2&optimize=low&format=auto&quality=50',
  'Nissan': 'https://static-cdn.cars24.com/prod/bikes/2025/07/01/Container-2-1657e5a7-4f2c-4df7-bf35-949db36509a3.png?w=60&dpr=3&optimize=low&format=auto&quality=50',
  'Renault': 'https://static-cdn.cars24.com/prod/bikes/2025/06/25/Renault-2baa1686-fb01-43a7-90d5-f3c19c22c810.png?w=60&dpr=3&optimize=low&format=auto&quality=50',
  'Jeep': 'https://static-cdn.cars24.com/prod/bikes/2025/06/25/%60Jeep-af79fdab-9f41-4a08-9a1d-8c868d3fb265.png?w=60&dpr=2&optimize=low&format=auto&quality=50',
  'BYD': 'https://static-cdn.cars24.com/prod/bikes/2025/06/25/BYD-6fb0b956-c3c6-4084-ba74-b3544e47aa61.png?w=60&dpr=2&optimize=low&format=auto&quality=50',
  'Mini': 'https://static-cdn.cars24.com/prod/bikes/2025/06/25/Mini%20cooper-3717633e-e379-49ab-94a9-27e3fef45b1d.png?w=60&dpr=2&optimize=low&format=auto&quality=50',
  'Porsche': 'https://static-cdn.cars24.com/prod/bikes/2025/06/25/Porsche-38b3e724-1977-4494-a9e9-a8aa7062ab6c.png?w=60&dpr=2&optimize=low&format=auto&quality=50',
};

export async function fetchBrands(): Promise<Brand[]> {
  try {
    const { data, error } = await supabase
      .from('brands')
      .select('*')
      .order('name', { ascending: true });

    if (error || !data || data.length === 0) {
      if (error) console.error('Error fetching brands from Supabase, using mock fallback:', error);
      return mockBrands;
    }

    const mapped = data.map((b: any) => ({
      id: b.id,
      name: b.name,
      logo: BRAND_LOGOS_OVERRIDE[b.name] || b.logo,
      vehicleCount: b.vehicle_count
    }));

    return mapped.length > 0 ? mapped : mockBrands;
  } catch (err) {
    console.error('Exception fetching brands, using mock fallback:', err);
    return mockBrands;
  }
}

export async function fetchDealers(): Promise<Dealer[]> {
  try {
    const { data, error } = await supabase
      .from('dealers')
      .select('*');

    if (error || !data || data.length === 0) {
      if (error) console.error('Error fetching dealers from Supabase, using mock fallback:', error);
      return mockDealers;
    }

    const mapped = data.map((d: any) => ({
      id: d.id,
      name: d.name,
      brand: d.brand,
      brands: d.brands || [],
      location: d.location,
      city: d.city,
      address: d.address,
      phone: d.phone,
      rating: Number(d.rating),
      reviewCount: Number(d.review_count),
      image: d.image,
      openHours: d.open_hours,
      lat: d.lat ? Number(d.lat) : undefined,
      lng: d.lng ? Number(d.lng) : undefined
    }));

    return mapped.length > 0 ? mapped : mockDealers;
  } catch (err) {
    console.error('Exception fetching dealers, using mock fallback:', err);
    return mockDealers;
  }
}

export async function fetchReviews(): Promise<Review[]> {
  try {
    const { data, error } = await supabase
      .from('reviews')
      .select('*');

    if (error || !data || data.length === 0) {
      if (error) console.error('Error fetching reviews from Supabase, using mock fallback:', error);
      return mockReviews;
    }

    const mapped = data.map((r: any) => ({
      id: r.id,
      name: r.name,
      avatar: r.avatar,
      rating: Number(r.rating),
      vehicle: r.vehicle,
      comment: r.comment,
      location: r.location,
      date: r.date,
      verified: r.verified
    }));

    return mapped.length > 0 ? mapped : mockReviews;
  } catch (err) {
    console.error('Exception fetching reviews, using mock fallback:', err);
    return mockReviews;
  }
}

export async function fetchOffers(): Promise<Offer[]> {
  try {
    const { data, error } = await supabase
      .from('offers')
      .select('*');

    if (error || !data || data.length === 0) {
      if (error) console.error('Error fetching offers from Supabase, using mock fallback:', error);
      return mockOffers;
    }

    const mapped = data.map((o: any) => ({
      id: o.id,
      title: o.title,
      description: o.description,
      discount: o.discount,
      validTill: o.valid_till,
      category: o.category,
      brand: o.brand,
      image: o.image,
      code: o.code,
      type: o.type
    }));

    return mapped.length > 0 ? mapped : mockOffers;
  } catch (err) {
    console.error('Exception fetching offers, using mock fallback:', err);
    return mockOffers;
  }
}

export async function fetchFAQs(): Promise<FAQItem[]> {
  try {
    const { data, error } = await supabase
      .from('faqs')
      .select('*');

    if (error || !data || data.length === 0) {
      if (error) console.error('Error fetching FAQs from Supabase, using mock fallback:', error);
      return mockFAQs;
    }

    const mapped = data.map((f: any) => ({
      id: f.id,
      question: f.question,
      answer: f.answer,
      category: f.category
    }));

    return mapped.length > 0 ? mapped : mockFAQs;
  } catch (err) {
    console.error('Exception fetching FAQs, using mock fallback:', err);
    return mockFAQs;
  }
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*');

    if (error || !data || data.length === 0) {
      if (error) console.error('Error fetching blog posts from Supabase, using mock fallback:', error);
      return mockBlogPosts;
    }

    const mapped = data.map((bp: any) => ({
      id: bp.id,
      title: bp.title,
      excerpt: bp.excerpt,
      image: bp.image,
      category: bp.category,
      date: bp.date,
      readTime: bp.read_time,
      slug: bp.slug,
      metaTitle: bp.meta_title,
      metaDescription: bp.meta_description,
      content: bp.content || []
    }));

    return mapped.length > 0 ? mapped : mockBlogPosts;
  } catch (err) {
    console.error('Exception fetching blog posts, using mock fallback:', err);
    return mockBlogPosts;
  }
}

