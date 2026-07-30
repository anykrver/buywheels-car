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
      
      const isCretaOnNonCreta = typeof v.thumbnail_url === 'string' && v.thumbnail_url.includes('106815/creta-exterior') && v.slug !== 'hyundai-creta';
      const hasCretaImagesOnNonCreta = Array.isArray(v.images) && v.images.some((img: string) => typeof img === 'string' && img.includes('106815/creta-exterior')) && v.slug !== 'hyundai-creta';

      const finalThumbnailUrl = (isCretaOnNonCreta || !v.thumbnail_url) ? (mock?.thumbnailUrl || v.thumbnail_url || '') : v.thumbnail_url;
      const finalImages = (hasCretaImagesOnNonCreta || !v.images || v.images.length === 0) ? (mock?.images || v.images || []) : v.images;

      return {
        id: v.id,
        slug: v.slug,
        category: v.category,
        brand: v.brand,
        model: v.model,
        year: v.year,
        startingPrice: Number(v.starting_price),
        emiFrom: Number(v.emi_from),
        images: finalImages,
        threeSixtyImages: (v.three_sixty_images && v.three_sixty_images.length > 0) ? v.three_sixty_images : (mock?.threeSixtyImages || []),
        thumbnailUrl: finalThumbnailUrl,
        fuelTypes: (v.fuel_types && v.fuel_types.length > 0) ? v.fuel_types : (mock?.fuelTypes || []),
        transmissions: (v.transmissions && v.transmissions.length > 0) ? v.transmissions : (mock?.transmissions || []),
        mileage: v.mileage || mock?.mileage || '',
        features: (v.features && v.features.length > 0) ? v.features : (mock?.features || []),
        colors: (v.colors && v.colors.length > 0) ? v.colors : (mock?.colors || []),
        rating: Number(v.rating || mock?.rating || 4.5),
        reviewCount: Number(v.review_count || mock?.reviewCount || 100),
        isNew: v.is_new !== null && v.is_new !== undefined ? v.is_new : mock?.isNew,
        isBestSeller: v.is_best_seller !== null && v.is_best_seller !== undefined ? v.is_best_seller : mock?.isBestSeller,
        isEV: v.is_ev !== null && v.is_ev !== undefined ? v.is_ev : mock?.isEV,
        seatingCapacity: v.seating_capacity || mock?.seatingCapacity,
        bootSpaceL: v.boot_space_l || mock?.bootSpaceL,
        engineCC: v.engine_cc || mock?.engineCC,
        powerBHP: Number(v.power_bhp || mock?.powerBHP || 0),
        torqueNm: Number(v.torque_nm || mock?.torqueNm || 0),
        safetyRating: v.safety_rating || mock?.safetyRating,
        description: v.description || mock?.description,
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
            rangeKm: Number(vr.range_km),
            features: vr.features || [],
            mileage: vr.mileage,
            additionalFeaturesOverBase: vr.additional_features_over_base
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

export const BRAND_LOGOS_OVERRIDE: Record<string, string> = {
  'Maruti Suzuki': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/10/brands/logos/maruti-suzuki1647009823420.jpg?v=1647009823707&q=80',
  'Hyundai': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/8/brands/logos/hyundai.jpg?v=1629973193722&q=80',
  'Tata': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/16/brands/logos/tata.jpg?v=1629973276336&q=80',
  'Mahindra': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/9/brands/logos/mahindra.jpg?v=1629973668273&q=80',
  'Toyota': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/17/brands/logos/toyota.jpg?v=1630055705330&q=80',
  'Honda': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/7/brands/logos/honda.jpg?v=1630056209549&q=80',
  'Kia': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/70/brands/logos/kia.jpg?v=1630057189593&q=80',
  'Skoda': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/15/brands/logos/skoda1681982956420.jpg?v=1681982956529&q=80',
  'Citroen': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/74/brands/logos/citroen1649763818937.jpg?v=1649763819072&q=80',
  'MG': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/72/brands/logos/mg.jpg?v=1631163895654&q=80',
  'Volkswagen': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/20/brands/logos/volkswagen.jpg?v=1630056096439&q=80',
  'Nissan': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/21/brands/logos/nissan.jpg?v=1631163973143&q=80',
  'Renault': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/45/brands/logos/renault.jpg?v=1630057266767&q=80',
  'Jeep': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/43/brands/logos/jeep.jpg?v=1631163646486&q=80',
  'BYD': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/111/brands/logos/byd1650348943682.jpg?v=1650348943775&q=80',
  'Mini': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/51/brands/logos/mini1753266761791.jpg?v=1753266761988&q=80',
  'Porsche': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/19/brands/logos/porsche.jpg?v=1631164048727&q=80',
  'Audi': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/18/brands/logos/audi.jpg?v=1630055874070&q=80',
  'BMW': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/1/brands/logos/bmw.jpg?v=1629973130013&q=80',
  'Mercedes-Benz': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/11/brands/logos/mercedes-benz.jpg?v=1629973270530&q=80',
  'Volvo': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/37/brands/logos/volvo.jpg?v=1641478299001&q=80',
  'Land Rover': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/23/brands/logos/land-rover1647236056893.jpg?v=1647236057234&q=80',
  'Lexus': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/34/brands/logos/lexus1753266706938.jpg?v=1753266707154&q=80',
  'Aston Martin': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/49/brands/logos/aston-martin1753266065376.jpg?v=1753266065606&q=80',
  'Lamborghini': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/30/brands/logos/lamborghini.jpg?v=1631163814246&q=80',
  'Force Motors': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/50/brands/logos/force-motors1753266590265.jpg?v=1753266590441&q=80',
  'Isuzu': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/61/brands/logos/isuzu1753266617584.jpg?v=1753266617818&q=80',
  'VinFast': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/155/brands/logos/vinfast1713865012063.jpg?v=1713865012556&q=80',
  'Ferrari': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/33/brands/logos/ferrari1753266554970.jpg?v=1753266555197&q=80',
  'Jaguar': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/44/brands/logos/jaguar.jpg?v=1631163525508&q=80',
  'JSW': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/188/brands/logos/jsw1772024977296.jpg?v=1772024977457&q=80',
  'Rolls-Royce': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/25/brands/logos/rolls-royce.jpg?v=1631164135042&q=80',
  'Tesla': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/73/brands/logos/tesla.jpg?v=1631163609705&q=80',
  'Maserati': 'https://imgd.aeplcdn.com/0X0/n/gph63sa_1483779.jpg?q=80',
  'McLaren': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/77/brands/logos/mclaren1649762557086.jpg?v=1649762557267&q=80',
  'Bentley': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/22/brands/logos/bentley1753266197135.jpg?v=1753266197662&q=80',
  'Lotus': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/123/brands/logos/lotus1700211136329.jpg?v=1700211136743&q=80',
  'OLA': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/119/brands/logos/ola1656591185411.jpg?v=1656591185786&q=80',
  'Genesis': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/183/brands/logos/gensis1762939958516.jpg?v=1762939958875&q=80',
  'Pravaig': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/135/brands/logos/pravaig1669203737160.jpg?v=1669203737308&q=80',
  'Fisker': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/113/brands/logos/fisker1650348917218.jpg?v=1650348917359&q=80',
  'Leapmotor': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/157/brands/logos/leapmotor1715761361374.jpg?v=1715761361605&q=80',
  'Ford': 'https://imgd.aeplcdn.com/0X0/n/cw/ec/46/brands/logos/ford.jpg?q=80',
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

