export type VehicleCategory = 'car' | 'ev';
export type FuelType = 'Petrol' | 'Diesel' | 'Electric' | 'CNG' | 'Hybrid';
export type TransmissionType = 'Manual' | 'Automatic' | 'CVT' | 'e-CVT' | 'IVT' | 'AMT' | 'iMT' | 'DCT' | 'DSG' | 'PDK' | 'Single Speed' | 'Direct Drive';

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
  features?: string[];
  mileage?: string;
  additionalFeaturesOverBase?: string[];
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
  threeSixtyImages?: string[];
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
  pros?: string[];
  cons?: string[];
  groundClearance?: number;
  rangeKm?: number;
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

export type PriceChangeType = 'increase' | 'drop' | 'festival_offer' | 'launch';

export interface PriceFestivalDetails {
  offerName: string;
  discountAmount: number;
  exchangeBonus?: number;
  corporateDiscount?: number;
  validTill?: string;
  offerCode?: string;
}

export interface PriceHistoryPoint {
  id: string;
  date: string; // e.g. "Oct 2025"
  timestamp: string; // ISO date string e.g. "2025-10-15"
  price: number; // Ex-showroom price at this date
  changeType: PriceChangeType;
  changeAmount: number; // +ve for increase, -ve for drop/festival
  title: string;
  description: string;
  badgeText: string;
  festivalDetails?: PriceFestivalDetails;
}

export interface PriceHistorySummary {
  currentPrice: number;
  lowestPrice: {
    price: number;
    date: string;
    label: string;
  };
  highestPrice: {
    price: number;
    date: string;
    label: string;
  };
  overallChange: number;
  overallChangePercent: number;
  lastChange: PriceHistoryPoint;
  hasActiveFestivalOffer: boolean;
  activeFestivalDetail?: PriceFestivalDetails & { title: string; date: string };
  history: PriceHistoryPoint[];
}

