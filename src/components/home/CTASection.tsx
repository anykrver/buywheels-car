import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute right-0 top-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-60 h-60 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-fluid relative z-10 text-center">
        <p className="text-white/70 font-semibold text-sm uppercase tracking-widest mb-4">Get Started Today</p>
        <h2 className="font-heading font-bold text-white text-4xl md:text-5xl mb-4">
          Ready to Find Your Dream Vehicle?
        </h2>
        <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
          Join 10,000+ happy buyers who saved an average of ₹40,000 by choosing Buywheels.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/cars"
            className="flex items-center gap-2 px-8 h-14 bg-white text-primary font-heading font-bold rounded-xl text-base hover:bg-gray-50 transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
          >
            Explore Vehicles <ArrowRight size={20} />
          </Link>
          <a
            href="tel:+919296961232"
            className="flex items-center gap-2 px-8 h-14 bg-transparent border-2 border-white/50 text-white font-heading font-semibold rounded-xl text-base hover:bg-white/10 hover:border-white transition-all duration-200"
          >
            <Phone size={20} /> Talk to an Expert
          </a>
        </div>
      </div>
    </section>
  );
}
