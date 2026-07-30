import { useState, useEffect } from 'react';
import {
  Tag, Clock, Copy, Check, ArrowRight, X, Sparkles, AlertCircle,
  Heart, ChevronRight, ShieldCheck, Fuel, Zap, Users, Gauge, BadgePercent
} from 'lucide-react';
import { fetchOffers } from '../utils/supabaseService';
import { supabase } from '../utils/supabaseClient';
import type { Offer } from '../types';

// AI-generated car images pool (cycles through for offer cards)
const AI_CAR_IMAGES = [
  '/images/offer_card_nexon.jpg',
  '/images/offer_card_creta.jpg',
  '/images/offer_card_hector.jpg',
  '/images/offer_card_seltos.jpg',
  '/images/offer_card_sedan.jpg',
];

// ──────────────────────────────────────────────────
// Filter category tabs (icon + label) matching the app
// ──────────────────────────────────────────────────
const filterTabs = [
  { id: 'All',       label: 'All Offers',     emoji: '🚗' },
  { id: 'Cashback',  label: 'Cashback',        emoji: '💰' },
  { id: 'Exchange',  label: 'Exchange',        emoji: '🔄' },
  { id: 'Corporate', label: 'Corporate',       emoji: '🏢' },
  { id: 'Bank',      label: 'Bank Offers',     emoji: '🏦' },
  { id: 'Festival',  label: 'Festival Offers', emoji: '🎉' },
];

// Offer type → badge colour mapping
const badgeColour: Record<string, string> = {
  'BEST OFFER':     'bg-green-500',
  'CASHBACK':       'bg-purple-500',
  'EXCHANGE BONUS': 'bg-blue-500',
  'FESTIVAL OFFER': 'bg-pink-500',
  'EV OFFER':       'bg-emerald-500',
  'BANK OFFER':     'bg-indigo-500',
};

function getBadgeLabel(offer: Offer): string {
  const cat = (offer.category || '').toUpperCase();
  const type = (offer.type || '').toUpperCase();
  if (cat.includes('CASHBACK') || type.includes('CASHBACK')) return 'CASHBACK';
  if (cat.includes('EXCHANGE') || type.includes('EXCHANGE')) return 'EXCHANGE BONUS';
  if (cat.includes('FESTIVAL') || type.includes('FESTIVAL')) return 'FESTIVAL OFFER';
  if (cat.includes('BANK') || type.includes('BANK')) return 'BANK OFFER';
  if (cat.includes('EV') || type.includes('EV')) return 'EV OFFER';
  if (cat.includes('CORPORATE') || type.includes('CORPORATE')) return 'CORPORATE';
  return 'BEST OFFER';
}

// ──────────────────────────────────────────────────
// Pill badge colour by label
// ──────────────────────────────────────────────────
function BadgePill({ label }: { label: string }) {
  const colour = badgeColour[label] || 'bg-primary';
  return (
    <span className={`${colour} text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide`}>
      {label}
    </span>
  );
}

// ──────────────────────────────────────────────────
// Offer Card — styled like the app screenshot
// ──────────────────────────────────────────────────
function OfferCard({
  offer,
  copiedCode,
  onCopy,
  onClaim,
  onWishlist,
  wishlisted,
  imageIndex,
}: {
  offer: Offer;
  copiedCode: string | null;
  onCopy: (code: string) => void;
  onClaim: (offer: Offer) => void;
  onWishlist: (id: string) => void;
  wishlisted: boolean;
  imageIndex: number;
}) {
  const badgeLabel = getBadgeLabel(offer);
  const aiImage = AI_CAR_IMAGES[imageIndex % AI_CAR_IMAGES.length];

  return (
    <div className="bg-white rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 overflow-hidden flex flex-col">
      {/* Car image + badge */}
      <div className="relative">
        <img
          src={offer.image || aiImage}
          alt={offer.title}
          className="w-full h-44 object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = aiImage;
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Badge top-left */}
        <div className="absolute top-3 left-3">
          <BadgePill label={badgeLabel} />
        </div>

        {/* Wishlist top-right */}
        <button
          onClick={() => onWishlist(offer.id)}
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow transition-transform hover:scale-110 active:scale-95"
        >
          <Heart
            size={15}
            className={wishlisted ? 'fill-red-500 text-red-500' : 'text-dark-400'}
            strokeWidth={wishlisted ? 0 : 2}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 gap-3">
        {/* Title row */}
        <div>
          <h3 className="font-heading font-semibold text-dark text-sm leading-snug mb-0.5">
            {offer.title}
          </h3>
          {offer.description && (
            <p className="text-muted text-xs leading-relaxed line-clamp-1">{offer.description}</p>
          )}
        </div>

        {/* Specs pills */}
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-dark-500">
          {offer.description?.toLowerCase().includes('electric') ? (
            <span className="flex items-center gap-1"><Zap size={11} className="text-primary" /> Electric</span>
          ) : (
            <span className="flex items-center gap-1"><Fuel size={11} className="text-primary" /> Petrol</span>
          )}
          <span className="flex items-center gap-1"><Gauge size={11} className="text-primary" /> Automatic</span>
          <span className="flex items-center gap-1"><Users size={11} className="text-primary" /> 5 Seater</span>
        </div>

        {/* Savings block */}
        <div className="bg-primary-50 border border-primary/20 rounded-xl px-3 py-2.5 flex items-center justify-between">
          <div>
            <p className="text-[10px] text-muted font-medium">Save Up To</p>
            <p className="font-heading font-bold text-primary text-base leading-tight">{offer.discount}</p>
            <p className="text-[10px] text-muted mt-0.5 line-clamp-1">{offer.description || 'On select variants'}</p>
          </div>
          <BadgePercent size={28} className="text-primary/30 shrink-0" />
        </div>

        {/* Valid till */}
        <div className="flex items-center gap-1.5 text-[11px] text-muted">
          <Clock size={11} />
          <span>Valid till {offer.validTill}</span>
        </div>

        {/* Promo code */}
        {offer.code && (
          <div className="flex items-center justify-between bg-surface border border-dashed border-border rounded-xl px-3 py-2">
            <span className="font-mono font-bold text-dark text-xs tracking-wider">{offer.code}</span>
            <button
              onClick={() => onCopy(offer.code!)}
              className={`flex items-center gap-1 text-xs font-semibold transition-colors ${
                copiedCode === offer.code ? 'text-success' : 'text-primary hover:text-primary-600'
              }`}
            >
              {copiedCode === offer.code ? <Check size={12} /> : <Copy size={12} />}
              {copiedCode === offer.code ? 'Copied!' : 'Copy Code'}
            </button>
          </div>
        )}

        {/* CTA */}
        <button
          onClick={() => onClaim(offer)}
          className="mt-auto w-full flex items-center justify-center gap-1.5 h-10 rounded-xl border-2 border-primary text-primary font-heading font-semibold text-sm hover:bg-primary hover:text-white transition-all duration-200"
        >
          View Offer <ChevronRight size={14} />
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
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [wishlistedIds, setWishlistedIds] = useState<Set<string>>(new Set());

  // Claim modal
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

  const filtered = offersList.filter(o => {
    if (activeTab === 'All') return true;
    const tabLower = activeTab.toLowerCase();
    const typeLower = (o.type || '').toLowerCase();
    const catLower = (o.category || '').toLowerCase();
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
    setIsSubmitting(false);
    if (!error) {
      localStorage.setItem('niaa_user_name', formData.name.trim());
      localStorage.setItem('niaa_user_phone', formData.phone.trim());
      setIsSuccess(true);
    } else {
      console.error('Error saving offer claim:', error);
      setFormError('Something went wrong. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center text-muted">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary mx-auto mb-4" />
          Loading offers...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface pt-24 pb-24 lg:pb-12">

      {/* ── Page Header ── */}
      <div className="container-fluid mb-6 mt-2">
        <h1 className="font-heading font-bold text-dark text-2xl md:text-3xl">Offers</h1>
        <p className="text-muted text-sm mt-0.5">Best deals. Bigger savings.</p>
      </div>

      {/* ── Hero Banner ── */}
      <div className="container-fluid mb-8">
        <div className="relative rounded-3xl overflow-hidden min-h-[200px] md:min-h-[240px]"
          style={{ background: 'linear-gradient(135deg, #fff8f3 0%, #fff0e6 60%, #ffe0c2 100%)' }}>

          {/* Decorative dots */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-primary/10"
                style={{
                  width: `${Math.random() * 20 + 6}px`,
                  height: `${Math.random() * 20 + 6}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 flex items-center justify-between p-6 md:p-8 gap-4">
            {/* Text */}
            <div className="flex-1 min-w-0">
              <p className="font-heading font-bold text-dark text-xl md:text-2xl leading-tight mb-1">
                Amazing Offers
              </p>
              <p className="font-heading font-bold text-primary text-lg md:text-xl leading-tight mb-3">
                On Your Dream Car!
              </p>
              <p className="text-dark-500 text-xs md:text-sm mb-4 max-w-xs leading-relaxed">
                Limited time offers on top cars. Save more, drive more!
              </p>
              <button
                onClick={() => setActiveTab('All')}
                className="btn-primary h-10 px-5 text-sm rounded-xl"
              >
                Explore Offers
              </button>
            </div>

            {/* Price tag */}
            <div className="shrink-0 flex flex-col items-center">
              <div className="relative">
                <img
                  src="/images/offers_hero_car.jpg"
                  alt="Dream Car"
                  className="w-32 md:w-44 h-20 md:h-28 object-cover rounded-2xl shadow-lg"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = AI_CAR_IMAGES[0];
                  }}
                />
                {/* Price badge */}
                <div className="absolute -top-3 -right-3 bg-primary text-white rounded-xl px-2.5 py-1.5 shadow-primary text-center rotate-6">
                  <p className="text-[9px] font-semibold leading-none mb-0.5">UP TO</p>
                  <p className="font-heading font-black text-sm leading-none">₹1,50,000*</p>
                  <p className="text-[9px] font-bold leading-none mt-0.5">OFF</p>
                </div>
              </div>
              <p className="text-[10px] text-muted mt-2">*T&C Apply</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Category Filter Tabs ── */}
      <div className="container-fluid mb-6">
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-1">
          {filterTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex-shrink-0 flex flex-col items-center gap-1.5 group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-primary shadow-primary scale-105'
                  : 'bg-white border border-border shadow-card hover:border-primary/50'
              }`}>
                {tab.emoji}
              </div>
              <span className={`text-[11px] font-medium text-center leading-tight max-w-[60px] ${
                activeTab === tab.id ? 'text-primary font-semibold' : 'text-dark-500'
              }`}>
                {tab.label}
              </span>
              {activeTab === tab.id && (
                <div className="h-0.5 w-6 bg-primary rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── Best Price Promise Banner ── */}
      <div className="container-fluid mb-8">
        <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-2xl px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
              <ShieldCheck size={18} className="text-green-600" />
            </div>
            <div>
              <p className="font-heading font-semibold text-green-800 text-sm">Best Price Promise</p>
              <p className="text-green-600 text-xs">Found a better offer? We'll match it!</p>
            </div>
          </div>
          <button className="shrink-0 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-colors">
            Know More
          </button>
        </div>
      </div>

      {/* ── Offers Grid ── */}
      <div className="container-fluid">
        {/* Section header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-heading font-bold text-dark text-lg md:text-xl">
            Exclusive Car Offers
          </h2>
          <button className="flex items-center gap-1 text-primary text-sm font-semibold hover:gap-2 transition-all">
            View All <ArrowRight size={15} />
          </button>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16 text-muted">
            <Tag size={40} className="mx-auto mb-3 opacity-30" />
            <p className="font-heading font-semibold text-dark mb-1">No offers found</p>
            <p className="text-sm">Try selecting a different category above.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((offer, idx) => (
              <OfferCard
                key={offer.id}
                offer={offer}
                copiedCode={copiedCode}
                onCopy={copyCode}
                onClaim={handleClaimClick}
                onWishlist={toggleWishlist}
                wishlisted={wishlistedIds.has(offer.id)}
                imageIndex={idx}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── Don't Miss Out Banner ── */}
      <div className="container-fluid mt-10">
        <div className="flex items-center justify-between bg-white border border-border rounded-2xl shadow-card px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
              <BadgePercent size={20} className="text-primary" />
            </div>
            <div>
              <p className="font-heading font-semibold text-dark text-sm">Don't miss out!</p>
              <p className="text-muted text-xs">New offers added every week.</p>
            </div>
          </div>
          <button
            onClick={() => setActiveTab('All')}
            className="btn-primary h-10 px-4 text-sm rounded-xl shrink-0"
          >
            Explore All Offers
          </button>
        </div>
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
            className="bg-white rounded-2xl shadow-card-hover border border-border max-w-md w-full p-6 relative animate-scale-in my-8"
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
                  <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                    <Sparkles size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-dark text-lg leading-tight">Claim Offer</h3>
                    <p className="text-muted text-xs">Unlock your exclusive benefits</p>
                  </div>
                </div>

                {/* Offer preview */}
                <div className="bg-surface rounded-xl p-4 border border-border mb-6">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <BadgePill label={getBadgeLabel(selectedOffer)} />
                    <span className="text-[10px] text-muted font-medium bg-white px-2 py-1 rounded-md border border-border">
                      {selectedOffer.category}
                    </span>
                  </div>
                  <h4 className="font-heading font-semibold text-dark text-sm mb-1">{selectedOffer.title}</h4>
                  <p className="text-muted text-xs leading-relaxed">{selectedOffer.description}</p>
                  <div className="flex items-center gap-1 mt-3 text-[10px] text-muted">
                    <Clock size={10} />
                    <span>Valid till {selectedOffer.validTill}</span>
                  </div>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {formError && (
                    <div className="bg-error/10 border border-error/20 text-error rounded-xl p-3 flex items-start gap-2 text-xs">
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
                    ) : 'Claim This Offer'}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-4 animate-scale-in">
                  <Check size={36} strokeWidth={3} />
                </div>
                <h3 className="font-heading font-bold text-dark text-xl mb-2">Offer Claimed!</h3>
                <p className="text-dark-600 text-sm max-w-sm mx-auto mb-6">
                  Congratulations, <span className="font-semibold">{formData.name}</span>! Your request for{' '}
                  <span className="font-semibold">{selectedOffer.title}</span> has been registered.
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
                  A Buywheels executive will call you within 2 hours to activate your offer.
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
