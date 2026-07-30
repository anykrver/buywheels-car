import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Calendar, Check, Car, MapPin, ArrowLeft } from 'lucide-react';
import { supabase } from '../utils/supabaseClient';
import { vehicles as mockVehicles, formatPriceShort } from '../utils/data';
import { fetchVehicles } from '../utils/supabaseService';
import type { Vehicle } from '../types';

export default function TestDrive() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [vehicleList, setVehicleList] = useState<Vehicle[]>(mockVehicles);
  const [vehicleId, setVehicleId] = useState(mockVehicles[0]?.id || '');

  useEffect(() => {
    fetchVehicles().then(data => {
      if (data && data.length > 0) setVehicleList(data);
    });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Ranchi',
    date: '',
    timeSlot: 'Morning (10 AM - 1 PM)',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Pre-select vehicle from query parameter if present
  useEffect(() => {
    const vParam = searchParams.get('vehicle');
    if (vParam) {
      const match = vehicleList.find(v => v.id === vParam || v.slug === vParam);
      if (match) {
        setVehicleId(match.id);
      }
    }
  }, [searchParams, vehicleList]);

  const selectedVehicle = vehicleList.find(v => v.id === vehicleId) || vehicleList[0];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) return;

    setIsSubmitting(true);
    
    const leadPayload = {
      name: formData.name,
      email: formData.email || null,
      phone: formData.phone,
      source: 'Test Drive Request',
      vehicle_interest: selectedVehicle ? `${selectedVehicle.brand} ${selectedVehicle.model}` : 'Unknown',
      notes: `Preferred Date: ${formData.date}. Slot: ${formData.timeSlot}. Branch: ${formData.city}`,
      stage: 'Test Drive',
      dealer: formData.city + ' Authorized'
    };

    const { error } = await supabase
      .from('leads')
      .insert([leadPayload]);

    setIsSubmitting(false);
    if (!error) {
      setIsSuccess(true);
    } else {
      console.error('Error booking test drive:', error);
      alert('Failed to submit booking request. Please check your connection and try again.');
    }
  };

  return (
    <div className="min-h-screen bg-surface pt-24 pb-24 lg:pb-12 animate-fade-in">
      <div className="container-fluid max-w-4xl">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-primary mb-6 transition-colors"
        >
          <ArrowLeft size={14} /> Back
        </button>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: Info Card */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
              <h2 className="font-heading font-bold text-dark text-xl mb-2">Book a Test Drive</h2>
              <p className="text-muted text-xs leading-relaxed mb-6">
                Experience your dream vehicle on the road. Schedule a free home test drive or visit your nearest authorized dealership.
              </p>

              {selectedVehicle && (
                <div className="border-t border-border pt-6">
                  <p className="text-xs text-muted uppercase tracking-wider font-semibold mb-3">Selected Vehicle</p>
                  <img
                    src={selectedVehicle.thumbnailUrl}
                    alt={selectedVehicle.model}
                    className="w-full aspect-video object-cover rounded-xl mb-3 border border-border"
                    onError={(e) => {
                      e.currentTarget.src = 'https://imgd.aeplcdn.com/664x374/n/cw/ec/141879/nexon-ev-exterior-right-front-three-quarter-7.jpeg';
                    }}
                  />
                  <div>
                    <span className="text-[10px] bg-primary-50 text-primary font-bold px-2 py-0.5 rounded uppercase">
                      {selectedVehicle.brand}
                    </span>
                    <h3 className="font-heading font-bold text-dark text-lg mt-1">{selectedVehicle.model}</h3>
                    <p className="text-muted text-xs">Ex-showroom: {formatPriceShort(selectedVehicle.startingPrice)}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-dark text-white rounded-2xl p-6 shadow-sm">
              <h4 className="font-heading font-semibold text-sm uppercase text-primary tracking-wider mb-4">How it works</h4>
              <ul className="space-y-4 text-xs text-white/80">
                <li className="flex gap-3">
                  <span className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center font-bold text-white shrink-0">1</span>
                  <p>Choose your vehicle, select a date & local dealership branch.</p>
                </li>
                <li className="flex gap-3">
                  <span className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center font-bold text-white shrink-0">2</span>
                  <p>A advisor coordinates with you to finalize delivery or showroom slots.</p>
                </li>
                <li className="flex gap-3">
                  <span className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center font-bold text-white shrink-0">3</span>
                  <p>Drive the vehicle with absolute guidance and zero sales pressure.</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Test Drive Booking Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-border shadow-card p-6 sm:p-8">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center gap-2.5 mb-4">
                    <Calendar size={20} className="text-primary" />
                    <h3 className="font-heading font-bold text-dark text-lg leading-none">Schedule Details</h3>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-dark mb-1.5">Select Vehicle *</label>
                    <select
                      name="vehicleId"
                      value={vehicleId}
                      onChange={e => setVehicleId(e.target.value)}
                      className="select-field text-sm"
                    >
                      {vehicleList.map(v => (
                        <option key={v.id} value={v.id}>{v.brand} {v.model}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-dark mb-1.5">Select City *</label>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="select-field text-sm"
                        required
                      >
                        {['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Hazaribagh', 'Deoghar'].map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-dark mb-1.5">Preferred Date *</label>
                      <input
                        required
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="input-field text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-dark mb-1.5">Preferred Time Slot *</label>
                    <select
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleInputChange}
                      className="select-field text-sm"
                      required
                    >
                      <option>Morning (10 AM - 1 PM)</option>
                      <option>Afternoon (1 PM - 4 PM)</option>
                      <option>Evening (4 PM - 7 PM)</option>
                    </select>
                  </div>

                  <div className="pt-2 border-t border-border flex items-center gap-2 mb-4">
                    <Car size={16} className="text-primary" />
                    <span className="text-xs font-semibold text-dark">Contact Information</span>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-dark mb-1.5">Full Name *</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Srikant Roy"
                      className="input-field"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-dark mb-1.5">Mobile Number *</label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="10-digit number"
                        className="input-field"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-dark mb-1.5">Email Address (Optional)</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="input-field"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full h-12 justify-center text-sm mt-4"
                  >
                    {isSubmitting ? 'Requesting Schedule...' : 'Book Free Test Drive'}
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-4 animate-scale-in">
                    <Check size={36} strokeWidth={3} />
                  </div>
                  <h3 className="font-heading font-bold text-dark text-2xl mb-2">Test Drive Requested!</h3>
                  <p className="text-dark-600 text-sm max-w-md mx-auto mb-6">
                    Congratulations, <span className="font-semibold">{formData.name}</span>! Your test drive booking request for the <span className="font-semibold">{selectedVehicle.brand} {selectedVehicle.model}</span> has been registered.
                  </p>

                  <div className="bg-surface rounded-xl p-4 border border-border text-left mb-6 max-w-sm mx-auto text-xs space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted">Vehicle:</span>
                      <span className="font-semibold text-dark">{selectedVehicle.brand} {selectedVehicle.model}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Preferred Date:</span>
                      <span className="font-semibold text-dark">{formData.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Time Slot:</span>
                      <span className="font-semibold text-dark">{formData.timeSlot}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Location:</span>
                      <span className="font-semibold text-dark flex items-center gap-1"><MapPin size={11} /> {formData.city}</span>
                    </div>
                  </div>

                  <p className="text-xs text-muted max-w-xs mx-auto mb-6">
                    A showroom representative will call you on <span className="font-semibold">+91 {formData.phone}</span> within 2 hours to confirm your scheduled slot.
                  </p>

                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({ name: '', phone: '', email: '', city: 'Ranchi', date: '', timeSlot: 'Morning (10 AM - 1 PM)' });
                    }}
                    className="btn-secondary h-11 text-xs justify-center"
                  >
                    Schedule Another Test Drive
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
