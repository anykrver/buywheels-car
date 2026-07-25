import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, LayoutGrid, List, SlidersHorizontal, X } from 'lucide-react';
import VehicleCard from '../components/VehicleCard';
import VehicleFilters, { Filters } from '../components/VehicleFilters';
import { getBodyType } from '../utils/data';
import { fetchVehicles } from '../utils/supabaseService';
import type { Vehicle, VehicleCategory } from '../types';

interface VehicleListingProps {
  category: VehicleCategory | 'all';
  title: string;
  subtitle: string;
}

export default function VehicleListing({ category, title, subtitle }: VehicleListingProps) {
  const [vehiclesList, setVehiclesList] = useState<Vehicle[]>([]);
  
  useEffect(() => {
    fetchVehicles().then(setVehiclesList);
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const [compareList, setCompareList] = useState<Vehicle[]>([]);

  const handleCompare = (vehicle: Vehicle) => {
    setCompareList(prev =>
      prev.some(v => v.id === vehicle.id)
        ? prev.filter(v => v.id !== vehicle.id)
        : prev.length < 3 ? [...prev, vehicle] : prev
    );
  };
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState({
    brands: [] as string[],
    fuelTypes: [] as string[],
    transmissions: [] as string[],
    priceMin: 0,
    priceMax: 100000000,
    sortBy: 'popularity',
    engineCCMin: 0,
    engineCCMax: 100000,
    bodyType: '',
    seatingCapacity: 0,
    location: '',
  });

  const categoryVehicles = useMemo(() => {
    if (category === 'all') return vehiclesList;
    const catLower = category.toLowerCase();
    return vehiclesList.filter(v => {
      const vCatLower = v.category ? v.category.toLowerCase() : '';
      if (vCatLower === catLower) return true;
      if (catLower === 'ev' && v.isEV) return true;
      if (catLower === 'car' && (vCatLower === 'car' || !v.isEV)) return true;
      return false;
    });
  }, [category, vehiclesList]);

  const availableBrands = useMemo(() => {
    // Deduplicate brands
    const brandsList = categoryVehicles.map(v => v.brand);
    return [...new Set(brandsList)].sort();
  }, [categoryVehicles]);

  // Synchronize state with search params on mount or when searchParams change
  useEffect(() => {
    const brandParams = searchParams.getAll('brand');
    const searchParam = searchParams.get('search') || '';
    const fuelParams = searchParams.getAll('fuel');
    const transParams = searchParams.getAll('transmission');
    const priceMinParam = parseInt(searchParams.get('priceMin') || '0', 10);
    const priceMaxParam = parseInt(searchParams.get('priceMax') || '100000000', 10);
    const sortByParam = searchParams.get('sortBy') || 'popularity';
    const engineCCMinParam = parseInt(searchParams.get('engineCCMin') || '0', 10);
    const engineCCMaxParam = parseInt(searchParams.get('engineCCMax') || '100000', 10);
    const bodyTypeParam = searchParams.get('bodyType') || '';
    const seatingCapacityParam = parseInt(searchParams.get('seatingCapacity') || '0', 10);
    const locationParam = searchParams.get('location') || '';

    // Match loose brand names (e.g. "Maruti" to "Maruti Suzuki")
    const matchedBrands = brandParams.flatMap(urlB => {
      const match = availableBrands.find(ab => ab.toLowerCase().includes(urlB.toLowerCase()));
      return match ? [match] : [urlB];
    });

    setSearch(searchParam);
    setFilters({
      brands: matchedBrands,
      fuelTypes: fuelParams,
      transmissions: transParams,
      priceMin: priceMinParam,
      priceMax: priceMaxParam,
      sortBy: sortByParam,
      engineCCMin: engineCCMinParam,
      engineCCMax: engineCCMaxParam,
      bodyType: bodyTypeParam,
      seatingCapacity: seatingCapacityParam,
      location: locationParam,
    });

    if (
      (brandParams.length > 0 ||
      fuelParams.length > 0 ||
      transParams.length > 0 ||
      searchParam ||
      bodyTypeParam ||
      locationParam ||
      seatingCapacityParam > 0 ||
      engineCCMinParam > 0 ||
      engineCCMaxParam < 100000) &&
      window.innerWidth >= 1024
    ) {
      setShowFilters(true);
    }
  }, [searchParams, availableBrands]);

  const updateFiltersInUrl = (newFilters: Filters) => {
    const next = new URLSearchParams();
    
    if (search) {
      next.set('search', search);
    }
    
    newFilters.brands.forEach(b => next.append('brand', b));
    newFilters.fuelTypes.forEach(f => next.append('fuel', f));
    newFilters.transmissions.forEach(t => next.append('transmission', t));
    
    if (newFilters.priceMin > 0) {
      next.set('priceMin', newFilters.priceMin.toString());
    }
    if (newFilters.priceMax < 100000000) {
      next.set('priceMax', newFilters.priceMax.toString());
    }
    
    const ccMin = newFilters.engineCCMin ?? 0;
    if (ccMin > 0) {
      next.set('engineCCMin', ccMin.toString());
    }
    
    const ccMax = newFilters.engineCCMax ?? 100000;
    if (ccMax < 100000) {
      next.set('engineCCMax', ccMax.toString());
    }
    
    if (newFilters.bodyType) {
      next.set('bodyType', newFilters.bodyType);
    }
    
    const seating = newFilters.seatingCapacity ?? 0;
    if (seating > 0) {
      next.set('seatingCapacity', seating.toString());
    }
    
    if (newFilters.location) {
      next.set('location', newFilters.location);
    }
    if (newFilters.sortBy !== 'popularity') {
      next.set('sortBy', newFilters.sortBy);
    }
    
    setSearchParams(next, { replace: true });
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      if (value) {
        next.set('search', value);
      } else {
        next.delete('search');
      }
      return next;
    }, { replace: true });
  };

  const filtered = useMemo(() => {
    // Deduplicate vehicles
    const seen = new Set();
    const uniqueCategoryVehicles = categoryVehicles.filter(v => {
      if (seen.has(v.id)) return false;
      seen.add(v.id);
      return true;
    });

    let result = uniqueCategoryVehicles.filter(v => {
      // 1. Search filter: brand, model, variant, and location
      if (search) {
        const queryStr = search.toLowerCase().trim();
        const brandMatch = v.brand.toLowerCase().includes(queryStr);
        const modelMatch = v.model.toLowerCase().includes(queryStr);
        const variantMatch = v.variants?.some(vr => vr.name.toLowerCase().includes(queryStr));
        const locationMatch = v.dealerPrices?.some(dp => dp.location.toLowerCase().includes(queryStr));
        const fullNameMatch = `${v.brand} ${v.model}`.toLowerCase().includes(queryStr);

        if (!brandMatch && !modelMatch && !variantMatch && !locationMatch && !fullNameMatch) {
          return false;
        }
      }

      // 2. Brand filter: clicking a brand (e.g. Maruti) should show ONLY that brand's cars
      if (filters.brands.length) {
        const isMatched = filters.brands.some(b => 
          v.brand.toLowerCase().includes(b.toLowerCase()) || b.toLowerCase().includes(v.brand.toLowerCase())
        );
        if (!isMatched) return false;
      }

      // 3. Fuel type filter
      if (filters.fuelTypes.length && !v.fuelTypes.some(f => filters.fuelTypes.includes(f))) return false;

      // 4. Transmission filter
      if (filters.transmissions.length && !v.transmissions.some(t => filters.transmissions.includes(t))) return false;

      // 5. Price filter
      if (v.startingPrice < filters.priceMin || v.startingPrice > filters.priceMax) return false;

      // 6. Engine CC filter
      if (filters.engineCCMin > 0 || filters.engineCCMax < 100000) {
        const cc = v.engineCC || 0;
        if (cc < filters.engineCCMin || cc > filters.engineCCMax) return false;
      }

      // 7. Body type filter
      if (filters.bodyType && getBodyType(v).toLowerCase() !== filters.bodyType.toLowerCase()) return false;

      // 8. Seating capacity filter
      if (filters.seatingCapacity && v.seatingCapacity !== filters.seatingCapacity) return false;

      // 9. Location filter
      if (filters.location) {
        const hasLocation = v.dealerPrices?.some(dp => dp.location.toLowerCase().includes(filters.location.toLowerCase()));
        if (!hasLocation) return false;
      }

      return true;
    });

    switch (filters.sortBy) {
      case 'price-asc': result = [...result].sort((a, b) => a.startingPrice - b.startingPrice); break;
      case 'price-desc': result = [...result].sort((a, b) => b.startingPrice - a.startingPrice); break;
      case 'rating': result = [...result].sort((a, b) => b.rating - a.rating); break;
      case 'newest': result = [...result].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)); break;
    }

    return result;
  }, [categoryVehicles, search, filters]);

  const activeFilterCount = filters.brands.length + filters.fuelTypes.length + filters.transmissions.length +
    (filters.priceMin > 0 || filters.priceMax < 100000000 ? 1 : 0) +
    (filters.engineCCMin > 0 || filters.engineCCMax < 100000 ? 1 : 0) +
    (filters.bodyType ? 1 : 0) +
    (filters.seatingCapacity > 0 ? 1 : 0) +
    (filters.location ? 1 : 0);

  return (
    <div className="min-h-screen bg-surface pt-28 pb-24 lg:pb-12">
      <div className="container-fluid">
        {/* Page header */}
        <div className="mb-8">
          <h1 className="font-heading font-bold text-dark text-3xl md:text-4xl">{title}</h1>
          <p className="text-muted mt-2">{subtitle}</p>
        </div>

        {/* Search & controls bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
            <input
              type="text"
              placeholder={`Search ${title.toLowerCase()}...`}
              value={search}
              onChange={e => handleSearchChange(e.target.value)}
              className="w-full h-12 pl-11 pr-4 border border-border rounded-xl text-dark bg-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {search && (
              <button onClick={() => handleSearchChange('')} className="absolute right-3 top-1/2 -translate-y-1/2">
                <X size={16} className="text-muted" />
              </button>
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 h-12 rounded-xl border font-medium text-sm transition-all ${
                showFilters || activeFilterCount > 0
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-dark border-border hover:border-primary hover:text-primary'
              }`}
            >
              <SlidersHorizontal size={16} />
              Filters
              {activeFilterCount > 0 && (
                <span className="bg-white text-primary text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>
            <div className="hidden sm:flex border border-border rounded-xl overflow-hidden bg-white">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 h-12 transition-colors ${viewMode === 'grid' ? 'bg-primary text-white' : 'text-muted hover:text-primary'}`}
              >
                <LayoutGrid size={18} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 h-12 transition-colors ${viewMode === 'list' ? 'bg-primary text-white' : 'text-muted hover:text-primary'}`}
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters */}
          {showFilters && (
            <div className="hidden lg:block w-64 flex-shrink-0">
              <VehicleFilters
                filters={filters}
                onChange={updateFiltersInUrl}
                brands={availableBrands}
              />
            </div>
          )}

          {/* Results */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-muted">
                <span className="font-semibold text-dark">{filtered.length}</span> vehicles found
              </p>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Search size={28} className="text-muted" />
                </div>
                <h3 className="font-heading font-semibold text-dark text-lg mb-2">No Cars Found</h3>
                <p className="text-muted text-sm">Try adjusting your search or filters</p>
              </div>
            ) : (
              <div className={`grid gap-6 ${
                viewMode === 'grid'
                  ? 'sm:grid-cols-2 xl:grid-cols-3'
                  : 'grid-cols-1'
              }`}>
                {filtered.map(vehicle => (
                  <VehicleCard
                    key={vehicle.id}
                    vehicle={vehicle}
                    onCompare={handleCompare}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile filter drawer */}
        {showFilters && (
          <div className="lg:hidden fixed inset-0 z-50 bg-dark/60 backdrop-blur-sm">
            <div className="absolute right-0 top-0 bottom-0 w-80 bg-white overflow-y-auto animate-slide-up">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h3 className="font-heading font-semibold text-dark">Filters</h3>
                <button onClick={() => setShowFilters(false)} className="p-2 rounded-lg hover:bg-surface">
                  <X size={20} className="text-muted" />
                </button>
              </div>
              <div className="p-4">
                <VehicleFilters
                  filters={filters}
                  onChange={updateFiltersInUrl}
                  brands={availableBrands}
                />
              </div>
            </div>
          </div>
        )}

        {/* Compare bar */}
        {compareList.length > 0 && (
          <div className="fixed bottom-20 lg:bottom-6 left-1/2 -translate-x-1/2 z-40 bg-dark text-white rounded-2xl shadow-card-hover px-6 py-4 flex items-center gap-4 animate-slide-up">
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
