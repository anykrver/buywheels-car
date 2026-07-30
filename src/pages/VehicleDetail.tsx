import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useLocationContext } from '../context/LocationContext';
import {
  Star, Heart, GitCompare, Share2, MapPin, Fuel, Gauge, Users, Shield,
  ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Check, Info, Calculator, ArrowRight, Phone, Plus, MessageSquare, X, Download, Minus, Gift, User
} from 'lucide-react';
import { formatPriceShort, formatPrice } from '../utils/data';
import { fetchVehicles, fetchReviews, BRAND_LOGOS_OVERRIDE } from '../utils/supabaseService';
import type { Vehicle, Review } from '../types';
import VehicleCard from '../components/VehicleCard';
import VehicleDetailSEO from '../components/VehicleDetailSEO';
import { supabase } from '../utils/supabaseClient';
import { vehicleColorsData } from '../utils/vehicleColors';
import { downloadVehicleBrochure } from '../utils/brochureService';

export default function VehicleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { selectedCity, selectedPincode, selectedArea, multiplier, openPincodeModal, pincodeModalOpen } = useLocationContext();
  const [vehiclesList, setVehiclesList] = useState<Vehicle[]>([]);
  const [reviewsList, setReviewsList] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [pendingOfferAfterPincode, setPendingOfferAfterPincode] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Promise.all([fetchVehicles(), fetchReviews()]).then(([vehiclesData, reviewsData]) => {
      setVehiclesList(vehiclesData);
      setReviewsList(reviewsData);
      setLoading(false);
    });
  }, []);

  const vehicle = vehiclesList.find(v => v.slug === slug);

  const [bookingForm, setBookingForm] = useState({
    name: localStorage.getItem('niaa_user_name') || '',
    phone: localStorage.getItem('niaa_user_phone') || '',
    email: '',
    city: selectedCity,
    purpose: 'Get Best Quote'
  });

  useEffect(() => {
    setBookingForm(prev => ({
      ...prev,
      city: prev.city || selectedCity
    }));
  }, [selectedCity]);

  const handleJulyOfferClick = () => {
    const savedName = localStorage.getItem('niaa_user_name');
    const savedPhone = localStorage.getItem('niaa_user_phone');
    if (savedName || savedPhone) {
      setBookingForm(prev => ({
        ...prev,
        name: savedName || prev.name,
        phone: savedPhone || prev.phone
      }));
    }
    setPendingOfferAfterPincode(true);
    openPincodeModal();
  };

  useEffect(() => {
    if (pendingOfferAfterPincode && !pincodeModalOpen) {
      setPendingOfferAfterPincode(false);
      setBookingOpen(true);
    }
  }, [pincodeModalOpen, pendingOfferAfterPincode]);
  const [isBookingSubmitting, setIsBookingSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleConfirmBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingForm.name || !bookingForm.phone || !bookingForm.city) {
      alert('Please enter your name, phone number, and city.');
      return;
    }
    const cleanPhone = bookingForm.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }
    setIsBookingSubmitting(true);
    const { error } = await supabase
      .from('vehicle_bookings')
      .insert([
        {
          vehicle_id: vehicle?.id,
          name: bookingForm.name,
          phone: bookingForm.phone,
          email: bookingForm.email || null,
          city: bookingForm.city,
          purpose: bookingForm.purpose || null
        }
      ]);
    setIsBookingSubmitting(false);
    if (!error) {
      localStorage.setItem('niaa_user_name', bookingForm.name);
      localStorage.setItem('niaa_user_phone', bookingForm.phone);
      setBookingSuccess(true);
    } else {
      console.error('Error confirming booking:', error);
      alert('Failed to submit booking request. Please check your connection and try again.');
    }
  };

  const [activeImage, setActiveImage] = useState(0);
  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const [activeVariant, setActiveVariant] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const { isWishlisted, toggleWishlist } = useWishlist();
  const wishlisted = vehicle ? isWishlisted(vehicle.id) : false;
  const [bookingOpen, setBookingOpen] = useState(false);
  const [offerModalOpen, setOfferModalOpen] = useState(false);
  const [offerPurpose, setOfferPurpose] = useState('');
  const [localReviews, setLocalReviews] = useState<any[]>([]);
  const [showVariantDropdown, setShowVariantDropdown] = useState(false);

  useEffect(() => {
    if (vehicle) {
      const matched = reviewsList.filter(
        r => r.vehicle.toLowerCase().includes(vehicle.model.toLowerCase()) || 
             r.vehicle.toLowerCase().includes(vehicle.brand.toLowerCase())
      );
      if (matched.length > 0) {
        setLocalReviews(matched);
      } else {
        setLocalReviews([
          {
            id: `dr-${vehicle.id}-1`,
            name: 'Rohan Sharma',
            avatar: 'RS',
            rating: 5,
            vehicle: `${vehicle.brand} ${vehicle.model}`,
            comment: `The new ${vehicle.model} is an amazing offering from ${vehicle.brand}. The ride quality is superb and it feels very stable at high speeds. I especially love the features like the ${vehicle.features[0] || 'touchscreen'} and the ${vehicle.features[1] || 'safety package'}. Truly worth the price!`,
            location: 'Ranchi',
            date: 'May 2024',
            verified: true
          },
          {
            id: `dr-${vehicle.id}-2`,
            name: 'Ananya Goel',
            avatar: 'AG',
            rating: 4,
            vehicle: `${vehicle.brand} ${vehicle.model}`,
            comment: `Brought the ${vehicle.model} last month. The performance is solid, particularly the ${vehicle.powerBHP ? `${vehicle.powerBHP} bhp` : 'engine'} output. Mileage in the city is around ${vehicle.mileage}. Cabin is spacious and comfortable for long journeys.`,
            location: 'Jamshedpur',
            date: 'June 2024',
            verified: true
          }
        ]);
      }
    }
  }, [vehicle, reviewsList]);

  const [newReviewName, setNewReviewName] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewComment, setNewReviewComment] = useState('');
  const [newReviewLocation, setNewReviewLocation] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [activeMetric, setActiveMetric] = useState(2);

  useEffect(() => {
    if (activeTab === 'reviews') {
      const interval = setInterval(() => {
        setActiveMetric(prev => (prev + 1) % 6);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [activeTab]);

  const handleAddReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!vehicle || !newReviewName.trim() || !newReviewComment.trim()) return;

    const newReview = {
      name: newReviewName,
      avatar: newReviewName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2),
      rating: newReviewRating,
      vehicle: `${vehicle.brand} ${vehicle.model}`,
      comment: newReviewComment,
      location: newReviewLocation.trim() || 'Ranchi',
      date: 'Today',
      verified: true
    };

    const { error } = await supabase
      .from('reviews')
      .insert([newReview]);

    if (!error) {
      setLocalReviews(prev => [{ id: `ur-${vehicle.id}-${Date.now()}`, ...newReview }, ...prev]);
      setNewReviewName('');
      setNewReviewRating(5);
      setNewReviewComment('');
      setNewReviewLocation('');
      setReviewSubmitted(true);
      setTimeout(() => {
        setReviewSubmitted(false);
        setShowAddForm(false);
      }, 2500);
    } else {
      console.error('Error submitting review:', error);
      alert('Failed to submit review. Please try again.');
    }
  };

  const [selectedFuelFilter, setSelectedFuelFilter] = useState('All');
  const [selectedTransFilter, setSelectedTransFilter] = useState('All');

  const [selectedCompareVariantIds, setSelectedCompareVariantIds] = useState<string[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [brochureDownloading, setBrochureDownloading] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});

  const toggleCompareVariant = (id: string) => {
    setSelectedCompareVariantIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(x => x !== id);
      } else {
        if (prev.length >= 3) {
          alert('You can compare up to 3 variants at a time.');
          return prev;
        }
        return [...prev, id];
      }
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center text-muted">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary mx-auto mb-4"></div>
          Loading vehicle details...
        </div>
      </div>
    );
  }

  if (!vehicle) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h2 className="font-heading font-bold text-dark text-2xl mb-3">Vehicle Not Found</h2>
          <Link to="/cars" className="btn-primary">Browse All Vehicles</Link>
        </div>
      </div>
    );
  }

  const variant = vehicle.variants[activeVariant] || vehicle.variants[0] || {
    id: 'default',
    name: 'Standard',
    price: vehicle.startingPrice || 0,
    fuelType: vehicle.fuelTypes[0] || 'Petrol',
    transmission: vehicle.transmissions[0] || 'Manual'
  };
  const categoryRelated = vehiclesList.filter(v => v.category === vehicle.category && v.id !== vehicle.id);
  const otherRelated = vehiclesList.filter(v => v.category !== vehicle.category && v.id !== vehicle.id);
  const related = [...categoryRelated, ...otherRelated].slice(0, 6);

  const popularComparisons = related.slice(0, 5).map(v => ({
    id: `${vehicle.id}-vs-${v.id}`,
    v1: vehicle.id,
    v2: v.id,
    title: `${vehicle.model} vs ${v.model}`,
    car1: {
      brand: vehicle.brand,
      model: vehicle.model,
      price: formatPriceShort(vehicle.startingPrice),
      image: vehicle.thumbnailUrl
    },
    car2: {
      brand: v.brand,
      model: v.model,
      price: formatPriceShort(v.startingPrice),
      image: v.thumbnailUrl
    }
  }));

  const tabs = ['overview', 'specs', 'variants', 'colors', 'dealers', 'reviews'];

  const getColorHex = (name: string): string => {
    const nameLower = name.toLowerCase();
    if (nameLower.includes('white')) return '#FFFFFF';
    if (nameLower.includes('black') || nameLower.includes('abyss') || nameLower.includes('dark')) return '#1A1A1A';
    if (nameLower.includes('grey') || nameLower.includes('gray') || nameLower.includes('titan') || nameLower.includes('granite')) return '#808080';
    if (nameLower.includes('red') || nameLower.includes('rage') || nameLower.includes('fire')) return '#EF4444';
    if (nameLower.includes('blue') || nameLower.includes('nexa') || nameLower.includes('cosmic') || nameLower.includes('teal')) return '#3B82F6';
    if (nameLower.includes('silver')) return '#D1D5DB';
    if (nameLower.includes('brown') || nameLower.includes('khaki') || nameLower.includes('gold') || nameLower.includes('beige')) return '#B45309';
    if (nameLower.includes('orange') || nameLower.includes('fury')) return '#F97316';
    if (nameLower.includes('green') || nameLower.includes('forest')) return '#10B981';
    if (nameLower.includes('purple')) return '#8B5CF6';
    return '#E5E7EB';
  };

  const vehicleColors = vehicle
    ? (vehicleColorsData[vehicle.id] || (vehicle.colors || []).map((colName, idx) => ({
        name: colName,
        hex: getColorHex(colName),
        image: vehicle.images[idx % vehicle.images.length] || vehicle.thumbnailUrl
      })))
    : [];

  const availableFuels = ['All', ...Array.from(new Set(vehicle.variants.map(v => v.fuelType)))];
  const availableTransmissions = ['All', ...Array.from(new Set(vehicle.variants.map(v => v.transmission)))];

  const fuelCounts = (() => {
    const counts: Record<string, number> = { All: vehicle.variants.length };
    vehicle.variants.forEach(v => {
      counts[v.fuelType] = (counts[v.fuelType] || 0) + 1;
    });
    return counts;
  })();

  const transmissionCounts = (() => {
    const counts: Record<string, number> = { All: vehicle.variants.length };
    vehicle.variants.forEach(v => {
      counts[v.transmission] = (counts[v.transmission] || 0) + 1;
    });
    return counts;
  })();

  const filteredVariants = vehicle.variants.filter(v => {
    const fuelMatch = selectedFuelFilter === 'All' || v.fuelType === selectedFuelFilter;
    const transMatch = selectedTransFilter === 'All' || v.transmission === selectedTransFilter;
    return fuelMatch && transMatch;
  });

  const groupedVariants = (() => {
    const groups: Record<string, typeof filteredVariants> = {};
    filteredVariants.forEach(v => {
      const parts = v.name.split(' ');
      let groupKey = parts[0];
      if (parts[1] && (parts[1] === '(S)' || parts[1] === 'L' || parts[1] === 'T')) {
        groupKey = `${parts[0]} ${parts[1]}`;
      }
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(v);
    });
    return groups;
  })();

  const sortedGroupKeys = (() => {
    return Object.keys(groupedVariants).sort((a, b) => {
      const minA = Math.min(...groupedVariants[a].map(v => v.price));
      const minB = Math.min(...groupedVariants[b].map(v => v.price));
      return minA - minB;
    });
  })();

  const absoluteMinPrice = (() => {
    if (!vehicle.variants || vehicle.variants.length === 0) return 0;
    return Math.min(...vehicle.variants.map(v => v.price));
  })();

  const absoluteMaxPrice = (() => {
    if (!vehicle.variants || vehicle.variants.length === 0) return 0;
    return Math.max(...vehicle.variants.map(v => v.price));
  })();

  const handleVariantClick = (variantId: string) => {
    const origIdx = vehicle.variants.findIndex(v => v.id === variantId);
    if (origIdx !== -1) {
      setActiveVariant(origIdx);
    }
  };

  const emi = (variant.price * 0.009).toFixed(0);
  const categoryPath = vehicle.category === 'ev' ? '/ev' : `/${vehicle.category}s`;

  return (
    <div className="min-h-screen bg-surface pt-24 md:pt-32 pb-24 md:pb-12">
      <div className="container-fluid py-4">
        <div className="flex items-center gap-2 text-sm text-muted">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to={categoryPath} className="hover:text-primary capitalize">{vehicle.category === 'ev' ? 'EV' : `${vehicle.category}s`}</Link>
          <span>/</span>
          <span className="text-dark">{vehicle.brand} {vehicle.model}</span>
        </div>
      </div>

      <div className="md:hidden container-fluid mb-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 mb-0.5">
            {BRAND_LOGOS_OVERRIDE[vehicle.brand] && (
              <img
                src={BRAND_LOGOS_OVERRIDE[vehicle.brand]}
                alt={vehicle.brand}
                className="h-6 w-auto object-contain bg-white rounded-md p-0.5 border border-border shadow-2xs"
              />
            )}
            <p className="text-xs font-bold text-primary uppercase tracking-wider">{vehicle.brand}</p>
          </div>
          <h1 className="font-heading font-bold text-dark text-xl mb-1">{vehicle.model}</h1>
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-heading font-extrabold text-dark">{formatPrice(variant.price)}</span>
              <span className="text-[10px] text-muted uppercase font-semibold">Ex-Showroom</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs">
              <div className="flex items-center gap-0.5 text-warning">
                <Star size={12} className="fill-warning" />
                <span className="font-bold text-dark">{vehicle.rating}</span>
              </div>
              <span className="text-muted">({vehicle.reviewCount} reviews)</span>
            </div>
          </div>
          <p className="text-[11px] text-muted mt-0.5">
            {variant.name} · {variant.fuelType} · {variant.transmission}
          </p>
        </div>
      </div>

      <div className="container-fluid min-w-0 max-w-full">
        <div className="grid md:grid-cols-3 gap-6 min-w-0">
          <div className="md:col-span-2 min-w-0 max-w-full">
            <div className="bg-gray-100 rounded-2xl border border-border overflow-hidden mb-6">
              <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                <img
                  src={vehicle.images[activeImage] || vehicle.thumbnailUrl}
                  alt={`${vehicle.brand} ${vehicle.model}`}
                  className="w-full h-full object-contain bg-gray-100 scale-125 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = vehicle.thumbnailUrl;
                  }}
                />
                {vehicle.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setActiveImage(i => Math.max(0, i - 1))}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-card hover:bg-white transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={() => setActiveImage(i => Math.min(vehicle.images.length - 1, i + 1))}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-card hover:bg-white transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
                <div className="absolute top-4 left-4 flex gap-2">
                  {vehicle.isNew && <span className="bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full">New Launch</span>}
                  {vehicle.isBestSeller && <span className="bg-dark text-white text-xs font-semibold px-3 py-1.5 rounded-full">Best Seller</span>}
                  {vehicle.isEV && <span className="bg-success text-white text-xs font-semibold px-3 py-1.5 rounded-full">Electric</span>}
                </div>
              </div>
              {vehicle.images.length > 1 && (
                <div className="flex gap-2 p-3">
                  {vehicle.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`w-14 h-10 sm:w-20 sm:h-14 rounded-lg overflow-hidden border-2 transition-all ${
                        activeImage === i ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = vehicle.thumbnailUrl;
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sticky Navigation Bar */}
            <div ref={tabsRef} className="sticky top-20 lg:top-[116px] z-30 mb-6 max-w-full">
              <div className="flex overflow-x-auto scrollbar-none no-scrollbar whitespace-nowrap border border-border bg-white rounded-2xl shadow-md p-1.5 gap-1.5">
                {tabs.map(tab => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      const targetId = `${tab}-section`;
                      const targetEl = document.getElementById(targetId);
                      if (targetEl) {
                        const navbarHeight = window.innerWidth >= 1024 ? 130 : 90;
                        const yOffset = -navbarHeight;
                        const y = targetEl.getBoundingClientRect().top + window.scrollY + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                      }
                    }}
                    className={`shrink-0 whitespace-nowrap px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-bold capitalize transition-all rounded-xl ${
                      activeTab === tab
                        ? 'bg-primary text-white shadow-sm'
                        : 'text-dark-600 hover:text-primary hover:bg-primary-50/50'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Overview Section Card */}
            <div id="overview-section" className="bg-white rounded-2xl border border-border p-4 sm:p-6 shadow-sm mb-6">
              <h3 className="font-heading font-bold text-dark text-lg sm:text-xl mb-4">About the {vehicle.model}</h3>
              <p className="text-dark-600 text-sm leading-relaxed mb-6">
                {vehicle.description || `The ${vehicle.brand} ${vehicle.model} is a popular vehicle that combines performance, comfort, and value in the ${vehicle.category} segment.`}
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                {[
                  { icon: Fuel, label: 'Fuel Type', value: vehicle.fuelTypes.join(' / ') },
                  { icon: Gauge, label: 'Mileage', value: vehicle.mileage },
                  ...(vehicle.seatingCapacity ? [{ icon: Users, label: 'Seating', value: `${vehicle.seatingCapacity} Seats` }] : []),
                  ...(vehicle.engineCC ? [{ icon: Info, label: 'Engine', value: `${vehicle.engineCC} cc` }] : []),
                  ...(vehicle.powerBHP ? [{ icon: Info, label: 'Power', value: `${vehicle.powerBHP} bhp` }] : []),
                  ...(vehicle.safetyRating ? [{ icon: Shield, label: 'Safety Rating', value: `${vehicle.safetyRating}★ (GNCAP)` }] : []),
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3 p-3 bg-surface rounded-xl">
                    <div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center">
                      <Icon size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted">{label}</p>
                      <p className="text-sm font-semibold text-dark">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h4 className="font-heading font-semibold text-dark mb-3">Key Features</h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                {vehicle.features.map(feat => (
                  <div key={feat} className="flex items-start gap-2 text-xs sm:text-sm text-dark-600">
                    <Check size={14} className="text-success flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-5 mt-6">
                <div className="bg-[#F1F9F1] p-5 rounded-2xl flex gap-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2656 1.67822L10.3564 1.69775L10.4736 1.73584C10.6924 1.80617 10.856 1.96276 10.9326 2.15186L10.96 2.23486C11.06 2.6204 11.0886 3.02056 11.0449 3.41553L11.0215 3.58447L10.4854 6.85693C10.3584 7.63187 10.9558 8.3374 11.7422 8.3374H15.9346C16.3683 8.3374 16.7054 8.70482 16.6807 9.12842L16.6709 9.21436L16.0996 12.5151C15.6889 14.89 13.5479 16.6587 11.0068 16.6587H7.24512C6.90638 16.6586 6.61594 16.4312 6.52637 16.1147L6.50098 15.9741L5.84375 8.37354C5.82572 8.16356 5.89707 7.95754 6.03711 7.8042L6.10059 7.7417L7.26562 6.73877C7.74672 6.32419 8.25966 5.84062 8.64258 5.23584L8.79883 4.96826C8.98794 4.61419 9.14495 4.24426 9.26855 3.86279L9.38086 3.47803L9.76562 1.99365C9.78729 1.91036 9.83822 1.83239 9.91309 1.77393L9.99609 1.72217C10.0792 1.68213 10.1735 1.66711 10.2656 1.67822Z" fill="#41A248" stroke="#41A248" strokeWidth={1.2} />
                  </svg>
                  <div>
                    <p className="text-[#15803D] font-bold text-base mb-3">Pros</p>
                    <ul className="space-y-2 list-none pl-0">
                      {(vehicle.pros && vehicle.pros.length > 0 ? vehicle.pros : [
                        'Advanced features and comfortable interior space.',
                        'Refined engine performance and smooth power delivery.',
                        'Excellent high-speed highway stability and ride comfort.',
                        'Robust standard safety package and driver assistance tools.'
                      ]).map((pro, index) => (
                        <li key={index} className="flex gap-2 items-start">
                          <span className="mt-1 w-2 h-2 rounded-full inline-block shrink-0 bg-[#15803D]"></span>
                          <span className="text-[#1C1C1C] text-sm font-normal leading-relaxed">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-[#FFF7F3] p-5 rounded-2xl flex gap-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.0508 16.6548L10.1367 16.6362L10.252 16.5991C10.4615 16.5317 10.6182 16.3822 10.6914 16.2017L10.7168 16.1226C10.814 15.748 10.8422 15.3588 10.7998 14.9751L10.7773 14.8101L10.2539 11.6157C10.1285 10.8505 10.7186 10.1538 11.4951 10.1538H15.5879C16.0031 10.1536 16.3258 9.80166 16.3018 9.396L16.292 9.31494L15.7344 6.09131C15.3345 3.78026 13.2503 2.05908 10.7764 2.05908H7.10449C6.78053 2.0591 6.50302 2.27604 6.41699 2.57861L6.3916 2.71338L5.75098 10.1333C5.73358 10.3345 5.80135 10.5323 5.93555 10.6792L5.99707 10.7388L7.13281 11.7183C7.60292 12.1234 8.10632 12.5962 8.48145 13.189L8.63379 13.4507C8.81875 13.797 8.97285 14.1586 9.09375 14.5317L9.20313 14.9087L9.5791 16.3569C9.59943 16.4353 9.64687 16.5097 9.71777 16.5649L9.79688 16.6128C9.87526 16.6505 9.96379 16.6652 10.0508 16.6548Z" fill="#F25900" stroke="#F25900" strokeWidth={1.2} />
                  </svg>
                  <div>
                    <p className="text-[#EA580C] font-bold text-base mb-3">Cons</p>
                    <ul className="space-y-2 list-none pl-0">
                      {(vehicle.cons && vehicle.cons.length > 0 ? vehicle.cons : [
                        'Lower-grade plastics used in lower cabin areas.',
                        'Waiting period can be high for popular color/variant options.',
                        'Touch controls on dashboard can be slightly tricky to use on the go.'
                      ]).map((con, index) => (
                        <li key={index} className="flex gap-2 items-start">
                          <span className="mt-1 w-2 h-2 rounded-full inline-block shrink-0 bg-[#EA580C]"></span>
                          <span className="text-[#1C1C1C] text-sm font-normal leading-relaxed">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Specs Section Card */}
            <div id="specs-section" className="bg-white rounded-2xl border border-border p-4 sm:p-6 shadow-sm mb-6">
              <h3 className="font-heading font-bold text-dark text-lg sm:text-xl mb-4">{vehicle.brand} {vehicle.model} Key Specs</h3>
              <div className="space-y-0 divide-y divide-border">
                {[
                  { label: 'Engine Displacement', value: vehicle.engineCC ? `${vehicle.engineCC} cc` : 'N/A' },
                  { label: 'Max Power', value: vehicle.powerBHP ? `${vehicle.powerBHP} bhp` : 'N/A' },
                  { label: 'Max Torque', value: vehicle.torqueNm ? `${vehicle.torqueNm} Nm` : 'N/A' },
                  { label: 'Fuel Type', value: vehicle.fuelTypes.join(', ') },
                  { label: 'Transmission', value: vehicle.transmissions.join(', ') },
                  { label: 'Mileage', value: vehicle.mileage },
                  ...(vehicle.seatingCapacity ? [{ label: 'Seating Capacity', value: `${vehicle.seatingCapacity} Persons` }] : []),
                  ...(vehicle.bootSpaceL ? [{ label: 'Boot Space', value: `${vehicle.bootSpaceL} litres` }] : []),
                  ...(vehicle.safetyRating ? [{ label: 'Safety Rating (GNCAP)', value: `${vehicle.safetyRating} Stars` }] : []),
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between py-3.5 text-sm">
                    <span className="text-muted">{label}</span>
                    <span className="font-medium text-dark">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Standalone Variants Section */}
            <div id="variants-section" className="flex flex-col w-full items-start py-6 px-4 sm:px-6 bg-white border border-border shadow-sm rounded-2xl mb-6 mt-6 max-w-full overflow-hidden">
              <h2 className="text-dark text-xl lg:text-2xl font-bold mb-4">
                {vehicle.brand} {vehicle.model} Variants
              </h2>
              <div className="w-full space-y-4">
                {/* Filters block */}
                <div className="p-4 bg-surface rounded-2xl border border-border space-y-3">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold text-muted w-24">Fuel Option:</span>
                      <div className="flex flex-wrap gap-1.5 flex-1">
                        {availableFuels.map(fuel => (
                          <button
                            key={fuel}
                            type="button"
                            onClick={() => setSelectedFuelFilter(fuel)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                              selectedFuelFilter === fuel
                                ? 'bg-primary border-primary text-white shadow-sm'
                                : 'bg-white border-border text-dark hover:border-primary/50'
                            }`}
                          >
                            {fuel} {fuelCounts[fuel] !== undefined ? `(${fuelCounts[fuel]})` : ''}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold text-muted w-24">Transmission:</span>
                      <div className="flex flex-wrap gap-1.5 flex-1">
                        {availableTransmissions.map(trans => (
                          <button
                            key={trans}
                            type="button"
                            onClick={() => setSelectedTransFilter(trans)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                              selectedTransFilter === trans
                                ? 'bg-primary border-primary text-white shadow-sm'
                                : 'bg-white border-border text-dark hover:border-primary/50'
                            }`}
                          >
                            {trans} {transmissionCounts[trans] !== undefined ? `(${transmissionCounts[trans]})` : ''}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Accordion list */}
                <div className="space-y-4">
                  {sortedGroupKeys.length === 0 ? (
                    <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-border text-muted text-sm">
                      No variants match your selected filter criteria.
                    </div>
                  ) : (
                    sortedGroupKeys.map(groupKey => {
                      const groupVariants = groupedVariants[groupKey] || [];
                      const minPrice = Math.min(...groupVariants.map(g => g.price));
                      const maxPrice = Math.max(...groupVariants.map(g => g.price));
                      const isExpanded = !!expandedGroups[groupKey];
                      const groupFeatures = Array.from(new Set(groupVariants.flatMap(gv => gv.features || []))).slice(0, 4);

                      return (
                        <div key={groupKey} className="border border-border rounded-xl overflow-hidden bg-white shadow-sm hover:border-dark-300 transition-all">
                          <div
                            onClick={() => setExpandedGroups(prev => ({ ...prev, [groupKey]: !prev[groupKey] }))}
                            className="p-4 cursor-pointer hover:bg-surface/10 select-none flex flex-col md:flex-row md:items-center justify-between gap-4"
                          >
                            <div className="space-y-2 flex-1">
                              <div className="flex items-center gap-2">
                                <h3 className="font-heading font-semibold text-dark text-base md:text-lg">
                                  {vehicle.brand} {vehicle.model} {groupKey}
                                </h3>
                              </div>
                              {groupFeatures.length > 0 && (
                                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
                                  {groupFeatures.map((feat, i) => (
                                    <span key={i} className="flex items-center gap-1">
                                      <span className="w-1.5 h-1.5 bg-success rounded-full"></span>
                                      {feat}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>

                            <div className="flex items-center justify-between md:justify-end gap-4 shrink-0">
                              <div className="text-left md:text-right">
                                <p className="text-[10px] text-muted uppercase tracking-wider font-semibold">Ex-Showroom Price</p>
                                <p className="font-heading font-bold text-dark text-base md:text-lg">
                                  {minPrice === maxPrice
                                    ? formatPrice(minPrice)
                                    : `${formatPriceShort(minPrice)} - ${formatPriceShort(maxPrice)}`}
                                </p>
                              </div>
                              <div className="flex items-center gap-2" onClick={e => e.stopPropagation()}>
                                <button
                                  type="button"
                                  className="flex items-center gap-1 text-xs font-semibold text-primary px-3 py-2 rounded-lg bg-primary-50/50 hover:bg-primary-50 transition-colors"
                                  onClick={() => setExpandedGroups(prev => ({ ...prev, [groupKey]: !prev[groupKey] }))}
                                >
                                  <span>View {groupVariants.length} Variants</span>
                                  {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                                </button>
                                <button
                                  type="button"
                                  onClick={() => {
                                    setOfferPurpose(`View Offers for ${groupKey}`);
                                    setOfferModalOpen(true);
                                  }}
                                  className="hidden sm:block text-xs font-semibold bg-white border border-primary text-primary hover:bg-primary-50 px-3 py-2 rounded-lg transition-colors"
                                >
                                  View Offers
                                </button>
                              </div>
                            </div>
                          </div>

                          {isExpanded && (
                            <div className="border-t border-border bg-surface/10 divide-y divide-border/60">
                              {groupVariants.map(v => {
                                const isSelected = vehicle.variants[activeVariant]?.id === v.id;
                                const onRoadPrice = Math.round(v.price * multiplier);
                                const isBase = v.price === absoluteMinPrice;
                                const isTop = v.price === absoluteMaxPrice;

                                return (
                                  <div
                                    key={v.id}
                                    onClick={() => handleVariantClick(v.id)}
                                    className={`p-4 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-surface/30 ${
                                      isSelected ? 'bg-primary-50/20' : ''
                                    }`}
                                  >
                                    <div className="space-y-2 flex-1">
                                      <div className="flex flex-wrap items-center gap-2">
                                        {isBase && (
                                          <span className="text-[9px] font-bold bg-secondary text-dark px-2 py-0.5 rounded leading-snug">Base Variant</span>
                                        )}
                                        {isTop && (
                                          <span className="text-[9px] font-bold bg-dark text-white px-2 py-0.5 rounded leading-snug">Top Variant</span>
                                        )}
                                        <span className="text-sm font-semibold text-dark hover:text-primary transition-colors underline decoration-dotted underline-offset-4">
                                          {v.name}
                                        </span>
                                      </div>
                                      <p className="text-xs text-muted">
                                        {v.fuelType} · {v.transmission} {v.mileage ? `· ${v.mileage}` : ''}
                                      </p>

                                      {/* Additional features box */}
                                      {v.additionalFeaturesOverBase && v.additionalFeaturesOverBase.length > 0 && (
                                        <div className="mt-2 bg-white rounded-lg border border-border/80 p-2 text-[11px] text-muted flex items-start gap-1 max-w-xl">
                                          <span className="text-success font-bold shrink-0">+</span>
                                          <span>
                                            <strong>Additional features over preceding variant:</strong> {v.additionalFeaturesOverBase.join(', ')}
                                          </span>
                                        </div>
                                      )}
                                    </div>

                                    <div className="flex flex-wrap md:flex-nowrap items-center justify-between md:justify-end gap-6">
                                      <div className="text-left md:text-right shrink-0">
                                        <p className="text-[10px] text-muted">Ex-Showroom Price</p>
                                        <p className="font-heading font-bold text-dark text-sm md:text-base mt-0.5">
                                          {formatPrice(v.price)}
                                        </p>
                                        <p className="text-[10px] text-success font-medium">
                                          Est. On-Road: {formatPrice(onRoadPrice)} in{' '}
                                          <button
                                            type="button"
                                            onClick={e => {
                                              e.stopPropagation();
                                              openPincodeModal();
                                            }}
                                            className="underline hover:text-primary font-semibold"
                                          >
                                            {selectedCity}
                                          </button>
                                        </p>
                                      </div>

                                      <div className="flex items-center gap-4 shrink-0" onClick={e => e.stopPropagation()}>
                                        <label className="flex items-center gap-1.5 cursor-pointer select-none py-1">
                                          <input
                                            type="checkbox"
                                            checked={selectedCompareVariantIds.includes(v.id)}
                                            onChange={() => toggleCompareVariant(v.id)}
                                            className="w-4 h-4 rounded text-primary focus:ring-primary border-border cursor-pointer animate-none"
                                          />
                                          <span className="text-xs text-muted font-medium">Compare</span>
                                        </label>
                                        <button
                                          type="button"
                                          onClick={() => {
                                            setOfferPurpose(`View Offers for ${v.name}`);
                                            setOfferModalOpen(true);
                                          }}
                                          className="text-xs font-semibold text-primary underline decoration-dotted hover:text-primary/80"
                                        >
                                          View Offers
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>

            {/* Standalone Colors Section */}
            {vehicleColors.length > 0 && (
              <div id="colors-section" className="flex flex-col w-full items-start py-6 px-4 sm:px-6 bg-white border border-border shadow-sm rounded-2xl mb-6 mt-6 max-w-full overflow-hidden">
                <h2 className="text-dark text-xl lg:text-2xl font-bold mb-4">
                  {vehicle.brand} {vehicle.model} Colors
                </h2>
                <div className="relative w-full max-w-full">
                  <div className="flex items-center justify-center relative">
                    <div className="absolute top-1/2 -translate-y-1/2 z-10 -left-3 lg:-left-4 left-2">
                      <button 
                        type="button" 
                        onClick={() => setSelectedColorIdx(prev => (prev === 0 ? vehicleColors.length - 1 : prev - 1))}
                        className="w-8 h-10 rounded-full flex items-center justify-center transition-all border backdrop-blur-sm bg-white/70 border-primary/20 text-gray-800 hover:bg-white cursor-pointer shadow-sm animate-fade-in" 
                        aria-label="Previous"
                      >
                        <ChevronLeft size={20} />
                      </button>
                    </div>

                    <div className="relative w-full overflow-hidden rounded-xl aspect-[16/10] sm:aspect-[16/9]">
                      <div 
                        className="flex h-full transition-transform duration-350 ease-in-out" 
                        style={{ transform: `translateX(-${selectedColorIdx * 100}%)` }}
                      >
                        {vehicleColors.map((color, idx) => (
                          <div key={idx} className="w-full h-full flex-shrink-0 flex items-center justify-center p-2 sm:p-4 bg-gray-100">
                            <img 
                              src={color.image} 
                              alt={`${vehicle.brand} ${vehicle.model} in ${color.name}`}
                              className="pointer-events-none select-none max-w-full max-h-full object-contain scale-125 transition-transform duration-300"
                              onError={(e) => {
                                e.currentTarget.src = 'https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=600';
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="absolute top-1/2 -translate-y-1/2 z-10 -right-3 lg:-right-4 right-2">
                      <button 
                        type="button" 
                        onClick={() => setSelectedColorIdx(prev => (prev === vehicleColors.length - 1 ? 0 : prev + 1))}
                        className="w-8 h-10 rounded-full flex items-center justify-center transition-all border backdrop-blur-sm bg-white/70 border-primary/20 text-gray-800 hover:bg-white cursor-pointer shadow-sm animate-fade-in" 
                        aria-label="Next"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>

                  <div className="w-full px-4 pt-4 py-2 relative z-10">
                    <div className="flex flex-col gap-3 w-full items-center">
                      <div className="flex gap-1.5 items-center justify-center overflow-x-auto scrollbar-none pb-2 px-4 pt-1 max-w-full flex-wrap">
                        {vehicleColors.map((color, idx) => (
                          <button 
                            key={idx}
                            onClick={() => setSelectedColorIdx(idx)}
                            className={`w-7 h-7 rounded-full shrink-0 transition-all border-2 ${
                              selectedColorIdx === idx 
                                ? 'border-white shadow-lg scale-110 ring-2 ring-primary' 
                                : 'border-gray-200 hover:scale-105'
                            }`} 
                            aria-label={color.name}
                            title={color.name}
                            style={{ backgroundColor: color.hex }}
                          />
                        ))}
                      </div>
                      <p className="text-base text-dark text-center font-semibold mt-1">
                        {vehicleColors[selectedColorIdx]?.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Standalone Dealers Section */}
            <div id="dealers-section" className="bg-white rounded-2xl border border-border p-4 sm:p-6 shadow-sm mb-6 mt-6">
              <h2 className="text-dark text-xl lg:text-2xl font-bold mb-2">
                {vehicle.brand} {vehicle.model} Authorized Dealers
              </h2>
              <p className="text-sm text-muted mb-4">Comparing prices from authorized dealerships near you</p>
              <div className="space-y-4">
                {vehicle.dealerPrices.map((dp, i) => (
                  <div
                    key={dp.dealerId}
                    className={`p-4 rounded-xl border ${i === 0 ? 'border-primary bg-primary-50' : 'border-border'}`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          {i === 0 && <span className="bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">BEST DEAL</span>}
                          <p className="font-semibold text-dark">{dp.dealerName}</p>
                        </div>
                        <p className="text-sm text-muted flex items-center gap-1">
                          <MapPin size={12} /> {dp.location}
                          <Star size={12} className="ml-1 text-warning fill-warning" /> {dp.rating}
                        </p>
                      </div>
                      <div className="text-right">
                         <p className="font-heading font-bold text-base sm:text-xl text-dark">{formatPriceShort(dp.price)}</p>
                        <p className="text-sm text-success font-medium">Save {formatPriceShort(dp.discount)}</p>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <button
                        onClick={handleJulyOfferClick}
                        className="flex-1 h-9 bg-white border border-border rounded-lg text-sm font-medium text-dark hover:border-primary hover:text-primary transition-colors"
                      >
                        Get Best Quote
                      </button>
                      <Link
                        to={`/test-drive?vehicle=${vehicle?.id}`}
                        className="flex-1 h-9 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary-600 transition-colors flex items-center justify-center"
                      >
                        Book Test Drive
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Standalone Reviews Section */}
            <div id="reviews-section" className="bg-white rounded-2xl border border-border p-4 sm:p-6 shadow-sm mb-6 mt-6">
              <div className="flex flex-col w-full items-start gap-4 mb-6">
                <h2 className="text-dark text-xl lg:text-2xl font-bold">
                  {vehicle?.brand} {vehicle?.model} Owner Reviews
                </h2>
                <div className="w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 mb-4 p-4 lg:items-center bg-white rounded-2xl border border-border shadow-sm">
                    <div className="flex items-center justify-start lg:col-span-3">
                      <div className="space-y-1">
                        <span className="text-3xl font-bold text-dark">{vehicle?.rating}</span>
                        <div className="pb-1">
                          <div className="flex items-center gap-1 leading-tight">
                            <div className="flex items-center gap-0.5 leading-tight">
                              {[0, 1, 2, 3, 4].map((index) => {
                                const diff = (vehicle?.rating || 0) - index;
                                let fillPercentage = 0;
                                if (diff >= 1) {
                                  fillPercentage = 100;
                                } else if (diff > 0) {
                                  fillPercentage = diff * 100;
                                }
                                return (
                                  <div key={index} className="relative inline-block w-[18px] h-[18px] shrink-0">
                                    <Star size={18} className="text-gray-300 fill-gray-300 leading-none shrink-0" />
                                    <div className="absolute top-0 left-0 overflow-hidden h-full" style={{ width: `${fillPercentage}%` }}>
                                      <Star size={18} className="text-primary fill-primary leading-none shrink-0" />
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-muted">
                          Based on {vehicle?.reviewCount.toLocaleString()} Ratings, {localReviews.length} Reviews
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5 lg:col-span-3">
                      {[5, 4, 3, 2, 1].map((ratingVal) => {
                        const matchedReviews = localReviews.filter(r => Math.round(r.rating) === ratingVal);
                        const pct = localReviews.length 
                          ? (matchedReviews.length / localReviews.length) * 100 
                          : (ratingVal === 5 ? 50 : ratingVal === 4 ? 12.5 : ratingVal === 3 ? 37.5 : 0);
                        const countVal = localReviews.length
                          ? matchedReviews.length
                          : (ratingVal === 5 ? 4 : ratingVal === 4 ? 1 : ratingVal === 3 ? 3 : 0);

                        return (
                          <div key={ratingVal} className="flex items-center gap-2">
                            <div className="flex items-center justify-end gap-1 w-7 flex-shrink-0">
                              <span className="text-xs text-right text-dark font-medium">{ratingVal}</span>
                              <Star size={12} className="text-primary fill-primary leading-none shrink-0" />
                            </div>
                            <div className="flex-1 h-1 bg-primary/10 rounded-full overflow-hidden min-w-0">
                              <div className="h-full rounded-full bg-primary" style={{ width: `${pct}%` }}></div>
                            </div>
                            <span className="text-xs text-muted text-right w-8 flex-shrink-0">{countVal}</span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="overflow-hidden mb-0 col-span-1 md:grid-cols-2 lg:col-span-6 w-full max-w-full relative">
                      <div 
                        className="flex items-end gap-2 h-36" 
                        style={{ 
                          transform: `translateX(calc(50% - 48px - ${(6 + activeMetric) * 104}px))`, 
                          transition: 'transform 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)' 
                        }}
                      >
                        {(() => {
                          const baseMetrics = [
                            { name: 'Comfort', val: Math.min(5.0, (vehicle?.rating || 0) + 0.3).toFixed(1), pct: Math.round(Math.min(100, ((vehicle?.rating || 0) + 0.3) * 20)) },
                            { name: 'Maintenance Cost', val: Math.min(5.0, (vehicle?.rating || 0) + 0.1).toFixed(1), pct: Math.round(Math.min(100, ((vehicle?.rating || 0) + 0.1) * 20)) },
                            { name: 'Design', val: Math.min(5.0, (vehicle?.rating || 0) + 0.1).toFixed(1), pct: Math.round(Math.min(100, ((vehicle?.rating || 0) + 0.1) * 20)) },
                            { name: 'Performance', val: (vehicle?.rating || 0).toFixed(1), pct: Math.round(Math.min(100, (vehicle?.rating || 0) * 20)) },
                            { name: 'Features', val: Math.max(1.0, (vehicle?.rating || 0) - 0.1).toFixed(1), pct: Math.round(Math.min(100, ((vehicle?.rating || 0) - 0.1) * 20)) },
                            { name: 'Safety', val: Math.max(1.0, (vehicle?.rating || 0) - 0.2).toFixed(1), pct: Math.round(Math.min(100, ((vehicle?.rating || 0) - 0.2) * 20)) },
                          ];
                          const repeatedMetrics = [...baseMetrics, ...baseMetrics, ...baseMetrics];

                          return repeatedMetrics.map((metric, idx) => {
                            const targetK = 6 + activeMetric;
                            const distance = Math.abs(idx - targetK);
                            const opacity = distance === 0 ? 1 : distance === 1 ? 0.7 : 0.5;
                            return (
                              <div 
                                key={idx} 
                                className="flex flex-col items-center gap-2 w-24 flex-shrink-0 cursor-pointer"
                                onClick={() => setActiveMetric(idx % 6)}
                              >
                                <div className="w-full flex items-end h-32">
                                  <div 
                                    className="w-full bg-secondary/85 rounded-t-lg flex flex-col items-center justify-start pt-2 border-t-2 border-primary/20" 
                                    style={{ 
                                      height: `${metric.pct}%`, 
                                      opacity: opacity, 
                                      transition: 'all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)' 
                                    }}
                                  >
                                    <div className="flex items-center gap-1">
                                      <Star size={12} className="text-dark fill-dark leading-none shrink-0" />
                                      <span className="text-xs font-semibold text-dark">{metric.val}</span>
                                    </div>
                                    <span className="text-[9px] font-medium text-dark mt-1 text-center px-1 leading-tight">
                                      {metric.name}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            );
                          });
                        })()}
                      </div>
                      <div className="hidden lg:block h-full w-10 absolute top-0 left-0 bg-gradient-to-r from-white to-white/0 pointer-events-none"></div>
                      <div className="hidden lg:block h-full w-10 absolute top-0 right-0 bg-gradient-to-l from-white to-white/0 pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-border pb-4">
                <h4 className="font-heading font-semibold text-dark text-base flex items-center gap-2">
                  <MessageSquare size={18} className="text-primary" />
                  Reviews ({localReviews.length})
                </h4>
                <button
                  onClick={() => setShowAddForm(prev => !prev)}
                  className="btn-secondary h-10 px-4 text-sm flex items-center gap-1.5"
                >
                  <Plus size={16} />
                  Write a Review
                </button>
              </div>

              {showAddForm && (
                <form onSubmit={handleAddReview} className="p-5 bg-surface rounded-2xl border border-primary/20 space-y-4 animate-scale-in">
                  <h4 className="font-heading font-semibold text-dark text-sm">Share your experience with {vehicle.brand} {vehicle.model}</h4>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted">Your Rating:</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(s => (
                        <button
                          type="button"
                          key={s}
                          onClick={() => setNewReviewRating(s)}
                          className="focus:outline-none hover:scale-110 transition-transform"
                        >
                          <Star
                            size={24}
                            className={s <= newReviewRating ? 'text-warning fill-warning' : 'text-border'}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-dark mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={newReviewName}
                        onChange={e => setNewReviewName(e.target.value)}
                        placeholder="e.g. Rajesh Kumar"
                        className="input-field h-10 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-dark mb-1">Location</label>
                      <input
                        type="text"
                        value={newReviewLocation}
                        onChange={e => setNewReviewLocation(e.target.value)}
                        placeholder="e.g. Ranchi"
                        className="input-field h-10 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-dark mb-1">Review Comments</label>
                    <textarea
                      required
                      rows={3}
                      value={newReviewComment}
                      onChange={e => setNewReviewComment(e.target.value)}
                      placeholder="Share detailed feedback about performance, comfort, and service..."
                      className="input-field text-sm p-3 resize-none"
                    />
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    {reviewSubmitted ? (
                      <span className="text-success text-sm font-semibold flex items-center gap-1">
                        ✓ Review submitted successfully!
                      </span>
                    ) : (
                      <span className="text-xs text-muted">Your review will be published instantly.</span>
                    )}
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setShowAddForm(false)}
                        className="h-10 px-4 bg-white border border-border rounded-lg text-sm text-dark hover:bg-surface"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn-primary h-10 px-5 text-sm"
                      >
                        Submit Review
                      </button>
                    </div>
                  </div>
                </form>
              )}

              <div className="space-y-4">
                {localReviews.length === 0 ? (
                  <div className="text-center py-8 bg-surface rounded-xl text-muted text-sm">
                    No reviews found for this vehicle. Be the first to add one!
                  </div>
                ) : (
                  localReviews.map(r => (
                    <div key={r.id} className="p-5 bg-white border border-border rounded-2xl shadow-sm space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-semibold">
                          {r.avatar || 'U'}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                            <p className="font-semibold text-dark text-sm">{r.name}</p>
                            {r.verified && (
                              <span className="inline-flex items-center gap-0.5 bg-success/10 text-success text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                                ✓ Verified Owner
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-muted">{r.date} · {r.location}</p>
                        </div>
                        <div className="flex items-center gap-1 px-2.5 py-1 bg-warning-50 text-warning rounded-lg border border-warning/10 font-bold text-sm shrink-0">
                          <Star size={14} className="fill-warning" />
                          {r.rating}
                        </div>
                      </div>

                      <p className="text-dark-600 text-sm leading-relaxed italic">
                        "{r.comment}"
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
            {/* Official Brochure Section */}
            <div className="bg-white rounded-2xl border border-border p-5 sm:p-6 mb-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary flex items-center justify-center shrink-0">
                  <Download size={22} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-dark text-base sm:text-lg">Official {vehicle.brand} {vehicle.model} Brochure</h4>
                  <p className="text-xs sm:text-sm text-muted">Download full technical specifications & feature brochure PDF</p>
                </div>
              </div>
              <button
                type="button"
                onClick={async () => {
                  if (!vehicle) return;
                  setBrochureDownloading(true);
                  try {
                    await downloadVehicleBrochure(vehicle);
                  } catch (err) {
                    console.error('Failed to download brochure:', err);
                  } finally {
                    setBrochureDownloading(false);
                  }
                }}
                disabled={brochureDownloading}
                className="btn-primary shrink-0 px-6 py-3 text-xs sm:text-sm font-bold rounded-xl shadow-md hover:shadow-primary transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                {brochureDownloading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Downloading PDF...</span>
                  </>
                ) : (
                  <>
                    <Download size={16} />
                    <span>Download Brochure</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="sticky top-28 space-y-4 flex flex-col">
              <div className="bg-white rounded-2xl border border-border shadow-card p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-1.5">
                  {BRAND_LOGOS_OVERRIDE[vehicle.brand] && (
                    <img
                      src={BRAND_LOGOS_OVERRIDE[vehicle.brand]}
                      alt={vehicle.brand}
                      className="h-7 w-auto object-contain bg-surface rounded-md p-1 border border-border"
                    />
                  )}
                  <p className="text-xs font-bold text-muted uppercase tracking-wider">{vehicle.brand}</p>
                </div>
                <h2 className="font-heading font-bold text-dark text-xl sm:text-2xl mb-1">{vehicle.model}</h2>
                <p className="text-sm text-muted mb-4">{variant.name} · {variant.fuelType} · {variant.transmission}</p>

                <div className="mb-4">
                  <p className="text-xs text-muted">Ex-showroom Price</p>
                  <p className="font-heading font-bold text-dark text-2xl sm:text-3xl">{formatPrice(variant.price)}</p>
                  <div className="mt-1 flex items-baseline justify-between">
                    <p className="text-xs text-success font-semibold">Est. On-Road: {formatPrice(Math.round(variant.price * multiplier))}</p>
                    <button
                      type="button"
                      onClick={openPincodeModal}
                      className="text-[10px] bg-success-50 text-success px-1.5 py-0.5 rounded font-semibold capitalize hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                      title="Change Location"
                    >
                      {selectedCity}
                    </button>
                  </div>
                  <p className="text-xs text-muted mt-1">EMI from {formatPriceShort(Number(emi))}/month</p>
                </div>

                <div className="flex items-center gap-2 mb-5">
                  <Star size={16} className="text-warning fill-warning" />
                  <span className="font-semibold text-dark">{vehicle.rating}</span>
                  <span className="text-muted text-sm">({vehicle.reviewCount.toLocaleString()} reviews)</span>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={handleJulyOfferClick}
                    className="btn-primary w-full justify-center text-base h-13"
                    style={{ height: '52px' }}
                  >
                    Get Best Price
                  </button>
                  <Link
                    to={`/test-drive?vehicle=${vehicle?.id}`}
                    className="btn-secondary w-full justify-center flex items-center"
                    style={{ height: '44px' }}
                  >
                    Test Drive
                  </Link>
                </div>

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => toggleWishlist(vehicle.id)}
                    className={`flex-1 flex items-center justify-center gap-2 h-10 rounded-xl border text-sm font-medium transition-all ${
                      wishlisted ? 'bg-primary-50 text-primary border-primary' : 'border-border text-dark-600 hover:border-primary hover:text-primary'
                    }`}
                  >
                    <Heart size={16} fill={wishlisted ? 'currentColor' : 'none'} />
                    Wishlist
                  </button>
                  <Link
                    to={`/compare?ids=${vehicle.id}`}
                    className="flex-1 flex items-center justify-center gap-2 h-10 rounded-xl border border-border text-sm font-medium text-dark-600 hover:border-primary hover:text-primary transition-all"
                  >
                    <GitCompare size={16} />
                    Compare
                  </Link>
                  <button className="flex items-center justify-center gap-2 w-10 h-10 rounded-xl border border-border text-muted hover:border-primary hover:text-primary transition-all">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>

              {/* Download Brochure Box */}
              <div className="bg-white rounded-2xl border border-border p-4 sm:p-5 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-primary-50 rounded-xl flex items-center justify-center text-primary">
                    <Download size={18} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-dark text-sm">Official Brochure</h5>
                    <p className="text-xs text-muted">Get all technical specifications</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={async () => {
                    if (!vehicle) return;
                    setBrochureDownloading(true);
                    try {
                      await downloadVehicleBrochure(vehicle);
                    } catch (err) {
                      console.error('Failed to download brochure:', err);
                    } finally {
                      setBrochureDownloading(false);
                    }
                  }}
                  disabled={brochureDownloading}
                  className="w-full h-10 bg-primary hover:bg-primary/95 text-white text-xs font-bold rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5"
                >
                  {brochureDownloading ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Downloading Brochure...</span>
                    </>
                  ) : (
                    <>
                      <Download size={14} />
                      <span>Download Brochure</span>
                    </>
                  )}
                </button>
              </div>

              {/* Quick info */}
              <div className="bg-white rounded-2xl border border-border p-4 sm:p-5">
                <h4 className="font-heading font-semibold text-dark mb-3">Quick Highlights</h4>
                <div className="space-y-2">
                  {[
                    { label: 'Fuel', value: vehicle.fuelTypes[0] },
                    { label: 'Mileage', value: vehicle.mileage },
                    ...(vehicle.seatingCapacity ? [{ label: 'Seating', value: `${vehicle.seatingCapacity} Seats` }] : []),
                    ...(vehicle.engineCC ? [{ label: 'Engine', value: `${vehicle.engineCC} cc` }] : []),
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between text-sm">
                      <span className="text-muted">{label}</span>
                      <span className="font-medium text-dark">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* EMI calculator link */}
              <div className="bg-primary-50 rounded-2xl border border-primary/20 p-4 sm:p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
                    <Calculator size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-dark text-sm">EMI Calculator</p>
                    <p className="text-xs text-muted">Plan your monthly payments</p>
                  </div>
                </div>
                <Link to="/finance" className="flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                  Calculate EMI <ArrowRight size={14} />
                </Link>
              </div>

              {/* Contact */}
              <div className="bg-white rounded-2xl border border-border p-4 sm:p-5">
                <p className="font-semibold text-dark text-sm mb-3">Need Help?</p>
                <a href="tel:+919296961232" className="flex items-center gap-3 text-sm text-dark-600 hover:text-primary transition-colors">
                  <div className="w-9 h-9 bg-primary-50 rounded-xl flex items-center justify-center">
                    <Phone size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Call Our Experts</p>
                    <p className="text-xs text-muted">+91 92969 61232</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related vehicles */}
        {related.length > 0 && (
          <div className="mt-12 border-t border-border pt-10">
            <h3 className="font-heading font-bold text-dark text-xl md:text-2xl mb-6">Similar Vehicles</h3>
            <div 
              className="flex gap-4 overflow-x-auto no-scrollbar pb-4 scroll-smooth items-stretch"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {related.slice(0, 6).map(v => (
                <div key={v.id} className="w-[260px] sm:w-[320px] shrink-0 flex flex-col">
                  <VehicleCard vehicle={v} compact />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Popular Comparisons Section */}
        {popularComparisons.length > 0 && (
          <div className="mt-12 border-t border-border pt-10">
            <div className="mb-6">
              <h3 className="font-heading font-bold text-dark text-xl md:text-2xl mb-1">Popular Comparisons</h3>
              <p className="text-muted text-sm">Direct comparisons selected by our buyers</p>
            </div>
            
            <div className="relative">
              <ul className="flex overflow-x-auto no-scrollbar scrollbar-hide list-none m-0 p-0 gap-4 sm:gap-5 lg:gap-6 pr-4 sm:pr-5 lg:pr-0 pb-4" style={{ scrollbarWidth: 'none' }}>
                {popularComparisons.map((comp) => (
                  <li key={comp.id} className="flex-none">
                    <Link
                      to={`/compare?ids=${comp.v1},${comp.v2}`}
                      className="min-w-[308px] lg:min-w-[320px] lg:h-[294px] h-[270px] flex flex-col gap-3 lg:gap-4 relative transition duration-1000 md:hover:scale-[1.03] ease-in-out mb-1 group will-change-transform cursor-pointer"
                    >
                      <div className="h-[218px] lg:h-[238px] pt-8 lg:pt-10 rounded-xl lg:rounded-2xl flex">
                        {/* Car 1 */}
                        <div className="flex-1 flex flex-col min-w-fit py-4 gap-4 relative h-[186px] lg:h-[198px]">
                          <img
                            alt={comp.car1.model}
                            loading="lazy"
                            width="146"
                            height="78"
                            className="relative z-10 object-contain h-[78px] w-[146px] lg:w-[144px] lg:h-[90px]"
                            src={comp.car1.image}
                            onError={(e) => {
                              e.currentTarget.src = 'https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=600';
                            }}
                          />
                          <div className="relative z-10 px-3 w-[154px] lg:w-[162px]">
                            <div className="mb-1 text-nickel text-sm font-medium leading-none text-ellipsis">{comp.car1.brand}</div>
                            <div className="mb-2 text-primary text-sm font-medium leading-none text-ellipsis line-clamp-1" title={comp.car1.model}>{comp.car1.model}</div>
                            <div className="text-primary text-sm font-semibold leading-none relative flex">
                              {comp.car1.price}<div>*</div>
                            </div>
                          </div>
                          <div className="absolute bg-partner-secondary w-[158px] lg:w-[162px] h-[120px] bottom-0 rounded-tl-xl rounded-bl-xl"></div>
                        </div>

                        {/* Car 2 */}
                        <div className="flex-1 flex flex-col min-w-fit py-4 gap-4 relative h-[186px] lg:h-[198px]">
                          <img
                            alt={comp.car2.model}
                            loading="lazy"
                            width="146"
                            height="78"
                            className="relative z-10 object-contain h-[78px] w-[146px] lg:w-[144px] lg:h-[90px]"
                            src={comp.car2.image}
                            onError={(e) => {
                              e.currentTarget.src = 'https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=600';
                            }}
                          />
                          <div className="relative z-10 px-3 w-[154px] lg:w-[162px]">
                            <div className="mb-1 text-nickel text-sm font-medium leading-none text-ellipsis">{comp.car2.brand}</div>
                            <div className="mb-2 text-primary text-sm font-medium leading-none text-ellipsis line-clamp-1" title={comp.car2.model}>{comp.car2.model}</div>
                            <div className="text-primary text-sm font-semibold leading-none relative flex">
                              {comp.car2.price}<div>*</div>
                            </div>
                          </div>
                          <div className="absolute bg-partner-secondary w-[158px] lg:w-[162px] h-[120px] bottom-0 rounded-tr-xl rounded-bl-xl -left-1"></div>
                        </div>
                      </div>

                      <button className="font-semibold md:leading-tight min-w-[148px] px-4 text-base text-primary md:hover:bg-mercury h-10 pl-3 pr-2.5 py-3 bg-secondary rounded-lg justify-center items-center gap-1.5 flex w-full pointer-events-none transition-colors duration-200">
                        <span className="text-center text-primary text-sm font-semibold leading-none">{comp.title}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 14 14" className="w-4 h-4 -rotate-45">
                          <g>
                            <path fill="currentColor" d="M12.122 7.31l-3.937 3.937a.438.438 0 11-.62-.619l3.192-3.19h-8.57a.437.437 0 110-.875h8.57l-3.192-3.19a.438.438 0 01.62-.62l3.937 3.938a.437.437 0 010 .619z"></path>
                          </g>
                        </svg>
                      </button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Dynamic CarWale SEO & FAQ Section */}
      <VehicleDetailSEO vehicle={vehicle} />

      {/* July Offer Lead Modal - Styled like Pincode Modal */}
      {bookingOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-end md:items-center justify-center animate-fade-in"
          onClick={() => {
            if (!isBookingSubmitting) {
              setBookingOpen(false);
              setBookingSuccess(false);
            }
          }}
        >
          <div
            className="w-full max-w-lg bg-white rounded-t-3xl md:rounded-3xl shadow-2xl overflow-hidden animate-scale-in border border-border relative max-h-[90vh] flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="px-5 pt-5 pb-4 flex items-center justify-between border-b border-gray-100 bg-surface/50">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                  <Gift size={20} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-dark text-lg leading-tight">
                    Get July Offer & Best Quote
                  </h3>
                  <p className="text-xs text-muted">
                    {vehicle?.brand} {vehicle?.model}
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  if (!isBookingSubmitting) {
                    setBookingOpen(false);
                    setBookingSuccess(false);
                  }
                }}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-dark transition-colors outline-none"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-5 overflow-y-auto flex-1">
              {/* Selected Area / Pincode pill */}
              <div className="mb-4 p-3 bg-primary-50/70 border border-primary-100 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-dark">
                  <MapPin size={16} className="text-primary shrink-0" />
                  <span>
                    {selectedCity} ({selectedPincode})
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setBookingOpen(false);
                    setPendingOfferAfterPincode(true);
                    openPincodeModal();
                  }}
                  className="text-[11px] font-bold text-primary hover:underline"
                >
                  Change Pincode
                </button>
              </div>

              {bookingSuccess ? (
                <div className="text-center py-6">
                  <div className="w-14 h-14 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-3">
                    <Check size={28} strokeWidth={2.5} />
                  </div>
                  <h4 className="font-heading font-bold text-dark text-xl mb-1">
                    July Offer Request Confirmed! 🎉
                  </h4>
                  <p className="text-muted text-xs sm:text-sm mb-6 leading-relaxed">
                    Thank you <span className="font-semibold text-dark">{bookingForm.name}</span>! Your offer request for <span className="font-semibold text-dark">{vehicle?.brand} {vehicle?.model}</span> in <span className="font-semibold text-dark">{selectedCity}</span> has been received. An advisor will call you on <span className="font-semibold text-dark">+91 {bookingForm.phone}</span> within 2 hours with exclusive discounts.
                  </p>
                  <button
                    onClick={() => {
                      setBookingSuccess(false);
                      setBookingOpen(false);
                    }}
                    className="btn-primary w-full justify-center py-3 rounded-xl font-bold"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleConfirmBooking} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-dark mb-1 flex items-center gap-1">
                      <User size={14} className="text-primary" /> Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={bookingForm.name}
                      onChange={e => setBookingForm({ ...bookingForm, name: e.target.value })}
                      placeholder="e.g. Rahul Kumar"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-border bg-white outline-none focus:border-primary text-dark"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-dark mb-1 flex items-center gap-1">
                      <Phone size={14} className="text-primary" /> Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      value={bookingForm.phone}
                      onChange={e => setBookingForm({ ...bookingForm, phone: e.target.value.replace(/\D/g, '') })}
                      placeholder="10-digit mobile number"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-border bg-white outline-none focus:border-primary text-dark"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isBookingSubmitting || !bookingForm.name.trim() || bookingForm.phone.length !== 10}
                    className="btn-primary w-full justify-center py-3 rounded-xl text-sm font-bold shadow-md hover:shadow-primary transition-all disabled:opacity-50 mt-2"
                  >
                    {isBookingSubmitting ? 'Unlocking Best July Offer...' : 'Get Exclusive July Offer 🚀'}
                  </button>
                  <p className="text-[11px] text-muted text-center">
                    🔒 100% Privacy Guaranteed · Official Dealer Offers in {selectedCity}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Sticky Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-t border-border px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] shadow-[0_-10px_30px_rgba(0,0,0,0.08)]">
        {/* Buttons Row */}
        <div className="flex gap-3">
          <button
            onClick={handleJulyOfferClick}
            className="btn-primary flex-1 text-xs sm:text-sm font-bold px-3 rounded-xl shadow-md flex items-center justify-center gap-1"
            style={{ height: '44px' }}
          >
            View July Offer <ChevronRight size={16} />
          </button>
          <Link
            to={`/test-drive?vehicle=${vehicle?.id}`}
            className="btn-secondary px-4 shrink-0 text-xs font-bold rounded-xl flex items-center justify-center"
            style={{ height: '44px' }}
          >
            Test Drive
          </Link>
        </div>
      </div>

      {/* Floating Compare Tray */}
      {selectedCompareVariantIds.length >= 2 && (
        <div data-compare-bar="true" className="fixed bottom-24 md:bottom-6 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-2xl bg-dark/95 backdrop-blur-md text-white rounded-2xl p-4 shadow-2xl flex items-center justify-between gap-4 border border-white/10 animate-fade-in">
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar py-1">
            <div className="hidden sm:flex flex-col">
              <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Compare</span>
              <span className="text-xs font-semibold text-white/80">{selectedCompareVariantIds.length} Selected</span>
            </div>
            <div className="flex gap-2">
              {selectedCompareVariantIds.map(id => {
                const v = vehicle.variants.find(x => x.id === id);
                if (!v) return null;
                return (
                  <div key={id} className="relative bg-white/10 rounded-lg px-2.5 py-1.5 flex items-center gap-2 max-w-[150px] sm:max-w-[200px]">
                    <div className="truncate">
                      <p className="text-[10px] font-bold truncate">{v.name}</p>
                      <p className="text-[9px] text-white/60 font-semibold">{formatPriceShort(v.price)}</p>
                    </div>
                    <button
                      onClick={() => setSelectedCompareVariantIds(prev => prev.filter(x => x !== id))}
                      className="text-white/60 hover:text-white"
                    >
                      <X size={12} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setSelectedCompareVariantIds([])}
              className="text-xs text-white/60 hover:text-white font-medium px-2 py-1"
            >
              Clear
            </button>
            <button
              onClick={() => setIsCompareModalOpen(true)}
              className="bg-primary hover:bg-primary/90 text-white text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-md"
            >
              <GitCompare size={14} />
              <span>Compare</span>
            </button>
          </div>
        </div>
      )}

      {/* Side-by-Side Comparison Modal */}
      {isCompareModalOpen && (
        <div className="fixed inset-0 bg-dark/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] border border-border">
            {/* Modal Header */}
            <div className="p-5 border-b border-border flex items-center justify-between bg-surface/30">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <GitCompare size={20} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-dark text-lg sm:text-xl">
                    Variant Comparison
                  </h3>
                  <p className="text-xs text-muted">
                    Comparing {selectedCompareVariantIds.length} variants of {vehicle.brand} {vehicle.model}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsCompareModalOpen(false)}
                className="w-10 h-10 bg-white border border-border rounded-xl flex items-center justify-center hover:bg-surface transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div className="overflow-x-auto rounded-xl border border-border bg-white">
                <table className="w-full min-w-[600px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-border bg-surface/20">
                      <th className="p-4 text-xs font-bold text-muted uppercase tracking-wider w-[20%]">Specification</th>
                      {selectedCompareVariantIds.map(id => {
                        const v = vehicle.variants.find(x => x.id === id);
                        if (!v) return null;
                        return (
                          <th key={id} className="p-4 w-[26%]">
                            <p className="text-[10px] font-bold text-primary uppercase tracking-wider">{vehicle.brand} {vehicle.model}</p>
                            <p className="font-heading font-bold text-dark text-sm sm:text-base mt-0.5">{v.name.split(' ').slice(0, 3).join(' ')}</p>
                            <p className="text-xs text-muted truncate mt-0.5" title={v.name}>{v.name}</p>
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border text-xs sm:text-sm">
                    {/* Ex-showroom Price */}
                    <tr className="hover:bg-surface/10">
                      <td className="p-4 text-xs font-semibold text-muted">Ex-Showroom Price</td>
                      {selectedCompareVariantIds.map(id => {
                        const v = vehicle.variants.find(x => x.id === id);
                        if (!v) return null;
                        return (
                          <td key={id} className="p-4 font-bold text-dark">
                            {formatPrice(v.price)}
                          </td>
                        );
                      })}
                    </tr>

                    {/* Est. On-Road Price */}
                    <tr className="hover:bg-surface/10">
                      <td className="p-4 text-xs font-semibold text-muted">Est. On-Road Price</td>
                      {selectedCompareVariantIds.map(id => {
                        const v = vehicle.variants.find(x => x.id === id);
                        if (!v) return null;
                        const onRoad = Math.round(v.price * (multiplier || 1.08));
                        return (
                          <td key={id} className="p-4 font-bold text-success">
                            {formatPrice(onRoad)} <span className="text-[9px] text-muted font-normal block">in {selectedCity}</span>
                          </td>
                        );
                      })}
                    </tr>

                    {/* Fuel Type */}
                    <tr className="hover:bg-surface/10">
                      <td className="p-4 text-xs font-semibold text-muted">Fuel Type</td>
                      {selectedCompareVariantIds.map(id => {
                        const v = vehicle.variants.find(x => x.id === id);
                        if (!v) return null;
                        return (
                          <td key={id} className="p-4 font-medium text-dark">
                            {v.fuelType}
                          </td>
                        );
                      })}
                    </tr>

                    {/* Transmission */}
                    <tr className="hover:bg-surface/10">
                      <td className="p-4 text-xs font-semibold text-muted">Transmission</td>
                      {selectedCompareVariantIds.map(id => {
                        const v = vehicle.variants.find(x => x.id === id);
                        if (!v) return null;
                        return (
                          <td key={id} className="p-4 font-medium text-dark">
                            {v.transmission}
                          </td>
                        );
                      })}
                    </tr>

                    {/* Engine CC */}
                    <tr className="hover:bg-surface/10">
                      <td className="p-4 text-xs font-semibold text-muted">Engine Displacement</td>
                      {selectedCompareVariantIds.map(id => {
                        const v = vehicle.variants.find(x => x.id === id);
                        if (!v) return null;
                        return (
                          <td key={id} className="p-4 font-medium text-dark">
                            {v.engineCC ? `${v.engineCC} cc` : 'N/A'}
                          </td>
                        );
                      })}
                    </tr>

                    {/* Power */}
                    <tr className="hover:bg-surface/10">
                      <td className="p-4 text-xs font-semibold text-muted">Max Power</td>
                      {selectedCompareVariantIds.map(id => {
                        const v = vehicle.variants.find(x => x.id === id);
                        if (!v) return null;
                        return (
                          <td key={id} className="p-4 font-medium text-dark">
                            {v.powerBHP ? `${v.powerBHP} bhp` : 'N/A'}
                          </td>
                        );
                      })}
                    </tr>

                    {/* Torque */}
                    <tr className="hover:bg-surface/10">
                      <td className="p-4 text-xs font-semibold text-muted">Max Torque</td>
                      {selectedCompareVariantIds.map(id => {
                        const v = vehicle.variants.find(x => x.id === id);
                        if (!v) return null;
                        return (
                          <td key={id} className="p-4 font-medium text-dark">
                            {v.torqueNm ? `${v.torqueNm} Nm` : 'N/A'}
                          </td>
                        );
                      })}
                    </tr>

                    {/* Mileage */}
                    <tr className="hover:bg-surface/10">
                      <td className="p-4 text-xs font-semibold text-muted">Mileage</td>
                      {selectedCompareVariantIds.map(id => {
                        const v = vehicle.variants.find(x => x.id === id);
                        if (!v) return null;
                        return (
                          <td key={id} className="p-4 font-medium text-dark">
                            {v.mileage || (v.mileageKmpl ? `${v.mileageKmpl} kmpl` : 'N/A')}
                          </td>
                        );
                      })}
                    </tr>

                    {/* Features Comparison Section */}
                    <tr className="bg-surface/10">
                      <td colSpan={1 + selectedCompareVariantIds.length} className="p-4 text-xs font-bold text-dark uppercase tracking-wider">
                        Feature Details
                      </td>
                    </tr>

                    {/* Features checklist compare */}
                    {Array.from(
                      new Set(
                        vehicle.variants
                          .filter(v => selectedCompareVariantIds.includes(v.id))
                          .flatMap(v => v.features || [])
                      )
                    ).map(feature => (
                      <tr key={feature} className="hover:bg-surface/10">
                        <td className="p-4 text-xs font-semibold text-muted">{feature}</td>
                        {selectedCompareVariantIds.map(id => {
                          const v = vehicle.variants.find(x => x.id === id);
                          if (!v) return null;
                          const hasFeature = v.features?.includes(feature);
                          return (
                            <td key={id} className="p-4">
                              {hasFeature ? (
                                <span className="inline-flex items-center justify-center w-5 h-5 bg-success-50 text-success rounded-full">
                                  <Check size={12} className="stroke-[3px]" />
                                </span>
                              ) : (
                                <span className="inline-flex items-center justify-center w-5 h-5 bg-muted-50 text-muted/60 rounded-full">
                                  <Minus size={12} className="stroke-[3px]" />
                                </span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-border flex items-center justify-end gap-2 bg-surface/30">
              <button
                onClick={() => setIsCompareModalOpen(false)}
                className="btn-secondary px-6"
                style={{ height: '40px' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
