export type VehicleCategory = 'car' | 'ev';
export type FuelType = 'Petrol' | 'Diesel' | 'Electric' | 'CNG' | 'Hybrid';
export type TransmissionType = 'Manual' | 'Automatic' | 'CVT' | 'AMT' | 'iMT' | 'DCT';

export interface Variant {
  id: string;
  name: string;
  price: number;
  fuelType: FuelType;
  transmission: TransmissionType;
  engineCC?: number;
  powerBHP?: number;
  torqueNm?: number;
  mileageKmpl?: number;
  rangeKm?: number;
}

export interface DealerPrice {
  dealerId: string;
  dealerName: string;
  location: string;
  price: number;
  discount: number;
  rating: number;
}

export interface Vehicle {
  id: string;
  slug: string;
  category: VehicleCategory;
  brand: string;
  model: string;
  year: number;
  startingPrice: number;
  emiFrom: number;
  images: string[];
  thumbnailUrl: string;
  fuelTypes: FuelType[];
  transmissions: TransmissionType[];
  mileage: string;
  variants: Variant[];
  dealerPrices: DealerPrice[];
  features: string[];
  colors: string[];
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
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  vehicleCount: number;
}

export interface Dealer {
  id: string;
  name: string;
  brand: string;
  brands: string[];
  location: string;
  city: string;
  address: string;
  phone: string;
  rating: number;
  reviewCount: number;
  image: string;
  openHours: string;
  lat?: number;
  lng?: number;
}

export interface BlogPostSection {
  heading?: string;
  paragraphs: string[];
  listItems?: string[];
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  content: BlogPostSection[];
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

export interface Offer {
  id: string;
  title: string;
  description: string;
  discount: string;
  validTill: string;
  category: string;
  brand?: string;
  image: string;
  code?: string;
  type: 'exchange' | 'cashback' | 'emi' | 'corporate' | 'bank' | 'festival';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}
