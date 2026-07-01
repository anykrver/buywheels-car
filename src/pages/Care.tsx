import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Wrench, Bell, Car, HeadphonesIcon, Star, ArrowRight, Check, X, Sparkles } from 'lucide-react';

const services = [
  {
    icon: HeadphonesIcon,
    title: '24/7 Roadside Assistance',
    description: 'Breakdown? Flat tyre? Need towing? We\'re available round the clock to help you get back on the road.',
    features: ['Emergency towing', 'Tyre change', 'Battery jumpstart', 'Fuel delivery'],
  },
  {
    icon: Wrench,
    title: 'Service Reminders',
    description: 'Never miss a scheduled service again. Get smart reminders for oil changes, tyre rotation, and more.',
    features: ['Oil change alerts', 'Tyre rotation reminders', 'Insurance renewal', 'Pollution check due'],
  },
  {
    icon: Shield,
    title: 'Warranty Support',
    description: 'We help you navigate manufacturer warranties and extended coverage — so you\'re always protected.',
    features: ['Extended warranty management', 'Claim assistance', 'Dealer coordination', 'Service history tracking'],
  },
  {
    icon: Star,
    title: 'Insurance Assistance',
    description: 'Compare insurance plans, renew policies, and file claims — we handle the paperwork so you don\'t have to.',
    features: ['Policy comparison', 'Online renewal', 'Claim filing support', 'Add-on coverage advice'],
  },
  {
    icon: Car,
    title: 'Accessories Store',
    description: 'Shop from a curated selection of genuine and premium accessories for your vehicle, delivered to your door.',
    features: ['Genuine accessories', 'Seat covers & mats', 'Performance upgrades', 'Safety accessories'],
  },
  {
    icon: Bell,
    title: 'Buywheels Owner\'s Club',
    description: 'Join thousands of Buywheels owners for exclusive meetups, discounts, and driving experiences in Jharkhand.',
    features: ['Exclusive member discounts', 'Driving events', 'Referral rewards', 'Priority support'],
  },
];

export default function Care() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClaim = (planName: string) => {
    setSelectedPlan(planName);
    setIsSuccess(false);
    setFormData({ name: '', phone: '' });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-surface pt-24 pb-24 lg:pb-12">
      {/* Hero */}
      <div className="bg-dark py-16 mb-12">
        <div className="container-fluid text-center">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-5">
            <Shield size={14} className="text-primary" />
            <span className="text-primary text-sm font-semibold">Exclusive to Buywheels Buyers</span>
          </div>
          <h1 className="font-heading font-bold text-white text-4xl md:text-5xl mb-4">
            Buywheels <span className="text-primary">Care</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            Complete post-purchase support for your vehicle. From roadside assistance to service reminders, we've got you covered for life.
          </p>
          <Link to="/cars" className="btn-primary">
            Buy a Vehicle to Activate Care
          </Link>
        </div>
      </div>

      <div className="container-fluid">
        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map(({ icon: Icon, title, description, features }) => (
            <div
              key={title}
              className="bg-white rounded-2xl border border-border p-6 hover:shadow-card-hover transition-all hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <Icon size={22} className="text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-semibold text-dark text-lg mb-2">{title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">{description}</p>
              <ul className="space-y-1.5">
                {features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-dark-600">
                    <Check size={13} className="text-success flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Plans */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-dark text-3xl mb-3">Choose Your Care Plan</h2>
            <p className="text-muted text-lg">Flexible plans to protect your vehicle and peace of mind</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Essential',
                price: 'Free',
                period: 'with every purchase',
                features: ['Buywheels Welcome Kit', 'Basic roadside assistance', 'Service reminders', '1-year warranty support'],
                popular: false,
              },
              {
                name: 'Premium',
                price: '₹2,999',
                period: 'per year',
                features: ['Everything in Essential', '24/7 roadside assistance', 'Insurance renewal help', 'Priority support', 'Owner\'s Club membership', '3-year warranty support'],
                popular: true,
              },
              {
                name: 'Elite',
                price: '₹5,999',
                period: 'per year',
                features: ['Everything in Premium', 'Dedicated relationship manager', 'Free accessories worth ₹3,000', 'Accident claim assistance', 'Annual vehicle health check', 'Exclusive driving events'],
                popular: false,
              },
            ].map(plan => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-6 flex flex-col justify-between ${plan.popular ? 'bg-primary border-primary text-white animate-pulse-subtle' : 'bg-white border-border'}`}
              >
                <div>
                  {plan.popular && (
                    <div className="bg-white/20 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full w-fit mb-4">Most Popular</div>
                  )}
                  <h3 className={`font-heading font-bold text-2xl mb-1 ${plan.popular ? 'text-white' : 'text-dark'}`}>{plan.name}</h3>
                  <div className="mb-5">
                    <span className={`font-heading font-bold text-3xl ${plan.popular ? 'text-white' : 'text-dark'}`}>{plan.price}</span>
                    <span className={`text-sm ml-2 ${plan.popular ? 'text-white/70' : 'text-muted'}`}>{plan.period}</span>
                  </div>
                  <ul className="space-y-2.5 mb-6">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <Check size={14} className={plan.popular ? 'text-white' : 'text-success'} />
                        <span className={plan.popular ? 'text-white/90' : 'text-dark-600'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => handleClaim(plan.name)}
                  className={`w-full h-11 rounded-xl font-semibold text-sm transition-all mt-6 ${
                    plan.popular
                      ? 'bg-white text-primary hover:bg-gray-50'
                      : 'bg-primary text-white hover:bg-primary-600'
                  }`}
                >
                  Choose {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary-50 rounded-2xl border border-primary/20 p-10 text-center">
          <h2 className="font-heading font-bold text-dark text-2xl mb-3">Buy a Vehicle & Get Care Free</h2>
          <p className="text-muted mb-6 max-w-lg mx-auto">Every vehicle purchased through Buywheels comes with our Essential Care plan — absolutely free.</p>
          <Link to="/cars" className="btn-primary">
            Browse Vehicles <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Plan Booking Modal */}
      {selectedPlan && (
        <div
          className="fixed inset-0 z-[60] bg-dark/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fade-in"
          onClick={() => setSelectedPlan(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-card-hover border border-border max-w-md w-full p-6 relative animate-scale-in my-8"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPlan(null)}
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
                    <h3 className="font-heading font-bold text-dark text-lg leading-tight">Activate Care Plan</h3>
                    <p className="text-muted text-xs">Activate Buywheels {selectedPlan} Care</p>
                  </div>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-dark mb-1.5">Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Srikant Kumar"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-dark mb-1.5">Mobile Number *</label>
                    <input
                      required
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="input-field"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary h-12 text-sm justify-center mt-4"
                  >
                    {isSubmitting ? 'Requesting Activation...' : `Activate ${selectedPlan}`}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-4 animate-scale-in">
                  <Check size={36} strokeWidth={3} />
                </div>
                <h3 className="font-heading font-bold text-dark text-xl mb-2">Request Submitted!</h3>
                <p className="text-dark-600 text-sm max-w-sm mx-auto mb-6">
                  Congratulations, <span className="font-semibold">{formData.name}</span>! Your activation request for <span className="font-semibold">Buywheels {selectedPlan} Care</span> has been registered.
                </p>
                <p className="text-xs text-muted mb-6">
                  An onboarding executive will call you on <span className="font-semibold">+91 {formData.phone}</span> within 2 hours to activate your plan and link it to your vehicle records.
                </p>
                <button
                  onClick={() => setSelectedPlan(null)}
                  className="w-full btn-secondary h-11 text-sm justify-center"
                >
                  Back to Care
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
