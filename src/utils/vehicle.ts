import type { Vehicle } from '../types';
import { vehicleColorsData } from './vehicleColors';

export type { VehicleColor } from './vehicleColors';
export const vehicleColors = vehicleColorsData;

// 1. Kia Seltos
export const kiaSeltos: Vehicle = {
  id: "kia-seltos-2026",
  slug: "kia-seltos",
  category: "car",
  brand: "Kia",
  model: "Seltos",
  year: 2026,
  startingPrice: 1099900,
  emiFrom: 20790,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/kia/seltos/kia-seltos-7-1784704041.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/seltos/kia-seltos-6-1784704036.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/seltos/kia-seltos-2-1784704014.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/seltos/kia-seltos-4-1784704025.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/seltos/kia-seltos-0-1784704004.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/seltos/kia-seltos-5-1784704030.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/seltos/kia-seltos-3-1784704020.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/seltos/kia-seltos-1-1784704009.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/kia/seltos/kia-seltos-7-1784704041.png",
  fuelTypes: ["Petrol", "Diesel"],
  transmissions: ["Manual", "Automatic", "DCT", "CVT", "iMT"],
  mileage: "17.0 - 20.7 kmpl",
  engineCC: 1497,
  powerBHP: 158,
  torqueNm: 253,
  bootSpaceL: 447,
  groundClearance: 190,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.3,
  reviewCount: 1420,
  isNew: true,
  isBestSeller: true,
  isEV: false,
  description: "The Kia Seltos, now in its second-generation avatar, offers sharper styling, modern technology, and multiple powertrain choices. Built on the K3 platform with enhanced structural rigidity, it features the Trinity Panoramic Display, dual-pane sunroof, Level 2 ADAS suite, and dual-zone climate control.",
  features: [
    "Trinity Panoramic Display (Dual 10.25-inch Screens)",
    "Dual-Zone Automatic Climate Control",
    "Level 2 ADAS Suite with 17 Autonomous Features",
    "Dual-Pane Panoramic Sunroof",
    "360-Degree HD Camera with Blind View Monitor",
    "Ventilated Front Seats with 8-Way Power Driver Seat",
    "Bose 8-Speaker Premium Sound System",
    "6 Airbags Standard Across All Variants",
    "Electronic Stability Control (ESC) & Hill Assist",
    "Wireless Smartphone Charger",
    "Smart Pure Air Purifier with Virus Protection",
    "Kia Connect Connected Car Tech (50+ Features)"
  ],
  colors: [
    "Frost Blue",
    "Aurora Black Pearl",
    "Glacier White Pearl",
    "Gravity Grey",
    "Imperial Blue",
    "Ivory Silver Gloss",
    "Magma Red",
    "Morning Haze",
    "Pewter Olive"
  ],
  pros: [
    "Sharp, bold exterior styling with signature Tiger Nose grille and LED light bar",
    "Feature-loaded cabin with Trinity Panoramic Display and Bose audio system",
    "Wide array of engine options including powerful 1.5L Turbo Petrol (160 PS)",
    "Comprehensive Level 2 ADAS and robust standard safety equipment"
  ],
  cons: [
    "Firm ride quality over sharp road imperfections",
    "Rear middle seat is narrow for long trips",
    "Top-spec GTX+ and X-Line variants command a high price tag"
  ],
  variants: [
    {
      id: "ks-v1",
      name: "HTE 1.5 Petrol MT",
      price: 1099900,
      fuelType: "Petrol",
      transmission: "Manual",
      engineCC: 1497,
      powerBHP: 113,
      torqueNm: 144,
      mileageKmpl: 17.0,
      features: ["6 Airbags Standard", "ESC & Hill Start Assist", "Digital Instrument Cluster", "All Wheel Disc Brakes", "Rear AC Vents"]
    },
    {
      id: "ks-v2",
      name: "HTK 1.5 Petrol MT",
      price: 1229000,
      fuelType: "Petrol",
      transmission: "Manual",
      engineCC: 1497,
      powerBHP: 113,
      torqueNm: 144,
      mileageKmpl: 17.0,
      features: ["8-inch Touchscreen Infotainment", "Wireless Android Auto & Apple CarPlay", "Rear View Camera", "Projector Headlamps", "Steering Mounted Controls"]
    },
    {
      id: "ks-v3",
      name: "HTX 1.5 Petrol CVT",
      price: 1679000,
      fuelType: "Petrol",
      transmission: "CVT",
      engineCC: 1497,
      powerBHP: 113,
      torqueNm: 144,
      mileageKmpl: 17.7,
      features: ["10.25-inch Touchscreen Infotainment", "LED Headlamps & Sequential Turn Indicators", "Dual-Zone Automatic Climate Control", "Ambient Lighting", "17-inch Alloy Wheels"]
    },
    {
      id: "ks-v4",
      name: "GTX+ 1.5 Turbo Petrol DCT",
      price: 1999000,
      fuelType: "Petrol",
      transmission: "DCT",
      engineCC: 1482,
      powerBHP: 158,
      torqueNm: 253,
      mileageKmpl: 17.9,
      features: ["Level 2 ADAS (17 Autonomous Features)", "360-Degree HD Camera", "Electronic Parking Brake with Auto Hold", "18-inch Alloy Wheels", "Rain Sensing Wipers"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "kia_d1_ranchi",
      dealerName: "Speed Kia Ranchi",
      location: "Kanke Road, Ranchi, Jharkhand",
      price: 1099900,
      discount: 35000,
      rating: 4.8
    },
    {
      dealerId: "kia_d2_jamshedpur",
      dealerName: "Autobahn Kia Jamshedpur",
      location: "Bistupur, Jamshedpur, Jharkhand",
      price: 1105000,
      discount: 40000,
      rating: 4.7
    }
  ]
};

// 2. Kia Sonet
export const kiaSonet: Vehicle = {
  id: "kia-sonet-2026",
  slug: "kia-sonet",
  category: "car",
  brand: "Kia",
  model: "Sonet",
  year: 2026,
  startingPrice: 799000,
  emiFrom: 15100,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/kia/sonet/kia-sonet-0-1772081526.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/sonet/kia-sonet-7-1772081529.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/sonet/kia-sonet-3-1772081528.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/sonet/kia-sonet-5-1772081528.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/sonet/kia-sonet-1-1772081527.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/sonet/kia-sonet-6-1772081529.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/sonet/kia-sonet-4-1772081528.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/sonet/kia-sonet-2-1772081527.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/kia/sonet/kia-sonet-0-1772081526.png",
  fuelTypes: ["Petrol", "Diesel"],
  transmissions: ["Manual", "Automatic", "DCT", "iMT"],
  mileage: "18.2 - 22.3 kmpl",
  engineCC: 1197,
  powerBHP: 120,
  torqueNm: 172,
  bootSpaceL: 385,
  groundClearance: 205,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.5,
  reviewCount: 1680,
  isNew: true,
  isBestSeller: true,
  isEV: false,
  description: "The new Kia Sonet brings aggressive design, Level 1 ADAS safety tech, dual 10.25-inch displays, ventilated front seats, and a punchy 1.0L Turbo petrol engine option.",
  features: [
    "Dual 10.25-inch HD Screen Setup",
    "Level 1 ADAS Suite (10 Autonomous Features)",
    "Ventilated Front Seats",
    "4-Way Power Adjustable Driver Seat",
    "Bose 7-Speaker Premium Audio System",
    "LED Crown Jewel Headlamps & Star Map LED DRLs",
    "6 Airbags Standard Across All Trims",
    "Electric Sunroof"
  ],
  colors: [
    "Pewter Olive",
    "Intense Red",
    "Aurora Black Pearl",
    "Glacier White Pearl",
    "Gravity Grey",
    "Sparkling Silver",
    "Imperial Blue"
  ],
  pros: [
    "Loaded with segment-first features including ventilated seats and ADAS",
    "Refined diesel and punchy turbo-petrol engine options",
    "Muscular SUV design with high ground clearance (205mm)"
  ],
  cons: [
    "Rear legroom is slightly tight for tall adult passengers",
    "Ride quality is on the firmer side"
  ],
  variants: [
    {
      id: "ksn-v1",
      name: "HTE 1.2 Petrol MT",
      price: 799000,
      fuelType: "Petrol",
      transmission: "Manual",
      engineCC: 1197,
      powerBHP: 82,
      torqueNm: 115,
      mileageKmpl: 18.4,
      features: ["6 Airbags", "ESC & Hill Assist", "Front Power Windows", "Manual AC", "Rear AC Vents"]
    },
    {
      id: "ksn-v2",
      name: "HTX 1.0 Turbo Petrol DCT",
      price: 1239000,
      fuelType: "Petrol",
      transmission: "DCT",
      engineCC: 998,
      powerBHP: 120,
      torqueNm: 172,
      mileageKmpl: 19.2,
      features: ["10.25-inch Touchscreen", "Electric Sunroof", "Drive Modes", "Paddle Shifters", "LED Headlamps"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "kia_d1_ranchi",
      dealerName: "Speed Kia Ranchi",
      location: "Kanke Road, Ranchi, Jharkhand",
      price: 799000,
      discount: 25000,
      rating: 4.8
    }
  ]
};

// 3. Kia Carens
export const kiaCarens: Vehicle = {
  id: "kia-carens-2026",
  slug: "kia-carens",
  category: "car",
  brand: "Kia",
  model: "Carens",
  year: 2026,
  startingPrice: 1052000,
  emiFrom: 19800,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/kia/carens/kia-carens-0-1767933180.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/carens/kia-carens-7-1767933186.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/carens/kia-carens-3-1767933183.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/carens/kia-carens-5-1767933184.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/carens/kia-carens-1-1767933181.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/carens/kia-carens-6-1767933185.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/carens/kia-carens-4-1767933184.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/carens/kia-carens-2-1767933181.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/kia/carens/kia-carens-0-1767933180.png",
  fuelTypes: ["Petrol", "Diesel"],
  transmissions: ["Manual", "Automatic", "DCT", "iMT"],
  mileage: "16.5 - 21.0 kmpl",
  engineCC: 1482,
  powerBHP: 160,
  torqueNm: 253,
  bootSpaceL: 216,
  groundClearance: 195,
  safetyRating: 5,
  seatingCapacity: 7,
  rating: 4.6,
  reviewCount: 1890,
  isNew: true,
  isBestSeller: true,
  isEV: false,
  description: "The Kia Carens is a premium 6 and 7-seater recreational vehicle offering impressive cabin space, one-touch electric tumble second-row seats, 6 airbags standard, and powerful engine options.",
  features: [
    "One-Touch Electric Tumble 2nd Row Seats",
    "10.25-inch HD Touchscreen Navigation with Kia Connect",
    "Bose Premium 8-Speaker Sound System",
    "Ventilated Front Seats",
    "SkyLight Panoramic Sunroof",
    "6 Airbags Standard Across All Variants",
    "Roof-mounted AC Vents for 2nd and 3rd Rows"
  ],
  colors: [
    "Imperial Blue",
    "Intense Red",
    "Gravity Grey",
    "Sparkling Silver",
    "Glacier White Pearl",
    "Aurora Black Pearl"
  ],
  pros: [
    "Exceptional 3-row seating space and legroom for all passengers",
    "Feature-rich interior with electric tumble seats",
    "Smooth and responsive 1.5L Turbo Petrol (160 PS) engine"
  ],
  cons: [
    "Exterior styling looks more MPV than traditional SUV",
    "Third-row seat height is low for adults on long journeys"
  ],
  variants: [
    {
      id: "kc-v1",
      name: "Premium 1.5 Petrol 7-Str",
      price: 1052000,
      fuelType: "Petrol",
      transmission: "Manual",
      engineCC: 1497,
      powerBHP: 115,
      torqueNm: 144,
      mileageKmpl: 16.5,
      features: ["6 Airbags", "All-Wheel Disc Brakes", "ESC", "Digital Instrument Cluster", "Tire Pressure Monitoring"]
    },
    {
      id: "kc-v2",
      name: "Luxury Plus 1.5 Turbo DCT 6-Str",
      price: 1967000,
      fuelType: "Petrol",
      transmission: "DCT",
      engineCC: 1482,
      powerBHP: 160,
      torqueNm: 253,
      mileageKmpl: 17.5,
      features: ["Bose Sound System", "Ventilated Seats", "SkyLight Sunroof", "Wireless Phone Charger", "Ambient Lighting"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "kia_d1_ranchi",
      dealerName: "Speed Kia Ranchi",
      location: "Kanke Road, Ranchi, Jharkhand",
      price: 1052000,
      discount: 30000,
      rating: 4.8
    }
  ]
};

// 4. Kia EV6
export const kiaEv6: Vehicle = {
  id: "kia-ev6-2026",
  slug: "kia-ev6",
  category: "ev",
  brand: "Kia",
  model: "EV6",
  year: 2026,
  startingPrice: 6095000,
  emiFrom: 115000,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/kia/ev6/kia-ev6-5-1766210337.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/ev6/kia-ev6-4-1766210337.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/ev6/kia-ev6-0-1766210334.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/ev6/kia-ev6-2-1766210335.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/ev6/kia-ev6-6-1766210338.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/ev6/kia-ev6-3-1766210336.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/ev6/kia-ev6-1-1766210335.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/ev6/kia-ev6-7-1766210338.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/kia/ev6/kia-ev6-5-1766210337.png",
  fuelTypes: ["Electric"],
  transmissions: ["Automatic"],
  mileage: "708 km range",
  rangeKm: 708,
  engineCC: 0,
  powerBHP: 325,
  torqueNm: 605,
  bootSpaceL: 520,
  groundClearance: 178,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.8,
  reviewCount: 420,
  isNew: true,
  isBestSeller: false,
  isEV: true,
  description: "The Kia EV6 is an ultra-modern all-electric crossover built on the E-GMP architecture. Featuring 800V ultra-fast charging capability (10 to 80% in 18 minutes), dual-motor AWD producing 325 PS and 605 Nm, and up to 708 km certified driving range.",
  features: [
    "77.4 kWh High-Density Lithium-Ion Battery Pack",
    "800V Ultra-Fast Charging (10-80% in 18 minutes)",
    "Dual-Motor All-Wheel Drive (AWD)",
    "Augmented Reality Head-Up Display (AR-HUD)",
    "Meridian 14-Speaker Surround Sound System",
    "Vehicle-to-Load (V2L) Power Outlet Technology",
    "Level 2 ADAS Suite with 21 Features"
  ],
  colors: [
    "Moonscape Matte",
    "Yacht Blue",
    "Runway Red",
    "Aurora Black Pearl",
    "Snow White Pearl"
  ],
  pros: [
    "Blistering acceleration (0-100 km/h in 5.2 seconds)",
    "Segment-defining 800V charging speeds and long real-world range",
    "Futuristic E-GMP crossover styling and opulent interior"
  ],
  cons: [
    "High import duty pricing relative to local rivals",
    "Low ground clearance for off-road tracks"
  ],
  variants: [
    {
      id: "kev6-v1",
      name: "GT-Line RWD",
      price: 6095000,
      fuelType: "Electric",
      transmission: "Automatic",
      rangeKm: 708,
      powerBHP: 229,
      torqueNm: 350,
      features: ["77.4 kWh Battery", "AR-HUD", "V2L Function", "Meridian Audio", "Level 2 ADAS"]
    },
    {
      id: "kev6-v2",
      name: "GT-Line AWD",
      price: 6595000,
      fuelType: "Electric",
      transmission: "Automatic",
      rangeKm: 650,
      powerBHP: 325,
      torqueNm: 605,
      features: ["Dual Motor AWD", "0-100 km/h in 5.2s", "Sunroof", "Flush Door Handles", "Smart Tailgate"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "kia_d1_ranchi",
      dealerName: "Speed Kia Ranchi",
      location: "Kanke Road, Ranchi, Jharkhand",
      price: 6095000,
      discount: 75000,
      rating: 4.8
    }
  ]
};

// 5. Kia Carnival
export const kiaCarnival: Vehicle = {
  id: "kia-carnival-2026",
  slug: "kia-carnival",
  category: "car",
  brand: "Kia",
  model: "Carnival",
  year: 2026,
  startingPrice: 6390000,
  emiFrom: 120500,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/kia/carnival/kia-carnival-7-1766209787.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/carnival/kia-carnival-6-1766209786.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/carnival/kia-carnival-2-1766209784.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/carnival/kia-carnival-5-1766209786.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/carnival/kia-carnival-3-1766209784.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/carnival/kia-carnival-1-1766209783.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/kia/carnival/kia-carnival-7-1766209787.png",
  fuelTypes: ["Diesel"],
  transmissions: ["Automatic"],
  mileage: "14.8 kmpl",
  engineCC: 2151,
  powerBHP: 193,
  torqueNm: 441,
  bootSpaceL: 540,
  groundClearance: 180,
  safetyRating: 5,
  seatingCapacity: 7,
  rating: 4.9,
  reviewCount: 310,
  isNew: true,
  isBestSeller: false,
  isEV: false,
  description: "The 4th-generation Kia Carnival Limousine sets benchmark luxury with VIP rear power relaxation seats, dual electric sunroofs, power sliding doors, and Level 2 ADAS suite.",
  features: [
    "2nd-Row VIP Power Relaxation Seats with Leg Support & Massage",
    "Dual Electric Sunroofs",
    "Smart Power Sliding Rear Doors & Power Tailgate",
    "Dual 12.3-inch Curved Panoramic Displays",
    "Bose 12-Speaker Premium Sound System",
    "Level 2 ADAS Suite (23 Autonomous Features)",
    "3-Zone Automatic Climate Control"
  ],
  colors: [
    "Glacier White Pearl",
    "Deep Chroma Blue",
    "Aurora Black Pearl"
  ],
  pros: [
    "Unrivaled first-class VIP lounge seating experience",
    "Powerful 2.2L Smartstream Diesel engine with smooth 8-speed automatic",
    "Extremely spacious and feature-laden cabin"
  ],
  cons: [
    "Large vehicle footprint can be challenging to park in narrow spaces",
    "Commanding luxury price tag"
  ],
  variants: [
    {
      id: "kcarn-v1",
      name: "Limousine Plus 2.2 Diesel AT",
      price: 6390000,
      fuelType: "Diesel",
      transmission: "Automatic",
      engineCC: 2151,
      powerBHP: 193,
      torqueNm: 441,
      mileageKmpl: 14.8,
      features: ["VIP Relaxation Seats", "Dual Sunroofs", "Bose 12-Speaker Audio", "Level 2 ADAS", "Power Sliding Doors"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "kia_d1_ranchi",
      dealerName: "Speed Kia Ranchi",
      location: "Kanke Road, Ranchi, Jharkhand",
      price: 6390000,
      discount: 50000,
      rating: 4.8
    }
  ]
};

// 6. Kia Syros
export const kiaSyros: Vehicle = {
  id: "kia-syros-2026",
  slug: "kia-syros",
  category: "car",
  brand: "Kia",
  model: "Syros",
  year: 2026,
  startingPrice: 900000,
  emiFrom: 17000,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/kia/syros/kia-syros-7-1777884966.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/syros/kia-syros-0-1777884964.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/syros/kia-syros-4-1777884965.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/syros/kia-syros-2-1777884964.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/syros/kia-syros-6-1777884965.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/syros/kia-syros-1-1777884964.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/syros/kia-syros-3-1777884965.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/syros/kia-syros-5-1777884965.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/kia/syros/kia-syros-7-1777884966.png",
  fuelTypes: ["Petrol", "Diesel"],
  transmissions: ["Manual", "Automatic"],
  mileage: "18.0 - 21.0 kmpl",
  engineCC: 1197,
  powerBHP: 120,
  torqueNm: 172,
  bootSpaceL: 390,
  groundClearance: 200,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.5,
  reviewCount: 150,
  isNew: true,
  isBestSeller: false,
  isEV: false,
  description: "The upcoming Kia Syros compact SUV slotting between Sonet and Seltos features futuristic boxy crossover design, expansive cabin headroom, dual-screen setup, panoramic sunroof, and Level 2 ADAS.",
  features: [
    "Futuristic EV-Inspired Boxy SUV Styling",
    "Dual 10.25-inch Touchscreen & Digital Cluster",
    "Panoramic Sunroof",
    "Ventilated Front & Rear Lounge Seats",
    "Level 2 ADAS Suite",
    "Flush Pop-out Door Handles",
    "6 Airbags Standard"
  ],
  colors: [
    "Frost Blue",
    "Pewter Olive",
    "Aurora Black Pearl",
    "Glacier White Pearl"
  ],
  pros: [
    "Distinctive boxy design with maximum interior space and headroom",
    "High ground clearance and SUV stance",
    "Loaded with premium convenience and safety tech"
  ],
  cons: [
    "Polarizing design for traditional SUV lovers"
  ],
  variants: [
    {
      id: "ksyr-v1",
      name: "HTX 1.0 Turbo Petrol MT",
      price: 900000,
      fuelType: "Petrol",
      transmission: "Manual",
      engineCC: 998,
      powerBHP: 120,
      torqueNm: 172,
      mileageKmpl: 18.5,
      features: ["Panoramic Sunroof", "Dual Displays", "LED Headlamps", "6 Airbags", "Rear AC Vents"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "kia_d1_ranchi",
      dealerName: "Speed Kia Ranchi",
      location: "Kanke Road, Ranchi, Jharkhand",
      price: 900000,
      discount: 20000,
      rating: 4.8
    }
  ]
};

// Array of all Kia Vehicles
export const kiaVehicles: Vehicle[] = [
  kiaSeltos,
  kiaSonet,
  kiaCarens,
  kiaEv6,
  kiaCarnival,
  kiaSyros
];


// 7. Tata Sierra
export const tataSierra: Vehicle = {
  id: "tata-sierra-2026",
  slug: "tata-sierra",
  category: "car",
  brand: "Tata",
  model: "Sierra",
  year: 2026,
  startingPrice: 1500000,
  emiFrom: 28500,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/tata/sierra/tata-sierra-0-1768365444.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/sierra/tata-sierra-7-1768365448.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/sierra/tata-sierra-3-1768365446.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/sierra/tata-sierra-5-1768365447.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/sierra/tata-sierra-1-1768365445.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/sierra/tata-sierra-6-1768365447.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/sierra/tata-sierra-4-1768365446.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/sierra/tata-sierra-2-1768365445.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/tata/sierra/tata-sierra-0-1768365444.png",
  fuelTypes: ["Petrol", "Electric"],
  transmissions: ["Manual", "Automatic"],
  mileage: "18.0 kmpl / 500 km range",
  engineCC: 1498,
  powerBHP: 170,
  torqueNm: 280,
  bootSpaceL: 450,
  groundClearance: 205,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.8,
  reviewCount: 450,
  isNew: true,
  isBestSeller: false,
  isEV: false,
  description: "The iconic Tata Sierra returns as a next-generation SUV featuring legendary curved glasshouse rear windows, futuristic twin digital screens, Level 2 ADAS, panoramic sunroof, and ultra-refined turbo petrol & EV powertrains.",
  features: [
    "Iconic Curved Glasshouse Rear Design",
    "Dual 10.25-inch Touchscreen & Digital Cluster",
    "Level 2 ADAS Autonomous Safety Suite",
    "Panoramic Skyroof",
    "Ventilated Front Seats",
    "Flush Door Handles",
    "JBL 9-Speaker Premium Sound System",
    "Wireless Apple CarPlay & Android Auto"
  ],
  colors: [
    "Calypso Blue",
    "Pristine White",
    "Daytona Grey",
    "Organic Green"
  ],
  pros: [
    "Nostalgic iconic glasshouse styling combined with modern futuristic cues",
    "Spacious lounge-like cabin with premium JBL audio and ADAS",
    "Refined 1.5L TGDi Turbo Petrol (170 PS) engine"
  ],
  cons: [
    "3-row seating option not available"
  ],
  variants: [
    {
      id: "ts-v1",
      name: "Smart +",
      price: 1500000,
      fuelType: "Petrol",
      transmission: "Manual",
      engineCC: 1498,
      powerBHP: 170,
      torqueNm: 280,
      mileageKmpl: 18.0,
      features: ["LED Headlamps", "Digital Instrument Cluster", "6 Airbags", "Rear AC Vents"]
    },
    {
      id: "ts-v2",
      name: "Creative +",
      price: 1850000,
      fuelType: "Petrol",
      transmission: "Automatic",
      engineCC: 1498,
      powerBHP: 170,
      torqueNm: 280,
      mileageKmpl: 17.5,
      features: ["Panoramic Sunroof", "Level 2 ADAS", "Wireless Charging", "360 Surround Camera"]
    },
    {
      id: "ts-v3",
      name: "Empowered + EV",
      price: 2200000,
      fuelType: "Electric",
      transmission: "Automatic",
      rangeKm: 500,
      powerBHP: 215,
      torqueNm: 310,
      features: ["60 kWh Battery Pack", "V2L Charging", "Ventilated Memory Seats", "JBL Audio"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "tata_d1_ranchi",
      dealerName: "TML Motors Ranchi",
      location: "Kanke Road, Ranchi, Jharkhand",
      price: 1500000,
      discount: 35000,
      rating: 4.8
    },
    {
      dealerId: "tata_d2_jamshedpur",
      dealerName: "ASL Motors Jamshedpur",
      location: "Bistupur, Jamshedpur, Jharkhand",
      price: 1505000,
      discount: 40000,
      rating: 4.7
    }
  ]
};

// 8. Hyundai Creta
export const hyundaiCreta: Vehicle = {
  id: "hyundai-creta-2026",
  slug: "hyundai-creta",
  category: "car",
  brand: "Hyundai",
  model: "Creta",
  year: 2026,
  startingPrice: 1099000,
  emiFrom: 20700,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/creta/hyundai-creta-1-1766205711.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/creta/hyundai-creta-8-1766205715.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/creta/hyundai-creta-4-1766205712.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/creta/hyundai-creta-6-1766205714.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/creta/hyundai-creta-2-1766205711.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/creta/hyundai-creta-7-1766205714.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/creta/hyundai-creta-5-1766205713.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/creta/hyundai-creta-3-1766205712.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/hyundai/creta/hyundai-creta-1-1766205711.png",
  fuelTypes: ["Petrol", "Diesel"],
  transmissions: ["Manual", "Automatic", "CVT", "DCT"],
  mileage: "17.4 - 21.8 kmpl",
  engineCC: 1497,
  powerBHP: 158,
  torqueNm: 253,
  bootSpaceL: 433,
  groundClearance: 190,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.7,
  reviewCount: 2400,
  isNew: true,
  isBestSeller: true,
  isEV: false,
  description: "The Hyundai Creta facelift sets new standards in the mid-size SUV segment with its bold parametric black chrome grille, horizon LED DRLs, quad-beam LED headlamps, dual 10.25-inch connected screens, 8-way powered driver seat, Level 2 ADAS, and voice-enabled panoramic sunroof.",
  features: [
    "Dual 10.25-inch Integrated Infotainment & Digital Driver Display",
    "Level 2 ADAS Suite with 19 Autonomous Features",
    "Voice-Enabled Smart Panoramic Sunroof",
    "Bose 8-Speaker Premium Audio System",
    "Ventilated Front Seats & 8-Way Power Driver Seat",
    "360-Degree HD Camera with Blind View Monitor",
    "Dual-Zone Automatic Climate Control",
    "6 Airbags Standard Across All Variants",
    "Hyundai Bluelink Connected Tech (70+ Features)",
    "Wireless Smartphone Charger with Cooling Pad"
  ],
  colors: [
    "Abyss Black",
    "Atlas White",
    "Titan Grey",
    "Ranger Khaki",
    "Fiery Red",
    "Robust Emerald Pearl"
  ],
  pros: [
    "Futuristic exterior styling with full-width connected LED lighting",
    "Refined and fuel-efficient Petrol, Turbo-Petrol, and Diesel engines",
    "Ultra-plush cabin featuring Level 2 ADAS and Bose premium audio",
    "High resale value and extensive Hyundai service network"
  ],
  cons: [
    "Firm ride quality on 17-inch wheels over sharp bumps",
    "Base variants miss out on key tech equipment"
  ],
  variants: [
    {
      id: "cr-v1",
      name: "E 1.5 Petrol MT",
      price: 1099000,
      fuelType: "Petrol",
      transmission: "Manual",
      engineCC: 1497,
      powerBHP: 113,
      torqueNm: 144,
      mileageKmpl: 17.4,
      features: ["6 Airbags Standard", "ABS with EBD", "All 4 Disc Brakes", "Manual AC", "Digital Cluster"]
    },
    {
      id: "cr-v2",
      name: "EX 1.5 Petrol MT",
      price: 1221000,
      fuelType: "Petrol",
      transmission: "Manual",
      engineCC: 1497,
      powerBHP: 113,
      torqueNm: 144,
      mileageKmpl: 17.4,
      features: ["8-inch Touchscreen", "Wireless Apple CarPlay/Android Auto", "Steering Controls", "Shark Fin Antenna"]
    },
    {
      id: "cr-v3",
      name: "S(O) 1.5 Petrol CVT",
      price: 1582000,
      fuelType: "Petrol",
      transmission: "CVT",
      engineCC: 1497,
      powerBHP: 113,
      torqueNm: 144,
      mileageKmpl: 17.7,
      features: ["Panoramic Sunroof", "Dual-Zone AC", "Drive Modes", "17-inch Alloy Wheels", "LED Headlamps"]
    },
    {
      id: "cr-v4",
      name: "SX(O) 1.5 Turbo Petrol DCT",
      price: 1999000,
      fuelType: "Petrol",
      transmission: "DCT",
      engineCC: 1482,
      powerBHP: 158,
      torqueNm: 253,
      mileageKmpl: 18.4,
      features: ["Level 2 ADAS", "360 Camera", "Bose 8-Speaker Audio", "Ventilated Front Seats", "8-Way Power Seat"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "hyn_d1_ranchi",
      dealerName: "Mukesh Hyundai Ranchi",
      location: "Bariatu Road, Ranchi, Jharkhand",
      price: 1099000,
      discount: 25000,
      rating: 4.8
    },
    {
      dealerId: "hyn_d2_jamshedpur",
      dealerName: "Singh Hyundai Jamshedpur",
      location: "Adityapur, Jamshedpur, Jharkhand",
      price: 1102000,
      discount: 30000,
      rating: 4.7
    }
  ]
};

// 9. Tata Nexon
export const tataNexon: Vehicle = {
  id: "tata-nexon-2026",
  slug: "tata-nexon",
  category: "car",
  brand: "Tata",
  model: "Nexon",
  year: 2026,
  startingPrice: 799000,
  emiFrom: 15000,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/tata/nexon/tata-nexon-0-1784198581.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/nexon/tata-nexon-6-1766220426.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/nexon/tata-nexon-7-1766220427.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/nexon/tata-nexon-2-1766220423.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/nexon/tata-nexon-5-1766220426.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/nexon/tata-nexon-3-1766220424.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/nexon/tata-nexon-1-1766220423.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/nexon/tata-nexon-4-1766220425.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/tata/nexon/tata-nexon-0-1784198581.png",
  fuelTypes: ["Petrol", "Diesel"],
  transmissions: ["Manual", "Automatic", "DCT"],
  mileage: "17.0 - 23.2 kmpl",
  engineCC: 1199,
  powerBHP: 118,
  torqueNm: 170,
  bootSpaceL: 382,
  groundClearance: 208,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.6,
  reviewCount: 3100,
  isNew: true,
  isBestSeller: true,
  isEV: false,
  description: "The Tata Nexon facelift features aggressive coupe-SUV styling, 5-star GNCAP safety rating, 10.25-inch Harman touchscreen infotainment, 10.25-inch digital cockpit with full map display, 360-degree HD camera, ventilated seats, and multiple engine & transmission options including 7-speed DCA.",
  features: [
    "10.25-inch Touchscreen Infotainment by Harman",
    "10.25-inch Full Digital Instrument Cluster with Map Navigation",
    "360-Degree Surround View HD Camera",
    "Ventilated Leatherette Front Seats",
    "Voice-Assisted Electric Sunroof",
    "JBL 9-Speaker Audio System with Subwoofer",
    "6 Airbags Standard Across All Trims",
    "Sequential LED DRLs & Animated Taillamps",
    "Wireless Apple CarPlay & Android Auto",
    "Air Purifier with AQI Display"
  ],
  colors: [
    "Fearless Purple",
    "Creative Ocean",
    "Flame Red",
    "Daytona Grey",
    "Pristine White",
    "Pure Grey"
  ],
  pros: [
    "Unbeatable 5-star GNCAP safety rating with 6 standard airbags",
    "High 208mm ground clearance handles deep potholes with ease",
    "Futuristic interior with dual 10.25-inch screens and JBL sound",
    "Wide powertrain matrix: Petrol, Diesel, DCA, and AMT options"
  ],
  cons: [
    "Touch-based climate controls require getting used to",
    "Rear headroom slightly reduced due to sleek roofline"
  ],
  variants: [
    {
      id: "nx-v1",
      name: "Smart 1.2 Revotron Petrol MT",
      price: 799000,
      fuelType: "Petrol",
      transmission: "Manual",
      engineCC: 1199,
      powerBHP: 118,
      torqueNm: 170,
      mileageKmpl: 17.4,
      features: ["6 Airbags", "LED Headlamps", "Digital Instrument Cluster", "ESP with Hill Hold", "Drive Modes"]
    },
    {
      id: "nx-v2",
      name: "Pure S 1.2 Petrol MT",
      price: 920000,
      fuelType: "Petrol",
      transmission: "Manual",
      engineCC: 1199,
      powerBHP: 118,
      torqueNm: 170,
      mileageKmpl: 17.4,
      features: ["Electric Sunroof", "7-inch Touchscreen", "Android Auto & Apple CarPlay", "Rear AC Vents", "Roof Rails"]
    },
    {
      id: "nx-v3",
      name: "Creative + 1.2 Petrol DCA",
      price: 1170000,
      fuelType: "Petrol",
      transmission: "DCT",
      engineCC: 1199,
      powerBHP: 118,
      torqueNm: 170,
      mileageKmpl: 17.0,
      features: ["10.25-inch Touchscreen", "Sequential DRLs", "16-inch Alloy Wheels", "Paddle Shifters", "Rear Camera"]
    },
    {
      id: "nx-v4",
      name: "Fearless + S 1.5 Diesel AMT",
      price: 1499000,
      fuelType: "Diesel",
      transmission: "Automatic",
      engineCC: 1497,
      powerBHP: 113,
      torqueNm: 260,
      mileageKmpl: 23.2,
      features: ["360 HD Camera", "Ventilated Seats", "JBL 9-Speaker Audio", "Wireless Charger", "Air Purifier"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "tata_d1_ranchi",
      dealerName: "TML Motors Ranchi",
      location: "Kanke Road, Ranchi, Jharkhand",
      price: 799000,
      discount: 20000,
      rating: 4.8
    },
    {
      dealerId: "tata_d2_jamshedpur",
      dealerName: "ASL Motors Jamshedpur",
      location: "Bistupur, Jamshedpur, Jharkhand",
      price: 802000,
      discount: 25000,
      rating: 4.7
    }
  ]
};

// 10. Mahindra Scorpio N
export const mahindraScorpioN: Vehicle = {
  id: "mahindra-scorpio-n-2026",
  slug: "mahindra-scorpio-n",
  category: "car",
  brand: "Mahindra",
  model: "Scorpio N",
  year: 2026,
  startingPrice: 1360000,
  emiFrom: 25500,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/scorpio/mahindra-scorpio-3-1767930813.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/scorpio/mahindra-scorpio-2-1767930812.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/scorpio/mahindra-scorpio-6-1767930815.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/scorpio/mahindra-scorpio-0-1767930811.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/scorpio/mahindra-scorpio-4-1767930813.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/scorpio/mahindra-scorpio-1-1767930811.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/scorpio/mahindra-scorpio-7-1767930815.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/scorpio/mahindra-scorpio-5-1767930814.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/mahindra/scorpio/mahindra-scorpio-3-1767930813.png",
  fuelTypes: ["Petrol", "Diesel"],
  transmissions: ["Manual", "Automatic"],
  mileage: "15.0 - 16.5 kmpl",
  engineCC: 1997,
  powerBHP: 200,
  torqueNm: 380,
  bootSpaceL: 460,
  groundClearance: 187,
  safetyRating: 5,
  seatingCapacity: 7,
  rating: 4.8,
  reviewCount: 1800,
  isNew: false,
  isBestSeller: true,
  isEV: false,
  description: "The Big Daddy of SUVs, Mahindra Scorpio N delivers commanding road presence, body-on-frame toughness, 200 PS mStallion Turbo Petrol and 175 PS mHawk Diesel engines, 4XPLOR terrain management system, Sony 3D immersive sound, and 5-star Global NCAP safety rating.",
  features: [
    "4XPLOR Intelligent Terrain Management System (Snow, Mud, Sand, Normal)",
    "Sony 12-Speaker 3D Immersive Audio System with Dual Subwoofers",
    "8-inch Touchscreen Infotainment with AdrenoX Connected Car Tech",
    "Frequency Dependent Damping (FDD) & Watt's Link Suspension",
    "Electric Sunroof with Tilt Function",
    "6 Airbags & 5-Star Global NCAP Safety Rating",
    "Driver Drowsiness Detection System",
    "Dual-Zone Automatic Climate Control",
    "Wireless Apple CarPlay & Android Auto",
    "Power 6-Way Adjustable Driver Seat"
  ],
  colors: [
    "Deep Forest",
    "Everest White",
    "Napoli Black",
    "Dazzling Silver",
    "Grand Canyon",
    "Midnight Black"
  ],
  pros: [
    "Imposing size and true SUV road presence with high seating position",
    "Ultra-powerful mStallion Petrol (200 PS) & mHawk Diesel (175 PS) engines",
    "Capable 4XPLOR 4WD system tackles tough off-road terrains easily",
    "Plush 6 & 7-seater cabin with Sony 3D 12-speaker audio"
  ],
  cons: [
    "Boot space with all 3 rows up is limited",
    "Heavy steering feel during tight low-speed parking maneuvers"
  ],
  variants: [
    {
      id: "sn-v1",
      name: "Z2 2.0 Petrol MT 7-Str",
      price: 1360000,
      fuelType: "Petrol",
      transmission: "Manual",
      engineCC: 1997,
      powerBHP: 200,
      torqueNm: 370,
      mileageKmpl: 15.0,
      features: ["Touchscreen Infotainment", "Electric Power Steering", "All-Wheel Disc Brakes", "ABS with EBD", "Rear AC Vents"]
    },
    {
      id: "sn-v2",
      name: "Z4 2.2 Diesel MT 4WD 7-Str",
      price: 1720000,
      fuelType: "Diesel",
      transmission: "Manual",
      engineCC: 2184,
      powerBHP: 175,
      torqueNm: 370,
      mileageKmpl: 16.5,
      features: ["4XPLOR Terrain System", "ESP with Hill Hold", "Android Auto", "Cruise Control", "Rear Wiper & Washer"]
    },
    {
      id: "sn-v3",
      name: "Z8 2.2 Diesel AT 7-Str",
      price: 2050000,
      fuelType: "Diesel",
      transmission: "Automatic",
      engineCC: 2184,
      powerBHP: 175,
      torqueNm: 400,
      mileageKmpl: 16.0,
      features: ["Sony 12-Speaker 3D Audio", "Electric Sunroof", "Dual Zone Climate Control", "Leatherette Seats", "18-inch Alloys"]
    },
    {
      id: "sn-v4",
      name: "Z8L 2.2 Diesel AT 4WD 7-Str",
      price: 2450000,
      fuelType: "Diesel",
      transmission: "Automatic",
      engineCC: 2184,
      powerBHP: 175,
      torqueNm: 400,
      mileageKmpl: 15.5,
      features: ["Wireless Charger", "Front Camera with Parking Sensors", "Powered Driver Seat", "Driver Drowsiness Alert", "Sony 3D Audio"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "mhd_d1_ranchi",
      dealerName: "Mahindra Central Ranchi",
      location: "Main Road, Ranchi, Jharkhand",
      price: 1360000,
      discount: 35000,
      rating: 4.9
    },
    {
      dealerId: "mhd_d2_jamshedpur",
      dealerName: "Narbheram Mahindra Jamshedpur",
      location: "Bistupur, Jamshedpur, Jharkhand",
      price: 1365000,
      discount: 40000,
      rating: 4.8
    }
  ]
};

// 11. Tata Punch
export const tataPunch: Vehicle = {
  id: "tata-punch-2026",
  slug: "tata-punch",
  category: "car",
  brand: "Tata",
  model: "Punch",
  year: 2026,
  startingPrice: 612000,
  emiFrom: 11500,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/tata/punch/tata-punch-0-1769487768.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/punch/tata-punch-7-1769487773.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/punch/tata-punch-3-1769487770.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/punch/tata-punch-5-1769487771.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/punch/tata-punch-1-1769487768.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/punch/tata-punch-6-1769487772.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/punch/tata-punch-4-1769487771.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/punch/tata-punch-2-1769487769.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/tata/punch/tata-punch-0-1769487768.png",
  fuelTypes: ["Petrol", "CNG"],
  transmissions: ["Manual", "Automatic"],
  mileage: "18.8 - 26.9 km/kg",
  engineCC: 1199,
  powerBHP: 86,
  torqueNm: 115,
  bootSpaceL: 366,
  groundClearance: 187,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.5,
  reviewCount: 1500,
  isNew: true,
  isBestSeller: true,
  isEV: false,
  description: "The Tata Punch micro-SUV combines tough SUV stance with compact city maneuverability. Built on ALFA architecture with a 5-star GNCAP safety rating, it features 90-degree opening doors, 7-inch Harman infotainment, voice-assisted sunroof, and twin-cylinder CNG option.",
  features: [
    "Voice-Assisted Electric Sunroof",
    "7-inch Touchscreen Infotainment by Harman with 6 Speakers",
    "90-Degree Opening Doors for Easy Entry/Exit",
    "5-Star Global NCAP Safety Rating",
    "16-inch Diamond-Cut Alloy Wheels",
    "Automatic Climate Control & Push Button Start",
    "Cooled Glovebox & Front Armrest",
    "Dual Airbags & Cornering Fog Lamps",
    "Dual-Cylinder iCNG Tech (Preserves Boot Space)"
  ],
  colors: [
    "Tornado Blue",
    "Calypso Red",
    "Tropical Mist",
    "Atomic Orange",
    "Daytona Grey",
    "Orcus White"
  ],
  pros: [
    "Top-tier 5-star GNCAP safety rating in micro-SUV segment",
    "High seating position gives command over traffic",
    "Suspension absorbs potholes comfortably",
    "iCNG dual-cylinder version retains functional boot space"
  ],
  cons: [
    "Engine can feel vocal under hard acceleration",
    "AMT gearshifts are relaxed rather than sporty"
  ],
  variants: [
    {
      id: "pn-v1",
      name: "Pure 1.2 Petrol MT",
      price: 612000,
      fuelType: "Petrol",
      transmission: "Manual",
      engineCC: 1199,
      powerBHP: 86,
      torqueNm: 115,
      mileageKmpl: 20.1,
      features: ["Dual Airbags", "ABS with EBD", "Engine Start/Stop", "Front Power Windows", "90-Degree Doors"]
    },
    {
      id: "pn-v2",
      name: "Adventure 1.2 Petrol MT",
      price: 700000,
      fuelType: "Petrol",
      transmission: "Manual",
      engineCC: 1199,
      powerBHP: 86,
      torqueNm: 115,
      mileageKmpl: 20.1,
      features: ["3.5-inch Infotainment", "4 Speakers", "Steering Mounted Controls", "All 4 Power Windows", "Remote Keyless Entry"]
    },
    {
      id: "pn-v3",
      name: "Accomplished Dazzle 1.2 Petrol AMT",
      price: 835000,
      fuelType: "Petrol",
      transmission: "Automatic",
      engineCC: 1199,
      powerBHP: 86,
      torqueNm: 115,
      mileageKmpl: 18.8,
      features: ["7-inch Touchscreen", "16-inch Alloys", "Push Button Start", "Rear View Camera", "LED DRLs"]
    },
    {
      id: "pn-v4",
      name: "Creative Flagship 1.2 iCNG",
      price: 990000,
      fuelType: "CNG",
      transmission: "Manual",
      engineCC: 1199,
      powerBHP: 73.5,
      torqueNm: 103,
      mileageKmpl: 26.9,
      features: ["Voice Sunroof", "Dual Cylinder iCNG", "Auto Climate Control", "Cooled Glovebox", "iRA Connected Tech"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "tata_d1_ranchi",
      dealerName: "TML Motors Ranchi",
      location: "Kanke Road, Ranchi, Jharkhand",
      price: 612000,
      discount: 15000,
      rating: 4.8
    }
  ]
};

// 12. Mahindra Thar
export const mahindraThar: Vehicle = {
  id: "mahindra-thar-2026",
  slug: "mahindra-thar",
  category: "car",
  brand: "Mahindra",
  model: "Thar",
  year: 2026,
  startingPrice: 1125000,
  emiFrom: 21000,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/thar/mahindra-thar-8-1771924749.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/thar/mahindra-thar-7-1771924748.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/thar/mahindra-thar-3-1771924745.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/thar/mahindra-thar-5-1771924746.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/thar/mahindra-thar-1-1771924744.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/thar/mahindra-thar-6-1771924747.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/thar/mahindra-thar-4-1771924746.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/thar/mahindra-thar-2-1771924745.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/mahindra/thar/mahindra-thar-8-1771924749.png",
  fuelTypes: ["Petrol", "Diesel"],
  transmissions: ["Manual", "Automatic"],
  mileage: "13.0 - 15.5 kmpl",
  engineCC: 2184,
  powerBHP: 150,
  torqueNm: 320,
  bootSpaceL: 220,
  groundClearance: 226,
  safetyRating: 4,
  seatingCapacity: 4,
  rating: 4.7,
  reviewCount: 2100,
  isNew: false,
  isBestSeller: true,
  isEV: false,
  description: "The Mahindra Thar is India's most iconic 4x4 off-roader, boasting 226mm ground clearance, 650mm water wading ability, Mechanical Locking Differential, removable convertible/hardtop roof choices, mStallion Turbo Petrol and mHawk Diesel engines.",
  features: [
    "Shift-on-the-Fly 4x4 Manual Transfer Case with Low Ratio",
    "Mechanical Locking Rear Differential (MLD) & Brake Locking Differential",
    "Drizzle-Resistant 7-inch Touchscreen with Off-Road Stats Display",
    "226mm High Ground Clearance & 650mm Water Wading Capability",
    "Built-in Roll Cage with 4-Star Global NCAP Safety Rating",
    "Removable Doors & Washable Floor with Drain Plugs",
    "18-inch Deep Silver Alloy Wheels with All-Terrain Tyres",
    "Roof-Mounted Speakers for Outdoor Acoustic Clarity"
  ],
  colors: [
    "Red Rage",
    "Galaxy Grey",
    "Napoli Black",
    "Aquamarine",
    "Everest White",
    "Blazing Bronze"
  ],
  pros: [
    "Unbeatable off-road capability and 4x4 ruggedness",
    "Head-turning road presence and timeless design",
    "Strong mHawk Diesel and mStallion Turbo Petrol engines",
    "Choice of RWD, 4x4, Hardtop, and Convertible options"
  ],
  cons: [
    "Bumpy highway ride on uneven surfaces",
    "Limited rear luggage boot space with seats up"
  ],
  variants: [
    {
      id: "th-v1",
      name: "AX (O) 1.5 Diesel RWD Hard Top",
      price: 1125000,
      fuelType: "Diesel",
      transmission: "Manual",
      engineCC: 1497,
      powerBHP: 117,
      torqueNm: 300,
      mileageKmpl: 15.5,
      features: ["Rear Wheel Drive", "Hard Top", "Dual Airbags", "ESP with Roll Mitigation", "16-inch Steel Wheels"]
    },
    {
      id: "th-v2",
      name: "LX 2.0 Turbo Petrol RWD AT Hard Top",
      price: 1400000,
      fuelType: "Petrol",
      transmission: "Automatic",
      engineCC: 1997,
      powerBHP: 150,
      torqueNm: 320,
      mileageKmpl: 13.0,
      features: ["7-inch Touchscreen", "18-inch Alloy Wheels", "Automatic Gearbox", "Cruise Control", "Roof Mounted Speakers"]
    },
    {
      id: "th-v3",
      name: "LX 2.2 Diesel 4WD Manual Hard Top",
      price: 1550000,
      fuelType: "Diesel",
      transmission: "Manual",
      engineCC: 2184,
      powerBHP: 130,
      torqueNm: 300,
      mileageKmpl: 15.0,
      features: ["4x4 Shift Low Case", "Mechanical Locking Differential", "Drizzle Proof Touchscreen", "Hard Top Roof", "Tyre Direction Indicator"]
    },
    {
      id: "th-v4",
      name: "LX 2.2 Diesel 4WD Automatic Hard Top",
      price: 1760000,
      fuelType: "Diesel",
      transmission: "Automatic",
      engineCC: 2184,
      powerBHP: 130,
      torqueNm: 300,
      mileageKmpl: 14.5,
      features: ["6-Speed Automatic 4x4", "18-inch Alloys", "MLD", "ESP", "Brake Locking Differential"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "mhd_d1_ranchi",
      dealerName: "Mahindra Central Ranchi",
      location: "Main Road, Ranchi, Jharkhand",
      price: 1125000,
      discount: 20000,
      rating: 4.9
    }
  ]
};

// 13. Maruti Suzuki Swift
export const marutiSwift: Vehicle = {
  id: "maruti-swift-2026",
  slug: "maruti-suzuki-swift",
  category: "car",
  brand: "Maruti Suzuki",
  model: "Swift",
  year: 2026,
  startingPrice: 649000,
  emiFrom: 12200,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/maruti/swift/maruti-swift-7-1767861017.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/swift/maruti-swift-6-1767861016.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/swift/maruti-swift-2-1767861013.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/swift/maruti-swift-4-1767861015.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/swift/maruti-swift-0-1767861012.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/swift/maruti-swift-5-1767861015.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/swift/maruti-swift-3-1767861014.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/swift/maruti-swift-1-1767861013.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/maruti/swift/maruti-swift-7-1767861017.png",
  fuelTypes: ["Petrol", "CNG"],
  transmissions: ["Manual", "Automatic"],
  mileage: "24.8 - 25.75 kmpl",
  engineCC: 1197,
  powerBHP: 82,
  torqueNm: 112,
  bootSpaceL: 265,
  groundClearance: 163,
  safetyRating: 4,
  seatingCapacity: 5,
  rating: 4.5,
  reviewCount: 1200,
  isNew: true,
  isBestSeller: true,
  isEV: false,
  description: "The all-new 4th-generation Maruti Suzuki Swift features sporty styling, new Z-Series 1.2L 3-cylinder engine delivering up to 25.75 kmpl, 6 airbags standard, 9-inch SmartPlay Pro+ touchscreen, wireless charger, and Suzuki Connect.",
  features: [
    "All-New Z-Series 1.2L 3-Cylinder Fuel-Efficient Engine (25.75 kmpl)",
    "6 Airbags Standard Across All Variants",
    "9-inch SmartPlay Pro+ Touchscreen Infotainment System",
    "Wireless Smartphone Charger & Fast USB Type-C Ports",
    "Automatic Climate Control with Rear AC Vents",
    "LED Projector Headlamps with Signature DRLs",
    "Precision-Cut 15-inch Alloy Wheels",
    "Suzuki Connect with 40+ Telematics Features"
  ],
  colors: [
    "Luster Blue",
    "Novel Orange",
    "Sizzling Red",
    "Splendid Silver",
    "Magma Grey",
    "Pearl Arctic White"
  ],
  pros: [
    "Class-leading fuel efficiency of up to 25.75 kmpl",
    "6 airbags standard safety upgrade across all trims",
    "Fun-to-drive agile city handling and tight turning radius",
    "Extensive Maruti dealer service network and high resale value"
  ],
  cons: [
    "Engine performance is tuned more for economy than high-speed punch",
    "Boot capacity is modest compared to rivals"
  ],
  variants: [
    {
      id: "sw-v1",
      name: "LXi 1.2 Petrol MT",
      price: 649000,
      fuelType: "Petrol",
      transmission: "Manual",
      engineCC: 1197,
      powerBHP: 82,
      torqueNm: 112,
      mileageKmpl: 24.8,
      features: ["6 Airbags Standard", "ESP with Hill Hold", "ABS with EBD", "Remote Keyless Entry", "All 4 Power Windows"]
    },
    {
      id: "sw-v2",
      name: "VXi 1.2 Petrol MT",
      price: 729500,
      fuelType: "Petrol",
      transmission: "Manual",
      engineCC: 1197,
      powerBHP: 82,
      torqueNm: 112,
      mileageKmpl: 24.8,
      features: ["7-inch Touchscreen", "Wireless Apple CarPlay", "Steering Controls", "Full Wheel Covers", "Electrically Adjustable ORVMs"]
    },
    {
      id: "sw-v3",
      name: "ZXi 1.2 Petrol AGS",
      price: 879500,
      fuelType: "Petrol",
      transmission: "Automatic",
      engineCC: 1197,
      powerBHP: 82,
      torqueNm: 112,
      mileageKmpl: 25.75,
      features: ["LED Projector Headlamps", "15-inch Alloys", "Auto AC", "Rear AC Vents", "Wireless Charging"]
    },
    {
      id: "sw-v4",
      name: "ZXi+ 1.2 Petrol AGS Dual Tone",
      price: 964500,
      fuelType: "Petrol",
      transmission: "Automatic",
      engineCC: 1197,
      powerBHP: 82,
      torqueNm: 112,
      mileageKmpl: 25.75,
      features: ["9-inch SmartPlay Pro+", "Cruise Control", "Rear View Camera", "Precision Cut Alloys", "Dual-Tone Paint"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "ms_d1_ranchi",
      dealerName: "Sudha Arena Maruti Suzuki Ranchi",
      location: "Ratu Road, Ranchi, Jharkhand",
      price: 649000,
      discount: 20000,
      rating: 4.8
    },
    {
      dealerId: "ms_d2_jamshedpur",
      dealerName: "Premsons Maruti Jamshedpur",
      location: "Bistupur, Jamshedpur, Jharkhand",
      price: 651000,
      discount: 22000,
      rating: 4.7
    }
  ]
};

// 14. Maruti Suzuki Brezza
export const marutiBrezza: Vehicle = {
  id: "maruti-brezza-2026",
  slug: "maruti-suzuki-brezza",
  category: "car",
  brand: "Maruti Suzuki",
  model: "Brezza",
  year: 2026,
  startingPrice: 834000,
  emiFrom: 15600,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/maruti/baleno/maruti-baleno-4-1766214578.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/baleno/maruti-baleno-2-1766214577.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/baleno/maruti-baleno-7-1766214579.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/baleno/maruti-baleno-0-1766214576.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/baleno/maruti-baleno-5-1766214578.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/baleno/maruti-baleno-3-1766214577.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/baleno/maruti-baleno-1-1766214576.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/baleno/maruti-baleno-6-1766214579.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/maruti/baleno/maruti-baleno-4-1766214578.png",
  fuelTypes: ["Petrol", "CNG"],
  transmissions: ["Manual", "Automatic"],
  mileage: "19.8 - 25.5 km/kg",
  engineCC: 1462,
  powerBHP: 102,
  torqueNm: 137,
  bootSpaceL: 328,
  groundClearance: 198,
  safetyRating: 4,
  seatingCapacity: 5,
  rating: 4.4,
  reviewCount: 1750,
  isNew: false,
  isBestSeller: true,
  isEV: false,
  description: "The Maruti Suzuki Brezza urban compact SUV offers Electric Sunroof, Head-Up Display (HUD), 360-degree view camera, 9-inch SmartPlay Pro+ touchscreen, 6 airbags, refined K15C Smart Hybrid engine, and factory-fitted S-CNG.",
  features: [
    "Electric Sunroof with Tilt Function",
    "Head-Up Display (HUD) showing Speed, RPM, & Navigation",
    "360-Degree View HD Camera with Dynamic Guidelines",
    "9-inch SmartPlay Pro+ Touchscreen with Surround Sense by ARKAMYS",
    "Refined 1.5L K15C DualJet Engine with Smart Hybrid Tech",
    "6 Airbags & Electronic Stability Program (ESP)",
    "Wireless Smartphone Charger & Rear AC Vents",
    "16-inch Dual-Tone Precision Alloy Wheels"
  ],
  colors: [
    "Sizzling Red",
    "Brave Khakhi",
    "Exuberant Blue",
    "Magma Grey",
    "Splendid Silver",
    "Pearl Arctic White"
  ],
  pros: [
    "Refined and quiet 1.5L 4-cylinder engine with Smart Hybrid efficiency",
    "First Maruti compact SUV with Electric Sunroof and HUD",
    "Comfortable suspension compliance over rough city roads",
    "Factory-fitted S-CNG option available"
  ],
  cons: [
    "Top ZXi+ automatic variant carries a high price tag",
    "No diesel or turbo-petrol engine option"
  ],
  variants: [
    {
      id: "bz-v1",
      name: "LXi 1.5 Petrol MT",
      price: 834000,
      fuelType: "Petrol",
      transmission: "Manual",
      engineCC: 1462,
      powerBHP: 102,
      torqueNm: 137,
      mileageKmpl: 19.8,
      features: ["ESP with Hill Hold", "Dual Airbags", "Rear AC Vents", "All 4 Power Windows", "Halogen Projector Headlamps"]
    },
    {
      id: "bz-v2",
      name: "VXi 1.5 Petrol MT",
      price: 969500,
      fuelType: "Petrol",
      transmission: "Manual",
      engineCC: 1462,
      powerBHP: 102,
      torqueNm: 137,
      mileageKmpl: 19.8,
      features: ["7-inch Touchscreen", "Auto Climate Control", "Steering Mounted Controls", "Roof Rails", "Rear Defogger"]
    },
    {
      id: "bz-v3",
      name: "ZXi 1.5 Petrol MT Sunroof",
      price: 1114500,
      fuelType: "Petrol",
      transmission: "Manual",
      engineCC: 1462,
      powerBHP: 102,
      torqueNm: 137,
      mileageKmpl: 19.8,
      features: ["Electric Sunroof", "Dual LED Projector Headlamps", "16-inch Alloys", "Wireless CarPlay", "Push Button Start"]
    },
    {
      id: "bz-v4",
      name: "ZXi+ 1.5 Petrol AT Dual Tone",
      price: 1398000,
      fuelType: "Petrol",
      transmission: "Automatic",
      engineCC: 1462,
      powerBHP: 102,
      torqueNm: 137,
      mileageKmpl: 19.8,
      features: ["Head-Up Display", "360 Camera", "6 Airbags", "9-inch Touchscreen", "Paddle Shifters"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "ms_d1_ranchi",
      dealerName: "Sudha Arena Maruti Suzuki Ranchi",
      location: "Ratu Road, Ranchi, Jharkhand",
      price: 834000,
      discount: 25000,
      rating: 4.8
    }
  ]
};

// 15. Mahindra XUV700
export const mahindraXuv700: Vehicle = {
  id: "mahindra-xuv700-2026",
  slug: "mahindra-xuv700",
  category: "car",
  brand: "Mahindra",
  model: "XUV700",
  year: 2026,
  startingPrice: 1399000,
  emiFrom: 26000,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/xuv700/mahindra-xuv700-18-1766746037.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/xuv700/mahindra-xuv700-6-1766746033.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/xuv700/mahindra-xuv700-2-1766746031.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/xuv700/mahindra-xuv700-4-1766746032.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/xuv700/mahindra-xuv700-0-1766746030.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/xuv700/mahindra-xuv700-5-1766746032.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/xuv700/mahindra-xuv700-3-1766746031.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/xuv700/mahindra-xuv700-1-1766746031.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/mahindra/xuv700/mahindra-xuv700-18-1766746037.png",
  fuelTypes: ["Petrol", "Diesel"],
  transmissions: ["Manual", "Automatic"],
  mileage: "15.0 - 16.5 kmpl",
  engineCC: 1997,
  powerBHP: 200,
  torqueNm: 380,
  bootSpaceL: 450,
  groundClearance: 200,
  safetyRating: 5,
  seatingCapacity: 7,
  rating: 4.8,
  reviewCount: 2900,
  isNew: false,
  isBestSeller: true,
  isEV: false,
  description: "The Mahindra XUV700 sets architectural standards with dual 10.25-inch superscreen cockpit, Level 2 ADAS suite, Sony 3D 12-speaker audio with sound building technology, 200 PS mStallion Petrol and 185 PS mHawk Diesel powertrains.",
  features: [
    "Dual 10.25-inch Integrated Superscreen Cockpit",
    "Level 2 ADAS with Adaptive Cruise Control & Lane Keep Assist",
    "Sony 3D 12-Speaker Audio with Custom 3D Soundstage",
    "Panoramic Skyroof (Largest in Segment)",
    "Flush Smart Door Handles with Auto-Deploy",
    "6 & 7-Seater Configuration with Memory Driver Seat",
    "Zip, Zap, Zoom Drive Modes & Custom Mode",
    "Wireless Apple CarPlay, Android Auto & Alexa Built-in"
  ],
  colors: [
    "Electric Blue",
    "Midnight Black",
    "Dazzling Silver",
    "Red Rage",
    "Everest White"
  ],
  pros: [
    "Monocoque chassis delivers sedan-like ride quality and high-speed stability",
    "Powerful 200 PS Turbo Petrol and 185 PS Diesel engines",
    "Loaded tech cockpit with dual screens, Alexa, and Sony 3D sound",
    "Proven 5-star GNCAP safety with robust ADAS implementation"
  ],
  cons: [
    "Touchscreen UI has occasional software lag during initial boot",
    "Third-row knee room is best suited for kids on long journeys"
  ],
  variants: [
    {
      id: "xuv-v1",
      name: "MX 2.0 Petrol MT 5-Str",
      price: 1399000,
      fuelType: "Petrol",
      transmission: "Manual",
      engineCC: 1997,
      powerBHP: 200,
      torqueNm: 380,
      mileageKmpl: 16.0,
      features: ["8-inch Infotainment", "7-inch Instrument Cluster", "LED DRLs", "All 4 Disc Brakes", "Electric ORVMs"]
    },
    {
      id: "xuv-v2",
      name: "AX3 2.2 Diesel MT 7-Str",
      price: 1699000,
      fuelType: "Diesel",
      transmission: "Manual",
      engineCC: 2184,
      powerBHP: 185,
      torqueNm: 420,
      mileageKmpl: 16.5,
      features: ["Dual 10.25-inch Screens", "Wireless Android Auto & Apple CarPlay", "Amazon Alexa Built-in", "60-40 Split Seats"]
    },
    {
      id: "xuv-v3",
      name: "AX7 2.2 Diesel AT 7-Str",
      price: 2150000,
      fuelType: "Diesel",
      transmission: "Automatic",
      engineCC: 2184,
      powerBHP: 185,
      torqueNm: 450,
      mileageKmpl: 15.5,
      features: ["Level 2 ADAS", "Panoramic Skyroof", "Leatherette Seats", "18-inch Diamond Cut Alloys", "Dual Zone AC"]
    },
    {
      id: "xuv-v4",
      name: "AX7L 2.2 Diesel AT AWD 7-Str",
      price: 2579000,
      fuelType: "Diesel",
      transmission: "Automatic",
      engineCC: 2184,
      powerBHP: 185,
      torqueNm: 450,
      mileageKmpl: 15.0,
      features: ["Sony 3D 12-Speaker Audio", "360 Camera with Blind View Monitor", "Wireless Charger", "Electronic Parking Brake", "AWD"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "mhd_d1_ranchi",
      dealerName: "Mahindra Central Ranchi",
      location: "Main Road, Ranchi, Jharkhand",
      price: 1399000,
      discount: 30000,
      rating: 4.9
    }
  ]
};

// 16. Tata Harrier
export const tataHarrier: Vehicle = {
  id: "tata-harrier-2026",
  slug: "tata-harrier",
  category: "car",
  brand: "Tata",
  model: "Harrier",
  year: 2026,
  startingPrice: 1549000,
  emiFrom: 29000,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/tata/harrier/tata-harrier-0-1766203373.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/harrier/tata-harrier-6-1766203376.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/harrier/tata-harrier-7-1766203377.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/harrier/tata-harrier-2-1766203374.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/harrier/tata-harrier-5-1766203376.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/harrier/tata-harrier-3-1766203375.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/harrier/tata-harrier-1-1766203374.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/harrier/tata-harrier-4-1766203375.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/tata/harrier/tata-harrier-0-1766203373.png",
  fuelTypes: ["Diesel"],
  transmissions: ["Manual", "Automatic"],
  mileage: "14.6 - 16.8 kmpl",
  engineCC: 1956,
  powerBHP: 170,
  torqueNm: 350,
  bootSpaceL: 445,
  groundClearance: 205,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.7,
  reviewCount: 1650,
  isNew: true,
  isBestSeller: true,
  isEV: false,
  description: "The Tata Harrier SUV features aggressive OMEGA-Arc platform engineering derived from Land Rover D8, 12.3-inch touchscreen infotainment by Harman, Level 2 ADAS suite, 10-speaker JBL audio with subwoofer, gesture-controlled power tailgate, and 5-star Bharat NCAP rating.",
  features: [
    "12.3-inch Touchscreen Infotainment System by Harman",
    "10.25-inch Digital Cockpit with Navigation",
    "Level 2 ADAS Suite (11 Autonomous Features)",
    "JBL 10-Speaker Audio System with Subwoofer",
    "Gesture-Controlled Smart Powered Tailgate",
    "Ventilated Front Seats with Memory Function",
    "Voice-Assisted Panoramic Sunroof with Mood Lighting",
    "7 Airbags Standard Across Top Trims",
    "Terrain Response Modes (Normal, Rough, Wet)",
    "Wireless Apple CarPlay & Android Auto"
  ],
  colors: ["Sunlit Yellow", "Coral Red", "Pebble Grey", "Lunar White", "Oberon Black (Dark Edition)"],
  pros: [
    "Imposing road presence and muscular Land Rover-derived stance",
    "5-star Bharat NCAP safety with up to 7 airbags and Level 2 ADAS",
    "Spacious cabin with plush leatherette seats and JBL 10-speaker audio"
  ],
  cons: [
    "No petrol engine option currently available",
    "Steering feel can be slightly firm at low city speeds"
  ],
  variants: [
    { id: "th-v1", name: "Smart 2.0 Diesel MT", price: 1549000, fuelType: "Diesel", transmission: "Manual", engineCC: 1956, powerBHP: 170, torqueNm: 350, mileageKmpl: 16.8, features: ["LED Headlamps", "Digital Instrument Cluster", "6 Airbags", "ESP", "Tilt & Telescopic Steering"] },
    { id: "th-v2", name: "Pure + 2.0 Diesel MT", price: 1869000, fuelType: "Diesel", transmission: "Manual", engineCC: 1956, powerBHP: 170, torqueNm: 350, mileageKmpl: 16.8, features: ["10.25-inch Touchscreen", "Rear View Camera", "Drive Modes", "17-inch Alloy Wheels"] },
    { id: "th-v3", name: "Fearless + 2.0 Diesel AT Dark Edition", price: 2449000, fuelType: "Diesel", transmission: "Automatic", engineCC: 1956, powerBHP: 170, torqueNm: 350, mileageKmpl: 14.6, features: ["Level 2 ADAS", "JBL 10-Speaker Audio", "Gesture Tailgate", "Panoramic Sunroof", "Ventilated Seats"] }
  ],
  dealerPrices: [
    { dealerId: "tata_d1_ranchi", dealerName: "TML Motors Ranchi", location: "Kanke Road, Ranchi, Jharkhand", price: 1549000, discount: 35000, rating: 4.8 }
  ]
};

// 17. Tata Safari
export const tataSafari: Vehicle = {
  id: "tata-safari-2026",
  slug: "tata-safari",
  category: "car",
  brand: "Tata",
  model: "Safari",
  year: 2026,
  startingPrice: 1619000,
  emiFrom: 30500,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/tata/safari/tata-safari-0-1769770726.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/safari/tata-safari-6-1766236482.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/safari/tata-safari-7-1766236482.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/safari/tata-safari-2-1766236479.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/safari/tata-safari-5-1766236481.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/safari/tata-safari-3-1766236480.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/safari/tata-safari-1-1766236479.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/safari/tata-safari-4-1766236480.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/tata/safari/tata-safari-0-1769770726.png",
  fuelTypes: ["Diesel"],
  transmissions: ["Manual", "Automatic"],
  mileage: "14.5 - 16.3 kmpl",
  engineCC: 1956,
  powerBHP: 170,
  torqueNm: 350,
  bootSpaceL: 420,
  groundClearance: 205,
  safetyRating: 5,
  seatingCapacity: 7,
  rating: 4.8,
  reviewCount: 1920,
  isNew: true,
  isBestSeller: true,
  isEV: false,
  description: "The Tata Safari flagship 6 and 7-seater SUV built on OMEGA-Arc platform features ventilated 1st & 2nd row captain seats, 12.3-inch Harman touchscreen, 10-speaker JBL audio, Level 2 ADAS, gesture tailgate, and 5-star GNCAP & BNCAP safety ratings.",
  features: [
    "2nd-Row Ventilated Captain Seats with Winged Headrests",
    "12.3-inch Touchscreen Navigation by Harman",
    "JBL 10-Speaker Audio System with Subwoofer",
    "Level 2 ADAS Suite with 11 Autonomous Features",
    "Voice-Assisted Panoramic Sunroof with Ambient Lighting",
    "Gesture-Controlled Smart Power Tailgate",
    "Memory Driver Seat & Powered Co-Driver Seat with Boss Mode",
    "7 Airbags Standard Across Top Persona Trims"
  ],
  colors: ["Cosmic Gold", "Stellar Frost", "Stardust Ash", "Galactic Sapphire", "Oberon Black"],
  pros: [
    "First-class 2nd-row ventilated captain seating option",
    "5-star BNCAP safety with 7 airbags and Level 2 ADAS",
    "Powerful 2.0L Kryotec Diesel engine (170 PS) with smooth 6-speed AT"
  ],
  cons: [
    "No petrol powertrain option available",
    "Infotainment screen occasionally boot-up delayed"
  ],
  variants: [
    { id: "tsaf-v1", name: "Smart 2.0 Diesel MT 7-Str", price: 1619000, fuelType: "Diesel", transmission: "Manual", engineCC: 1956, powerBHP: 170, torqueNm: 350, mileageKmpl: 16.3, features: ["LED DRLs", "Digital Instrument Cluster", "6 Airbags", "ESP", "Rear AC Vents"] },
    { id: "tsaf-v2", name: "Accomplished + 2.0 Diesel AT 6-Str", price: 2549000, fuelType: "Diesel", transmission: "Automatic", engineCC: 1956, powerBHP: 170, torqueNm: 350, mileageKmpl: 14.5, features: ["2nd-Row Ventilated Captain Seats", "JBL 10-Speaker Audio", "Level 2 ADAS", "Gesture Tailgate", "7 Airbags"] }
  ],
  dealerPrices: [
    { dealerId: "tata_d1_ranchi", dealerName: "TML Motors Ranchi", location: "Kanke Road, Ranchi, Jharkhand", price: 1619000, discount: 40000, rating: 4.8 }
  ]
};

// 18. Tata Altroz
export const tataAltroz: Vehicle = {
  id: "tata-altroz-2026",
  slug: "tata-altroz",
  category: "car",
  brand: "Tata",
  model: "Altroz",
  year: 2026,
  startingPrice: 664900,
  emiFrom: 12500,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/tata/altroz/tata-altroz-0-1766141604.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/altroz/tata-altroz-6-1766141614.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/altroz/tata-altroz-7-1766141614.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/altroz/tata-altroz-2-1766141606.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/altroz/tata-altroz-5-1766141613.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/altroz/tata-altroz-3-1766141606.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/altroz/tata-altroz-1-1766141605.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/altroz/tata-altroz-4-1766141613.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/tata/altroz/tata-altroz-0-1766141604.png",
  fuelTypes: ["Petrol", "Diesel", "CNG"],
  transmissions: ["Manual", "Automatic", "DCT"],
  mileage: "18.5 - 26.2 km/kg",
  engineCC: 1199,
  powerBHP: 110,
  torqueNm: 140,
  bootSpaceL: 345,
  groundClearance: 165,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.5,
  reviewCount: 1400,
  isNew: true,
  isBestSeller: false,
  isEV: false,
  description: "The Tata Altroz premium hatchback built on ALFA platform offers 5-star Global NCAP safety, 90-degree opening doors, 10.25-inch infotainment, wet-clutch DCA automatic transmission, voice-assisted sunroof, and dual-cylinder iCNG technology.",
  features: [
    "5-Star Global NCAP Safety Rating",
    "Wet-Clutch Dual-Clutch Automatic (DCA) Transmission",
    "10.25-inch Touchscreen Infotainment System",
    "90-Degree Door Opening for Effortless Entry",
    "Voice-Assisted Electric Sunroof",
    "Twin-Cylinder iCNG Tech (Retains Boot Space)",
    "Ventilated Front Leatherette Seats",
    "Air Purifier & Wireless Smartphone Charging"
  ],
  colors: ["Avenue White", "Harbour Blue", "Opera Blue", "High-Street Gold", "Downtown Red"],
  pros: [
    "5-star GNCAP crash test rating with rock-solid chassis build quality",
    "Smooth 6-speed wet-clutch DCA automatic transmission",
    "Wide array of engine options: Petrol, iTurbo, Diesel, and iCNG"
  ],
  cons: [
    "Naturally aspirated 1.2L petrol engine lacks low-end punch",
    "Rear legroom is adequate rather than class-leading"
  ],
  variants: [
    { id: "alt-v1", name: "XE 1.2 Petrol MT", price: 664900, fuelType: "Petrol", transmission: "Manual", engineCC: 1199, powerBHP: 86, torqueNm: 113, mileageKmpl: 19.3, features: ["Dual Airbags", "ABS with EBD", "Drive Modes", "90-Degree Doors"] },
    { id: "alt-v2", name: "XZ + S Lux 1.2 Petrol DCA", price: 999000, fuelType: "Petrol", transmission: "DCT", engineCC: 1199, powerBHP: 86, torqueNm: 113, mileageKmpl: 18.5, features: ["10.25-inch Display", "Sunroof", "Ventilated Seats", "360 Camera", "DCA Auto"] }
  ],
  dealerPrices: [
    { dealerId: "tata_d1_ranchi", dealerName: "TML Motors Ranchi", location: "Kanke Road, Ranchi, Jharkhand", price: 664900, discount: 20000, rating: 4.8 }
  ]
};

// 19. Tata Tiago
export const tataTiago: Vehicle = {
  id: "tata-tiago-2026",
  slug: "tata-tiago",
  category: "car",
  brand: "Tata",
  model: "Tiago",
  year: 2026,
  startingPrice: 564900,
  emiFrom: 10500,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/tata/tiago-facelift/tata-tiago-facelift-0-1779969867.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/tiago-facelift/tata-tiago-facelift-7-1779969869.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/tiago-facelift/tata-tiago-facelift-3-1779969868.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/tiago-facelift/tata-tiago-facelift-5-1779969869.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/tiago-facelift/tata-tiago-facelift-1-1779969868.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/tiago-facelift/tata-tiago-facelift-6-1779969869.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/tiago-facelift/tata-tiago-facelift-4-1779969868.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/tiago-facelift/tata-tiago-facelift-2-1779969868.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/tata/tiago-facelift/tata-tiago-facelift-0-1779969867.png",
  fuelTypes: ["Petrol", "CNG"],
  transmissions: ["Manual", "Automatic"],
  mileage: "19.0 - 26.4 km/kg",
  engineCC: 1199,
  powerBHP: 86,
  torqueNm: 113,
  bootSpaceL: 242,
  groundClearance: 170,
  safetyRating: 4,
  seatingCapacity: 5,
  rating: 4.4,
  reviewCount: 2200,
  isNew: false,
  isBestSeller: true,
  isEV: false,
  description: "The Tata Tiago compact hatchback offers 4-star GNCAP safety rating, 7-inch Harman touchscreen with 8-speaker audio, fully digital cluster, automatic climate control, and segment-first iCNG Automatic transmission.",
  features: [
    "4-Star Global NCAP Safety Rating",
    "Segment-First iCNG Automatic (AMT) Transmission",
    "7-inch Touchscreen Infotainment by Harman with 8 Speakers",
    "Fully Digital Instrument Cluster",
    "Automatic Climate Control",
    "Projector Headlamps with LED DRLs",
    "Dual Airbags & Corner Stability Control"
  ],
  colors: ["Midnight Plum", "Flame Red", "Daytona Grey", "Opal White", "Arizona Blue"],
  pros: [
    "Robust build quality with 4-star Global NCAP safety",
    "Segment-first iCNG AMT automatic variant for effortless commuting",
    "Premium 8-speaker Harman sound system"
  ],
  cons: [
    "3-cylinder engine vibrates at low idle speeds",
    "Boot space is reduced in standard CNG non-twin cylinder variant"
  ],
  variants: [
    { id: "tg-v1", name: "XE 1.2 Petrol MT", price: 564900, fuelType: "Petrol", transmission: "Manual", engineCC: 1199, powerBHP: 86, torqueNm: 113, mileageKmpl: 19.0, features: ["Dual Airbags", "ABS with EBD", "Digital Cluster", "Corner Stability Control"] },
    { id: "tg-v2", name: "XZ Plus 1.2 iCNG AMT", price: 879900, fuelType: "CNG", transmission: "Automatic", engineCC: 1199, powerBHP: 73.5, torqueNm: 95, mileageKmpl: 26.4, features: ["iCNG AMT", "7-inch Harman Touchscreen", "8 Speakers", "Auto AC", "Rear Camera"] }
  ],
  dealerPrices: [
    { dealerId: "tata_d1_ranchi", dealerName: "TML Motors Ranchi", location: "Kanke Road, Ranchi, Jharkhand", price: 564900, discount: 15000, rating: 4.8 }
  ]
};

// 20. Tata Curvv
export const tataCurvv: Vehicle = {
  id: "tata-curvv-2026",
  slug: "tata-curvv",
  category: "car",
  brand: "Tata",
  model: "Curvv",
  year: 2026,
  startingPrice: 999000,
  emiFrom: 18800,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/tata/curvv/tata-curvv-0-1769674441.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/curvv/tata-curvv-6-1766142173.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/curvv/tata-curvv-7-1766142174.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/curvv/tata-curvv-2-1766142168.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/curvv/tata-curvv-5-1766142172.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/curvv/tata-curvv-3-1766142171.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/curvv/tata-curvv-1-1766142168.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/curvv/tata-curvv-4-1766142172.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/tata/curvv/tata-curvv-0-1769674441.png",
  fuelTypes: ["Petrol", "Diesel"],
  transmissions: ["Manual", "DCT"],
  mileage: "15.0 - 21.5 kmpl",
  engineCC: 1498,
  powerBHP: 125,
  torqueNm: 225,
  bootSpaceL: 500,
  groundClearance: 208,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.7,
  reviewCount: 890,
  isNew: true,
  isBestSeller: true,
  isEV: false,
  description: "The Tata Curvv is India's first mass-market Coupe SUV featuring striking sloping roofline styling, 500L massive boot space, 12.3-inch Harman touchscreen, Level 2 ADAS, panoramic sunroof, flush door handles, and powerful Hyperion Gasoline Direct Injection (GDi) engine.",
  features: [
    "Distinctive Coupe SUV Silhouette with Flush Door Handles",
    "500L Massive Luggage Boot Capacity",
    "12.3-inch Touchscreen Infotainment System by Harman",
    "1.2L Hyperion GDi Turbo Petrol (125 PS) Engine",
    "Level 2 ADAS Autonomous Safety Suite (20 Features)",
    "Voice-Assisted Panoramic Sunroof",
    "Ventilated Leatherette Front Seats",
    "JBL 9-Speaker Audio with Subwoofer"
  ],
  colors: ["Gold Essence", "Flame Red", "Daytona Grey", "Pristine White", "Pure Grey"],
  pros: [
    "Unique head-turning Coupe SUV styling in mid-size segment",
    "Enormous 500-litre luggage boot capacity",
    "Punchy 125 PS Hyperion GDi turbo-petrol and 118 PS Kryojet diesel engines"
  ],
  cons: [
    "Sloping rear roofline slightly reduces rear seat headroom for tall passengers",
    "Rear view glass area is narrower due to coupe tailgate"
  ],
  variants: [
    { id: "cv-v1", name: "Smart 1.2 Revotron Petrol MT", price: 999000, fuelType: "Petrol", transmission: "Manual", engineCC: 1199, powerBHP: 120, torqueNm: 170, mileageKmpl: 17.5, features: ["LED Headlamps", "Digital Instrument Cluster", "6 Airbags", "ESP", "Flush Door Handles"] },
    { id: "cv-v2", name: "Accomplished + S 1.2 GDi DCA", price: 1699000, fuelType: "Petrol", transmission: "DCT", engineCC: 1198, powerBHP: 125, torqueNm: 225, mileageKmpl: 15.0, features: ["Level 2 ADAS", "Panoramic Sunroof", "12.3-inch Touchscreen", "JBL Audio", "Ventilated Seats"] }
  ],
  dealerPrices: [
    { dealerId: "tata_d1_ranchi", dealerName: "TML Motors Ranchi", location: "Kanke Road, Ranchi, Jharkhand", price: 999000, discount: 25000, rating: 4.8 }
  ]
};

// 21. Mahindra Thar Roxx
export const mahindraTharRoxx: Vehicle = {
  id: "mahindra-thar-roxx-2026",
  slug: "mahindra-thar-roxx",
  category: "car",
  brand: "Mahindra",
  model: "Thar Roxx",
  year: 2026,
  startingPrice: 1299000,
  emiFrom: 24500,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/thar-roxx/mahindra-thar-roxx-3-1767849893.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/thar-roxx/mahindra-thar-roxx-2-1767849892.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/thar-roxx/mahindra-thar-roxx-6-1767849894.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/thar-roxx/mahindra-thar-roxx-0-1767849891.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/thar-roxx/mahindra-thar-roxx-4-1767849893.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/thar-roxx/mahindra-thar-roxx-1-1767849891.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/thar-roxx/mahindra-thar-roxx-7-1767849895.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/thar-roxx/mahindra-thar-roxx-5-1767849894.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/mahindra/thar-roxx/mahindra-thar-roxx-3-1767849893.png",
  fuelTypes: ["Petrol", "Diesel"],
  transmissions: ["Manual", "Automatic"],
  mileage: "12.4 - 15.2 kmpl",
  engineCC: 2184,
  powerBHP: 177,
  torqueNm: 380,
  bootSpaceL: 447,
  groundClearance: 219,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.9,
  reviewCount: 2300,
  isNew: true,
  isBestSeller: true,
  isEV: false,
  description: "The Mahindra Thar Roxx 5-Door SUV redefines rugged luxury with 5-door family practicality, 4XPLANET 4WD system with CrawlSmart & IntelliTurn, 10.25-inch dual screens, Harman Kardon 9-speaker audio, panoramic sunroof, Level 2 ADAS, and 5-star BNCAP safety rating.",
  features: [
    "4XPLANET 4WD with IntelliTurn & CrawlSmart Technology",
    "Harmon Kardon 9-Speaker Audio System with Subwoofer",
    "Dual 10.25-inch Touchscreen Infotainment & Digital Driver Cluster",
    "Level 2 ADAS Suite with 10 Autonomous Features",
    "Panoramic Skyroof (Segment-First on 4x4 Off-Roader)",
    "Ventilated Leatherette Front Seats & 6-Way Powered Driver Seat",
    "5-Star Bharat NCAP Safety Rating with 6 Airbags Standard",
    "Watts Link Rear Suspension with Frequency Dependent Damping (FDD)"
  ],
  colors: ["Stealth Black", "Everest White", "Deep Forest", "Tank Yellow", "Nebula Blue", "Battleship Grey"],
  pros: [
    "Complete 5-door family practicality with spacious 447L boot space",
    "Extremely powerful mStallion TGDi Petrol (177 PS) & mHawk Diesel (175 PS) engines",
    "5-star BNCAP safety with Level 2 ADAS and Harman Kardon sound"
  ],
  cons: [
    "Soft top/convertible roof option not available on 5-door Roxx",
    "Wide turning radius requires extra space in tight city U-turns"
  ],
  variants: [
    { id: "trx-v1", name: "MX1 2.0 TGDi Petrol MT RWD", price: 1299000, fuelType: "Petrol", transmission: "Manual", engineCC: 1997, powerBHP: 162, torqueNm: 330, mileageKmpl: 13.5, features: ["10.25-inch Touchscreen", "LED Projector Headlamps", "6 Airbags", "Rear AC Vents", "Push Button Start"] },
    { id: "trx-v2", name: "AX7L 2.2 mHawk Diesel AT 4x4", price: 2249000, fuelType: "Diesel", transmission: "Automatic", engineCC: 2184, powerBHP: 175, torqueNm: 370, mileageKmpl: 14.2, features: ["4XPLANET 4WD", "Panoramic Sunroof", "Harman Kardon Audio", "Level 2 ADAS", "Ventilated Seats"] }
  ],
  dealerPrices: [
    { dealerId: "mhd_d1_ranchi", dealerName: "Mahindra Central Ranchi", location: "Main Road, Ranchi, Jharkhand", price: 1299000, discount: 25000, rating: 4.9 }
  ]
};

// 22. Mahindra XUV 3XO
export const mahindraXuv3xo: Vehicle = {
  id: "mahindra-xuv-3xo-2026",
  slug: "mahindra-xuv-3xo",
  category: "car",
  brand: "Mahindra",
  model: "XUV 3XO",
  year: 2026,
  startingPrice: 749000,
  emiFrom: 14200,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/xuv-3xo/mahindra-xuv-3xo-5-1767875397.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/xuv-3xo/mahindra-xuv-3xo-4-1767875396.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/xuv-3xo/mahindra-xuv-3xo-0-1767875393.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/xuv-3xo/mahindra-xuv-3xo-2-1767875395.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/xuv-3xo/mahindra-xuv-3xo-6-1767875398.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/xuv-3xo/mahindra-xuv-3xo-3-1767875395.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/xuv-3xo/mahindra-xuv-3xo-1-1767875394.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/xuv-3xo/mahindra-xuv-3xo-7-1767875398.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/mahindra/xuv-3xo/mahindra-xuv-3xo-5-1767875397.png",
  fuelTypes: ["Petrol", "Diesel"],
  transmissions: ["Manual", "Automatic"],
  mileage: "18.2 - 21.2 kmpl",
  engineCC: 1197,
  powerBHP: 130,
  torqueNm: 230,
  bootSpaceL: 364,
  groundClearance: 201,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.8,
  reviewCount: 1950,
  isNew: true,
  isBestSeller: true,
  isEV: false,
  description: "The Mahindra XUV 3XO compact SUV boasts segment-first Skyroof panoramic glass roof, Level 2 ADAS with 10 features, dual 10.25-inch screens, Harman Kardon 7-speaker audio, 0-60 km/h in 4.5 seconds, and 6 airbags standard.",
  features: [
    "Segment-First Skyroof (Largest Panoramic Sunroof in Segment)",
    "Level 2 ADAS Autonomous Safety Suite",
    "Dual 10.25-inch Touchscreen Infotainment & Digital Cluster",
    "Harman Kardon 7-Speaker Premium Audio with Subwoofer",
    "360-Degree Surround View HD Camera",
    "130 PS mStallion TGDi Turbo Petrol (0-60 km/h in 4.5s)",
    "Electronic Parking Brake with Auto Hold",
    "Dual-Zone Automatic Climate Control",
    "6 Airbags Standard Across All Variants"
  ],
  colors: ["Citron Yellow", "Deep Forest", "Dune Beige", "Everest White", "Galaxy Grey", "Nebula Blue", "Stealth Black"],
  pros: [
    "Segment-first Skyroof panoramic sunroof gives airiest cabin feel",
    "Most powerful 130 PS TGDi turbo petrol engine in compact SUV class",
    "Class-leading cabin width with ample rear 3-passenger seating space"
  ],
  cons: [
    "Boot space is improved but still slightly smaller than Brezza/Nexon",
    "White leatherette interior requires careful maintenance"
  ],
  variants: [
    { id: "3xo-v1", name: "MX1 1.2 mStallion Petrol MT", price: 749000, fuelType: "Petrol", transmission: "Manual", engineCC: 1197, powerBHP: 111, torqueNm: 200, mileageKmpl: 18.89, features: ["6 Airbags", "ESC", "Front & Rear Power Windows", "Rear AC Vents", "LED DRLs"] },
    { id: "3xo-v2", name: "AX7L 1.2 TGDi Petrol AT Skyroof", price: 1549000, fuelType: "Petrol", transmission: "Automatic", engineCC: 1197, powerBHP: 130, torqueNm: 230, mileageKmpl: 18.2, features: ["Skyroof Panoramic Sunroof", "Level 2 ADAS", "Harman Kardon Audio", "360 Camera", "Electronic Parking Brake"] }
  ],
  dealerPrices: [
    { dealerId: "mhd_d1_ranchi", dealerName: "Mahindra Central Ranchi", location: "Main Road, Ranchi, Jharkhand", price: 749000, discount: 15000, rating: 4.9 }
  ]
};

// 23. Mahindra Bolero Neo
export const mahindraBoleroNeo: Vehicle = {
  id: "mahindra-bolero-neo-2026",
  slug: "mahindra-bolero-neo",
  category: "car",
  brand: "Mahindra",
  model: "Bolero Neo",
  year: 2026,
  startingPrice: 995000,
  emiFrom: 18500,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/bolero-neo/mahindra-bolero-neo-0-1768637392.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/bolero-neo/mahindra-bolero-neo-2-1768637393.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/bolero-neo/mahindra-bolero-neo-5-1763208209.jpg",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/bolero-neo/mahindra-bolero-neo-1-1768637392.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/bolero-neo/mahindra-bolero-neo-3-1768637394.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/bolero-neo/mahindra-bolero-neo-4-1763208208.jpg",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/bolero-neo/mahindra-bolero-neo-3-1763208207.jpg",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/bolero-neo/mahindra-bolero-neo-8-1763208353.jpg"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/mahindra/bolero-neo/mahindra-bolero-neo-0-1768637392.png",
  fuelTypes: ["Diesel"],
  transmissions: ["Manual"],
  mileage: "17.2 kmpl",
  engineCC: 1493,
  powerBHP: 100,
  torqueNm: 260,
  bootSpaceL: 384,
  groundClearance: 180,
  safetyRating: 4,
  seatingCapacity: 7,
  rating: 4.5,
  reviewCount: 1100,
  isNew: false,
  isBestSeller: true,
  isEV: false,
  description: "The Mahindra Bolero Neo is a tough 7-seater body-on-frame compact SUV featuring mHawk100 diesel engine, Multi-Terrain Technology (MTT) mechanical locking differential, 7-inch touchscreen, and rugged steel body construction.",
  features: [
    "Multi-Terrain Technology (MTT) Rear Mechanical Locking Differential",
    "Third-Generation Body-on-Frame Chassis Architecture",
    "mHawk100 1.5L Diesel Engine with 260 Nm Torque",
    "7-Seater Configuration with Side-Facing Rear Seats",
    "7-inch Touchscreen Infotainment System",
    "Dual Airbags & ABS with EBD & Corner Braking Control",
    "Micro Hybrid Technology with Engine Stop-Start"
  ],
  colors: ["Rocky Beige", "Majestic Silver", "Highway Red", "Pearl White", "Napoli Black"],
  pros: [
    "True body-on-frame tough SUV construction tackles semi-urban roads with ease",
    "Multi-Terrain Tech (MTT) locking differential helps get out of muddy ruts",
    "High seating capacity for up to 7 passengers"
  ],
  cons: [
    "No automatic gearbox option available",
    "Side-facing 3rd-row seats lack 3-point seatbelts"
  ],
  variants: [
    { id: "bn-v1", name: "N4 1.5 Diesel MT", price: 995000, fuelType: "Diesel", transmission: "Manual", engineCC: 1493, powerBHP: 100, torqueNm: 260, mileageKmpl: 17.2, features: ["Dual Airbags", "ABS with EBD", "Power Steering", "Front & Rear Power Windows"] },
    { id: "bn-v2", name: "N10 (O) 1.5 Diesel MT with MTT", price: 1215000, fuelType: "Diesel", transmission: "Manual", engineCC: 1493, powerBHP: 100, torqueNm: 260, mileageKmpl: 17.2, features: ["MTT Mechanical Locking Differential", "7-inch Touchscreen", "Alloy Wheels", "Cruise Control"] }
  ],
  dealerPrices: [
    { dealerId: "mhd_d1_ranchi", dealerName: "Mahindra Central Ranchi", location: "Main Road, Ranchi, Jharkhand", price: 995000, discount: 20000, rating: 4.9 }
  ]
};

// 24. Mahindra Scorpio Classic
export const mahindraScorpioClassic: Vehicle = {
  id: "mahindra-scorpio-classic-2026",
  slug: "mahindra-scorpio-classic",
  category: "car",
  brand: "Mahindra",
  model: "Scorpio Classic",
  year: 2026,
  startingPrice: 1358000,
  emiFrom: 25000,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/scorpio-classic/mahindra-scorpio-classic-0-1767930945.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/scorpio-classic/mahindra-scorpio-classic-6-1766744121.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/scorpio-classic/mahindra-scorpio-classic-3-1766744120.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/scorpio-classic/mahindra-scorpio-classic-1-1766744120.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/scorpio-classic/mahindra-scorpio-classic-2-1766744120.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/scorpio-classic/mahindra-scorpio-classic-7-1766744121.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/scorpio-classic/mahindra-scorpio-classic-0-1766744119.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/scorpio-classic/mahindra-scorpio-classic-10-1766744122.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/mahindra/scorpio-classic/mahindra-scorpio-classic-0-1767930945.png",
  fuelTypes: ["Diesel"],
  transmissions: ["Manual"],
  mileage: "15.0 kmpl",
  engineCC: 2184,
  powerBHP: 130,
  torqueNm: 300,
  bootSpaceL: 460,
  groundClearance: 209,
  safetyRating: 4,
  seatingCapacity: 9,
  rating: 4.8,
  reviewCount: 3400,
  isNew: false,
  isBestSeller: true,
  isEV: false,
  description: "The Mahindra Scorpio Classic brings the legendary stance of the original Scorpio powered by the lightweight mHawk 2.2L Diesel engine, cable shift 6-speed manual transmission, 9-inch touchscreen, and 7 & 9-seater seating configurations.",
  features: [
    "Legendary Hood Scoop & Signature Tower LED Tail Lamps",
    "Refined Gen-2 mHawk 2.2L Diesel Engine (55 kg Lighter)",
    "9-inch Touchscreen Infotainment System",
    "7 & 9-Seating Capacity Options",
    "Classic Wooden Finish Center Console",
    "Automatic Climate Control & Rear AC Vents",
    "17-inch Diamond Cut Alloy Wheels"
  ],
  colors: ["Galaxy Grey", "Everest White", "Stealth Black", "Molten Red", "DSilver"],
  pros: [
    "Unmatched traditional SUV road presence and high seating stance",
    "Lightweight 2.2L mHawk diesel engine offers punchy low-end pulling power",
    "Available in 7-seater and 9-seater cabin layouts"
  ],
  cons: [
    "Lacks modern ADAS or sunroof options found in Scorpio N",
    "Manual transmission only with no automatic choice"
  ],
  variants: [
    { id: "sc-v1", name: "S 2.2 Diesel MT 7/9-Str", price: 1358000, fuelType: "Diesel", transmission: "Manual", engineCC: 2184, powerBHP: 130, torqueNm: 300, mileageKmpl: 15.0, features: ["Dual Airbags", "ABS", "AC", "Power Windows", "LED Tail Lamps"] },
    { id: "sc-v2", name: "S11 2.2 Diesel MT 7-Str", price: 1735000, fuelType: "Diesel", transmission: "Manual", engineCC: 2184, powerBHP: 130, torqueNm: 300, mileageKmpl: 15.0, features: ["9-inch Touchscreen", "17-inch Alloys", "Auto AC", "Projector Headlamps", "Steering Controls"] }
  ],
  dealerPrices: [
    { dealerId: "mhd_d1_ranchi", dealerName: "Mahindra Central Ranchi", location: "Main Road, Ranchi, Jharkhand", price: 1358000, discount: 30000, rating: 4.9 }
  ]
};

// 25. Maruti Suzuki Grand Vitara
export const marutiGrandVitara: Vehicle = {
  id: "maruti-grand-vitara-2026",
  slug: "maruti-suzuki-grand-vitara",
  category: "car",
  brand: "Maruti Suzuki",
  model: "Grand Vitara",
  year: 2026,
  startingPrice: 1099000,
  emiFrom: 20700,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/maruti/grand-vitara/maruti-grand-vitara-8-1766738694.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/grand-vitara/maruti-grand-vitara-11-1766738695.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/grand-vitara/maruti-grand-vitara-9-1766738694.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/grand-vitara/maruti-grand-vitara-10-1766738695.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/grand-vitara/maruti-grand-vitara-5-1766738693.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/grand-vitara/maruti-grand-vitara-6-1766738693.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/grand-vitara/maruti-grand-vitara-4-1766738693.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/grand-vitara/maruti-grand-vitara-7-1766738694.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/maruti/grand-vitara/maruti-grand-vitara-8-1766738694.png",
  fuelTypes: ["Petrol", "Hybrid", "CNG"],
  transmissions: ["Manual", "Automatic", "e-CVT"],
  mileage: "21.1 - 27.97 km/kg",
  engineCC: 1490,
  powerBHP: 114,
  torqueNm: 137,
  bootSpaceL: 373,
  groundClearance: 210,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.6,
  reviewCount: 2100,
  isNew: true,
  isBestSeller: true,
  isEV: false,
  description: "The Maruti Suzuki Grand Vitara mid-size SUV features Intelligent Electric Strong Hybrid technology delivering 27.97 kmpl, ALLGRIP SELECT AWD terrain response system, panoramic sunroof, Head-Up Display (HUD), 360 camera, and 9-inch SmartPlay Pro+ touchscreen.",
  features: [
    "Intelligent Electric Strong Hybrid Powertrain (27.97 kmpl)",
    "ALLGRIP SELECT AWD System with Auto, Sport, Snow, & Lock Modes",
    "Panoramic Sunroof with Dual Sliding Panes",
    "Head-Up Display (HUD) with Digital Navigation",
    "360-Degree View HD Camera with Dynamic Guidelines",
    "Ventilated Leatherette Front Seats & Wireless Smartphone Charging",
    "9-inch SmartPlay Pro+ Touchscreen with Premium Sound",
    "6 Airbags Standard Across Zeta, Alpha, & Intelligent Hybrid Trims"
  ],
  colors: [
    "Nexa Blue",
    "Grandeur Grey",
    "Chestnut Brown",
    "Splendid Silver",
    "Arctic White",
    "Opulent Red",
    "Midnight Black"
  ],
  pros: [
    "Class-leading 27.97 kmpl fuel efficiency in Strong Hybrid version",
    "Capable ALLGRIP SELECT AWD system tackles slippery terrains easily",
    "Plush interior with panoramic sunroof, HUD, and ventilated seats"
  ],
  cons: [
    "Strong Hybrid battery consumes boot space compared to Smart Hybrid",
    "3-cylinder hybrid engine sounds vocal when pushing hard for quick overtakes"
  ],
  variants: [
    {
      id: "gv-v1",
      name: "Sigma 1.5 Smart Hybrid Petrol MT",
      price: 1099000,
      fuelType: "Petrol",
      transmission: "Manual",
      engineCC: 1462,
      powerBHP: 102,
      torqueNm: 137,
      mileageKmpl: 21.11,
      features: ["Keyless Entry", "Push Button Start", "Auto Climate Control", "All 4 Disc Brakes", "Dual Airbags"]
    },
    {
      id: "gv-v2",
      name: "Alpha 1.5 Smart Hybrid AllGrip AWD MT",
      price: 1701000,
      fuelType: "Petrol",
      transmission: "Manual",
      engineCC: 1462,
      powerBHP: 102,
      torqueNm: 137,
      mileageKmpl: 19.38,
      features: ["ALLGRIP SELECT AWD", "Panoramic Sunroof", "360 Camera", "9-inch Touchscreen", "Leatherette Seats"]
    },
    {
      id: "gv-v3",
      name: "Zeta+ 1.5 Intelligent Strong Hybrid e-CVT",
      price: 1843000,
      fuelType: "Hybrid",
      transmission: "Automatic",
      engineCC: 1490,
      powerBHP: 114,
      torqueNm: 141,
      mileageKmpl: 27.97,
      features: ["Strong Hybrid e-CVT", "Head-Up Display", "Wireless Charger", "Digital Cockpit", "6 Airbags"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "ms_d1_ranchi",
      dealerName: "Sudha Arena Maruti Suzuki Ranchi",
      location: "Ratu Road, Ranchi, Jharkhand",
      price: 1099000,
      discount: 30000,
      rating: 4.8
    }
  ]
};

// 26. Toyota Fortuner
export const toyotaFortuner: Vehicle = {
  id: "toyota-fortuner-2026",
  slug: "toyota-fortuner",
  category: "car",
  brand: "Toyota",
  model: "Fortuner",
  year: 2026,
  startingPrice: 3343000,
  emiFrom: 62500,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/toyota/fortuner/toyota-fortuner-0-1767849630.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/fortuner/toyota-fortuner-7-1767849635.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/fortuner/toyota-fortuner-9-1766808910.jpg",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/fortuner/toyota-fortuner-5-1767849633.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/fortuner/toyota-fortuner-1-1767849631.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/fortuner/toyota-fortuner-6-1767849634.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/fortuner/toyota-fortuner-4-1767849633.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/fortuner/toyota-fortuner-2-1767849631.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/toyota/fortuner/toyota-fortuner-0-1767849630.png",
  fuelTypes: ["Petrol", "Diesel"],
  transmissions: ["Manual", "Automatic"],
  mileage: "10.0 - 14.4 kmpl",
  engineCC: 2755,
  powerBHP: 201,
  torqueNm: 500,
  bootSpaceL: 296,
  groundClearance: 225,
  safetyRating: 5,
  seatingCapacity: 7,
  rating: 4.8,
  reviewCount: 3800,
  isNew: false,
  isBestSeller: true,
  isEV: false,
  description: "The Toyota Fortuner is India's most trusted full-size 7-seater SUV, offering legendary reliability, 204 PS 2.8L Turbo Diesel power delivering 500 Nm torque, tough ladder-frame chassis, high-low ratio 4x4, and outstanding resale value.",
  features: [
    "2.8L Turbo Diesel Engine with 204 PS Power & 500 Nm Torque",
    "Tough Body-on-Frame Ladder Chassis Architecture",
    "High & Low Range 4x4 Transfer Case with Differential Lock",
    "8-inch Touchscreen Infotainment with Apple CarPlay & Android Auto",
    "JBL 11-Speaker Audio System with Subwoofer",
    "Ventilated Front Seats & 8-Way Power Driver Seat",
    "7 Airbags Standard with Vehicle Stability Control (VSC)",
    "Sequential LED Turn Indicators & Dual LED Headlamps"
  ],
  colors: ["Super White", "Attitude Black", "Phantom Brown", "Avant-Garde Bronze", "Silver Metallic", "Sparkling Black"],
  pros: [
    "Legendary bulletproof Toyota engine reliability and durability",
    "Commanding 204 PS / 500 Nm diesel torque with high resale value",
    "Exceptional off-road 4x4 prowess with 225mm ground clearance"
  ],
  cons: [
    "Ride quality is stiff over sharp urban road undulations",
    "Infotainment screen size is modest compared to price tag"
  ],
  variants: [
    { id: "ft-v1", name: "2.7 Petrol 4x2 MT", price: 3343000, fuelType: "Petrol", transmission: "Manual", engineCC: 2694, powerBHP: 164, torqueNm: 245, mileageKmpl: 10.0, features: ["7 Airbags", "VSC", "Hill Assist", "8-inch Display", "LED Projectors"] },
    { id: "ft-v2", name: "2.8 Diesel 4x4 AT", price: 4232000, fuelType: "Diesel", transmission: "Automatic", engineCC: 2755, powerBHP: 201, torqueNm: 500, mileageKmpl: 14.4, features: ["4x4 Low Ratio", "JBL 11-Speaker Audio", "Ventilated Seats", "Differential Lock"] }
  ],
  dealerPrices: [
    { dealerId: "tyt_d1_ranchi", dealerName: "Purulia Toyota Ranchi", location: "Purulia Road, Ranchi, Jharkhand", price: 3343000, discount: 25000, rating: 4.9 }
  ]
};

// 27. Toyota Innova Hycross
export const toyotaInnovaHycross: Vehicle = {
  id: "toyota-innova-hycross-2026",
  slug: "toyota-innova-hycross",
  category: "car",
  brand: "Toyota",
  model: "Innova Hycross",
  year: 2026,
  startingPrice: 1977000,
  emiFrom: 37000,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/toyota/innova-hycross/toyota-innova-hycross-4-1767848854.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/innova-hycross/toyota-innova-hycross-3-1767848854.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/innova-hycross/toyota-innova-hycross-7-1767848856.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/innova-hycross/toyota-innova-hycross-1-1767848852.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/innova-hycross/toyota-innova-hycross-5-1767848855.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/innova-hycross/toyota-innova-hycross-2-1767848853.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/innova-hycross/toyota-innova-hycross-0-1767848852.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/innova-hycross/toyota-innova-hycross-6-1767848856.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/toyota/innova-hycross/toyota-innova-hycross-4-1767848854.png",
  fuelTypes: ["Petrol", "Hybrid"],
  transmissions: ["Automatic", "e-CVT"],
  mileage: "16.1 - 23.24 kmpl",
  engineCC: 1987,
  powerBHP: 184,
  torqueNm: 209,
  bootSpaceL: 300,
  groundClearance: 185,
  safetyRating: 5,
  seatingCapacity: 7,
  rating: 4.9,
  reviewCount: 2900,
  isNew: true,
  isBestSeller: true,
  isEV: false,
  description: "The Toyota Innova Hycross redefines luxury MPVs with TNGA monocoque chassis, 5th Generation 2.0L Strong Hybrid Powertrain delivering 23.24 kmpl, 2nd-row Ottoman powered captain seats, panoramic sunroof, and Toyota Safety Sense ADAS.",
  features: [
    "2.0L 5th Generation Strong Hybrid Powertrain (23.24 kmpl)",
    "2nd-Row Powered Ottoman Captain Seats with Leg Rest",
    "Panoramic Sunroof with Mood Lighting",
    "10.1-inch Floating Touchscreen Infotainment with JBL 9-Speaker Audio",
    "Toyota Safety Sense ADAS Suite",
    "TNGA Monocoque Chassis Architecture for Sedan-Like Comfort",
    "Dual-Zone Automatic Climate Control with Rear Vents",
    "Power Tailgate & 360-Degree Surround View Camera"
  ],
  colors: ["Blackish Ageha Glass Flake", "Super White", "Platinum White Pearl", "Attitude Black", "Silver Metallic", "Sparkling Black"],
  pros: [
    "Segment-leading 23.24 kmpl real-world fuel economy in Strong Hybrid",
    "Ultra-luxurious 2nd-row Ottoman captain seat experience",
    "Monocoque chassis delivers effortless smooth ride comfort"
  ],
  cons: [
    "High waiting period for top ZX(O) hybrid variants",
    "No manual transmission or diesel engine available"
  ],
  variants: [
    { id: "ih-v1", name: "GX 2.0 Petrol CVT 7-Str", price: 1977000, fuelType: "Petrol", transmission: "Automatic", engineCC: 1987, powerBHP: 172, torqueNm: 205, mileageKmpl: 16.1, features: ["CVT Auto", "LED Headlamps", "8-inch Display", "Rear Camera", "Push Button Start"] },
    { id: "ih-v2", name: "ZX (O) 2.0 Hybrid e-CVT 7-Str", price: 3098000, fuelType: "Hybrid", transmission: "e-CVT", engineCC: 1987, powerBHP: 184, torqueNm: 209, mileageKmpl: 23.24, features: ["Ottoman Captain Seats", "Panoramic Sunroof", "Toyota ADAS", "JBL 9-Speaker Sound", "Power Tailgate"] }
  ],
  dealerPrices: [
    { dealerId: "tyt_d1_ranchi", dealerName: "Purulia Toyota Ranchi", location: "Purulia Road, Ranchi, Jharkhand", price: 1977000, discount: 20000, rating: 4.9 }
  ]
};

// 28. Hyundai Verna
export const hyundaiVerna: Vehicle = {
  id: "hyundai-verna-2026",
  slug: "hyundai-verna",
  category: "car",
  brand: "Hyundai",
  model: "Verna",
  year: 2026,
  startingPrice: 1100000,
  emiFrom: 20500,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/verna/hyundai-verna-0-1773131163.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/verna/hyundai-verna-7-1773210470.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/verna/hyundai-verna-3-1773210466.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/verna/hyundai-verna-5-1773210468.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/verna/hyundai-verna-1-1773210465.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/verna/hyundai-verna-6-1773210469.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/verna/hyundai-verna-0-1773210464.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/verna/hyundai-verna-4-1773210468.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/hyundai/verna/hyundai-verna-0-1773131163.png",
  fuelTypes: ["Petrol"],
  transmissions: ["Manual", "IVT", "DCT"],
  mileage: "18.6 - 20.6 kmpl",
  engineCC: 1482,
  powerBHP: 160,
  torqueNm: 253,
  bootSpaceL: 528,
  groundClearance: 170,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.7,
  reviewCount: 1600,
  isNew: true,
  isBestSeller: true,
  isEV: false,
  description: "The 6th-gen Hyundai Verna futuristic sedan boasts 5-star Global NCAP safety rating, 160 PS 1.5L Turbo GDi engine (fastest in segment), dual 10.25-inch integrated display screens, Bose 8-speaker audio, heated & ventilated seats, and Level 2 ADAS.",
  features: [
    "1.5L Turbo GDi Petrol Engine producing 160 PS & 253 Nm (0-100 km/h in 8.1s)",
    "5-Star Global NCAP Safety Rating",
    "Dual 10.25-inch Integrated HD Display Cockpit",
    "Level 2 ADAS Suite with 17 Autonomous Features",
    "Bose 8-Speaker Premium Sound System",
    "Segment-First Switchable Climate & Infotainment Control Panel",
    "Front Heated & Ventilated Leatherette Seats",
    "528L Massive Luggage Boot Capacity"
  ],
  colors: ["Fiery Red", "Abyss Black", "Atlas White", "Tellurian Brown", "Titan Grey", "Starry Night"],
  pros: [
    "Most powerful 160 PS turbo-petrol engine in sedan segment",
    "5-star GNCAP crash test safety rating with 6 standard airbags",
    "Massive 528L boot space and rich tech equipment"
  ],
  cons: [
    "Futuristic parametric grille styling divides opinions",
    "Rear passenger seat cushion is set slightly low"
  ],
  variants: [
    { id: "vr-v1", name: "EX 1.5 MPi Petrol MT", price: 1100000, fuelType: "Petrol", transmission: "Manual", engineCC: 1497, powerBHP: 115, torqueNm: 144, mileageKmpl: 18.6, features: ["6 Airbags Standard", "ABS with EBD", "All 4 Disc Brakes", "Manual AC", "Digital Cluster"] },
    { id: "vr-v2", name: "SX (O) 1.5 Turbo GDi DCT", price: 1742000, fuelType: "Petrol", transmission: "DCT", engineCC: 1482, powerBHP: 160, torqueNm: 253, mileageKmpl: 20.6, features: ["Level 2 ADAS", "Bose 8-Speaker Audio", "Heated & Ventilated Seats", "Dual 10.25-inch Displays", "Sunroof"] }
  ],
  dealerPrices: [
    { dealerId: "hyn_d1_ranchi", dealerName: "Mukesh Hyundai Ranchi", location: "Bariatu Road, Ranchi, Jharkhand", price: 1100000, discount: 25000, rating: 4.8 }
  ]
};

// 29. Hyundai Venue
export const hyundaiVenue: Vehicle = {
  id: "hyundai-venue-2026",
  slug: "hyundai-venue",
  category: "car",
  brand: "Hyundai",
  model: "Venue",
  year: 2026,
  startingPrice: 794000,
  emiFrom: 14800,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/venue/hyundai-venue-0-1771412163.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/venue/hyundai-venue-7-1771412171.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/venue/hyundai-venue-3-1771412165.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/venue/hyundai-venue-5-1771412167.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/venue/hyundai-venue-1-1771412164.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/venue/hyundai-venue-6-1771412170.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/venue/hyundai-venue-4-1771412166.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/venue/hyundai-venue-2-1771412164.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/hyundai/venue/hyundai-venue-0-1771412163.png",
  fuelTypes: ["Petrol", "Diesel"],
  transmissions: ["Manual", "Automatic", "DCT"],
  mileage: "17.5 - 24.2 kmpl",
  engineCC: 1197,
  powerBHP: 120,
  torqueNm: 172,
  bootSpaceL: 350,
  groundClearance: 195,
  safetyRating: 4,
  seatingCapacity: 5,
  rating: 4.6,
  reviewCount: 2400,
  isNew: false,
  isBestSeller: true,
  isEV: false,
  description: "The Hyundai Venue compact SUV combines dark chrome front grille styling, Level 1 ADAS safety features, 4-way powered driver seat, 8-inch touchscreen with Bluelink connected car tech, and multiple powertrain options including 1.5L Diesel.",
  features: [
    "Level 1 ADAS Suite (Forward Collision Warning, Lane Keep Assist)",
    "4-Way Powered Driver Seat & 2-Step Reclining Rear Seats",
    "8-inch Touchscreen with Bluelink (60+ Connected Features)",
    "Electric Sunroof with Voice Control",
    "Ambient Lighting & Wireless Smartphone Charger",
    "Dashcam with Dual Camera (Front & Rear Recording)",
    "Drive Modes (Normal, Eco, Sport) & Traction Control Modes",
    "6 Airbags Standard Across Top Trims"
  ],
  colors: ["Fiery Red", "Denim Blue", "Typhoon Silver", "Titan Grey", "Atlas White", "Abyss Black"],
  pros: [
    "Rich features matrix including powered driver seat and ADAS",
    "Smooth 1.0L Turbo Petrol DCT and refined 1.5L Diesel engines",
    "Compact city-friendly dimensions with light controls"
  ],
  cons: [
    "Rear seat cabin width is snug for 3 adults",
    "Bumpy ride over sharp potholes at low speeds"
  ],
  variants: [
    { id: "vn-v1", name: "E 1.2 Petrol MT", price: 794000, fuelType: "Petrol", transmission: "Manual", engineCC: 1197, powerBHP: 83, torqueNm: 114, mileageKmpl: 17.5, features: ["6 Airbags", "ABS with EBD", "Manual AC", "Digital Cluster", "Tilt Steering"] },
    { id: "vn-v2", name: "SX (O) 1.0 Turbo Petrol DCT", price: 1348000, fuelType: "Petrol", transmission: "DCT", engineCC: 998, powerBHP: 120, torqueNm: 172, mileageKmpl: 18.1, features: ["Level 1 ADAS", "4-Way Powered Driver Seat", "Sunroof", "Dashcam", "Bluelink"] }
  ],
  dealerPrices: [
    { dealerId: "hyn_d1_ranchi", dealerName: "Mukesh Hyundai Ranchi", location: "Bariatu Road, Ranchi, Jharkhand", price: 794000, discount: 20000, rating: 4.8 }
  ]
};

// 30. Maruti Suzuki Fronx
export const marutiFronx: Vehicle = {
  id: "maruti-fronx-2026",
  slug: "maruti-suzuki-fronx",
  category: "car",
  brand: "Maruti Suzuki",
  model: "Fronx",
  year: 2026,
  startingPrice: 751500,
  emiFrom: 14000,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/maruti/fronx/maruti-fronx-7-1766215192.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/fronx/maruti-fronx-6-1766215191.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/fronx/maruti-fronx-2-1766215188.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/fronx/maruti-fronx-4-1766215190.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/fronx/maruti-fronx-0-1766215187.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/fronx/maruti-fronx-5-1766215190.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/fronx/maruti-fronx-3-1766215189.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/fronx/maruti-fronx-1-1766215188.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/maruti/fronx/maruti-fronx-7-1766215192.png",
  fuelTypes: ["Petrol", "CNG"],
  transmissions: ["Manual", "Automatic", "AMT"],
  mileage: "20.0 - 28.51 km/kg",
  engineCC: 1197,
  powerBHP: 100,
  torqueNm: 148,
  bootSpaceL: 308,
  groundClearance: 190,
  safetyRating: 4,
  seatingCapacity: 5,
  rating: 4.7,
  reviewCount: 2700,
  isNew: true,
  isBestSeller: true,
  isEV: false,
  description: "The Maruti Suzuki Fronx crossover SUV features Grand Vitara-inspired NEXWave front grille, 1.0L Boosterjet Turbo Petrol engine with Smart Hybrid tech, Head-Up Display (HUD), 360-degree camera, and 9-inch SmartPlay Pro+ touchscreen.",
  features: [
    "1.0L Boosterjet Direct-Injection Turbo Petrol Engine (100 PS)",
    "Head-Up Display (HUD) & 360-Degree Surround HD Camera",
    "9-inch SmartPlay Pro+ Touchscreen with ARKAMYS Surround Audio",
    "NEXWave Front Grille & Full-Width Connected LED Rear Taillamps",
    "16-inch Precision Cut Alloy Wheels",
    "Wireless Smartphone Charging Pad & Rear AC Vents",
    "6 Airbags Standard Across Zeta & Alpha Trims",
    "Factory-Fitted S-CNG Variant (28.51 km/kg)"
  ],
  colors: ["Nexa Blue", "Arctic White", "Splendid Silver", "Grandeur Grey", "Earthen Brown", "Opulent Red"],
  pros: [
    "Striking Coupe crossover design with high ground clearance",
    "Punchy 1.0L Boosterjet turbo petrol engine with paddle shifters",
    "Excellent fuel efficiency across petrol and CNG powertrains"
  ],
  cons: [
    "Rear headroom is tight for tall passengers due to sloping roof",
    "No sunroof option available"
  ],
  variants: [
    { id: "fx-v1", name: "Sigma 1.2 Petrol MT", price: 751500, fuelType: "Petrol", transmission: "Manual", engineCC: 1197, powerBHP: 90, torqueNm: 113, mileageKmpl: 21.79, features: ["ESP with Hill Hold", "Dual Airbags", "Auto Climate Control", "All 4 Power Windows", "Halogen Projectors"] },
    { id: "fx-v2", name: "Alpha 1.0 Turbo Petrol 6AT", price: 1287500, fuelType: "Petrol", transmission: "Automatic", engineCC: 998, powerBHP: 100, torqueNm: 148, mileageKmpl: 20.01, features: ["HUD", "360 Camera", "9-inch Touchscreen", "6 Airbags", "Paddle Shifters"] }
  ],
  dealerPrices: [
    { dealerId: "ms_d1_ranchi", dealerName: "Sudha Arena Maruti Suzuki Ranchi", location: "Ratu Road, Ranchi, Jharkhand", price: 751500, discount: 20000, rating: 4.8 }
  ]
};

// 31. Maruti Suzuki Ertiga
export const marutiErtiga: Vehicle = {
  id: "maruti-ertiga-2026",
  slug: "maruti-suzuki-ertiga",
  category: "car",
  brand: "Maruti Suzuki",
  model: "Ertiga",
  year: 2026,
  startingPrice: 869000,
  emiFrom: 16200,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/maruti/ertiga/maruti-ertiga-4-1767874534.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/ertiga/maruti-ertiga-7-1766737078.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/ertiga/maruti-ertiga-7-1767874536.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/ertiga/maruti-ertiga-1-1767874532.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/ertiga/maruti-ertiga-5-1767874534.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/ertiga/maruti-ertiga-3-1767874533.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/ertiga/maruti-ertiga-0-1767874531.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/ertiga/maruti-ertiga-6-1767874535.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/maruti/ertiga/maruti-ertiga-4-1767874534.png",
  fuelTypes: ["Petrol", "CNG"],
  transmissions: ["Manual", "Automatic"],
  mileage: "20.5 - 26.11 km/kg",
  engineCC: 1462,
  powerBHP: 102,
  torqueNm: 137,
  bootSpaceL: 209,
  groundClearance: 180,
  safetyRating: 3,
  seatingCapacity: 7,
  rating: 4.6,
  reviewCount: 3100,
  isNew: false,
  isBestSeller: true,
  isEV: false,
  description: "The Maruti Suzuki Ertiga is India's highest selling 7-seater MPV, featuring Next-Gen 1.5L K15C Smart Hybrid engine, 6-speed automatic transmission with paddle shifters, 7-inch SmartPlay Pro touchscreen, roof-mounted AC vents, and factory S-CNG option.",
  features: [
    "Next-Gen 1.5L K15C DualJet Smart Hybrid Engine",
    "6-Speed Automatic Transmission with Paddle Shifters",
    "7-inch SmartPlay Pro Touchscreen Infotainment",
    "Roof-Mounted 2nd & 3rd Row AC Vents with 4-Speed Control",
    "15-inch Two-Tone Alloy Wheels",
    "Cruise Control & Engine Push Start/Stop",
    "4 Airbags (Dual Front + Front Side)",
    "Factory-Fitted S-CNG Tech (26.11 km/kg)"
  ],
  colors: ["Auburn Red", "Magma Grey", "Pearl Metallic Oxford Blue", "Pearl Arctic White", "Splendid Silver", "Dignity Brown"],
  pros: [
    "Unbeatable value-for-money 7-seater family transport",
    "Highly fuel-efficient 1.5L engine with Smart Hybrid & S-CNG",
    "Comfortable seating layout with roof-mounted rear AC"
  ],
  cons: [
    "Boot space with all 3 rows up is limited (209L)",
    "Lacks premium features like sunroof or 360 camera"
  ],
  variants: [
    { id: "er-v1", name: "LXi 1.5 Petrol MT", price: 869000, fuelType: "Petrol", transmission: "Manual", engineCC: 1462, powerBHP: 102, torqueNm: 137, mileageKmpl: 20.51, features: ["Dual Airbags", "ESP with Hill Hold", "ABS with EBD", "All 4 Power Windows", "Rear AC Vents"] },
    { id: "er-v2", name: "ZXi+ 1.5 Petrol 6AT", price: 1303000, fuelType: "Petrol", transmission: "Automatic", engineCC: 1462, powerBHP: 102, torqueNm: 137, mileageKmpl: 20.3, features: ["7-inch Touchscreen", "Paddle Shifters", "4 Airbags", "Cruise Control", "15-inch Alloys"] }
  ],
  dealerPrices: [
    { dealerId: "ms_d1_ranchi", dealerName: "Sudha Arena Maruti Suzuki Ranchi", location: "Ratu Road, Ranchi, Jharkhand", price: 869000, discount: 20000, rating: 4.8 }
  ]
};

// 32. Skoda Slavia
export const skodaSlavia: Vehicle = {
  id: "skoda-slavia-2026",
  slug: "skoda-slavia",
  category: "car",
  brand: "Skoda",
  model: "Slavia",
  year: 2026,
  startingPrice: 1069000,
  emiFrom: 19900,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/skoda/slavia/skoda-slavia-0-1767850473.png",
    "https://images.91wheels.com/assets/c_images/gallery/skoda/slavia/skoda-slavia-7-1767850477.png",
    "https://images.91wheels.com/assets/c_images/gallery/skoda/slavia/skoda-slavia-3-1767850475.png",
    "https://images.91wheels.com/assets/c_images/gallery/skoda/slavia/skoda-slavia-5-1767850476.png",
    "https://images.91wheels.com/assets/c_images/gallery/skoda/slavia/skoda-slavia-1-1767850474.png",
    "https://images.91wheels.com/assets/c_images/gallery/skoda/slavia/skoda-slavia-6-1767850477.png",
    "https://images.91wheels.com/assets/c_images/gallery/skoda/slavia/skoda-slavia-4-1767850475.png",
    "https://images.91wheels.com/assets/c_images/gallery/skoda/slavia/skoda-slavia-2-1767850474.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/skoda/slavia/skoda-slavia-0-1767850473.png",
  fuelTypes: ["Petrol"],
  transmissions: ["Manual", "Automatic", "DSG"],
  mileage: "18.7 - 20.3 kmpl",
  engineCC: 1498,
  powerBHP: 150,
  torqueNm: 250,
  bootSpaceL: 521,
  groundClearance: 179,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.8,
  reviewCount: 1250,
  isNew: false,
  isBestSeller: true,
  isEV: false,
  description: "The Skoda Slavia premium sedan built on MQB-A0-IN platform features 5-star Global NCAP safety rating, 150 PS 1.5L TSI Active Cylinder Tech engine, 10-inch touchscreen, ventilated front seats, electric sunroof, and 521L boot.",
  features: [
    "1.5L TSI EVO Turbo Engine with Active Cylinder Technology (150 PS / 250 Nm)",
    "5-Star Global NCAP Safety Rating for Both Adults & Children",
    "10-inch Touchscreen Infotainment with Wireless CarPlay & Android Auto",
    "8-inch Digital Cockpit Instrument Cluster",
    "Ventilated Front Leatherette Seats",
    "Electric Sunroof & Ambient Lighting",
    "179mm High Ground Clearance for Indian Roads",
    "6 Airbags & Electronic Differential Lock (EDS)"
  ],
  colors: ["Lava Blue", "Tornado Red", "Candy White", "Brilliant Silver", "Carbon Steel", "Deep Black"],
  pros: [
    "Outstanding 5-star GNCAP safety with robust European build quality",
    "Enthusiast's dream 1.5L TSI engine paired with 7-speed DSG transmission",
    "179mm ground clearance handles speed breakers effortlessly"
  ],
  cons: [
    "Rear camera resolution could be sharper",
    "AC cooling takes slightly longer on extremely hot summer days"
  ],
  variants: [
    { id: "sl-v1", name: "Classic 1.0 TSI MT", price: 1069000, fuelType: "Petrol", transmission: "Manual", engineCC: 999, powerBHP: 115, torqueNm: 178, mileageKmpl: 20.3, features: ["6 Airbags Standard", "ESC", "7-inch Touchscreen", "Rear AC Vents", "LED DRLs"] },
    { id: "sl-v2", name: "Prestige 1.5 TSI DSG", price: 1869000, fuelType: "Petrol", transmission: "DSG", engineCC: 1498, powerBHP: 150, torqueNm: 250, mileageKmpl: 19.3, features: ["1.5 TSI DSG", "Ventilated Seats", "10-inch Screen", "Digital Cockpit", "Sunroof"] }
  ],
  dealerPrices: [
    { dealerId: "skd_d1_ranchi", dealerName: "Matrix Skoda Ranchi", location: "Main Road, Ranchi, Jharkhand", price: 1069000, discount: 30000, rating: 4.8 }
  ]
};

// 33. Volkswagen Virtus
export const volkswagenVirtus: Vehicle = {
  id: "volkswagen-virtus-2026",
  slug: "volkswagen-virtus",
  category: "car",
  brand: "Volkswagen",
  model: "Virtus",
  year: 2026,
  startingPrice: 1156000,
  emiFrom: 21500,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/volkswagen/virtus/volkswagen-virtus-3-1767847075.png",
    "https://images.91wheels.com/assets/c_images/gallery/volkswagen/virtus/volkswagen-virtus-2-1767847074.png",
    "https://images.91wheels.com/assets/c_images/gallery/volkswagen/virtus/volkswagen-virtus-6-1767847077.png",
    "https://images.91wheels.com/assets/c_images/gallery/volkswagen/virtus/volkswagen-virtus-0-1767847073.png",
    "https://images.91wheels.com/assets/c_images/gallery/volkswagen/virtus/volkswagen-virtus-4-1767847076.png",
    "https://images.91wheels.com/assets/c_images/gallery/volkswagen/virtus/volkswagen-virtus-1-1767847073.png",
    "https://images.91wheels.com/assets/c_images/gallery/volkswagen/virtus/volkswagen-virtus-7-1767847078.png",
    "https://images.91wheels.com/assets/c_images/gallery/volkswagen/virtus/volkswagen-virtus-5-1767847076.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/volkswagen/virtus/volkswagen-virtus-3-1767847075.png",
  fuelTypes: ["Petrol"],
  transmissions: ["Manual", "Automatic", "DSG"],
  mileage: "18.1 - 20.8 kmpl",
  engineCC: 1498,
  powerBHP: 150,
  torqueNm: 250,
  bootSpaceL: 521,
  groundClearance: 179,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.9,
  reviewCount: 1400,
  isNew: false,
  isBestSeller: true,
  isEV: false,
  description: "The Volkswagen Virtus GT performance sedan features 5-star Global NCAP safety rating, 150 PS 1.5L TSI EVO engine with 7-speed DSG, GT badging with red brake calipers, 10.1-inch VW Play touchscreen, and 8-speaker audio.",
  features: [
    "1.5L TSI EVO Engine with Active Cylinder Management (150 PS / 250 Nm)",
    "5-Star Global NCAP Safety Rating for Adult & Child Occupant Protection",
    "7-Speed Dual-Clutch DSG Automatic Transmission with Paddle Shifters",
    "GT Line Exterior Styling with Red Brake Calipers & Rear Spoiler",
    "10.1-inch VW Play Touchscreen Infotainment System",
    "8-inch Digital Cockpit Driver Display",
    "Front Ventilated Leather Seats & Wireless Charger",
    "521L Boot Space & 179mm Ground Clearance"
  ],
  colors: ["Wild Cherry Red", "Curcuma Yellow", "Rising Blue Metallic", "Reflex Silver", "Carbon Steel Grey", "Candy White"],
  pros: [
    "Class-leading high-speed highway stability and steering precision",
    "Proven 5-star GNCAP safety with 6 standard airbags on top trims",
    "Thrilling GT Performance 1.5 TSI DSG acceleration"
  ],
  cons: [
    "Reversing camera display could offer higher resolution",
    "Interior door plastics feel firm compared to soft-touch dash"
  ],
  variants: [
    { id: "vt-v1", name: "Comfortline 1.0 TSI MT", price: 1156000, fuelType: "Petrol", transmission: "Manual", engineCC: 999, powerBHP: 115, torqueNm: 178, mileageKmpl: 20.8, features: ["6 Airbags Standard", "ESC", "7-inch Display", "LED Headlamps", "Rear AC Vents"] },
    { id: "vt-v2", name: "GT Plus 1.5 TSI DSG", price: 1915000, fuelType: "Petrol", transmission: "DSG", engineCC: 1498, powerBHP: 150, torqueNm: 250, mileageKmpl: 19.6, features: ["GT Styling", "Red Calipers", "Ventilated Seats", "10.1-inch VW Play", "Sunroof"] }
  ],
  dealerPrices: [
    { dealerId: "vw_d1_ranchi", dealerName: "Panache Volkswagen Ranchi", location: "Main Road, Ranchi, Jharkhand", price: 1156000, discount: 35000, rating: 4.9 }
  ]
};

// 34. Honda City
export const hondaCity: Vehicle = {
  id: "honda-city-2026",
  slug: "honda-city",
  category: "car",
  brand: "Honda",
  model: "City",
  year: 2026,
  startingPrice: 1208000,
  emiFrom: 22600,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/honda/city-facelift/honda-city-facelift-0-1779451233.png",
    "https://images.91wheels.com/assets/c_images/gallery/honda/city-facelift/honda-city-facelift-7-1779451235.png",
    "https://images.91wheels.com/assets/c_images/gallery/honda/city-facelift/honda-city-facelift-3-1779451234.png",
    "https://images.91wheels.com/assets/c_images/gallery/honda/city-facelift/honda-city-facelift-5-1779451235.png",
    "https://images.91wheels.com/assets/c_images/gallery/honda/city-facelift/honda-city-facelift-1-1779451234.png",
    "https://images.91wheels.com/assets/c_images/gallery/honda/city-facelift/honda-city-facelift-6-1779451235.png",
    "https://images.91wheels.com/assets/c_images/gallery/honda/city-facelift/honda-city-facelift-4-1779451234.png",
    "https://images.91wheels.com/assets/c_images/gallery/honda/city-facelift/honda-city-facelift-2-1779451234.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/honda/city-facelift/honda-city-facelift-0-1779451233.png",
  fuelTypes: ["Petrol", "Hybrid"],
  transmissions: ["Manual", "CVT", "e-CVT"],
  mileage: "17.8 - 27.13 kmpl",
  engineCC: 1498,
  powerBHP: 121,
  torqueNm: 145,
  bootSpaceL: 506,
  groundClearance: 165,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.7,
  reviewCount: 2800,
  isNew: false,
  isBestSeller: true,
  isEV: false,
  description: "The 5th-generation Honda City icon features Honda SENSING ADAS suite standard across all variants, 1.5L i-VTEC DOHC engine, 8-inch Advanced Display Audio, Lanewatch camera, electric sunroof, and e:HEV Strong Hybrid option delivering 27.13 kmpl.",
  features: [
    "Honda SENSING ADAS Suite Standard (Collision Mitigation, Adaptive Cruise)",
    "1.5L i-VTEC DOHC Engine with 121 PS Power & 145 Nm Torque",
    "Honda LaneWatch Camera for Blind-Spot Monitoring",
    "8-inch Touchscreen Infotainment with Wireless Apple CarPlay & Android Auto",
    "Electric Sunroof with One-Touch Operation",
    "6 Airbags & Vehicle Stability Assist (VSA)",
    "7-inch Full Color TFT Instrument Cluster",
    "e:HEV Strong Hybrid Option (27.13 kmpl)"
  ],
  colors: ["Obsidian Blue Pearl", "Radiant Red Metallic", "Platinum White Pearl", "Golden Brown Metallic", "Meteoroid Grey Metallic", "Lunar Silver Metallic"],
  pros: [
    "Smooth and high-revving 1.5L i-VTEC petrol engine benchmark",
    "Honda SENSING ADAS safety tech available even on manual variants",
    "Plush executive rear seat legroom and sofa-like comfort"
  ],
  cons: [
    "Touchscreen infotainment display feels dated compared to Korean rivals",
    "165mm ground clearance requires caution on massive speed bumps"
  ],
  variants: [
    { id: "hc-v1", name: "SV 1.5 i-VTEC MT", price: 1208000, fuelType: "Petrol", transmission: "Manual", engineCC: 1498, powerBHP: 121, torqueNm: 145, mileageKmpl: 17.8, features: ["Honda SENSING ADAS", "6 Airbags", "8-inch Display", "Auto AC", "LED DRLs"] },
    { id: "hc-v2", name: "ZX 1.5 i-VTEC CVT", price: 1635000, fuelType: "Petrol", transmission: "CVT", engineCC: 1498, powerBHP: 121, torqueNm: 145, mileageKmpl: 18.4, features: ["LaneWatch Camera", "Leatherette Seats", "Sunroof", "Full LED Headlamps", "16-inch Alloys"] }
  ],
  dealerPrices: [
    { dealerId: "hnd_d1_ranchi", dealerName: "Titanium Honda Ranchi", location: "Kanke Road, Ranchi, Jharkhand", price: 1208000, discount: 25000, rating: 4.8 }
  ]
};

// 35. MG Hector
export const mgHector: Vehicle = {
  id: "mg-hector-2026",
  slug: "mg-hector",
  category: "car",
  brand: "MG",
  model: "Hector",
  year: 2026,
  startingPrice: 1399000,
  emiFrom: 26000,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/mg/hector/mg-hector-0-1769857188.png",
    "https://images.91wheels.com/assets/c_images/gallery/mg/hector-facelift/mg-hector-facelift-6-1766221701.png",
    "https://images.91wheels.com/assets/c_images/gallery/mg/hector-facelift/mg-hector-facelift-1-1766221698.png",
    "https://images.91wheels.com/assets/c_images/gallery/mg/hector-facelift/mg-hector-facelift-4-1766221700.png",
    "https://images.91wheels.com/assets/c_images/gallery/mg/hector-facelift/mg-hector-facelift-7-1766221702.png",
    "https://images.91wheels.com/assets/c_images/gallery/mg/hector-facelift/mg-hector-facelift-5-1766221701.png",
    "https://images.91wheels.com/assets/c_images/gallery/mg/hector-facelift/mg-hector-facelift-3-1766221699.png",
    "https://images.91wheels.com/assets/c_images/gallery/mg/hector-facelift/mg-hector-facelift-2-1766221699.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/mg/hector/mg-hector-0-1769857188.png",
  fuelTypes: ["Petrol", "Diesel"],
  transmissions: ["Manual", "CVT"],
  mileage: "12.3 - 15.5 kmpl",
  engineCC: 1956,
  powerBHP: 170,
  torqueNm: 350,
  bootSpaceL: 587,
  groundClearance: 192,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.6,
  reviewCount: 2100,
  isNew: false,
  isBestSeller: true,
  isEV: false,
  description: "The MG Hector Internet SUV features segment-largest 14-inch HD portrait touchscreen infotainment, Level 2 ADAS suite with 11 features, dual-pane panoramic sunroof, Infinity by Harman 8-speaker audio, and digital Bluetooth key.",
  features: [
    "Segment-Largest 14-inch HD Portrait Touchscreen Infotainment",
    "Level 2 ADAS Autonomous Suite (Traffic Jam Assist, Lane Keep)",
    "Dual-Pane Panoramic Skyroof (Largest in Segment)",
    "Infinity 8-Speaker Audio System with Subwoofer",
    "Digital Bluetooth Key & i-SMART Connected Tech (75+ Features)",
    "Ventilated Front Seats & Power Driver/Co-Driver Seats",
    "360-Degree Surround View HD Camera",
    "Smart Powered Tailgate with Gesture Control"
  ],
  colors: ["Havana Grey", "Candy White", "Glaze Red", "Aurora Silver", "Starry Black", "Dune Brown"],
  pros: [
    "Gigantic 14-inch portrait display with rich connected tech",
    "Unmatched rear lounge-like legroom and flat floor comfort",
    "Plush ride quality absorbs potholes effortlessly"
  ],
  cons: [
    "Petrol CVT engine fuel efficiency is relaxed",
    "Handling is tuned for comfort rather than aggressive cornering"
  ],
  variants: [
    { id: "mg-v1", name: "Style 1.5 Turbo Petrol MT", price: 1399000, fuelType: "Petrol", transmission: "Manual", engineCC: 1451, powerBHP: 143, torqueNm: 250, mileageKmpl: 13.8, features: ["10.25-inch Display", "ESP", "Hill Hold", "All 4 Disc Brakes", "Rear AC Vents"] },
    { id: "mg-v2", name: "Savvy Pro 1.5 Turbo Petrol CVT", price: 2195000, fuelType: "Petrol", transmission: "CVT", engineCC: 1451, powerBHP: 143, torqueNm: 250, mileageKmpl: 12.3, features: ["14-inch Touchscreen", "Level 2 ADAS", "Panoramic Sunroof", "Infinity Audio", "Ventilated Seats"] }
  ],
  dealerPrices: [
    { dealerId: "mg_d1_ranchi", dealerName: "Speed MG Ranchi", location: "Kanke Road, Ranchi, Jharkhand", price: 1399000, discount: 30000, rating: 4.8 }
  ]
};

// Maruti Vehicles Collection
export const marutiVehicles: Vehicle[] = [
  marutiSwift,
  marutiBrezza,
  marutiGrandVitara,
  marutiFronx,
  marutiErtiga
];

// Tata Vehicles Collection
export const tataVehicles: Vehicle[] = [
  tataSierra,
  tataNexon,
  tataPunch,
  tataHarrier,
  tataSafari,
  tataAltroz,
  tataTiago,
  tataCurvv
];

// Mahindra Vehicles Collection
export const mahindraVehicles: Vehicle[] = [
  mahindraScorpioN,
  mahindraThar,
  mahindraXuv700,
  mahindraTharRoxx,
  mahindraXuv3xo,
  mahindraBoleroNeo,
  mahindraScorpioClassic
];

// Toyota Vehicles Collection
export const toyotaVehicles: Vehicle[] = [
  toyotaFortuner,
  toyotaInnovaHycross
];

// Hyundai Vehicles Collection
export const hyundaiVehicles: Vehicle[] = [
  hyundaiCreta,
  hyundaiVerna,
  hyundaiVenue
];

// Other Brand Vehicles Collection
export const otherBrandVehicles: Vehicle[] = [
  skodaSlavia,
  volkswagenVirtus,
  hondaCity,
  mgHector
];

// All non-Kia Vehicles
export const allOtherVehicles: Vehicle[] = [
  ...tataVehicles,
  ...mahindraVehicles,
  ...marutiVehicles,
  ...toyotaVehicles,
  ...hyundaiVehicles,
  ...otherBrandVehicles
];



// ==================== 50 NEW CARS EXPANSION ====================

// 1. Maruti Baleno
export const marutiBaleno: Vehicle = {
  id: "maruti-baleno-2026",
  slug: "maruti-baleno",
  category: "car",
  brand: "Maruti Suzuki",
  model: "Baleno",
  year: 2026,
  startingPrice: 666000,
  emiFrom: 12800,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/maruti/baleno/maruti-baleno-4-1766214578.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/baleno/maruti-baleno-2-1766214577.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/baleno/maruti-baleno-7-1766214579.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/baleno/maruti-baleno-0-1766214576.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/baleno/maruti-baleno-5-1766214578.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/baleno/maruti-baleno-3-1766214577.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/baleno/maruti-baleno-1-1766214576.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/baleno/maruti-baleno-6-1766214579.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/maruti/baleno/maruti-baleno-4-1766214578.png",
  fuelTypes: ["Petrol", "CNG"],
  transmissions: ["Manual", "Automatic"],
  mileage: "22.94 kmpl / 30.61 km/kg",
  features: ["Head-Up Display", "360 Degree Camera", "9-inch SmartPlay Pro+", "6 Airbags", "Rear AC Vents"],
  colors: ["Nexa Blue", "Opulent Red", "Grandeur Grey", "Luxurious Silver", "Arctic White", "Splendid Silver"],
  rating: 4.6,
  reviewCount: 3890,
  isBestSeller: true,
  seatingCapacity: 5,
  bootSpaceL: 318,
  engineCC: 1197,
  powerBHP: 89,
  torqueNm: 113,
  safetyRating: 4,
  description: "The Maruti Suzuki Baleno is a premium hatchback equipped with segment-first Head-Up Display, 360-view camera, and ultra-efficient 1.2L DualJet Dual VVT petrol & CNG engines.",
  pros: ["Refined & punchy 1.2L engine", "Feature-rich interior with HUD & 360 camera", "Exceptional fuel efficiency in CNG & AMT", "Spacious cabin with plush rear seat comfort"],
  cons: ["AMT lacks crispness compared to DCT", "No sunroof option available"],
  groundClearance: 170,
  variants: [
    { id: "baleno-sigma", name: "Sigma 1.2 MT", price: 666000, fuelType: "Petrol", transmission: "Manual", engineCC: 1197, powerBHP: 89, torqueNm: 113, mileageKmpl: 22.35, features: ["Halogen Headlamps", "All Power Windows", "Reverse Sensors"] },
    { id: "baleno-delta", name: "Delta 1.2 MT", price: 750000, fuelType: "Petrol", transmission: "Manual", engineCC: 1197, powerBHP: 89, torqueNm: 113, mileageKmpl: 22.35, features: ["7-inch Touchscreen", "Steering Controls", "Electric ORVMs"] },
    { id: "baleno-zeta-amt", name: "Zeta 1.2 AMT", price: 893000, fuelType: "Petrol", transmission: "Automatic", engineCC: 1197, powerBHP: 89, torqueNm: 113, mileageKmpl: 22.94, features: ["Push Button Start", "LED Projectors", "Rear Camera", "Side & Curtain Airbags"] },
    { id: "baleno-alpha-cng", name: "Alpha 1.2 CNG", price: 933000, fuelType: "CNG", transmission: "Manual", engineCC: 1197, powerBHP: 77, torqueNm: 98.5, mileageKmpl: 30.61, features: ["360 Degree Camera", "Head-Up Display", "9-inch Touchscreen", "UV Cut Glass"] }
  ],
  dealerPrices: [{ dealerId: "d1", dealerName: "Maruti True Value Ranchi", location: "Ranchi, Jharkhand", price: 666000, discount: 15000, rating: 4.6 }]
};

// 2. Maruti Dzire
export const marutiDzire: Vehicle = {
  id: "maruti-dzire-2026",
  slug: "maruti-dzire",
  category: "car",
  brand: "Maruti Suzuki",
  model: "Dzire",
  year: 2026,
  startingPrice: 679000,
  emiFrom: 13000,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/maruti/dzire/maruti-dzire-0-1784199426.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/dzire/maruti-dzire-7-1784199462.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/dzire/maruti-dzire-3-1784199442.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/dzire/maruti-dzire-5-1784199452.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/dzire/maruti-dzire-1-1784199431.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/dzire/maruti-dzire-6-1784199457.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/dzire/maruti-dzire-4-1784199447.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/dzire/maruti-dzire-2-1784199436.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/maruti/dzire/maruti-dzire-0-1784199426.png",
  fuelTypes: ["Petrol", "CNG"],
  transmissions: ["Manual", "Automatic"],
  mileage: "24.79 kmpl / 33.73 km/kg",
  features: ["5-Star GNCAP Safety", "Electric Sunroof", "9-inch Touchscreen", "TPMS", "Wireless Charger"],
  colors: ["Gallant Red", "Alluring Blue", "Nutmeg Brown", "Sherwood Brown", "Magma Grey", "Arctic White"],
  rating: 4.8,
  reviewCount: 4120,
  isNew: true,
  isBestSeller: true,
  seatingCapacity: 5,
  bootSpaceL: 382,
  engineCC: 1197,
  powerBHP: 82,
  torqueNm: 112,
  safetyRating: 5,
  description: "The 2026 Maruti Dzire boasts a 5-star GNCAP rating, electric sunroof, brand new Z-Series 1.2L 3-cylinder engine, 6 airbags standard, and class-leading 33.73 km/kg CNG mileage.",
  pros: ["First Maruti sedan with 5-Star GNCAP rating", "Electric sunroof standard on top variant", "Best-in-segment mileage of 33.73 km/kg CNG", "6 airbags standard across all variants"],
  cons: ["3-cylinder engine has slight idle vibration", "Rear headroom tight for tall adults"],
  groundClearance: 163,
  variants: [
    { id: "dzire-lxi", name: "LXi 1.2 MT", price: 679000, fuelType: "Petrol", transmission: "Manual", engineCC: 1197, powerBHP: 82, torqueNm: 112, mileageKmpl: 24.79, features: ["6 Airbags Standard", "ESP", "Hill Hold", "All 4 Power Windows"] },
    { id: "dzire-vxi", name: "VXi 1.2 MT", price: 779000, fuelType: "Petrol", transmission: "Manual", engineCC: 1197, powerBHP: 82, torqueNm: 112, mileageKmpl: 24.79, features: ["7-inch Touchscreen", "Rear AC Vents", "Remote Keyless Entry"] },
    { id: "dzire-zxi-sunroof", name: "ZXi+ Sunroof AMT", price: 969000, fuelType: "Petrol", transmission: "Automatic", engineCC: 1197, powerBHP: 82, torqueNm: 112, mileageKmpl: 25.71, features: ["Electric Sunroof", "360 Camera", "TPMS", "9-inch Touchscreen"] },
    { id: "dzire-vxi-cng", name: "VXi 1.2 CNG", price: 874000, fuelType: "CNG", transmission: "Manual", engineCC: 1197, powerBHP: 69, torqueNm: 102, mileageKmpl: 33.73, features: ["Dual CNG Cylinders", "Rear AC Vents", "ESP", "ABS with EBD"] }
  ],
  dealerPrices: [{ dealerId: "d1", dealerName: "Maruti True Value Ranchi", location: "Ranchi, Jharkhand", price: 679000, discount: 10000, rating: 4.6 }]
};

// 3. Maruti WagonR
export const marutiWagonR: Vehicle = {
  id: "maruti-wagonr-2026",
  slug: "maruti-wagon-r",
  category: "car",
  brand: "Maruti Suzuki",
  model: "Wagon R",
  year: 2026,
  startingPrice: 554500,
  emiFrom: 10500,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/maruti/wagon-r/maruti-wagon-r-4-1767860860.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/wagon-r/maruti-wagon-r-3-1767860860.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/wagon-r/maruti-wagon-r-7-1767860862.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/wagon-r/maruti-wagon-r-1-1767860858.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/wagon-r/maruti-wagon-r-5-1767860861.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/wagon-r/maruti-wagon-r-2-1767860859.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/wagon-r/maruti-wagon-r-0-1767860858.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/wagon-r/maruti-wagon-r-6-1767860862.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/maruti/wagon-r/maruti-wagon-r-4-1767860860.png",
  fuelTypes: ["Petrol", "CNG"],
  transmissions: ["Manual", "Automatic"],
  mileage: "24.35 kmpl / 34.05 km/kg",
  features: ["Tall Boy Design", "Dual Airbags", "7-inch SmartPlay Studio", "Steering Controls", "Split Folding Rear Seats"],
  colors: ["Solid White", "Magma Grey", "Silky Silver", "Gallant Red", "Nutmeg Brown", "Poolside Blue"],
  rating: 4.5,
  reviewCount: 5210,
  isBestSeller: true,
  seatingCapacity: 5,
  bootSpaceL: 341,
  engineCC: 1197,
  powerBHP: 89,
  torqueNm: 113,
  safetyRating: 2,
  description: "The Maruti Wagon R is India's favorite tall-boy hatchback featuring dual engine options (1.0L & 1.2L DualJet), spacious headroom, huge 341L boot space, and 34.05 km/kg CNG efficiency.",
  pros: ["Incredible interior headroom and easy ingress/egress", "Segment-leading 34.05 km/kg CNG efficiency", "Huge 341L boot capacity", "Low maintenance and cheap running costs"],
  cons: ["High speed highway stability is average", "Basic safety rating"],
  groundClearance: 165,
  variants: [
    { id: "wagonr-lxi-10", name: "LXi 1.0 MT", price: 554500, fuelType: "Petrol", transmission: "Manual", engineCC: 998, powerBHP: 66, torqueNm: 89, mileageKmpl: 24.35, features: ["Dual Airbags", "ABS", "Front Power Windows"] },
    { id: "wagonr-vxi-12", name: "VXi 1.2 MT", price: 628000, fuelType: "Petrol", transmission: "Manual", engineCC: 1197, powerBHP: 89, torqueNm: 113, mileageKmpl: 23.56, features: ["Split Rear Seats", "Remote Locking", "Tilt Steering"] },
    { id: "wagonr-zxi-amt", name: "ZXi+ 1.2 AMT", price: 737000, fuelType: "Petrol", transmission: "Automatic", engineCC: 1197, powerBHP: 89, torqueNm: 113, mileageKmpl: 24.43, features: ["7-inch Touchscreen", "Alloy Wheels", "Fog Lamps"] },
    { id: "wagonr-lxi-cng", name: "LXi 1.0 CNG", price: 644500, fuelType: "CNG", transmission: "Manual", engineCC: 998, powerBHP: 56, torqueNm: 82, mileageKmpl: 34.05, features: ["Factory Fitted CNG", "Dual Airbags", "Rear Sensors"] }
  ],
  dealerPrices: [{ dealerId: "d1", dealerName: "Maruti True Value Ranchi", location: "Ranchi, Jharkhand", price: 554500, discount: 20000, rating: 4.6 }]
};

// 4. Maruti Alto K10
export const marutiAltoK10: Vehicle = {
  id: "maruti-alto-k10-2026",
  slug: "maruti-alto-k10",
  category: "car",
  brand: "Maruti Suzuki",
  model: "Alto K10",
  year: 2026,
  startingPrice: 399000,
  emiFrom: 7600,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/maruti/alto-k10/maruti-alto-k10-10-1766734886.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/alto-k10/maruti-alto-k10-4-1766214116.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/alto-k10/maruti-alto-k10-7-1766214118.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/alto-k10/maruti-alto-k10-1-1766214113.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/alto-k10/maruti-alto-k10-5-1766214117.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/alto-k10/maruti-alto-k10-2-1766214114.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/alto-k10/maruti-alto-k10-0-1766214113.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/alto-k10/maruti-alto-k10-9-1766734886.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/maruti/alto-k10/maruti-alto-k10-10-1766734886.png",
  fuelTypes: ["Petrol", "CNG"],
  transmissions: ["Manual", "Automatic"],
  mileage: "24.90 kmpl / 33.85 km/kg",
  features: ["1.0L K-Series Engine", "7-inch Touchscreen", "Dual Airbags", "ABS with EBD", "Reverse Parking Sensors"],
  colors: ["Metallic Sizzling Red", "Metallic Silky Silver", "Metallic Granite Grey", "Metallic Speedy Blue", "Solid White"],
  rating: 4.3,
  reviewCount: 2890,
  seatingCapacity: 5,
  bootSpaceL: 214,
  engineCC: 998,
  powerBHP: 66,
  torqueNm: 89,
  safetyRating: 2,
  description: "The Maruti Alto K10 is India's most affordable entry-level car, powered by a 1.0L Next-Gen K-Series dual jet engine offering nimble city driving and 33.85 km/kg CNG mileage.",
  pros: ["Extremely affordable price point", "Pippy 1.0L K10 engine with smooth AMT option", "Exceptional city maneuverability and easy parking", "Ultra low maintenance cost"],
  cons: ["Thin body panels and light build", "Narrow cabin for 3 adults in rear"],
  groundClearance: 167,
  variants: [
    { id: "alto-std", name: "Std 1.0 MT", price: 399000, fuelType: "Petrol", transmission: "Manual", engineCC: 998, powerBHP: 66, torqueNm: 89, mileageKmpl: 24.39, features: ["Dual Airbags", "ABS", "Reverse Sensors"] },
    { id: "alto-lxi", name: "LXi 1.0 MT", price: 483000, fuelType: "Petrol", transmission: "Manual", engineCC: 998, powerBHP: 66, torqueNm: 89, mileageKmpl: 24.39, features: ["Air Conditioner", "Power Steering", "Body Colored Bumpers"] },
    { id: "alto-vxi-amt", name: "VXi+ 1.0 AMT", price: 585000, fuelType: "Petrol", transmission: "Automatic", engineCC: 998, powerBHP: 66, torqueNm: 89, mileageKmpl: 24.90, features: ["7-inch Touchscreen", "Front Power Windows", "Keyless Entry"] },
    { id: "alto-vxi-cng", name: "VXi 1.0 CNG", price: 596000, fuelType: "CNG", transmission: "Manual", engineCC: 998, powerBHP: 56, torqueNm: 82, mileageKmpl: 33.85, features: ["Factory Fitted CNG", "AC", "Power Steering", "Dual Airbags"] }
  ],
  dealerPrices: [{ dealerId: "d1", dealerName: "Maruti True Value Ranchi", location: "Ranchi, Jharkhand", price: 399000, discount: 12000, rating: 4.6 }]
};

// 5. Maruti Celerio
export const marutiCelerio: Vehicle = {
  id: "maruti-celerio-2026",
  slug: "maruti-celerio",
  category: "car",
  brand: "Maruti Suzuki",
  model: "Celerio",
  year: 2026,
  startingPrice: 536500,
  emiFrom: 10200,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/maruti/celerio/maruti-celerio-7-1767875043.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/celerio/maruti-celerio-6-1767875043.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/celerio/maruti-celerio-2-1767875039.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/celerio/maruti-celerio-4-1767875041.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/celerio/maruti-celerio-0-1767875038.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/celerio/maruti-celerio-5-1767875042.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/celerio/maruti-celerio-3-1767875040.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/celerio/maruti-celerio-1-1767875039.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/maruti/celerio/maruti-celerio-7-1767875043.png",
  fuelTypes: ["Petrol", "CNG"],
  transmissions: ["Manual", "Automatic"],
  mileage: "26.68 kmpl / 35.60 km/kg",
  features: ["India's Most Fuel Efficient Petrol Car", "7-inch Touchscreen", "Engine Push Start", "Dual Airbags", "Hill Hold Assist"],
  colors: ["Solid Fire Red", "Speedy Blue", "Silky Silver", "Glittering Grey", "Arctic White", "Caffeine Brown"],
  rating: 4.4,
  reviewCount: 1980,
  seatingCapacity: 5,
  bootSpaceL: 313,
  engineCC: 998,
  powerBHP: 66,
  torqueNm: 89,
  safetyRating: 3,
  description: "The Maruti Celerio holds the record as India's most petrol fuel-efficient hatchback with an extraordinary 26.68 kmpl mileage, 313L boot space, and 35.60 km/kg CNG efficiency.",
  pros: ["Highest petrol fuel efficiency in India (26.68 kmpl)", "313L large boot space", "Smooth AGS automatic transmission", "Push button start & keyless entry"],
  cons: ["Engine feels strained above 100 km/h", "No rear AC vents"],
  groundClearance: 170,
  variants: [
    { id: "celerio-lxi", name: "LXi 1.0 MT", price: 536500, fuelType: "Petrol", transmission: "Manual", engineCC: 998, powerBHP: 66, torqueNm: 89, mileageKmpl: 25.24, features: ["Dual Airbags", "ABS", "Reverse Sensors"] },
    { id: "celerio-vxi-amt", name: "VXi 1.0 AMT", price: 633000, fuelType: "Petrol", transmission: "Automatic", engineCC: 998, powerBHP: 66, torqueNm: 89, mileageKmpl: 26.68, features: ["Hill Hold Assist", "Power Windows", "Day/Night IRVM"] },
    { id: "celerio-zxi-cng", name: "VXi 1.0 CNG", price: 673000, fuelType: "CNG", transmission: "Manual", engineCC: 998, powerBHP: 56, torqueNm: 82, mileageKmpl: 35.60, features: ["35.6 km/kg Mileage", "Dual Airbags", "Central Locking"] }
  ],
  dealerPrices: [{ dealerId: "d1", dealerName: "Maruti True Value Ranchi", location: "Ranchi, Jharkhand", price: 536500, discount: 15000, rating: 4.6 }]
};

// 6. Maruti Ignis
export const marutiIgnis: Vehicle = {
  id: "maruti-ignis-2026",
  slug: "maruti-ignis",
  category: "car",
  brand: "Maruti Suzuki",
  model: "Ignis",
  year: 2026,
  startingPrice: 584000,
  emiFrom: 11100,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/maruti/baleno/maruti-baleno-4-1766214578.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/baleno/maruti-baleno-2-1766214577.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/baleno/maruti-baleno-7-1766214579.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/baleno/maruti-baleno-0-1766214576.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/baleno/maruti-baleno-5-1766214578.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/baleno/maruti-baleno-3-1766214577.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/baleno/maruti-baleno-1-1766214576.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/baleno/maruti-baleno-6-1766214579.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/maruti/baleno/maruti-baleno-4-1766214578.png",
  fuelTypes: ["Petrol"],
  transmissions: ["Manual", "Automatic"],
  mileage: "20.89 kmpl",
  features: ["Urban SUV Styling", "LED Projector Headlamps", "7-inch SmartPlay Studio", "180mm High Ground Clearance", "Roof Rails"],
  colors: ["Nexa Blue", "Lucent Orange", "Silky Silver", "Turquoise Blue", "Glistening Grey", "Pearl Arctic White"],
  rating: 4.5,
  reviewCount: 2310,
  seatingCapacity: 5,
  bootSpaceL: 260,
  engineCC: 1197,
  powerBHP: 82,
  torqueNm: 113,
  safetyRating: 3,
  description: "The Maruti Ignis is an urban compact crossover hatchback featuring SUV-like high ground clearance of 180mm, bold front grille, 1.2L 4-cylinder engine, and distinctive styling.",
  pros: ["Commanding high seating position & 180mm ground clearance", "Powerful 1.2L 4-cylinder petrol engine", "Easy maneuverability in tight city lanes", "Unique stand-out exterior design"],
  cons: ["Polarizing rear exterior design", "Ride quality is slightly stiff at low speeds"],
  groundClearance: 180,
  variants: [
    { id: "ignis-sigma", name: "Sigma 1.2 MT", price: 584000, fuelType: "Petrol", transmission: "Manual", engineCC: 1197, powerBHP: 82, torqueNm: 113, mileageKmpl: 20.89, features: ["Dual Airbags", "ABS with EBD", "Front Power Windows"] },
    { id: "ignis-delta", name: "Delta 1.2 MT", price: 638000, fuelType: "Petrol", transmission: "Manual", engineCC: 1197, powerBHP: 82, torqueNm: 113, mileageKmpl: 20.89, features: ["Audio System", "Electric ORVMs", "Steering Controls"] },
    { id: "ignis-alpha-amt", name: "Alpha 1.2 AMT", price: 806000, fuelType: "Petrol", transmission: "Automatic", engineCC: 1197, powerBHP: 82, torqueNm: 113, mileageKmpl: 20.89, features: ["LED Projectors", "Rear Camera", "Auto AC", "Alloy Wheels"] }
  ],
  dealerPrices: [{ dealerId: "d1", dealerName: "Maruti True Value Ranchi", location: "Ranchi, Jharkhand", price: 584000, discount: 25000, rating: 4.6 }]
};

// 7. Maruti XL6
export const marutiXl6: Vehicle = {
  id: "maruti-xl6-2026",
  slug: "maruti-xl6",
  category: "car",
  brand: "Maruti Suzuki",
  model: "XL6",
  year: 2026,
  startingPrice: 1161000,
  emiFrom: 22100,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/maruti/xl6/maruti-xl6-6-1766216359.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/xl6/maruti-xl6-7-1766216359.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/xl6/maruti-xl6-0-1766216344.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/xl6/maruti-xl6-2-1766216350.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/xl6/maruti-xl6-4-1766216351.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/xl6/maruti-xl6-5-1766216358.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/xl6/maruti-xl6-3-1766216351.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/xl6/maruti-xl6-1-1766216345.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/maruti/xl6/maruti-xl6-6-1766216359.png",
  fuelTypes: ["Petrol", "CNG"],
  transmissions: ["Manual", "Automatic"],
  mileage: "20.97 kmpl / 26.32 km/kg",
  features: ["Captain Seats 2nd Row", "Ventilated Front Seats", "360 Degree Camera", "6-Speed AT with Paddle Shifters", "TPMS"],
  colors: ["Nexa Blue", "Opulent Red", "Brave Khakhi", "Grandeur Grey", "Splendid Silver", "Arctic White"],
  rating: 4.7,
  reviewCount: 1840,
  isBestSeller: true,
  seatingCapacity: 6,
  bootSpaceL: 209,
  engineCC: 1462,
  powerBHP: 102,
  torqueNm: 136.8,
  safetyRating: 3,
  description: "The Maruti XL6 is a premium 6-seater MPV sold via Nexa dealerships, offering captain seats with individual armrests, ventilated front seats, 6-speed automatic, and CNG option.",
  pros: ["Ultra comfortable 2nd-row captain seats", "Front ventilated seats & 360 camera", "Smooth 6-speed torque converter AT with paddle shifters", "Refined 1.5L K15C engine with Smart Hybrid"],
  cons: ["No 7-seater option available in XL6 line", "Lacks diesel engine option"],
  groundClearance: 180,
  variants: [
    { id: "xl6-zeta", name: "Zeta 1.5 MT", price: 1161000, fuelType: "Petrol", transmission: "Manual", engineCC: 1462, powerBHP: 102, torqueNm: 136.8, mileageKmpl: 20.97, features: ["Captain Seats", "4 Airbags", "7-inch Touchscreen", "Cruiser Control"] },
    { id: "xl6-alpha-at", name: "Alpha+ 1.5 AT", price: 1461000, fuelType: "Petrol", transmission: "Automatic", engineCC: 1462, powerBHP: 102, torqueNm: 136.8, mileageKmpl: 20.27, features: ["Ventilated Seats", "360 Camera", "TPMS", "Leatherette Upholstery"] },
    { id: "xl6-zeta-cng", name: "Zeta 1.5 CNG", price: 1256000, fuelType: "CNG", transmission: "Manual", engineCC: 1462, powerBHP: 87, torqueNm: 121.5, mileageKmpl: 26.32, features: ["Factory CNG", "Captain Seats", "Smart Hybrid Tech", "Auto AC"] }
  ],
  dealerPrices: [{ dealerId: "d1", dealerName: "Maruti True Value Ranchi", location: "Ranchi, Jharkhand", price: 1161000, discount: 15000, rating: 4.6 }]
};

// 8. Maruti Jimny
export const marutiJimny: Vehicle = {
  id: "maruti-jimny-2026",
  slug: "maruti-jimny",
  category: "car",
  brand: "Maruti Suzuki",
  model: "Jimny",
  year: 2026,
  startingPrice: 1274000,
  emiFrom: 24200,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/maruti/jimny/maruti-jimny-1-1767861206.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/jimny/maruti-jimny-2-1767861206.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/jimny/maruti-jimny-14-1766739758.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/jimny/maruti-jimny-1-1766739745.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/jimny/maruti-jimny-0-1767861205.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/jimny/maruti-jimny-3-1767861207.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/jimny/maruti-jimny-0-1766739744.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/jimny/maruti-jimny-13-1766739757.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/maruti/jimny/maruti-jimny-1-1767861206.png",
  fuelTypes: ["Petrol"],
  transmissions: ["Manual", "Automatic"],
  mileage: "16.94 kmpl",
  features: ["ALLGRIP PRO 4x4 with Low Range Transfer Gear", "LSD (Brake Limited Slip Differential)", "Ladder Frame Chassis", "9-inch Touchscreen", "6 Airbags Standard"],
  colors: ["Kinetic Yellow", "Sizzling Red", "Granite Grey", "Nexa Blue", "Bluish Black", "Pearl Arctic White"],
  rating: 4.7,
  reviewCount: 1650,
  seatingCapacity: 4,
  bootSpaceL: 208,
  engineCC: 1462,
  powerBHP: 103,
  torqueNm: 134.2,
  safetyRating: 4,
  description: "The Maruti Jimny 5-Door is an authentic ladder-frame 4x4 off-roader featuring Suzuki's ALLGRIP PRO 4WD system with low-range transfer case, rigid axle suspension, and 210mm ground clearance.",
  pros: ["Unstoppable off-road capability with ALLGRIP PRO 4x4 low ratio", "Compact dimensions navigate extreme mountain trails easily", "Rigid ladder frame chassis build", "6 airbags standard"],
  cons: ["On-road high speed punch is modest", "4-seater configuration only"],
  groundClearance: 210,
  variants: [
    { id: "jimny-zeta", name: "Zeta 1.5 4x4 MT", price: 1274000, fuelType: "Petrol", transmission: "Manual", engineCC: 1462, powerBHP: 103, torqueNm: 134.2, mileageKmpl: 16.94, features: ["ALLGRIP PRO 4x4", "6 Airbags", "ESP", "Brake LSD", "7-inch Touchscreen"] },
    { id: "jimny-alpha-at", name: "Alpha 1.5 4x4 AT", price: 1479000, fuelType: "Petrol", transmission: "Automatic", engineCC: 1462, powerBHP: 103, torqueNm: 134.2, mileageKmpl: 16.39, features: ["LED Headlamps", "9-inch Touchscreen", "Headlamp Washers", "Cruise Control"] }
  ],
  dealerPrices: [{ dealerId: "d1", dealerName: "Maruti True Value Ranchi", location: "Ranchi, Jharkhand", price: 1274000, discount: 50000, rating: 4.6 }]
};

// 9. Maruti Invicto
export const marutiInvicto: Vehicle = {
  id: "maruti-invicto-2026",
  slug: "maruti-invicto",
  category: "car",
  brand: "Maruti Suzuki",
  model: "Invicto",
  year: 2026,
  startingPrice: 2521000,
  emiFrom: 47900,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/maruti/invicto/maruti-invicto-5-1766739546.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/invicto/maruti-invicto-4-1766215994.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/invicto/maruti-invicto-5-1766215994.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/invicto/maruti-invicto-0-1766215991.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/invicto/maruti-invicto-3-1766215993.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/invicto/maruti-invicto-1-1766215992.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/invicto/maruti-invicto-2-1766215993.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/invicto/maruti-invicto-6-1766215995.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/maruti/invicto/maruti-invicto-5-1766739546.png",
  fuelTypes: ["Hybrid"],
  transmissions: ["Automatic"],
  mileage: "23.24 kmpl",
  features: ["2.0L Strong Hybrid System", "Panoramic Sunroof", "Powered Tailgate", "Ventilated Seats", "360 Camera"],
  colors: ["Nexa Blue", "Stellar Bronze", "Majestic Silver", "Super White"],
  rating: 4.8,
  reviewCount: 890,
  seatingCapacity: 7,
  bootSpaceL: 300,
  engineCC: 1987,
  powerBHP: 184,
  torqueNm: 209,
  safetyRating: 5,
  description: "The Maruti Invicto is Nexa's flagship luxury 7-seater MPV powered by a 2.0L Strong Hybrid e-CVT drivetrain delivering 186 PS total system power and incredible 23.24 kmpl mileage.",
  pros: ["Superb 23.24 kmpl fuel efficiency for a large 7-seater MPV", "Silky smooth e-CVT strong hybrid acceleration", "Panoramic sunroof & electric powered tailgate", "Plush 7-seater lounge cabin"],
  cons: ["No ADAS feature package on Invicto", "High flagship price tier"],
  groundClearance: 185,
  variants: [
    { id: "invicto-zeta-7", name: "Zeta+ 2.0 Hybrid 7-Str", price: 2521000, fuelType: "Hybrid", transmission: "Automatic", engineCC: 1987, powerBHP: 184, torqueNm: 209, mileageKmpl: 23.24, features: ["Strong Hybrid e-CVT", "6 Airbags", "8-inch Touchscreen", "17-inch Alloys"] },
    { id: "invicto-alpha-7", name: "Alpha+ 2.0 Hybrid 7-Str", price: 2892000, fuelType: "Hybrid", transmission: "Automatic", engineCC: 1987, powerBHP: 184, torqueNm: 209, mileageKmpl: 23.24, features: ["Panoramic Sunroof", "Ventilated Seats", "360 Camera", "Powered Tailgate"] }
  ],
  dealerPrices: [{ dealerId: "d1", dealerName: "Maruti True Value Ranchi", location: "Ranchi, Jharkhand", price: 2521000, discount: 20000, rating: 4.6 }]
};

// 10. Maruti Eeco
export const marutiEeco: Vehicle = {
  id: "maruti-eeco-2026",
  slug: "maruti-eeco",
  category: "car",
  brand: "Maruti Suzuki",
  model: "Eeco",
  year: 2026,
  startingPrice: 532000,
  emiFrom: 10100,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/maruti/eeco/maruti-eeco-5-1766736854.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/eeco/maruti-eeco-6-1766214798.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/eeco/maruti-eeco-1-1766214794.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/eeco/maruti-eeco-3-1766214796.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/eeco/maruti-eeco-7-1766214799.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/eeco/maruti-eeco-4-1766214797.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/eeco/maruti-eeco-2-1766214795.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/eeco/maruti-eeco-0-1766214794.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/maruti/eeco/maruti-eeco-5-1766736854.png",
  fuelTypes: ["Petrol", "CNG"],
  transmissions: ["Manual"],
  mileage: "19.71 kmpl / 26.78 km/kg",
  features: ["5 or 7 Seating Options", "1.2L K-Series DualJet Engine", "Digital Instrument Cluster", "Dual Airbags", "Sliding Rear Doors"],
  colors: ["Metallic Glistening Grey", "Metallic Silky Silver", "Pearl Midnight Black", "Solid White", "Cerulean Blue"],
  rating: 4.2,
  reviewCount: 3110,
  seatingCapacity: 7,
  bootSpaceL: 540,
  engineCC: 1197,
  powerBHP: 80,
  torqueNm: 104.4,
  safetyRating: 2,
  description: "The Maruti Eeco is India's most practical multi-purpose family and commercial van, equipped with a 1.2L Advanced K-Series DualJet engine, sliding doors, and up to 7 seating capacity.",
  pros: ["Unmatched versatility and massive load-carrying capacity", "Very affordable price point for a 7-seater", "Reliable 1.2L engine with CNG factory option", "Low running cost"],
  cons: ["Barebones basic interior amenities", "No power steering on base variants"],
  groundClearance: 160,
  variants: [
    { id: "eeco-5str-std", name: "5-Seater Standard", price: 532000, fuelType: "Petrol", transmission: "Manual", engineCC: 1197, powerBHP: 80, torqueNm: 104.4, mileageKmpl: 19.71, features: ["Dual Airbags", "ABS with EBD", "Digital Cluster"] },
    { id: "eeco-7str-std", name: "7-Seater Standard", price: 561000, fuelType: "Petrol", transmission: "Manual", engineCC: 1197, powerBHP: 80, torqueNm: 104.4, mileageKmpl: 19.71, features: ["7 Seats", "Child Locks", "Engine Immobilizer"] },
    { id: "eeco-5str-cng", name: "5-Seater AC CNG", price: 658000, fuelType: "CNG", transmission: "Manual", engineCC: 1197, powerBHP: 71, torqueNm: 95, mileageKmpl: 26.78, features: ["Factory Fitted CNG", "Air Conditioner", "Heater"] }
  ],
  dealerPrices: [{ dealerId: "d1", dealerName: "Maruti True Value Ranchi", location: "Ranchi, Jharkhand", price: 532000, discount: 10000, rating: 4.6 }]
};

// 11. Tata Punch EV
export const tataPunchEv: Vehicle = {
  id: "tata-punch-ev-2026",
  slug: "tata-punch-ev",
  category: "car",
  brand: "Tata",
  model: "Punch.ev",
  year: 2026,
  startingPrice: 1099000,
  emiFrom: 20900,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/tata/punch/tata-punch-0-1769487768.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/punch/tata-punch-7-1769487773.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/punch/tata-punch-3-1769487770.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/punch/tata-punch-5-1769487771.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/punch/tata-punch-1-1769487768.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/punch/tata-punch-6-1769487772.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/punch/tata-punch-4-1769487771.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/punch/tata-punch-2-1769487769.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/tata/punch/tata-punch-0-1769487768.png",
  fuelTypes: ["Electric"],
  transmissions: ["Automatic"],
  mileage: "421 km Range",
  features: ["acti.ev Architecture", "10.25-inch Touchscreen", "Ventilated Front Seats", "360 Degree Camera", "Electronic Parking Brake"],
  colors: ["Empowered Oxide", "Seaweed Green", "Daytona Grey", "Fearless Yellow", "Pristine White"],
  rating: 4.8,
  reviewCount: 1450,
  isNew: true,
  isEV: true,
  isBestSeller: true,
  seatingCapacity: 5,
  bootSpaceL: 366,
  engineCC: 0,
  powerBHP: 121,
  torqueNm: 190,
  safetyRating: 5,
  description: "The Tata Punch.ev is built on Tata's advanced acti.ev pure EV architecture featuring a 35 kWh battery pack delivering up to 421 km ARAI range, 5-Star BNCAP safety rating, ventilated seats, and 10.25-inch infotainment.",
  pros: ["5-Star BNCAP safety rating", "Impressive 421 km claimed range", "Pippy 122 PS electric motor with instant torque", "Rich features: ventilated seats, 360 camera, electronic handbrake"],
  cons: ["Rear legroom is adequate, not class-leading", "DC fast charging network availability in rural areas"],
  groundClearance: 190,
  variants: [
    { id: "punch-ev-smart", name: "Smart 25 kWh", price: 1099000, fuelType: "Electric", transmission: "Automatic", engineCC: 0, powerBHP: 81, torqueNm: 114, mileageKmpl: 0, rangeKm: 315, features: ["LED Headlamps", "ESP", "6 Airbags", "Paddle Shifters for Regen"] },
    { id: "punch-ev-empowered-lr", name: "Empowered+ Long Range 35 kWh", price: 1449000, fuelType: "Electric", transmission: "Automatic", engineCC: 0, powerBHP: 122, torqueNm: 190, mileageKmpl: 0, rangeKm: 421, features: ["Ventilated Seats", "360 Camera", "10.25-inch Touchscreen", "Wireless Charger", "Sunroof"] }
  ],
  dealerPrices: [{ dealerId: "d5", dealerName: "Tata Motors Ranchi", location: "Ranchi, Jharkhand", price: 1099000, discount: 20000, rating: 4.7 }]
};

// 12. Tata Nexon EV
export const tataNexonEv: Vehicle = {
  id: "tata-nexon-ev-2026",
  slug: "tata-nexon-ev",
  category: "car",
  brand: "Tata",
  model: "Nexon.ev",
  year: 2026,
  startingPrice: 1449000,
  emiFrom: 27500,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/tata/nexon-ev/tata-nexon-ev-0-1769491378.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/nexon-ev/tata-nexon-ev-6-1766220962.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/nexon-ev/tata-nexon-ev-7-1766220962.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/nexon-ev/tata-nexon-ev-2-1766220959.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/nexon-ev/tata-nexon-ev-5-1766220961.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/nexon-ev/tata-nexon-ev-3-1766220959.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/nexon-ev/tata-nexon-ev-1-1766220958.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/nexon-ev/tata-nexon-ev-4-1766220960.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/tata/nexon-ev/tata-nexon-ev-0-1769491378.png",
  fuelTypes: ["Electric"],
  transmissions: ["Automatic"],
  mileage: "465 km Range",
  features: ["V2L & V2V Vehicle Charging Technology", "12.3-inch Cinematic Touchscreen", "JBL 9-Speaker Audio", "Ventilated Front Seats", "Electronic Parking Brake"],
  colors: ["Empowered Oxide", "Intense-Teal", "Daytona Grey", "Creative Ocean", "Pristine White"],
  rating: 4.8,
  reviewCount: 2980,
  isEV: true,
  isBestSeller: true,
  seatingCapacity: 5,
  bootSpaceL: 350,
  engineCC: 0,
  powerBHP: 143,
  torqueNm: 215,
  safetyRating: 5,
  description: "The Tata Nexon.ev is India's highest selling electric SUV, boasting a 465 km range, bi-directional V2L & V2V charging capabilities, 12.3-inch ultra-wide touchscreen, and 5-Star safety.",
  pros: ["Pioneer of V2L (Vehicle to Load) external device power", "Punchy 145 PS electric motor (0-100 in 8.9s)", "12.3-inch cinematic touchscreen with JBL audio", "5-Star BNCAP safety rating"],
  cons: ["Stiff low-speed suspension tune over sharp potholes", "Real world range is around 300-330 km"],
  groundClearance: 190,
  variants: [
    { id: "nexon-ev-creative-mr", name: "Creative+ Medium Range 30 kWh", price: 1449000, fuelType: "Electric", transmission: "Automatic", engineCC: 0, powerBHP: 129, torqueNm: 215, mileageKmpl: 0, rangeKm: 325, features: ["6 Airbags", "10.25-inch Touchscreen", "LED DRLs", "Paddle Regen"] },
    { id: "nexon-ev-empowered-lr", name: "Empowered+ Long Range 40.5 kWh", price: 1949000, fuelType: "Electric", transmission: "Automatic", engineCC: 0, powerBHP: 143, torqueNm: 215, mileageKmpl: 0, rangeKm: 465, features: ["V2L/V2V Tech", "12.3-inch Touchscreen", "JBL 9 Speakers", "Ventilated Seats", "360 Camera"] }
  ],
  dealerPrices: [{ dealerId: "d5", dealerName: "Tata Motors Ranchi", location: "Ranchi, Jharkhand", price: 1449000, discount: 30000, rating: 4.7 }]
};

// 13. Tata Curvv EV
export const tataCurvvEv: Vehicle = {
  id: "tata-curvv-ev-2026",
  slug: "tata-curvv-ev",
  category: "car",
  brand: "Tata",
  model: "Curvv.ev",
  year: 2026,
  startingPrice: 1749000,
  emiFrom: 33200,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/tata/curvv/tata-curvv-0-1769674441.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/curvv/tata-curvv-6-1766142173.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/curvv/tata-curvv-7-1766142174.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/curvv/tata-curvv-2-1766142168.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/curvv/tata-curvv-5-1766142172.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/curvv/tata-curvv-3-1766142171.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/curvv/tata-curvv-1-1766142168.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/curvv/tata-curvv-4-1766142172.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/tata/curvv/tata-curvv-0-1769674441.png",
  fuelTypes: ["Electric"],
  transmissions: ["Automatic"],
  mileage: "585 km Range",
  features: ["Coupe SUV Styling", "Gesture Controlled Powered Tailgate", "Flush Door Handles", "Level 2 ADAS", "55 kWh Battery Pack"],
  colors: ["Virtual Sunrise", "Flame Red", "Empowered White", "Pure Grey", "Pristine White"],
  rating: 4.9,
  reviewCount: 910,
  isNew: true,
  isEV: true,
  seatingCapacity: 5,
  bootSpaceL: 500,
  engineCC: 0,
  powerBHP: 167,
  torqueNm: 215,
  safetyRating: 5,
  description: "The Tata Curvv.ev is India's first mass-market Electric Coupe SUV, offering a massive 55 kWh battery pack with up to 585 km range, flush pop-out door handles, gesture tailgate, and Level 2 ADAS.",
  pros: ["Stunning coupe SUV silhouette & pop-out flush door handles", "Segment-best 585 km ARAI certified range (55 kWh battery)", "0-100 km/h in 8.6 seconds", "Huge 500L boot space + 11.6L frunk"],
  cons: ["Sloping rear roofline slightly reduces rear headroom for 6-footers", "Premium price segment"],
  groundClearance: 190,
  variants: [
    { id: "curvv-ev-creative-45", name: "Creative 45 kWh", price: 1749000, fuelType: "Electric", transmission: "Automatic", engineCC: 0, powerBHP: 150, torqueNm: 215, mileageKmpl: 0, rangeKm: 502, features: ["18-inch Alloy Wheels", "V2L/V2V Tech", "10.25-inch Touchscreen", "6 Airbags"] },
    { id: "curvv-ev-empowered-55", name: "Empowered+ A 55 kWh", price: 2199000, fuelType: "Electric", transmission: "Automatic", engineCC: 0, powerBHP: 167, torqueNm: 215, mileageKmpl: 0, rangeKm: 585, features: ["Level 2 ADAS", "Gesture Powered Tailgate", "Panoramic Sunroof", "JBL Audio", "Ventilated Seats"] }
  ],
  dealerPrices: [{ dealerId: "d5", dealerName: "Tata Motors Ranchi", location: "Ranchi, Jharkhand", price: 1749000, discount: 25000, rating: 4.7 }]
};

// 14. Tata Tiago EV
export const tataTiagoEv: Vehicle = {
  id: "tata-tiago-ev-2026",
  slug: "tata-tiago-ev",
  category: "car",
  brand: "Tata",
  model: "Tiago.ev",
  year: 2026,
  startingPrice: 799000,
  emiFrom: 15200,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/tata/tiago-ev-facelift/tata-tiago-ev-facelift-0-1779970716.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/tiago-ev-facelift/tata-tiago-ev-facelift-7-1779970718.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/tiago-ev-facelift/tata-tiago-ev-facelift-3-1779970717.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/tiago-ev-facelift/tata-tiago-ev-facelift-5-1779970717.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/tiago-ev-facelift/tata-tiago-ev-facelift-1-1779970716.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/tiago-ev-facelift/tata-tiago-ev-facelift-6-1779970717.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/tiago-ev-facelift/tata-tiago-ev-facelift-4-1779970717.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/tiago-ev-facelift/tata-tiago-ev-facelift-2-1779970716.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/tata/tiago-ev-facelift/tata-tiago-ev-facelift-0-1779970716.png",
  fuelTypes: ["Electric"],
  transmissions: ["Automatic"],
  mileage: "315 km Range",
  features: ["Multi-Mode Regen", "ZConnect Telematics", "Harman 8-Speaker Audio", "Auto Climate Control", "Cruise Control"],
  colors: ["Teal Blue", "Daytona Grey", "Tropical Mist", "Pristine White", "Midnight Plum"],
  rating: 4.6,
  reviewCount: 3410,
  isEV: true,
  isBestSeller: true,
  seatingCapacity: 5,
  bootSpaceL: 240,
  engineCC: 0,
  powerBHP: 74,
  torqueNm: 114,
  safetyRating: 4,
  description: "The Tata Tiago.ev is India's most accessible electric hatchback featuring up to 315 km range, Harman audio, multi-mode regenerative braking, and smooth automatic electric drive.",
  pros: ["Most affordable electric car ownership in India", "Super smooth & silent city commuting", "Harman 8-speaker audio setup", "Multi-level regen braking paddle control"],
  cons: ["DC fast charging caps at 25 kW", "Boot space reduced by spare wheel placement"],
  groundClearance: 166,
  variants: [
    { id: "tiago-ev-xe-mr", name: "XE Medium Range 19.2 kWh", price: 799000, fuelType: "Electric", transmission: "Automatic", engineCC: 0, powerBHP: 61, torqueNm: 110, mileageKmpl: 0, rangeKm: 250, features: ["Automatic Climate Control", "Dual Airbags", "Telematics"] },
    { id: "tiago-ev-xz-lr", name: "XZ+ Tech LUX Long Range 24 kWh", price: 1189000, fuelType: "Electric", transmission: "Automatic", engineCC: 0, powerBHP: 74, torqueNm: 114, mileageKmpl: 0, rangeKm: 315, features: ["7.2 kW AC Fast Charging", "Leatherette Seats", "Rain Sensing Wipers", "Cruise Control"] }
  ],
  dealerPrices: [{ dealerId: "d5", dealerName: "Tata Motors Ranchi", location: "Ranchi, Jharkhand", price: 799000, discount: 15000, rating: 4.7 }]
};

// 15. Tata Tigor
export const tataTigor: Vehicle = {
  id: "tata-tigor-2026",
  slug: "tata-tigor",
  category: "car",
  brand: "Tata",
  model: "Tigor",
  year: 2026,
  startingPrice: 630000,
  emiFrom: 12000,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/tata/tigor/tata-tigor-0-1769767058.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/tigor/tata-tigor-5-1766223833.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/tigor/tata-tigor-6-1766223834.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/tigor/tata-tigor-4-1766223833.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/tigor/tata-tigor-1-1766223831.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/tigor/tata-tigor-2-1766223832.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/tigor/tata-tigor-7-1766223835.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/tigor/tata-tigor-3-1766223832.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/tata/tigor/tata-tigor-0-1769767058.png",
  fuelTypes: ["Petrol", "CNG"],
  transmissions: ["Manual", "Automatic"],
  mileage: "19.6 kmpl / 28.06 km/kg",
  features: ["4-Star GNCAP Safety", "iCNG Twin-Cylinder Tech", "7-inch Touchscreen by Harman", "Digital Instrument Cluster", "Projector Headlamps"],
  colors: ["Magnetic Red", "Arizona Blue", "Daytona Grey", "Opal White", "Meteor Bronze"],
  rating: 4.5,
  reviewCount: 1780,
  seatingCapacity: 5,
  bootSpaceL: 419,
  engineCC: 1199,
  powerBHP: 85,
  torqueNm: 113,
  safetyRating: 4,
  description: "The Tata Tigor is a stylish compact sedan featuring 4-Star GNCAP safety rating, innovative Twin-Cylinder iCNG technology with usable 70L boot space, and premium Harman audio.",
  pros: ["4-Star GNCAP safety rating build", "iCNG Twin cylinder tech leaves usable boot space", "Harman 8-speaker audio system", "Smooth AMT available on both Petrol & CNG"],
  cons: ["3-cylinder petrol engine engine refinement at high revs", "Rear seat legroom is moderate"],
  groundClearance: 170,
  variants: [
    { id: "tigor-xe", name: "XE 1.2 MT", price: 630000, fuelType: "Petrol", transmission: "Manual", engineCC: 1199, powerBHP: 85, torqueNm: 113, mileageKmpl: 19.6, features: ["4-Star Safety", "Dual Airbags", "ABS", "Digital Cluster"] },
    { id: "tigor-xm-cng", name: "XM iCNG", price: 775000, fuelType: "CNG", transmission: "Manual", engineCC: 1199, powerBHP: 73.5, torqueNm: 95, mileageKmpl: 28.06, features: ["Twin Cylinder CNG", "4 Speakers", "Power Windows"] },
    { id: "tigor-xz-icng-amt", name: "XZ+ iCNG AMT", price: 955000, fuelType: "CNG", transmission: "Automatic", engineCC: 1199, powerBHP: 73.5, torqueNm: 95, mileageKmpl: 28.06, features: ["First-in-Segment CNG AMT", "Auto AC", "Rear Camera", "Projector Headlamps"] }
  ],
  dealerPrices: [{ dealerId: "d5", dealerName: "Tata Motors Ranchi", location: "Ranchi, Jharkhand", price: 630000, discount: 20000, rating: 4.7 }]
};

// 16. Tata Tigor EV
export const tataTigorEv: Vehicle = {
  id: "tata-tigor-ev-2026",
  slug: "tata-tigor-ev",
  category: "car",
  brand: "Tata",
  model: "Tigor.ev",
  year: 2026,
  startingPrice: 1249000,
  emiFrom: 23700,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/tata/tigorev/tata-tigorev-10-1766751388.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/tigorev/tata-tigorev-3-1766224676.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/tigorev/tata-tigorev-4-1766224676.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/tigorev/tata-tigorev-2-1766224675.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/tigorev/tata-tigorev-7-1766224678.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/tigorev/tata-tigorev-0-1766224674.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/tigorev/tata-tigorev-5-1766224677.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/tigorev/tata-tigorev-1-1766224675.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/tata/tigorev/tata-tigorev-10-1766751388.png",
  fuelTypes: ["Electric"],
  transmissions: ["Automatic"],
  mileage: "315 km Range",
  features: ["Ziptron EV Tech", "4-Star GNCAP Electric Safety", "Harman Touchscreen", "Auto Temperature Control", "Rear Camera"],
  colors: ["Signature Teal Blue", "Daytona Grey", "Magnetic Red"],
  rating: 4.6,
  reviewCount: 920,
  isEV: true,
  seatingCapacity: 5,
  bootSpaceL: 316,
  engineCC: 0,
  powerBHP: 74,
  torqueNm: 170,
  safetyRating: 4,
  description: "The Tata Tigor.ev is India's most affordable electric sedan powered by Ziptron technology, delivering 315 km range, 170 Nm instant torque, and 4-star safety rating.",
  pros: ["4-Star GNCAP electric sedan safety", "Instant 170 Nm electric torque", "Usable 316L boot space", "Silent and smooth city transport"],
  cons: ["Design is virtually identical to standard Tigor", "26 kWh battery capacity"],
  groundClearance: 172,
  variants: [
    { id: "tigor-ev-xe", name: "XE 26 kWh", price: 1249000, fuelType: "Electric", transmission: "Automatic", engineCC: 0, powerBHP: 74, torqueNm: 170, mileageKmpl: 0, rangeKm: 315, features: ["Automatic AC", "Dual Airbags", "ZConnect App"] },
    { id: "tigor-ev-xz-plus", name: "XZ+ Lux 26 kWh", price: 1375000, fuelType: "Electric", transmission: "Automatic", engineCC: 0, powerBHP: 74, torqueNm: 170, mileageKmpl: 0, rangeKm: 315, features: ["Harman Touchscreen", "Rear Camera", "Push Button Start", "Leatherette Steering"] }
  ],
  dealerPrices: [{ dealerId: "d5", dealerName: "Tata Motors Ranchi", location: "Ranchi, Jharkhand", price: 1249000, discount: 25000, rating: 4.7 }]
};

// 17. Tata Harrier EV
export const tataHarrierEv: Vehicle = {
  id: "tata-harrier-ev-2026",
  slug: "tata-harrier-ev",
  category: "car",
  brand: "Tata",
  model: "Harrier.ev",
  year: 2026,
  startingPrice: 2400000,
  emiFrom: 45600,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/tata/harrier/tata-harrier-0-1766203373.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/harrier/tata-harrier-6-1766203376.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/harrier/tata-harrier-7-1766203377.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/harrier/tata-harrier-2-1766203374.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/harrier/tata-harrier-5-1766203376.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/harrier/tata-harrier-3-1766203375.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/harrier/tata-harrier-1-1766203374.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/harrier/tata-harrier-4-1766203375.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/tata/harrier/tata-harrier-0-1766203373.png",
  fuelTypes: ["Electric"],
  transmissions: ["Automatic"],
  mileage: "500 km Range",
  features: ["Dual Motor All-Wheel Drive (AWD)", "60 kWh Battery Pack", "12.3-inch Harman Touchscreen", "Level 2 ADAS", "Terrain Response Modes"],
  colors: ["Sunlit Yellow", "Oberon Black", "Empowered White", "Pebble Grey"],
  rating: 4.9,
  reviewCount: 540,
  isNew: true,
  isEV: true,
  seatingCapacity: 5,
  bootSpaceL: 445,
  engineCC: 0,
  powerBHP: 220,
  torqueNm: 350,
  safetyRating: 5,
  description: "The Tata Harrier.ev is a flagship all-electric 4x4 SUV featuring dual motor AWD setup, 60 kWh battery, 500 km range, 5-Star BNCAP rating, terrain response modes, and Level 2 ADAS.",
  pros: ["Dual-motor AWD capability for extreme off-roading", "Brutal 350 Nm electric torque output", "Flagship luxury interior with 12.3-inch screen", "5-Star BNCAP safety standard"],
  cons: ["Expected premium price above ₹24 Lakhs"],
  groundClearance: 205,
  variants: [
    { id: "harrier-ev-rwd", name: "Empowered RWD 60 kWh", price: 2400000, fuelType: "Electric", transmission: "Automatic", engineCC: 0, powerBHP: 180, torqueNm: 280, mileageKmpl: 0, rangeKm: 500, features: ["Panoramic Sunroof", "12.3-inch Touchscreen", "JBL 10 Speakers", "Ventilated Seats"] },
    { id: "harrier-ev-awd", name: "Empowered AWD Dual Motor 60 kWh", price: 2750000, fuelType: "Electric", transmission: "Automatic", engineCC: 0, powerBHP: 220, torqueNm: 350, mileageKmpl: 0, rangeKm: 480, features: ["Dual Motor AWD", "Terrain Modes", "Level 2 ADAS", "Gesture Tailgate"] }
  ],
  dealerPrices: [{ dealerId: "d5", dealerName: "Tata Motors Ranchi", location: "Ranchi, Jharkhand", price: 2400000, discount: 0, rating: 4.7 }]
};

// 18. Tata Xpres-T EV
export const tataExpressT: Vehicle = {
  id: "tata-xpres-t-ev-2026",
  slug: "tata-xpres-t-ev",
  category: "car",
  brand: "Tata",
  model: "Xpres-T EV",
  year: 2026,
  startingPrice: 1304000,
  emiFrom: 24800,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/tata/xpres-t-ev/tata-xpres-t-ev-0-1767850122.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/xpres-t-ev/tata-xpres-t-ev-3-1766751121.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/xpres-t-ev/tata-xpres-t-ev-8-1766751132.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/xpres-t-ev/tata-xpres-t-ev-7-1766751131.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/xpres-t-ev/tata-xpres-t-ev-6-1766751131.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/xpres-t-ev/tata-xpres-t-ev-2-1766751121.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/xpres-t-ev/tata-xpres-t-ev-5-1766751130.png",
    "https://images.91wheels.com/assets/c_images/gallery/tata/xpres-t-ev/tata-xpres-t-ev-4-1766751130.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/tata/xpres-t-ev/tata-xpres-t-ev-0-1767850122.png",
  fuelTypes: ["Electric"],
  transmissions: ["Automatic"],
  mileage: "315 km Range",
  features: ["Commercial Fleet EV Sedan", "Fast Charging 0-80% in 59 mins", "Automatic Climate Control", "Dual Airbags", "ABS with EBD"],
  colors: ["Pearlescent White"],
  rating: 4.4,
  reviewCount: 420,
  isEV: true,
  seatingCapacity: 5,
  bootSpaceL: 255,
  engineCC: 0,
  powerBHP: 41,
  torqueNm: 105,
  safetyRating: 4,
  description: "The Tata Xpres-T EV is a dedicated electric fleet sedan built specifically for commercial mobility operators, cab services, and corporate transport offering 315 km range and low running costs.",
  pros: ["Extremely low operating cost per km for fleet operators", "Proven durability in commercial taxi networks", "Fast charging capability"],
  cons: ["Basic feature set tailored strictly for fleet use"],
  groundClearance: 172,
  variants: [
    { id: "xpres-t-26", name: "XM+ 26 kWh", price: 1304000, fuelType: "Electric", transmission: "Automatic", engineCC: 0, powerBHP: 41, torqueNm: 105, mileageKmpl: 0, rangeKm: 315, features: ["Auto AC", "Dual Airbags", "ABS", "Fast Charge Port"] }
  ],
  dealerPrices: [{ dealerId: "d5", dealerName: "Tata Motors Ranchi", location: "Ranchi, Jharkhand", price: 1304000, discount: 20000, rating: 4.7 }]
};

// 19. Hyundai Alcazar
export const hyundaiAlcazar: Vehicle = {
  id: "hyundai-alcazar-2026",
  slug: "hyundai-alcazar",
  category: "car",
  brand: "Hyundai",
  model: "Alcazar",
  year: 2026,
  startingPrice: 1499000,
  emiFrom: 28500,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/alcazar/hyundai-alcazar-8-1766205340.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/alcazar/hyundai-alcazar-7-1766205339.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/alcazar/hyundai-alcazar-2-1766205337.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/alcazar/hyundai-alcazar-5-1766205338.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/alcazar/hyundai-alcazar-1-1766205336.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/alcazar/hyundai-alcazar-6-1766205339.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/alcazar/hyundai-alcazar-4-1766205338.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/alcazar/hyundai-alcazar-3-1766205337.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/hyundai/alcazar/hyundai-alcazar-8-1766205340.png",
  fuelTypes: ["Petrol", "Diesel"],
  transmissions: ["Manual", "Automatic"],
  mileage: "17.5 kmpl / 20.4 kmpl",
  features: ["6 & 7 Seater Options", "Dual 10.25-inch Screens", "Level 2 ADAS", "Ventilated 1st & 2nd Row Seats", "Panoramic Sunroof"],
  colors: ["Robust Emerald Matte", "Titan Grey", "Starry Night", "Ranger Khaki", "Atlas White"],
  rating: 4.8,
  reviewCount: 2150,
  isNew: true,
  isBestSeller: true,
  seatingCapacity: 7,
  bootSpaceL: 180,
  engineCC: 1482,
  powerBHP: 160,
  torqueNm: 253,
  safetyRating: 5,
  description: "The 2026 Hyundai Alcazar is a premium 6/7 seater family SUV featuring bold new design, 160 PS 1.5L Turbo Petrol & 1.5L CRDi Diesel engines, Level 2 ADAS, and 2nd-row ventilated captain seats.",
  pros: ["160 PS Turbo Petrol engine (0-100 in 9.2s)", "First-in-segment ventilated 2nd-row captain seats", "Dual 10.25-inch integrated screens & Bose audio", "Level 2 ADAS with 70+ SmartSense features"],
  cons: ["3rd row legroom best suited for kids", "No AWD option"],
  groundClearance: 200,
  variants: [
    { id: "alcazar-executive", name: "Executive 1.5 Turbo 7-Str", price: 1499000, fuelType: "Petrol", transmission: "Manual", engineCC: 1482, powerBHP: 160, torqueNm: 253, mileageKmpl: 17.5, features: ["Panoramic Sunroof", "Dual 10.25-inch Displays", "6 Airbags", "LED Headlamps"] },
    { id: "alcazar-signature-dct", name: "Signature 1.5 Turbo 7DCT 6-Str", price: 2155000, fuelType: "Petrol", transmission: "Automatic", engineCC: 1482, powerBHP: 160, torqueNm: 253, mileageKmpl: 18.0, features: ["Level 2 ADAS", "Ventilated 1st & 2nd Row Seats", "Bose 8-Speaker Audio", "360 Camera"] }
  ],
  dealerPrices: [{ dealerId: "d3", dealerName: "Hyundai Showroom Jamshedpur", location: "Jamshedpur, Jharkhand", price: 1499000, discount: 25000, rating: 4.7 }]
};

// 20. Hyundai Tucson
export const hyundaiTucson: Vehicle = {
  id: "hyundai-tucson-2026",
  slug: "hyundai-tucson",
  category: "car",
  brand: "Hyundai",
  model: "Tucson",
  year: 2026,
  startingPrice: 2902000,
  emiFrom: 55100,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/alcazar/hyundai-alcazar-8-1766205340.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/alcazar/hyundai-alcazar-7-1766205339.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/alcazar/hyundai-alcazar-2-1766205337.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/alcazar/hyundai-alcazar-5-1766205338.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/alcazar/hyundai-alcazar-1-1766205336.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/alcazar/hyundai-alcazar-6-1766205339.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/alcazar/hyundai-alcazar-4-1766205338.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/alcazar/hyundai-alcazar-3-1766205337.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/hyundai/alcazar/hyundai-alcazar-8-1766205340.png",
  fuelTypes: ["Petrol", "Diesel"],
  transmissions: ["Automatic"],
  mileage: "15.38 kmpl / 18.0 kmpl",
  features: ["HTRAC All-Wheel Drive (AWD)", "Level 2 ADAS", "Parametric Hidden DRLs", "Bose Premium Audio", "Memory Driver Seat"],
  colors: ["Fiery Red", "Amazon Grey", "Phantom Black", "Polar White", "Starry Night"],
  rating: 4.9,
  reviewCount: 780,
  seatingCapacity: 5,
  bootSpaceL: 540,
  engineCC: 1999,
  powerBHP: 186,
  torqueNm: 416,
  safetyRating: 5,
  description: "The Hyundai Tucson is Hyundai's global premium flagship SUV featuring HTRAC AWD with terrain modes, 186 PS 2.0L Diesel engine with massive 416 Nm torque, Level 2 ADAS, and parametric LED DRLs.",
  pros: ["Mighty 2.0L Diesel engine delivering 416 Nm torque", "HTRAC AWD system with Terrain modes (Mud, Sand, Snow)", "Level 2 ADAS with 19 Hyundai SmartSense safety tools", "Superb ride comfort and sound insulation"],
  cons: ["No manual gearbox option", "High price tag in segment"],
  groundClearance: 192,
  variants: [
    { id: "tucson-platinum-petrol", name: "Platinum 2.0 Petrol AT", price: 2902000, fuelType: "Petrol", transmission: "Automatic", engineCC: 1999, powerBHP: 156, torqueNm: 192, mileageKmpl: 15.38, features: ["Level 2 ADAS", "Panoramic Sunroof", "Bose 8-Speaker Audio", "Ventilated Seats"] },
    { id: "tucson-signature-awd", name: "Signature 2.0 Diesel 8AT AWD", price: 3594000, fuelType: "Diesel", transmission: "Automatic", engineCC: 1997, powerBHP: 186, torqueNm: 416, mileageKmpl: 18.0, features: ["HTRAC AWD System", "Memory Seat", "360 Degree Camera", "Powered Tailgate"] }
  ],
  dealerPrices: [{ dealerId: "d3", dealerName: "Hyundai Showroom Jamshedpur", location: "Jamshedpur, Jharkhand", price: 2902000, discount: 30000, rating: 4.7 }]
};

// 21. Hyundai i20
export const hyundaiI20: Vehicle = {
  id: "hyundai-i20-2026",
  slug: "hyundai-i20",
  category: "car",
  brand: "Hyundai",
  model: "i20",
  year: 2026,
  startingPrice: 704000,
  emiFrom: 13400,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/i20/hyundai-i20-0-1785148547.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/i20/hyundai-i20-1-1785148554.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/i20/hyundai-i20-2-1785148561.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/i20/hyundai-i20-3-1785148567.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/i20/hyundai-i20-4-1785148574.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/i20/hyundai-i20-5-1785148581.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/i20/hyundai-i20-6-1785148588.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/i20/hyundai-i20-7-1785148595.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/hyundai/i20/hyundai-i20-0-1785148547.png",
  fuelTypes: ["Petrol"],
  transmissions: ["Manual", "Automatic"],
  mileage: "20.35 kmpl",
  features: ["10.25-inch Touchscreen", "Bose 7-Speaker Sound", "Electric Sunroof", "6 Airbags Standard", "Ambient Lighting"],
  colors: ["Amazon Grey", "Fiery Red", "Starry Night", "Atlas White", "Typhoon Silver"],
  rating: 4.6,
  reviewCount: 3890,
  isBestSeller: true,
  seatingCapacity: 5,
  bootSpaceL: 311,
  engineCC: 1197,
  powerBHP: 88,
  torqueNm: 114.7,
  safetyRating: 3,
  description: "The Hyundai i20 is a premium hatchback equipped with 6 airbags standard, Bose 7-speaker sound system, electric sunroof, 10.25-inch touchscreen infotainment, and IVT automatic.",
  pros: ["6 Airbags standard across all variants", "Class-leading Bose 7-speaker audio quality", "10.25-inch crisp touchscreen with Bluelink", "Smooth IVT automatic transmission"],
  cons: ["No diesel engine option available anymore", "Rear headroom tight for tall passengers"],
  groundClearance: 170,
  variants: [
    { id: "i20-era", name: "Era 1.2 MT", price: 704000, fuelType: "Petrol", transmission: "Manual", engineCC: 1197, powerBHP: 83, torqueNm: 114.7, mileageKmpl: 20.35, features: ["6 Airbags Standard", "ABS with EBD", "Reverse Sensors"] },
    { id: "i20-asta-o-ivt", name: "Asta (O) 1.2 IVT", price: 1121000, fuelType: "Petrol", transmission: "Automatic", engineCC: 1197, powerBHP: 88, torqueNm: 114.7, mileageKmpl: 19.65, features: ["Bose 7 Speakers", "Electric Sunroof", "10.25-inch Screen", "Wireless Charger"] }
  ],
  dealerPrices: [{ dealerId: "d3", dealerName: "Hyundai Showroom Jamshedpur", location: "Jamshedpur, Jharkhand", price: 704000, discount: 15000, rating: 4.7 }]
};

// 22. Hyundai i20 N Line
export const hyundaiI20Nline: Vehicle = {
  id: "hyundai-i20-n-line-2026",
  slug: "hyundai-i20-n-line",
  category: "car",
  brand: "Hyundai",
  model: "i20 N Line",
  year: 2026,
  startingPrice: 999000,
  emiFrom: 19000,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/i20-n-line/hyundai-i20-n-line-6-1766729684.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/i20-n-line/hyundai-i20-n-line-7-1766206360.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/i20-n-line/hyundai-i20-n-line-3-1766206357.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/i20-n-line/hyundai-i20-n-line-5-1766206358.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/i20-n-line/hyundai-i20-n-line-1-1766206356.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/i20-n-line/hyundai-i20-n-line-6-1766206359.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/i20-n-line/hyundai-i20-n-line-4-1766206358.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/i20-n-line/hyundai-i20-n-line-2-1766206357.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/hyundai/i20-n-line/hyundai-i20-n-line-6-1766729684.png",
  fuelTypes: ["Petrol"],
  transmissions: ["Manual", "Automatic"],
  mileage: "20.25 kmpl",
  features: ["120 PS 1.0L Turbo GDi", "Twin Tip Sporty Exhaust", "Stiffer Suspension Tuning", "4 Disc Brakes", "7-Speed DCT with Paddle Shifters"],
  colors: ["Thunder Blue", "Abyss Black", "Atlas White", "Starry Night"],
  rating: 4.8,
  reviewCount: 1240,
  seatingCapacity: 5,
  bootSpaceL: 311,
  engineCC: 998,
  powerBHP: 120,
  torqueNm: 172,
  safetyRating: 3,
  description: "The Hyundai i20 N Line is a performance-focused hot hatch featuring a 120 PS 1.0L Turbo GDi engine, throaty twin-tip sporty exhaust sound, all 4 disc brakes, and 7-speed DCT.",
  pros: ["Thrilling 120 PS Turbo engine with 0-100 in 9.9 seconds", "Sporty growling twin-tip exhaust sound note", "Stiffer sports suspension for flat cornering", "All 4 disc brakes for fierce stopping power"],
  cons: ["Stiffer ride quality over broken city roads"],
  groundClearance: 170,
  variants: [
    { id: "i20-nline-n6", name: "N6 1.0 Turbo MT", price: 999000, fuelType: "Petrol", transmission: "Manual", engineCC: 998, powerBHP: 120, torqueNm: 172, mileageKmpl: 20.0, features: ["120 PS Turbo", "Sports Exhaust", "Disc Brakes All 4", "Leatherette N-Line Seats"] },
    { id: "i20-nline-n8-dct", name: "N8 1.0 Turbo 7DCT", price: 1252000, fuelType: "Petrol", transmission: "Automatic", engineCC: 998, powerBHP: 120, torqueNm: 172, mileageKmpl: 20.25, features: ["7DCT with Paddle Shifters", "Bose 7 Speakers", "Sunroof", "10.25-inch Screen"] }
  ],
  dealerPrices: [{ dealerId: "d3", dealerName: "Hyundai Showroom Jamshedpur", location: "Jamshedpur, Jharkhand", price: 999000, discount: 20000, rating: 4.7 }]
};

// 23. Hyundai Aura
export const hyundaiAura: Vehicle = {
  id: "hyundai-aura-2026",
  slug: "hyundai-aura",
  category: "car",
  brand: "Hyundai",
  model: "Aura",
  year: 2026,
  startingPrice: 649000,
  emiFrom: 12300,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/aura/hyundai-aura-7-1773214499.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/aura/hyundai-aura-6-1773214498.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/aura/hyundai-aura-2-1773214491.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/aura/hyundai-aura-4-1773214493.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/aura/hyundai-aura-0-1773214489.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/aura/hyundai-aura-5-1773214498.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/aura/hyundai-aura-3-1773214492.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/aura/hyundai-aura-1-1773214490.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/hyundai/aura/hyundai-aura-7-1773214499.png",
  fuelTypes: ["Petrol", "CNG"],
  transmissions: ["Manual", "Automatic"],
  mileage: "20.5 kmpl / 28.4 km/kg",
  features: ["6 Airbags Standard", "Wireless Phone Charger", "Footwell Lighting", "Type-C USB Ports", "8-inch Touchscreen"],
  colors: ["Starry Night", "Teal Blue", "Titan Grey", "Typhoon Silver", "Atlas White"],
  rating: 4.5,
  reviewCount: 2150,
  seatingCapacity: 5,
  bootSpaceL: 402,
  engineCC: 1197,
  powerBHP: 83,
  torqueNm: 114,
  safetyRating: 3,
  description: "The Hyundai Aura is a feature-packed sub-compact sedan boasting 6 airbags standard across all variants, 402L boot space, wireless phone charging, and 28.4 km/kg CNG efficiency.",
  pros: ["6 Airbags standard across every single variant", "Generous 402L luggage boot space", "Refined 1.2L 4-cylinder Kappa engine", "Wireless phone charging & Type-C ports"],
  cons: ["Rear seat headroom average for tall occupants"],
  groundClearance: 165,
  variants: [
    { id: "aura-e", name: "E 1.2 MT", price: 649000, fuelType: "Petrol", transmission: "Manual", engineCC: 1197, powerBHP: 83, torqueNm: 114, mileageKmpl: 20.5, features: ["6 Airbags Standard", "ABS with EBD", "Adjustable Rear Headrests"] },
    { id: "aura-sx-cng", name: "SX 1.2 CNG", price: 905000, fuelType: "CNG", transmission: "Manual", engineCC: 1197, powerBHP: 69, torqueNm: 95.2, mileageKmpl: 28.4, features: ["Factory CNG", "8-inch Touchscreen", "Rear Camera", "Wireless Charger"] }
  ],
  dealerPrices: [{ dealerId: "d3", dealerName: "Hyundai Showroom Jamshedpur", location: "Jamshedpur, Jharkhand", price: 649000, discount: 15000, rating: 4.7 }]
};

// 24. Hyundai Grand i10 Nios
export const hyundaiGrandI10Nios: Vehicle = {
  id: "hyundai-grand-i10-nios-2026",
  slug: "hyundai-grand-i10-nios",
  category: "car",
  brand: "Hyundai",
  model: "Grand i10 Nios",
  year: 2026,
  startingPrice: 592000,
  emiFrom: 11200,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/grand-i10-nios/hyundai-grand-i10-nios-0-1766214369.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/grand-i10-nios/hyundai-grand-i10-nios-8-1766214383.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/grand-i10-nios/hyundai-grand-i10-nios-4-1766214371.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/grand-i10-nios/hyundai-grand-i10-nios-6-1766214382.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/grand-i10-nios/hyundai-grand-i10-nios-7-1766214383.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/grand-i10-nios/hyundai-grand-i10-nios-5-1766214378.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/grand-i10-nios/hyundai-grand-i10-nios-3-1766214371.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/grand-i10-nios/hyundai-grand-i10-nios-3-1766728193.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/hyundai/grand-i10-nios/hyundai-grand-i10-nios-0-1766214369.png",
  fuelTypes: ["Petrol", "CNG"],
  transmissions: ["Manual", "Automatic"],
  mileage: "20.7 kmpl / 27.3 km/kg",
  features: ["6 Airbags Standard", "Cruise Control", "TPMS", "Automatic Headlamps", "Rear AC Vents"],
  colors: ["Spark Green", "Fiery Red", "Titan Grey", "Teal Blue", "Atlas White", "Typhoon Silver"],
  rating: 4.5,
  reviewCount: 3120,
  seatingCapacity: 5,
  bootSpaceL: 260,
  engineCC: 1197,
  powerBHP: 83,
  torqueNm: 114,
  safetyRating: 3,
  description: "The Hyundai Grand i10 Nios is a popular urban hatchback loaded with 6 airbags standard, cruise control, TPMS, rear AC vents, and smooth AMT & CNG powertrains.",
  pros: ["6 Airbags standard across all trims", "Plush cabin quality & excellent fit & finish", "Smooth 1.2L 4-cylinder engine", "TPMS & Automatic headlamps"],
  cons: ["No turbo petrol variant in current lineup"],
  groundClearance: 165,
  variants: [
    { id: "nios-era", name: "Era 1.2 MT", price: 592000, fuelType: "Petrol", transmission: "Manual", engineCC: 1197, powerBHP: 83, torqueNm: 114, mileageKmpl: 20.7, features: ["6 Airbags Standard", "ABS", "Central Locking"] },
    { id: "nios-asta-amt", name: "Asta 1.2 AMT", price: 856000, fuelType: "Petrol", transmission: "Automatic", engineCC: 1197, powerBHP: 83, torqueNm: 114, mileageKmpl: 20.1, features: ["Push Button Start", "Wireless Charger", "15-inch Alloys", "Rear AC Vents"] }
  ],
  dealerPrices: [{ dealerId: "d3", dealerName: "Hyundai Showroom Jamshedpur", location: "Jamshedpur, Jharkhand", price: 592000, discount: 15000, rating: 4.7 }]
};

// 25. Hyundai Exter
export const hyundaiExter: Vehicle = {
  id: "hyundai-exter-2026",
  slug: "hyundai-exter",
  category: "car",
  brand: "Hyundai",
  model: "Exter",
  year: 2026,
  startingPrice: 613000,
  emiFrom: 11600,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/exter/hyundai-exter-5-1776074667.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/exter/hyundai-exter-4-1776074665.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/exter/hyundai-exter-0-1776074661.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/exter/hyundai-exter-2-1776074663.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/exter/hyundai-exter-6-1776074668.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/exter/hyundai-exter-3-1776074664.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/exter/hyundai-exter-1-1776074662.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/exter/hyundai-exter-7-1776074669.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/hyundai/exter/hyundai-exter-5-1776074667.png",
  fuelTypes: ["Petrol", "CNG"],
  transmissions: ["Manual", "Automatic"],
  mileage: "19.4 kmpl / 27.1 km/kg",
  features: ["6 Airbags Standard", "Dual Camera Dashcam", "Voice Enabled Electric Sunroof", "185mm Ground Clearance", "Smart Hy-CNG Duo Tank"],
  colors: ["Ranger Khaki", "Cosmic Blue", "Atlas White", "Titan Grey", "Starry Night", "Fiery Red"],
  rating: 4.7,
  reviewCount: 3650,
  isBestSeller: true,
  seatingCapacity: 5,
  bootSpaceL: 391,
  engineCC: 1197,
  powerBHP: 83,
  torqueNm: 114,
  safetyRating: 4,
  description: "The Hyundai Exter is a micro SUV featuring 6 airbags standard, factory dual-camera Dashcam, voice-controlled sunroof, 185mm ground clearance, and Hy-CNG Duo twin cylinder tech.",
  pros: ["6 Airbags standard + Dual camera Dashcam", "Smart Hy-CNG Duo twin tank tech leaves usable boot", "Voice-enabled electric sunroof", "Huge 391L boot space"],
  cons: ["AMT gearbox can feel slightly hesitant under hard acceleration"],
  groundClearance: 185,
  variants: [
    { id: "exter-ex", name: "EX 1.2 MT", price: 613000, fuelType: "Petrol", transmission: "Manual", engineCC: 1197, powerBHP: 83, torqueNm: 114, mileageKmpl: 19.4, features: ["6 Airbags Standard", "ABS with EBD", "Digital Cluster"] },
    { id: "exter-sx-duo-cng", name: "SX Hy-CNG Duo", price: 950000, fuelType: "CNG", transmission: "Manual", engineCC: 1197, powerBHP: 69, torqueNm: 95.2, mileageKmpl: 27.1, features: ["Twin Cylinder CNG", "Sunroof", "8-inch Touchscreen", "Dashcam"] }
  ],
  dealerPrices: [{ dealerId: "d3", dealerName: "Hyundai Showroom Jamshedpur", location: "Jamshedpur, Jharkhand", price: 613000, discount: 15000, rating: 4.7 }]
};

// 26. Hyundai Ioniq 5
export const hyundaiIoniq5: Vehicle = {
  id: "hyundai-ioniq-5-2026",
  slug: "hyundai-ioniq-5",
  category: "car",
  brand: "Hyundai",
  model: "Ioniq 5",
  year: 2026,
  startingPrice: 4605000,
  emiFrom: 87500,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/ioniq-5/hyundai-ioniq-5-7-1777884283.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/ioniq-5/hyundai-ioniq-5-0-1777884281.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/ioniq-5/hyundai-ioniq-5-4-1777884282.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/ioniq-5/hyundai-ioniq-5-2-1777884281.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/ioniq-5/hyundai-ioniq-5-6-1777884282.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/ioniq-5/hyundai-ioniq-5-1-1777884281.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/ioniq-5/hyundai-ioniq-5-3-1777884282.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/ioniq-5/hyundai-ioniq-5-5-1777884282.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/hyundai/ioniq-5/hyundai-ioniq-5-7-1777884283.png",
  fuelTypes: ["Electric"],
  transmissions: ["Automatic"],
  mileage: "631 km Range",
  features: ["800V Ultra-Fast Charging (10-80% in 18 mins)", "72.6 kWh Battery", "Parametric Pixel LED Lighting", "Relaxation Comfort Seats", "V2L Vehicle-to-Load 3.6kW Output"],
  colors: ["Gravity Gold Matte", "Midnight Black Pearl", "Optic White", "Digital Teal Green"],
  rating: 4.9,
  reviewCount: 410,
  isEV: true,
  seatingCapacity: 5,
  bootSpaceL: 527,
  engineCC: 0,
  powerBHP: 217,
  torqueNm: 350,
  safetyRating: 5,
  description: "The Hyundai Ioniq 5 is Hyundai's flagship electric crossover built on 800V E-GMP platform, featuring 631 km ARAI range, 10-80% ultra-fast charge in 18 minutes, and 217 PS / 350 Nm RWD electric powertrain.",
  pros: ["World-class 800V architecture (10 to 80% charge in 18 mins)", "Incredible 631 km ARAI range", "0-100 km/h in 7.6 seconds with 350 Nm torque", "Futuristic parametric pixel LED design"],
  cons: ["Large dimensions can require care in narrow city streets"],
  groundClearance: 163,
  variants: [
    { id: "ioniq5-rwd", name: "RWD 72.6 kWh", price: 4605000, fuelType: "Electric", transmission: "Automatic", engineCC: 0, powerBHP: 217, torqueNm: 350, mileageKmpl: 0, rangeKm: 631, features: ["800V Charging", "V2L Power Output", "Level 2 ADAS", "Bose 8 Speakers", "Vision Roof"] }
  ],
  dealerPrices: [{ dealerId: "d3", dealerName: "Hyundai Showroom Jamshedpur", location: "Jamshedpur, Jharkhand", price: 4605000, discount: 50000, rating: 4.7 }]
};

// 27. Hyundai Creta N Line
export const hyundaiCretaNline: Vehicle = {
  id: "hyundai-creta-n-line-2026",
  slug: "hyundai-creta-n-line",
  category: "car",
  brand: "Hyundai",
  model: "Creta N Line",
  year: 2026,
  startingPrice: 1682000,
  emiFrom: 32000,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/creta-n-line/hyundai-creta-n-line-8-1766213045.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/creta-n-line/hyundai-creta-n-line-7-1766213045.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/creta-n-line/hyundai-creta-n-line-3-1766213040.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/creta-n-line/hyundai-creta-n-line-5-1766213042.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/creta-n-line/hyundai-creta-n-line-1-1766213039.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/creta-n-line/hyundai-creta-n-line-6-1766213043.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/creta-n-line/hyundai-creta-n-line-4-1766213041.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/creta-n-line/hyundai-creta-n-line-2-1766213040.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/hyundai/creta-n-line/hyundai-creta-n-line-8-1766213045.png",
  fuelTypes: ["Petrol"],
  transmissions: ["Manual", "Automatic"],
  mileage: "18.2 kmpl",
  features: ["160 PS 1.5L Turbo GDi", "Twin Tip Sports Exhaust", "N Line Sport Steering & Gear Knob", "18-inch N Line Alloys", "Level 2 ADAS"],
  colors: ["Thunder Blue Matte", "Shadow Grey", "Abyss Black", "Atlas White"],
  rating: 4.9,
  reviewCount: 980,
  isNew: true,
  seatingCapacity: 5,
  bootSpaceL: 433,
  engineCC: 1482,
  powerBHP: 160,
  torqueNm: 253,
  safetyRating: 5,
  description: "The Hyundai Creta N Line is a high-performance SUV featuring a 160 PS / 253 Nm 1.5L Turbo GDi engine, 6-speed manual or 7-speed DCT, dual exhaust tips, stiffer sport suspension, and Level 2 ADAS.",
  pros: ["Blistering 160 PS Turbo GDi performance (0-100 in 8.9s)", "Exclusive 6-speed Manual option on 160 PS Turbo engine", "Sporty tuned suspension and direct steering feedback", "18-inch N Line alloys"],
  cons: ["Firm ride setup over high speed dips"],
  groundClearance: 190,
  variants: [
    { id: "creta-n8-mt", name: "N8 1.5 Turbo 6MT", price: 1682000, fuelType: "Petrol", transmission: "Manual", engineCC: 1482, powerBHP: 160, torqueNm: 253, mileageKmpl: 18.0, features: ["160 PS Turbo", "Sports Exhaust", "18-inch Alloys", "Level 2 ADAS"] },
    { id: "creta-n10-dct", name: "N10 1.5 Turbo 7DCT", price: 2030000, fuelType: "Petrol", transmission: "Automatic", engineCC: 1482, powerBHP: 160, torqueNm: 253, mileageKmpl: 18.2, features: ["7DCT Paddle Shifters", "Panoramic Sunroof", "Bose 8 Speakers", "Ventilated Seats"] }
  ],
  dealerPrices: [{ dealerId: "d3", dealerName: "Hyundai Showroom Jamshedpur", location: "Jamshedpur, Jharkhand", price: 1682000, discount: 20000, rating: 4.7 }]
};

// 28. Hyundai Venue N Line
export const hyundaiVenueNline: Vehicle = {
  id: "hyundai-venue-n-line-2026",
  slug: "hyundai-venue-n-line",
  category: "car",
  brand: "Hyundai",
  model: "Venue N Line",
  year: 2026,
  startingPrice: 1208000,
  emiFrom: 22900,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/venue-n-line/hyundai-venue-n-line-0-1766211212.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/venue-n-line/hyundai-venue-n-line-7-1766211216.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/venue-n-line/hyundai-venue-n-line-3-1766211214.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/venue-n-line/hyundai-venue-n-line-5-1766211215.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/venue-n-line/hyundai-venue-n-line-1-1766211213.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/venue-n-line/hyundai-venue-n-line-6-1766211216.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/venue-n-line/hyundai-venue-n-line-4-1766211215.png",
    "https://images.91wheels.com/assets/c_images/gallery/hyundai/venue-n-line/hyundai-venue-n-line-2-1766211214.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/hyundai/venue-n-line/hyundai-venue-n-line-0-1766211212.png",
  fuelTypes: ["Petrol"],
  transmissions: ["Manual", "Automatic"],
  mileage: "18.3 kmpl",
  features: ["120 PS 1.0L Turbo GDi", "Twin Tip Sports Exhaust", "Dashcam with Dual Camera", "4 Disc Brakes", "Level 1 ADAS"],
  colors: ["Thunder Blue", "Shadow Grey", "Atlas White"],
  rating: 4.7,
  reviewCount: 840,
  seatingCapacity: 5,
  bootSpaceL: 350,
  engineCC: 998,
  powerBHP: 120,
  torqueNm: 172,
  safetyRating: 4,
  description: "The Hyundai Venue N Line is a compact sport crossover boasting a 120 PS 1.0L Turbo engine, twin-tip roaring exhaust note, factory dashcam, Level 1 ADAS, and sport tuned steering.",
  pros: ["Pippy 120 PS Turbo engine with 7DCT or 6MT", "Throaty sporty twin exhaust sound note", "Level 1 ADAS safety features", "All 4 disc brakes"],
  cons: ["Stiffer suspension feel at low city speeds"],
  groundClearance: 195,
  variants: [
    { id: "venue-n6-mt", name: "N6 1.0 Turbo MT", price: 1208000, fuelType: "Petrol", transmission: "Manual", engineCC: 998, powerBHP: 120, torqueNm: 172, mileageKmpl: 18.0, features: ["120 PS Turbo", "Sports Exhaust", "Disc Brakes", "Electric Sunroof"] },
    { id: "venue-n8-dct", name: "N8 1.0 Turbo 7DCT", price: 1390000, fuelType: "Petrol", transmission: "Automatic", engineCC: 998, powerBHP: 120, torqueNm: 172, mileageKmpl: 18.3, features: ["7DCT", "Dashcam", "Level 1 ADAS", "Powered Driver Seat"] }
  ],
  dealerPrices: [{ dealerId: "d3", dealerName: "Hyundai Showroom Jamshedpur", location: "Jamshedpur, Jharkhand", price: 1208000, discount: 15000, rating: 4.7 }]
};

// 29. Mahindra Bolero
export const mahindraBolero: Vehicle = {
  id: "mahindra-bolero-2026",
  slug: "mahindra-bolero",
  category: "car",
  brand: "Mahindra",
  model: "Bolero",
  year: 2026,
  startingPrice: 979000,
  emiFrom: 18600,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/bolero/mahindra-bolero-0-1768637292.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/bolero/mahindra-bolero-2-1768637293.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/bolero/mahindra-bolero-3-1772520823.jpg",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/bolero/mahindra-bolero-5-1772520825.jpg",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/bolero/mahindra-bolero-1-1768637292.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/bolero/mahindra-bolero-3-1768637293.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/bolero/mahindra-bolero-0-1767931230.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/bolero/mahindra-bolero-4-1772520824.jpg"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/mahindra/bolero/mahindra-bolero-0-1768637292.png",
  fuelTypes: ["Diesel"],
  transmissions: ["Manual"],
  mileage: "16.0 kmpl",
  features: ["mHawk75 1.5L Diesel Engine", "Metal Bumper Construction", "Micro Hybrid Technology", "7-Seater Configuration", "ABS with EBD"],
  colors: ["Lakeside Brown", "Diamond White", "Silver"],
  rating: 4.6,
  reviewCount: 4890,
  isBestSeller: true,
  seatingCapacity: 7,
  bootSpaceL: 384,
  engineCC: 1493,
  powerBHP: 75,
  torqueNm: 210,
  safetyRating: 3,
  description: "The Mahindra Bolero is India's iconic rugged utility vehicle, powered by the reliable mHawk75 1.5L diesel engine producing 210 Nm torque with metal body toughness.",
  pros: ["Unmatched rugged steel body construction", "High 210 Nm low-end diesel torque", "Extremely low maintenance cost & nationwide spare parts", "7-seater utility"],
  cons: ["Basic utilitarian cabin trim", "No automatic option"],
  groundClearance: 180,
  variants: [
    { id: "bolero-b4", name: "B4 1.5 Diesel", price: 979000, fuelType: "Diesel", transmission: "Manual", engineCC: 1493, powerBHP: 75, torqueNm: 210, mileageKmpl: 16.0, features: ["mHawk75 Engine", "Dual Airbags", "ABS", "Digital Cluster"] },
    { id: "bolero-b6-opt", name: "B6 (O) 1.5 Diesel", price: 1091000, fuelType: "Diesel", transmission: "Manual", engineCC: 1493, powerBHP: 75, torqueNm: 210, mileageKmpl: 16.0, features: ["Remote Locking", "Music System", "Fog Lamps", "Micro Hybrid"] }
  ],
  dealerPrices: [{ dealerId: "d1", dealerName: "Maruti True Value Ranchi", location: "Ranchi, Jharkhand", price: 979000, discount: 10000, rating: 4.6 }]
};

// 30. Mahindra Bolero Neo+
export const mahindraBoleroNeoPlus: Vehicle = {
  id: "mahindra-bolero-neo-plus-2026",
  slug: "mahindra-bolero-neo-plus",
  category: "car",
  brand: "Mahindra",
  model: "Bolero Neo+",
  year: 2026,
  startingPrice: 1139000,
  emiFrom: 21600,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/bolero-neo-plus/mahindra-bolero-neo-plus-0-1767931096.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/bolero-neo-plus/mahindra-bolero-neo-plus-0-1766740459.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/bolero-neo-plus/mahindra-bolero-neo-plus-1-1766740460.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/bolero-neo-plus/mahindra-bolero-neo-plus-2-1766740460.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/bolero/mahindra-bolero-0-1768637292.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/bolero-neo/mahindra-bolero-neo-0-1768637392.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/scorpio-classic/mahindra-scorpio-classic-0-1767930945.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/xuv-3xo/mahindra-xuv-3xo-5-1767875397.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/mahindra/bolero-neo-plus/mahindra-bolero-neo-plus-0-1767931096.png",
  fuelTypes: ["Diesel"],
  transmissions: ["Manual"],
  mileage: "14.5 kmpl",
  features: ["9-Seater Configuration", "2.2L mHawk Diesel Engine", "Rear Wheel Drive (RWD)", "9-inch Touchscreen", "Micro Hybrid Tech"],
  colors: ["Napoli Black", "Majestic Silver", "Diamond White"],
  rating: 4.6,
  reviewCount: 1120,
  seatingCapacity: 9,
  bootSpaceL: 400,
  engineCC: 2184,
  powerBHP: 120,
  torqueNm: 280,
  safetyRating: 3,
  description: "The Mahindra Bolero Neo+ is a 9-seater multi-utility SUV powered by a 2.2L mHawk diesel engine delivering 120 PS power and 280 Nm torque with Rear-Wheel Drive ladder frame toughness.",
  pros: ["9-seater capacity for large families & tours", "Torquy 2.2L mHawk diesel (280 Nm torque)", "Heavy duty Rear-Wheel Drive setup", "9-inch touchscreen"],
  cons: ["Side-facing 3rd row seats lack 3-point seatbelts"],
  groundClearance: 180,
  variants: [
    { id: "bolero-neo-p-p4", name: "P4 2.2 Diesel 9-Str", price: 1139000, fuelType: "Diesel", transmission: "Manual", engineCC: 2184, powerBHP: 120, torqueNm: 280, mileageKmpl: 14.5, features: ["9 Seats", "mHawk 2.2L Engine", "Dual Airbags", "ABS"] },
    { id: "bolero-neo-p-p10", name: "P10 2.2 Diesel 9-Str", price: 1249000, fuelType: "Diesel", transmission: "Manual", engineCC: 2184, powerBHP: 120, torqueNm: 280, mileageKmpl: 14.5, features: ["9-inch Touchscreen", "Alloy Wheels", "Remote Locking", "Micro Hybrid"] }
  ],
  dealerPrices: [{ dealerId: "d1", dealerName: "Maruti True Value Ranchi", location: "Ranchi, Jharkhand", price: 1139000, discount: 15000, rating: 4.6 }]
};

// 31. Mahindra XUV400 EV
export const mahindraXuv400: Vehicle = {
  id: "mahindra-xuv400-ev-2026",
  slug: "mahindra-xuv400-ev",
  category: "car",
  brand: "Mahindra",
  model: "XUV400 EV",
  year: 2026,
  startingPrice: 1549000,
  emiFrom: 29400,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/xuv-400-electric/mahindra-xuv-400-electric-0-1766745412.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/xuv-400-electric/mahindra-xuv-400-electric-7-1766212447.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/xuv-400-electric/mahindra-xuv-400-electric-2-1766212444.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/xuv-400-electric/mahindra-xuv-400-electric-5-1766212446.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/xuv-400-electric/mahindra-xuv-400-electric-1-1766212443.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/xuv-400-electric/mahindra-xuv-400-electric-4-1766212446.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/xuv-400-electric/mahindra-xuv-400-electric-3-1766212445.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/xuv-400-electric/mahindra-xuv-400-electric-0-1766212443.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/mahindra/xuv-400-electric/mahindra-xuv-400-electric-0-1766745412.png",
  fuelTypes: ["Electric"],
  transmissions: ["Automatic"],
  mileage: "456 km Range",
  features: ["0-100 km/h in 8.3s", "39.4 kWh Battery Pack", "10.25-inch Touchscreen", "Copper Accents", "Electric Sunroof"],
  colors: ["Satin Copper", "Everest White", "Galaxy Grey", "Napoli Black", "Nebula Blue"],
  rating: 4.7,
  reviewCount: 1420,
  isEV: true,
  seatingCapacity: 5,
  bootSpaceL: 378,
  engineCC: 0,
  powerBHP: 150,
  torqueNm: 310,
  safetyRating: 5,
  description: "The Mahindra XUV400 EV Pro is a high performance electric SUV delivering 0-100 km/h acceleration in just 8.3 seconds, 310 Nm instant torque, 39.4 kWh battery with 456 km range, and 5-star safety.",
  pros: ["Rapid 0-100 km/h in 8.3 seconds", "Huge 310 Nm instant torque output", "Generous 378L boot space", "Dual 10.25-inch screen dashboard upgrade"],
  cons: ["Real world highway range around 280-300 km"],
  groundClearance: 200,
  variants: [
    { id: "xuv400-ec-pro", name: "EC Pro 34.5 kWh", price: 1549000, fuelType: "Electric", transmission: "Automatic", engineCC: 0, powerBHP: 150, torqueNm: 310, mileageKmpl: 0, rangeKm: 375, features: ["Dual Airbags", "Push Button Start", "Rear AC Vents"] },
    { id: "xuv400-el-pro", name: "EL Pro 39.4 kWh", price: 1769000, fuelType: "Electric", transmission: "Automatic", engineCC: 0, powerBHP: 150, torqueNm: 310, mileageKmpl: 0, rangeKm: 456, features: ["10.25-inch Touchscreen", "Sunroof", "Wireless Charger", "6 Airbags"] }
  ],
  dealerPrices: [{ dealerId: "d1", dealerName: "Maruti True Value Ranchi", location: "Ranchi, Jharkhand", price: 1549000, discount: 40000, rating: 4.6 }]
};

// 32. Mahindra Marazzo
export const mahindraMarazzo: Vehicle = {
  id: "mahindra-marazzo-2026",
  slug: "mahindra-marazzo",
  category: "car",
  brand: "Mahindra",
  model: "Marazzo",
  year: 2026,
  startingPrice: 1439000,
  emiFrom: 27300,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/marazzo/mahindra-marazzo-0-1767931024.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/marazzo/mahindra-marazzo-3-1766740596.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/marazzo/mahindra-marazzo-4-1766740597.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/marazzo/mahindra-marazzo-2-1766740591.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/marazzo/mahindra-marazzo-7-1766740603.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/marazzo/mahindra-marazzo-6-1766740603.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/marazzo/mahindra-marazzo-5-1766740602.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/marazzo/mahindra-marazzo-1-1766740587.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/mahindra/marazzo/mahindra-marazzo-0-1767931024.png",
  fuelTypes: ["Diesel"],
  transmissions: ["Manual"],
  mileage: "17.3 kmpl",
  features: ["4-Star GNCAP Safety", "Shark Inspired Design", "Surround Cool AC", "7 or 8 Seater", "Disc Brakes All 4"],
  colors: ["Ocean Black", "Mariner Maroon", "Shimmering Silver", "Iceberg White"],
  rating: 4.6,
  reviewCount: 1650,
  seatingCapacity: 8,
  bootSpaceL: 190,
  engineCC: 1497,
  powerBHP: 121,
  torqueNm: 300,
  safetyRating: 4,
  description: "The Mahindra Marazzo is a shark-inspired 7/8 seater MPV featuring 4-Star GNCAP safety rating, ultra quiet cabin, patented Surround Cool ceiling AC vents, and 300 Nm 1.5L diesel engine.",
  pros: ["4-Star GNCAP safety rating for MPV segment", "Whisper quiet engine cabin noise levels", "Ceiling mounted Surround Cool AC system", "Plush 8-seater capacity option"],
  cons: ["No automatic transmission option available"],
  groundClearance: 180,
  variants: [
    { id: "marazzo-m2", name: "M2 1.5 Diesel 8-Str", price: 1439000, fuelType: "Diesel", transmission: "Manual", engineCC: 1497, powerBHP: 121, torqueNm: 300, mileageKmpl: 17.3, features: ["4-Star Safety", "All 4 Disc Brakes", "Dual Airbags"] },
    { id: "marazzo-m6-plus", name: "M6+ 1.5 Diesel 7-Str", price: 1679000, fuelType: "Diesel", transmission: "Manual", engineCC: 1497, powerBHP: 121, torqueNm: 300, mileageKmpl: 17.3, features: ["17-inch Alloys", "7-inch Touchscreen", "Surround AC", "Rear Camera"] }
  ],
  dealerPrices: [{ dealerId: "d1", dealerName: "Maruti True Value Ranchi", location: "Ranchi, Jharkhand", price: 1439000, discount: 20000, rating: 4.6 }]
};

// 33. Mahindra eKUV100
export const mahindraEkuv100: Vehicle = {
  id: "mahindra-ekuv100-2026",
  slug: "mahindra-ekuv100",
  category: "car",
  brand: "Mahindra",
  model: "eKUV100",
  year: 2026,
  startingPrice: 825000,
  emiFrom: 15600,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/ekuv100/mahindra-ekuv100-0-1766740531.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/xuv-3xo-ev/mahindra-xuv-3xo-ev-0-1768390523.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/mahindra/ekuv100/mahindra-ekuv100-0-1766740531.png",
  fuelTypes: ["Electric"],
  transmissions: ["Automatic"],
  mileage: "150 km Range",
  features: ["15.9 kWh Battery", "170mm Ground Clearance", "Fast Charging 0-80% in 55 mins", "Dual Airbags", "Tall Boy Stance"],
  colors: ["Pearl White", "Dazzling Silver", "Fiery Orange"],
  rating: 4.1,
  reviewCount: 380,
  isEV: true,
  seatingCapacity: 5,
  bootSpaceL: 243,
  engineCC: 0,
  powerBHP: 54,
  torqueNm: 120,
  safetyRating: 3,
  description: "The Mahindra eKUV100 is an entry-level urban electric micro SUV featuring 15.9 kWh liquid-cooled battery pack, 150 km range, 54 PS power, and fast charging capability.",
  pros: ["Inexpensive entry into electric SUV vehicle ownership", "Compact dimensions for easy urban parking", "Fast charging option"],
  cons: ["Short 150 km range suitable only for daily short city runs"],
  groundClearance: 170,
  variants: [
    { id: "ekuv100-std", name: "Standard 15.9 kWh", price: 825000, fuelType: "Electric", transmission: "Automatic", engineCC: 0, powerBHP: 54, torqueNm: 120, mileageKmpl: 0, rangeKm: 150, features: ["Fast Charging", "Dual Airbags", "Power Windows"] }
  ],
  dealerPrices: [{ dealerId: "d1", dealerName: "Maruti True Value Ranchi", location: "Ranchi, Jharkhand", price: 825000, discount: 10000, rating: 4.6 }]
};

// 34. Toyota Urban Cruiser Taisor
export const toyotaUrbanCruiserTaisor: Vehicle = {
  id: "toyota-urban-cruiser-taisor-2026",
  slug: "toyota-urban-cruiser-taisor",
  category: "car",
  brand: "Toyota",
  model: "Urban Cruiser Taisor",
  year: 2026,
  startingPrice: 773500,
  emiFrom: 14700,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/toyota/taisor/toyota-taisor-4-1767848418.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/taisor/toyota-taisor-3-1767848417.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/taisor/toyota-taisor-7-1767848421.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/taisor/toyota-taisor-1-1767848416.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/taisor/toyota-taisor-5-1767848419.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/taisor/toyota-taisor-2-1767848417.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/taisor/toyota-taisor-0-1767848416.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/taisor/toyota-taisor-6-1767848419.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/toyota/taisor/toyota-taisor-4-1767848418.png",
  fuelTypes: ["Petrol", "CNG"],
  transmissions: ["Manual", "Automatic"],
  mileage: "22.8 kmpl / 28.5 km/kg",
  features: ["1.0L Turbo Boosterjet Engine", "Head-Up Display", "360 Degree Camera", "9-inch Touchscreen", "190mm Ground Clearance"],
  colors: ["Lucent Orange", "Gaming Grey", "Enticing Silver", "Sportin Red", "Cafe White"],
  rating: 4.7,
  reviewCount: 1650,
  isNew: true,
  isBestSeller: true,
  seatingCapacity: 5,
  bootSpaceL: 308,
  engineCC: 998,
  powerBHP: 100,
  torqueNm: 147.6,
  safetyRating: 4,
  description: "The Toyota Urban Cruiser Taisor is Toyota's coupe crossover SUV featuring a 100 PS 1.0L Turbo Boosterjet engine, Head-Up Display, 360 camera, Toyota warranty trust, and CNG option.",
  pros: ["Pippy 100 PS 1.0L Turbo engine with 6-speed Automatic AT", "Segment-first Head-Up Display & 360 degree camera", "Toyota 3-Year / 1,00,000 km standard warranty", "Stunning coupe SUV design"],
  cons: ["Rear seat headroom modest due to sloping coupe roofline"],
  groundClearance: 190,
  variants: [
    { id: "taisor-e-12", name: "E 1.2 MT", price: 773500, fuelType: "Petrol", transmission: "Manual", engineCC: 1197, powerBHP: 89, torqueNm: 113, mileageKmpl: 21.7, features: ["Dual Airbags", "ESP", "Hill Hold", "All Power Windows"] },
    { id: "taisor-v-10-turbo-at", name: "V 1.0 Turbo 6AT", price: 1303500, fuelType: "Petrol", transmission: "Automatic", engineCC: 998, powerBHP: 100, torqueNm: 147.6, mileageKmpl: 20.0, features: ["Head-Up Display", "360 Camera", "9-inch Touchscreen", "Wireless Charger", "Paddle Shifters"] }
  ],
  dealerPrices: [{ dealerId: "d1", dealerName: "Maruti True Value Ranchi", location: "Ranchi, Jharkhand", price: 773500, discount: 15000, rating: 4.6 }]
};

// 35. Toyota Rumion
export const toyotaRumion: Vehicle = {
  id: "toyota-rumion-2026",
  slug: "toyota-rumion",
  category: "car",
  brand: "Toyota",
  model: "Rumion",
  year: 2026,
  startingPrice: 1044000,
  emiFrom: 19800,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/toyota/rumion/toyota-rumion-2-1767848606.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/rumion/toyota-rumion-1-1767848605.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/rumion/toyota-rumion-16-1763284887.jpg",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/rumion/toyota-rumion-0-1767848605.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/rumion/toyota-rumion-3-1767848607.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/rumion/toyota-rumion-17-1763284888.jpg",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/rumion/toyota-rumion-15-1763284886.jpg",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/rumion/toyota-rumion-10-1763285080.jpg"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/toyota/rumion/toyota-rumion-2-1767848606.png",
  fuelTypes: ["Petrol", "CNG"],
  transmissions: ["Manual", "Automatic"],
  mileage: "20.51 kmpl / 26.11 km/kg",
  features: ["7-Seater Spacious MPV", "Neo Drive Smart Hybrid Tech", "6-Speed AT with Paddle Shifters", "Roof Mounted AC Vents", "Toyota Warranty"],
  colors: ["Spunky Blue", "Iconic Grey", "Rustic Brown", "Cafe White", "Enticing Silver"],
  rating: 4.7,
  reviewCount: 1230,
  isBestSeller: true,
  seatingCapacity: 7,
  bootSpaceL: 209,
  engineCC: 1462,
  powerBHP: 102,
  torqueNm: 136.8,
  safetyRating: 3,
  description: "The Toyota Rumion is a spacious 7-seater family MPV powered by a 1.5L K-Series Neo Drive Smart Hybrid engine offering 20.51 kmpl mileage, Toyota brand peace of mind, and CNG option.",
  pros: ["Toyota 3-Year / 1,00,000 km warranty backing", "Fuel-efficient 1.5L Neo Drive Smart Hybrid engine", "Smooth 6-speed torque converter AT with paddle shifters", "26.11 km/kg CNG efficiency"],
  cons: ["Lacks diesel engine choice"],
  groundClearance: 180,
  variants: [
    { id: "rumion-s-mt", name: "S 1.5 MT", price: 1044000, fuelType: "Petrol", transmission: "Manual", engineCC: 1462, powerBHP: 102, torqueNm: 136.8, mileageKmpl: 20.51, features: ["7 Seats", "Smart Hybrid", "Dual Airbags", "ESP", "Roof AC Vents"] },
    { id: "rumion-v-at", name: "V 1.5 AT", price: 1373000, fuelType: "Petrol", transmission: "Automatic", engineCC: 1462, powerBHP: 102, torqueNm: 136.8, mileageKmpl: 20.11, features: ["6-Speed AT", "Paddle Shifters", "7-inch Touchscreen", "4 Airbags"] }
  ],
  dealerPrices: [{ dealerId: "d1", dealerName: "Maruti True Value Ranchi", location: "Ranchi, Jharkhand", price: 1044000, discount: 15000, rating: 4.6 }]
};

// 36. Toyota Glanza
export const toyotaGlanza: Vehicle = {
  id: "toyota-glanza-2026",
  slug: "toyota-glanza",
  category: "car",
  brand: "Toyota",
  model: "Glanza",
  year: 2026,
  startingPrice: 686000,
  emiFrom: 13000,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/toyota/glanza/toyota-glanza-3-1767849310.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/glanza/toyota-glanza-2-1767849310.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/glanza/toyota-glanza-6-1767849312.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/glanza/toyota-glanza-0-1767849308.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/glanza/toyota-glanza-4-1767849311.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/glanza/toyota-glanza-1-1767849309.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/glanza/toyota-glanza-7-1767849313.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/glanza/toyota-glanza-5-1767849312.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/toyota/glanza/toyota-glanza-3-1767849310.png",
  fuelTypes: ["Petrol", "CNG"],
  transmissions: ["Manual", "Automatic"],
  mileage: "22.94 kmpl / 30.61 km/kg",
  features: ["360 View Camera", "Head-Up Display", "9-inch Touchscreen", "6 Airbags", "Toyota i-Connect Tech"],
  colors: ["Gaming Grey", "Enticing Silver", "Insta Blue", "Sportin Red", "Cafe White"],
  rating: 4.6,
  reviewCount: 2980,
  seatingCapacity: 5,
  bootSpaceL: 318,
  engineCC: 1197,
  powerBHP: 89,
  torqueNm: 113,
  safetyRating: 4,
  description: "The Toyota Glanza is a premium hatchback featuring Toyota's distinctive front grille, Head-Up Display, 360-degree camera, 6 airbags, and 3-Year / 1,00,000 km standard warranty.",
  pros: ["Toyota brand warranty & after-sales experience", "Head-Up Display & 360 camera", "Exceptional 30.61 km/kg CNG mileage", "Refined 1.2L 4-cylinder engine"],
  cons: ["AMT lacks rapid manual DSG gearbox crispness"],
  groundClearance: 170,
  variants: [
    { id: "glanza-e-mt", name: "E 1.2 MT", price: 686000, fuelType: "Petrol", transmission: "Manual", engineCC: 1197, powerBHP: 89, torqueNm: 113, mileageKmpl: 22.35, features: ["Dual Airbags", "All Power Windows", "Automatic Climate Control"] },
    { id: "glanza-v-amt", name: "V 1.2 AMT", price: 1000000, fuelType: "Petrol", transmission: "Automatic", engineCC: 1197, powerBHP: 89, torqueNm: 113, mileageKmpl: 22.94, features: ["Head-Up Display", "360 Camera", "9-inch Screen", "6 Airbags"] }
  ],
  dealerPrices: [{ dealerId: "d1", dealerName: "Maruti True Value Ranchi", location: "Ranchi, Jharkhand", price: 686000, discount: 15000, rating: 4.6 }]
};

// 37. Toyota Hilux
export const toyotaHilux: Vehicle = {
  id: "toyota-hilux-2026",
  slug: "toyota-hilux",
  category: "car",
  brand: "Toyota",
  model: "Hilux",
  year: 2026,
  startingPrice: 3040000,
  emiFrom: 57700,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/toyota/fortuner/toyota-fortuner-0-1767849630.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/fortuner/toyota-fortuner-7-1767849635.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/fortuner/toyota-fortuner-9-1766808910.jpg",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/fortuner/toyota-fortuner-5-1767849633.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/fortuner/toyota-fortuner-1-1767849631.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/fortuner/toyota-fortuner-6-1767849634.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/fortuner/toyota-fortuner-4-1767849633.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/fortuner/toyota-fortuner-2-1767849631.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/toyota/fortuner/toyota-fortuner-0-1767849630.png",
  fuelTypes: ["Diesel"],
  transmissions: ["Manual", "Automatic"],
  mileage: "12.6 kmpl",
  features: ["2.8L Turbo Diesel (500 Nm Torque)", "4x4 Dual-Range Transfer Case", "Electronic Auto Differential Lock", "700mm Water Wading Capacity", "7 Airbags"],
  colors: ["Emotional Red", "Gray Metallic", "White Pearl Crystal Shine", "Silver Metallic", "Super White"],
  rating: 4.9,
  reviewCount: 510,
  seatingCapacity: 5,
  bootSpaceL: 435,
  engineCC: 2755,
  powerBHP: 204,
  torqueNm: 500,
  safetyRating: 5,
  description: "The Toyota Hilux is the world's most invincible 4x4 lifestyle pickup truck, powered by a massive 204 PS / 500 Nm 2.8L Turbo Diesel engine, 700mm water wading depth, and electronic rear diff lock.",
  pros: ["Unbreakable global reputation for off-road durability", "Massive 500 Nm torque output", "700mm water wading capacity & electronic rear diff lock", "Heavy duty 470 kg payload deck"],
  cons: ["Stiff leaf-spring rear suspension when unladen"],
  groundClearance: 216,
  variants: [
    { id: "hilux-std-mt", name: "Standard 2.8 4x4 MT", price: 3040000, fuelType: "Diesel", transmission: "Manual", engineCC: 2755, powerBHP: 204, torqueNm: 420, mileageKmpl: 12.6, features: ["4x4 Low Ratio", "7 Airbags", "LED Headlamps", "Dual Zone AC"] },
    { id: "hilux-high-at", name: "High 2.8 4x4 AT", price: 3790000, fuelType: "Diesel", transmission: "Automatic", engineCC: 2755, powerBHP: 204, torqueNm: 500, mileageKmpl: 12.0, features: ["500 Nm Torque", "Leather Seats", "Powered Driver Seat", "8-inch Screen"] }
  ],
  dealerPrices: [{ dealerId: "d1", dealerName: "Maruti True Value Ranchi", location: "Ranchi, Jharkhand", price: 3040000, discount: 50000, rating: 4.6 }]
};

// 38. Toyota Camry
export const toyotaCamry: Vehicle = {
  id: "toyota-camry-2026",
  slug: "toyota-camry",
  category: "car",
  brand: "Toyota",
  model: "Camry",
  year: 2026,
  startingPrice: 4617000,
  emiFrom: 87700,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/toyota/camry/toyota-camry-1-1766140825.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/camry/toyota-camry-7-1766140828.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/camry/toyota-camry-0-1766140825.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/camry/toyota-camry-3-1766140826.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/camry/toyota-camry-6-1766140828.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/camry/toyota-camry-4-1766140827.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/camry/toyota-camry-2-1766140826.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/camry/toyota-camry-5-1766140827.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/toyota/camry/toyota-camry-1-1766140825.png",
  fuelTypes: ["Hybrid"],
  transmissions: ["Automatic"],
  mileage: "19.1 kmpl",
  features: ["2.5L Dynamic Force Self-Charging Hybrid", "JBL 9-Speaker Audio", "Reclining Rear Seats", "9 Airbags", "Head-Up Display"],
  colors: ["Attitude Black", "Platinum White Pearl", "Metal Stream", "Burning Black", "Red Mica"],
  rating: 4.9,
  reviewCount: 390,
  seatingCapacity: 5,
  bootSpaceL: 524,
  engineCC: 2487,
  powerBHP: 218,
  torqueNm: 221,
  safetyRating: 5,
  description: "The Toyota Camry Hybrid is an executive luxury sedan powered by a 2.5L Dynamic Force Self-Charging Hybrid powertrain delivering 218 PS total output, electronically reclining rear seats, and 9 airbags.",
  pros: ["Supreme rear seat chauffeur comfort with electric power recliner", "218 PS hybrid power with smooth e-CVT acceleration", "9 Airbags safety setup", "JBL 9-speaker audio system"],
  cons: ["Low ground clearance requires care over sharp speedbreakers"],
  groundClearance: 160,
  variants: [
    { id: "camry-hybrid-25", name: "2.5 Hybrid e-CVT", price: 4617000, fuelType: "Hybrid", transmission: "Automatic", engineCC: 2487, powerBHP: 218, torqueNm: 221, mileageKmpl: 19.1, features: ["218 PS Hybrid", "Reclining Rear Seats", "9 Airbags", "JBL 9 Speakers", "HUD"] }
  ],
  dealerPrices: [{ dealerId: "d1", dealerName: "Maruti True Value Ranchi", location: "Ranchi, Jharkhand", price: 4617000, discount: 30000, rating: 4.6 }]
};

// 39. Kia EV9
export const kiaEv9: Vehicle = {
  id: "kia-ev9-2026",
  slug: "kia-ev9",
  category: "car",
  brand: "Kia",
  model: "EV9",
  year: 2026,
  startingPrice: 12990000,
  emiFrom: 246000,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/kia/ev9/kia-ev9-2-1767933050.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/ev9/kia-ev9-0-1767933049.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/ev9/kia-ev9-2-1764308755.jpg",
    "https://images.91wheels.com/assets/c_images/gallery/kia/ev9/kia-ev9-4-1764308756.jpg",
    "https://images.91wheels.com/assets/c_images/gallery/kia/ev9/kia-ev9-1-1767933049.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/ev9/kia-ev9-3-1767933051.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/ev9/kia-ev9-3-1764308756.jpg",
    "https://images.91wheels.com/assets/c_images/gallery/kia/ev9/kia-ev9-1-1764308754.jpg"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/kia/ev9/kia-ev9-2-1767933050.png",
  fuelTypes: ["Electric"],
  transmissions: ["Automatic"],
  mileage: "561 km Range",
  features: ["99.8 kWh Battery Pack", "Dual Motor AWD (384 PS / 700 Nm)", "Swiveling 2nd Row Seats", "Level 3 ADAS Ready", "Meridian 14-Speaker Audio"],
  colors: ["Ocean Blue Matte", "Pebble Grey", "Snow White Pearl", "Aurora Black Pearl"],
  rating: 5.0,
  reviewCount: 180,
  isNew: true,
  isEV: true,
  seatingCapacity: 6,
  bootSpaceL: 333,
  engineCC: 0,
  powerBHP: 384,
  torqueNm: 700,
  safetyRating: 5,
  description: "The Kia EV9 GT-Line is Kia's flagship 6-seater Electric SUV featuring a massive 99.8 kWh battery, Dual-Motor AWD producing 384 PS & 700 Nm torque (0-100 in 5.3s), 800V fast charging, and Meridian audio.",
  pros: ["Insane 384 PS / 700 Nm AWD dual motor performance (0-100 in 5.3s)", "Massive 99.8 kWh battery with 561 km range", "800V ultra-fast charging (10-80% in 24 mins)", "Swiveling lounge captain seats & Meridian sound"],
  cons: ["Ultra-luxury price bracket above ₹1.29 Crore"],
  groundClearance: 198,
  variants: [
    { id: "ev9-gt-line-awd", name: "GT-Line AWD 99.8 kWh 6-Str", price: 12990000, fuelType: "Electric", transmission: "Automatic", engineCC: 0, powerBHP: 384, torqueNm: 700, mileageKmpl: 0, rangeKm: 561, features: ["Dual Motor AWD", "99.8 kWh Battery", "Swivel Seats", "Meridian Sound", "Digital Mirrors"] }
  ],
  dealerPrices: [{ dealerId: "kia_d1_ranchi", dealerName: "Speed Kia Ranchi", location: "Ranchi, Jharkhand", price: 12990000, discount: 0, rating: 4.8 }]
};

// 40. Kia Clavis
export const kiaClavis: Vehicle = {
  id: "kia-clavis-2026",
  slug: "kia-clavis",
  category: "car",
  brand: "Kia",
  model: "Clavis",
  year: 2026,
  startingPrice: 900000,
  emiFrom: 17100,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/kia/clavis/kia-clavis-0-1780981908.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/clavis/kia-clavis-7-1780981910.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/clavis/kia-clavis-3-1780981909.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/clavis/kia-clavis-5-1780981909.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/clavis/kia-clavis-1-1780981908.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/clavis/kia-clavis-6-1780981910.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/clavis/kia-clavis-4-1780981909.png",
    "https://images.91wheels.com/assets/c_images/gallery/kia/clavis/kia-clavis-2-1780981908.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/kia/clavis/kia-clavis-0-1780981908.png",
  fuelTypes: ["Petrol", "Electric"],
  transmissions: ["Manual", "Automatic"],
  mileage: "18.5 kmpl / 400 km Range",
  features: ["Tall Boxy SUV Silhouette", "Panoramic Sunroof", "Level 2 ADAS", "Dual 10.25-inch Screens", "Ventilated Seats"],
  colors: ["Glacier White", "Sparkling Silver", "Gravity Grey", "Aurora Black", "Intense Red"],
  rating: 4.7,
  reviewCount: 650,
  isNew: true,
  seatingCapacity: 5,
  bootSpaceL: 390,
  engineCC: 1197,
  powerBHP: 120,
  torqueNm: 172,
  safetyRating: 5,
  description: "The Kia Clavis is Kia's brand new tall-boy compact crossover SUV positioned between Sonet and Seltos, offering boxy SUV styling, high seating position, panoramic sunroof, and Level 2 ADAS.",
  pros: ["Bold tall-boy boxy SUV stance & panoramic sunroof", "Dual 10.25-inch screen setup", "Level 2 ADAS safety package", "Generous rear headroom & 390L boot space"],
  cons: ["Slated for mid-2026 release"],
  groundClearance: 195,
  variants: [
    { id: "clavis-htx", name: "HTX 1.0 Turbo DCT", price: 1250000, fuelType: "Petrol", transmission: "Automatic", engineCC: 998, powerBHP: 120, torqueNm: 172, mileageKmpl: 18.5, features: ["Panoramic Sunroof", "Level 2 ADAS", "Dual Screens", "Ventilated Seats"] }
  ],
  dealerPrices: [{ dealerId: "kia_d1_ranchi", dealerName: "Speed Kia Ranchi", location: "Ranchi, Jharkhand", price: 900000, discount: 15000, rating: 4.8 }]
};

// 41. Skoda Kushaq
export const skodaKushaq: Vehicle = {
  id: "skoda-kushaq-2026",
  slug: "skoda-kushaq",
  category: "car",
  brand: "Skoda",
  model: "Kushaq",
  year: 2026,
  startingPrice: 1089000,
  emiFrom: 20700,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/skoda/kushaq/skoda-kushaq-0-1774256060.png",
    "https://images.91wheels.com/assets/c_images/gallery/skoda/kushaq/skoda-kushaq-7-1774508293.png",
    "https://images.91wheels.com/assets/c_images/gallery/skoda/kushaq/skoda-kushaq-3-1774508290.png",
    "https://images.91wheels.com/assets/c_images/gallery/skoda/kushaq/skoda-kushaq-5-1774508292.png",
    "https://images.91wheels.com/assets/c_images/gallery/skoda/kushaq/skoda-kushaq-1-1774508288.png",
    "https://images.91wheels.com/assets/c_images/gallery/skoda/kushaq/skoda-kushaq-6-1774508293.png",
    "https://images.91wheels.com/assets/c_images/gallery/skoda/kushaq/skoda-kushaq-0-1774508287.png",
    "https://images.91wheels.com/assets/c_images/gallery/skoda/kushaq/skoda-kushaq-4-1774508291.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/skoda/kushaq/skoda-kushaq-0-1774256060.png",
  fuelTypes: ["Petrol"],
  transmissions: ["Manual", "Automatic"],
  mileage: "19.76 kmpl",
  features: ["5-Star GNCAP Safety", "150 PS 1.5L TSI with Active Cylinder Tech", "7-Speed DSG Transmission", "Subwoofer Audio", "Ventilated Seats"],
  colors: ["Tornado Red", "Honey Orange", "Candy White", "Reflex Silver", "Carbon Steel"],
  rating: 4.8,
  reviewCount: 2980,
  isBestSeller: true,
  seatingCapacity: 5,
  bootSpaceL: 385,
  engineCC: 1498,
  powerBHP: 150,
  torqueNm: 250,
  safetyRating: 5,
  description: "The Skoda Kushaq is a 5-Star GNCAP safety rated mid SUV engineered on MQB-A0-IN platform, powered by the potent 150 PS / 250 Nm 1.5L TSI evo engine with Active Cylinder Technology.",
  pros: ["5-Star GNCAP safety rating for both adult & child occupants", "Masterclass handling dynamics & high-speed chassis stability", "Ferocious 150 PS TSI engine (0-100 in 8.6 seconds)", "Ventilated front seats & Subwoofer"],
  cons: ["No diesel engine option"],
  groundClearance: 188,
  variants: [
    { id: "kushaq-classic", name: "Classic 1.0 TSI MT", price: 1089000, fuelType: "Petrol", transmission: "Manual", engineCC: 999, powerBHP: 115, torqueNm: 178, mileageKmpl: 19.76, features: ["5-Star Safety", "ESP Standard", "6 Airbags", "Remote Keyless Entry"] },
    { id: "kushaq-prestige-dsg", name: "Prestige 1.5 TSI DSG", price: 1879000, fuelType: "Petrol", transmission: "Automatic", engineCC: 1498, powerBHP: 150, torqueNm: 250, mileageKmpl: 18.86, features: ["150 PS TSI Engine", "7DSG", "Subwoofer", "Sunroof", "Ventilated Seats"] }
  ],
  dealerPrices: [{ dealerId: "d1", dealerName: "Maruti True Value Ranchi", location: "Ranchi, Jharkhand", price: 1089000, discount: 25000, rating: 4.6 }]
};

// 42. Skoda Kylaq
export const skodaKylaq: Vehicle = {
  id: "skoda-kylaq-2026",
  slug: "skoda-kylaq",
  category: "car",
  brand: "Skoda",
  model: "Kylaq",
  year: 2026,
  startingPrice: 789000,
  emiFrom: 15000,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/skoda/kylaq/skoda-kylaq-7-1775204345.png",
    "https://images.91wheels.com/assets/c_images/gallery/skoda/kylaq/skoda-kylaq-6-1775204344.png",
    "https://images.91wheels.com/assets/c_images/gallery/skoda/kylaq/skoda-kylaq-2-1775204340.png",
    "https://images.91wheels.com/assets/c_images/gallery/skoda/kylaq/skoda-kylaq-4-1775204342.png",
    "https://images.91wheels.com/assets/c_images/gallery/skoda/kylaq/skoda-kylaq-0-1775204337.png",
    "https://images.91wheels.com/assets/c_images/gallery/skoda/kylaq/skoda-kylaq-5-1775204343.png",
    "https://images.91wheels.com/assets/c_images/gallery/skoda/kylaq/skoda-kylaq-3-1775204341.png",
    "https://images.91wheels.com/assets/c_images/gallery/skoda/kylaq/skoda-kylaq-1-1775204338.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/skoda/kylaq/skoda-kylaq-7-1775204345.png",
  fuelTypes: ["Petrol"],
  transmissions: ["Manual", "Automatic"],
  mileage: "19.8 kmpl",
  features: ["5-Star MQB-A0-IN Platform", "115 PS 1.0L TSI Engine", "6 Airbags Standard", "189mm Ground Clearance", "10.1-inch Touchscreen"],
  colors: ["Olive Gold", "Tornado Red", "Candy White", "Carbon Steel", "Brilliant Silver"],
  rating: 4.9,
  reviewCount: 1120,
  isNew: true,
  isBestSeller: true,
  seatingCapacity: 5,
  bootSpaceL: 446,
  engineCC: 999,
  powerBHP: 115,
  torqueNm: 178,
  safetyRating: 5,
  description: "The Skoda Kylaq is Skoda's brand new sub-4m compact SUV featuring 115 PS 1.0L TSI engine, 6 airbags standard, massive 446L boot space, and Skoda's signature driving dynamics under ₹8 Lakhs.",
  pros: ["Massive 446L boot capacity (largest in sub-4m segment)", "115 PS TSI engine with 178 Nm torque", "6 Airbags standard across all trims", "Outstanding high speed German chassis stability"],
  cons: ["Rear middle seat best suited for a child"],
  groundClearance: 189,
  variants: [
    { id: "kylaq-classic", name: "Classic 1.0 TSI MT", price: 789000, fuelType: "Petrol", transmission: "Manual", engineCC: 999, powerBHP: 115, torqueNm: 178, mileageKmpl: 19.8, features: ["6 Airbags Standard", "ESP", "Multi Collision Braking", "Front Power Windows"] },
    { id: "kylaq-prestige-at", name: "Prestige 1.0 TSI 6AT", price: 1439000, fuelType: "Petrol", transmission: "Automatic", engineCC: 999, powerBHP: 115, torqueNm: 178, mileageKmpl: 19.0, features: ["Sunroof", "Ventilated Seats", "10.1-inch Screen", "Virtual Cockpit"] }
  ],
  dealerPrices: [{ dealerId: "d1", dealerName: "Maruti True Value Ranchi", location: "Ranchi, Jharkhand", price: 789000, discount: 15000, rating: 4.6 }]
};

// 43. Volkswagen Taigun
export const volkswagenTaigun: Vehicle = {
  id: "volkswagen-taigun-2026",
  slug: "volkswagen-taigun",
  category: "car",
  brand: "Volkswagen",
  model: "Taigun",
  year: 2026,
  startingPrice: 1169000,
  emiFrom: 22200,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/volkswagen/taigun/volkswagen-taigun-0-1777890574.png",
    "https://images.91wheels.com/assets/c_images/gallery/volkswagen/taigun/volkswagen-taigun-0-1781173351.png",
    "https://images.91wheels.com/assets/c_images/gallery/volkswagen/taigun/volkswagen-taigun-4-1781173352.png",
    "https://images.91wheels.com/assets/c_images/gallery/volkswagen/taigun/volkswagen-taigun-2-1781173351.png",
    "https://images.91wheels.com/assets/c_images/gallery/volkswagen/taigun/volkswagen-taigun-6-1781173352.png",
    "https://images.91wheels.com/assets/c_images/gallery/volkswagen/taigun/volkswagen-taigun-1-1781173351.png",
    "https://images.91wheels.com/assets/c_images/gallery/volkswagen/taigun/volkswagen-taigun-3-1781173351.png",
    "https://images.91wheels.com/assets/c_images/gallery/volkswagen/taigun/volkswagen-taigun-5-1781173352.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/volkswagen/taigun/volkswagen-taigun-0-1777890574.png",
  fuelTypes: ["Petrol"],
  transmissions: ["Manual", "Automatic"],
  mileage: "19.87 kmpl",
  features: ["5-Star GNCAP Safety", "GT Performance Line 150 PS TSI", "7-Speed DSG", "Virtual Cockpit", "Red Brake Calipers"],
  colors: ["Wild Cherry Red", "Curcuma Yellow", "Reflex Silver", "Carbon Steel", "Candy White", "Lava Blue"],
  rating: 4.8,
  reviewCount: 2650,
  isBestSeller: true,
  seatingCapacity: 5,
  bootSpaceL: 385,
  engineCC: 1498,
  powerBHP: 150,
  torqueNm: 250,
  safetyRating: 5,
  description: "The Volkswagen Taigun is a 5-Star GNCAP safety rated SUV featuring VW GT Performance Line 1.5L TSI engine producing 150 PS / 250 Nm torque, 7-speed DSG with paddle shifters, and Virtual Cockpit.",
  pros: ["5-Star GNCAP safety standard", "Powerful GT 150 PS TSI engine (0-100 in 8.7s)", "Razor sharp steering response & German engineering", "10-inch VW Play touchscreen with wireless CarPlay"],
  cons: ["No diesel option"],
  groundClearance: 188,
  variants: [
    { id: "taigun-comfortline", name: "Comfortline 1.0 TSI MT", price: 1169000, fuelType: "Petrol", transmission: "Manual", engineCC: 999, powerBHP: 115, torqueNm: 178, mileageKmpl: 19.87, features: ["5-Star Safety", "6 Airbags", "ESP", "Multi Collision Brakes"] },
    { id: "taigun-gt-plus-dsg", name: "GT Plus Edge 1.5 TSI DSG", price: 1973000, fuelType: "Petrol", transmission: "Automatic", engineCC: 1498, powerBHP: 150, torqueNm: 250, mileageKmpl: 19.01, features: ["GT Badging", "7DSG", "Ventilated Seats", "Sunroof", "Red Calipers"] }
  ],
  dealerPrices: [{ dealerId: "d1", dealerName: "Maruti True Value Ranchi", location: "Ranchi, Jharkhand", price: 1169000, discount: 30000, rating: 4.6 }]
};

// 44. Volkswagen Tiguan
export const volkswagenTiguan: Vehicle = {
  id: "volkswagen-tiguan-2026",
  slug: "volkswagen-tiguan",
  category: "car",
  brand: "Volkswagen",
  model: "Tiguan",
  year: 2026,
  startingPrice: 3517000,
  emiFrom: 66800,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/volkswagen/taigun/volkswagen-taigun-0-1777890574.png",
    "https://images.91wheels.com/assets/c_images/gallery/volkswagen/taigun/volkswagen-taigun-0-1781173351.png",
    "https://images.91wheels.com/assets/c_images/gallery/volkswagen/taigun/volkswagen-taigun-4-1781173352.png",
    "https://images.91wheels.com/assets/c_images/gallery/volkswagen/taigun/volkswagen-taigun-2-1781173351.png",
    "https://images.91wheels.com/assets/c_images/gallery/volkswagen/taigun/volkswagen-taigun-6-1781173352.png",
    "https://images.91wheels.com/assets/c_images/gallery/volkswagen/taigun/volkswagen-taigun-1-1781173351.png",
    "https://images.91wheels.com/assets/c_images/gallery/volkswagen/taigun/volkswagen-taigun-3-1781173351.png",
    "https://images.91wheels.com/assets/c_images/gallery/volkswagen/taigun/volkswagen-taigun-5-1781173352.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/volkswagen/taigun/volkswagen-taigun-0-1777890574.png",
  fuelTypes: ["Petrol"],
  transmissions: ["Automatic"],
  mileage: "12.65 kmpl",
  features: ["4MOTION All-Wheel Drive (AWD)", "190 PS 2.0L TSI Engine", "7-Speed DSG", "IQ.LIGHT Matrix LED Headlamps", "Panoramic Sunroof"],
  colors: ["Nightshade Blue", "Dolphin Grey", "Orix White", "Deep Black", "Reflex Silver"],
  rating: 4.9,
  reviewCount: 420,
  seatingCapacity: 5,
  bootSpaceL: 615,
  engineCC: 1984,
  powerBHP: 190,
  torqueNm: 320,
  safetyRating: 5,
  description: "The Volkswagen Tiguan is VW's flagship luxury 4MOTION AWD SUV featuring a 190 PS / 320 Nm 2.0L TSI engine, 7-speed DSG, IQ.LIGHT Matrix LED headlamps, and 615L luggage boot space.",
  pros: ["Potent 190 PS / 320 Nm 2.0L TSI engine (0-100 in 7.4s)", "4MOTION All-Wheel Drive system with off-road modes", "IQ.LIGHT Matrix LED adaptive headlights", "Massive 615L boot capacity"],
  cons: ["Premium price segment"],
  groundClearance: 190,
  variants: [
    { id: "tiguan-elegance", name: "Elegance 2.0 TSI 4MOTION DSG", price: 3517000, fuelType: "Petrol", transmission: "Automatic", engineCC: 1984, powerBHP: 190, torqueNm: 320, mileageKmpl: 12.65, features: ["4MOTION AWD", "IQ.LIGHT Matrix", "Panoramic Sunroof", "Vienna Leather Seats", "615L Boot"] }
  ],
  dealerPrices: [{ dealerId: "d1", dealerName: "Maruti True Value Ranchi", location: "Ranchi, Jharkhand", price: 3517000, discount: 40000, rating: 4.6 }]
};

// 45. Honda Elevate
export const hondaElevate: Vehicle = {
  id: "honda-elevate-2026",
  slug: "honda-elevate",
  category: "car",
  brand: "Honda",
  model: "Elevate",
  year: 2026,
  startingPrice: 1169000,
  emiFrom: 22200,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/honda/elevate/honda-elevate-0-1775644182.png",
    "https://images.91wheels.com/assets/c_images/gallery/honda/elevate/honda-elevate-4-1775644187.png",
    "https://images.91wheels.com/assets/c_images/gallery/honda/elevate/honda-elevate-5-1775644188.png",
    "https://images.91wheels.com/assets/c_images/gallery/honda/elevate/honda-elevate-2-1775644184.png",
    "https://images.91wheels.com/assets/c_images/gallery/honda/elevate/honda-elevate-1-1775644183.png",
    "https://images.91wheels.com/assets/c_images/gallery/honda/elevate/honda-elevate-3-1775644185.png",
    "https://images.91wheels.com/assets/c_images/gallery/honda/elevate/honda-elevate-6-1775644190.png",
    "https://images.91wheels.com/assets/c_images/gallery/honda/elevate/honda-elevate-7-1775644193.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/honda/elevate/honda-elevate-0-1775644182.png",
  fuelTypes: ["Petrol"],
  transmissions: ["Manual", "Automatic"],
  mileage: "16.92 kmpl",
  features: ["Honda SENSING ADAS Suite", "Class-Leading 220mm Ground Clearance", "1.5L i-VTEC Engine", "10.25-inch Touchscreen", "458L Huge Boot"],
  colors: ["Phoenix Orange", "Obsidian Blue", "Radiant Red", "Platinum White", "Golden Brown", "Lunar Silver"],
  rating: 4.8,
  reviewCount: 2410,
  isBestSeller: true,
  seatingCapacity: 5,
  bootSpaceL: 458,
  engineCC: 1498,
  powerBHP: 121,
  torqueNm: 145,
  safetyRating: 5,
  description: "The Honda Elevate is Honda's mid SUV featuring segment-best 220mm ground clearance, 121 PS 1.5L i-VTEC engine, Honda SENSING ADAS suite, 458L boot, and LaneWatch camera.",
  pros: ["Segment-highest 220mm ground clearance tackles rough terrain easily", "Ultra-refined 121 PS 1.5L i-VTEC naturally aspirated engine", "Camera-based Honda SENSING ADAS technology", "Huge 458L boot space"],
  cons: ["No panoramic sunroof option (single-pane sunroof standard)"],
  groundClearance: 220,
  variants: [
    { id: "elevate-sv", name: "SV 1.5 MT", price: 1169000, fuelType: "Petrol", transmission: "Manual", engineCC: 1498, powerBHP: 121, torqueNm: 145, mileageKmpl: 15.31, features: ["LED Headlamps", "6 Airbags", "Push Button Start", "Auto AC"] },
    { id: "elevate-zx-cvt", name: "ZX 1.5 CVT ADAS", price: 1643000, fuelType: "Petrol", transmission: "Automatic", engineCC: 1498, powerBHP: 121, torqueNm: 145, mileageKmpl: 16.92, features: ["Honda SENSING ADAS", "10.25-inch Screen", "Sunroof", "LaneWatch Camera", "Leather Seats"] }
  ],
  dealerPrices: [{ dealerId: "d1", dealerName: "Maruti True Value Ranchi", location: "Ranchi, Jharkhand", price: 1169000, discount: 20000, rating: 4.6 }]
};

// 46. MG Windsor EV
export const mgWindsorEv: Vehicle = {
  id: "mg-windsor-ev-2026",
  slug: "mg-windsor-ev",
  category: "car",
  brand: "MG",
  model: "Windsor EV",
  year: 2026,
  startingPrice: 1350000,
  emiFrom: 25600,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/mg/windsor-ev/mg-windsor-ev-0-1781267952.png",
    "https://images.91wheels.com/assets/c_images/gallery/mg/windsor-ev/mg-windsor-ev-7-1781267954.png",
    "https://images.91wheels.com/assets/c_images/gallery/mg/windsor-ev/mg-windsor-ev-3-1781267953.png",
    "https://images.91wheels.com/assets/c_images/gallery/mg/windsor-ev/mg-windsor-ev-5-1781267953.png",
    "https://images.91wheels.com/assets/c_images/gallery/mg/windsor-ev/mg-windsor-ev-1-1781267952.png",
    "https://images.91wheels.com/assets/c_images/gallery/mg/windsor-ev/mg-windsor-ev-6-1781267953.png",
    "https://images.91wheels.com/assets/c_images/gallery/mg/windsor-ev/mg-windsor-ev-4-1781267953.png",
    "https://images.91wheels.com/assets/c_images/gallery/mg/windsor-ev/mg-windsor-ev-2-1781267952.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/mg/windsor-ev/mg-windsor-ev-0-1781267952.png",
  fuelTypes: ["Electric"],
  transmissions: ["Automatic"],
  mileage: "331 km Range",
  features: ["135° Reclining Aero Lounge Back Seats", "15.6-inch GRANDVIEW Touchscreen", "Infinity View Glass Roof", "38 kWh Battery", "6 Airbags Standard"],
  colors: ["Turquoise Green", "Pearl White", "Clay Beige", "Starry Black"],
  rating: 4.9,
  reviewCount: 1850,
  isNew: true,
  isEV: true,
  isBestSeller: true,
  seatingCapacity: 5,
  bootSpaceL: 604,
  engineCC: 0,
  powerBHP: 136,
  torqueNm: 200,
  safetyRating: 5,
  description: "The MG Windsor EV is an Intelligent CUV featuring 135° reclining Aero Lounge rear seats, massive 15.6-inch GRANDVIEW touchscreen, Infinity View glass roof, 38 kWh battery, and 604L boot space.",
  pros: ["First-in-segment 135° reclining business class rear lounge seats", "Gargantuan 15.6-inch GRANDVIEW infotainment display", "Massive 604L boot luggage capacity", "BaaS battery subscription model option"],
  cons: ["Glass roof does not open (fixed panoramic glass skyroof)"],
  groundClearance: 186,
  variants: [
    { id: "windsor-ev-excite", name: "Excite 38 kWh", price: 1350000, fuelType: "Electric", transmission: "Automatic", engineCC: 0, powerBHP: 136, torqueNm: 200, mileageKmpl: 0, rangeKm: 331, features: ["6 Airbags", "10.1-inch Screen", "LED Headlamps", "ESP"] },
    { id: "windsor-ev-essence", name: "Essence 38 kWh", price: 1550000, fuelType: "Electric", transmission: "Automatic", engineCC: 0, powerBHP: 136, torqueNm: 200, mileageKmpl: 0, rangeKm: 331, features: ["135° Aero Lounge Seats", "15.6-inch Screen", "Infinity Glass Roof", "360 Camera", "9 Speakers"] }
  ],
  dealerPrices: [{ dealerId: "d1", dealerName: "Maruti True Value Ranchi", location: "Ranchi, Jharkhand", price: 1350000, discount: 15000, rating: 4.6 }]
};

// 47. MG Comet EV
export const mgCometEv: Vehicle = {
  id: "mg-comet-ev-2026",
  slug: "mg-comet-ev",
  category: "car",
  brand: "MG",
  model: "Comet EV",
  year: 2026,
  startingPrice: 699000,
  emiFrom: 13200,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/mg/comet-ev/mg-comet-ev-0-1767868185.png",
    "https://images.91wheels.com/assets/c_images/gallery/mg/comet-ev/mg-comet-ev-3-1767868187.png",
    "https://images.91wheels.com/assets/c_images/gallery/mg/comet-ev/mg-comet-ev-5-1764228894.jpg",
    "https://images.91wheels.com/assets/c_images/gallery/mg/comet-ev/mg-comet-ev-7-1764228895.jpg",
    "https://images.91wheels.com/assets/c_images/gallery/mg/comet-ev/mg-comet-ev-1-1767868185.png",
    "https://images.91wheels.com/assets/c_images/gallery/mg/comet-ev/mg-comet-ev-2-1767868186.png",
    "https://images.91wheels.com/assets/c_images/gallery/mg/comet-ev/mg-comet-ev-6-1764228895.jpg",
    "https://images.91wheels.com/assets/c_images/gallery/mg/comet-ev/mg-comet-ev-4-1764228894.jpg"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/mg/comet-ev/mg-comet-ev-0-1767868185.png",
  fuelTypes: ["Electric"],
  transmissions: ["Automatic"],
  mileage: "230 km Range",
  features: ["Ultra Compact 2.9m Length", "Dual 10.25-inch Screens", "17.3 kWh Battery Pack", "Turning Radius 4.2m", "Wireless Apple CarPlay / Android Auto"],
  colors: ["Apple Green", "Candy White", "Starry Black", "Aurora Silver"],
  rating: 4.5,
  reviewCount: 1540,
  isEV: true,
  seatingCapacity: 4,
  bootSpaceL: 110,
  engineCC: 0,
  powerBHP: 42,
  torqueNm: 110,
  safetyRating: 3,
  description: "The MG Comet EV is an ultra-compact 2.9m urban electric car designed for dense city traffic, featuring 4.2m turning radius, dual 10.25-inch floating screens, and 230 km ARAI range.",
  pros: ["Incredible 4.2m turning radius slips into impossible parking spots", "Dual 10.25-inch floating screens dashboard setup", "Super economical urban commuter cost", "4-seater flexibility"],
  cons: ["Boot space is minimal when 4 seats are up"],
  groundClearance: 165,
  variants: [
    { id: "comet-pace", name: "Pace 17.3 kWh", price: 699000, fuelType: "Electric", transmission: "Automatic", engineCC: 0, powerBHP: 42, torqueNm: 110, mileageKmpl: 0, rangeKm: 230, features: ["Dual Airbags", "ABS with EBD", "Reverse Camera"] },
    { id: "comet-exclusive-fc", name: "Exclusive Fast Charge 17.3 kWh", price: 940000, fuelType: "Electric", transmission: "Automatic", engineCC: 0, powerBHP: 42, torqueNm: 110, mileageKmpl: 0, rangeKm: 230, features: ["7.4 kW Fast Charger", "Dual 10.25-inch Screens", "Keyless Entry", "Leatherette Steering"] }
  ],
  dealerPrices: [{ dealerId: "d1", dealerName: "Maruti True Value Ranchi", location: "Ranchi, Jharkhand", price: 699000, discount: 10000, rating: 4.6 }]
};

// 48. Nissan Magnite
export const nissanMagnite: Vehicle = {
  id: "nissan-magnite-2026",
  slug: "nissan-magnite",
  category: "car",
  brand: "Nissan",
  model: "Magnite",
  year: 2026,
  startingPrice: 599000,
  emiFrom: 11300,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/nissan/magnite/nissan-magnite-7-1767852828.png",
    "https://images.91wheels.com/assets/c_images/gallery/nissan/magnite/nissan-magnite-6-1767852827.png",
    "https://images.91wheels.com/assets/c_images/gallery/nissan/magnite/nissan-magnite-2-1767852825.png",
    "https://images.91wheels.com/assets/c_images/gallery/nissan/magnite/nissan-magnite-4-1767852826.png",
    "https://images.91wheels.com/assets/c_images/gallery/nissan/magnite/nissan-magnite-0-1767852824.png",
    "https://images.91wheels.com/assets/c_images/gallery/nissan/magnite/nissan-magnite-5-1767852827.png",
    "https://images.91wheels.com/assets/c_images/gallery/nissan/magnite/nissan-magnite-3-1767852825.png",
    "https://images.91wheels.com/assets/c_images/gallery/nissan/magnite/nissan-magnite-1-1767852824.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/nissan/magnite/nissan-magnite-7-1767852828.png",
  fuelTypes: ["Petrol"],
  transmissions: ["Manual", "Automatic"],
  mileage: "20.0 kmpl",
  features: ["4-Star GNCAP Safety", "360 Degree Around View Monitor", "7-inch TFT Digital Instrument Cluster", "205mm High Ground Clearance", "1.0L Turbo Engine"],
  colors: ["Flare Garnet Red", "Onyx Black", "Blade Silver", "Storm White", "Sunrise Copper"],
  rating: 4.6,
  reviewCount: 3890,
  isBestSeller: true,
  seatingCapacity: 5,
  bootSpaceL: 336,
  engineCC: 999,
  powerBHP: 100,
  torqueNm: 160,
  safetyRating: 4,
  description: "The Nissan Magnite is an aggressive sub-compact SUV offering 4-Star GNCAP safety rating, 360-degree Around View Monitor, 205mm ground clearance, and smooth X-TRONIC CVT transmission.",
  pros: ["4-Star GNCAP safety rating", "360 degree camera in under ₹10 Lakhs price bracket", "Pippy 100 PS 1.0L Turbo engine with smooth CVT", "High 205mm ground clearance"],
  cons: ["Base 1.0L NA engine is modest"],
  groundClearance: 205,
  variants: [
    { id: "magnite-visia", name: "Visia 1.0 NA MT", price: 599000, fuelType: "Petrol", transmission: "Manual", engineCC: 999, powerBHP: 72, torqueNm: 96, mileageKmpl: 19.35, features: ["6 Airbags Standard", "ESP", "Rear Sensors"] },
    { id: "magnite-tekna-cvt", name: "Tekna+ 1.0 Turbo CVT", price: 1150000, fuelType: "Petrol", transmission: "Automatic", engineCC: 999, powerBHP: 100, torqueNm: 152, mileageKmpl: 20.0, features: ["360 Degree Camera", "X-TRONIC CVT", "7-inch TFT Cluster", "Wireless Charger", "Alloy Wheels"] }
  ],
  dealerPrices: [{ dealerId: "d1", dealerName: "Maruti True Value Ranchi", location: "Ranchi, Jharkhand", price: 599000, discount: 15000, rating: 4.6 }]
};

// 49. Renault Kiger
export const renaultKiger: Vehicle = {
  id: "renault-kiger-2026",
  slug: "renault-kiger",
  category: "car",
  brand: "Renault",
  model: "Kiger",
  year: 2026,
  startingPrice: 600000,
  emiFrom: 11400,
    images: [
    "https://images.91wheels.com/assets/c_images/gallery/renault/kiger/renault-kiger-7-1766211181.png",
    "https://images.91wheels.com/assets/c_images/gallery/renault/kiger/renault-kiger-6-1766211180.png",
    "https://images.91wheels.com/assets/c_images/gallery/renault/kiger/renault-kiger-2-1766211178.png",
    "https://images.91wheels.com/assets/c_images/gallery/renault/kiger/renault-kiger-4-1766211179.png",
    "https://images.91wheels.com/assets/c_images/gallery/renault/kiger/renault-kiger-0-1766211177.png",
    "https://images.91wheels.com/assets/c_images/gallery/renault/kiger/renault-kiger-5-1766211179.png",
    "https://images.91wheels.com/assets/c_images/gallery/renault/kiger/renault-kiger-3-1766211178.png",
    "https://images.91wheels.com/assets/c_images/gallery/renault/kiger/renault-kiger-1-1766211177.png"
  ],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/renault/kiger/renault-kiger-7-1766211181.png",
  fuelTypes: ["Petrol"],
  transmissions: ["Manual", "Automatic"],
  mileage: "20.5 kmpl",
  features: ["4-Star GNCAP Safety", "405L Massive Boot Space", "205mm Ground Clearance", "Multi-Sense Drive Modes", "Wireless Phone Charger"],
  colors: ["Caspian Blue", "Radiant Red", "Moonlight Silver", "Mahogany Brown", "Ice Cool White"],
  rating: 4.6,
  reviewCount: 2780,
  seatingCapacity: 5,
  bootSpaceL: 405,
  engineCC: 999,
  powerBHP: 100,
  torqueNm: 160,
  safetyRating: 4,
  description: "The Renault Kiger is a sporty sub-compact SUV featuring 4-Star GNCAP safety, segment-leading 405L boot space, 205mm ground clearance, Multi-Sense driving modes, and 100 PS Turbo engine.",
  pros: ["Massive 405L boot capacity", "4-Star GNCAP safety rating", "205mm ground clearance", "Multi-Sense driving modes (Eco, Normal, Sport)"],
  cons: ["Rear seat headroom slightly tight for tall passengers"],
  groundClearance: 205,
  variants: [
    { id: "kiger-rxe", name: "RXE 1.0 NA MT", price: 600000, fuelType: "Petrol", transmission: "Manual", engineCC: 999, powerBHP: 72, torqueNm: 96, mileageKmpl: 19.83, features: ["4 Airbags", "ABS", "Front Power Windows"] },
    { id: "kiger-rxz-cvt", name: "RXZ 1.0 Turbo X-Tronic CVT", price: 1123000, fuelType: "Petrol", transmission: "Automatic", engineCC: 999, powerBHP: 100, torqueNm: 152, mileageKmpl: 20.5, features: ["CVT Gearbox", "Wireless Charger", "405L Boot", "PM 2.5 Air Filter", "Drive Modes"] }
  ],
  dealerPrices: [{ dealerId: "d1", dealerName: "Maruti True Value Ranchi", location: "Ranchi, Jharkhand", price: 600000, discount: 15000, rating: 4.6 }]
};

// Toyota Innova Crysta
export const toyota_innova_crysta_2026: Vehicle = {
  id: "toyota-innova-crysta-2026",
  slug: "toyota-innova-crysta",
  category: "car",
  brand: "Toyota",
  model: "Innova Crysta",
  year: 2026,
  startingPrice: 1999000,
  emiFrom: 37500,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/toyota/innova-crysta/toyota-innova-crysta-0-1780900881.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/innova-crysta/toyota-innova-crysta-2-1767849000.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/innova-crysta/toyota-innova-crysta-6-1767849018.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/innova-crysta/toyota-innova-crysta-0-1767848999.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/innova-crysta/toyota-innova-crysta-4-1767849001.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/innova-crysta/toyota-innova-crysta-1-1767848999.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/innova-crysta/toyota-innova-crysta-7-1767849018.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/innova-crysta/toyota-innova-crysta-5-1767849017.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/toyota/innova-crysta/toyota-innova-crysta-0-1780900881.png",
  fuelTypes: ["Diesel"],
  transmissions: ["Manual"],
  mileage: "15.6 kmpl",
  engineCC: 2393,
  powerBHP: 148,
  torqueNm: 343,
  bootSpaceL: 300,
  groundClearance: 178,
  safetyRating: 5,
  seatingCapacity: 7,
  rating: 4.7,
  reviewCount: 3200,
  isNew: true,
  isEV: false,
  description: "The Toyota Innova Crysta is India's gold standard 7-seater MPV powered by a proven 2.4L GD Turbo Diesel engine, offering unmatched reliability, plush seating, and robust chassis.",
  features: ["2.4L GD Turbo Diesel Engine","8-way Powered Driver Seat","Ambient Lighting & Wood Finish Trim","Rear Automatic Climate Control","7 Airbags & Hill Start Assist"],
  colors: ["Super White","Attitude Black","Silver Metallic","Avant-Garde Bronze"],
  pros: ["Bulletproof 2.4L diesel reliability","Supreme long-distance ride comfort","High resale value"],
  cons: ["Manual transmission only in current model"],
  variants: [
    {
      id: "toyota-innova-crysta-v1",
      name: "Standard 2026",
      price: 1999000,
      fuelType: "Diesel",
      transmission: "Manual",
      engineCC: 2393,
      powerBHP: 148,
      torqueNm: 343,
      mileageKmpl: 15.6,
      features: ["2.4L GD Turbo Diesel Engine","8-way Powered Driver Seat","Ambient Lighting & Wood Finish Trim"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_main",
      dealerName: "Main Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 1999000,
      discount: 25000,
      rating: 4.8
    }
  ]
};

// Toyota Land Cruiser 300
export const toyota_land_cruiser_300_2026: Vehicle = {
  id: "toyota-land-cruiser-300-2026",
  slug: "toyota-land-cruiser-300",
  category: "car",
  brand: "Toyota",
  model: "Land Cruiser 300",
  year: 2026,
  startingPrice: 21000000,
  emiFrom: 395000,
  images: [
    "https://images.91wheels.com/assets/b_images/main/models/profile/profile1723270507.jpg",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/fortuner/toyota-fortuner-0-1766738694.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/fortuner/toyota-fortuner-1-1766738694.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/b_images/main/models/profile/profile1723270507.jpg",
  fuelTypes: ["Diesel"],
  transmissions: ["Automatic"],
  mileage: "9.3 kmpl",
  engineCC: 3346,
  powerBHP: 304,
  torqueNm: 700,
  bootSpaceL: 1131,
  groundClearance: 230,
  safetyRating: 5,
  seatingCapacity: 7,
  rating: 4.9,
  reviewCount: 180,
  isNew: true,
  isEV: false,
  description: "The flagship Toyota Land Cruiser 300 SUV combines a 3.3L V6 Twin-Turbo Diesel engine, Electronic Kinetic Dynamic Suspension System (E-KDSS), 10-speed AT, and ultimate off-road luxury.",
  features: ["3.3L V6 Twin-Turbo Diesel (700 Nm)","E-KDSS Suspension & Multi-Terrain Select","JBL 14-Speaker Premium Audio System","Dual 11.6-inch Rear Entertainment Displays","Toyota Safety Sense 3.0 ADAS"],
  colors: ["Precious White Pearl","Attitude Black","Dark Blue Mica"],
  pros: ["Unstoppable all-terrain capability","Immense luxury and presence","304 PS V6 twin-turbo performance"],
  cons: ["Long waiting periods"],
  variants: [
    {
      id: "toyota-land-cruiser-300-v1",
      name: "Standard 2026",
      price: 21000000,
      fuelType: "Diesel",
      transmission: "Automatic",
      engineCC: 3346,
      powerBHP: 304,
      torqueNm: 700,
      mileageKmpl: 9.3,
      features: ["3.3L V6 Twin-Turbo Diesel (700 Nm)","E-KDSS Suspension & Multi-Terrain Select","JBL 14-Speaker Premium Audio System"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_main",
      dealerName: "Main Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 21000000,
      discount: 25000,
      rating: 4.8
    }
  ]
};

// Toyota Vellfire
export const toyota_vellfire_2026: Vehicle = {
  id: "toyota-vellfire-2026",
  slug: "toyota-vellfire",
  category: "car",
  brand: "Toyota",
  model: "Vellfire",
  year: 2026,
  startingPrice: 12200000,
  emiFrom: 228000,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/toyota/vellfire/toyota-vellfire-3-1767848275.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/vellfire/toyota-vellfire-2-1767848274.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/vellfire/toyota-vellfire-0-1767848273.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/vellfire/toyota-vellfire-1-1767848274.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/vellfire/toyota-vellfire-7-1766814821.jpg",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/vellfire/toyota-vellfire-6-1766814820.jpg",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/vellfire/toyota-vellfire-0-1766814818.jpg",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/vellfire/toyota-vellfire-2-1766814819.jpg"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/toyota/vellfire/toyota-vellfire-3-1767848275.png",
  fuelTypes: ["Hybrid"],
  transmissions: ["e-CVT"],
  mileage: "19.28 kmpl",
  engineCC: 2487,
  powerBHP: 190,
  torqueNm: 240,
  bootSpaceL: 500,
  groundClearance: 160,
  safetyRating: 5,
  seatingCapacity: 7,
  rating: 4.9,
  reviewCount: 140,
  isNew: true,
  isEV: false,
  description: "The Toyota Vellfire luxury MPV features Executive Lounge captain seats with massage functions, dual sunroofs, 14-inch touchscreen, JBL 15-speaker audio, and 2.5L Self-Charging Strong Hybrid powertrain.",
  features: ["Executive Lounge Ottoman Seats with Massage","2.5L Self-Charging Hybrid Engine","Dual Independent Sunroofs","JBL 15-Speaker Audio & 14-inch Screen","Toyota Safety Sense ADAS"],
  colors: ["Platinum White Pearl","Black","Precious Metal"],
  pros: ["First-class airline cabin luxury in rear seats","Outstanding 19.28 kmpl hybrid efficiency","Ultra-quiet cabin insulation"],
  cons: ["High luxury price tag"],
  variants: [
    {
      id: "toyota-vellfire-v1",
      name: "Standard 2026",
      price: 12200000,
      fuelType: "Hybrid",
      transmission: "e-CVT",
      engineCC: 2487,
      powerBHP: 190,
      torqueNm: 240,
      mileageKmpl: 19.28,
      features: ["Executive Lounge Ottoman Seats with Massage","2.5L Self-Charging Hybrid Engine","Dual Independent Sunroofs"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_main",
      dealerName: "Main Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 12200000,
      discount: 25000,
      rating: 4.8
    }
  ]
};

// Honda Amaze
export const honda_amaze_2026: Vehicle = {
  id: "honda-amaze-2026",
  slug: "honda-amaze",
  category: "car",
  brand: "Honda",
  model: "Amaze",
  year: 2026,
  startingPrice: 792000,
  emiFrom: 14900,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/honda/amaze/honda-amaze-0-1766208026.png",
    "https://images.91wheels.com/assets/c_images/gallery/honda/amaze/honda-amaze-7-1766208030.png",
    "https://images.91wheels.com/assets/c_images/gallery/honda/amaze/honda-amaze-3-1766208028.png",
    "https://images.91wheels.com/assets/c_images/gallery/honda/amaze/honda-amaze-5-1766208029.png",
    "https://images.91wheels.com/assets/c_images/gallery/honda/amaze/honda-amaze-1-1766208027.png",
    "https://images.91wheels.com/assets/c_images/gallery/honda/amaze/honda-amaze-6-1766208030.png",
    "https://images.91wheels.com/assets/c_images/gallery/honda/amaze/honda-amaze-4-1766208028.png",
    "https://images.91wheels.com/assets/c_images/gallery/honda/amaze/honda-amaze-2-1766208027.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/honda/amaze/honda-amaze-0-1766208026.png",
  fuelTypes: ["Petrol"],
  transmissions: ["Manual","CVT"],
  mileage: "18.6 kmpl",
  engineCC: 1199,
  powerBHP: 89,
  torqueNm: 110,
  bootSpaceL: 420,
  groundClearance: 170,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.5,
  reviewCount: 1850,
  isNew: true,
  isEV: false,
  description: "The next-gen Honda Amaze features Honda Sensing Level 2 ADAS, sleek LED headlamps, 8-inch touchscreen with wireless Apple CarPlay, smooth CVT automatic gearbox, and class-leading 420L boot space.",
  features: ["Honda Sensing ADAS Suite","1.2L i-VTEC Petrol Engine","8-inch Touchscreen with Wireless CarPlay","Class-Leading 420L Boot Space","Smooth CVT Automatic with Paddle Shifters"],
  colors: ["Radiant Red Metallic","Platinum White Pearl","Meteoroid Grey Metallic","Golden Brown Metallic"],
  pros: ["Segment-first ADAS safety suite","Super smooth CVT automatic","Spacious cabin and big boot"],
  cons: ["No diesel powertrain choice"],
  variants: [
    {
      id: "honda-amaze-v1",
      name: "Standard 2026",
      price: 792000,
      fuelType: "Petrol",
      transmission: "Manual",
      engineCC: 1199,
      powerBHP: 89,
      torqueNm: 110,
      mileageKmpl: 18.6,
      features: ["Honda Sensing ADAS Suite","1.2L i-VTEC Petrol Engine","8-inch Touchscreen with Wireless CarPlay"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_main",
      dealerName: "Main Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 792000,
      discount: 25000,
      rating: 4.8
    }
  ]
};

// Honda City e:HEV
export const honda_city_hybrid_2026: Vehicle = {
  id: "honda-city-hybrid-2026",
  slug: "honda-city-hybrid",
  category: "car",
  brand: "Honda",
  model: "City e:HEV",
  year: 2026,
  startingPrice: 1889000,
  emiFrom: 35500,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/honda/city-facelift/honda-city-facelift-0-1779451233.png",
    "https://images.91wheels.com/assets/c_images/gallery/honda/city-facelift/honda-city-facelift-7-1779451235.png",
    "https://images.91wheels.com/assets/c_images/gallery/honda/city-facelift/honda-city-facelift-3-1779451234.png",
    "https://images.91wheels.com/assets/c_images/gallery/honda/city-facelift/honda-city-facelift-5-1779451235.png",
    "https://images.91wheels.com/assets/c_images/gallery/honda/city-facelift/honda-city-facelift-1-1779451234.png",
    "https://images.91wheels.com/assets/c_images/gallery/honda/city-facelift/honda-city-facelift-6-1779451235.png",
    "https://images.91wheels.com/assets/c_images/gallery/honda/city-facelift/honda-city-facelift-4-1779451234.png",
    "https://images.91wheels.com/assets/c_images/gallery/honda/city-facelift/honda-city-facelift-2-1779451234.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/honda/city-facelift/honda-city-facelift-0-1779451233.png",
  fuelTypes: ["Hybrid"],
  transmissions: ["e-CVT"],
  mileage: "27.13 kmpl",
  engineCC: 1498,
  powerBHP: 124,
  torqueNm: 253,
  bootSpaceL: 410,
  groundClearance: 165,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.7,
  reviewCount: 920,
  isNew: true,
  isEV: false,
  description: "The Honda City e:HEV features self-charging two-motor strong hybrid technology delivering 27.13 kmpl mileage, electric parking brake, Honda Sensing ADAS, and instant 253 Nm electric torque response.",
  features: ["e:HEV Dual-Motor Strong Hybrid System","27.13 kmpl Fuel Efficiency","Honda Sensing Level 2 ADAS","Electric Parking Brake with Auto Hold","LaneWatch Blind Spot Camera"],
  colors: ["Obsidian Blue Pearl","Radiant Red Metallic","Platinum White Pearl","Meteoroid Grey"],
  pros: ["Incredible 27.13 kmpl hybrid mileage","Instant electric motor torque","Full ADAS safety suite"],
  cons: ["Battery reduces boot space slightly vs standard City"],
  variants: [
    {
      id: "honda-city-hybrid-v1",
      name: "Standard 2026",
      price: 1889000,
      fuelType: "Hybrid",
      transmission: "e-CVT",
      engineCC: 1498,
      powerBHP: 124,
      torqueNm: 253,
      mileageKmpl: 27.13,
      features: ["e:HEV Dual-Motor Strong Hybrid System","27.13 kmpl Fuel Efficiency","Honda Sensing Level 2 ADAS"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_main",
      dealerName: "Main Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 1889000,
      discount: 25000,
      rating: 4.8
    }
  ]
};

// MG ZS EV
export const mg_zs_ev_2026: Vehicle = {
  id: "mg-zs-ev-2026",
  slug: "mg-zs-ev",
  category: "ev",
  brand: "MG",
  model: "ZS EV",
  year: 2026,
  startingPrice: 1898000,
  emiFrom: 35800,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/mg/zs-ev/mg-zs-ev-0-1767854266.png",
    "https://images.91wheels.com/assets/c_images/gallery/mg/zs-ev/mg-zs-ev-1-1767854267.png",
    "https://images.91wheels.com/assets/c_images/gallery/mg/zs-ev/mg-zs-ev-3-1767854268.png",
    "https://images.91wheels.com/assets/c_images/gallery/mg/zs-ev/mg-zs-ev-2-1767854268.png",
    "https://images.91wheels.com/assets/c_images/gallery/mg/zs-ev/mg-zs-ev-9-1766749149.jpg",
    "https://images.91wheels.com/assets/c_images/gallery/mg/zs-ev/mg-zs-ev-3-1766749208.jpg",
    "https://images.91wheels.com/assets/c_images/gallery/mg/zs-ev/mg-zs-ev-3-1766749146.jpg",
    "https://images.91wheels.com/assets/c_images/gallery/mg/zs-ev/mg-zs-ev-5-1766749106.jpg"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/mg/zs-ev/mg-zs-ev-0-1767854266.png",
  fuelTypes: ["Electric"],
  transmissions: ["Automatic"],
  mileage: "461 km Range",
  engineCC: 0,
  powerBHP: 174,
  torqueNm: 280,
  bootSpaceL: 448,
  groundClearance: 177,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.6,
  reviewCount: 1100,
  isNew: true,
  isEV: true,
  description: "The MG ZS EV electric SUV packs a 50.3 kWh Prismatic Cell battery offering 461 km ARAI certified range, 10.1-inch HD touchscreen, dual-pane panoramic sunroof, and 176 PS electric powertrain.",
  features: ["50.3 kWh Battery with 461 km Certified Range","176 PS Power / 280 Nm Electric Torque","Dual-Pane Panoramic Sunroof","10.1-inch HD Touchscreen with i-SMART 75+ Tech","Level 2 ADAS Suite"],
  colors: ["Curry Red","Evergreen","Ashen Silver","Starry Black","Glaze White"],
  pros: ["Strong 461 km real-world battery range","0-100 km/h acceleration in 8.5 seconds","Feature-packed luxury cabin"],
  cons: ["Rear seat head restraint non-adjustable in base trim"],
  variants: [
    {
      id: "mg-zs-ev-v1",
      name: "Standard 2026",
      price: 1898000,
      fuelType: "Electric",
      transmission: "Automatic",
      engineCC: 0,
      powerBHP: 174,
      torqueNm: 280,
      mileageKmpl: 461,
      features: ["50.3 kWh Battery with 461 km Certified Range","176 PS Power / 280 Nm Electric Torque","Dual-Pane Panoramic Sunroof"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_main",
      dealerName: "Main Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 1898000,
      discount: 25000,
      rating: 4.8
    }
  ]
};

// MG Astor
export const mg_astor_2026: Vehicle = {
  id: "mg-astor-2026",
  slug: "mg-astor",
  category: "car",
  brand: "MG",
  model: "Astor",
  year: 2026,
  startingPrice: 998000,
  emiFrom: 18800,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/mg/astor/mg-astor-7-1775474568.jpg",
    "https://images.91wheels.com/assets/c_images/gallery/mg/astor/mg-astor-3-1775474493.jpg",
    "https://images.91wheels.com/assets/c_images/gallery/mg/astor/mg-astor-5-1775474504.jpg",
    "https://images.91wheels.com/assets/c_images/gallery/mg/astor/mg-astor-1-1775474491.jpg",
    "https://images.91wheels.com/assets/c_images/gallery/mg/astor/mg-astor-6-1775474567.jpg",
    "https://images.91wheels.com/assets/c_images/gallery/mg/astor/mg-astor-0-1775474490.jpg",
    "https://images.91wheels.com/assets/c_images/gallery/mg/astor/mg-astor-4-1775474503.jpg",
    "https://images.91wheels.com/assets/c_images/gallery/mg/astor/mg-astor-2-1775474492.jpg"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/mg/astor/mg-astor-7-1775474568.jpg",
  fuelTypes: ["Petrol"],
  transmissions: ["Manual","CVT","Automatic"],
  mileage: "14.8 - 16.5 kmpl",
  engineCC: 1498,
  powerBHP: 138,
  torqueNm: 220,
  bootSpaceL: 488,
  groundClearance: 180,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.4,
  reviewCount: 1400,
  isNew: true,
  isEV: false,
  description: "The MG Astor mid-size SUV features a personal AI Assistant bot on the dashboard, Level 2 ADAS with 14 autonomous features, Sangria Red leather interiors, and 1.3L Turbo Petrol engine option.",
  features: ["Personal AI Robot Assistant on Dashboard","Level 2 Autonomous ADAS Suite","Panoramic Sunroof & 10.1-inch Touchscreen","Sangria Red Dual-Tone Leather Interiors","Digital Bluetooth Key Technology"],
  colors: ["Candy White","Aurora Silver","Glaze Red","Starry Black","Havana Grey"],
  pros: ["Unique AI bot assistant with interactive head turn","Level 2 ADAS safety tech","Ultra-luxurious soft-touch cabin materials"],
  cons: ["Turbo engine fuel economy is sensitive to driving style"],
  variants: [
    {
      id: "mg-astor-v1",
      name: "Standard 2026",
      price: 998000,
      fuelType: "Petrol",
      transmission: "Manual",
      engineCC: 1498,
      powerBHP: 138,
      torqueNm: 220,
      mileageKmpl: 14.8,
      features: ["Personal AI Robot Assistant on Dashboard","Level 2 Autonomous ADAS Suite","Panoramic Sunroof & 10.1-inch Touchscreen"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_main",
      dealerName: "Main Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 998000,
      discount: 25000,
      rating: 4.8
    }
  ]
};

// MG Gloster
export const mg_gloster_2026: Vehicle = {
  id: "mg-gloster-2026",
  slug: "mg-gloster",
  category: "car",
  brand: "MG",
  model: "Gloster",
  year: 2026,
  startingPrice: 3880000,
  emiFrom: 72800,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/mg/windsor-ev/mg-windsor-ev-0-1766205711.png",
    "https://images.91wheels.com/assets/c_images/gallery/mg/comet-ev/mg-comet-ev-0-1766205711.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/mg/windsor-ev/mg-windsor-ev-0-1766205711.png",
  fuelTypes: ["Diesel"],
  transmissions: ["Automatic"],
  mileage: "12.0 - 13.9 kmpl",
  engineCC: 1996,
  powerBHP: 213,
  torqueNm: 479,
  bootSpaceL: 343,
  groundClearance: 210,
  safetyRating: 5,
  seatingCapacity: 7,
  rating: 4.6,
  reviewCount: 650,
  isNew: true,
  isEV: false,
  description: "The MG Gloster flagship 4x4 SUV features a 2.0L Twin-Turbo Diesel engine generating 479 Nm torque, BorgWarner 4WD with terrain select modes, massage driver seat, and 12-speaker audio system.",
  features: ["2.0L Twin-Turbo Diesel Engine (215 PS / 479 Nm)","BorgWarner Real-time 4WD with Terrain Modes","Driver Seat Massage & Ventilation","Level 2 ADAS Safety System","12.3-inch Touchscreen & Panoramic Sunroof"],
  colors: ["Deep Golden","Metal Black","Metal Ash","Warm White"],
  pros: ["Massive road presence and 3-row comfort","Massive 479 Nm twin-turbo torque output","Segment-first driver seat massage feature"],
  cons: ["Substantial body roll in tight corners"],
  variants: [
    {
      id: "mg-gloster-v1",
      name: "Standard 2026",
      price: 3880000,
      fuelType: "Diesel",
      transmission: "Automatic",
      engineCC: 1996,
      powerBHP: 213,
      torqueNm: 479,
      mileageKmpl: 12,
      features: ["2.0L Twin-Turbo Diesel Engine (215 PS / 479 Nm)","BorgWarner Real-time 4WD with Terrain Modes","Driver Seat Massage & Ventilation"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_main",
      dealerName: "Main Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 3880000,
      discount: 25000,
      rating: 4.8
    }
  ]
};

// Skoda Kodiaq
export const skoda_kodiaq_2026: Vehicle = {
  id: "skoda-kodiaq-2026",
  slug: "skoda-kodiaq",
  category: "car",
  brand: "Skoda",
  model: "Kodiaq",
  year: 2026,
  startingPrice: 3999000,
  emiFrom: 75200,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/skoda/kodiaq/skoda-kodiaq-0-1785153422.png",
    "https://images.91wheels.com/assets/c_images/gallery/skoda/kodiaq/skoda-kodiaq-3-1767851130.png",
    "https://images.91wheels.com/assets/c_images/gallery/skoda/kodiaq/skoda-kodiaq-2-1767851129.png",
    "https://images.91wheels.com/assets/c_images/gallery/skoda/kodiaq/skoda-kodiaq-1-1767851129.png",
    "https://images.91wheels.com/assets/c_images/gallery/skoda/kodiaq/skoda-kodiaq-0-1767851128.png",
    "https://images.91wheels.com/assets/c_images/gallery/skoda/kodiaq/skoda-kodiaq-4-1785155422.jpg",
    "https://images.91wheels.com/assets/c_images/gallery/skoda/kodiaq/skoda-kodiaq-0-1785155395.jpg",
    "https://images.91wheels.com/assets/c_images/gallery/skoda/kodiaq/skoda-kodiaq-2-1785155409.jpg"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/skoda/kodiaq/skoda-kodiaq-0-1785153422.png",
  fuelTypes: ["Petrol"],
  transmissions: ["DSG"],
  mileage: "13.32 kmpl",
  engineCC: 1984,
  powerBHP: 190,
  torqueNm: 320,
  bootSpaceL: 270,
  groundClearance: 192,
  safetyRating: 5,
  seatingCapacity: 7,
  rating: 4.8,
  reviewCount: 880,
  isNew: true,
  isEV: false,
  description: "The Skoda Kodiaq luxury 4x4 7-seater SUV is powered by a 2.0L TSI turbo petrol engine paired with 7-speed DSG and 4x4 drivetrain, Dynamic Chassis Control (DCC), and Canton 625W sound system.",
  features: ["2.0L TSI Turbo Petrol (190 PS / 320 Nm)","7-Speed DSG & 4x4 All-Wheel Drive","Dynamic Chassis Control (DCC) Adaptive Dampers","Canton 12-Speaker 625W Premium Sound System","10.25-inch Virtual Cockpit & 9 Airbags"],
  colors: ["Moon White","Lava Blue","Magic Black","Graphite Grey"],
  pros: ["Dynamic Chassis Control adaptive suspension","Refined 2.0L TSI engine performance","5-Star Euro NCAP safety rating"],
  cons: ["Third row best suited for children"],
  variants: [
    {
      id: "skoda-kodiaq-v1",
      name: "Standard 2026",
      price: 3999000,
      fuelType: "Petrol",
      transmission: "DSG",
      engineCC: 1984,
      powerBHP: 190,
      torqueNm: 320,
      mileageKmpl: 13.32,
      features: ["2.0L TSI Turbo Petrol (190 PS / 320 Nm)","7-Speed DSG & 4x4 All-Wheel Drive","Dynamic Chassis Control (DCC) Adaptive Dampers"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_main",
      dealerName: "Main Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 3999000,
      discount: 25000,
      rating: 4.8
    }
  ]
};

// Skoda Octavia
export const skoda_octavia_2026: Vehicle = {
  id: "skoda-octavia-2026",
  slug: "skoda-octavia",
  category: "car",
  brand: "Skoda",
  model: "Octavia",
  year: 2026,
  startingPrice: 2750000,
  emiFrom: 51800,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/skoda/slavia/skoda-slavia-0-1768365444.png",
    "https://images.91wheels.com/assets/c_images/gallery/skoda/kushaq/skoda-kushaq-0-1768365444.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/skoda/slavia/skoda-slavia-0-1768365444.png",
  fuelTypes: ["Petrol"],
  transmissions: ["DSG"],
  mileage: "15.81 kmpl",
  engineCC: 1984,
  powerBHP: 190,
  torqueNm: 320,
  bootSpaceL: 600,
  groundClearance: 137,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.8,
  reviewCount: 1200,
  isNew: true,
  isEV: false,
  description: "The legendary Skoda Octavia notchback executive sedan combines a 2.0L TSI engine, 7-speed DSG shift-by-wire gearbox, massive 600L liftback boot space, and 600W Canton premium sound.",
  features: ["2.0L TSI Engine with 7-speed DSG Shift-by-Wire","Massive 600L Liftback Boot Capacity","10-inch Touchscreen with Wireless SmartLink","Matrix LED Headlamps & Dynamic Indicators","8 Airbags & Park Assist"],
  colors: ["Brilliant Silver","Lava Blue","Magic Black","Candy White"],
  pros: ["Enormous 600L liftback boot space","Punchy 190 PS turbo engine performance","Exceptional highway stability"],
  cons: ["Low ground clearance requires caution over steep speedbumps"],
  variants: [
    {
      id: "skoda-octavia-v1",
      name: "Standard 2026",
      price: 2750000,
      fuelType: "Petrol",
      transmission: "DSG",
      engineCC: 1984,
      powerBHP: 190,
      torqueNm: 320,
      mileageKmpl: 15.81,
      features: ["2.0L TSI Engine with 7-speed DSG Shift-by-Wire","Massive 600L Liftback Boot Capacity","10-inch Touchscreen with Wireless SmartLink"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_main",
      dealerName: "Main Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 2750000,
      discount: 25000,
      rating: 4.8
    }
  ]
};

// BYD Atto 3
export const byd_atto_3_2026: Vehicle = {
  id: "byd-atto-3-2026",
  slug: "byd-atto-3",
  category: "ev",
  brand: "BYD",
  model: "Atto 3",
  year: 2026,
  startingPrice: 2499000,
  emiFrom: 47000,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/byd-auto/dolphin/byd-auto-dolphin-0-1769505856.png",
    "https://images.91wheels.com/assets/c_images/gallery/mg/windsor-ev/mg-windsor-ev-0-1766205711.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/byd-auto/dolphin/byd-auto-dolphin-0-1769505856.png",
  fuelTypes: ["Electric"],
  transmissions: ["Automatic"],
  mileage: "521 km Range",
  engineCC: 0,
  powerBHP: 201,
  torqueNm: 310,
  bootSpaceL: 440,
  groundClearance: 175,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.7,
  reviewCount: 540,
  isNew: true,
  isEV: true,
  description: "The BYD Atto 3 electric SUV features ultra-safe 60.48 kWh Blade Battery technology, 521 km ARAI range, 15.6-inch rotating touchscreen display, 0-100 km/h in 7.3s, and Level 2 ADAS.",
  features: ["Ultra-Safe Ultra-Durable BYD Blade Battery (60.48 kWh)","521 km ARAI Range / 204 PS Electric Motor","15.6-inch Rotating Touchscreen Infotainment","Level 2 ADAS Suite with 7 Airbags","VTOL Vehicle-To-Load Power Supply"],
  colors: ["Surf Blue","Ski White","Bouldering Grey","Parkour Red"],
  pros: ["Revolutionary ultra-safe Blade Battery tech","15.6-inch electric rotatable touchscreen","Blazing 0-100 km/h acceleration in 7.3s"],
  cons: ["Unique gym-inspired interior styling is subjective"],
  variants: [
    {
      id: "byd-atto-3-v1",
      name: "Standard 2026",
      price: 2499000,
      fuelType: "Electric",
      transmission: "Automatic",
      engineCC: 0,
      powerBHP: 201,
      torqueNm: 310,
      mileageKmpl: 521,
      features: ["Ultra-Safe Ultra-Durable BYD Blade Battery (60.48 kWh)","521 km ARAI Range / 204 PS Electric Motor","15.6-inch Rotating Touchscreen Infotainment"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_main",
      dealerName: "Main Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 2499000,
      discount: 25000,
      rating: 4.8
    }
  ]
};

// BYD Seal
export const byd_seal_2026: Vehicle = {
  id: "byd-seal-2026",
  slug: "byd-seal",
  category: "ev",
  brand: "BYD",
  model: "Seal",
  year: 2026,
  startingPrice: 4100000,
  emiFrom: 77500,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/byd-auto/dolphin/byd-auto-dolphin-0-1769505856.png",
    "https://images.91wheels.com/assets/c_images/gallery/mg/windsor-ev/mg-windsor-ev-0-1766205711.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/byd-auto/dolphin/byd-auto-dolphin-0-1769505856.png",
  fuelTypes: ["Electric"],
  transmissions: ["Automatic"],
  mileage: "650 km Range",
  engineCC: 0,
  powerBHP: 530,
  torqueNm: 670,
  bootSpaceL: 400,
  groundClearance: 145,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.9,
  reviewCount: 420,
  isNew: true,
  isEV: true,
  description: "The BYD Seal luxury electric sport sedan delivers up to 530 PS power, 0-100 km/h acceleration in 3.8 seconds, 82.56 kWh Blade Battery, cell-to-body (CTB) chassis, and 650 km range.",
  features: ["530 PS / 670 Nm Dual Motor AWD Performance","0-100 km/h in 3.8 Seconds","82.56 kWh Blade Battery with 650 km Range","Cell-To-Body (CTB) Structural Battery Tech","15.6-inch Rotating Screen & Dynaudio 12 Speakers"],
  colors: ["Arctic Blue","Aurora White","Atlantis Grey","Cosmos Black"],
  pros: ["Supercar acceleration (0-100 km/h in 3.8s)","650 km long battery driving range","5-Star Euro NCAP safety rating"],
  cons: ["Low sport sedan ground clearance"],
  variants: [
    {
      id: "byd-seal-v1",
      name: "Standard 2026",
      price: 4100000,
      fuelType: "Electric",
      transmission: "Automatic",
      engineCC: 0,
      powerBHP: 530,
      torqueNm: 670,
      mileageKmpl: 650,
      features: ["530 PS / 670 Nm Dual Motor AWD Performance","0-100 km/h in 3.8 Seconds","82.56 kWh Blade Battery with 650 km Range"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_main",
      dealerName: "Main Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 4100000,
      discount: 25000,
      rating: 4.8
    }
  ]
};

// BYD e6
export const byd_e6_2026: Vehicle = {
  id: "byd-e6-2026",
  slug: "byd-e6",
  category: "ev",
  brand: "BYD",
  model: "e6",
  year: 2026,
  startingPrice: 2915000,
  emiFrom: 54900,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/byd-auto/dolphin/byd-auto-dolphin-0-1769505856.png",
    "https://images.91wheels.com/assets/c_images/gallery/mg/windsor-ev/mg-windsor-ev-0-1766205711.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/byd-auto/dolphin/byd-auto-dolphin-0-1769505856.png",
  fuelTypes: ["Electric"],
  transmissions: ["Automatic"],
  mileage: "520 km Range",
  engineCC: 0,
  powerBHP: 94,
  torqueNm: 180,
  bootSpaceL: 580,
  groundClearance: 170,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.5,
  reviewCount: 310,
  isNew: true,
  isEV: true,
  description: "The BYD e6 electric MPV features a 71.7 kWh Blade Battery supplying 520 km WLTP city range, 580L boot space, AC/DC fast charging support, and heavy-duty commercial/private reliability.",
  features: ["71.7 kWh Blade Battery with 520 km City Range","Massive 580L Luggage Boot Capacity","Fast DC Charging (10-80% in 35 mins)","Leatherette Seats & Automatic Climate Control","Bosch ESP & 4-Wheel Disc Brakes"],
  colors: ["Doctor Black","Crystal White"],
  pros: ["Huge 580L boot space and commercial durability","520 km urban driving range","Blade battery safety"],
  cons: ["Subdued interior dashboard styling"],
  variants: [
    {
      id: "byd-e6-v1",
      name: "Standard 2026",
      price: 2915000,
      fuelType: "Electric",
      transmission: "Automatic",
      engineCC: 0,
      powerBHP: 94,
      torqueNm: 180,
      mileageKmpl: 520,
      features: ["71.7 kWh Blade Battery with 520 km City Range","Massive 580L Luggage Boot Capacity","Fast DC Charging (10-80% in 35 mins)"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_main",
      dealerName: "Main Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 2915000,
      discount: 25000,
      rating: 4.8
    }
  ]
};

// Jeep Compass
export const jeep_compass_2026: Vehicle = {
  id: "jeep-compass-2026",
  slug: "jeep-compass",
  category: "car",
  brand: "Jeep",
  model: "Compass",
  year: 2026,
  startingPrice: 2069000,
  emiFrom: 38900,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/jeep/compass/jeep-compass-0-1766208174.png",
    "https://images.91wheels.com/assets/c_images/gallery/jeep/compass/jeep-compass-1-1766208175.png",
    "https://images.91wheels.com/assets/c_images/gallery/jeep/compass/jeep-compass-4-1766208177.png",
    "https://images.91wheels.com/assets/c_images/gallery/jeep/compass/jeep-compass-6-1766208178.png",
    "https://images.91wheels.com/assets/c_images/gallery/jeep/compass/jeep-compass-3-1766208176.png",
    "https://images.91wheels.com/assets/c_images/gallery/jeep/compass/jeep-compass-7-1766208178.png",
    "https://images.91wheels.com/assets/c_images/gallery/jeep/compass/jeep-compass-5-1766208177.png",
    "https://images.91wheels.com/assets/c_images/gallery/jeep/compass/jeep-compass-2-1766208176.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/jeep/compass/jeep-compass-0-1766208174.png",
  fuelTypes: ["Diesel"],
  transmissions: ["Manual","Automatic"],
  mileage: "17.1 kmpl",
  engineCC: 1956,
  powerBHP: 170,
  torqueNm: 350,
  bootSpaceL: 438,
  groundClearance: 208,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.6,
  reviewCount: 2100,
  isNew: true,
  isEV: false,
  description: "The Jeep Compass premium SUV offers a 2.0L Multijet II Turbo Diesel engine producing 170 PS power, Jeep Active Drive 4x4 with Select-Terrain, 10.1-inch Uconnect 5 screen, and 60+ safety features.",
  features: ["2.0L Multijet II Diesel (170 PS / 350 Nm)","Jeep Active Drive 4x4 System","10.1-inch Uconnect 5 Touchscreen","Dual-Pane Panoramic Sunroof","Alpine 9-Speaker Audio System"],
  colors: ["Exotica Red","Pearl White","Magnesio Grey","Brilliant Black","Techno Metallic Green"],
  pros: ["Class-leading off-road 4x4 capability","Tank-like build quality and high stability","170 PS punchy Multijet diesel engine"],
  cons: ["Slightly tight rear seat legroom vs size"],
  variants: [
    {
      id: "jeep-compass-v1",
      name: "Standard 2026",
      price: 2069000,
      fuelType: "Diesel",
      transmission: "Manual",
      engineCC: 1956,
      powerBHP: 170,
      torqueNm: 350,
      mileageKmpl: 17.1,
      features: ["2.0L Multijet II Diesel (170 PS / 350 Nm)","Jeep Active Drive 4x4 System","10.1-inch Uconnect 5 Touchscreen"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_main",
      dealerName: "Main Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 2069000,
      discount: 25000,
      rating: 4.8
    }
  ]
};

// Jeep Meridian
export const jeep_meridian_2026: Vehicle = {
  id: "jeep-meridian-2026",
  slug: "jeep-meridian",
  category: "car",
  brand: "Jeep",
  model: "Meridian",
  year: 2026,
  startingPrice: 2499000,
  emiFrom: 47000,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/jeep/meridian/jeep-meridian-3-1767933471.png",
    "https://images.91wheels.com/assets/c_images/gallery/jeep/meridian/jeep-meridian-0-1767933469.png",
    "https://images.91wheels.com/assets/c_images/gallery/jeep/meridian/jeep-meridian-2-1767933470.png",
    "https://images.91wheels.com/assets/c_images/gallery/jeep/meridian/jeep-meridian-1-1767933469.png",
    "https://images.91wheels.com/assets/c_images/gallery/byd-auto/atto-3/byd-auto-atto-3-2-1767866910.png",
    "https://images.91wheels.com/assets/c_images/gallery/isuzu/v-cross/isuzu-v-cross-0-1767933657.png",
    "https://images.91wheels.com/assets/c_images/gallery/byd-auto/emax-7/byd-auto-emax-7-2-1767867153.png",
    "https://images.91wheels.com/assets/c_images/gallery/isuzu/mu-x/isuzu-mu-x-0-1767933875.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/jeep/meridian/jeep-meridian-3-1767933471.png",
  fuelTypes: ["Diesel"],
  transmissions: ["Manual","Automatic"],
  mileage: "16.2 kmpl",
  engineCC: 1956,
  powerBHP: 170,
  torqueNm: 350,
  bootSpaceL: 233,
  groundClearance: 203,
  safetyRating: 5,
  seatingCapacity: 7,
  rating: 4.5,
  reviewCount: 780,
  isNew: true,
  isEV: false,
  description: "The Jeep Meridian 3-row 7-seater SUV brings 2.0L Turbo Diesel power, Select-Terrain 4x4 system, Emperor Brown leather upholstery, 360-degree camera, and 10.25-inch digital driver cluster.",
  features: ["3-Row 7-Seater Interior Upholstered in Emperor Brown Leather","2.0L Turbo Diesel Engine with 9-speed AT 4x4","360-Degree HD Camera & Blind Spot Monitoring","Dual-Pane Panoramic Sunroof & Powered Liftgate","Alpine 9-Speaker Premium Sound System"],
  colors: ["Velvet Red","Pearl White","Techno Metallic Green","Brilliant Black","Magnesio Grey"],
  pros: ["Rugged 3-row 7-seater capability","Smooth 9-speed automatic 4x4 gearbox","High ground clearance and tough suspension"],
  cons: ["Third row legroom is compact"],
  variants: [
    {
      id: "jeep-meridian-v1",
      name: "Standard 2026",
      price: 2499000,
      fuelType: "Diesel",
      transmission: "Manual",
      engineCC: 1956,
      powerBHP: 170,
      torqueNm: 350,
      mileageKmpl: 16.2,
      features: ["3-Row 7-Seater Interior Upholstered in Emperor Brown Leather","2.0L Turbo Diesel Engine with 9-speed AT 4x4","360-Degree HD Camera & Blind Spot Monitoring"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_main",
      dealerName: "Main Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 2499000,
      discount: 25000,
      rating: 4.8
    }
  ]
};

// Jeep Wrangler
export const jeep_wrangler_2026: Vehicle = {
  id: "jeep-wrangler-2026",
  slug: "jeep-wrangler",
  category: "car",
  brand: "Jeep",
  model: "Wrangler",
  year: 2026,
  startingPrice: 6765000,
  emiFrom: 128000,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/jeep/wrangler/jeep-wrangler-6-1773212262.png",
    "https://images.91wheels.com/assets/c_images/gallery/jeep/wrangler/jeep-wrangler-5-1773212261.png",
    "https://images.91wheels.com/assets/c_images/gallery/jeep/wrangler/jeep-wrangler-1-1773212252.png",
    "https://images.91wheels.com/assets/c_images/gallery/jeep/wrangler/jeep-wrangler-0-1773213505.png",
    "https://images.91wheels.com/assets/c_images/gallery/jeep/wrangler/jeep-wrangler-7-1773212263.png",
    "https://images.91wheels.com/assets/c_images/gallery/jeep/wrangler/jeep-wrangler-4-1773212260.png",
    "https://images.91wheels.com/assets/c_images/gallery/jeep/wrangler/jeep-wrangler-3-1773212254.png",
    "https://images.91wheels.com/assets/c_images/gallery/jeep/wrangler/jeep-wrangler-0-1773212251.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/jeep/wrangler/jeep-wrangler-6-1773212262.png",
  fuelTypes: ["Petrol"],
  transmissions: ["Automatic"],
  mileage: "11.4 kmpl",
  engineCC: 1995,
  powerBHP: 272,
  torqueNm: 400,
  bootSpaceL: 548,
  groundClearance: 237,
  safetyRating: 4,
  seatingCapacity: 5,
  rating: 4.9,
  reviewCount: 410,
  isNew: true,
  isEV: false,
  description: "The legendary Jeep Wrangler 4x4 off-roader comes with Rock-Trac / Selec-Trac 4WD, removable doors & roof, heavy-duty Dana 44 axles, 12.3-inch Uconnect touchscreen, and 272 PS Turbo Petrol power.",
  features: ["2.0L Turbo Petrol Engine (272 PS / 400 Nm)","Removable Doors, Roof & Fold-Down Windshield","Heavy-Duty Dana 44 Axles with Tru-Lok Lockers","12.3-inch Uconnect 5 Touchscreen Display","Water Fording Capability up to 762 mm"],
  colors: ["Firecracker Red","Bright White","Granite Crystal","Black","Anvil Clear Coat"],
  pros: ["Unmatched legendary off-road capability","Removable doors and hardtop open-air experience","High resale demand"],
  cons: ["Firm ride quality on broken pavement"],
  variants: [
    {
      id: "jeep-wrangler-v1",
      name: "Standard 2026",
      price: 6765000,
      fuelType: "Petrol",
      transmission: "Automatic",
      engineCC: 1995,
      powerBHP: 272,
      torqueNm: 400,
      mileageKmpl: 11.4,
      features: ["2.0L Turbo Petrol Engine (272 PS / 400 Nm)","Removable Doors, Roof & Fold-Down Windshield","Heavy-Duty Dana 44 Axles with Tru-Lok Lockers"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_main",
      dealerName: "Main Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 6765000,
      discount: 25000,
      rating: 4.8
    }
  ]
};

// Citroen Basalt
export const citroen_basalt_2026: Vehicle = {
  id: "citroen-basalt-2026",
  slug: "citroen-basalt",
  category: "car",
  brand: "Citroen",
  model: "Basalt",
  year: 2026,
  startingPrice: 799000,
  emiFrom: 15100,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/citroen/basalt/citroen-basalt-0-1767868810.png",
    "https://images.91wheels.com/assets/c_images/gallery/citroen/basalt/citroen-basalt-3-1767868812.png",
    "https://images.91wheels.com/assets/c_images/gallery/citroen/basalt/citroen-basalt-1-1767868811.png",
    "https://images.91wheels.com/assets/c_images/gallery/citroen/basalt/citroen-basalt-2-1767868811.png",
    "https://images.91wheels.com/assets/c_images/gallery/citroen/basalt/citroen-basalt-15-1764225875.jpg",
    "https://images.91wheels.com/assets/c_images/gallery/citroen/basalt/citroen-basalt-13-1764225901.jpg",
    "https://images.91wheels.com/assets/c_images/gallery/citroen/basalt/citroen-basalt-1-1764225894.jpg",
    "https://images.91wheels.com/assets/c_images/gallery/citroen/basalt/citroen-basalt-16-1764225876.jpg"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/citroen/basalt/citroen-basalt-0-1767868810.png",
  fuelTypes: ["Petrol"],
  transmissions: ["Manual","Automatic"],
  mileage: "19.5 kmpl",
  engineCC: 1199,
  powerBHP: 110,
  torqueNm: 205,
  bootSpaceL: 470,
  groundClearance: 180,
  safetyRating: 4,
  seatingCapacity: 5,
  rating: 4.4,
  reviewCount: 520,
  isNew: true,
  isEV: false,
  description: "The Citroen Basalt coupe SUV introduces distinctive fastback coupe styling, Advanced Comfort suspension, 10.25-inch wireless touchscreen, 470L boot, and 1.2L Gen-3 Turbo Petrol engine.",
  features: ["Fastback Coupe SUV Styling","1.2L Gen-3 Turbo Petrol (110 PS / 205 Nm)","Citroen Advanced Comfort Flying Carpet Suspension","10.25-inch Screen with Wireless Apple CarPlay","Adjustable Rear Seat Thigh Support Cushion"],
  colors: ["Garnet Red","Cosmo Blue","Steel Grey","Polar White"],
  pros: ["Stylish coupe SUV design under 10 Lakhs","Ultra-plush Advanced Comfort suspension","Strong 205 Nm turbo torque output"],
  cons: ["No sunroof option"],
  variants: [
    {
      id: "citroen-basalt-v1",
      name: "Standard 2026",
      price: 799000,
      fuelType: "Petrol",
      transmission: "Manual",
      engineCC: 1199,
      powerBHP: 110,
      torqueNm: 205,
      mileageKmpl: 19.5,
      features: ["Fastback Coupe SUV Styling","1.2L Gen-3 Turbo Petrol (110 PS / 205 Nm)","Citroen Advanced Comfort Flying Carpet Suspension"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_main",
      dealerName: "Main Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 799000,
      discount: 25000,
      rating: 4.8
    }
  ]
};

// Citroen C3 Aircross
export const citroen_c3_aircross_2026: Vehicle = {
  id: "citroen-c3-aircross-2026",
  slug: "citroen-c3-aircross",
  category: "car",
  brand: "Citroen",
  model: "C3 Aircross",
  year: 2026,
  startingPrice: 999000,
  emiFrom: 18900,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/citroen/c3-aircross/citroen-c3-aircross-0-1773130211.png",
    "https://images.91wheels.com/assets/c_images/gallery/citroen/c3-aircross/citroen-c3-aircross-7-1767869818.png",
    "https://images.91wheels.com/assets/c_images/gallery/citroen/c3-aircross/citroen-c3-aircross-3-1767869816.png",
    "https://images.91wheels.com/assets/c_images/gallery/citroen/c3-aircross/citroen-c3-aircross-5-1767869817.png",
    "https://images.91wheels.com/assets/c_images/gallery/citroen/c3-aircross/citroen-c3-aircross-1-1767869814.png",
    "https://images.91wheels.com/assets/c_images/gallery/citroen/c3-aircross/citroen-c3-aircross-6-1767869818.png",
    "https://images.91wheels.com/assets/c_images/gallery/citroen/c3-aircross/citroen-c3-aircross-4-1767869816.png",
    "https://images.91wheels.com/assets/c_images/gallery/citroen/c3-aircross/citroen-c3-aircross-2-1767869815.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/citroen/c3-aircross/citroen-c3-aircross-0-1773130211.png",
  fuelTypes: ["Petrol"],
  transmissions: ["Manual","Automatic"],
  mileage: "18.5 kmpl",
  engineCC: 1199,
  powerBHP: 110,
  torqueNm: 205,
  bootSpaceL: 511,
  groundClearance: 200,
  safetyRating: 4,
  seatingCapacity: 7,
  rating: 4.3,
  reviewCount: 680,
  isNew: true,
  isEV: false,
  description: "The Citroen C3 Aircross mid-size SUV offers versatile 5-seater or 5+2 flexi-7-seater layouts with removable 3rd row seats, 200mm ground clearance, and 1.2L Turbo engine with 6-speed torque converter AT.",
  features: ["Flexible 5+2 Seating with Removable 3rd Row","200mm Ground Clearance & 511L Boot (in 5-seat mode)","1.2L PureTech 110 Turbo Petrol Engine","10.25-inch Touchscreen Infotainment","Roof-Mounted Rear AC Vents with Blower Control"],
  colors: ["Soft Sand","Artense Grey","Platinum Grey","Polar White"],
  pros: ["Removable 3rd row seats for maximum versatility","Superb bump absorption over rough roads","Substantial SUV footprint"],
  cons: ["Basic key start in entry variants"],
  variants: [
    {
      id: "citroen-c3-aircross-v1",
      name: "Standard 2026",
      price: 999000,
      fuelType: "Petrol",
      transmission: "Manual",
      engineCC: 1199,
      powerBHP: 110,
      torqueNm: 205,
      mileageKmpl: 18.5,
      features: ["Flexible 5+2 Seating with Removable 3rd Row","200mm Ground Clearance & 511L Boot (in 5-seat mode)","1.2L PureTech 110 Turbo Petrol Engine"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_main",
      dealerName: "Main Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 999000,
      discount: 25000,
      rating: 4.8
    }
  ]
};

// Citroen eC3
export const citroen_ec3_2026: Vehicle = {
  id: "citroen-ec3-2026",
  slug: "citroen-ec3",
  category: "ev",
  brand: "Citroen",
  model: "eC3",
  year: 2026,
  startingPrice: 1161000,
  emiFrom: 21900,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/citroen/c3-ev/citroen-c3-ev-5-1775639635.png",
    "https://images.91wheels.com/assets/c_images/gallery/citroen/c3-ev/citroen-c3-ev-7-1775639637.png",
    "https://images.91wheels.com/assets/c_images/gallery/citroen/c3-ev/citroen-c3-ev-2-1775639632.png",
    "https://images.91wheels.com/assets/c_images/gallery/citroen/c3-ev/citroen-c3-ev-0-1775639630.png",
    "https://images.91wheels.com/assets/c_images/gallery/citroen/c3-ev/citroen-c3-ev-4-1775639634.png",
    "https://images.91wheels.com/assets/c_images/gallery/citroen/c3-ev/citroen-c3-ev-6-1775639636.png",
    "https://images.91wheels.com/assets/c_images/gallery/citroen/c3-ev/citroen-c3-ev-1-1775639630.png",
    "https://images.91wheels.com/assets/c_images/gallery/citroen/c3-ev/citroen-c3-ev-3-1775639633.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/citroen/c3-ev/citroen-c3-ev-5-1775639635.png",
  fuelTypes: ["Electric"],
  transmissions: ["Automatic"],
  mileage: "320 km Range",
  engineCC: 0,
  powerBHP: 57,
  torqueNm: 143,
  bootSpaceL: 315,
  groundClearance: 170,
  safetyRating: 4,
  seatingCapacity: 5,
  rating: 4.2,
  reviewCount: 450,
  isNew: true,
  isEV: true,
  description: "The Citroen eC3 electric crossover features a 29.2 kWh LFP battery offering 320 km ARAI range, DC fast charging (10-80% in 57 mins), 10.25-inch touchscreen, and Advanced Comfort suspension.",
  features: ["29.2 kWh LFP Battery Pack (320 km Range)","DC Fast Charging Support (10-80% in 57 mins)","10.25-inch Screen with Wireless Smartphone Connectivity","Citroen Advanced Comfort Suspension","MyCitroen Connect App (35+ Smart Features)"],
  colors: ["Polar White","Zesty Orange","Platinum Grey","Steel Grey"],
  pros: ["Super plush ride over potholed roads","Spacious cabin and 315L boot","LFP battery chemical stability"],
  cons: ["Limited top speed (capped at 107 km/h for safety)"],
  variants: [
    {
      id: "citroen-ec3-v1",
      name: "Standard 2026",
      price: 1161000,
      fuelType: "Electric",
      transmission: "Automatic",
      engineCC: 0,
      powerBHP: 57,
      torqueNm: 143,
      mileageKmpl: 320,
      features: ["29.2 kWh LFP Battery Pack (320 km Range)","DC Fast Charging Support (10-80% in 57 mins)","10.25-inch Screen with Wireless Smartphone Connectivity"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_main",
      dealerName: "Main Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 1161000,
      discount: 25000,
      rating: 4.8
    }
  ]
};

// Force Motors Gurkha 5-Door
export const force_gurkha_5_door_2026: Vehicle = {
  id: "force-gurkha-5-door-2026",
  slug: "force-gurkha",
  category: "car",
  brand: "Force Motors",
  model: "Gurkha 5-Door",
  year: 2026,
  startingPrice: 1800000,
  emiFrom: 33900,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/force/gurkha/force-gurkha-0-1767874586.png",
    "https://images.91wheels.com/assets/c_images/gallery/force/gurkha/force-gurkha-2-1767874588.png",
    "https://images.91wheels.com/assets/c_images/gallery/force/gurkha/force-gurkha-1-1767874587.png",
    "https://images.91wheels.com/assets/c_images/gallery/force/gurkha/force-gurkha-3-1767874588.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/thar/mahindra-thar-8-1771924749.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/jimny/maruti-jimny-1-1767861206.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/bolero/mahindra-bolero-0-1768637292.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/bolero-neo/mahindra-bolero-neo-0-1768637392.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/force/gurkha/force-gurkha-0-1767874586.png",
  fuelTypes: ["Diesel"],
  transmissions: ["Manual"],
  mileage: "12.5 kmpl",
  engineCC: 2596,
  powerBHP: 140,
  torqueNm: 320,
  bootSpaceL: 500,
  groundClearance: 233,
  safetyRating: 4,
  seatingCapacity: 7,
  rating: 4.7,
  reviewCount: 390,
  isNew: true,
  isEV: false,
  description: "The Force Gurkha 5-Door extreme off-road SUV packs a 2.6L Mercedes-derived FM2.6 CR Turbo Diesel engine generating 140 PS / 320 Nm, front & rear mechanical differential locks, factory snorkel (700mm water wading), and shift-on-the-fly 4x4.",
  features: ["2.6L FM2.6 Turbo Diesel Engine (140 PS / 320 Nm)","Front & Rear Mechanical Differential Lock Levers","Factory-Fitted Intake Snorkel (700mm Water Wading)","Shift-on-the-Fly 4x4 Transfer Case with Low Ratio","9-inch Touchscreen with Android Auto & Apple CarPlay"],
  colors: ["Green","Red","White","Black","Grey"],
  pros: ["Factory mechanical differential locks front and rear","Factory snorkel with 700mm water wading depth","Imposing G-Wagon inspired military stance"],
  cons: ["Manual transmission only"],
  variants: [
    {
      id: "force-gurkha-v1",
      name: "Standard 2026",
      price: 1800000,
      fuelType: "Diesel",
      transmission: "Manual",
      engineCC: 2596,
      powerBHP: 140,
      torqueNm: 320,
      mileageKmpl: 12.5,
      features: ["2.6L FM2.6 Turbo Diesel Engine (140 PS / 320 Nm)","Front & Rear Mechanical Differential Lock Levers","Factory-Fitted Intake Snorkel (700mm Water Wading)"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_main",
      dealerName: "Main Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 1800000,
      discount: 25000,
      rating: 4.8
    }
  ]
};

// Audi A4
export const audi_a4_2026: Vehicle = {
  id: "audi-a4-2026",
  slug: "audi-a4",
  category: "car",
  brand: "Audi",
  model: "A4",
  year: 2026,
  startingPrice: 4602000,
  emiFrom: 86500,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/audi/a4/audi-a4-0-1767777010.png",
    "https://images.91wheels.com/assets/c_images/gallery/audi/a4/audi-a4-2-1767777011.png",
    "https://images.91wheels.com/assets/c_images/gallery/audi/a4/audi-a4-1-1767777010.png",
    "https://images.91wheels.com/assets/c_images/gallery/audi/a4/audi-a4-3-1767777011.png",
    "https://images.91wheels.com/assets/c_images/gallery/volkswagen/golf-gti/volkswagen-golf-gti-0-1767847472.png",
    "https://images.91wheels.com/assets/c_images/gallery/mini/cooper/mini-cooper-5-1766222038.png",
    "https://images.91wheels.com/assets/c_images/gallery/skoda/octavia-vrs/skoda-octavia-vrs-0-1767850604.png",
    "https://images.91wheels.com/assets/c_images/gallery/bmw/x1/bmw-x1-0-1766216634.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/audi/a4/audi-a4-0-1767777010.png",
  fuelTypes: ["Petrol"],
  transmissions: ["Automatic"],
  mileage: "17.4 kmpl",
  engineCC: 1984,
  powerBHP: 204,
  torqueNm: 320,
  bootSpaceL: 460,
  groundClearance: 165,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.8,
  reviewCount: 650,
  isNew: true,
  isEV: false,
  description: "The Audi A4 luxury sedan combines a 2.0L TFSI Turbo Petrol engine with 12V mild-hybrid technology, 7-speed S-Tronic Dual-Clutch transmission, Audi Virtual Cockpit Plus, and B&O 3D Sound.",
  features: ["2.0L TFSI Mild Hybrid Engine (204 PS / 320 Nm)","Audi Virtual Cockpit Plus 12.3-inch Display","Bang & Olufsen 3D 19-Speaker Sound System","3-Zone Automatic Climate Control","Matrix LED Headlamps with Dynamic Indicators"],
  colors: ["Ibis White","Mythos Black","Navarra Blue","Manhattan Grey","Tango Red"],
  pros: ["Ultra-refined 204 PS TFSI turbo engine","Gorgeous Virtual Cockpit display","Plush ride quality"],
  cons: ["Rear middle seat hump reduces 5th passenger legroom"],
  variants: [
    {
      id: "audi-a4-v1",
      name: "Luxury 2026",
      price: 4602000,
      fuelType: "Petrol",
      transmission: "Automatic",
      engineCC: 1984,
      powerBHP: 204,
      torqueNm: 320,
      mileageKmpl: 17.4,
      features: ["2.0L TFSI Mild Hybrid Engine (204 PS / 320 Nm)","Audi Virtual Cockpit Plus 12.3-inch Display","Bang & Olufsen 3D 19-Speaker Sound System"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_lux",
      dealerName: "Luxury Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 4602000,
      discount: 50000,
      rating: 4.9
    }
  ]
};

// Audi Q3
export const audi_q3_2026: Vehicle = {
  id: "audi-q3-2026",
  slug: "audi-q3",
  category: "car",
  brand: "Audi",
  model: "Q3",
  year: 2026,
  startingPrice: 4489000,
  emiFrom: 84500,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/audi/q3/audi-q3-0-1766142943.png",
    "https://images.91wheels.com/assets/c_images/gallery/audi/q3/audi-q3-7-1766142947.png",
    "https://images.91wheels.com/assets/c_images/gallery/audi/q3/audi-q3-3-1766142945.png",
    "https://images.91wheels.com/assets/c_images/gallery/audi/q3/audi-q3-5-1766142946.png",
    "https://images.91wheels.com/assets/c_images/gallery/audi/q3/audi-q3-1-1766142944.png",
    "https://images.91wheels.com/assets/c_images/gallery/audi/q3/audi-q3-6-1766142947.png",
    "https://images.91wheels.com/assets/c_images/gallery/audi/q3/audi-q3-4-1766142946.png",
    "https://images.91wheels.com/assets/c_images/gallery/audi/q3/audi-q3-2-1766142944.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/audi/q3/audi-q3-0-1766142943.png",
  fuelTypes: ["Petrol"],
  transmissions: ["Automatic"],
  mileage: "15.8 kmpl",
  engineCC: 1984,
  powerBHP: 190,
  torqueNm: 320,
  bootSpaceL: 530,
  groundClearance: 170,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.7,
  reviewCount: 820,
  isNew: true,
  isEV: false,
  description: "The Audi Q3 luxury compact SUV features Quattro All-Wheel Drive, 2.0L TFSI engine generating 190 PS / 320 Nm, panoramic glass sunroof, Audi Virtual Cockpit, and progressive steering.",
  features: ["Quattro All-Wheel Drive System","2.0L TFSI Engine with 7-speed S-Tronic","Audi Virtual Cockpit & MMI Touch Screen","Panoramic Glass Sunroof & Ambient Lighting","Electrically Adjustable Front Seats with Memory"],
  colors: ["Navarra Blue","Glacier White","Chronos Grey","Pulse Orange","Mythos Black"],
  pros: ["Standard Quattro 4x4 drivetrain","Spacious 530L boot capacity","Sporty dynamic handling"],
  cons: ["No paddle shifters in base trim"],
  variants: [
    {
      id: "audi-q3-v1",
      name: "Luxury 2026",
      price: 4489000,
      fuelType: "Petrol",
      transmission: "Automatic",
      engineCC: 1984,
      powerBHP: 190,
      torqueNm: 320,
      mileageKmpl: 15.8,
      features: ["Quattro All-Wheel Drive System","2.0L TFSI Engine with 7-speed S-Tronic","Audi Virtual Cockpit & MMI Touch Screen"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_lux",
      dealerName: "Luxury Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 4489000,
      discount: 50000,
      rating: 4.9
    }
  ]
};

// Audi Q5
export const audi_q5_2026: Vehicle = {
  id: "audi-q5-2026",
  slug: "audi-q5",
  category: "car",
  brand: "Audi",
  model: "Q5",
  year: 2026,
  startingPrice: 6551000,
  emiFrom: 124000,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/audi/q5/audi-q5-1-1767778211.png",
    "https://images.91wheels.com/assets/c_images/gallery/audi/q5/audi-q5-0-1767778211.png",
    "https://images.91wheels.com/assets/c_images/gallery/audi/q5/audi-q5-2-1767778212.png",
    "https://images.91wheels.com/assets/c_images/gallery/audi/q5/audi-q5-3-1767778212.png",
    "https://images.91wheels.com/assets/c_images/gallery/skoda/kodiaq-rs/skoda-kodiaq-rs-0-1782120448.png",
    "https://images.91wheels.com/assets/c_images/gallery/jeep/wrangler/jeep-wrangler-6-1773212262.png",
    "https://images.91wheels.com/assets/c_images/gallery/audi/a6/audi-a6-0-1769770500.png",
    "https://images.91wheels.com/assets/c_images/gallery/landrover/range-rover-evoque/landrover-range-rover-evoque-2-1767932428.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/audi/q5/audi-q5-1-1767778211.png",
  fuelTypes: ["Petrol"],
  transmissions: ["Automatic"],
  mileage: "13.4 kmpl",
  engineCC: 1984,
  powerBHP: 249,
  torqueNm: 370,
  bootSpaceL: 520,
  groundClearance: 200,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.8,
  reviewCount: 490,
  isNew: true,
  isEV: false,
  description: "The Audi Q5 executive luxury SUV packs a 249 PS 2.0L TFSI engine, Quattro Ultra AWD, Audi Drive Select with 6 modes, B&O 3D sound system, and adaptive damper suspension.",
  features: ["2.0L TFSI Engine (249 PS / 370 Nm)","Quattro Ultra All-Wheel Drive with 6 Drive Modes","Adaptive Suspension Dampers","Bang & Olufsen 3D 19-Speaker Audio","Panoramic Sunroof & 8 Airbags"],
  colors: ["Navarra Blue","Ibis White","Mythos Black","District Green","Manhattan Grey"],
  pros: ["Powerful 249 PS engine performance","Superb high-speed highway stability","Classy understated German cabin styling"],
  cons: ["Adaptive dampers firmness on rough urban roads"],
  variants: [
    {
      id: "audi-q5-v1",
      name: "Luxury 2026",
      price: 6551000,
      fuelType: "Petrol",
      transmission: "Automatic",
      engineCC: 1984,
      powerBHP: 249,
      torqueNm: 370,
      mileageKmpl: 13.4,
      features: ["2.0L TFSI Engine (249 PS / 370 Nm)","Quattro Ultra All-Wheel Drive with 6 Drive Modes","Adaptive Suspension Dampers"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_lux",
      dealerName: "Luxury Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 6551000,
      discount: 50000,
      rating: 4.9
    }
  ]
};

// BMW 3 Series
export const bmw_3_series_2026: Vehicle = {
  id: "bmw-3-series-2026",
  slug: "bmw-3-series",
  category: "car",
  brand: "BMW",
  model: "3 Series",
  year: 2026,
  startingPrice: 6090000,
  emiFrom: 115000,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/bmw/3-series/bmw-3-series-0-1766208405.png",
    "https://images.91wheels.com/assets/c_images/gallery/bmw/3-series/bmw-3-series-7-1766208409.png",
    "https://images.91wheels.com/assets/c_images/gallery/bmw/3-series/bmw-3-series-3-1766208407.png",
    "https://images.91wheels.com/assets/c_images/gallery/bmw/3-series/bmw-3-series-5-1766208408.png",
    "https://images.91wheels.com/assets/c_images/gallery/bmw/3-series/bmw-3-series-1-1766208406.png",
    "https://images.91wheels.com/assets/c_images/gallery/bmw/3-series/bmw-3-series-6-1766208409.png",
    "https://images.91wheels.com/assets/c_images/gallery/bmw/3-series/bmw-3-series-4-1766208408.png",
    "https://images.91wheels.com/assets/c_images/gallery/bmw/3-series/bmw-3-series-2-1766208406.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/bmw/3-series/bmw-3-series-0-1766208405.png",
  fuelTypes: ["Petrol","Diesel"],
  transmissions: ["Automatic"],
  mileage: "16.1 kmpl",
  engineCC: 1998,
  powerBHP: 258,
  torqueNm: 400,
  bootSpaceL: 480,
  groundClearance: 135,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.9,
  reviewCount: 1450,
  isNew: true,
  isEV: false,
  description: "The BMW 3 Series Gran Limousine offers 110mm extra rear legroom, 2.0L TwinPower Turbo Petrol / Diesel engine generating up to 258 PS / 400 Nm, BMW Curved Display with OS 8.5, and M Sport styling.",
  features: ["BMW Curved Display (12.3\" Cluster + 14.9\" Control Display)","2.0L TwinPower Turbo Engine (258 PS / 400 Nm)","Harman Kardon 16-Speaker Surround Sound System","Panoramic Sunroof & Comfort Access Keyless Entry","Reversing Assistant & 360-Degree Camera"],
  colors: ["M Portimao Blue","Carbon Black","Mineral White","Skyscraper Grey"],
  pros: ["Enormous rear seat legroom in Gran Limousine variant","Segment-best 258 PS engine performance and handling","Cutting-edge dual Curved Display UI"],
  cons: ["Low sport sedan ground clearance"],
  variants: [
    {
      id: "bmw-3-series-v1",
      name: "Luxury 2026",
      price: 6090000,
      fuelType: "Petrol",
      transmission: "Automatic",
      engineCC: 1998,
      powerBHP: 258,
      torqueNm: 400,
      mileageKmpl: 16.1,
      features: ["BMW Curved Display (12.3\" Cluster + 14.9\" Control Display)","2.0L TwinPower Turbo Engine (258 PS / 400 Nm)","Harman Kardon 16-Speaker Surround Sound System"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_lux",
      dealerName: "Luxury Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 6090000,
      discount: 50000,
      rating: 4.9
    }
  ]
};

// BMW X1
export const bmw_x1_2026: Vehicle = {
  id: "bmw-x1-2026",
  slug: "bmw-x1",
  category: "car",
  brand: "BMW",
  model: "X1",
  year: 2026,
  startingPrice: 4950000,
  emiFrom: 93500,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/bmw/x1/bmw-x1-0-1766216634.png",
    "https://images.91wheels.com/assets/c_images/gallery/bmw/x1/bmw-x1-7-1766216646.png",
    "https://images.91wheels.com/assets/c_images/gallery/bmw/x1/bmw-x1-3-1766216636.png",
    "https://images.91wheels.com/assets/c_images/gallery/bmw/x1/bmw-x1-5-1766216645.png",
    "https://images.91wheels.com/assets/c_images/gallery/bmw/x1/bmw-x1-1-1766216635.png",
    "https://images.91wheels.com/assets/c_images/gallery/bmw/x1/bmw-x1-6-1766216646.png",
    "https://images.91wheels.com/assets/c_images/gallery/bmw/x1/bmw-x1-4-1766216637.png",
    "https://images.91wheels.com/assets/c_images/gallery/bmw/x1/bmw-x1-2-1766216635.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/bmw/x1/bmw-x1-0-1766216634.png",
  fuelTypes: ["Petrol","Diesel"],
  transmissions: ["Automatic"],
  mileage: "16.3 - 20.3 kmpl",
  engineCC: 1499,
  powerBHP: 150,
  torqueNm: 360,
  bootSpaceL: 540,
  groundClearance: 183,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.7,
  reviewCount: 1120,
  isNew: true,
  isEV: false,
  description: "The BMW X1 luxury SAV features BMW Curved Display, M Sport front grille styling, Harmon Kardon audio, massage driver seat, and punchy TwinPower Turbo Diesel engine delivering 20.3 kmpl.",
  features: ["BMW Curved Display & iDrive 8 Operating System","Active Driver Seat with Massage Function","Harman Kardon 12-Speaker Hi-Fi System","Adaptive M Suspension & Reversing Assistant","Panorama Glass Roof & 540L Boot"],
  colors: ["Phytonic Blue","Black Sapphire","Alpine White","Space Silver","Cape York Green"],
  pros: ["Refined 20.3 kmpl diesel fuel economy","Modern BMW Curved Display glass cockpit","Huge 540L luggage boot capacity"],
  cons: ["Petrol variant uses 3-cylinder engine layout"],
  variants: [
    {
      id: "bmw-x1-v1",
      name: "Luxury 2026",
      price: 4950000,
      fuelType: "Petrol",
      transmission: "Automatic",
      engineCC: 1499,
      powerBHP: 150,
      torqueNm: 360,
      mileageKmpl: 16.3,
      features: ["BMW Curved Display & iDrive 8 Operating System","Active Driver Seat with Massage Function","Harman Kardon 12-Speaker Hi-Fi System"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_lux",
      dealerName: "Luxury Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 4950000,
      discount: 50000,
      rating: 4.9
    }
  ]
};

// BMW X5
export const bmw_x5_2026: Vehicle = {
  id: "bmw-x5-2026",
  slug: "bmw-x5",
  category: "car",
  brand: "BMW",
  model: "X5",
  year: 2026,
  startingPrice: 9700000,
  emiFrom: 182000,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/bmw/x5/bmw-x5-0-1766217132.png",
    "https://images.91wheels.com/assets/c_images/gallery/bmw/x5/bmw-x5-7-1766217136.png",
    "https://images.91wheels.com/assets/c_images/gallery/bmw/x5/bmw-x5-3-1766217133.png",
    "https://images.91wheels.com/assets/c_images/gallery/bmw/x5/bmw-x5-5-1766217135.png",
    "https://images.91wheels.com/assets/c_images/gallery/bmw/x5/bmw-x5-1-1766217132.png",
    "https://images.91wheels.com/assets/c_images/gallery/bmw/x5/bmw-x5-6-1766217135.png",
    "https://images.91wheels.com/assets/c_images/gallery/bmw/x5/bmw-x5-4-1766217134.png",
    "https://images.91wheels.com/assets/c_images/gallery/bmw/x5/bmw-x5-2-1766217133.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/bmw/x5/bmw-x5-0-1766217132.png",
  fuelTypes: ["Petrol","Diesel"],
  transmissions: ["Automatic"],
  mileage: "12.0 - 13.3 kmpl",
  engineCC: 2998,
  powerBHP: 381,
  torqueNm: 520,
  bootSpaceL: 650,
  groundClearance: 214,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.9,
  reviewCount: 580,
  isNew: true,
  isEV: false,
  description: "The BMW X5 luxury SUV features a 3.0L Inline-6 TwinPower Turbo engine producing 381 PS / 520 Nm, Adaptive 2-Axle Air Suspension, BMW Iconic Glow Illuminated Grille, and Harman Kardon sound.",
  features: ["3.0L Inline-6 TwinPower Turbo (381 PS / 520 Nm)","Adaptive 2-Axle Air Suspension with Height Adjustment","BMW Iconic Glow Kidney Grille","CraftedClarity Glass Controls & Sky Lounge Panorama Roof","xDrive All-Wheel Drive & Executive Drive Pro"],
  colors: ["Tanzanite Blue Metallic","Black Sapphire","Mineral White","Skyscraper Grey","Brooklyn Grey"],
  pros: ["381 PS Inline-6 cylinder rocket acceleration","Air suspension glides over road irregularities","Split tailgate versatility"],
  cons: ["Substantial vehicle width requiring wide parking spaces"],
  variants: [
    {
      id: "bmw-x5-v1",
      name: "Luxury 2026",
      price: 9700000,
      fuelType: "Petrol",
      transmission: "Automatic",
      engineCC: 2998,
      powerBHP: 381,
      torqueNm: 520,
      mileageKmpl: 12,
      features: ["3.0L Inline-6 TwinPower Turbo (381 PS / 520 Nm)","Adaptive 2-Axle Air Suspension with Height Adjustment","BMW Iconic Glow Kidney Grille"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_lux",
      dealerName: "Luxury Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 9700000,
      discount: 50000,
      rating: 4.9
    }
  ]
};

// Mercedes-Benz C-Class
export const mercedes_benz_c_class_2026: Vehicle = {
  id: "mercedes-benz-c-class-2026",
  slug: "mercedes-benz-c-class",
  category: "car",
  brand: "Mercedes-Benz",
  model: "C-Class",
  year: 2026,
  startingPrice: 6185000,
  emiFrom: 116500,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/mercedesbenz/c-class/mercedesbenz-c-class-2-1765006072.png",
    "https://images.91wheels.com/assets/c_images/gallery/mercedesbenz/c-class/mercedesbenz-c-class-0-1765006071.png",
    "https://images.91wheels.com/assets/c_images/gallery/mercedesbenz/c-class/mercedesbenz-c-class-4-1765006073.png",
    "https://images.91wheels.com/assets/c_images/gallery/mercedesbenz/c-class/mercedesbenz-c-class-6-1765006075.png",
    "https://images.91wheels.com/assets/c_images/gallery/mercedesbenz/c-class/mercedesbenz-c-class-1-1765006072.png",
    "https://images.91wheels.com/assets/c_images/gallery/mercedesbenz/c-class/mercedesbenz-c-class-7-1765006075.png",
    "https://images.91wheels.com/assets/c_images/gallery/mercedesbenz/c-class/mercedesbenz-c-class-5-1765006074.png",
    "https://images.91wheels.com/assets/c_images/gallery/mercedesbenz/c-class/mercedesbenz-c-class-3-1765006073.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/mercedesbenz/c-class/mercedesbenz-c-class-2-1765006072.png",
  fuelTypes: ["Petrol","Diesel"],
  transmissions: ["Automatic"],
  mileage: "16.9 - 23.0 kmpl",
  engineCC: 1999,
  powerBHP: 204,
  torqueNm: 440,
  bootSpaceL: 455,
  groundClearance: 157,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.8,
  reviewCount: 1350,
  isNew: true,
  isEV: false,
  description: "The Mercedes-Benz C-Class \"Baby S-Class\" sedan features 11.9-inch portrait MBUX touchscreen, 48V Integrated Starter Generator (ISG) mild-hybrid tech, 64-color ambient lighting, and Burmester 3D audio.",
  features: ["11.9-inch Portrait MBUX Infotainment Touchscreen","48V Mild-Hybrid ISG Tech with EQ Boost","Burmester 3D Surround Sound System (710W)","64-Color Premium Ambient Lighting with Illuminated Vents","Fingerprint Scanner & Digital Light Headlamps"],
  colors: ["Spectral Blue","Selenite Grey","High-Tech Silver","Polar White","Obsidian Black"],
  pros: ["S-Class derived 11.9-inch portrait display","23 kmpl diesel mild-hybrid efficiency","Ultra-luxurious ambient lighting cabin"],
  cons: ["Touch-capacitive steering controls take getting used to"],
  variants: [
    {
      id: "mercedes-benz-c-class-v1",
      name: "Luxury 2026",
      price: 6185000,
      fuelType: "Petrol",
      transmission: "Automatic",
      engineCC: 1999,
      powerBHP: 204,
      torqueNm: 440,
      mileageKmpl: 16.9,
      features: ["11.9-inch Portrait MBUX Infotainment Touchscreen","48V Mild-Hybrid ISG Tech with EQ Boost","Burmester 3D Surround Sound System (710W)"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_lux",
      dealerName: "Luxury Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 6185000,
      discount: 50000,
      rating: 4.9
    }
  ]
};

// Mercedes-Benz GLA
export const mercedes_benz_gla_2026: Vehicle = {
  id: "mercedes-benz-gla-2026",
  slug: "mercedes-benz-gla",
  category: "car",
  brand: "Mercedes-Benz",
  model: "GLA",
  year: 2026,
  startingPrice: 5175000,
  emiFrom: 97500,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/mercedesbenz/gla/mercedesbenz-gla-2-1767855409.png",
    "https://images.91wheels.com/assets/c_images/gallery/mercedesbenz/gla/mercedesbenz-gla-0-1767855407.png",
    "https://images.91wheels.com/assets/c_images/gallery/mercedesbenz/gla/mercedesbenz-gla-3-1767855409.png",
    "https://images.91wheels.com/assets/c_images/gallery/mercedesbenz/gla/mercedesbenz-gla-1-1767855408.png",
    "https://images.91wheels.com/assets/c_images/gallery/bmw/x1/bmw-x1-0-1766216634.png",
    "https://images.91wheels.com/assets/c_images/gallery/audi/q3-sportback/audi-q3-sportback-0-1767777344.png",
    "https://images.91wheels.com/assets/c_images/gallery/byd-auto/sealion/byd-auto-sealion-0-1769706998.png",
    "https://images.91wheels.com/assets/c_images/gallery/mini/cooper/mini-cooper-5-1766222038.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/mercedesbenz/gla/mercedesbenz-gla-2-1767855409.png",
  fuelTypes: ["Petrol","Diesel"],
  transmissions: ["Automatic"],
  mileage: "17.4 - 18.9 kmpl",
  engineCC: 1950,
  powerBHP: 190,
  torqueNm: 400,
  bootSpaceL: 435,
  groundClearance: 180,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.6,
  reviewCount: 940,
  isNew: true,
  isEV: false,
  description: "The Mercedes-Benz GLA compact luxury SUV features 4MATIC AWD, twin 10.25-inch MBUX displays, hands-free powered tailgate, Keyless-GO, and 190 PS 2.0L Turbo Diesel engine.",
  features: ["4MATIC All-Wheel Drive Drivetrain","Twin 10.25-inch MBUX Digital Cockpit Displays","Panoramic Sliding Sunroof & Hands-Free Tailgate","Burmester Surround Sound System","64-Color Ambient Lighting"],
  colors: ["Spectral Blue","Polar White","Cosmos Black","Mountain Grey"],
  pros: ["High ground clearance and SUV visibility","Smooth 400 Nm diesel torque output","Refined MBUX digital dashboard"],
  cons: ["Rear knee room is adequate but not oversized"],
  variants: [
    {
      id: "mercedes-benz-gla-v1",
      name: "Luxury 2026",
      price: 5175000,
      fuelType: "Petrol",
      transmission: "Automatic",
      engineCC: 1950,
      powerBHP: 190,
      torqueNm: 400,
      mileageKmpl: 17.4,
      features: ["4MATIC All-Wheel Drive Drivetrain","Twin 10.25-inch MBUX Digital Cockpit Displays","Panoramic Sliding Sunroof & Hands-Free Tailgate"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_lux",
      dealerName: "Luxury Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 5175000,
      discount: 50000,
      rating: 4.9
    }
  ]
};

// Mercedes-Benz GLC
export const mercedes_benz_glc_2026: Vehicle = {
  id: "mercedes-benz-glc-2026",
  slug: "mercedes-benz-glc",
  category: "car",
  brand: "Mercedes-Benz",
  model: "GLC",
  year: 2026,
  startingPrice: 7590000,
  emiFrom: 143000,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/mercedesbenz/glc/mercedesbenz-glc-5-1766217201.png",
    "https://images.91wheels.com/assets/c_images/gallery/mercedesbenz/glc/mercedesbenz-glc-3-1766217200.png",
    "https://images.91wheels.com/assets/c_images/gallery/mercedesbenz/glc/mercedesbenz-glc-6-1766217202.png",
    "https://images.91wheels.com/assets/c_images/gallery/mercedesbenz/glc/mercedesbenz-glc-1-1766217199.png",
    "https://images.91wheels.com/assets/c_images/gallery/mercedesbenz/glc/mercedesbenz-glc-4-1766217200.png",
    "https://images.91wheels.com/assets/c_images/gallery/mercedesbenz/glc/mercedesbenz-glc-2-1766217199.png",
    "https://images.91wheels.com/assets/c_images/gallery/mercedesbenz/glc/mercedesbenz-glc-0-1766217198.png",
    "https://images.91wheels.com/assets/c_images/gallery/mercedesbenz/glc/mercedesbenz-glc-7-1766217202.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/mercedesbenz/glc/mercedesbenz-glc-5-1766217201.png",
  fuelTypes: ["Petrol","Diesel"],
  transmissions: ["Automatic"],
  mileage: "14.7 - 19.4 kmpl",
  engineCC: 1999,
  powerBHP: 258,
  torqueNm: 400,
  bootSpaceL: 620,
  groundClearance: 185,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.9,
  reviewCount: 760,
  isNew: true,
  isEV: false,
  description: "The Mercedes-Benz GLC luxury SUV features 4MATIC AWD with Off-Road Transparent Bonnet mode, 11.9-inch MBUX portrait display, Burmester 15-speaker audio, and 620L boot space.",
  features: ["Off-Road Transparent Bonnet Camera System","4MATIC AWD with Off-Road Drive Modes","11.9-inch Portrait MBUX Touchscreen Display","Burmester 15-Speaker 3D Surround Sound (710W)","620L Luggage Boot Capacity"],
  colors: ["Nautical Blue","Selenite Grey","Mojave Silver","Polar White","Obsidian Black"],
  pros: ["Transparent bonnet feature for trail off-roading","Massive 620L boot space","258 PS mild-hybrid engine power"],
  cons: ["High price point in luxury SUV tier"],
  variants: [
    {
      id: "mercedes-benz-glc-v1",
      name: "Luxury 2026",
      price: 7590000,
      fuelType: "Petrol",
      transmission: "Automatic",
      engineCC: 1999,
      powerBHP: 258,
      torqueNm: 400,
      mileageKmpl: 14.7,
      features: ["Off-Road Transparent Bonnet Camera System","4MATIC AWD with Off-Road Drive Modes","11.9-inch Portrait MBUX Touchscreen Display"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_lux",
      dealerName: "Luxury Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 7590000,
      discount: 50000,
      rating: 4.9
    }
  ]
};

// Volvo XC60
export const volvo_xc60_2026: Vehicle = {
  id: "volvo-xc60-2026",
  slug: "volvo-xc60",
  category: "car",
  brand: "Volvo",
  model: "XC60",
  year: 2026,
  startingPrice: 6890000,
  emiFrom: 129000,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/volvo/xc60/volvo-xc60-3-1767847680.png",
    "https://images.91wheels.com/assets/c_images/gallery/volvo/xc60/volvo-xc60-0-1767847678.png",
    "https://images.91wheels.com/assets/c_images/gallery/volvo/xc60/volvo-xc60-2-1767847679.png",
    "https://images.91wheels.com/assets/c_images/gallery/volvo/xc60/volvo-xc60-1-1767847679.png",
    "https://images.91wheels.com/assets/c_images/gallery/skoda/kodiaq-rs/skoda-kodiaq-rs-0-1782120448.png",
    "https://images.91wheels.com/assets/c_images/gallery/audi/q5/audi-q5-1-1767778211.png",
    "https://images.91wheels.com/assets/c_images/gallery/lexus/nx/lexus-nx-0-1767931950.png",
    "https://images.91wheels.com/assets/c_images/gallery/jeep/wrangler/jeep-wrangler-6-1773212262.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/volvo/xc60/volvo-xc60-3-1767847680.png",
  fuelTypes: ["Hybrid"],
  transmissions: ["Automatic"],
  mileage: "12.4 kmpl",
  engineCC: 1969,
  powerBHP: 250,
  torqueNm: 350,
  bootSpaceL: 483,
  groundClearance: 216,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.8,
  reviewCount: 520,
  isNew: true,
  isEV: false,
  description: "The Volvo XC60 luxury SUV features Google built-in infotainment, Bowers & Wilkins 1410W 15-speaker audio, Advanced Air Cleaner PM2.5, Pilot Assist ADAS, and 250 PS Mild Hybrid AWD drivetrain.",
  features: ["Google Built-in (Google Maps, Assistant, Play Store)","Bowers & Wilkins 1410W 15-Speaker High Fidelity Audio","Advanced Air Cleaner PM2.5 Filtration System","Pilot Assist Semi-Autonomous Driving ADAS","Massage & Ventilated Nappa Leather Seats"],
  colors: ["Crystal White","Onyx Black","Denim Blue","Platinum Grey","Bright Dusk"],
  pros: ["World-renowned Volvo safety architecture","Matchless Bowers & Wilkins 1410W sound system","In-built native Google Maps and apps"],
  cons: ["No diesel engine option in current lineup"],
  variants: [
    {
      id: "volvo-xc60-v1",
      name: "Luxury 2026",
      price: 6890000,
      fuelType: "Hybrid",
      transmission: "Automatic",
      engineCC: 1969,
      powerBHP: 250,
      torqueNm: 350,
      mileageKmpl: 12.4,
      features: ["Google Built-in (Google Maps, Assistant, Play Store)","Bowers & Wilkins 1410W 15-Speaker High Fidelity Audio","Advanced Air Cleaner PM2.5 Filtration System"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_lux",
      dealerName: "Luxury Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 6890000,
      discount: 50000,
      rating: 4.9
    }
  ]
};

// Volvo EX40 EV
export const volvo_ex40_2026: Vehicle = {
  id: "volvo-ex40-2026",
  slug: "volvo-ex40",
  category: "ev",
  brand: "Volvo",
  model: "EX40 EV",
  year: 2026,
  startingPrice: 5690000,
  emiFrom: 107000,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/porsche/macan-ev/porsche-macan-ev-3-1764997807.png",
    "https://images.91wheels.com/assets/c_images/gallery/mercedesbenz/e-class-amg-e-53-4matic-plus/mercedesbenz-e-class-amg-e-53-4matic-plus-0-1784809800.png",
    "https://images.91wheels.com/assets/c_images/gallery/bmw/ix-electric/bmw-ix-electric-0-1766212951.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/porsche/macan-ev/porsche-macan-ev-3-1764997807.png",
  fuelTypes: ["Electric"],
  transmissions: ["Automatic"],
  mileage: "530 km Range",
  engineCC: 0,
  powerBHP: 408,
  torqueNm: 660,
  bootSpaceL: 419,
  groundClearance: 175,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.9,
  reviewCount: 380,
  isNew: true,
  isEV: true,
  description: "The Volvo EX40 (formerly XC40 Recharge) electric SUV delivers 408 PS dual-motor AWD power, 0-100 km/h in 4.8s, 78 kWh battery with 530 km WLTP range, and Pixel LED headlights.",
  features: ["408 PS / 660 Nm Dual-Motor AWD Electric Powertrain","0-100 km/h Acceleration in 4.8 Seconds","78 kWh Battery with 530 km WLTP Range","Pixel LED Headlights & Harman Kardon Audio","150 kW DC Fast Charging (10-80% in 28 mins)"],
  colors: ["Sage Green","Fjord Blue","Crystal White","Onyx Black","Silver Dawn"],
  pros: ["Blistering 408 PS dual-motor acceleration (0-100 in 4.8s)","530 km WLTP battery driving range","Solid Scandinavian safety engineering"],
  cons: ["Rear seat backrest is relatively upright"],
  variants: [
    {
      id: "volvo-ex40-v1",
      name: "Luxury 2026",
      price: 5690000,
      fuelType: "Electric",
      transmission: "Automatic",
      engineCC: 0,
      powerBHP: 408,
      torqueNm: 660,
      mileageKmpl: 530,
      features: ["408 PS / 660 Nm Dual-Motor AWD Electric Powertrain","0-100 km/h Acceleration in 4.8 Seconds","78 kWh Battery with 530 km WLTP Range"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_lux",
      dealerName: "Luxury Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 5690000,
      discount: 50000,
      rating: 4.9
    }
  ]
};

// Land Rover Defender 110
export const land_rover_defender_2026: Vehicle = {
  id: "land-rover-defender-2026",
  slug: "land-rover-defender",
  category: "car",
  brand: "Land Rover",
  model: "Defender 110",
  year: 2026,
  startingPrice: 9700000,
  emiFrom: 182000,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/landrover/defender/landrover-defender-0-1773131194.png",
    "https://images.91wheels.com/assets/c_images/gallery/landrover/defender/landrover-defender-1-1767932813.png",
    "https://images.91wheels.com/assets/c_images/gallery/landrover/defender/landrover-defender-0-1767932812.png",
    "https://images.91wheels.com/assets/c_images/gallery/landrover/defender/landrover-defender-2-1767932813.png",
    "https://images.91wheels.com/assets/c_images/gallery/bmw/7-series/bmw-7-series-0-1766210748.png",
    "https://images.91wheels.com/assets/c_images/gallery/landrover/range-rover-sports/landrover-range-rover-sports-0-1767851930.png",
    "https://images.91wheels.com/assets/c_images/gallery/audi/sq8/audi-sq8-7-1778054290.png",
    "https://images.91wheels.com/assets/c_images/gallery/bmw/x6-facelift/bmw-x6-facelift-7-1781175911.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/landrover/defender/landrover-defender-0-1773131194.png",
  fuelTypes: ["Petrol","Diesel"],
  transmissions: ["Automatic"],
  mileage: "11.5 kmpl",
  engineCC: 2996,
  powerBHP: 300,
  torqueNm: 650,
  bootSpaceL: 857,
  groundClearance: 291,
  safetyRating: 5,
  seatingCapacity: 7,
  rating: 4.9,
  reviewCount: 1600,
  isNew: true,
  isEV: false,
  description: "The Land Rover Defender 110 extreme 4x4 SUV packs 900mm water wading capability, Electronic Air Suspension, Terrain Response 2 with Wade Mode, 11.4-inch Pivi Pro touchscreen, and 650 Nm diesel torque.",
  features: ["900mm Water Wading Capability & Wade Sensing","Electronic Air Suspension with 291mm Ground Clearance","Terrain Response 2 Off-Road Management System","Pivi Pro 11.4-inch Touchscreen Infotainment","Meridian 14-Speaker Surround Sound System"],
  colors: ["Pangea Green","Gondwana Stone","Tasman Blue","Santorini Black","Fuji White"],
  pros: ["Unrivalled extreme off-road water wading and rock crawling","Iconic indestructible design presence","Huge 857L cargo space"],
  cons: ["Substantial vehicle height requiring tall garage clearance"],
  variants: [
    {
      id: "land-rover-defender-v1",
      name: "Luxury 2026",
      price: 9700000,
      fuelType: "Petrol",
      transmission: "Automatic",
      engineCC: 2996,
      powerBHP: 300,
      torqueNm: 650,
      mileageKmpl: 11.5,
      features: ["900mm Water Wading Capability & Wade Sensing","Electronic Air Suspension with 291mm Ground Clearance","Terrain Response 2 Off-Road Management System"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_lux",
      dealerName: "Luxury Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 9700000,
      discount: 50000,
      rating: 4.9
    }
  ]
};

// Range Rover Evoque
export const range_rover_evoque_2026: Vehicle = {
  id: "range-rover-evoque-2026",
  slug: "range-rover-evoque",
  category: "car",
  brand: "Range Rover",
  model: "Evoque",
  year: 2026,
  startingPrice: 6790000,
  emiFrom: 127000,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/landrover/range-rover-evoque/landrover-range-rover-evoque-2-1767932428.png",
    "https://images.91wheels.com/assets/c_images/gallery/landrover/range-rover-evoque/landrover-range-rover-evoque-0-1767932427.png",
    "https://images.91wheels.com/assets/c_images/gallery/landrover/range-rover-evoque/landrover-range-rover-evoque-1-1767932428.png",
    "https://images.91wheels.com/assets/c_images/gallery/mini/countryman-all4-jcw/mini-countryman-all4-jcw-0-1767854157.png",
    "https://images.91wheels.com/assets/c_images/gallery/jeep/wrangler/jeep-wrangler-6-1773212262.png",
    "https://images.91wheels.com/assets/c_images/gallery/landrover/discovery-sport/landrover-discovery-sport-1-1767932620.png",
    "https://images.91wheels.com/assets/c_images/gallery/jeep/grand-cherokee/jeep-grand-cherokee-3-1764915555.png",
    "https://images.91wheels.com/assets/c_images/gallery/skoda/kodiaq-rs/skoda-kodiaq-rs-0-1782120448.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/landrover/range-rover-evoque/landrover-range-rover-evoque-2-1767932428.png",
  fuelTypes: ["Petrol","Diesel"],
  transmissions: ["Automatic"],
  mileage: "14.7 kmpl",
  engineCC: 1997,
  powerBHP: 249,
  torqueNm: 365,
  bootSpaceL: 472,
  groundClearance: 212,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.7,
  reviewCount: 890,
  isNew: true,
  isEV: false,
  description: "The Range Rover Evoque luxury SUV features flush deployable door handles, 11.4-inch curved glass Pivi Pro touchscreen, ClearSight rear view mirror camera, Pixel LED headlights, and Terrain Response 2.",
  features: ["Flush Deployable Door Handles","11.4-inch Curved Glass Floating Pivi Pro Screen","ClearSight Interior Rear View Mirror Camera","Pixel LED Headlights with Signature DRLs","Terrain Response 2 AWD Drivetrain"],
  colors: ["Tribeca Blue","Arroios Grey","Corris Grey","Fuji White","Santorini Black"],
  pros: ["Ultra-stylish Range Rover design aesthetic","Innovative ClearSight camera rear view mirror","High ground clearance and AWD agility"],
  cons: ["Rear passenger window size is compact"],
  variants: [
    {
      id: "range-rover-evoque-v1",
      name: "Luxury 2026",
      price: 6790000,
      fuelType: "Petrol",
      transmission: "Automatic",
      engineCC: 1997,
      powerBHP: 249,
      torqueNm: 365,
      mileageKmpl: 14.7,
      features: ["Flush Deployable Door Handles","11.4-inch Curved Glass Floating Pivi Pro Screen","ClearSight Interior Rear View Mirror Camera"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_lux",
      dealerName: "Luxury Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 6790000,
      discount: 50000,
      rating: 4.9
    }
  ]
};

// Porsche Macan
export const porsche_macan_2026: Vehicle = {
  id: "porsche-macan-2026",
  slug: "porsche-macan",
  category: "car",
  brand: "Porsche",
  model: "Macan",
  year: 2026,
  startingPrice: 8800000,
  emiFrom: 165000,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/porsche/macan/porsche-macan-5-1766213181.png",
    "https://images.91wheels.com/assets/c_images/gallery/porsche/macan/porsche-macan-3-1766213180.png",
    "https://images.91wheels.com/assets/c_images/gallery/porsche/macan/porsche-macan-6-1766213182.png",
    "https://images.91wheels.com/assets/c_images/gallery/porsche/macan/porsche-macan-0-1766213179.png",
    "https://images.91wheels.com/assets/c_images/gallery/porsche/macan/porsche-macan-4-1766213181.png",
    "https://images.91wheels.com/assets/c_images/gallery/porsche/macan/porsche-macan-2-1766213180.png",
    "https://images.91wheels.com/assets/c_images/gallery/porsche/macan/porsche-macan-1-1766213179.png",
    "https://images.91wheels.com/assets/c_images/gallery/porsche/macan/porsche-macan-7-1766213183.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/porsche/macan/porsche-macan-5-1766213181.png",
  fuelTypes: ["Petrol"],
  transmissions: ["PDK"],
  mileage: "11.2 kmpl",
  engineCC: 1984,
  powerBHP: 265,
  torqueNm: 400,
  bootSpaceL: 488,
  groundClearance: 202,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.9,
  reviewCount: 620,
  isNew: true,
  isEV: false,
  description: "The Porsche Macan sports SUV delivers sports-car dynamics, 2.65 PS 2.0L Turbo Petrol engine, 7-speed Porsche Doppelkupplung (PDK) dual-clutch transmission, PASM active suspension, and Sport Chrono Package.",
  features: ["2.0L Turbo Petrol Engine (265 PS / 400 Nm)","7-Speed Porsche Doppelkupplung (PDK) Transmission","Sport Chrono Package with Mode Switch","Porsche Active Suspension Management (PASM)","10.9-inch Full HD Touchscreen Display"],
  colors: ["Papaya Metallic","Gentian Blue Metallic","Carrera White","Jet Black","Crayon"],
  pros: ["The highest handling precision of any luxury compact SUV","Lightning-fast PDK dual-clutch gear shifts","Timeless Porsche design language"],
  cons: ["Option package prices add up quickly"],
  variants: [
    {
      id: "porsche-macan-v1",
      name: "Luxury 2026",
      price: 8800000,
      fuelType: "Petrol",
      transmission: "PDK",
      engineCC: 1984,
      powerBHP: 265,
      torqueNm: 400,
      mileageKmpl: 11.2,
      features: ["2.0L Turbo Petrol Engine (265 PS / 400 Nm)","7-Speed Porsche Doppelkupplung (PDK) Transmission","Sport Chrono Package with Mode Switch"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_lux",
      dealerName: "Luxury Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 8800000,
      discount: 50000,
      rating: 4.9
    }
  ]
};

// Porsche Cayenne
export const porsche_cayenne_2026: Vehicle = {
  id: "porsche-cayenne-2026",
  slug: "porsche-cayenne",
  category: "car",
  brand: "Porsche",
  model: "Cayenne",
  year: 2026,
  startingPrice: 13500000,
  emiFrom: 253000,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/porsche/cayenne/porsche-cayenne-0-1766215058.png",
    "https://images.91wheels.com/assets/c_images/gallery/porsche/cayenne/porsche-cayenne-7-1766215063.png",
    "https://images.91wheels.com/assets/c_images/gallery/porsche/cayenne/porsche-cayenne-3-1766215060.png",
    "https://images.91wheels.com/assets/c_images/gallery/porsche/cayenne/porsche-cayenne-5-1766215061.png",
    "https://images.91wheels.com/assets/c_images/gallery/porsche/cayenne/porsche-cayenne-1-1766215059.png",
    "https://images.91wheels.com/assets/c_images/gallery/porsche/cayenne/porsche-cayenne-6-1766215062.png",
    "https://images.91wheels.com/assets/c_images/gallery/porsche/cayenne/porsche-cayenne-4-1766215061.png",
    "https://images.91wheels.com/assets/c_images/gallery/porsche/cayenne/porsche-cayenne-2-1766215060.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/porsche/cayenne/porsche-cayenne-0-1766215058.png",
  fuelTypes: ["Petrol"],
  transmissions: ["Automatic"],
  mileage: "10.8 kmpl",
  engineCC: 2995,
  powerBHP: 353,
  torqueNm: 500,
  bootSpaceL: 698,
  groundClearance: 212,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.9,
  reviewCount: 410,
  isNew: true,
  isEV: false,
  description: "The Porsche Cayenne luxury performance SUV packs a 3.0L V6 Turbo engine generating 353 PS / 500 Nm, Porsche Driver Experience triple-screen layout, adaptive air suspension, and HD Matrix LED headlights.",
  features: ["3.0L V6 Turbo Engine (353 PS / 500 Nm)","Porsche Driver Experience Triple-Screen Dashboard","Adaptive Air Suspension with 2-Chamber Tech","HD Matrix LED Headlights (32,000 Pixels per Module)","Bose 14-Speaker Surround Sound System"],
  colors: ["Algarve Blue Metallic","Montego Blue","Carrera White","Chromite Black","Crayon"],
  pros: ["Astonishing 353 PS V6 turbo performance","Advanced HD Matrix LED headlamps","Supercar-like chassis balance"],
  cons: ["Exclusive luxury price segment"],
  variants: [
    {
      id: "porsche-cayenne-v1",
      name: "Luxury 2026",
      price: 13500000,
      fuelType: "Petrol",
      transmission: "Automatic",
      engineCC: 2995,
      powerBHP: 353,
      torqueNm: 500,
      mileageKmpl: 10.8,
      features: ["3.0L V6 Turbo Engine (353 PS / 500 Nm)","Porsche Driver Experience Triple-Screen Dashboard","Adaptive Air Suspension with 2-Chamber Tech"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_lux",
      dealerName: "Luxury Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 13500000,
      discount: 50000,
      rating: 4.9
    }
  ]
};

// Lexus ES 300h
export const lexus_es_300h_2026: Vehicle = {
  id: "lexus-es-300h-2026",
  slug: "lexus-es",
  category: "car",
  brand: "Lexus",
  model: "ES 300h",
  year: 2026,
  startingPrice: 6400000,
  emiFrom: 120000,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/lexus/es/lexus-es-0-1774004968.png",
    "https://images.91wheels.com/assets/c_images/gallery/lexus/es/lexus-es-8-1774004893.png",
    "https://images.91wheels.com/assets/c_images/gallery/lexus/es/lexus-es-9-1774004894.png",
    "https://images.91wheels.com/assets/c_images/gallery/lexus/es/lexus-es-12-1774005641.jpeg",
    "https://images.91wheels.com/assets/c_images/gallery/lexus/es/lexus-es-8-1774005638.jpeg",
    "https://images.91wheels.com/assets/c_images/gallery/lexus/es/lexus-es-3-1774005633.jpg",
    "https://images.91wheels.com/assets/c_images/gallery/lexus/es/lexus-es-14-1774005643.jpeg",
    "https://images.91wheels.com/assets/c_images/gallery/lexus/es/lexus-es-1-1774005632.jpg"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/lexus/es/lexus-es-0-1774004968.png",
  fuelTypes: ["Hybrid"],
  transmissions: ["e-CVT"],
  mileage: "22.58 kmpl",
  engineCC: 2487,
  powerBHP: 218,
  torqueNm: 221,
  bootSpaceL: 454,
  groundClearance: 154,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.8,
  reviewCount: 710,
  isNew: true,
  isEV: false,
  description: "The Lexus ES 300h luxury hybrid sedan combines Takumi craftsmanship, 2.5L Self-Charging Hybrid powertrain delivering 22.58 kmpl, 12.3-inch touchscreen, Mark Levinson 17-speaker audio, and recline rear seats.",
  features: ["2.5L Self-Charging Strong Hybrid (22.58 kmpl)","Mark Levinson 17-Speaker PurePlay Audio System","Power Reclining Rear Seats with Control Console","12.3-inch Touchscreen Infotainment Display","Lexus Safety System+ ADAS"],
  colors: ["Sonic Quartz","Sonic Titanium","Graphite Black","Deep Blue Mica"],
  pros: ["Exceptional 22.58 kmpl hybrid efficiency","Ultra-reliable Takumi Japanese build quality","Reclining rear lounge seating"],
  cons: ["CVT gearbox prioritizes smoothness over track aggressiveness"],
  variants: [
    {
      id: "lexus-es-v1",
      name: "Luxury 2026",
      price: 6400000,
      fuelType: "Hybrid",
      transmission: "e-CVT",
      engineCC: 2487,
      powerBHP: 218,
      torqueNm: 221,
      mileageKmpl: 22.58,
      features: ["2.5L Self-Charging Strong Hybrid (22.58 kmpl)","Mark Levinson 17-Speaker PurePlay Audio System","Power Reclining Rear Seats with Control Console"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_lux",
      dealerName: "Luxury Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 6400000,
      discount: 50000,
      rating: 4.9
    }
  ]
};

// Lexus RX 500h
export const lexus_rx_500h_2026: Vehicle = {
  id: "lexus-rx-500h-2026",
  slug: "lexus-rx",
  category: "car",
  brand: "Lexus",
  model: "RX 500h",
  year: 2026,
  startingPrice: 11800000,
  emiFrom: 221000,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/lexus/rx/lexus-rx-2-1767931830.png",
    "https://images.91wheels.com/assets/c_images/gallery/lexus/rx/lexus-rx-0-1767931827.png",
    "https://images.91wheels.com/assets/c_images/gallery/lexus/rx/lexus-rx-3-1767931831.png",
    "https://images.91wheels.com/assets/c_images/gallery/lexus/rx/lexus-rx-1-1767931828.png",
    "https://images.91wheels.com/assets/c_images/gallery/mercedesbenz/glc-coupe/mercedesbenz-glc-coupe-2-1767855323.png",
    "https://images.91wheels.com/assets/c_images/gallery/volvo/xc90/volvo-xc90-2-1767847575.png",
    "https://images.91wheels.com/assets/c_images/gallery/bmw/x5/bmw-x5-0-1766217132.png",
    "https://images.91wheels.com/assets/c_images/gallery/mercedesbenz/amg-c43/mercedesbenz-amg-c43-0-1767860573.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/lexus/rx/lexus-rx-2-1767931830.png",
  fuelTypes: ["Hybrid"],
  transmissions: ["Automatic"],
  mileage: "15.6 kmpl",
  engineCC: 2393,
  powerBHP: 371,
  torqueNm: 550,
  bootSpaceL: 461,
  groundClearance: 195,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.9,
  reviewCount: 310,
  isNew: true,
  isEV: false,
  description: "The Lexus RX 500h F SPORT Performance hybrid SUV packs a 2.4L Turbo Hybrid engine (371 PS / 550 Nm), DIRECT4 electric all-wheel drive, Dynamic Rear Steering (DRS), and 14-inch touchscreen.",
  features: ["2.4L Turbo Hybrid Engine (371 PS / 550 Nm)","DIRECT4 Electric AWD System & Rear Wheel Steering","Mark Levinson 21-Speaker Premium Surround Sound","14-inch Touchscreen & Head-Up Display","F SPORT Performance Styling & Adaptive Suspension"],
  colors: ["Sonic Copper","Heat Blue Contrast Layering","White Nova Glass Flake","Graphite Black"],
  pros: ["371 PS turbo hybrid acceleration with DIRECT4 AWD","Rear wheel steering for razor-sharp agility","World-leading Mark Levinson 21-speaker audio"],
  cons: ["Distinctive spindle grille design is bold"],
  variants: [
    {
      id: "lexus-rx-v1",
      name: "Luxury 2026",
      price: 11800000,
      fuelType: "Hybrid",
      transmission: "Automatic",
      engineCC: 2393,
      powerBHP: 371,
      torqueNm: 550,
      mileageKmpl: 15.6,
      features: ["2.4L Turbo Hybrid Engine (371 PS / 550 Nm)","DIRECT4 Electric AWD System & Rear Wheel Steering","Mark Levinson 21-Speaker Premium Surround Sound"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_lux",
      dealerName: "Luxury Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 11800000,
      discount: 50000,
      rating: 4.9
    }
  ]
};

// Mini Cooper S
export const mini_cooper_s_2026: Vehicle = {
  id: "mini-cooper-s-2026",
  slug: "mini-cooper",
  category: "car",
  brand: "Mini",
  model: "Cooper S",
  year: 2026,
  startingPrice: 4490000,
  emiFrom: 84500,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/mini/cooper/mini-cooper-5-1766222038.png",
    "https://images.91wheels.com/assets/c_images/gallery/mini/cooper/mini-cooper-4-1766222037.png",
    "https://images.91wheels.com/assets/c_images/gallery/mini/cooper/mini-cooper-0-1766222035.png",
    "https://images.91wheels.com/assets/c_images/gallery/mini/cooper/mini-cooper-1-1766222036.png",
    "https://images.91wheels.com/assets/c_images/gallery/mini/cooper/mini-cooper-6-1766222038.png",
    "https://images.91wheels.com/assets/c_images/gallery/mini/cooper/mini-cooper-3-1766222037.png",
    "https://images.91wheels.com/assets/c_images/gallery/mini/cooper/mini-cooper-2-1766222036.png",
    "https://images.91wheels.com/assets/c_images/gallery/mini/cooper/mini-cooper-7-1766222039.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/mini/cooper/mini-cooper-5-1766222038.png",
  fuelTypes: ["Petrol"],
  transmissions: ["Automatic"],
  mileage: "16.5 kmpl",
  engineCC: 1998,
  powerBHP: 204,
  torqueNm: 300,
  bootSpaceL: 210,
  groundClearance: 143,
  safetyRating: 5,
  seatingCapacity: 4,
  rating: 4.8,
  reviewCount: 540,
  isNew: true,
  isEV: false,
  description: "The iconic Mini Cooper S 3-Door hatch delivers Go-Kart handling, 2.0L Turbo Petrol engine (204 PS / 300 Nm), world-first circular OLED touchscreen display, Harman Kardon audio, and Mini Experience Modes.",
  features: ["World-First 9.4-inch Circular OLED Center Display","2.0L Turbo Petrol Engine (204 PS / 300 Nm)","Go-Kart Experience Modes with Dynamic Lighting","Harman Kardon Premium Sound System","Head-Up Display & Panoramic Glass Roof"],
  colors: ["Ocean Wave Green","Sunny Side Yellow","Chili Red","Blazing Blue","Nanuq White"],
  pros: ["Unbeatable Go-Kart handling fun factor","Futuristic 9.4-inch circular OLED screen UI","Iconic retro-modern British style"],
  cons: ["Compact 210L luggage boot"],
  variants: [
    {
      id: "mini-cooper-v1",
      name: "Luxury 2026",
      price: 4490000,
      fuelType: "Petrol",
      transmission: "Automatic",
      engineCC: 1998,
      powerBHP: 204,
      torqueNm: 300,
      mileageKmpl: 16.5,
      features: ["World-First 9.4-inch Circular OLED Center Display","2.0L Turbo Petrol Engine (204 PS / 300 Nm)","Go-Kart Experience Modes with Dynamic Lighting"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_lux",
      dealerName: "Luxury Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 4490000,
      discount: 50000,
      rating: 4.9
    }
  ]
};

// Aston Martin DBX
export const aston_martin_dbx_2026: Vehicle = {
  id: "aston-martin-dbx-2026",
  slug: "aston-martin-dbx",
  category: "car",
  brand: "Aston Martin",
  model: "DBX",
  year: 2026,
  startingPrice: 38200000,
  emiFrom: 718000,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/astonmartin/dbx/astonmartin-dbx-2-1767777775.png",
    "https://images.91wheels.com/assets/c_images/gallery/astonmartin/dbx/astonmartin-dbx-3-1767777776.png",
    "https://images.91wheels.com/assets/c_images/gallery/astonmartin/dbx/astonmartin-dbx-1-1767777775.png",
    "https://images.91wheels.com/assets/c_images/gallery/astonmartin/dbx/astonmartin-dbx-0-1767777774.png",
    "https://images.91wheels.com/assets/c_images/gallery/lamborghini/urus/lamborghini-urus-0-1770097528.png",
    "https://images.91wheels.com/assets/c_images/gallery/mercedesbenz/maybach-sl-monogram-series/mercedesbenz-maybach-sl-monogram-series-7-1766221515.png",
    "https://images.91wheels.com/assets/c_images/gallery/ferrari/amalfi-spider/ferrari-amalfi-spider-0-1784291336.png",
    "https://images.91wheels.com/assets/c_images/gallery/gmc/hummer-ev/gmc-hummer-ev-0-1769713386.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/astonmartin/dbx/astonmartin-dbx-2-1767777775.png",
  fuelTypes: ["Petrol"],
  transmissions: ["Automatic"],
  mileage: "7.0 kmpl",
  engineCC: 3982,
  powerBHP: 550,
  torqueNm: 700,
  bootSpaceL: 632,
  groundClearance: 190,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.9,
  reviewCount: 160,
  isNew: true,
  isEV: false,
  description: "The Aston Martin DBX ultra-luxury SUV features a 4.0L Twin-Turbo V8 engine producing 550 PS / 700 Nm, electronic active anti-roll control (eARC), handcrafted Bridge of Weir leather, and 632L boot.",
  features: ["4.0L V8 Twin-Turbo Engine (550 PS / 700 Nm)","0-100 km/h in 4.5 Seconds","Electronic Active Anti-Roll Control (48V eARC)","Handcrafted Bridge of Weir Full Leather Interior","Triple-Chamber Air Suspension with AWD"],
  colors: ["Aston Martin Racing Green","Minotaur Green","Xenon Grey","Stratus White","Jet Black"],
  pros: ["Supercar V8 engine sound and 550 PS power","Pure handcrafted British bespoke interior luxury","632L spacious boot space"],
  cons: ["Supercar luxury tier price tag"],
  variants: [
    {
      id: "aston-martin-dbx-v1",
      name: "Luxury 2026",
      price: 38200000,
      fuelType: "Petrol",
      transmission: "Automatic",
      engineCC: 3982,
      powerBHP: 550,
      torqueNm: 700,
      mileageKmpl: 7,
      features: ["4.0L V8 Twin-Turbo Engine (550 PS / 700 Nm)","0-100 km/h in 4.5 Seconds","Electronic Active Anti-Roll Control (48V eARC)"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_lux",
      dealerName: "Luxury Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 38200000,
      discount: 50000,
      rating: 4.9
    }
  ]
};

// Lamborghini Urus SE
export const lamborghini_urus_2026: Vehicle = {
  id: "lamborghini-urus-2026",
  slug: "lamborghini-urus",
  category: "car",
  brand: "Lamborghini",
  model: "Urus SE",
  year: 2026,
  startingPrice: 45700000,
  emiFrom: 859000,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/lamborghini/urus/lamborghini-urus-0-1770097528.png",
    "https://images.91wheels.com/assets/c_images/gallery/lamborghini/urus/lamborghini-urus-1-1767932914.png",
    "https://images.91wheels.com/assets/c_images/gallery/lamborghini/urus/lamborghini-urus-2-1767932915.png",
    "https://images.91wheels.com/assets/c_images/gallery/lamborghini/urus/lamborghini-urus-0-1767932914.png",
    "https://images.91wheels.com/assets/c_images/gallery/astonmartin/dbx/astonmartin-dbx-2-1767777775.png",
    "https://images.91wheels.com/assets/c_images/gallery/mercedesbenz/maybach-sl-monogram-series/mercedesbenz-maybach-sl-monogram-series-7-1766221515.png",
    "https://images.91wheels.com/assets/c_images/gallery/ferrari/amalfi-spider/ferrari-amalfi-spider-0-1784291336.png",
    "https://images.91wheels.com/assets/c_images/gallery/gmc/hummer-ev/gmc-hummer-ev-0-1769713386.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/lamborghini/urus/lamborghini-urus-0-1770097528.png",
  fuelTypes: ["Hybrid"],
  transmissions: ["Automatic"],
  mileage: "8.5 kmpl",
  engineCC: 3996,
  powerBHP: 800,
  torqueNm: 950,
  bootSpaceL: 616,
  groundClearance: 178,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 5,
  reviewCount: 220,
  isNew: true,
  isEV: false,
  description: "The Lamborghini Urus SE Super SUV combines a 4.0L Twin-Turbo V8 engine with a plug-in hybrid electric motor delivering an astounding 800 PS / 950 Nm torque, 0-100 km/h in 3.4 seconds, and AWD.",
  features: ["800 PS / 950 Nm Plug-in Hybrid V8 Powertrain","0-100 km/h Acceleration in 3.4 Seconds (Top Speed 312 km/h)","Carbon Ceramic Brakes & Adaptive Air Suspension","Lamborghini ANIMA Drive Selector with E-Modes","Bang & Olufsen 3D Advanced Sound System"],
  colors: ["Giallo Auctus (Yellow)","Arancio Egon (Orange)","Verde Viper (Green)","Nero Noctis (Black)","Bianco Monocerus (White)"],
  pros: ["Mind-blowing 800 PS supercar acceleration (0-100 in 3.4s)","Striking aggressive Lamborghini Super SUV design","Everyday drivability with 616L boot space"],
  cons: ["Top tier Super SUV investment price"],
  variants: [
    {
      id: "lamborghini-urus-v1",
      name: "Luxury 2026",
      price: 45700000,
      fuelType: "Hybrid",
      transmission: "Automatic",
      engineCC: 3996,
      powerBHP: 800,
      torqueNm: 950,
      mileageKmpl: 8.5,
      features: ["800 PS / 950 Nm Plug-in Hybrid V8 Powertrain","0-100 km/h Acceleration in 3.4 Seconds (Top Speed 312 km/h)","Carbon Ceramic Brakes & Adaptive Air Suspension"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_lux",
      dealerName: "Luxury Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 45700000,
      discount: 50000,
      rating: 4.9
    }
  ]
};


// Toyota Urban Cruiser Hyryder
export const toyota_urban_cruiser_hyryder_2026: Vehicle = {
  id: "toyota-urban-cruiser-hyryder-2026",
  slug: "toyota-urban-cruiser-hyryder",
  category: "car",
  brand: "Toyota",
  model: "Urban Cruiser Hyryder",
  year: 2026,
  startingPrice: 1114000,
  emiFrom: 21000,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/toyota/urban-cruiser-hyryder/toyota-urban-cruiser-hyryder-0-1766738694.png",
    "https://images.91wheels.com/assets/c_images/gallery/toyota/urban-cruiser-hyryder/toyota-urban-cruiser-hyryder-1-1766738694.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/toyota/urban-cruiser-hyryder/toyota-urban-cruiser-hyryder-0-1766738694.png",
  fuelTypes: ["Petrol", "Hybrid", "CNG"],
  transmissions: ["Manual", "Automatic", "e-CVT"],
  mileage: "20.58 - 27.97 kmpl",
  engineCC: 1490,
  powerBHP: 116,
  torqueNm: 141,
  bootSpaceL: 373,
  groundClearance: 210,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.8,
  reviewCount: 1650,
  isNew: true,
  isEV: false,
  description: "The Toyota Urban Cruiser Hyryder features NeoDrive and Self-Charging Strong Hybrid powertrain options delivering class-leading 27.97 kmpl fuel efficiency, panoramic sunroof, All-Wheel Drive (AWD), and 360-degree camera.",
  features: ["Self-Charging Strong Hybrid (27.97 kmpl)", "All-Wheel Drive (AWD) Drivetrain Option", "Panoramic Sunroof & 9-inch Smart Play Cast Touchscreen", "Head-Up Display & Wireless Smartphone Charger", "6 Airbags & Vehicle Stability Control"],
  colors: ["Cave Black", "Sportin Red", "Enticing Silver", "Gaming Grey", "Cafe White"],
  pros: ["Best-in-class 27.97 kmpl hybrid fuel economy", "AWD capability in segment", "Spacious and comfortable cabin"],
  cons: ["Battery reduces boot space in hybrid variants"],
  variants: [
    {
      id: "hyryder-v1",
      name: "E 1.5 NeoDrive 2026",
      price: 1114000,
      fuelType: "Petrol",
      transmission: "Manual",
      engineCC: 1490,
      powerBHP: 102,
      torqueNm: 137,
      mileageKmpl: 20.58,
      features: ["Dual Airbags", "Projector Headlamps", "Keyless Entry"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_toyota",
      dealerName: "Toyota Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 1114000,
      discount: 20000,
      rating: 4.8
    }
  ]
};

// Citroen C3
export const citroen_c3_2026: Vehicle = {
  id: "citroen-c3-2026",
  slug: "citroen-c3",
  category: "car",
  brand: "Citroen",
  model: "C3",
  year: 2026,
  startingPrice: 616000,
  emiFrom: 11600,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/citroen/c3/citroen-c3-0-1773128524.png",
    "https://images.91wheels.com/assets/c_images/gallery/citroen/c3/citroen-c3-7-1773128540.png",
    "https://images.91wheels.com/assets/c_images/gallery/citroen/c3/citroen-c3-3-1773128533.png",
    "https://images.91wheels.com/assets/c_images/gallery/citroen/c3/citroen-c3-5-1773128536.png",
    "https://images.91wheels.com/assets/c_images/gallery/citroen/c3/citroen-c3-1-1773128525.png",
    "https://images.91wheels.com/assets/c_images/gallery/citroen/c3/citroen-c3-6-1773128537.png",
    "https://images.91wheels.com/assets/c_images/gallery/citroen/c3/citroen-c3-4-1773128536.png",
    "https://images.91wheels.com/assets/c_images/gallery/citroen/c3/citroen-c3-2-1773128526.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/citroen/c3/citroen-c3-0-1773128524.png",
  fuelTypes: ["Petrol"],
  transmissions: ["Manual", "Automatic"],
  mileage: "19.3 kmpl",
  engineCC: 1199,
  powerBHP: 110,
  torqueNm: 205,
  bootSpaceL: 315,
  groundClearance: 180,
  safetyRating: 4,
  seatingCapacity: 5,
  rating: 4.3,
  reviewCount: 780,
  isNew: true,
  isEV: false,
  description: "The Citroen C3 hatch features distinctive SUV-inspired styling, Advanced Comfort suspension, 10.25-inch wireless touchscreen with Android Auto & Apple CarPlay, and punchy 110 PS Turbo Petrol engine.",
  features: ["1.2L PureTech 110 Turbo Petrol Engine (205 Nm)", "10.25-inch Touchscreen with Wireless Apple CarPlay", "Citroen Advanced Comfort Suspension", "180mm High Ground Clearance", "Tropicalized Automatic Air Conditioning"],
  colors: ["Zesty Orange", "Platinum Grey", "Steel Grey", "Polar White"],
  pros: ["Plush Flying Carpet ride over bumpy roads", 'Strong 205 Nm turbo torque output', 'Spacious cabin headroom'],
  cons: ['No rear wiper in base variants'],
  variants: [
    {
      id: "c3-v1",
      name: "You 1.2 Petrol 2026",
      price: 616000,
      fuelType: "Petrol",
      transmission: "Manual",
      engineCC: 1199,
      powerBHP: 82,
      torqueNm: 115,
      mileageKmpl: 19.3,
      features: ["Dual Airbags", "Front Power Windows", "Digital Instrument Cluster"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_citroen",
      dealerName: "Citroen Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 616000,
      discount: 15000,
      rating: 4.6
    }
  ]
};



// Maruti Suzuki S-Presso
export const maruti_s_presso_2026: Vehicle = {
  id: "maruti-s-presso-2026",
  slug: "maruti-s-presso",
  category: "car",
  brand: "Maruti Suzuki",
  model: "S-Presso",
  year: 2026,
  startingPrice: 650000,
  emiFrom: 12000,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/maruti/s-presso/maruti-s-presso-3-1766740577.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/s-presso/maruti-s-presso-4-1766215730.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/s-presso/maruti-s-presso-1-1766215729.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/s-presso/maruti-s-presso-2-1766215729.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/s-presso/maruti-s-presso-6-1766215732.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/s-presso/maruti-s-presso-3-1766215730.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/s-presso/maruti-s-presso-0-1766215728.png",
    "https://images.91wheels.com/assets/c_images/gallery/maruti/s-presso/maruti-s-presso-7-1766215732.png"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/maruti/s-presso/maruti-s-presso-3-1766740577.png",
  fuelTypes: ["Petrol"],
  transmissions: ["Manual", "Automatic"],
  mileage: "18.5 kmpl",
  engineCC: 1199,
  powerBHP: 88,
  torqueNm: 115,
  bootSpaceL: 350,
  groundClearance: 175,
  safetyRating: 4,
  seatingCapacity: 5,
  rating: 4.5,
  reviewCount: 420,
  isNew: true,
  isEV: false,
  description: "Maruti Suzuki S-Presso featuring modern digital infotainment, strong fuel efficiency, and 91wheels verified specs.",
  features: ["Touchscreen Infotainment System", "Automatic Climate Control", "Dual Airbags & ABS with EBD", "Rear Parking Sensors", "Steering Mounted Controls"],
  colors: ["Solid White", "Midnight Black", "Metallic Grey", "Flame Red"],
  pros: ["Great value proposition", "Feature-loaded cabin", "Low cost of maintenance"],
  cons: ["Basic safety in entry variants"],
  variants: [
    {
      id: "maruti-s-presso-v1",
      name: "Standard 2026",
      price: 650000,
      fuelType: "Petrol",
      transmission: "Manual",
      engineCC: 1199,
      powerBHP: 88,
      torqueNm: 115,
      mileageKmpl: 18.5,
      features: ["Dual Airbags", "Power Windows"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "d_ranchi_dealer",
      dealerName: "Maruti Suzuki Showroom Ranchi",
      location: "Ranchi, Jharkhand",
      price: 650000,
      discount: 15000,
      rating: 4.7
    }
  ]
};



// Mahindra BE 6e
export const mahindraBe6e2026: Vehicle = {
  id: "mahindra-be-6e-2026",
  slug: "mahindra-be-6e",
  category: "car",
  brand: "Mahindra",
  model: "BE 6e",
  year: 2026,
  startingPrice: 1890000,
  emiFrom: 35724,
  images: [
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/be-6e/mahindra-be-6e-4-1767931326.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/be-6e/mahindra-be-6e-3-1767931325.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/be-6e/mahindra-be-6e-7-1767931328.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/be-6e/mahindra-be-6e-1-1767931324.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/be-6e/mahindra-be-6e-5-1767931326.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/be-6e/mahindra-be-6e-2-1767931324.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/be-6e/mahindra-be-6e-0-1767931323.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/be-6e/mahindra-be-6e-6-1767931327.png",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/be-6e/mahindra-be-6e-11-1770900377.jpg",
    "https://images.91wheels.com/assets/c_images/gallery/mahindra/be-6e/mahindra-be-6e-6-1770900591.jpg"
  ],
  thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/mahindra/be-6e/mahindra-be-6e-4-1767931326.png",
  fuelTypes: ["Electric"],
  transmissions: ["Automatic"],
  mileage: "557 - 683 km/charge",
  engineCC: 0,
  powerBHP: 282,
  torqueNm: 380,
  bootSpaceL: 455,
  groundClearance: 207,
  safetyRating: 5,
  seatingCapacity: 5,
  rating: 4.8,
  reviewCount: 340,
  isNew: true,
  isBestSeller: true,
  isEV: true,
  description: "The Mahindra BE 6e is Mahindra's flagship Born Electric coupe SUV built on the INGLO architecture. It features futuristic sci-fi styling, an ultra-modern dual-screen cockpit, custom synthetic motor sounds by AR Rahman, multi-link suspension with frequency sensitive damping, ultra-fast 175 kW DC charging (20-80% in 20 mins), Level 2+ ADAS suite, and up to 683 km claimed range.",
  features: [
    "Dual 12.3-inch Curved HD Cockpit Displays",
    "IN-GLO Platform with 59 kWh & 79 kWh LFP Battery Packs",
    "Custom Sonic Identity Soundscapes by AR Rahman",
    "Fixed Panoramic Glass Roof with UV & Infrared Cut",
    "Level 2+ ADAS with 5 Radars, 1 Camera & Autonomous Parking",
    "Multi-Link Rear Suspension with Frequency Selective Damping",
    "175 kW DC Ultra-Fast Charging (20-80% in 20 Mins)",
    "16-Speaker Harman Kardon Surround Sound System",
    "Illuminated BE Logo & C-shaped LED Light Bands",
    "7 Airbags Standard Across All Variants",
    "Brake-by-Wire Technology & One-Pedal Driving",
    "Wireless Apple CarPlay & Android Auto with V2L Support"
  ],
  colors: [
    "Desert Myst Satin",
    "Desert Myst",
    "Tango Red",
    "Everest White",
    "Everest White Satin",
    "Stealth Black",
    "Firestorm Orange",
    "Deep Forest",
    "Formula E Black",
    "Formula E Orange",
    "Formula E Red",
    "Formula E White"
  ],
  pros: [
    "Striking futuristic coupe SUV design turning heads everywhere",
    "Instant 282 BHP & 380 Nm torque acceleration with dynamic handling",
    "Generous 79 kWh battery offering 500+ km real-world range",
    "Ultra-modern interior with dual screen cockpit and Harman Kardon audio"
  ],
  cons: [
    "Sloping roofline slightly limits rear seat headroom for tall passengers",
    "Rear window glass area is compact limiting rearward visibility",
    "Firm suspension tuned for dynamic handling on bumpy city roads"
  ],
  variants: [
    {
      id: "be6e-v1",
      name: "Pack One 59kWh RWD",
      price: 1890000,
      fuelType: "Electric",
      transmission: "Automatic",
      engineCC: 0,
      powerBHP: 228,
      torqueNm: 380,
      mileageKmpl: 557,
      rangeKm: 557,
      features: ["Dual 12.3-inch Screens", "7 Airbags", "LED DRLs & Lightbar", "175kW Fast Charging Support", "7-Speaker Audio"]
    },
    {
      id: "be6e-v2",
      name: "Pack Two 59kWh RWD",
      price: 2190000,
      fuelType: "Electric",
      transmission: "Automatic",
      engineCC: 0,
      powerBHP: 228,
      torqueNm: 380,
      mileageKmpl: 557,
      rangeKm: 557,
      features: ["Level 2 ADAS", "Fixed Panoramic Glass Roof", "16-Speaker Harman Kardon", "360-Degree HD Camera", "Wireless Charger"]
    },
    {
      id: "be6e-v3",
      name: "Pack Two 79kWh RWD",
      price: 2350000,
      fuelType: "Electric",
      transmission: "Automatic",
      engineCC: 0,
      powerBHP: 282,
      torqueNm: 380,
      mileageKmpl: 683,
      rangeKm: 683,
      features: ["79 kWh Battery Pack", "282 BHP Motor", "Level 2+ ADAS Suite", "Ventilated Front Seats", "20-inch Aero Alloys"]
    },
    {
      id: "be6e-v4",
      name: "Formula E Edition 79kWh RWD",
      price: 2690000,
      fuelType: "Electric",
      transmission: "Automatic",
      engineCC: 0,
      powerBHP: 282,
      torqueNm: 380,
      mileageKmpl: 683,
      rangeKm: 683,
      features: ["Formula E Race Livery", "Intelligent Adaptive Suspension", "Nira Carpet Logo Lamp", "Alcantara Sport Seats", "Custom Track Soundscape"]
    }
  ],
  dealerPrices: [
    {
      dealerId: "mahindra_d1_ranchi",
      dealerName: "Shree Auto Mahindra Ranchi",
      location: "Bariatu Road, Ranchi, Jharkhand",
      price: 1890000,
      discount: 25000,
      rating: 4.8
    },
    {
      dealerId: "mahindra_d2_jamshedpur",
      dealerName: "Karni Mahindra Jamshedpur",
      location: "Adityapur, Jamshedpur, Jharkhand",
      price: 1890000,
      discount: 30000,
      rating: 4.7
    }
  ]
};


const rawVehiclesList: Vehicle[] = [
  kiaSeltos,
  kiaSonet,
  kiaCarens,
  kiaEv6,
  kiaCarnival,
  kiaSyros,
  tataSierra,
  hyundaiCreta,
  tataNexon,
  mahindraScorpioN,
  tataPunch,
  mahindraThar,
  marutiSwift,
  marutiBrezza,
  mahindraXuv700,
  tataHarrier,
  tataSafari,
  tataAltroz,
  tataTiago,
  tataCurvv,
  mahindraTharRoxx,
  mahindraXuv3xo,
  mahindraBoleroNeo,
  mahindraScorpioClassic,
  marutiGrandVitara,
  toyotaFortuner,
  toyotaInnovaHycross,
  hyundaiVerna,
  hyundaiVenue,
  marutiFronx,
  marutiErtiga,
  skodaSlavia,
  volkswagenVirtus,
  hondaCity,
  mgHector,
  marutiBaleno,
  marutiDzire,
  marutiWagonR,
  marutiAltoK10,
  marutiCelerio,
  marutiIgnis,
  marutiXl6,
  marutiJimny,
  marutiInvicto,
  marutiEeco,
  tataPunchEv,
  tataNexonEv,
  tataCurvvEv,
  tataTiagoEv,
  tataTigor,
  tataTigorEv,
  tataHarrierEv,
  tataExpressT,
  hyundaiAlcazar,
  hyundaiTucson,
  hyundaiI20,
  hyundaiI20Nline,
  hyundaiAura,
  hyundaiGrandI10Nios,
  hyundaiExter,
  hyundaiIoniq5,
  hyundaiCretaNline,
  hyundaiVenueNline,
  mahindraBolero,
  mahindraBoleroNeoPlus,
  mahindraXuv400,
  mahindraMarazzo,
  mahindraEkuv100,
  toyotaUrbanCruiserTaisor,
  toyotaRumion,
  toyotaGlanza,
  toyotaHilux,
  toyotaCamry,
  kiaEv9,
  kiaClavis,
  skodaKushaq,
  skodaKylaq,
  volkswagenTaigun,
  volkswagenTiguan,
  hondaElevate,
  mgWindsorEv,
  mgCometEv,
  nissanMagnite,
  renaultKiger,
  toyota_innova_crysta_2026,
  toyota_land_cruiser_300_2026,
  toyota_vellfire_2026,
  honda_amaze_2026,
  honda_city_hybrid_2026,
  mg_zs_ev_2026,
  mg_astor_2026,
  mg_gloster_2026,
  skoda_kodiaq_2026,
  skoda_octavia_2026,
  byd_atto_3_2026,
  byd_seal_2026,
  byd_e6_2026,
  jeep_compass_2026,
  jeep_meridian_2026,
  jeep_wrangler_2026,
  citroen_basalt_2026,
  citroen_c3_aircross_2026,
  citroen_ec3_2026,
  force_gurkha_5_door_2026,
  audi_a4_2026,
  audi_q3_2026,
  audi_q5_2026,
  bmw_3_series_2026,
  bmw_x1_2026,
  bmw_x5_2026,
  mercedes_benz_c_class_2026,
  mercedes_benz_gla_2026,
  mercedes_benz_glc_2026,
  volvo_xc60_2026,
  volvo_ex40_2026,
  land_rover_defender_2026,
  range_rover_evoque_2026,
  porsche_macan_2026,
  porsche_cayenne_2026,
  lexus_es_300h_2026,
  lexus_rx_500h_2026,
  mini_cooper_s_2026,
  aston_martin_dbx_2026,
  lamborghini_urus_2026,
  toyota_urban_cruiser_hyryder_2026,
  citroen_c3_2026,
  maruti_s_presso_2026,
  mahindraBe6e2026
];

const seenVehicleIds = new Set<string>();
export const vehicles: Vehicle[] = rawVehiclesList.filter(v => {
  if (!v || !v.id) return false;
  if (seenVehicleIds.has(v.id)) return false;
  seenVehicleIds.add(v.id);
  return true;
});

export default vehicles;
