import { useState, useEffect } from 'react';
import { Tag, Clock, Copy, Check, ArrowRight, X, Sparkles, AlertCircle } from 'lucide-react';
import { fetchOffers } from '../utils/supabaseService';
import type { Offer } from '../types';

const filterTabs = ['All', 'Exchange', 'Cashback', 'EMI', 'Corporate', 'Bank', 'EV'];

export default function Offers() {
  const [offersList, setOffersList] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOffers().then(data => {
      setOffersList(data);
      setLoading(false);
    });
  }, []);

  const [activeTab, setActiveTab] = useState('All');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Claim offer states
  const [isClaimModalOpen, setIsClaimModalOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Ranchi',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const filtered = offersList.filter(o => {
    if (activeTab === 'All') return true;
    const tabLower = activeTab.toLowerCase();
    const typeLower = o.type ? o.type.toLowerCase() : '';
    const catLower = o.category ? o.category.toLowerCase() : '';
    
    if (tabLower === 'ev') {
      return typeLower === 'ev' || catLower === 'ev';
    }
    
    return typeLower === tabLower || catLower === tabLower;
  });

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleClaimClick = (offer: Offer) => {
    setSelectedOffer(offer);
    setFormData({ name: '', phone: '', email: '', city: 'Ranchi' });
    setFormError(null);
    setIsSuccess(false);
    setIsClaimModalOpen(true);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // Simple validation
    if (!formData.name.trim()) {
      setFormError('Please enter your full name');
      return;
    }
    if (!formData.phone.trim()) {
      setFormError('Please enter your mobile number');
      return;
    }
    if (!/^\d{10}$/.test(formData.phone.trim())) {
      setFormError('Please enter a valid 10-digit mobile number');
      return;
    }

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center text-muted">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary mx-auto mb-4"></div>
          Loading offers...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface pt-24 pb-24 lg:pb-12">
      {/* Hero */}
      <div className="relative overflow-hidden py-20 mb-10 rounded-3xl mx-4 sm:mx-6 lg:mx-8 mt-6">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/offers_hero_bg.png"
            alt="Offers Hero Background"
            className="w-full h-full object-cover"
          />
          {/* Dark luxury gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-primary/45" />
        </div>

        {/* Content */}
        <div className="container-fluid relative z-10 text-center py-4">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-primary/20 backdrop-blur-md rounded-full border border-primary/30">
            <Tag size={16} className="text-primary-300" />
            <span className="text-primary-200 font-semibold uppercase tracking-wider text-xs">Limited Time Deals</span>
          </div>
          <h1 className="font-heading font-bold text-white text-4xl md:text-6xl mb-4 tracking-tight drop-shadow-md">
            Exclusive Offers & <span className="text-primary-400">Savings</span>
          </h1>
          <p className="text-white/85 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Handpicked premium discounts and corporate exchange deals to help you save significantly on your next purchase.
          </p>
        </div>
      </div>

      <div className="container-fluid">
        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 mb-8">
          {filterTabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-shrink-0 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-primary text-white'
                  : 'bg-white border border-border text-dark-600 hover:text-primary hover:border-primary'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Offers grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(offer => (
            <div key={offer.id} className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-card-hover transition-all hover:-translate-y-0.5 group flex flex-col justify-between h-full">
              <div>
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      {offer.discount}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full border border-white/20">
                      {offer.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-dark text-base mb-2">{offer.title}</h3>
                  <p className="text-muted text-sm mb-4 leading-relaxed">{offer.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1.5 text-xs text-muted">
                      <Clock size={12} />
                      <span>Valid till {offer.validTill}</span>
                    </div>
                  </div>

                  {offer.code ? (
                    <div className="flex items-center justify-between bg-surface border border-dashed border-border rounded-xl px-4 py-3 mb-4">
                      <span className="font-heading font-bold text-dark text-sm tracking-wider">{offer.code}</span>
                      <button
                        onClick={() => copyCode(offer.code!)}
                        className={`flex items-center gap-1.5 text-xs font-semibold transition-colors ${
                          copiedCode === offer.code ? 'text-success' : 'text-primary hover:text-primary-600'
                        }`}
                      >
                        {copiedCode === offer.code ? <Check size={12} /> : <Copy size={12} />}
                        {copiedCode === offer.code ? 'Copied!' : 'Copy Code'}
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="px-5 pb-5">
                <button
                  onClick={() => handleClaimClick(offer)}
                  className="w-full flex items-center justify-center gap-2 h-10 bg-primary text-white font-semibold text-sm rounded-xl hover:bg-primary-600 transition-colors"
                >
                  Claim Offer <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Claim Offer Modal */}
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
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                    <Sparkles size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-dark text-lg leading-tight">Claim Offer</h3>
                    <p className="text-muted text-xs">Unlock your exclusive benefits</p>
                  </div>
                </div>

                {/* Offer Preview Card */}
                <div className="bg-surface rounded-xl p-4 border border-border mb-6">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
                      {selectedOffer.discount}
                    </span>
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
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="e.g. Rahul Kumar"
                      className="input-field"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-dark mb-1.5">Mobile Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      placeholder="10-digit mobile number"
                      className="input-field"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-dark mb-1.5">Email Address (Optional)</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="e.g. rahul@example.com"
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-dark mb-1.5">City in Jharkhand *</label>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleFormChange}
                      className="select-field"
                      required
                    >
                      {['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Hazaribagh', 'Deoghar', 'Dumka', 'Giridih'].map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary h-12 text-sm justify-center mt-2"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Processing...
                      </span>
                    ) : (
                      'Claim This Offer'
                    )}
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
                  Congratulations, <span className="font-semibold">{formData.name}</span>! Your request for <span className="font-semibold">{selectedOffer.title}</span> has been registered.
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
                  A Buywheels executive will call you within 2 hours to activate your offer and coordinate with your chosen dealer.
                </p>
                <button
                  onClick={() => setIsClaimModalOpen(false)}
                  className="w-full btn-secondary h-11 text-sm justify-center"
                >
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
