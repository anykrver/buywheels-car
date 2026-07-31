import React, { useState, useMemo } from 'react';
import { 
  Wrench, ShieldCheck, CheckCircle2, ChevronDown, ChevronUp, 
  Info, Calendar, Gauge, Sparkles, Phone, ArrowRight, ShieldAlert,
  Settings, Clock, FileText, Check
} from 'lucide-react';
import type { Vehicle, FuelType } from '../types';
import { getVehicleServiceCost, formatRupees, FuelServiceCostBreakdown } from '../utils/serviceCostService';

interface ServiceCostSectionProps {
  vehicle: Vehicle;
  selectedVariantFuel?: FuelType;
  isElectric?: boolean;
}

export default function ServiceCostSection({
  vehicle,
  selectedVariantFuel,
  isElectric = false
}: ServiceCostSectionProps) {
  const serviceSummary = useMemo(() => {
    return getVehicleServiceCost(vehicle);
  }, [vehicle]);

  // Initial selected fuel type logic
  const defaultFuel = useMemo(() => {
    if (selectedVariantFuel && serviceSummary.availableFuelTypes.includes(selectedVariantFuel)) {
      return selectedVariantFuel;
    }
    return serviceSummary.availableFuelTypes[0] || 'Petrol';
  }, [selectedVariantFuel, serviceSummary.availableFuelTypes]);

  const [selectedFuel, setSelectedFuel] = useState<FuelType>(defaultFuel);
  const [isReadMoreExpanded, setIsReadMoreExpanded] = useState(false);
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  // Booking modal state
  const [bookServiceOpen, setBookServiceOpen] = useState(false);
  const [servicePhone, setServicePhone] = useState(localStorage.getItem('niaa_user_phone') || '');
  const [serviceName, setServiceName] = useState(localStorage.getItem('niaa_user_name') || '');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const activeFuelBreakdown: FuelServiceCostBreakdown = useMemo(() => {
    return serviceSummary.fuelBreakdowns[selectedFuel] || Object.values(serviceSummary.fuelBreakdowns)[0];
  }, [serviceSummary, selectedFuel]);

  const themeBg = isElectric ? 'bg-[#03B94C]' : 'bg-primary';
  const themeText = isElectric ? 'text-[#03B94C]' : 'text-primary';
  const themeBgLight = isElectric ? 'bg-[#03B94C]/10' : 'bg-primary-50';
  const themeBorderLight = isElectric ? 'border-[#03B94C]/20' : 'border-primary/20';

  const handleBookServiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!servicePhone || servicePhone.length < 10) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setBookServiceOpen(false);
    }, 2500);
  };

  return (
    <div 
      id="service-cost-section" 
      className="bg-white rounded-2xl border border-border shadow-sm p-4 sm:p-6 mb-6 mt-6 max-w-full overflow-hidden"
    >
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl ${themeBgLight} flex items-center justify-center shrink-0`}>
            <Wrench className={`w-5 h-5 ${themeText}`} />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-dark">
              {vehicle.brand} {vehicle.model} Service Cost
            </h2>
            <p className="text-xs sm:text-sm text-muted">
              5-Year Maintenance Schedule, Free Services & Estimated Cost Breakdown
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <ShieldCheck size={14} className="text-emerald-600" />
            Verified Maintenance Cost
          </span>
        </div>
      </div>

      {/* Intro Description with Read More / Read Less */}
      <div className="py-4 border-b border-border/70">
        <div className="relative text-sm text-dark-600 leading-relaxed">
          <p className={!isReadMoreExpanded ? 'line-clamp-2 sm:line-clamp-none' : ''}>
            {serviceSummary.summaryParagraph}
            {' '}
            <span className="text-muted">
              Regular periodic maintenance ensures optimal fuel efficiency, engine longevity, high resale value, and warranty coverage for your vehicle.
            </span>
          </p>
          
          <button
            type="button"
            onClick={() => setIsReadMoreExpanded(!isReadMoreExpanded)}
            className={`mt-2 inline-flex items-center gap-1 text-xs font-bold ${themeText} hover:underline cursor-pointer`}
          >
            {isReadMoreExpanded ? (
              <>read less <ChevronUp size={14} /></>
            ) : (
              <>read more <ChevronDown size={14} /></>
            )}
          </button>
        </div>
      </div>

      {/* Fuel Type Switcher & Free Services Banner */}
      <div className="mt-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-muted uppercase tracking-wider">Select Fuel Type:</span>
            <div className="flex flex-wrap gap-2">
              {serviceSummary.availableFuelTypes.map((fuel) => {
                const isActive = selectedFuel === fuel;
                return (
                  <button
                    key={fuel}
                    type="button"
                    onClick={() => setSelectedFuel(fuel)}
                    className={`px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl transition-all ${
                      isActive
                        ? `${themeBg} text-white shadow-md scale-105`
                        : 'bg-surface hover:bg-slate-200 text-dark-600 border border-border'
                    }`}
                  >
                    {fuel}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick stats badge */}
          <div className="hidden sm:flex items-center gap-4 text-xs">
            <div className="text-right">
              <span className="text-muted block">5-Yr Total</span>
              <span className="font-heading font-bold text-dark text-sm">
                {formatRupees(activeFuelBreakdown.total5YearCost)}
              </span>
            </div>
            <div className="h-6 w-px bg-border"></div>
            <div className="text-right">
              <span className="text-muted block">Cost / KM</span>
              <span className="font-heading font-bold text-success text-sm">
                ₹{activeFuelBreakdown.costPerKm}/km
              </span>
            </div>
          </div>
        </div>

        {/* Free Services Banner */}
        <div className={`p-4 rounded-xl ${themeBgLight} border ${themeBorderLight} flex items-center justify-between gap-4 mb-6 shadow-2xs`}>
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-lg ${themeBg} text-white flex items-center justify-center shrink-0`}>
              <Sparkles size={16} />
            </div>
            <div>
              <p className="font-heading font-bold text-dark text-sm sm:text-base">
                {activeFuelBreakdown.freeServicesSummary}
              </p>
              <p className="text-xs text-muted">
                Labor charges are waived for the first 3 scheduled service visits (up to 30,000 km or 3 years).
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setBookServiceOpen(true)}
            className={`hidden md:inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl text-white ${themeBg} hover:opacity-90 transition-all shadow-sm shrink-0`}
          >
            Get Service Estimate
          </button>
        </div>

        {/* Service Schedule Items List */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between text-xs font-bold text-muted uppercase tracking-wider px-2">
            <span>Service Schedule</span>
            <span>Estimated Cost</span>
          </div>

          {activeFuelBreakdown.services.map((item) => {
            const isExpanded = expandedServiceId === item.id;
            return (
              <div 
                key={item.id}
                className={`border rounded-2xl transition-all overflow-hidden ${
                  isExpanded ? `${themeBorderLight} bg-slate-50/70 shadow-sm` : 'border-border bg-white hover:border-slate-300'
                }`}
              >
                <div 
                  onClick={() => setExpandedServiceId(isExpanded ? null : item.id)}
                  className="p-4 flex items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-heading font-bold text-xs shrink-0 ${
                      item.isFree 
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' 
                        : 'bg-slate-100 text-slate-700 border border-slate-200'
                    }`}>
                      {item.serviceTitle.split(' ')[0]}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-heading font-bold text-dark text-sm sm:text-base">
                          {item.serviceTitle}
                        </p>
                        {item.isFree && (
                          <span className="text-[10px] font-extrabold bg-emerald-500 text-white px-2 py-0.5 rounded-full uppercase tracking-wider">
                            Free Labor
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted flex items-center gap-1 mt-0.5">
                        <Gauge size={12} className="text-muted" />
                        {item.scheduleKm}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      {item.isFree ? (
                        <span className="inline-block font-heading font-black text-emerald-600 text-sm sm:text-base tracking-wide bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-xl">
                          FREE
                        </span>
                      ) : (
                        <div>
                          <span className="font-heading font-bold text-dark text-sm sm:text-base">
                            {formatRupees(item.cost)}
                          </span>
                          <span className="block text-[10px] text-muted font-normal">Incl. Taxes & Parts</span>
                        </div>
                      )}
                    </div>

                    <button 
                      type="button" 
                      className="text-muted hover:text-dark p-1 rounded-lg transition-colors"
                      aria-label="Toggle details"
                    >
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                  </div>
                </div>

                {/* Expanded Details Drawer */}
                {isExpanded && (
                  <div className="px-4 pb-4 pt-1 border-t border-border/60 bg-white space-y-3 animate-fade-in text-xs">
                    <p className="text-dark-600 font-medium leading-relaxed">
                      {item.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="bg-surface p-3 rounded-xl border border-border/80">
                        <span className="font-bold text-dark block mb-2 flex items-center gap-1.5">
                          <Settings size={14} className={themeText} /> Parts Replaced & Inspected
                        </span>
                        <ul className="space-y-1.5 pl-1">
                          {item.partsReplaced.map((part, idx) => (
                            <li key={idx} className="flex items-start gap-1.5 text-dark-600">
                              <Check size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                              <span>{part}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-surface p-3 rounded-xl border border-border/80 flex flex-col justify-between">
                        <div>
                          <span className="font-bold text-dark block mb-2 flex items-center gap-1.5">
                            <FileText size={14} className={themeText} /> Cost Breakdown
                          </span>
                          <div className="space-y-1.5 text-dark-600">
                            <div className="flex justify-between">
                              <span className="text-muted">Labor Charges:</span>
                              <span className="font-semibold">{item.isFree ? 'FREE (Waived)' : formatRupees(item.laborCost)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted">Parts & Consumables:</span>
                              <span className="font-semibold">{formatRupees(item.partsCost)}</span>
                            </div>
                            <div className="flex justify-between pt-1 border-t border-border/60 font-bold text-dark">
                              <span>Estimated Total:</span>
                              <span>{item.isFree ? 'FREE' : formatRupees(item.cost)}</span>
                            </div>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => setBookServiceOpen(true)}
                          className={`mt-3 w-full py-1.5 text-[11px] font-bold rounded-lg ${themeBgLight} ${themeText} hover:bg-slate-200 transition-colors text-center`}
                        >
                          Book This Service Slot &rarr;
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 5-Year Maintenance Highlights Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-2xl bg-surface border border-border flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Calendar size={20} />
            </div>
            <div>
              <p className="text-xs text-muted font-medium">5-Year Service Cost</p>
              <p className="font-heading font-bold text-dark text-lg">
                {formatRupees(activeFuelBreakdown.total5YearCost)}
              </p>
              <p className="text-[10px] text-emerald-600 font-semibold">Includes 3 free services</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-surface border border-border flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Clock size={20} />
            </div>
            <div>
              <p className="text-xs text-muted font-medium">Average Annual Cost</p>
              <p className="font-heading font-bold text-dark text-lg">
                {formatRupees(activeFuelBreakdown.avgAnnualCost)} / yr
              </p>
              <p className="text-[10px] text-muted">Estimated yearly maintenance budget</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-surface border border-border flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Gauge size={20} />
            </div>
            <div>
              <p className="text-xs text-muted font-medium">Running Cost per KM</p>
              <p className="font-heading font-bold text-emerald-600 text-lg">
                ₹{activeFuelBreakdown.costPerKm} / km
              </p>
              <p className="text-[10px] text-muted">Calculated over 50,000 km</p>
            </div>
          </div>
        </div>

        {/* Common Wear & Tear Spare Parts Price Table */}
        <div className="border border-border rounded-2xl p-4 bg-white">
          <h3 className="font-heading font-bold text-dark text-base mb-3 flex items-center gap-2">
            <Settings size={18} className={themeText} />
            Common Spare Parts & Consumables Pricing ({selectedFuel})
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b border-border bg-surface text-muted uppercase font-bold">
                  <th className="p-2.5 rounded-l-lg">Item / Part Name</th>
                  <th className="p-2.5">Replacement Interval</th>
                  <th className="p-2.5 text-right rounded-r-lg">Approx. Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {activeFuelBreakdown.commonPartsPrices.map((part, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                    <td className="p-2.5 font-semibold text-dark">{part.name}</td>
                    <td className="p-2.5 text-muted">{part.interval}</td>
                    <td className="p-2.5 text-right font-bold text-dark">{formatRupees(part.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-muted mt-3">
            * Note: Prices shown are indicative estimated MRPs including GST. Actual service costs may slightly vary based on authorized dealership location, wheel alignment/balancing needs, and extra consumables.
          </p>
        </div>

        {/* Bottom CTA Banner */}
        <div className={`mt-6 p-4 sm:p-5 rounded-2xl ${themeBgLight} border ${themeBorderLight} flex flex-col sm:flex-row items-center justify-between gap-4`}>
          <div>
            <h4 className="font-heading font-bold text-dark text-base sm:text-lg">
              Want an exact service quotation or door-step maintenance?
            </h4>
            <p className="text-xs text-muted mt-0.5">
              Connect with verified {vehicle.brand} authorized service centers near you for discounted service packages.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setBookServiceOpen(true)}
            className={`w-full sm:w-auto px-5 py-3 rounded-xl text-white font-bold text-sm ${themeBg} hover:opacity-95 transition-all shadow-md shrink-0 flex items-center justify-center gap-2`}
          >
            <Phone size={16} /> Schedule Authorized Service
          </button>
        </div>
      </div>

      {/* Book Service Modal */}
      {bookServiceOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative border border-border animate-scale-in">
            <button
              onClick={() => setBookServiceOpen(false)}
              className="absolute top-4 right-4 text-muted hover:text-dark p-1 rounded-lg"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 rounded-xl ${themeBgLight} flex items-center justify-center`}>
                <Wrench className={`w-5 h-5 ${themeText}`} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-dark text-lg">
                  {vehicle.brand} {vehicle.model} Service Inquiry
                </h3>
                <p className="text-xs text-muted">Get doorstep pick-up & upfront pricing</p>
              </div>
            </div>

            {bookingSuccess ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 size={28} />
                </div>
                <h4 className="font-heading font-bold text-dark text-lg">Inquiry Submitted!</h4>
                <p className="text-xs text-muted">
                  Our authorized service advisor for {vehicle.brand} will get in touch with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookServiceSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-dark mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={serviceName}
                    onChange={(e) => setServiceName(e.target.value)}
                    placeholder="Enter your name"
                    className="input-field h-10 text-xs w-full"
                  />
                </div>

                <div>
                  <label className="block font-bold text-dark mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={servicePhone}
                    onChange={(e) => setServicePhone(e.target.value.replace(/\D/g, ''))}
                    placeholder="10-digit mobile number"
                    className="input-field h-10 text-xs w-full"
                  />
                </div>

                <div>
                  <label className="block font-bold text-dark mb-1">Preferred Fuel Variant</label>
                  <select 
                    value={selectedFuel} 
                    onChange={(e) => setSelectedFuel(e.target.value as FuelType)}
                    className="input-field h-10 text-xs w-full bg-white"
                  >
                    {serviceSummary.availableFuelTypes.map(f => (
                      <option key={f} value={f}>{f}</option>
                    ))}
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className={`w-full py-3 rounded-xl text-white font-bold text-sm ${themeBg} hover:opacity-90 transition-all shadow-md`}
                  >
                    Request Free Service Callback
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
