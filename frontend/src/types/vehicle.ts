export type VehicleCategory = 'car' | 'ev' | 'bike' | 'truck';

export interface Variant {
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
  category: VehicleCategory;
  brand: string;
  model: string;
  year: number;
  startingPrice: number;
  emiFrom?: number;
  images: string[];
  threeSixtyImages?: string[];
  thumbnailUrl: string;
  fuelTypes: string[];
  transmissions: string[];
  mileage: string;
  variants: Variant[];
  dealerPrices?: DealerPrice[];
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
  rangeKM?: number;
}
