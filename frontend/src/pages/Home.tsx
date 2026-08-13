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
import PageSEO from '../components/common/PageSEO';

const HOME_FAQ_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How does BuyWheels work?', acceptedAnswer: { '@type': 'Answer', text: 'BuyWheels aggregates new car listings from authorised dealers across Jharkhand. You can browse, compare, calculate EMI, and book a test drive — all in one place, for free.' } },
    { '@type': 'Question', name: 'Are the prices on BuyWheels accurate?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Prices shown are ex-showroom prices from authorised dealers. On-road prices are calculated based on your pincode and include RTO, insurance, and other charges.' } },
    { '@type': 'Question', name: 'How do I book a test drive?', acceptedAnswer: { '@type': 'Answer', text: 'Click "Book Test Drive" on any vehicle page or go to the Test Drive section. Fill in your name, phone, city, and preferred date — a BuyWheels advisor will confirm your slot within 2 hours.' } },
    { '@type': 'Question', name: 'Is BuyWheels free to use?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. BuyWheels is 100% free for car buyers. We earn through dealer partnerships — you never pay anything to us.' } },
  ],
};

export default function Home() {
  return (
    <main>
      <PageSEO
        title="BuyWheels — New Cars in Jharkhand | Best Deals in Ranchi, Jamshedpur, Dhanbad"
        description="Discover new cars in Jharkhand. Compare prices, calculate EMI, get insurance quotes, and book test drives at authorised dealers in Ranchi, Jamshedpur, Dhanbad, Bokaro and Hazaribagh."
        canonicalPath="/"
        jsonLd={HOME_FAQ_JSONLD}
      />
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
