import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import ChatAssistant from './components/ChatAssistant';
import Home from './pages/Home';
import Cars from './pages/Cars';
import EVs from './pages/EVs';
import VehicleDetail from './pages/VehicleDetail';
import Compare from './pages/Compare';
import Offers from './pages/Offers';
import Finance from './pages/Finance';
import Dealers from './pages/Dealers';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Care from './pages/Care';
import Blog from './pages/Blog';
import Wishlist from './pages/Wishlist';
import Insurance from './pages/Insurance';
import Careers from './pages/Careers';
import TestDrive from './pages/TestDrive';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Sitemap from './pages/Sitemap';
import { WishlistProvider } from './context/WishlistContext';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const hideFooter = pathname === '/login';

  return (
    <>
      <Navbar />
      {children}
      {!hideFooter && <Footer />}
      <MobileNav />
      <ChatAssistant />
    </>
  );
}

function AppRoutes() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/ev" element={<EVs />} />
        <Route path="/vehicle/:slug" element={<VehicleDetail />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/dealers" element={<Dealers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/care" element={<Care />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Blog />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/test-drive" element={<TestDrive />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default function App() {
  return (
    <WishlistProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </WishlistProvider>
  );
}
