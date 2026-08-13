export interface VehicleVariant {
  id: string;
  name: string;
  price: number;
  fuelType: string;
  transmission: string;
  mileage?: string;
  features?: string[];
  additionalFeaturesOverBase?: string[];
}

export interface DealerPrice {
  dealerId: string;
  dealerName: string;
  location: string;
  price: number;
  discount?: number;
  rating?: number;
}

export interface Vehicle {
  id: string;
  slug: string;
  category: 'car' | 'bike' | 'truck' | 'scooter' | 'ev';
  brand: string;
  model: string;
  year: number;
  startingPrice: number;
  emiFrom: number;
  images: string[];
  threeSixtyImages?: string[];
  thumbnailUrl: string;
  fuelTypes: string[];
  transmissions: string[];
  mileage: string;
  variants: VehicleVariant[];
  dealerPrices?: DealerPrice[];
  features: string[];
  colors?: string[];
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  isEV?: boolean;
  seatingCapacity?: number;
  bootSpaceL?: number;
  engineCC?: number;
  powerBHP?: number;
  torqueNm?: number;
  safetyRating?: number;
  description?: string;
  pros?: string[];
  cons?: string[];
  groundClearanceMm?: number;
  rangeKm?: number;
}

export interface Dealer {
  id: string;
  name: string;
  brand: string;
  brands?: string[];
  location: string;
  address: string;
  phone: string;
  rating: number;
  reviewCount: number;
  image: string;
  openHours?: string;
  lat?: number;
  lng?: number;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  discount: string;
  validTill: string;
  category: string;
  brand?: string;
  image?: string;
  code?: string;
  type?: 'exchange' | 'cashback' | 'emi' | 'corporate' | 'bank' | 'festival';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: 'Buying Guide' | 'EV' | 'Comparison' | 'News' | 'Tips';
  date: string;
  readTime: string;
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
}

export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  vehicle: string;
  comment: string;
  location: string;
  date: string;
  verified: boolean;
}
