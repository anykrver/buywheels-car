import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import VehicleCard from '../components/VehicleCard';
import type { Vehicle } from '../types';

export default function Wishlist() {
  const { wishlistVehicles } = useWishlist();
  const [compareList, setCompareList] = useState<Vehicle[]>([]);

  const handleCompare = (vehicle: Vehicle) => {
    setCompareList(prev =>
      prev.some(v => v.id === vehicle.id)
        ? prev.filter(v => v.id !== vehicle.id)
        : prev.length < 3 ? [...prev, vehicle] : prev
    );
  };

  return (
    <div className="min-h-screen bg-surface pt-28 pb-24 lg:pb-12 animate-fade-in">
      <div className="container-fluid">
        {/* Page header */}
        <div className="mb-8">
          <h1 className="font-heading font-bold text-dark text-3xl md:text-4xl flex items-center gap-3">
            My Wishlist
            <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">
              {wishlistVehicles.length} {wishlistVehicles.length === 1 ? 'item' : 'items'}
            </span>
          </h1>
          <p className="text-muted mt-2">Your collection of saved vehicles you are interested in.</p>
        </div>

        {wishlistVehicles.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-border shadow-card max-w-xl mx-auto p-8 mt-6">
            <div className="w-16 h-16 bg-primary-50 text-primary rounded-full flex items-center justify-center mx-auto mb-5">
              <Heart size={28} className="fill-none animate-pulse" />
            </div>
            <h3 className="font-heading font-bold text-dark text-xl mb-2">Your Wishlist is Empty</h3>
            <p className="text-muted text-sm max-w-md mx-auto mb-8">
              Explore our collection of new cars and electric vehicles to find your perfect match. Press the heart icon to save them here.
            </p>
            <Link 
              to="/cars" 
              className="btn-primary inline-flex items-center gap-2 px-6 h-11"
            >
              Browse Vehicles <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {wishlistVehicles.map(vehicle => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                onCompare={handleCompare}
              />
            ))}
          </div>
        )}

        {/* Compare bar */}
        {compareList.length > 0 && (
          <div data-compare-bar="true" className="fixed bottom-20 lg:bottom-6 left-1/2 -translate-x-1/2 z-40 bg-dark text-white rounded-2xl shadow-card-hover px-6 py-4 flex items-center gap-4 animate-slide-up">
            <span className="text-sm font-medium">{compareList.length} vehicles selected</span>
            <div className="flex gap-2">
              {compareList.map(v => (
                <span key={v.id} className="bg-white/15 text-white text-xs px-3 py-1 rounded-full">{v.model}</span>
              ))}
            </div>
            <Link to={`/compare?ids=${compareList.map(v => v.id).join(',')}`} className="bg-primary text-white text-sm font-semibold px-5 py-2 rounded-xl hover:bg-primary-600 transition-colors">
              Compare Now
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
