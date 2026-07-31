import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import {
  Car, Zap, GitCompare, Tag, Shield, Building2, BookOpen,
  Search, Heart, MapPin, ChevronDown, Menu, X, User, Phone,
} from 'lucide-react';
import SearchSuggestions from './SearchSuggestions';
import AreaPincodeModal, { AreaItem } from './AreaPincodeModal';

import { useLocationContext } from '../context/LocationContext';

const Logo = ({ className = '' }: { className?: string }) => (
  <img
    src="/logo.png"
    alt="Buywheels"
    className={`object-contain ${className}`}
    style={{ imageRendering: 'crisp-edges' }}
  />
);

const navItems = [
  { label: 'Cars', path: '/cars', icon: Car },
  { label: 'EV', path: '/ev', icon: Zap },
  { label: 'Compare', path: '/compare', icon: GitCompare },
  { label: 'Offers', path: '/offers', icon: Tag },
  { label: 'Care', path: '/care', icon: Shield },
  { label: 'Dealers', path: '/dealers', icon: Building2 },
  { label: 'Blog', path: '/blog', icon: BookOpen },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const {
    selectedCity,
    selectedPincode,
    pincodeModalOpen,
    openPincodeModal,
    closePincodeModal,
    setSelectedLocation,
  } = useLocationContext();

  const displayLocation = selectedCity;

  const handleSelectArea = (item: AreaItem) => {
    setSelectedLocation({
      city: item.city,
      pincode: item.pincode,
      area: item.area,
    });
    closePincodeModal();
  };

  const location = useLocation();
  const navigate = useNavigate();
  const { wishlistCount } = useWishlist();

  const isHome = location.pathname === '/';

  const handleSearchSubmit = (query: string) => {
    if (!query.trim()) return;
    setSearchOpen(false);
    navigate(`/cars?search=${encodeURIComponent(query)}`);
  };

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navBg = isHome && !scrolled
    ? 'bg-transparent'
    : 'bg-white shadow-nav';

  const headerBorder = isHome && !scrolled ? 'border-b border-white/10' : 'border-b border-border';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg} ${headerBorder}`}>
        {/* Top bar (Desktop) */}
        <div className={`hidden lg:block border-b transition-all duration-300 ${isHome && !scrolled ? 'border-white/10' : 'border-border'}`}>
          <div className="container-fluid flex items-center justify-between h-9">
            <div className={`flex items-center gap-1 text-xs ${isHome && !scrolled ? 'text-white/70' : 'text-muted'}`}>
              <MapPin size={12} />
              <span>Serving Jharkhand — Ranchi, Jamshedpur, Dhanbad & more</span>
            </div>
            <div className={`flex items-center gap-6 text-xs ${isHome && !scrolled ? 'text-white/70' : 'text-muted'}`}>
              <a href="tel:+919296961232" className="flex items-center gap-1 hover:text-primary transition-colors">
                <Phone size={11} />
                <span>+91 92969 61232</span>
              </a>
              <Link to="/dealers" className="hover:text-primary transition-colors">Find Dealers</Link>
              <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
              <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
        </div>

        {/* Main Header Bar */}
        <div className="container-fluid flex items-center h-16 lg:h-20">
          
          {/* MOBILE HEADER LAYOUT (lg:hidden): 3-Line Menu + Logo (Left) | Search + Select City (Right) */}
          <div className="lg:hidden flex items-center justify-between w-full">
            
            {/* Left Group: 3-line Menu Button + Logo shifted left for clean alignment */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`p-1.5 rounded-xl transition-colors ${
                  isHome && !scrolled ? 'text-white hover:bg-white/10' : 'text-dark hover:bg-surface'
                }`}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              <Link to="/" className="flex items-center justify-center pl-0.5">
                <Logo className="h-11 sm:h-14 w-auto py-1" />
              </Link>
            </div>

            {/* Right Group: Search Button + Wishlist + Select City Dropdown */}
            <div className="flex items-center gap-1 sm:gap-2">
              {/* Search Button */}
              <button
                onClick={() => setSearchOpen(true)}
                className={`p-1.5 sm:p-2 rounded-xl transition-colors ${
                  isHome && !scrolled ? 'text-white hover:bg-white/10' : 'text-dark-600 hover:bg-surface'
                }`}
                aria-label="Search"
              >
                <Search size={19} />
              </button>

              {/* Wishlist Button */}
              <Link
                to="/wishlist"
                className={`relative p-1.5 sm:p-2 rounded-xl transition-colors ${
                  isHome && !scrolled ? 'text-white hover:bg-white/10' : 'text-dark-600 hover:bg-surface'
                }`}
                aria-label="Wishlist"
              >
                <Heart size={19} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-primary text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-scale-in">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Select Area / Pincode Button (Mobile) */}
              <button
                onClick={openPincodeModal}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                  isHome && !scrolled
                    ? 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                    : 'bg-surface text-dark border-border hover:border-primary'
                }`}
                title="Search your Area or Pincode"
              >
                <MapPin size={12} className="text-primary shrink-0" />
                <span className="truncate max-w-[70px] sm:max-w-[110px]">{displayLocation}</span>
                <ChevronDown size={11} className="text-muted shrink-0" />
              </button>
            </div>
          </div>

          {/* DESKTOP HEADER LAYOUT (hidden lg:flex) */}
          <div className="hidden lg:flex items-center justify-between w-full">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <Logo className="h-20 w-auto py-2" />
            </Link>

            {/* Desktop nav links */}
            <nav className="hidden xl:flex items-center gap-1 ml-6">
              {navItems.map(({ label, path, icon: Icon }) => {
                const active = location.pathname === path;
                return (
                  <Link
                    key={path}
                    to={path}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      active
                        ? 'text-primary bg-primary-50'
                        : isHome && !scrolled
                        ? 'text-white/90 hover:text-white hover:bg-white/10'
                        : 'text-dark-600 hover:text-primary hover:bg-primary-50'
                    }`}
                  >
                    <Icon size={15} />
                    {label}
                  </Link>
                );
              })}
            </nav>

            {/* Compact Desktop Nav */}
            <nav className="hidden lg:flex xl:hidden items-center gap-0.5 ml-4">
              {navItems.slice(0, 5).map(({ label, path }) => {
                const active = location.pathname === path;
                return (
                  <Link
                    key={path}
                    to={path}
                    className={`px-2.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      active
                        ? 'text-primary bg-primary-50'
                        : isHome && !scrolled
                        ? 'text-white/90 hover:text-white hover:bg-white/10'
                        : 'text-dark-600 hover:text-primary hover:bg-surface'
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right side actions */}
            <div className="flex items-center gap-2">
              {/* Select Area / Pincode Button (Desktop) */}
              <button
                onClick={openPincodeModal}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-all ${
                  isHome && !scrolled
                    ? 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                    : 'bg-surface text-dark border-border hover:border-primary'
                }`}
                title="Search your Area or Pincode"
              >
                <MapPin size={14} className="text-primary shrink-0" />
                <span className="truncate max-w-[140px]">{displayLocation}</span>
                <ChevronDown size={12} className="text-muted shrink-0" />
              </button>

              {/* Search */}
              <button
                onClick={() => setSearchOpen(true)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 ${
                  isHome && !scrolled
                    ? 'text-white/90 hover:text-white hover:bg-white/10'
                    : 'text-dark-600 hover:text-primary hover:bg-surface'
                }`}
              >
                <Search size={18} />
                <span className="hidden lg:block text-sm font-medium">Search</span>
              </button>

              {/* Wishlist */}
              <Link
                to="/wishlist"
                className={`relative p-2.5 rounded-xl transition-all duration-200 ${
                  isHome && !scrolled
                    ? 'text-white/90 hover:text-white hover:bg-white/10'
                    : 'text-dark-600 hover:text-primary hover:bg-surface'
                }`}
              >
                <Heart size={18} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-scale-in">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Login */}
              <Link
                to="/login"
                className={`hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isHome && !scrolled
                    ? 'text-white/90 hover:text-white hover:bg-white/10 border border-white/20'
                    : 'text-dark border border-border hover:border-primary hover:text-primary'
                }`}
              >
                <User size={16} />
                Login
              </Link>

              {/* Book Now CTA */}
              <Link
                to="/cars"
                className="hidden lg:flex items-center gap-2 px-5 py-2 bg-primary text-white font-heading font-semibold rounded-xl text-sm hover:bg-primary-600 hover:shadow-primary transition-all duration-200 hover:-translate-y-0.5"
              >
                Book Now
              </Link>
            </div>
          </div>

        </div>

        {/* Mobile Slide-down Navigation Drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-border shadow-lg animate-slide-up">
            <nav className="container-fluid py-4 space-y-1">
              {navItems.map(({ label, path, icon: Icon }) => {
                const active = location.pathname === path;
                return (
                  <Link
                    key={path}
                    to={path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      active ? 'text-primary bg-primary-50' : 'text-dark-600 hover:text-primary hover:bg-surface'
                    }`}
                  >
                    <Icon size={20} />
                    {label}
                  </Link>
                );
              })}
              <Link
                to="/wishlist"
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  location.pathname === '/wishlist' ? 'text-primary bg-primary-50' : 'text-dark-600 hover:text-primary hover:bg-surface'
                }`}
              >
                <span className="flex items-center gap-3">
                  <Heart size={20} />
                  Wishlist
                </span>
                {wishlistCount > 0 && (
                  <span className="bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              <div className="pt-3 border-t border-border flex flex-col gap-2">
                <Link to="/login" className="btn-secondary w-full justify-center">
                  <User size={18} /> Login / Sign Up
                </Link>
                <Link to="/cars" className="btn-primary w-full justify-center">
                  Book a Vehicle
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Search overlay */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[60] bg-dark/60 backdrop-blur-sm animate-fade-in flex items-start justify-center pt-16 px-4"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-scale-in border border-border"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 p-4 border-b border-border bg-surface/30">
              <Search size={20} className="text-primary flex-shrink-0" />
              <input
                autoFocus
                type="text"
                placeholder="Search for cars, brands (e.g. Swift, Nexon, EV, Creta)..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    handleSearchSubmit(searchQuery);
                  } else if (e.key === 'Escape') {
                    setSearchOpen(false);
                  }
                }}
                className="flex-1 text-base md:text-lg outline-none text-dark bg-transparent placeholder-muted font-medium"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="p-1 rounded-full hover:bg-border transition-colors mr-1"
                >
                  <X size={16} className="text-muted" />
                </button>
              )}
              <button
                onClick={() => setSearchOpen(false)}
                className="p-2 rounded-xl hover:bg-surface text-muted hover:text-dark transition-colors border border-border"
                title="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div className="relative p-2">
              <SearchSuggestions
                query={searchQuery}
                isOpen={true}
                onClose={() => setSearchOpen(false)}
                onSelect={q => setSearchQuery(q)}
                className="relative top-0 mt-0 shadow-none border-none animate-none rounded-none"
              />
            </div>
          </div>
        </div>
      )}

      {/* Search Area / Pincode Modal */}
      <AreaPincodeModal
        isOpen={pincodeModalOpen}
        onClose={closePincodeModal}
        onSelectArea={handleSelectArea}
        currentPincode={selectedPincode}
      />
    </>
  );
}
