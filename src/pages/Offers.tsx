import { useState, useEffect } from 'react';
import {
  Tag, Clock, Copy, Check, ArrowRight, X, Sparkles, AlertCircle,
  Heart, ShieldCheck, Zap, Building2, Landmark, RefreshCw, Percent, Search, Gift
} from 'lucide-react';
import { fetchOffers } from '../utils/supabaseService';
import { supabase } from '../utils/supabaseClient';
import type { Offer } from '../types';

// ──────────────────────────────────────────────────
// Category Filter tabs matching Buywheels design system
// ──────────────────────────────────────────────────
const filterTabs = [
  { id: 'All',       label: 'All Offers',     icon: Sparkles },
  { id: 'Exchange',  label: 'Exchange Bonus', icon: RefreshCw },
  { id: 'Cashback',  label: 'Cashback',        icon: Percent },
  { id: 'Bank',      label: 'Bank Offers',     icon: Landmark },
  { id: 'Corporate', label: 'Corporate',       icon: Building2 },
  { id: 'EV',        label: 'EV Specials',     icon: Zap },
];

// Badge label helper
function getBadgeLabel(offer: Offer): string {
  const cat = (offer.category || '').toUpperCase();
  const type = (offer.type || '').toUpperCase();
  if (cat.includes('CASHBACK') || type.includes('CASHBACK')) return 'CASHBACK';
  if (cat.includes('EXCHANGE') || type.includes('EXCHANGE')) return 'EXCHANGE BONUS';
  if (cat.includes('FESTIVAL') || type.includes('FESTIVAL')) return 'FESTIVAL OFFER';
  if (cat.includes('BANK') || type.includes('BANK')) return 'BANK OFFER';
  if (cat.includes('EV') || type.includes('EV')) return 'EV SPECIAL';
  if (cat.includes('CORPORATE') || type.includes('CORPORATE')) return 'CORPORATE';
  if (cat.includes('EMI') || type.includes('EMI')) return 'LOW EMI';
  return 'EXCLUSIVE';
}

// ──────────────────────────────────────────────────
// Offer Card — Clean, simple & uncluttered
// ──────────────────────────────────────────────────
function OfferCard({
  offer,
  copiedCode,
  onCopy,
  onClaim,
  onWishlist,
  wishlisted,
}: {
  offer: Offer;
  copiedCode: string | null;
  onCopy: (code: string) => void;
  onClaim: (offer: Offer) => void;
  onWishlist: (id: string) => void;
  wishlisted: boolean;
}) {
  const badgeLabel = getBadgeLabel(offer);

  return (
    <div className="group bg-white rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col h-full">
      {/* Banner / Image Area */}
      <div className="relative h-48 bg-dark-900 overflow-hidden">
        <img
          src={offer.image || '/images/offers_hero_car.jpg'}
          alt={offer.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/images/offers_hero_car.jpg';
          }}
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-black/20" />

        {/* Badge top-left */}
        <div className="absolute top-3 left-3">
          <span className="bg-dark/80 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider border border-white/20 shadow-sm flex items-center gap-1.5">
            <Tag size={12} className="text-primary" />
            {badgeLabel}
          </span>
        </div>

        {/* Wishlist top-right */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onWishlist(offer.id);
          }}
          className={`absolute top-3 right-3 w-9 h-9 rounded-xl flex items-center justify-center backdrop-blur-md shadow-card transition-all duration-200 ${
            wishlisted ? 'bg-primary text-white' : 'bg-white/90 text-dark-500 hover:text-primary hover:bg-white'
          }`}
          aria-label="Wishlist offer"
        >
          <Heart size={16} fill={wishlisted ? 'currentColor' : 'none'} />
        </button>

        {/* Brand tag bottom-left of image */}
        {offer.brand && (
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-dark font-semibold text-xs px-2.5 py-1 rounded-md border border-border/50">
            {offer.brand}
          </div>
        )}
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Title & Description */}
        <div className="mb-4">
          <h3 className="font-heading font-semibold text-dark text-base md:text-lg leading-snug group-hover:text-primary transition-colors mb-1.5">
            {offer.title}
          </h3>
          <p className="text-muted text-xs md:text-sm leading-relaxed line-clamp-2">
            {offer.description}
          </p>
        </div>

        {/* Highlighted Savings Box */}
        <div className="bg-primary-50/70 border border-primary/20 rounded-xl p-3 flex items-center justify-between mb-4">
          <div>
            <span className="text-[10px] text-muted font-medium uppercase tracking-wider block">Offer Benefit</span>
            <span className="font-heading font-extrabold text-primary text-lg md:text-xl leading-tight">
              {offer.discount}
            </span>
          </div>
          <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <Gift size={20} />
          </div>
        </div>

        {/* Promo code pill (if applicable) */}
        {offer.code && (
          <div className="flex items-center justify-between bg-surface border border-dashed border-border rounded-xl px-3 py-2 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-muted uppercase font-semibold">Code:</span>
              <span className="font-mono font-bold text-dark text-xs tracking-wider">{offer.code}</span>
            </div>
            <button
              onClick={() => onCopy(offer.code!)}
              className={`flex items-center gap-1 text-xs font-semibold transition-colors ${
                copiedCode === offer.code ? 'text-green-600' : 'text-primary hover:text-primary-600'
              }`}
            >
              {copiedCode === offer.code ? <Check size={13} /> : <Copy size={13} />}
              {copiedCode === offer.code ? 'Copied' : 'Copy'}
            </button>
          </div>
        )}

        {/* Validity */}
        <div className="flex items-center gap-1.5 text-xs text-muted mb-5 mt-auto pt-1">
          <Clock size={13} className="text-dark-400" />
          <span>Valid till <span className="font-medium text-dark-600">{offer.validTill}</span></span>
        </div>

        {/* Claim CTA */}
        <button
          onClick={() => onClaim(offer)}
          className="btn-primary w-full h-11 text-sm font-semibold rounded-xl flex items-center justify-center gap-2"
        >
          Claim Offer <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════
// Main Offers Page
// ══════════════════════════════════════════════════
export default function Offers() {
  const [offersList, setOffersList] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [wishlistedIds, setWishlistedIds] = useState<Set<string>>(new Set());

  // Claim modal state
  const [isClaimModalOpen, setIsClaimModalOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);
  const [formData, setFormData] = useState({
    name: localStorage.getItem('niaa_user_name') || '',
    phone: localStorage.getItem('niaa_user_phone') || '',
    email: '',
    city: 'Ranchi'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    fetchOffers().then(data => {
      setOffersList(data);
      setLoading(false);
    });
  }, []);

  // Filtered logic
  const filtered = offersList.filter(o => {
    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        o.title.toLowerCase().includes(q) ||
        o.description.toLowerCase().includes(q) ||
        (o.code && o.code.toLowerCase().includes(q)) ||
        (o.brand && o.brand.toLowerCase().includes(q)) ||
        o.discount.toLowerCase().includes(q);
      if (!matchesSearch) return false;
    }

    // Category tab filter
    if (activeTab === 'All') return true;
    const tabLower = activeTab.toLowerCase();
    const typeLower = (o.type || '').toLowerCase();
    const catLower = (o.category || '').toLowerCase();

    if (activeTab === 'Exchange') return typeLower.includes('exchange') || catLower.includes('exchange');
    if (activeTab === 'Cashback') return typeLower.includes('cashback') || catLower.includes('cashback');
    if (activeTab === 'Bank') return typeLower.includes('bank') || typeLower.includes('emi') || catLower.includes('bank') || catLower.includes('finance');
    if (activeTab === 'Corporate') return typeLower.includes('corporate') || catLower.includes('corporate');
    if (activeTab === 'EV') return catLower.includes('ev') || typeLower.includes('ev') || o.title.toLowerCase().includes('ev') || o.description.toLowerCase().includes('electric');

    return typeLower.includes(tabLower) || catLower.includes(tabLower);
  });

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const toggleWishlist = (id: string) => {
    setWishlistedIds(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleClaimClick = (offer: Offer) => {
    setSelectedOffer(offer);
    setFormData({
      name: localStorage.getItem('niaa_user_name') || '',
      phone: localStorage.getItem('niaa_user_phone') || '',
      email: '',
      city: 'Ranchi'
    });
    setFormError(null);
    setIsSuccess(false);
    setIsClaimModalOpen(true);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    if (!formData.name.trim()) { setFormError('Please enter your full name'); return; }
    if (!formData.phone.trim()) { setFormError('Please enter your mobile number'); return; }
    if (!/^\d{10}$/.test(formData.phone.trim())) { setFormError('Please enter a valid 10-digit mobile number'); return; }
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('offer_claims')
        .insert([{
          offer_id:    selectedOffer?.id   || null,
          offer_title: selectedOffer?.title || null,
          offer_code:  selectedOffer?.code  || null,
          name:  formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim() || null,
          city:  formData.city,
        }]);

      if (error) throw new Error(error.message);
      localStorage.setItem('niaa_user_name', formData.name.trim());
      localStorage.setItem('niaa_user_phone', formData.phone.trim());
      setIsSuccess(true);
    } catch (err: any) {
      console.warn('Network or DB error saving offer claim, storing locally:', err);
      try {
        const existing = JSON.parse(localStorage.getItem('buywheels_pending_leads') || '[]');
        existing.push({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim() || null,
          source: 'Offer Claim',
          vehicle_interest: selectedOffer?.title || 'Offer Claim',
          notes: `City: ${formData.city}. Code: ${selectedOffer?.code || 'N/A'}`,
          stage: 'New'
        });
        localStorage.setItem('buywheels_pending_leads', JSON.stringify(existing));
      } catch (storageErr) {
        console.error('Failed to save offer claim locally:', storageErr);
      }
      localStorage.setItem('niaa_user_name', formData.name.trim());
      localStorage.setItem('niaa_user_phone', formData.phone.trim());
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 bg-surface">
        <div className="text-center text-muted">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary mx-auto mb-4" />
          <p className="font-heading font-medium text-dark">Loading car offers...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface pt-20 pb-20 lg:pb-12">

      {/* ── Sleek Modern Hero Header ── */}
      <div className="container-fluid mb-8 pt-4">
        <div className="bg-gradient-to-br from-dark-900 via-dark to-dark-800 text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl relative overflow-hidden border border-dark-700/50">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles size={13} /> Exclusive Car Deals & Promotions
              </div>
              <h1 className="font-heading font-bold text-white text-2xl sm:text-3xl md:text-4xl leading-tight mb-3">
                Maximize Savings On Your Dream Car
              </h1>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 max-w-xl">
                Explore verified bank cashbacks, exchange bonuses, low-EMI schemes, and dealership discounts across Jharkhand.
              </p>

              {/* Key Highlights */}
              <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
                <div>
                  <p className="font-heading font-bold text-primary text-lg sm:text-xl">Up to ₹1.5L</p>
                  <p className="text-[11px] text-gray-400 font-medium">Max Savings</p>
                </div>
                <div>
                  <p className="font-heading font-bold text-white text-lg sm:text-xl">100%</p>
                  <p className="text-[11px] text-gray-400 font-medium">Verified Offers</p>
                </div>
                <div>
                  <p className="font-heading font-bold text-white text-lg sm:text-xl">Instant</p>
                  <p className="text-[11px] text-gray-400 font-medium">Dealer Claim</p>
                </div>
              </div>
            </div>

            {/* Right Car Graphic */}
            <div className="md:col-span-5 flex justify-center md:justify-end">
              <div className="relative w-full max-w-sm">
                <img
                  src="/images/offers_hero_car.jpg"
                  alt="Car Offers"
                  className="w-full h-44 sm:h-52 object-cover rounded-2xl shadow-2xl border border-white/10"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/offer_card_creta.jpg';
                  }}
                />
                <div className="absolute -bottom-4 -left-4 bg-white text-dark rounded-xl p-3 shadow-xl border border-border hidden sm:flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-green-100 text-green-700 flex items-center justify-center">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xs">Best Price Guarantee</p>
                    <p className="text-[10px] text-muted">Authorized Jharkhand Showrooms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Search & Filter Controls ── */}
      <div className="container-fluid mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-border shadow-card">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 md:pb-0">
            {filterTabs.map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all shrink-0 ${
                    isActive
                      ? 'bg-primary text-white shadow-md shadow-primary/20'
                      : 'bg-surface text-dark-600 border border-border hover:bg-gray-100 hover:text-dark'
                  }`}
                >
                  <Icon size={15} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search offers or code..."
              className="w-full h-10 pl-9 pr-8 bg-surface border border-border rounded-xl text-xs md:text-sm text-dark placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-dark"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── Grid Section ── */}
      <div className="container-fluid">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-heading font-bold text-dark text-xl md:text-2xl">
              {activeTab === 'All' ? 'Available Offers' : `${activeTab} Offers`}
            </h2>
            <p className="text-muted text-xs md:text-sm mt-0.5">
              Showing {filtered.length} active deals for you
            </p>
          </div>

          {activeTab !== 'All' || searchQuery ? (
            <button
              onClick={() => { setActiveTab('All'); setSearchQuery(''); }}
              className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
            >
              Reset Filters
            </button>
          ) : null}
        </div>

        {filtered.length === 0 ? (
          <div className="bg-white rounded-2xl border border-border p-12 text-center max-w-lg mx-auto my-8">
            <div className="w-14 h-14 bg-surface rounded-full flex items-center justify-center mx-auto mb-4 text-muted">
              <Tag size={28} />
            </div>
            <h3 className="font-heading font-bold text-dark text-lg mb-1">No matching offers found</h3>
            <p className="text-muted text-xs md:text-sm mb-6">
              We couldn't find any offers matching "{searchQuery || activeTab}". Try clearing your search or switching categories.
            </p>
            <button
              onClick={() => { setActiveTab('All'); setSearchQuery(''); }}
              className="btn-primary h-10 px-6 text-xs rounded-xl"
            >
              View All Offers
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(offer => (
              <OfferCard
                key={offer.id}
                offer={offer}
                copiedCode={copiedCode}
                onCopy={copyCode}
                onClaim={handleClaimClick}
                onWishlist={toggleWishlist}
                wishlisted={wishlistedIds.has(offer.id)}
              />
            ))}
          </div>
        )}
      </div>

      {/* ══════════════════════════════════════════════ */}
      {/* Claim Offer Modal                              */}
      {/* ══════════════════════════════════════════════ */}
      {isClaimModalOpen && selectedOffer && (
        <div
          className="fixed inset-0 z-[60] bg-dark/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fade-in"
          onClick={() => setIsClaimModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl border border-border max-w-md w-full p-6 relative animate-scale-in my-8"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setIsClaimModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-xl hover:bg-surface text-muted hover:text-dark transition-colors"
            >
              <X size={20} />
            </button>

            {!isSuccess ? (
              <>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Sparkles size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-dark text-lg leading-tight">Claim Exclusive Offer</h3>
                    <p className="text-muted text-xs">Unlock dealer discounts and instant vouchers</p>
                  </div>
                </div>

                {/* Offer preview */}
                <div className="bg-surface rounded-xl p-4 border border-border mb-6">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <span className="bg-dark text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                      {getBadgeLabel(selectedOffer)}
                    </span>
                    <span className="text-[11px] font-bold text-primary">
                      {selectedOffer.discount}
                    </span>
                  </div>
                  <h4 className="font-heading font-semibold text-dark text-sm mb-1">{selectedOffer.title}</h4>
                  <p className="text-muted text-xs leading-relaxed">{selectedOffer.description}</p>
                  <div className="flex items-center gap-1 mt-3 text-[11px] text-muted">
                    <Clock size={12} />
                    <span>Valid till {selectedOffer.validTill}</span>
                  </div>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {formError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-3 flex items-start gap-2 text-xs">
                      <AlertCircle size={16} className="shrink-0 mt-0.5" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-dark mb-1.5">Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleFormChange}
                      placeholder="e.g. Rahul Kumar" className="input-field" required />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-dark mb-1.5">Mobile Number *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleFormChange}
                      placeholder="10-digit mobile number" className="input-field" required />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-dark mb-1.5">Email Address (Optional)</label>
                    <input type="email" name="email" value={formData.email} onChange={handleFormChange}
                      placeholder="e.g. rahul@example.com" className="input-field" />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-dark mb-1.5">City in Jharkhand *</label>
                    <select name="city" value={formData.city} onChange={handleFormChange}
                      className="select-field" required>
                      {['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Hazaribagh', 'Deoghar', 'Dumka', 'Giridih'].map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <button type="submit" disabled={isSubmitting}
                    className="w-full btn-primary h-12 text-sm justify-center mt-2">
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Processing...
                      </span>
                    ) : 'Claim Offer Now'}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check size={36} strokeWidth={3} />
                </div>
                <h3 className="font-heading font-bold text-dark text-xl mb-2">Offer Claim Registered!</h3>
                <p className="text-dark-600 text-sm max-w-sm mx-auto mb-6">
                  Congratulations, <span className="font-semibold">{formData.name}</span>! Your offer request for{' '}
                  <span className="font-semibold">{selectedOffer.title}</span> has been locked in.
                </p>
                <div className="bg-surface rounded-xl p-4 border border-border text-left mb-6 max-w-xs mx-auto text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted">Offer Code:</span>
                    <span className="font-mono font-bold text-dark">{selectedOffer.code || 'Auto-Applied'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Mobile:</span>
                    <span className="font-medium text-dark">+91 {formData.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Location:</span>
                    <span className="font-medium text-dark">{formData.city}</span>
                  </div>
                </div>
                <p className="text-xs text-muted mb-6">
                  A Buywheels advisor will contact you within 2 hours to help redeem your offer at the nearest dealership in {formData.city}.
                </p>
                <button onClick={() => setIsClaimModalOpen(false)} className="w-full btn-secondary h-11 text-sm justify-center">
                  Back to Offers
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
