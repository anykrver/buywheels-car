import { useState, useEffect } from 'react';
import { MapPin, Phone, Star, Clock, Search, Building2, Check } from 'lucide-react';
import { fetchDealers } from '../utils/supabaseService';
import type { Dealer } from '../types';
import Toast from '../components/Toast';

const cities = ['All Cities', 'Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Hazaribagh'];
const brandFilters = ['All Brands', 'Maruti Suzuki', 'Hyundai', 'Tata', 'Mahindra', 'Toyota', 'Honda', 'Royal Enfield'];

export default function Dealers() {
  const [dealersList, setDealersList] = useState<Dealer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDealers().then(data => {
      setDealersList(data);
      setLoading(false);
    });
  }, []);

  const [search, setSearch] = useState('');
  const [city, setCity] = useState('All Cities');
  const [brand, setBrand] = useState('All Brands');
  const [toast, setToast] = useState<{ message: string; type?: 'success' | 'error' } | null>(null);

  // Partnership form states
  const [isPartnerFormOpen, setIsPartnerFormOpen] = useState(false);
  const [partnerForm, setPartnerForm] = useState({ name: '', showroomName: '', phone: '', city: 'Ranchi' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPartnerSuccess, setIsPartnerSuccess] = useState(false);

  const filtered = dealersList.filter(d => {
    if (search && !d.name.toLowerCase().includes(search.toLowerCase())) return false;
    if (city !== 'All Cities' && d.city !== city) return false;
    if (brand !== 'All Brands' && !d.brands.includes(brand)) return false;
    return true;
  });

  const handleGetDirections = (dealerName: string, address: string) => {
    setToast({ message: `Opening Google Maps for ${dealerName}...`, type: 'success' });
    const query = encodeURIComponent(`${dealerName} ${address}`);
    setTimeout(() => {
      window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
    }, 1000);
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerForm.name || !partnerForm.showroomName || !partnerForm.phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsPartnerSuccess(true);
    }, 1200);
  };

  const handlePartnerInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setPartnerForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center text-muted">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary mx-auto mb-4"></div>
          Loading dealers list...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface pt-24 pb-24 lg:pb-12">
      {/* Hero */}
      <div className="bg-dark py-14 mb-10">
        <div className="container-fluid text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Dealer Network</p>
          <h1 className="font-heading font-bold text-white text-4xl md:text-5xl mb-3">Find Authorized Dealers</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Explore our network of authorized dealerships across Jharkhand
          </p>
          {/* Stats */}
          <div className="flex justify-center gap-12 mt-8 pt-8 border-t border-white/15">
            {[
              { value: '50+', label: 'Dealers' },
              { value: '12', label: 'Cities' },
              { value: '30+', label: 'Brands' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="font-heading font-bold text-primary text-3xl">{value}</p>
                <p className="text-white/60 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-fluid">
        {/* Filters */}
        <div className="bg-white rounded-2xl border border-border p-4 mb-8">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
              <input
                type="text"
                placeholder="Search dealers..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="input-field pl-10"
              />
            </div>
            <select value={city} onChange={e => setCity(e.target.value)} className="select-field sm:w-44">
              {cities.map(c => <option key={c}>{c}</option>)}
            </select>
            <select value={brand} onChange={e => setBrand(e.target.value)} className="select-field sm:w-48">
              {brandFilters.map(b => <option key={b}>{b}</option>)}
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-muted">
            <span className="font-semibold text-dark">{filtered.length}</span> dealers found
          </p>
        </div>

        {/* Dealer cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(dealer => (
            <div
              key={dealer.id}
              className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-card-hover transition-all hover:-translate-y-0.5"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={dealer.image}
                  alt={dealer.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full border border-white/20">
                    {dealer.brands.join(', ')}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-heading font-bold text-dark text-base">{dealer.name}</h3>
                    <div className="flex items-center gap-1 text-xs text-muted mt-0.5">
                      <MapPin size={11} /> {dealer.city}, Jharkhand
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-warning/10 px-2.5 py-1 rounded-full">
                    <Star size={12} className="text-warning fill-warning" />
                    <span className="text-sm font-semibold text-dark">{dealer.rating}</span>
                  </div>
                </div>

                <p className="text-sm text-muted mb-2 flex items-start gap-2">
                  <MapPin size={13} className="mt-0.5 flex-shrink-0 text-muted" />
                  {dealer.address}
                </p>
                <p className="text-sm text-muted mb-4 flex items-center gap-2">
                  <Clock size={13} className="flex-shrink-0 text-muted" />
                  {dealer.openHours}
                </p>

                <div className="flex gap-2">
                  <a
                    href={`tel:${dealer.phone}`}
                    className="flex-1 flex items-center justify-center gap-2 h-10 bg-surface border border-border rounded-xl text-sm font-medium text-dark hover:border-primary hover:text-primary transition-all"
                  >
                    <Phone size={14} />
                    Call
                  </a>
                  <button
                    onClick={() => handleGetDirections(dealer.name, dealer.address)}
                    className="flex-1 h-10 bg-primary text-white font-semibold text-sm rounded-xl hover:bg-primary-600 transition-colors"
                  >
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="col-span-3 text-center py-16">
              <Building2 size={40} className="text-muted mx-auto mb-3" />
              <h3 className="font-heading font-semibold text-dark text-lg mb-1">No dealers found</h3>
              <p className="text-muted text-sm">Try adjusting your search or filters</p>
            </div>
          )}
        </div>

        {/* CTA Banner & Partner Form */}
        <div className="mt-16 bg-white rounded-2xl border border-border overflow-hidden shadow-card max-w-3xl mx-auto" id="partner-section">
          {!isPartnerFormOpen ? (
            <div className="p-8 text-center bg-primary-50 border-primary/10 border">
              <h2 className="font-heading font-bold text-dark text-2xl mb-3">Want to Become a Buywheels Partner?</h2>
              <p className="text-muted text-sm mb-6 max-w-xl mx-auto">Join our growing network of authorized dealerships and access thousands of qualified buyers across Jharkhand.</p>
              <button
                onClick={() => setIsPartnerFormOpen(true)}
                className="btn-primary inline-flex items-center gap-2"
              >
                Become Partner Dealership
              </button>
            </div>
          ) : (
            <div className="p-6 sm:p-8">
              {!isPartnerSuccess ? (
                <form onSubmit={handlePartnerSubmit} className="space-y-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-heading font-bold text-dark text-xl">Dealer Partnership Application</h3>
                    <button
                      onClick={() => setIsPartnerFormOpen(false)}
                      className="text-xs text-muted hover:text-primary font-semibold"
                    >
                      Cancel
                    </button>
                  </div>
                  <p className="text-muted text-xs leading-relaxed mb-4">Submit your showroom details to list vehicles and offer deals on Buywheels.</p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-dark mb-1.5">Contact Name *</label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={partnerForm.name}
                        onChange={handlePartnerInputChange}
                        placeholder="e.g. Rajeev Sinha"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-dark mb-1.5">Showroom / Agency Name *</label>
                      <input
                        required
                        type="text"
                        name="showroomName"
                        value={partnerForm.showroomName}
                        onChange={handlePartnerInputChange}
                        placeholder="e.g. Nexa Ranchi Central"
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-dark mb-1.5">Mobile Number *</label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={partnerForm.phone}
                        onChange={handlePartnerInputChange}
                        placeholder="10-digit number"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-dark mb-1.5">City in Jharkhand *</label>
                      <select
                        name="city"
                        value={partnerForm.city}
                        onChange={handlePartnerInputChange}
                        className="select-field"
                        required
                      >
                        {['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Hazaribagh', 'Deoghar'].map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full h-11 text-sm justify-center mt-2"
                  >
                    {isSubmitting ? 'Submitting Application...' : 'Submit Partnership Request'}
                  </button>
                </form>
              ) : (
                <div className="text-center py-6">
                  <div className="w-12 h-12 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-3">
                    <Check size={24} strokeWidth={2.5} />
                  </div>
                  <h4 className="font-heading font-bold text-dark text-lg mb-1">Partnership Request Registered</h4>
                  <p className="text-muted text-sm max-w-md mx-auto mb-4">
                    Thank you, <span className="font-semibold">{partnerForm.name}</span>! We have received dealership partnership interest for <span className="font-semibold">{partnerForm.showroomName}</span>.
                  </p>
                  <p className="text-xs text-muted max-w-xs mx-auto mb-6">
                    A dealer relations officer will call you on <span className="font-semibold">+91 {partnerForm.phone}</span> within 24 hours to verify dealership licenses and onboard your catalog.
                  </p>
                  <button
                    onClick={() => {
                      setIsPartnerSuccess(false);
                      setIsPartnerFormOpen(false);
                      setPartnerForm({ name: '', showroomName: '', phone: '', city: 'Ranchi' });
                    }}
                    className="btn-secondary h-10 text-xs justify-center px-6"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Toast Alert Notification */}
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}
