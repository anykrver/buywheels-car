import { Link } from 'react-router-dom';
import { Target, Eye, Users, Award, MapPin, Heart, ArrowRight } from 'lucide-react';
import PageSEO from '../components/common/PageSEO';

const team = [

  { name: 'Arjun Sharma', role: 'Founder & CEO', avatar: 'AS', location: 'Ranchi' },
  { name: 'Priya Mehta', role: 'Co-Founder & COO', avatar: 'PM', location: 'Jamshedpur' },
  { name: 'Rahul Kumar', role: 'Head of Technology', avatar: 'RK', location: 'Ranchi' },
  { name: 'Sonal Gupta', role: 'Head of Marketing', avatar: 'SG', location: 'Dhanbad' },
];

const values = [
  { icon: Users, title: 'Buyer First', desc: 'Every decision we make starts with: "Is this good for the buyer?"' },
  { icon: Eye, title: 'Transparency', desc: 'No hidden charges, no inflated prices. What you see is what you get.' },
  { icon: Award, title: 'Excellence', desc: 'We obsess over the details so our customers experience the best.' },
  { icon: Heart, title: 'Community', desc: 'We\'re building a vehicle ecosystem for Jharkhand, by Jharkhand.' },
];

const milestones = [
  { year: '2022', event: 'Buywheels founded in Ranchi with a mission to transform vehicle buying in Jharkhand' },
  { year: '2023', event: 'Launched with 20+ dealers, 100+ vehicles, and operations across 5 cities' },
  { year: '2024', event: 'Crossed 10,000 happy customers, expanded to 50+ dealers and 12 cities' },
  { year: '2025', event: 'Launching Buywheels Care platform and expanding to all 24 districts of Jharkhand' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-24 lg:pb-12">
      <PageSEO
        title="About BuyWheels | Jharkhand's Premier Car Marketplace & Platform"
        description="Learn about BuyWheels' mission to transform vehicle buying in Jharkhand. Founded in Ranchi, connecting buyers with 50+ authorized car dealers."
        canonicalPath="/about"
      />
      {/* Hero */}
      <section className="bg-dark py-20 mb-16">
        <div className="container-fluid text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Story</p>
          <h1 className="font-heading font-bold text-white text-4xl md:text-5xl mb-5">
            Putting Buyers First,<br />
            <span className="text-primary">Always</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">
            Buywheels started with a simple idea: buying a vehicle in Jharkhand should be transparent, fair, and effortless. We've made it our mission to make that a reality.
          </p>
        </div>
      </section>

      <div className="container-fluid">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-primary p-8 rounded-2xl text-white">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
              <Target size={24} className="text-white" />
            </div>
            <h2 className="font-heading font-bold text-2xl mb-3">Our Mission</h2>
            <p className="text-white/85 leading-relaxed">
              To help every buyer in Jharkhand find the best vehicle at the best price, with full transparency and end-to-end support — from the first search to the final delivery.
            </p>
          </div>
          <div className="bg-dark p-8 rounded-2xl text-white">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
              <Eye size={24} className="text-white" />
            </div>
            <h2 className="font-heading font-bold text-2xl mb-3">Our Vision</h2>
            <p className="text-white/85 leading-relaxed">
              To become India's most trusted vehicle-buying platform, starting from Jharkhand — where every buyer feels confident, informed, and valued throughout their journey.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 bg-surface rounded-2xl p-8">
          {[
            { value: '10,000+', label: 'Happy Buyers' },
            { value: '50+', label: 'Dealer Partners' },
            { value: '12', label: 'Cities Served' },
            { value: '₹40K', label: 'Avg. Savings Per Buyer' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-heading font-bold text-primary text-3xl md:text-4xl">{value}</p>
              <p className="text-muted text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Problem & Solution */}
        <div className="grid md:grid-cols-2 gap-10 mb-16 items-center">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">The Problem</p>
            <h2 className="font-heading font-bold text-dark text-3xl mb-4">Vehicle Buying Was Broken</h2>
            <p className="text-dark-600 leading-relaxed mb-4">
              Before Buywheels, buying a vehicle in Jharkhand meant visiting multiple showrooms, dealing with aggressive sales tactics, receiving inconsistent price quotes, and never knowing if you got the best deal.
            </p>
            <p className="text-dark-600 leading-relaxed">
              Buyers were at a complete disadvantage — dealers had all the information, and buyers had none. This information asymmetry cost buyers lakhs of rupees.
            </p>
          </div>
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Solution</p>
            <h2 className="font-heading font-bold text-dark text-3xl mb-4">Transparency That Empowers Buyers</h2>
            <p className="text-dark-600 leading-relaxed mb-4">
              Buywheels aggregates real-time prices from every authorized dealer, giving buyers the information power they deserve. Our platform shows exactly who's offering what — with no hidden charges.
            </p>
            <p className="text-dark-600 leading-relaxed">
              We also provide expert guidance, finance comparison, insurance support, and post-purchase care — making the entire ownership journey smooth and stress-free.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Culture</p>
            <h2 className="font-heading font-bold text-dark text-3xl">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-surface rounded-2xl p-6 hover:shadow-card transition-all hover:-translate-y-0.5">
                <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-dark mb-2">{title}</h3>
                <p className="text-muted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Journey / Milestones */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Milestones</p>
            <h2 className="font-heading font-bold text-dark text-3xl">Our Journey</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className={`flex flex-col md:flex-row items-start gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className="inline-block bg-primary text-white font-heading font-bold text-xl px-5 py-2 rounded-xl mb-3">
                      {m.year}
                    </div>
                    <p className="text-dark-600 leading-relaxed">{m.event}</p>
                  </div>
                  <div className="hidden md:flex w-6 h-6 bg-primary rounded-full border-4 border-white shadow-sm z-10 flex-shrink-0 absolute left-1/2 -translate-x-1/2 mt-2" />
                  <div className="md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Team</p>
            <h2 className="font-heading font-bold text-dark text-3xl">Meet the Team</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {team.map(member => (
              <div key={member.name} className="bg-surface rounded-2xl p-6 text-center hover:shadow-card transition-all hover:-translate-y-0.5">
                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4 text-primary font-heading font-bold text-xl">
                  {member.avatar}
                </div>
                <h3 className="font-heading font-semibold text-dark">{member.name}</h3>
                <p className="text-primary text-sm font-medium mt-1">{member.role}</p>
                <p className="text-muted text-xs mt-2 flex items-center justify-center gap-1">
                  <MapPin size={10} /> {member.location}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary rounded-2xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
          <div className="relative">
            <h2 className="font-heading font-bold text-white text-3xl mb-3">Join 10,000+ Happy Buyers</h2>
            <p className="text-white/80 mb-7">Start your vehicle buying journey with Buywheels today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/cars" className="flex items-center justify-center gap-2 px-7 h-13 bg-white text-primary font-heading font-bold rounded-xl hover:bg-gray-50 transition-all" style={{ height: '52px' }}>
                Explore Vehicles <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="flex items-center justify-center gap-2 px-7 h-13 border-2 border-white/50 text-white font-heading font-semibold rounded-xl hover:bg-white/10 transition-all" style={{ height: '52px' }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
