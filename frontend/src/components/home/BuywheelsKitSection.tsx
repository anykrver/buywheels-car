import { Gift, Shield, Star, Headphones, Wrench, CreditCard } from 'lucide-react';

const kitItems = [
  { icon: Gift, title: 'Premium Accessories', desc: 'Curated vehicle accessories worth ₹5,000+' },
  { icon: Shield, title: 'Extended Warranty', desc: '1-year extended warranty coverage' },
  { icon: Headphones, title: 'Roadside Assistance', desc: '24/7 emergency support across Jharkhand' },
  { icon: Star, title: 'Owner\'s Club Membership', desc: 'Exclusive member benefits and privileges' },
  { icon: Wrench, title: 'Service Reminders', desc: 'Smart alerts for scheduled service' },
  { icon: CreditCard, title: 'Insurance Assistance', desc: 'Best insurance deals at zero extra cost' },
];

export default function BuywheelsKitSection() {
  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-fluid relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <Gift size={14} className="text-primary" />
              <span className="text-primary text-sm font-semibold">Exclusive to Buywheels Buyers</span>
            </div>
            <h2 className="font-heading font-bold text-white text-3xl md:text-4xl mb-4">
              The Buywheels<br />
              <span className="text-primary">Welcome Kit</span>
            </h2>
            <p className="text-white/65 text-lg mb-8 leading-relaxed">
              Every vehicle purchased through Buywheels comes with our exclusive Welcome Kit — a comprehensive package designed to make your ownership experience exceptional from day one.
            </p>

            <div className="flex items-center gap-4">
              <div className="text-center">
                <p className="font-heading font-bold text-white text-3xl">₹25,000+</p>
                <p className="text-white/50 text-sm">Worth of benefits</p>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <p className="font-heading font-bold text-white text-3xl">10K+</p>
                <p className="text-white/50 text-sm">Kits delivered</p>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <p className="font-heading font-bold text-white text-3xl">4.9★</p>
                <p className="text-white/50 text-sm">Kit rating</p>
              </div>
            </div>
          </div>

          {/* Right: Kit items */}
          <div className="grid grid-cols-2 gap-4">
            {kitItems.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white/8 backdrop-blur-sm border border-white/12 rounded-2xl p-5 hover:bg-white/12 hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center mb-3 group-hover:bg-primary transition-colors duration-300">
                  <Icon size={18} className="text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-semibold text-white text-sm mb-1">{title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
