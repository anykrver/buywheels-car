import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  MapPin,
  ChevronDown,
  SlidersHorizontal,
  Tag,
  Car,
  Zap,
  Settings,
  X,
} from 'lucide-react';
import SearchSuggestions from '../common/SearchSuggestions';
import { useLocationContext } from '../../context/LocationContext';

/* ── Data ─────────────────────────────────────────────── */

const CITIES = [
  'Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Hazaribagh', 'Ramgarh',
];

const QUICK_CITIES = ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Hazaribagh', 'Ramgarh'];

const BUDGET_OPTIONS = [
  'Under ₹5 Lakh', 'Under ₹10 Lakh', '₹5–10 Lakh',
  '₹10–15 Lakh', '₹15–20 Lakh', 'Above ₹20 Lakh',
];

const BODY_TYPES = ['Hatchback', 'Sedan', 'SUV', 'MUV', 'Coupe', 'Minivan'];

const FUEL_TYPES = ['Petrol', 'Diesel', 'Electric', 'CNG', 'Hybrid'];

const TRANSMISSION_TYPES = ['Manual', 'Automatic', 'AMT', 'CVT', 'DCT'];

/* ── Types ────────────────────────────────────────────── */

type ActiveDropdown = 'budget' | 'body' | 'fuel' | 'transmission' | 'allFilters' | null;

/* ── Component ────────────────────────────────────────── */

export default function HeroSection() {
  const navigate = useNavigate();
  const { selectedCity, openPincodeModal, setSelectedLocation } = useLocationContext();

  // Search state
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const isUsed = false;
  const [activeDropdown, setActiveDropdown] = useState<ActiveDropdown>(null);
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [citySearch, setCitySearch] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
  const [selectedBody, setSelectedBody] = useState('');
  const [selectedFuel, setSelectedFuel] = useState('');
  const [selectedTransmission, setSelectedTransmission] = useState('');

  const dropdownRef = useRef<HTMLDivElement>(null);
  const cityRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click or scroll
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
      if (cityRef.current && !cityRef.current.contains(e.target as Node)) {
        setShowCityDropdown(false);
      }
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    const onScroll = () => {
      setActiveDropdown(null);
    };
    document.addEventListener('mousedown', handler);
    window.addEventListener('scroll', onScroll, true);
    return () => {
      document.removeEventListener('mousedown', handler);
      window.removeEventListener('scroll', onScroll, true);
    };
  }, []);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (query.trim()) {
      params.set('search', query.trim());
    }
    if (selectedFuel) {
      params.set('fuel', selectedFuel);
    }
    if (selectedTransmission) {
      params.set('transmission', selectedTransmission);
    }
    if (selectedBody) {
      params.set('bodyType', selectedBody);
    }
    if (selectedCity && selectedCity !== 'Select City') {
      params.set('location', selectedCity);
    }
    if (selectedBudget) {
      let min = 0;
      let max = 100000000;
      if (selectedBudget === 'Under ₹5 Lakh') {
        min = 0;
        max = 500000;
      } else if (selectedBudget === 'Under ₹10 Lakh') {
        min = 0;
        max = 1000000;
      } else if (selectedBudget === '₹5–10 Lakh' || selectedBudget === '₹5–8 Lakh' || selectedBudget === '₹2–5 Lakh') {
        min = 500000;
        max = 1000000;
      } else if (selectedBudget === '₹10–15 Lakh' || selectedBudget === '₹8–12 Lakh') {
        min = 1000000;
        max = 1500000;
      } else if (selectedBudget === '₹15–20 Lakh' || selectedBudget === '₹12–20 Lakh') {
        min = 1500000;
        max = 2000000;
      } else if (selectedBudget === 'Above ₹20 Lakh') {
        min = 2000000;
        max = 100000000;
      }
      params.set('priceMin', min.toString());
      params.set('priceMax', max.toString());
    }

    const queryString = params.toString();
    navigate(queryString ? `/cars?${queryString}` : '/cars');
  };

  const filteredCities = CITIES.filter(c =>
    c.toLowerCase().includes(citySearch.toLowerCase())
  );

  const toggleDropdown = (name: ActiveDropdown) => {
    setActiveDropdown(prev => (prev === name ? null : name));
  };

  /* ── Render ─────────────────────────────────────────── */
  return (
    <div className="relative">
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          Banner strip
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div
        className="relative w-full overflow-hidden h-[360px] sm:h-[460px] lg:h-[500px]"
      >
        {/* Background image */}
        <img
          src="https://imgd.aeplcdn.com/1920x580/media/cw/no5qv9b_1808753.jpg"
          alt="Find Your Right Car"
          className="w-full h-full object-cover object-center"
          onError={e => {
            // Fallback to a reliable car-highway shot
            (e.currentTarget as HTMLImageElement).src =
              'https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=1920';
          }}
        />
        {/* Subtle dark gradient at bottom so search widget reads better */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />

        {/* Floating headline on banner */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="inline-block bg-primary/90 text-white text-[10px] sm:text-xs font-semibold tracking-widest uppercase px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-2 sm:mb-4 shadow-lg backdrop-blur-sm">
            India&apos;s Trusted Car Marketplace
          </span>
          <h1
            className="font-heading font-extrabold text-white drop-shadow-lg mb-3"
            style={{ fontSize: 'clamp(2rem, 5.5vw, 4.5rem)', lineHeight: 1.15 }}
          >
            Find Your Right Car
          </h1>

          {/* Stats Row — PRD §7.1.1 with count-up animation on scroll into view */}
          <div className="flex items-center justify-center gap-6 sm:gap-12 mt-2 bg-black/40 backdrop-blur-md px-6 py-2.5 rounded-2xl border border-white/15">
            <HeroCountUpStat target={50} label="Dealers" />
            <div className="w-px h-8 bg-white/20" />
            <HeroCountUpStat target={200} label="Cars" />
            <div className="w-px h-8 bg-white/20" />
            <HeroCountUpStat target={10000} label="Happy Buyers" />
          </div>
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          Floating search widget
          Pulls up with negative margin-top to overlap banner
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div
        className="relative z-20 mx-auto px-3 sm:px-6 lg:px-8 -mt-10 sm:-mt-14"
        style={{ maxWidth: '1200px' }}
      >
        <div
          className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.15)] overflow-visible"
          ref={dropdownRef}
        >
          {/* ── Row 1: label + city selector ── */}
          <div className="flex items-center justify-between px-3.5 sm:px-6 pt-3.5 sm:pt-5 pb-2.5 sm:pb-3 border-b border-border">
            <h2 className="font-heading font-bold text-dark text-base sm:text-xl">
              Find Your Right Car
            </h2>

            {/* City selector */}
            <div className="relative" ref={cityRef}>
              <button
                onClick={() => setShowCityDropdown(p => !p)}
                className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-medium text-dark-600 hover:text-primary transition-colors"
                id="city-selector-btn"
              >
                <MapPin size={15} className="text-primary shrink-0" />
                <span className="truncate max-w-[110px] sm:max-w-none">{selectedCity}</span>
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 shrink-0 ${showCityDropdown ? 'rotate-180' : ''}`}
                />
              </button>

              {showCityDropdown && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-card-hover border border-border z-50 overflow-hidden animate-fade-in">
                  <div className="p-2 border-b border-border">
                    <div className="flex items-center gap-2 bg-surface rounded-lg px-3 py-2">
                      <Search size={14} className="text-muted" />
                      <input
                        type="text"
                        placeholder="Search city…"
                        value={citySearch}
                        onChange={e => setCitySearch(e.target.value)}
                        className="flex-1 bg-transparent text-sm outline-none text-dark placeholder-muted"
                      />
                      {citySearch && (
                        <button onClick={() => setCitySearch('')}>
                          <X size={12} className="text-muted" />
                        </button>
                      )}
                    </div>
                  </div>
                  <ul className="max-h-48 overflow-y-auto py-1">
                    {filteredCities.map(c => (
                      <li key={c}>
                        <button
                          onClick={() => {
                            setSelectedLocation({ city: c });
                            setShowCityDropdown(false);
                            setCitySearch('');
                          }}
                          className={`w-full text-left px-4 py-2.5 text-sm hover:bg-primary-50 hover:text-primary transition-colors ${
                            selectedCity === c ? 'text-primary font-semibold bg-primary-50' : 'text-dark-600'
                          }`}
                        >
                          {c}
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className="p-2 border-t border-border bg-surface/50 text-center">
                    <button
                      onClick={() => {
                        setShowCityDropdown(false);
                        openPincodeModal();
                      }}
                      className="text-xs font-semibold text-primary hover:underline"
                    >
                      + Search Area / Pincode
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ── Row 2: Search input ── */}
          <div className="px-3.5 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search box */}
              <div className="flex-1 relative" ref={searchContainerRef}>
                <div className="flex items-center bg-surface rounded-xl border border-border hover:border-primary transition-colors overflow-hidden">
                  <Search size={18} className="ml-3 sm:ml-4 text-muted flex-shrink-0" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onFocus={() => setShowSuggestions(true)}
                    onChange={e => {
                      setQuery(e.target.value);
                      setShowSuggestions(true);
                    }}
                    onKeyDown={e => {
                      if (e.key === 'Enter') {
                        setShowSuggestions(false);
                        handleSearch();
                      } else if (e.key === 'Escape') {
                        setShowSuggestions(false);
                      }
                    }}
                    placeholder={isUsed ? 'Type model name, e.g, Used Alto' : 'Type model name, e.g, Swift, Nexon…'}
                    className="flex-1 h-11 sm:h-12 px-2.5 sm:px-3 bg-transparent text-dark text-xs sm:text-sm outline-none placeholder-muted"
                    id="hero-search-input"
                  />
                  {query && (
                    <button
                      onClick={() => setQuery('')}
                      className="mr-2 p-1 rounded-full hover:bg-border transition-colors"
                    >
                      <X size={14} className="text-muted" />
                    </button>
                  )}
                </div>

                <SearchSuggestions
                  query={query}
                  isOpen={showSuggestions}
                  onClose={() => setShowSuggestions(false)}
                  onSelect={selectedText => setQuery(selectedText)}
                />
              </div>

              {/* Search CTA */}
              <button
                onClick={handleSearch}
                className="flex-shrink-0 h-11 sm:h-12 px-4 sm:px-6 bg-primary hover:bg-primary-600 text-white font-heading font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-primary flex items-center justify-center gap-1.5"
                id="hero-search-btn"
              >
                <Search size={16} />
                <span className="hidden sm:inline">Search</span>
              </button>
            </div>
          </div>

          {/* ── Row 3: Filter chips ── */}
          <div className="px-6 pb-4 flex items-center gap-2 flex-nowrap overflow-x-auto border-b border-border scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
            {/* All Filters — always first */}
            <button
              id="filter-all"
              onClick={() => navigate('/cars')}
              className="flex-shrink-0 flex items-center gap-2 h-9 px-4 rounded-lg border border-dashed border-primary/50 text-primary text-sm font-medium hover:bg-primary-50 transition-all duration-200"
            >
              <SlidersHorizontal size={14} />
              <span className="whitespace-nowrap">All Filters</span>
            </button>

            {/* Budget */}
            <div className="relative flex-shrink-0">
              <button
                id="filter-budget"
                onClick={() => toggleDropdown('budget')}
                className={`flex items-center gap-2 h-9 px-4 rounded-lg border text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  selectedBudget || activeDropdown === 'budget'
                    ? 'border-primary text-primary bg-primary-50'
                    : 'border-border text-dark-600 hover:border-primary hover:text-primary bg-white'
                }`}
              >
                <Tag size={14} />
                <span>{selectedBudget || 'Budget'}</span>
                <ChevronDown size={13} className={`transition-transform ${activeDropdown === 'budget' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'budget' && (
                <FilterDropdown title="Budget">
                  {BUDGET_OPTIONS.map(opt => (
                    <FilterOption
                      key={opt}
                      label={opt}
                      selected={selectedBudget === opt}
                      onSelect={() => {
                        setSelectedBudget(selectedBudget === opt ? '' : opt);
                        setActiveDropdown(null);
                      }}
                    />
                  ))}
                </FilterDropdown>
              )}
            </div>

            {/* Body Type */}
            <div className="relative flex-shrink-0">
              <button
                id="filter-body-type"
                onClick={() => toggleDropdown('body')}
                className={`flex items-center gap-2 h-9 px-4 rounded-lg border text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  selectedBody || activeDropdown === 'body'
                    ? 'border-primary text-primary bg-primary-50'
                    : 'border-border text-dark-600 hover:border-primary hover:text-primary bg-white'
                }`}
              >
                <Car size={14} />
                <span>{selectedBody || 'Body Type'}</span>
                <ChevronDown size={13} className={`transition-transform ${activeDropdown === 'body' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'body' && (
                <FilterDropdown title="Body Type">
                  {BODY_TYPES.map(opt => (
                    <FilterOption
                      key={opt}
                      label={opt}
                      selected={selectedBody === opt}
                      onSelect={() => {
                        setSelectedBody(selectedBody === opt ? '' : opt);
                        setActiveDropdown(null);
                      }}
                    />
                  ))}
                </FilterDropdown>
              )}
            </div>

            {/* Fuel Type */}
            <div className="relative flex-shrink-0">
              <button
                id="filter-fuel-type"
                onClick={() => toggleDropdown('fuel')}
                className={`flex items-center gap-2 h-9 px-4 rounded-lg border text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  selectedFuel || activeDropdown === 'fuel'
                    ? 'border-primary text-primary bg-primary-50'
                    : 'border-border text-dark-600 hover:border-primary hover:text-primary bg-white'
                }`}
              >
                <Zap size={14} />
                <span>{selectedFuel || 'Fuel Type'}</span>
                <ChevronDown size={13} className={`transition-transform ${activeDropdown === 'fuel' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'fuel' && (
                <FilterDropdown title="Fuel Type">
                  {FUEL_TYPES.map(opt => (
                    <FilterOption
                      key={opt}
                      label={opt}
                      selected={selectedFuel === opt}
                      onSelect={() => {
                        setSelectedFuel(selectedFuel === opt ? '' : opt);
                        setActiveDropdown(null);
                      }}
                    />
                  ))}
                </FilterDropdown>
              )}
            </div>

            {/* Transmission */}
            <div className="relative flex-shrink-0">
              <button
                id="filter-transmission"
                onClick={() => toggleDropdown('transmission')}
                className={`flex items-center gap-2 h-9 px-4 rounded-lg border text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  selectedTransmission || activeDropdown === 'transmission'
                    ? 'border-primary text-primary bg-primary-50'
                    : 'border-border text-dark-600 hover:border-primary hover:text-primary bg-white'
                }`}
              >
                <Settings size={14} />
                <span>{selectedTransmission || 'Transmission'}</span>
                <ChevronDown size={13} className={`transition-transform ${activeDropdown === 'transmission' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'transmission' && (
                <FilterDropdown title="Transmission">
                  {TRANSMISSION_TYPES.map(opt => (
                    <FilterOption
                      key={opt}
                      label={opt}
                      selected={selectedTransmission === opt}
                      onSelect={() => {
                        setSelectedTransmission(selectedTransmission === opt ? '' : opt);
                        setActiveDropdown(null);
                      }}
                    />
                  ))}
                </FilterDropdown>
              )}
            </div>
          </div>

          {/* ── Row 4: Quick city tabs + utility links ── */}
          <div className="px-6 py-3 flex items-center justify-between flex-wrap gap-3">
            {/* City quick tabs */}
            <div className="flex items-center gap-1 flex-wrap">
              <span className="text-xs text-muted font-medium mr-2">
                {isUsed ? 'Buy Used Cars in' : 'New Cars in'}
              </span>
              {QUICK_CITIES.map(c => (
                <button
                  key={c}
                  onClick={() => setSelectedLocation({ city: c })}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                    selectedCity === c
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-surface text-dark-500 hover:bg-primary-50 hover:text-primary border border-border'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Sub-components ───────────────────────────────────── */

function FilterDropdown({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (parent) {
      const rect = parent.getBoundingClientRect();
      const left = Math.min(rect.left, window.innerWidth - 200);
      setPos({ top: rect.bottom + 8, left: Math.max(4, left) });
    }
  }, []);

  return (
    <div
      ref={ref}
      className="min-w-[180px] bg-white rounded-xl shadow-card-hover border border-border z-[9999] overflow-hidden animate-fade-in"
      style={
        pos
          ? { position: 'fixed', top: pos.top, left: pos.left }
          : { position: 'fixed', opacity: 0, pointerEvents: 'none' as const }
      }
    >
      <div className="px-4 py-2.5 border-b border-border">
        <p className="text-xs font-semibold text-muted uppercase tracking-wide">{title}</p>
      </div>
      <ul className="py-1 max-h-52 overflow-y-auto">{children}</ul>
    </div>
  );
}

function FilterOption({
  label,
  selected,
  onSelect,
}: {
  label: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <li>
      <button
        onClick={onSelect}
        className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
          selected
            ? 'text-primary font-semibold bg-primary-50'
            : 'text-dark-600 hover:bg-surface hover:text-dark'
        }`}
      >
        {label}
      </button>
    </li>
  );
}

function HeroCountUpStat({ target, label, suffix = '+' }: { target: number; label: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 1200;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <div ref={ref} className="text-center px-1 sm:px-3">
      <p className="font-heading font-extrabold text-primary text-lg sm:text-2xl md:text-3xl leading-none">
        {count.toLocaleString('en-IN')}{suffix}
      </p>
      <p className="text-[10px] sm:text-xs font-semibold text-white/90 uppercase tracking-wider mt-1">{label}</p>
    </div>
  );
}

