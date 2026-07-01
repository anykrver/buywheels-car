import { BadgeCheck, Headphones, Gift, Truck } from 'lucide-react';

const advantages = [
  {
    icon: BadgeCheck,
    title: 'Best Price Guarantee',
    description: 'We guarantee you get the best available price. If you find a lower price, we\'ll match it.',
  },
  {
    icon: Gift,
    title: 'Buywheels Welcome Kit',
    description: 'Every buyer gets an exclusive welcome kit with premium accessories and membership benefits.',
  },
  {
    icon: Headphones,
    title: 'End-to-End Assistance',
    description: 'Our experts guide you from selection to delivery — test drive, documentation, and beyond.',
  },
  {
    icon: Truck,
    title: 'Buywheels Care',
    description: 'Post-purchase support with roadside assistance, service reminders, and warranty help.',
  },
];

export default function AdvantagesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-fluid">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Why Choose Us</p>
          <h2 className="font-heading font-bold text-dark text-3xl md:text-4xl mb-3">
            The Buywheels Advantage
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            We put buyers first — always. Here's what makes Buywheels different from every other vehicle platform.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className="group p-6 rounded-2xl border border-border hover:border-primary hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-white relative overflow-hidden"
            >
              {/* Step number */}
              <div className="absolute top-5 right-5 font-heading font-bold text-5xl text-surface select-none">
                {String(i + 1).padStart(2, '0')}
              </div>

              <div className="relative">
                <div className="w-12 h-12 bg-primary-50 group-hover:bg-primary rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon size={22} className="text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-semibold text-dark text-lg mb-2">{title}</h3>
                <p className="text-muted text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
