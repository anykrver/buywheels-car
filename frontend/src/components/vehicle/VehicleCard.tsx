import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useWishlist } from '../../context/WishlistContext';
import { Heart, GitCompare, Star, Fuel, Gauge, ArrowRight } from 'lucide-react';
import type { Vehicle } from '../../types';
import { formatPriceShort } from '../../utils/data';
import { BRAND_LOGOS_OVERRIDE } from '../../utils/supabaseService';

interface VehicleCardProps {
  vehicle: Vehicle;
  onCompare?: (vehicle: Vehicle) => void;
  compact?: boolean;
}

export default function VehicleCard({ vehicle, onCompare, compact }: VehicleCardProps) {
  const navigate = useNavigate();
  const { isWishlisted, toggleWishlist } = useWishlist();
  const wishlisted = isWishlisted(vehicle.id);
  const [imgError, setImgError] = useState(false);

  const fallbackImg = 'https://imgd.aeplcdn.com/664x374/n/cw/ec/141879/nexon-ev-exterior-right-front-three-quarter-7.jpeg';

  const handleCardClick = () => {
    navigate(`/vehicle/${vehicle.slug}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group bg-white rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col h-full cursor-pointer"
    >
      {/* Image */}
      <div className={`relative overflow-hidden bg-gray-100 ${compact ? 'aspect-[16/9]' : 'aspect-[16/10]'}`}>
        <img
          src={(!vehicle.thumbnailUrl || imgError) ? fallbackImg : vehicle.thumbnailUrl}
          alt={`${vehicle.brand} ${vehicle.model}`}
          className="w-full h-full object-contain scale-120 transition-transform duration-500 group-hover:scale-135"
          onError={() => setImgError(true)}
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2 pointer-events-none">
          {vehicle.isNew && (
            <span className="bg-primary text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-xs">New</span>
          )}
          {vehicle.isBestSeller && (
            <span className="bg-dark text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-xs">Best Seller</span>
          )}
          {vehicle.isEV && (
            <span className="bg-emerald-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-xs">EV</span>
          )}
        </div>

        {/* Wishlist + Compare */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              toggleWishlist(vehicle.id);
            }}
            className={`w-9 h-9 rounded-xl flex items-center justify-center shadow-card transition-all duration-200 ${
              wishlisted ? 'bg-primary text-white' : 'bg-white text-muted hover:text-primary'
            }`}
            aria-label="Add to wishlist"
          >
            <Heart size={16} fill={wishlisted ? 'currentColor' : 'none'} />
          </button>
          {onCompare && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                onCompare(vehicle);
              }}
              className="w-9 h-9 rounded-xl bg-white text-muted hover:text-primary flex items-center justify-center shadow-card transition-colors"
              aria-label="Add to compare"
            >
              <GitCompare size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className={`${compact ? 'p-3' : 'p-5'} flex flex-col flex-1`}>
        {/* Brand & Model */}
        <div className="mb-3">
          <div className="flex items-center gap-1.5 mb-0.5">
            {BRAND_LOGOS_OVERRIDE[vehicle.brand] && (
              <img
                src={BRAND_LOGOS_OVERRIDE[vehicle.brand]}
                alt={vehicle.brand}
                className="h-4 w-auto object-contain bg-surface rounded p-0.5 border border-border shrink-0"
              />
            )}
            <p className="text-xs font-semibold text-primary uppercase tracking-wider">{vehicle.brand}</p>
          </div>
          <h3 className={`font-heading font-semibold text-dark leading-tight group-hover:text-primary transition-colors ${compact ? 'text-base' : 'text-lg'}`}>
            {vehicle.model}
          </h3>
        </div>

        {/* Specs row */}
        {!compact && (
          <div className="flex items-center gap-3 mb-4 text-sm text-muted">
            <span className="flex items-center gap-1">
              <Fuel size={13} />
              {vehicle.fuelTypes[0]}
            </span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="flex items-center gap-1">
              <Gauge size={13} />
              {vehicle.mileage}
            </span>
            {vehicle.seatingCapacity && (
              <>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span>{vehicle.seatingCapacity} Seats</span>
              </>
            )}
          </div>
        )}

        {/* Price */}
        <div className="flex items-end justify-between mb-4 mt-auto">
          <div>
            <p className="text-xs text-muted">Starting from</p>
            <p className={`font-heading font-bold text-dark ${compact ? 'text-base' : 'text-xl'}`}>{formatPriceShort(vehicle.startingPrice)}</p>
            <p className="text-xs text-muted">EMI from {formatPriceShort(vehicle.emiFrom)}/mo</p>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <Star size={14} className="text-warning fill-warning" />
            <span className="font-semibold text-dark">{vehicle.rating}</span>
            <span className="text-muted">({(vehicle.reviewCount / 1000).toFixed(1)}k)</span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex gap-2">
          <Link
            to={`/vehicle/${vehicle.slug}`}
            onClick={(e) => e.stopPropagation()}
            className={`flex-1 flex items-center justify-center gap-1.5 bg-surface text-dark-600 font-medium text-sm rounded-xl hover:bg-primary-50 hover:text-primary transition-all duration-200 ${compact ? 'h-8 text-xs' : 'h-10'}`}
          >
            Details <ArrowRight size={12} />
          </Link>
          <Link
            to={`/test-drive?vehicle=${vehicle.id}`}
            onClick={(e) => e.stopPropagation()}
            className={`flex-1 flex items-center justify-center gap-1.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-600 transition-all duration-200 ${compact ? 'h-8 text-xs' : 'h-10 text-sm'}`}
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
