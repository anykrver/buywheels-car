import { useState } from 'react';
import { Shield, Check, Calculator, FileText } from 'lucide-react';
import { vehicles, formatPriceShort } from '../utils/data';

export default function Insurance() {
  const [vehicleId, setVehicleId] = useState(vehicles[0]?.id || '');
  const [year, setYear] = useState('2024');
  const [claims, setClaims] = useState('no');
  const showEstimate = true;

  // Form lead submission
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const selectedVehicle = vehicles.find(v => v.id === vehicleId) || vehicles[0];

  // Simple premium estimation logic
  const calculatePremiums = () => {
    if (!selectedVehicle) return { comprehensive: 0, thirdParty: 0, idv: 0 };
    
    const baseValue = selectedVehicle.startingPrice * 0.95;
    const yearMultiplier = year === '2024' ? 0.95 : year === '2023' ? 0.8 : year === '2022' ? 0.7 : 0.6;
    const idv = baseValue * yearMultiplier;
    
    // Comprehensive premium calculation: IDV * 2.5% + Third Party Base
    let comprehensiveBase = idv * 0.022;
    if (claims === 'yes') {
      comprehensiveBase = comprehensiveBase * 1.15; // 15% loading for claim history
    } else {
      comprehensiveBase = comprehensiveBase * 0.8; // 20% No Claim Bonus discount
    }

    const engineCCVal = selectedVehicle.engineCC ?? 0;
    const thirdParty = engineCCVal > 1500 ? 7897 : engineCCVal > 1000 ? 3416 : 2094;
    const comprehensive = comprehensiveBase + thirdParty;

    return {
      comprehensive: Math.round(comprehensive),
      thirdParty: Math.round(thirdParty),
      idv: Math.round(idv),
    };
  };

  const { comprehensive, thirdParty, idv } = calculatePremiums();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-surface pt-24 pb-24 lg:pb-12 animate-fade-in">
      {/* Hero */}
      <div className="bg-dark py-16 mb-10 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 10% 20%, white 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
        <div className="container-fluid relative z-10">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Vehicle Insurance</p>
          <h1 className="font-heading font-bold text-white text-4xl md:text-5xl mb-4">
            Zero Commission Insurance
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Get instant car insurance quotes from leading insurers. Zero extra charges, 100% claim assistance.
          </p>
        </div>
      </div>

      <div className="container-fluid">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left: Input Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-border shadow-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                  <Calculator size={20} className="text-primary" />
                </div>
                <h2 className="font-heading font-bold text-dark text-xl">Quote Calculator</h2>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-dark mb-1.5">Select Vehicle</label>
                  <select
                    value={vehicleId}
                    onChange={e => setVehicleId(e.target.value)}
                    className="select-field"
                  >
                    {vehicles.map(v => (
                      <option key={v.id} value={v.id}>{v.brand} {v.model}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-dark mb-1.5">Registration Year</label>
                  <select
                    value={year}
                    onChange={e => setYear(e.target.value)}
                    className="select-field"
                  >
                    <option value="2024">2024 (Brand New / 1st Year)</option>
                    <option value="2023">2023 (1 Year Old)</option>
                    <option value="2022">2022 (2 Years Old)</option>
                    <option value="2021">2021 (3 Years Old)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-dark mb-1.5">Claim Made in Past Year?</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setClaims('no')}
                      className={`h-11 rounded-xl font-semibold text-sm border transition-all ${
                        claims === 'no'
                          ? 'border-primary bg-primary-50 text-primary'
                          : 'border-border text-dark hover:border-primary/50'
                      }`}
                    >
                      No ( NCB Discount )
                    </button>
                    <button
                      type="button"
                      onClick={() => setClaims('yes')}
                      className={`h-11 rounded-xl font-semibold text-sm border transition-all ${
                        claims === 'yes'
                          ? 'border-primary bg-primary-50 text-primary'
                          : 'border-border text-dark hover:border-primary/50'
                      }`}
                    >
                      Yes
                    </button>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="bg-surface rounded-xl p-4 border border-border text-xs space-y-2 text-muted">
                    <div className="flex justify-between">
                      <span>Vehicle Category:</span>
                      <span className="font-semibold text-dark capitalize">{selectedVehicle?.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Engine Capacity:</span>
                      <span className="font-semibold text-dark">{selectedVehicle?.engineCC} cc</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estimated IDV:</span>
                      <span className="font-semibold text-dark">{formatPriceShort(idv)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quote Display and Enquiry */}
          <div className="lg:col-span-2 space-y-6">
            {showEstimate && (
              <div className="grid md:grid-cols-2 gap-6">
                {/* Plan 1: Comprehensive */}
                <div className="bg-white rounded-2xl border-2 border-primary shadow-card p-6 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl">
                    Recommended
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Shield className="text-primary" size={24} />
                      <h3 className="font-heading font-bold text-dark text-lg">Comprehensive Plan</h3>
                    </div>
                    <p className="text-muted text-xs leading-relaxed mb-6">
                      Full protection: covers damages to your own vehicle, theft, fire, natural disasters, plus third-party liabilities.
                    </p>
                    <ul className="space-y-2 text-xs mb-6">
                      <li className="flex items-center gap-2 text-dark-600"><Check size={14} className="text-success" /> Damaged own vehicle cover</li>
                      <li className="flex items-center gap-2 text-dark-600"><Check size={14} className="text-success" /> Third party property & life cover</li>
                      <li className="flex items-center gap-2 text-dark-600"><Check size={14} className="text-success" /> Theft & fire protection</li>
                      <li className="flex items-center gap-2 text-dark-600"><Check size={14} className="text-success" /> Optional cash-less add-ons</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted uppercase tracking-wider font-semibold">Premium quote starting at</p>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="font-heading font-bold text-dark text-3xl">₹{comprehensive.toLocaleString('en-IN')}</span>
                      <span className="text-muted text-xs">/year</span>
                    </div>
                  </div>
                </div>

                {/* Plan 2: Third Party */}
                <div className="bg-white rounded-2xl border border-border shadow-card p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <FileText className="text-muted" size={24} />
                      <h3 className="font-heading font-bold text-dark text-lg">Third-Party Cover</h3>
                    </div>
                    <p className="text-muted text-xs leading-relaxed mb-6">
                      Legal mandate cover: covers third-party property damage and bodily injuries. Does NOT cover damage to your own vehicle.
                    </p>
                    <ul className="space-y-2 text-xs mb-6">
                      <li className="flex items-center gap-2 text-dark-600"><Check size={14} className="text-success" /> Third party injury cover</li>
                      <li className="flex items-center gap-2 text-dark-600"><Check size={14} className="text-success" /> Third party property cover</li>
                      <li className="flex items-center gap-2 text-dark-600 text-muted/60">✕ Own damage cover</li>
                      <li className="flex items-center gap-2 text-dark-600 text-muted/60">✕ Natural calamity cover</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted uppercase tracking-wider font-semibold">Mandatory premium starting at</p>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="font-heading font-bold text-dark text-3xl">₹{thirdParty.toLocaleString('en-IN')}</span>
                      <span className="text-muted text-xs">/year</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Enquiry Lead Form */}
            <div className="bg-white rounded-2xl border border-border shadow-card p-6 sm:p-8">
              {!isSuccess ? (
                <>
                  <h3 className="font-heading font-bold text-dark text-xl mb-2">Speak to a Buywheels Advisor</h3>
                  <p className="text-muted text-sm mb-6">Enter your contact info to get cash-less add-ons, NCB verification, and the lowest rates negotiated.</p>
                  
                  <form onSubmit={handleSubmit} className="grid sm:grid-cols-3 gap-4 items-end">
                    <div>
                      <label className="block text-xs font-semibold text-dark mb-1.5">Full Name *</label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Amit Kumar"
                        className="input-field h-11"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-dark mb-1.5">Mobile Number *</label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="10-digit number"
                        className="input-field h-11"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary h-11 text-sm justify-center w-full"
                    >
                      {isSubmitting ? 'Submitting...' : 'Request Callback'}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-6">
                  <div className="w-12 h-12 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-3">
                    <Check size={24} strokeWidth={2.5} />
                  </div>
                  <h4 className="font-heading font-bold text-dark text-lg mb-1">Quote Request Registered</h4>
                  <p className="text-muted text-sm max-w-md mx-auto">
                    Thanks <span className="font-semibold">{formData.name}</span>! An insurance specialist will contact you on <span className="font-semibold">+91 {formData.phone}</span> within 10 minutes to verify your NCB and assist you in completing your policy purchase.
                  </p>
                </div>
              )}
            </div>

            {/* Insurance FAQ / Benefit */}
            <div className="bg-primary-50 border border-primary/20 rounded-2xl p-6">
              <h4 className="font-heading font-bold text-dark text-base mb-3">Why Buy Insurance with Buywheels?</h4>
              <div className="grid sm:grid-cols-3 gap-6 text-sm">
                <div>
                  <h5 className="font-semibold text-dark mb-1">Zero Hidden Costs</h5>
                  <p className="text-muted text-xs leading-relaxed">No added agent commissions. Direct pricing from top insurers in Jharkhand.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-dark mb-1">100% Claim Support</h5>
                  <p className="text-muted text-xs leading-relaxed">Dedicated relationship manager for claims, towing, and cash-less coordination.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-dark mb-1">Cash-less Networks</h5>
                  <p className="text-muted text-xs leading-relaxed">Network of over 100+ authorized repair workshops across Ranchi, Jamshedpur, and Bokaro.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
