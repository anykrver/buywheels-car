import { useState } from 'react';
import { SlidersHorizontal, X, ChevronDown, ChevronUp } from 'lucide-react';

export interface Filters {
  brands: string[];
  fuelTypes: string[];
  transmissions: string[];
  priceMin: number;
  priceMax: number;
  sortBy: string;
  engineCCMin?: number;
  engineCCMax?: number;
  bodyType?: string;
  seatingCapacity?: number;
  location?: string;
}

interface VehicleFiltersProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
  brands: string[];
}

const fuelOptions = ['Petrol', 'Diesel', 'Electric', 'CNG', 'Hybrid'];
const transmissionOptions = ['Manual', 'Automatic', 'CVT', 'AMT'];
const sortOptions = [
  { value: 'popularity', label: 'Popularity' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Rating' },
  { value: 'newest', label: 'Newest First' },
];

export default function VehicleFilters({ filters, onChange, brands }: VehicleFiltersProps) {
  const [expandedSections, setExpandedSections] = useState({ brands: true, fuel: true, transmission: true, price: true });

  const toggleSection = (key: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleMulti = (key: 'brands' | 'fuelTypes' | 'transmissions', value: string) => {
    const current = filters[key];
    onChange({
      ...filters,
      [key]: current.includes(value) ? current.filter(v => v !== value) : [...current, value],
    });
  };

  const clearAll = () => {
    onChange({ brands: [], fuelTypes: [], transmissions: [], priceMin: 0, priceMax: 100000000, sortBy: 'popularity' });
  };

  const hasActive = filters.brands.length > 0 || filters.fuelTypes.length > 0 || filters.transmissions.length > 0;

  return (
    <div className="bg-white rounded-2xl border border-border shadow-card">
      {/* Header */}
      <div className="flex items-center justify-between p-5 border-b border-border">
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={18} className="text-primary" />
          <span className="font-heading font-semibold text-dark">Filters</span>
        </div>
        {hasActive && (
          <button onClick={clearAll} className="text-xs text-primary font-medium flex items-center gap-1 hover:text-primary-600">
            <X size={12} /> Clear All
          </button>
        )}
      </div>

      {/* Sort */}
      <div className="p-5 border-b border-border">
        <label className="text-xs font-semibold text-muted uppercase tracking-wider block mb-2">Sort By</label>
        <select
          value={filters.sortBy}
          onChange={e => onChange({ ...filters, sortBy: e.target.value })}
          className="select-field text-sm"
        >
          {sortOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>

      {/* Price range */}
      <div className="p-5 border-b border-border">
        <button
          className="flex items-center justify-between w-full mb-3"
          onClick={() => toggleSection('price')}
        >
          <span className="text-xs font-semibold text-muted uppercase tracking-wider">Budget</span>
          {expandedSections.price ? <ChevronUp size={14} className="text-muted" /> : <ChevronDown size={14} className="text-muted" />}
        </button>
        {expandedSections.price && (
          <div className="space-y-3">
            {[
              { label: 'Under ₹5 Lakh', min: 0, max: 500000 },
              { label: '₹5 - 10 Lakh', min: 500000, max: 1000000 },
              { label: '₹10 - 20 Lakh', min: 1000000, max: 2000000 },
              { label: '₹20 - 50 Lakh', min: 2000000, max: 5000000 },
              { label: 'Above ₹50 Lakh', min: 5000000, max: 100000000 },
            ].map(({ label, min, max }) => (
              <label key={label} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="price"
                  checked={filters.priceMin === min && filters.priceMax === max}
                  onChange={() => onChange({ ...filters, priceMin: min, priceMax: max })}
                  className="accent-primary w-4 h-4"
                />
                <span className="text-sm text-dark-600 group-hover:text-primary transition-colors">{label}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Brands */}
      <div className="p-5 border-b border-border">
        <button
          className="flex items-center justify-between w-full mb-3"
          onClick={() => toggleSection('brands')}
        >
          <span className="text-xs font-semibold text-muted uppercase tracking-wider">Brand</span>
          {expandedSections.brands ? <ChevronUp size={14} className="text-muted" /> : <ChevronDown size={14} className="text-muted" />}
        </button>
        {expandedSections.brands && (
          <div className="space-y-2.5 max-h-48 overflow-y-auto">
            {brands.map(brand => (
              <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.brands.includes(brand)}
                  onChange={() => toggleMulti('brands', brand)}
                  className="accent-primary w-4 h-4 rounded"
                />
                <span className="text-sm text-dark-600 group-hover:text-primary transition-colors">{brand}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Fuel type */}
      <div className="p-5 border-b border-border">
        <button
          className="flex items-center justify-between w-full mb-3"
          onClick={() => toggleSection('fuel')}
        >
          <span className="text-xs font-semibold text-muted uppercase tracking-wider">Fuel Type</span>
          {expandedSections.fuel ? <ChevronUp size={14} className="text-muted" /> : <ChevronDown size={14} className="text-muted" />}
        </button>
        {expandedSections.fuel && (
          <div className="flex flex-wrap gap-2">
            {fuelOptions.map(fuel => (
              <button
                key={fuel}
                onClick={() => toggleMulti('fuelTypes', fuel)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                  filters.fuelTypes.includes(fuel)
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-dark-600 border-border hover:border-primary hover:text-primary'
                }`}
              >
                {fuel}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Transmission */}
      <div className="p-5">
        <button
          className="flex items-center justify-between w-full mb-3"
          onClick={() => toggleSection('transmission')}
        >
          <span className="text-xs font-semibold text-muted uppercase tracking-wider">Transmission</span>
          {expandedSections.transmission ? <ChevronUp size={14} className="text-muted" /> : <ChevronDown size={14} className="text-muted" />}
        </button>
        {expandedSections.transmission && (
          <div className="flex flex-wrap gap-2">
            {transmissionOptions.map(t => (
              <button
                key={t}
                onClick={() => toggleMulti('transmissions', t)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                  filters.transmissions.includes(t)
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-dark-600 border-border hover:border-primary hover:text-primary'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
