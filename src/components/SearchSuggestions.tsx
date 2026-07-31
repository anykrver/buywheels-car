import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Car, Zap, TrendingUp, ChevronRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { vehicles as mockVehicles, formatPriceShort } from '../utils/data';
import { fetchVehicles } from '../utils/supabaseService';
import type { Vehicle } from '../types';

interface SearchSuggestionsProps {
  query: string;
  isOpen: boolean;
  onClose: () => void;
  onSelect?: (text: string) => void;
  className?: string;
  selectedIndex?: number;
}

const POPULAR_SEARCHES = [
  { label: 'Maruti Swift', type: 'car', slug: 'maruti-swift-2024' },
  { label: 'Hyundai Creta', type: 'car', slug: 'hyundai-creta-2024' },
  { label: 'Tata Nexon EV', type: 'ev', slug: 'tata-nexon-ev-2024' },
  { label: 'Mahindra Scorpio-N', type: 'car', slug: 'mahindra-scorpio-n-2024' },
  { label: 'Tata Sierra', type: 'car', slug: 'tata-sierra-2025' },
  { label: 'Skoda Kylaq', type: 'car', slug: 'skoda-kylaq-2025' },
  { label: 'Mahindra Thar Roxx', type: 'car', slug: 'mahindra-thar-roxx-2024' },
];

const POPULAR_CATEGORIES = [
  { label: 'Electric Cars (EV)', filter: 'fuel=Electric', icon: Zap },
  { label: 'SUVs & MUVs', filter: 'bodyType=SUV', icon: Car },
  { label: 'Budget Under ₹5 Lakh', filter: 'priceMax=500000', icon: Sparkles },
  { label: 'Budget Under ₹10 Lakh', filter: 'priceMax=1000000', icon: Sparkles },
];

export default function SearchSuggestions({
  query,
  isOpen,
  onClose,
  onSelect,
  className = '',
}: SearchSuggestionsProps) {
  const navigate = useNavigate();
  const [vehicleList, setVehicleList] = useState<Vehicle[]>(mockVehicles);

  useEffect(() => {
    let isMounted = true;
    fetchVehicles().then(data => {
      if (isMounted && data && data.length > 0) {
        setVehicleList(data);
      }
    }).catch(() => {
      // Fallback stays mockVehicles
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const trimmedQuery = query.trim().toLowerCase();

  // Filter matching vehicles
  const matchingVehicles = useMemo(() => {
    if (!trimmedQuery) return [];
    return vehicleList.filter(v => {
      const fullName = `${v.brand} ${v.model}`.toLowerCase();
      const brandName = v.brand.toLowerCase();
      const modelName = v.model.toLowerCase();
      const categoryName = v.category.toLowerCase();
      const fuels = (v.fuelTypes || []).map(f => f.toLowerCase()).join(' ');
      const features = (v.features || []).map(f => f.toLowerCase()).join(' ');

      return (
        fullName.includes(trimmedQuery) ||
        brandName.includes(trimmedQuery) ||
        modelName.includes(trimmedQuery) ||
        categoryName.includes(trimmedQuery) ||
        fuels.includes(trimmedQuery) ||
        features.includes(trimmedQuery) ||
        (trimmedQuery === 'ev' && (v.isEV || v.category === 'ev')) ||
        (trimmedQuery === 'electric' && (v.isEV || v.fuelTypes?.includes('Electric')))
      );
    }).slice(0, 6);
  }, [trimmedQuery, vehicleList]);

  // Filter matching brands
  const matchingBrands = useMemo(() => {
    if (!trimmedQuery) return [];
    const allBrands = Array.from(new Set(vehicleList.map(v => v.brand)));
    return allBrands.filter(b => b.toLowerCase().includes(trimmedQuery)).slice(0, 4);
  }, [trimmedQuery, vehicleList]);

  if (!isOpen) return null;

  const handleVehicleClick = (slug: string, modelName: string) => {
    if (onSelect) onSelect(modelName);
    onClose();
    navigate(`/vehicle/${slug}`);
  };

  const handleBrandClick = (brandName: string) => {
    if (onSelect) onSelect(brandName);
    onClose();
    navigate(`/cars?brand=${encodeURIComponent(brandName)}`);
  };

  const handleSearchSubmit = (searchTerm: string) => {
    if (onSelect) onSelect(searchTerm);
    onClose();
    navigate(`/cars?search=${encodeURIComponent(searchTerm)}`);
  };

  const handleCategoryClick = (filterQuery: string, label: string) => {
    if (onSelect) onSelect(label);
    onClose();
    navigate(`/cars?${filterQuery}`);
  };

  return (
    <div
      className={`absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-card-hover border border-border overflow-hidden z-[100] animate-scale-in ${className}`}
      style={{ maxHeight: '480px', overflowY: 'auto' }}
    >
      {!trimmedQuery ? (
        // Blank state: Trending Searches & Popular Categories
        <div className="p-4 space-y-4">
          {/* Trending Searches */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-muted uppercase tracking-wider mb-2.5">
              <TrendingUp size={14} className="text-primary" />
              <span>Trending Car Searches</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {POPULAR_SEARCHES.map(item => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleVehicleClick(item.slug, item.label)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface hover:bg-primary-50 text-dark-600 hover:text-primary rounded-xl text-xs font-medium transition-all group border border-border/60 hover:border-primary/40"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight size={12} className="text-muted group-hover:text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Categories */}
          <div className="pt-3 border-t border-border">
            <div className="text-xs font-semibold text-muted uppercase tracking-wider mb-2.5">
              Explore Popular Categories
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {POPULAR_CATEGORIES.map(cat => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.label}
                    type="button"
                    onClick={() => handleCategoryClick(cat.filter, cat.label)}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl bg-surface hover:bg-primary-50/70 text-left transition-colors border border-border/60 hover:border-primary/40 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
                      <Icon size={16} />
                    </div>
                    <span className="text-xs font-semibold text-dark group-hover:text-primary">
                      {cat.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        // Query Active: Vehicle & Brand Suggestions
        <div className="divide-y divide-border">
          {/* Matching Vehicles */}
          {matchingVehicles.length > 0 && (
            <div className="p-2">
              <div className="px-3 py-2 text-xs font-semibold text-muted uppercase tracking-wider flex items-center justify-between">
                <span>Matching Vehicles ({matchingVehicles.length})</span>
                <span className="text-[10px] text-primary font-bold">Click to view details</span>
              </div>
              <div className="space-y-1">
                {matchingVehicles.map(vehicle => (
                  <button
                    key={vehicle.id}
                    type="button"
                    onClick={() => handleVehicleClick(vehicle.slug, `${vehicle.brand} ${vehicle.model}`)}
                    className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-primary-50/60 transition-all text-left group"
                  >
                    <div className="relative w-14 h-10 rounded-lg overflow-hidden bg-surface flex-shrink-0 border border-border/80">
                      <img
                        src={vehicle.thumbnailUrl}
                        alt={`${vehicle.brand} ${vehicle.model}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.src = 'https://imgd.aeplcdn.com/664x374/n/cw/ec/141879/nexon-ev-exterior-right-front-three-quarter-7.jpeg';
                        }}
                      />
                      {(vehicle.isEV || vehicle.category === 'ev') && (
                        <span className="absolute top-0.5 right-0.5 bg-emerald-600 text-white text-[9px] font-bold px-1 rounded flex items-center gap-0.5">
                          <Zap size={8} /> EV
                        </span>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-xs font-semibold text-muted">{vehicle.brand}</span>
                        <span className="text-sm font-bold text-dark group-hover:text-primary transition-colors truncate">{vehicle.model}</span>
                        {vehicle.isBestSeller && (
                          <span className="px-1.5 py-0.5 bg-amber-500/10 text-amber-700 border border-amber-500/20 text-[10px] font-semibold rounded-md">
                            Best Seller
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted mt-0.5">
                        <span className="font-bold text-primary">
                          {formatPriceShort(vehicle.startingPrice)}
                        </span>
                        <span>•</span>
                        <span>{(vehicle.fuelTypes || []).join(', ')}</span>
                        {vehicle.mileage && (
                          <>
                            <span>•</span>
                            <span>{vehicle.mileage}</span>
                          </>
                        )}
                      </div>
                    </div>

                    <ChevronRight size={16} className="text-muted group-hover:text-primary group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matching Brands */}
          {matchingBrands.length > 0 && (
            <div className="p-2">
              <div className="px-3 py-1.5 text-xs font-semibold text-muted uppercase tracking-wider">
                Matching Brands
              </div>
              <div className="flex flex-wrap gap-2 p-1">
                {matchingBrands.map(b => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => handleBrandClick(b)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface hover:bg-primary-50 text-dark font-medium rounded-xl text-xs hover:text-primary transition-colors border border-border/60"
                  >
                    <Car size={13} className="text-primary" />
                    <span>View all {b} models</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Direct Search Option */}
          <div className="p-2 bg-surface/50">
            <button
              type="button"
              onClick={() => handleSearchSubmit(query)}
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-primary-50 hover:bg-primary text-primary hover:text-white transition-all text-left text-sm font-semibold group"
            >
              <div className="flex items-center gap-2">
                <Search size={16} className="text-primary group-hover:text-white" />
                <span>Search all results for &quot;<strong className="font-bold">{query}</strong>&quot;</span>
              </div>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform group-hover:text-white" />
            </button>
          </div>

          {/* No results state */}
          {matchingVehicles.length === 0 && matchingBrands.length === 0 && (
            <div className="p-6 text-center">
              <p className="text-sm font-semibold text-dark">No vehicles found matching &quot;{query}&quot;</p>
              <p className="text-xs text-muted mt-1">Try searching for brand names like Maruti, Tata, Mahindra, or Hyundai</p>
              <button
                type="button"
                onClick={() => handleSearchSubmit(query)}
                className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-white text-xs font-semibold rounded-xl hover:bg-primary-600 shadow-primary transition-all"
              >
                <Search size={14} />
                <span>Search all inventory for &quot;{query}&quot;</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
