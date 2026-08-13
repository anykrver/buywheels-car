import { Vehicle, Dealer, Offer, BlogPost, Review } from '../types';

export const mockVehicles: Vehicle[] = [
  {
    id: 'c1',
    slug: 'maruti-suzuki-swift-2024',
    category: 'car',
    brand: 'Maruti Suzuki',
    model: 'Swift 2024',
    year: 2024,
    startingPrice: 649000,
    emiFrom: 6999,
    thumbnailUrl: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/159231/swift-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80',
    images: [
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/159231/swift-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80',
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/159231/swift-exterior-left-front-three-quarter.jpeg?isig=0&q=80',
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/159231/swift-interior-dashboard.jpeg?isig=0&q=80'
    ],
    fuelTypes: ['Petrol', 'CNG'],
    transmissions: ['Manual', 'Automatic'],
    mileage: '24.8 kmpl',
    rating: 4.6,
    reviewCount: 412,
    isNew: true,
    isBestSeller: true,
    seatingCapacity: 5,
    bootSpaceL: 265,
    engineCC: 1197,
    powerBHP: 80,
    torqueNm: 112,
    safetyRating: 4,
    features: ['6 Airbags', 'SmartPlay Touchscreen', 'Automatic Climate Control', 'LED Projector Headlamps'],
    description: 'The all-new Maruti Suzuki Swift 2024 comes with a brand-new Z-series engine, refreshed premium styling, 9-inch touchscreen, and 6 standard airbags across all variants.',
    pros: [
      'Segment-leading mileage of 24.8 kmpl',
      'Standard 6 airbags across all variants',
      'Modern LED projector headlamps & stylish alloy wheels',
      'Extensive service network across all districts of Jharkhand'
    ],
    cons: [
      'Rear seat width can be tight for 3 adults',
      'No diesel engine option available'
    ],
    variants: [
      { id: 'v1-1', name: 'LXi', price: 649000, fuelType: 'Petrol', transmission: 'Manual', mileage: '24.8 kmpl', features: ['6 Airbags', 'ESP', 'ABS with EBD', 'Remote Keyless Entry'] },
      { id: 'v1-2', name: 'VXi', price: 729000, fuelType: 'Petrol', transmission: 'Manual', mileage: '24.8 kmpl', features: ['SmartPlay Touchscreen', 'Steering Mounted Controls', 'Power Windows'], additionalFeaturesOverBase: ['7-inch Touchscreen', 'Steering Audio Controls', 'Body Colored Door Handles'] },
      { id: 'v1-3', name: 'VXi AMT', price: 779000, fuelType: 'Petrol', transmission: 'Automatic', mileage: '25.75 kmpl', features: ['Hill Hold Assist', 'AMT Automatic Gearbox'] },
      { id: 'v1-4', name: 'ZXi', price: 829000, fuelType: 'Petrol', transmission: 'Manual', mileage: '24.8 kmpl', features: ['Wireless Charger', 'LED DRLs', '15-inch Alloy Wheels', 'Automatic Climate Control'] },
      { id: 'v1-5', name: 'ZXi Plus AMT', price: 949000, fuelType: 'Petrol', transmission: 'Automatic', mileage: '25.75 kmpl', features: ['9-inch SmartPlay Pro+', 'Cruiser Control', 'Rear AC Vents', 'Dual Tone Roof'] }
    ],
    dealerPrices: [
      { dealerId: 'd1', dealerName: 'Sudha Maruti Ranchi', location: 'Kanke Road, Ranchi', price: 645000, discount: 4000, rating: 4.8 },
      { dealerId: 'd2', dealerName: 'Premsons Motor Jamshedpur', location: 'Bistupur, Jamshedpur', price: 647000, discount: 2000, rating: 4.7 }
    ]
  },
  {
    id: 'c2',
    slug: 'hyundai-creta-2024',
    category: 'car',
    brand: 'Hyundai',
    model: 'Creta 2024',
    year: 2024,
    startingPrice: 1099000,
    emiFrom: 11499,
    thumbnailUrl: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/141115/creta-exterior-right-front-three-quarter.jpeg?isig=0&q=80',
    images: [
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/141115/creta-exterior-right-front-three-quarter.jpeg?isig=0&q=80',
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/141115/creta-exterior-rear-three-quarter.jpeg?isig=0&q=80'
    ],
    fuelTypes: ['Petrol', 'Diesel'],
    transmissions: ['Manual', 'Automatic', 'CVT', 'DCT'],
    mileage: '17.4 kmpl',
    rating: 4.8,
    reviewCount: 890,
    isNew: true,
    isBestSeller: true,
    seatingCapacity: 5,
    bootSpaceL: 433,
    engineCC: 1497,
    powerBHP: 113,
    torqueNm: 144,
    safetyRating: 5,
    description: 'India\'s favourite SUV updated with bold parametric jewel grille, twin 10.25-inch connected screens, Level 2 ADAS, and 360-degree camera system.',
    features: ['Panoramic Sunroof', 'Level 2 ADAS', '360° Camera', 'Bose 8-Speaker Sound', 'Ventilated Front Seats'],
    variants: [
      { id: 'v2-1', name: 'E 1.5 Petrol', price: 1099000, fuelType: 'Petrol', transmission: 'Manual', mileage: '17.4 kmpl' },
      { id: 'v2-2', name: 'EX 1.5 Petrol', price: 1221000, fuelType: 'Petrol', transmission: 'Manual', mileage: '17.4 kmpl' },
      { id: 'v2-3', name: 'SX Tech 1.5 IVT', price: 1745000, fuelType: 'Petrol', transmission: 'Automatic', mileage: '17.7 kmpl' },
      { id: 'v2-4', name: 'SX (O) 1.5 Diesel AT', price: 1999000, fuelType: 'Diesel', transmission: 'Automatic', mileage: '21.8 kmpl' }
    ]
  },
  {
    id: 'c3',
    slug: 'tata-nexon-ev-2024',
    category: 'ev',
    brand: 'Tata Motors',
    model: 'Nexon EV 2024',
    year: 2024,
    startingPrice: 1449000,
    emiFrom: 14999,
    thumbnailUrl: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/141879/nexon-ev-exterior-right-front-three-quarter-7.jpeg',
    images: [
      'https://imgd.aeplcdn.com/664x374/n/cw/ec/141879/nexon-ev-exterior-right-front-three-quarter-7.jpeg'
    ],
    fuelTypes: ['Electric'],
    transmissions: ['Automatic'],
    mileage: '465 km range',
    rating: 4.7,
    reviewCount: 310,
    isNew: true,
    isEV: true,
    seatingCapacity: 5,
    bootSpaceL: 350,
    powerBHP: 143,
    torqueNm: 215,
    safetyRating: 5,
    rangeKm: 465,
    description: 'Jharkhand\'s bestselling electric SUV with digital steering wheel, 12.3-inch cinematic touchscreen, V2L vehicle-to-load charging capability, and 465 km certified range.',
    features: ['465 km Range', 'V2L & V2V Charging', '12.3-inch Touchscreen', '360° HD Camera', 'JBL Sound System'],
    variants: [
      { id: 'v3-1', name: 'Creative Plus MR', price: 1449000, fuelType: 'Electric', transmission: 'Automatic', mileage: '325 km range' },
      { id: 'v3-2', name: 'Empowered Plus LR', price: 1949000, fuelType: 'Electric', transmission: 'Automatic', mileage: '465 km range' }
    ]
  }
];

export const mockDealers: Dealer[] = [
  {
    id: 'd1',
    name: 'Sudha Maruti Ranchi',
    brand: 'Maruti Suzuki',
    brands: ['Maruti Suzuki', 'NEXA'],
    location: 'Ranchi',
    address: 'Plot No. 45, Kanke Road, Near CMPDI, Ranchi, Jharkhand 834008',
    phone: '+91 92969 61232',
    rating: 4.8,
    reviewCount: 230,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80',
    openHours: '09:30 AM - 07:30 PM'
  },
  {
    id: 'd2',
    name: 'Premsons Hyundai Jamshedpur',
    brand: 'Hyundai',
    brands: ['Hyundai'],
    location: 'Jamshedpur',
    address: 'Holding No. 12, Main Road, Bistupur, Jamshedpur, Jharkhand 831001',
    phone: '+91 94311 09876',
    rating: 4.7,
    reviewCount: 185,
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80',
    openHours: '09:00 AM - 08:00 PM'
  }
];

export const mockOffers: Offer[] = [
  {
    id: 'off-1',
    title: 'Festival Season Mega Cash Discount',
    description: 'Get up to ₹65,000 cash discount on select Maruti Suzuki Swift & Baleno models in Ranchi.',
    discount: '₹65,000 OFF',
    validTill: '2026-08-31',
    category: 'Cashback',
    brand: 'Maruti Suzuki',
    code: 'FESTIVAL65',
    type: 'cashback'
  },
  {
    id: 'off-2',
    title: 'SBI Car Loan Special 8.5% Interest Rate',
    description: 'Zero processing fee and guaranteed lowest interest rate of 8.5% p.a. for all new SUV bookings.',
    discount: '8.5% Interest',
    validTill: '2026-09-15',
    category: 'Bank Offers',
    code: 'SBICAR2026',
    type: 'bank'
  }
];

export const mockBlogs: BlogPost[] = [
  {
    id: 'b1',
    title: 'Top 5 New Cars Under ₹10 Lakh in Ranchi (2026 Edition)',
    excerpt: 'Detailed comparison of Swift 2024, Hyundai Exter, Tata Punch, Baleno, and Brezza for Jharkhand roads.',
    image: 'https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Buying Guide',
    date: 'August 10, 2026',
    readTime: '6 min read',
    slug: 'top-5-cars-under-10-lakh-ranchi-2026'
  }
];

export const mockReviews: Review[] = [
  {
    id: 'r1',
    name: 'Rohan Sharma',
    avatar: 'RS',
    rating: 5,
    vehicle: 'Maruti Suzuki Swift 2024',
    comment: 'Buying my new Swift from Sudha Maruti via BuyWheels was seamless! Got ₹12,000 lower price quote and delivery within 4 days in Ranchi.',
    location: 'Ranchi',
    date: 'August 2026',
    verified: true
  }
];
