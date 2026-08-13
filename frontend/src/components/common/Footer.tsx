import { Link } from 'react-router-dom';
import {
  Facebook, Twitter, Instagram, Youtube, Linkedin,
  Phone, Mail, MapPin, ArrowRight,
} from 'lucide-react';

const footerLinks = {
  Vehicles: [
    { label: 'New Cars', path: '/cars' },
    { label: 'Electric Vehicles', path: '/ev' },
    { label: 'Compare Vehicles', path: '/compare' },
  ],
  Services: [
    { label: 'Finance & EMI', path: '/finance' },
    { label: 'Insurance', path: '/insurance' },
    { label: 'Buywheels Care', path: '/care' },
    { label: 'Test Drive', path: '/test-drive' },
    { label: 'Best Price Guarantee', path: '/offers' },
  ],
  Dealers: [
    { label: 'Find Dealers', path: '/dealers' },
    { label: 'Ranchi Dealers', path: '/dealers' },
    { label: 'Jamshedpur Dealers', path: '/dealers' },
    { label: 'Dhanbad Dealers', path: '/dealers' },
    { label: 'Partner With Us', path: '/dealers' },
  ],
  Company: [
    { label: 'About Buywheels', path: '/about' },
    { label: 'Careers', path: '/careers' },
    { label: 'Blog & News', path: '/blog' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Media', path: '/about' },
  ],
};

const socials = [
  { Icon: Facebook, href: '#', label: 'Facebook' },
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Youtube, href: '#', label: 'YouTube' },
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-24 lg:pb-16">
      <div className="container-fluid">
        {/* Top section */}
        <div className="grid lg:grid-cols-6 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex mb-4">
              <img
                src="/logo.png"
                alt="Buywheels"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Jharkhand's buyer-first platform for new Cars & Electric Vehicles. Compare prices across authorized dealerships and get the best deal.
            </p>

            {/* Contact */}
            <div className="space-y-3 mb-6">
              <a href="tel:+919296961232" className="flex items-center gap-3 text-sm text-white/70 hover:text-primary transition-colors">
                <Phone size={15} className="text-primary" />
                +91 92969 61232
              </a>
              <a href="mailto:hello@buywheels.in" className="flex items-center gap-3 text-sm text-white/70 hover:text-primary transition-colors">
                <Mail size={15} className="text-primary" />
                hello@buywheels.in
              </a>
              <div className="flex items-start gap-3 text-sm text-white/70">
                <MapPin size={15} className="text-primary mt-0.5 flex-shrink-0" />
                Main Road, Ranchi, Jharkhand 834001
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  onClick={(e) => {
                    if (href === '#') e.preventDefault();
                  }}
                  className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">{category}</h3>
              <ul className="space-y-2.5">
                {links.map(({ label, path }) => (
                  <li key={label}>
                    <Link
                      to={path}
                      className="text-sm text-white/60 hover:text-primary transition-colors duration-200 flex items-center gap-1 group"
                    >
                      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-3 group-hover:ml-0 transition-all duration-200" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="py-10 border-b border-white/10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="font-heading font-semibold text-lg mb-1">Get the Best Deals in Your Inbox</h3>
              <p className="text-white/60 text-sm">Subscribe for exclusive offers, new launches, and buying guides.</p>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-72 h-12 px-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 text-sm focus:outline-none focus:border-primary focus:bg-white/15 transition-all"
              />
              <button className="btn-primary flex-shrink-0 px-6 h-12">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center lg:text-left">
            &copy; 2024 Buywheels. All rights reserved. | Serving Jharkhand with pride.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
