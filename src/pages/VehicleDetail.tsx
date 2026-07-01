import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import {
  Star, Heart, GitCompare, Share2, MapPin, Fuel, Gauge, Users, Shield,
  ChevronLeft, ChevronRight, Check, Info, Calculator, ArrowRight, Phone, Plus, MessageSquare
} from 'lucide-react';
import { vehicles, formatPriceShort, formatPrice, getRelatedVehicles, reviews } from '../utils/data';
import VehicleCard from '../components/VehicleCard';

export default function VehicleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const vehicle = vehicles.find(v => v.slug === slug);

  const [activeImage, setActiveImage] = useState(0);
  const [activeVariant, setActiveVariant] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const { isWishlisted, toggleWishlist } = useWishlist();
  const wishlisted = vehicle ? isWishlisted(vehicle.id) : false;
  const [bookingOpen, setBookingOpen] = useState(false);
  const [localReviews, setLocalReviews] = useState(() => {
    if (!vehicle) return [];
    const matched = reviews.filter(
      r => r.vehicle.toLowerCase().includes(vehicle.model.toLowerCase()) || 
           r.vehicle.toLowerCase().includes(vehicle.brand.toLowerCase())
    );
    if (matched.length > 0) return matched;
    return [
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
    ];
  });

  const [newReviewName, setNewReviewName] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewComment, setNewReviewComment] = useState('');
  const [newReviewLocation, setNewReviewLocation] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vehicle || !newReviewName.trim() || !newReviewComment.trim()) return;

    const newReview = {
      id: `ur-${vehicle.id}-${Date.now()}`,
      name: newReviewName,
      avatar: newReviewName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2),
      rating: newReviewRating,
      vehicle: `${vehicle.brand} ${vehicle.model}`,
      comment: newReviewComment,
      location: newReviewLocation.trim() || 'Ranchi',
      date: 'Today',
      verified: true
    };

    setLocalReviews(prev => [newReview, ...prev]);
    setNewReviewName('');
    setNewReviewRating(5);
    setNewReviewComment('');
    setNewReviewLocation('');
    setReviewSubmitted(true);
    setTimeout(() => {
      setReviewSubmitted(false);
      setShowAddForm(false);
    }, 2500);
  };

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

  const variant = vehicle.variants[activeVariant];
  const related = getRelatedVehicles(vehicle.id, vehicle.category);
  const tabs = ['overview', 'specs', 'variants', 'dealers', 'reviews'];

  const [selectedFuelFilter, setSelectedFuelFilter] = useState('All');
  const [selectedTransFilter, setSelectedTransFilter] = useState('All');

  const availableFuels = ['All', ...Array.from(new Set(vehicle.variants.map(v => v.fuelType)))];
  const availableTransmissions = ['All', ...Array.from(new Set(vehicle.variants.map(v => v.transmission)))];

  const filteredVariants = vehicle.variants.filter(v => {
    const fuelMatch = selectedFuelFilter === 'All' || v.fuelType === selectedFuelFilter;
    const transMatch = selectedTransFilter === 'All' || v.transmission === selectedTransFilter;
    return fuelMatch && transMatch;
  });

  const handleVariantClick = (variantId: string) => {
    const origIdx = vehicle.variants.findIndex(v => v.id === variantId);
    if (origIdx !== -1) {
      setActiveVariant(origIdx);
    }
  };

  const emi = (variant.price * 0.009).toFixed(0);

  return (
    <div className="min-h-screen bg-surface pt-24 pb-24 lg:pb-8">
      {/* Breadcrumb */}
      <div className="container-fluid py-4">
        <div className="flex items-center gap-2 text-sm text-muted">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to={`/${vehicle.category}s`} className="hover:text-primary capitalize">{vehicle.category}s</Link>
          <span>/</span>
          <span className="text-dark">{vehicle.brand} {vehicle.model}</span>
        </div>
      </div>

      <div className="container-fluid">
        <div className="grid lg:grid-cols-3 gap-4 lg:gap-8">
          {/* Left: Gallery + details */}
          <div className="lg:col-span-2">
            {/* Gallery */}
            <div className="bg-white rounded-2xl border border-border overflow-hidden mb-6">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={vehicle.images[activeImage] || vehicle.thumbnailUrl}
                  alt={`${vehicle.brand} ${vehicle.model}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=600';
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
              {/* Thumbnails */}
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
                          e.currentTarget.src = 'https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=600';
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-2xl border border-border overflow-hidden">
              <div className="flex overflow-x-auto no-scrollbar border-b border-border">
                {tabs.map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-shrink-0 px-3 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-semibold capitalize transition-all border-b-2 ${
                      activeTab === tab
                        ? 'text-primary border-primary'
                        : 'text-muted border-transparent hover:text-dark'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="p-4 sm:p-6">
                {/* Overview */}
                {activeTab === 'overview' && (
                  <div>
                    <h3 className="font-heading font-semibold text-dark text-lg mb-4">About the {vehicle.model}</h3>
                    <p className="text-dark-600 text-sm leading-relaxed mb-6">
                      {vehicle.description || `The ${vehicle.brand} ${vehicle.model} is a popular vehicle that combines performance, comfort, and value in the ${vehicle.category} segment.`}
                    </p>

                    {/* Key highlights */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
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

                    {/* Features */}
                    <h4 className="font-heading font-semibold text-dark mb-3">Key Features</h4>
                    <div className="grid sm:grid-cols-2 gap-2 mb-6">
                      {vehicle.features.map(feat => (
                        <div key={feat} className="flex items-center gap-2 text-sm text-dark-600">
                          <Check size={14} className="text-success flex-shrink-0" />
                          {feat}
                        </div>
                      ))}
                    </div>

                    {/* Pros & Cons */}
                    <div className="grid md:grid-cols-2 gap-5 mt-6">
                      <div className="bg-[#F1F9F1] p-5 rounded-2xl flex gap-2">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.2656 1.67822L10.3564 1.69775L10.4736 1.73584C10.6924 1.80617 10.856 1.96276 10.9326 2.15186L10.96 2.23486C11.06 2.6204 11.0886 3.02056 11.0449 3.41553L11.0215 3.58447L10.4854 6.85693C10.3584 7.63187 10.9558 8.3374 11.7422 8.3374H15.9346C16.3683 8.3374 16.7054 8.70482 16.6807 9.12842L16.6709 9.21436L16.0996 12.5151C15.6889 14.89 13.5479 16.6587 11.0068 16.6587H7.24512C6.90638 16.6586 6.61594 16.4312 6.52637 16.1147L6.50098 15.9741L5.84375 8.37354C5.82572 8.16356 5.89707 7.95754 6.03711 7.8042L6.10059 7.7417L7.26562 6.73877C7.74672 6.32419 8.25966 5.84062 8.64258 5.23584L8.79883 4.96826C8.98794 4.61419 9.14495 4.24426 9.26855 3.86279L9.38086 3.47803L9.76562 1.99365C9.78729 1.91036 9.83822 1.83239 9.91309 1.77393L9.99609 1.72217C10.0792 1.68213 10.1735 1.66711 10.2656 1.67822Z" fill="#41A248" stroke="#41A248" strokeWidth={1.2} />
                        </svg>
                        <div>
                          <p className="text-[#15803D] font-bold text-base mb-3">Pros</p>
                          <ul className="space-y-2 list-none pl-0">
                            <li className="flex gap-2 items-start">
                              <span className="mt-1 w-2 h-2 rounded-full inline-block shrink-0 bg-[#15803D]"></span>
                              <span className="text-[#1C1C1C] text-sm font-normal leading-relaxed">Advanced Level 2 ADAS and a robust boron steel ring structure.</span>
                            </li>
                            <li className="flex gap-2 items-start">
                              <span className="mt-1 w-2 h-2 rounded-full inline-block shrink-0 bg-[#15803D]"></span>
                              <span className="text-[#1C1C1C] text-sm font-normal leading-relaxed">Coast-to-coast triple-screen layout.</span>
                            </li>
                            <li className="flex gap-2 items-start">
                              <span className="mt-1 w-2 h-2 rounded-full inline-block shrink-0 bg-[#15803D]"></span>
                              <span className="text-[#1C1C1C] text-sm font-normal leading-relaxed">Superb ride comfort.</span>
                            </li>
                            <li className="flex gap-2 items-start">
                              <span className="mt-1 w-2 h-2 rounded-full inline-block shrink-0 bg-[#15803D]"></span>
                              <span className="text-[#1C1C1C] text-sm font-normal leading-relaxed">Powerful engine options.</span>
                            </li>
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
                            <li className="flex gap-2 items-start">
                              <span className="mt-1 w-2 h-2 rounded-full inline-block shrink-0 bg-[#EA580C]"></span>
                              <span className="text-[#1C1C1C] text-sm font-normal leading-relaxed">Limited third-row under-thigh support and no dedicated USB ports.</span>
                            </li>
                            <li className="flex gap-2 items-start">
                              <span className="mt-1 w-2 h-2 rounded-full inline-block shrink-0 bg-[#EA580C]"></span>
                              <span className="text-[#1C1C1C] text-sm font-normal leading-relaxed">No powered tailgate is offered on any variant.</span>
                            </li>
                            <li className="flex gap-2 items-start">
                              <span className="mt-1 w-2 h-2 rounded-full inline-block shrink-0 bg-[#EA580C]"></span>
                              <span className="text-[#1C1C1C] text-sm font-normal leading-relaxed">Capacitive touch controls on the dashboard lack tactile feedback.</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Specs */}
                {activeTab === 'specs' && (
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
                )}

                {/* Variants */}
                {activeTab === 'variants' && (
                  <div className="space-y-4">
                    {/* Filters panel */}
                    <div className="p-4 bg-surface rounded-2xl border border-border space-y-3">
                      {/* Fuel Filter */}
                      {availableFuels.length > 2 && (
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-semibold text-muted w-24">Fuel Option:</span>
                          <div className="flex flex-wrap gap-1.5">
                            {availableFuels.map(fuel => (
                              <button
                                key={fuel}
                                type="button"
                                onClick={() => setSelectedFuelFilter(fuel)}
                                className={`px-3 py-1 rounded-full text-xs font-medium border transition-all ${
                                  selectedFuelFilter === fuel
                                    ? 'bg-primary border-primary text-white'
                                    : 'bg-white border-border text-dark hover:border-primary/50'
                                }`}
                              >
                                {fuel}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Transmission Filter */}
                      {availableTransmissions.length > 2 && (
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-semibold text-muted w-24">Transmission:</span>
                          <div className="flex flex-wrap gap-1.5">
                            {availableTransmissions.map(trans => (
                              <button
                                key={trans}
                                type="button"
                                onClick={() => setSelectedTransFilter(trans)}
                                className={`px-3 py-1 rounded-full text-xs font-medium border transition-all ${
                                  selectedTransFilter === trans
                                    ? 'bg-primary border-primary text-white'
                                    : 'bg-white border-border text-dark hover:border-primary/50'
                                }`}
                              >
                                {trans}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Variant list */}
                    <div className="space-y-3">
                      {filteredVariants.length === 0 ? (
                        <div className="text-center py-8 bg-surface rounded-xl text-muted text-sm border border-dashed border-border">
                          No variants match your selected filter criteria.
                        </div>
                      ) : (
                        filteredVariants.map(v => {
                          const isSelected = vehicle.variants[activeVariant]?.id === v.id;
                          const onRoadPrice = Math.round(v.price * 1.15); // standard 15% estimated tax/insurance markup
                          return (
                            <div
                              key={v.id}
                              onClick={() => handleVariantClick(v.id)}
                              className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                                isSelected
                                  ? 'border-primary bg-primary-50/30 shadow-sm'
                                  : 'border-border bg-white hover:border-primary/50 hover:shadow-sm'
                              }`}
                            >
                              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                                {/* Left contents */}
                                <div className="space-y-2 flex-1">
                                  <div className="flex items-center gap-2">
                                    {isSelected && (
                                      <span className="w-2.5 h-2.5 bg-primary rounded-full shrink-0" />
                                    )}
                                    <p className="font-semibold text-dark text-base sm:text-lg">{v.name}</p>
                                  </div>
                                  
                                  {/* Badges and details */}
                                  <div className="flex flex-wrap gap-1.5">
                                    <span className="bg-primary-50 text-primary text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider">
                                      {v.fuelType}
                                    </span>
                                    <span className="bg-dark-50 text-dark text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider">
                                      {v.transmission}
                                    </span>
                                    {v.engineCC && (
                                      <span className="bg-surface text-dark-600 text-[10px] font-semibold px-2 py-1 rounded-lg border border-border/80">
                                        {v.engineCC} cc
                                      </span>
                                    )}
                                    {v.powerBHP && (
                                      <span className="bg-surface text-dark-600 text-[10px] font-semibold px-2 py-1 rounded-lg border border-border/80">
                                        {v.powerBHP} BHP
                                      </span>
                                    )}
                                    {v.rangeKm && (
                                      <span className="bg-success-50 text-success text-[10px] font-bold px-2 py-1 rounded-lg">
                                        {v.rangeKm} km Range
                                      </span>
                                    )}
                                  </div>
                                </div>

                                {/* Right contents (Price) */}
                                <div className="text-left sm:text-right shrink-0">
                                  <p className="text-xs text-muted">Ex-Showroom Price</p>
                                  <p className="font-heading font-bold text-dark text-lg sm:text-2xl mt-0.5">
                                    {formatPrice(v.price)}
                                  </p>
                                  <p className="text-xs text-success font-medium mt-1">
                                    Est. On-Road: {formatPrice(onRoadPrice)}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                )}

                {/* Dealer prices */}
                {activeTab === 'dealers' && (
                  <div className="space-y-4">
                    <p className="text-sm text-muted mb-4">Comparing prices from authorized dealerships near you</p>
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
                          <button className="flex-1 h-9 bg-white border border-border rounded-lg text-sm font-medium text-dark hover:border-primary hover:text-primary transition-colors">
                            Get Best Quote
                          </button>
                          <button className="flex-1 h-9 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary-600 transition-colors">
                            Book Test Drive
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Reviews */}
                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    {/* Rating summary panel */}
                    <div className="grid md:grid-cols-3 gap-6 p-6 bg-surface rounded-2xl border border-border">
                      {/* Overall Average */}
                      <div className="flex flex-col items-center justify-center text-center p-4 bg-white rounded-xl border border-border/50">
                        <p className="text-sm font-semibold text-muted mb-1">Average Rating</p>
                        <p className="font-heading font-bold text-dark text-4xl mb-2">{vehicle.rating}</p>
                        <div className="flex gap-0.5 mb-2">
                          {[1, 2, 3, 4, 5].map(s => (
                            <Star
                              key={s}
                              size={16}
                              className={s <= Math.round(vehicle.rating) ? 'text-warning fill-warning' : 'text-border'}
                            />
                          ))}
                        </div>
                        <p className="text-xs text-muted">Based on {vehicle.reviewCount.toLocaleString()} owner ratings</p>
                      </div>

                      {/* Bar Breakdown */}
                      <div className="md:col-span-2 flex flex-col justify-center gap-2">
                        {[
                          { rating: 5, pct: '74%' },
                          { rating: 4, pct: '18%' },
                          { rating: 3, pct: '5%' },
                          { rating: 2, pct: '2%' },
                          { rating: 1, pct: '1%' }
                        ].map(({ rating, pct }) => (
                          <div key={rating} className="flex items-center gap-3 text-sm">
                            <span className="w-3 font-semibold text-dark">{rating}</span>
                            <Star size={12} className="text-warning fill-warning shrink-0" />
                            <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                              <div className="h-full bg-warning" style={{ width: pct }} />
                            </div>
                            <span className="w-10 text-right text-xs text-muted font-medium">{pct}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions bar */}
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

                    {/* Add Review Form */}
                    {showAddForm && (
                      <form onSubmit={handleAddReview} className="p-5 bg-surface rounded-2xl border border-primary/20 space-y-4 animate-scale-in">
                        <h4 className="font-heading font-semibold text-dark text-sm">Share your experience with {vehicle.brand} {vehicle.model}</h4>
                        
                        {/* Rating Selection */}
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

                        {/* Text Inputs */}
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

                        {/* Submit Button & States */}
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

                    {/* Review List cards */}
                    <div className="space-y-4">
                      {localReviews.length === 0 ? (
                        <div className="text-center py-8 bg-surface rounded-xl text-muted text-sm">
                          No reviews found for this vehicle. Be the first to add one!
                        </div>
                      ) : (
                        localReviews.map(r => (
                          <div key={r.id} className="p-5 bg-white border border-border rounded-2xl shadow-sm space-y-3">
                            {/* Review Card Header */}
                            <div className="flex items-center gap-3">
                              {/* Avatar circle */}
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
                              {/* Rating badge */}
                              <div className="flex items-center gap-1 px-2.5 py-1 bg-warning-50 text-warning rounded-lg border border-warning/10 font-bold text-sm shrink-0">
                                <Star size={14} className="fill-warning" />
                                {r.rating}
                              </div>
                            </div>

                            {/* Review text */}
                            <p className="text-dark-600 text-sm leading-relaxed italic">
                              "{r.comment}"
                            </p>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Related vehicles */}
            {related.length > 0 && (
              <div className="mt-8">
                <h3 className="font-heading font-bold text-dark text-xl mb-4">Similar Vehicles</h3>
                <div className="grid grid-cols-2 gap-4">
                  {related.slice(0, 2).map(v => (
                    <VehicleCard key={v.id} vehicle={v} compact />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Sticky booking panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-4">
              {/* Price card */}
              <div className="bg-white rounded-2xl border border-border shadow-card p-4 sm:p-6">
                <p className="text-xs text-muted mb-1">{vehicle.brand}</p>
                <h1 className="font-heading font-bold text-dark text-xl sm:text-2xl mb-1">{vehicle.model}</h1>
                <p className="text-sm text-muted mb-4">{variant.name} · {variant.fuelType} · {variant.transmission}</p>

                <div className="mb-4">
                  <p className="text-xs text-muted">Ex-showroom Price</p>
                  <p className="font-heading font-bold text-dark text-2xl sm:text-3xl">{formatPrice(variant.price)}</p>
                  <p className="text-sm text-muted mt-1">EMI from {formatPriceShort(Number(emi))}/month</p>
                </div>

                <div className="flex items-center gap-2 mb-5">
                  <Star size={16} className="text-warning fill-warning" />
                  <span className="font-semibold text-dark">{vehicle.rating}</span>
                  <span className="text-muted text-sm">({vehicle.reviewCount.toLocaleString()} reviews)</span>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => setBookingOpen(true)}
                    className="btn-primary w-full justify-center text-base h-13"
                    style={{ height: '52px' }}
                  >
                    Book Now — Get Best Price
                  </button>
                  <button className="btn-secondary w-full justify-center" style={{ height: '44px' }}>
                    Book Free Test Drive
                  </button>
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
      </div>

      {/* Booking modal */}
      {bookingOpen && (
        <div
          className="fixed inset-0 z-50 bg-dark/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setBookingOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-card-hover max-w-md w-full p-6 animate-scale-in"
            onClick={e => e.stopPropagation()}
          >
            <h3 className="font-heading font-bold text-dark text-xl mb-1">Book {vehicle.brand} {vehicle.model}</h3>
            <p className="text-muted text-sm mb-6">Our team will contact you within 2 hours with the best available price.</p>

            <div className="space-y-4">
              <input type="text" placeholder="Full Name" className="input-field" />
              <input type="tel" placeholder="Mobile Number" className="input-field" />
              <input type="email" placeholder="Email (optional)" className="input-field" />
              <select className="select-field">
                <option>Select City in Jharkhand</option>
                {['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Hazaribagh', 'Deoghar'].map(c => (
                  <option key={c}>{c}</option>
                ))}
              </select>
              <select className="select-field">
                <option>Purpose (Optional)</option>
                <option>Personal Use</option>
                <option>Commercial Use</option>
                <option>Test Drive</option>
                <option>Get Best Quote</option>
              </select>
            </div>

            <button className="btn-primary w-full justify-center mt-6">
              Confirm Booking Request
            </button>
            <p className="text-xs text-muted text-center mt-3">
              By submitting, you agree to our terms. We'll never share your data.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
