import { Link } from 'react-router-dom';
import { Compass, Car, Info, BookOpen, ShieldCheck } from 'lucide-react';

export default function Sitemap() {
  const sections = [
    {
      icon: Car,
      title: 'Vehicles & Tools',
      links: [
        { label: 'New Cars Search', path: '/cars', desc: 'Browse and filter new cars' },
        { label: 'Electric Vehicles', path: '/ev', desc: 'Explore EVs with range specifications' },
        { label: 'Compare Vehicles', path: '/compare', desc: 'Compare up to 3 models side-by-side' },
        { label: 'Exclusive Offers', path: '/offers', desc: 'Limited-time deals and cashback coupons' },
        { label: 'Wishlist Catalog', path: '/wishlist', desc: 'Your saved vehicles checklist' },
      ],
    },
    {
      icon: ShieldCheck,
      title: 'Services & Care',
      links: [
        { label: 'Smart Financing', path: '/finance', desc: 'Compare loan interest rates & calculate EMI' },
        { label: 'Buywheels Care', path: '/care', desc: 'Roadside support & warranty management' },
        { label: 'Insurance Calculator', path: '/insurance', desc: 'Get zero-commission comprehensive quotes' },
        { label: 'Book a Test Drive', path: '/test-drive', desc: 'Schedule a free drive slot in Jharkhand' },
      ],
    },
    {
      icon: Compass,
      title: 'Dealers & Cities',
      links: [
        { label: 'Find Dealers', path: '/dealers', desc: 'Authorized showrooms and service centers' },
        { label: 'Ranchi Showrooms', path: '/dealers?location=Ranchi', desc: 'Dealers in capital city Ranchi' },
        { label: 'Jamshedpur Showrooms', path: '/dealers?location=Jamshedpur', desc: 'Showrooms in steel city Jamshedpur' },
        { label: 'Dhanbad Showrooms', path: '/dealers?location=Dhanbad', desc: 'Showrooms in coal capital Dhanbad' },
      ],
    },
    {
      icon: Info,
      title: 'Company & Policies',
      links: [
        { label: 'About Buywheels', path: '/about', desc: 'Our mission and transparency values' },
        { label: 'Careers', path: '/careers', desc: 'Job openings and culture in Jharkhand' },
        { label: 'Contact Us', path: '/contact', desc: 'Get in touch with vehicle advisors' },
        { label: 'Terms of Service', path: '/terms', desc: 'Rules governing platform usage' },
        { label: 'Privacy Policy', path: '/privacy', desc: 'Information collection disclosure rules' },
      ],
    },
    {
      icon: BookOpen,
      title: 'Resources',
      links: [
        { label: 'Blog & Auto News', path: '/blog', desc: 'Expert buying guides and automotive launches' },
        { label: 'Account Portal', path: '/login', desc: 'Secure member signup / sign-in screen' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-surface pt-24 pb-24 lg:pb-12 animate-fade-in">
      <div className="container-fluid">
        {/* Page header */}
        <div className="mb-10 text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Index</p>
          <h1 className="font-heading font-bold text-dark text-3xl md:text-4xl">HTML Sitemap</h1>
          <p className="text-muted text-sm mt-2 max-w-lg mx-auto">
            A comprehensive list of all pages, categories, and utility services available on the Buywheels website.
          </p>
        </div>

        {/* Sitemap Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {sections.map(({ icon: Icon, title, links }) => (
            <div key={title} className="bg-white rounded-2xl border border-border p-6 shadow-sm hover:shadow-card transition-all">
              <div className="flex items-center gap-2 mb-4 border-b border-border pb-3">
                <Icon size={18} className="text-primary" />
                <h2 className="font-heading font-semibold text-dark text-base">{title}</h2>
              </div>
              <ul className="space-y-4">
                {links.map(({ label, path, desc }) => (
                  <li key={label} className="group">
                    <Link
                      to={path}
                      className="text-sm font-semibold text-dark hover:text-primary transition-colors flex items-baseline gap-1"
                    >
                      {label}
                    </Link>
                    <p className="text-muted text-xs mt-0.5 leading-normal">{desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
