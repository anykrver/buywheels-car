import HeroSection from '../components/home/HeroSection';
import MyProfileStates from '../components/home/MyProfileStates';
import CategorySection from '../components/home/CategorySection';
import BrandSection from '../components/home/BrandSection';
import FeaturedVehicles from '../components/home/FeaturedVehicles';
import RecentlyLaunchedSection from '../components/home/RecentlyLaunchedSection';
import RecentlyLaunchedEvSection from '../components/home/RecentlyLaunchedEvSection';
import ReviewsSection from '../components/home/ReviewsSection';
import FAQSection from '../components/home/FAQSection';
import BlogSection from '../components/home/BlogSection';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CategorySection />
      <BrandSection />
      <FeaturedVehicles />
      <RecentlyLaunchedSection />
      <RecentlyLaunchedEvSection />
      <MyProfileStates />
      <ReviewsSection />
      <FAQSection />
      <BlogSection />
      <CTASection />
    </main>
  );
}
