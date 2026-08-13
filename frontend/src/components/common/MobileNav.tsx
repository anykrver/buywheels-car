import { Link, useLocation } from 'react-router-dom';
import { Home, Search, GitCompare, Tag, User } from 'lucide-react';

const items = [
  { label: 'Home', path: '/', icon: Home },
  { label: 'Search', path: '/cars', icon: Search },
  { label: 'Compare', path: '/compare', icon: GitCompare },
  { label: 'Offers', path: '/offers', icon: Tag },
  { label: 'Account', path: '/login', icon: User },
];

export default function MobileNav() {
  const location = useLocation();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border shadow-nav">
      <div className="flex items-center justify-around h-16 px-2">
        {items.map(({ label, path, icon: Icon }) => {
          const active = path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);
          return (
            <Link
              key={path}
              to={path}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-200 ${
                active ? 'text-primary' : 'text-muted'
              }`}
            >
              <Icon size={22} strokeWidth={active ? 2.5 : 1.8} />
              <span className={`text-[10px] font-medium ${active ? 'text-primary' : 'text-muted'}`}>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
