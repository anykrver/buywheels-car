import React, { createContext, useContext, useState, useEffect } from 'react';
;
import { vehicles as localVehicles } from '../utils/data';
import type { Vehicle } from '../types';

interface WishlistContextType {
  wishlistedIds: string[];
  wishlistVehicles: Vehicle[];
  wishlistCount: number;
  isWishlisted: (id: string) => boolean;
  toggleWishlist: (id: string) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlistedIds, setWishlistedIds] = useState<string[]>([]);
  const [vehicles, setVehicles] = useState<Vehicle[]>(localVehicles);

  // Load vehicles from Supabase (update in background)

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('buywheels_wishlist');
      if (stored) {
        setWishlistedIds(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to load wishlist from localStorage:', e);
    }
  }, []);

  const isWishlisted = (id: string) => {
    return wishlistedIds.includes(id);
  };

  const toggleWishlist = (id: string) => {
    setWishlistedIds(prev => {
      const updated = prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id];
      try {
        localStorage.setItem('buywheels_wishlist', JSON.stringify(updated));
      } catch (e) {
        console.error('Failed to save wishlist to localStorage:', e);
      }
      return updated;
    });
  };

  // Derive wishlist vehicles from the dynamically fetched vehicles list
  const wishlistVehicles = vehicles.filter(vehicle => wishlistedIds.includes(vehicle.id));
  const wishlistCount = wishlistedIds.length;

  return (
    <WishlistContext.Provider
      value={{
        wishlistedIds,
        wishlistVehicles,
        wishlistCount,
        isWishlisted,
        toggleWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}
