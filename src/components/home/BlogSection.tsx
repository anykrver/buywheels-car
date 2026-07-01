import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface StorySlide {
  image: string;
  title: string;
  description: string;
}

interface WebStory {
  id: string;
  slug: string;
  title: string;
  image: string;
  date: string;
  alt: string;
  slides: StorySlide[];
}

const webStories: WebStory[] = [
  {
    id: 'web-story-mitsubishi-pajero-is-officially-coming-back',
    slug: 'mitsubishi-pajero-is-officially-coming-back',
    title: 'Mitsubishi Pajero is officially coming back!',
    image: 'https://static-cdn.cars24.com/prod/auto-news24-cms/webstory---newsroom/2026/05/29/0b50f117-a749-41c9-8e54-c159f5561d78-paejro-cover.png?w=400&dpr=2&optimize=low&format=auto&quality=50',
    date: '29 May',
    alt: 'mitsubishi pajero launch date',
    slides: [
      {
        image: 'https://static-cdn.cars24.com/prod/auto-news24-cms/webstory---newsroom/2026/05/29/0b50f117-a749-41c9-8e54-c159f5561d78-paejro-cover.png?w=600',
        title: 'The Legend Returns',
        description: 'Mitsubishi has officially confirmed the revival of the iconic Pajero SUV nameplate, set to debut globally in the near future!'
      },
      {
        image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-28.png?isig=0&q=80',
        title: 'Premium Off-roader',
        description: 'Positioned as a luxury SUV, it will challenge premium competitors like the Toyota Land Cruiser Prado with rugged prestige.'
      },
      {
        image: 'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'PHEV & Advanced 4WD',
        description: 'Expected to feature a powerful plug-in hybrid powertrain combined with Mitsubishi\'s signature S-AWC 4WD system.'
      }
    ]
  },
  {
    id: 'web-story-2026-mg-hector-colours-here',
    slug: '2026-mg-hector-colours-here',
    title: 'Check out all 2026 MG Hector colours here!',
    image: 'https://static-cdn.cars24.com/prod/auto-news24-cms/webstory---newsroom/2025/12/16/0bd74fda-d306-49f8-8d0f-2b7323bf3c2b-mg-hector-facelift-front-side-profile-mg.webp?w=400&dpr=2&optimize=low&format=auto&quality=50',
    date: 'Dec 2025',
    alt: 'MG Hector facelift',
    slides: [
      {
        image: 'https://static-cdn.cars24.com/prod/auto-news24-cms/webstory---newsroom/2025/12/16/0bd74fda-d306-49f8-8d0f-2b7323bf3c2b-mg-hector-facelift-front-side-profile-mg.webp?w=600',
        title: 'MG Hector Facelift Colours',
        description: 'Check out the striking and rich new shades introduced for the 2026 MG Hector facelift model.'
      },
      {
        image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/106815/creta-exterior-right-front-three-quarter-6.png?isig=0&q=80',
        title: 'Glaze Red & Aurora Silver',
        description: 'The classic premium metallic shades return with a more reflective gloss finish and styling cues.'
      },
      {
        image: 'https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Contrast Roof Aesthetics',
        description: 'New contrast black roof options are available on higher-end trims, presenting a sporty and modern appearance.'
      }
    ]
  },
  {
    id: 'web-story-new-gen-kia-seltos-colour-options-in-pictures-find-your-favourite',
    slug: 'new-gen-kia-seltos-colour-options-in-pictures-find-your-favourite',
    title: 'New gen Kia Seltos colour options in pictures — Find your favourite!',
    image: 'https://static-cdn.cars24.com/prod/auto-news24-cms/webstory---newsroom/2025/12/11/75f3742f-46e1-4827-8c78-f4a517a9223b-kia-seltos-front-side-profile-kia.webp?w=400&dpr=2&optimize=low&format=auto&quality=50',
    date: 'Dec 2025',
    alt: 'New Kia Seltos',
    slides: [
      {
        image: 'https://static-cdn.cars24.com/prod/auto-news24-cms/webstory---newsroom/2025/12/11/75f3742f-46e1-4827-8c78-f4a517a9223b-kia-seltos-front-side-profile-kia.webp?w=600',
        title: 'New Gen Seltos Colours',
        description: 'Explore all the vibrant new paint options available on the next-generation Kia Seltos.'
      },
      {
        image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/192817/seltos-exterior-right-front-three-quarter-50.png?isig=0&q=80',
        title: 'Trending Matte Grey',
        description: 'Kia introduces trending earthy tones alongside its signature X-Line exclusive premium matte finish.'
      },
      {
        image: 'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Intense Blue & Red',
        description: 'Bold metallic primary paint options make a strong return with high-gloss sparkles that look stunning.'
      }
    ]
  },
  {
    id: 'web-story-tata-sierra-full-price-list-out-for-smart-plus-pure-adventure-trims',
    slug: 'tata-sierra-full-price-list-out-for-smart-plus-pure-adventure-trims',
    title: 'Tata Sierra full price list out for Smart Plus, Pure & Adventure trims — Details!',
    image: 'https://static-cdn.cars24.com/prod/auto-news24-cms/webstory---newsroom/2025/11/27/99f84701-27be-426d-8364-4a965d9d53cc-tata-sierra-yellow-front-profile-tata.webp?w=400&dpr=2&optimize=low&format=auto&quality=50',
    date: 'Dec 2025',
    alt: 'Tata Sierra',
    slides: [
      {
        image: 'https://static-cdn.cars24.com/prod/auto-news24-cms/webstory---newsroom/2025/11/27/99f84701-27be-426d-8364-4a965d9d53cc-tata-sierra-yellow-front-profile-tata.webp?w=600',
        title: 'Tata Sierra Pricing Out',
        description: 'Tata Motors announces the full official price lists across various trims of the resurrected Sierra.'
      },
      {
        image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/149123/nexon-ev-exterior-right-front-three-quarter-80.png?isig=0&q=80',
        title: 'Smart Plus & Pure Trims',
        description: 'Entry-level variants start at highly competitive pricing, bringing the rugged SUV stance to mainstream buyers.'
      },
      {
        image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Adventure Trim Features',
        description: 'The top-spec Adventure variant is equipped with dual panoramic skylights, ambient lighting, and ADAS Level 2.'
      }
    ]
  },
  {
    id: 'web-story-tata-sierra-colour-options-in-picture-available-in-six-shades',
    slug: 'tata-sierra-colour-options-in-picture-available-in-six-shades',
    title: 'Tata Sierra colour options in picture — Available in six shades!',
    image: 'https://static-cdn.cars24.com/prod/auto-news24-cms/Webstory---Newsroom/2025/07/09/0c4edbea-6e5b-456c-b5c7-1f26775750fb-tata-sierra-front-side-source-tata-motors.webp?w=400&dpr=2&optimize=low&format=auto&quality=50',
    date: 'Nov 2025',
    alt: 'Tata Sierra India launch details',
    slides: [
      {
        image: 'https://static-cdn.cars24.com/prod/auto-news24-cms/Webstory---Newsroom/2025/07/09/0c4edbea-6e5b-456c-b5c7-1f26775750fb-tata-sierra-front-side-source-tata-motors.webp?w=600',
        title: 'Sierra\'s Six Shades',
        description: 'The production-spec Sierra SUV is offered in 6 distinct color options emphasizing its clean lines.'
      },
      {
        image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/40432/scorpio-n-exterior-right-front-three-quarter-4.png?isig=0&q=80',
        title: 'Earthy & Modern Tones',
        description: 'Features unique colors like Grassland Beige and Forest Green, paying tribute to the original iconic safari style.'
      },
      {
        image: 'https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Classic White & Black',
        description: 'Contrast white body panels paired with premium black accents replicate the nostalgic look of the 90s legendary classic.'
      }
    ]
  },
  {
    id: 'web-story-citroen-basalt-vision-revealed-in-brazil-india-bound',
    slug: 'citroen-basalt-vision-revealed-in-brazil-india-bound',
    title: 'Citroen Basalt Vision revealed in Brazil — India bound?',
    image: 'https://static-cdn.cars24.com/prod/auto-news24-cms/webstory---newsroom/2025/11/23/40956d9c-1dfb-4ec2-83ec-3904997b3c85-citroen-basalt-vision-back-profile-citroen-5.webp?w=400&dpr=2&optimize=low&format=auto&quality=50',
    date: 'Nov 2025',
    alt: 'Citroen Bsalt Vision',
    slides: [
      {
        image: 'https://static-cdn.cars24.com/prod/auto-news24-cms/webstory---newsroom/2025/11/23/40956d9c-1dfb-4ec2-83ec-3904997b3c85-citroen-basalt-vision-back-profile-citroen-5.webp?w=600',
        title: 'Citroen Basalt Coupe SUV',
        description: 'Citroen reveals the production-intent Basalt Vision Coupe SUV, highlighting its sporty rear profile.'
      },
      {
        image: 'https://static-cdn.cars24.com/prod/new-car-cms/Citroen/Basalt/2024/08/09/90dc1cf7-9f35-4fe0-808d-be901b2b579e-6-_2_.png',
        title: 'Sloping Coupe Silhouette',
        description: 'Combining high ground clearance with a sloping liftback roofline, the Basalt delivers a very distinct look.'
      },
      {
        image: 'https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'India Launch Confirmed',
        description: 'Developed to compete in the highly active mid-size SUV segment, the Basalt Coupe is launching in India very soon.'
      }
    ]
  },
  {
    id: 'web-story-tata-harrier-ev-waiting-period-in-november-2025',
    slug: 'tata-harrier-ev-waiting-period-in-november-2025',
    title: 'Tata Harrier EV waiting period in November 2025 — All details!',
    image: 'https://static-cdn.cars24.com/prod/auto-news24-cms/Webstory---Newsroom/2025/08/05/1f16418a-50c9-4474-bb6d-7acac2ac55d9-2025-tata-harrier-adventure-x-variant-launched-aryan.webp?w=400&dpr=2&optimize=low&format=auto&quality=50',
    date: 'Nov 2025',
    alt: '2025 tata harrier adventure x variant launched aryan',
    slides: [
      {
        image: 'https://static-cdn.cars24.com/prod/auto-news24-cms/Webstory---Newsroom/2025/08/05/1f16418a-50c9-4474-bb6d-7acac2ac55d9-2025-tata-harrier-adventure-x-variant-launched-aryan.webp?w=600',
        title: 'Harrier EV Waiting Times',
        description: 'Massive consumer interest in Tata\'s flagship electric SUV has extended waiting periods.'
      },
      {
        image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/149123/nexon-ev-exterior-right-front-three-quarter-80.png?isig=0&q=80',
        title: 'City-wise Breakdown',
        description: 'Buyers in metropolitan areas face up to 3-4 months of waiting time, especially for high-range variants.'
      },
      {
        image: 'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'AWD Dual-Motor Option',
        description: 'The high-power AWD system variant with off-road terrain response modes is seeing the highest pre-orders.'
      }
    ]
  },
  {
    id: 'web-story-2026-hyundai-venue-n-line-colour-options-in-picture-available-in-8-shades',
    slug: '2026-hyundai-venue-n-line-colour-options-in-picture-available-in-8-shades',
    title: '2026 Hyundai Venue N Line colour options in picture — Available in 8 shades',
    image: 'https://static-cdn.cars24.com/prod/auto-news24-cms/webstory---newsroom/2025/11/06/67303466-59c6-4df1-b531-0ed1ab9f45af-hyundai-venue-n-line-exterior-side-profile-hyundai.webp?w=400&dpr=2&optimize=low&format=auto&quality=50',
    date: 'Nov 2025',
    alt: 'Hyundai Venue N Line',
    slides: [
      {
        image: 'https://static-cdn.cars24.com/prod/auto-news24-cms/webstory---newsroom/2025/11/06/67303466-59c6-4df1-b531-0ed1ab9f45af-hyundai-venue-n-line-exterior-side-profile-hyundai.webp?w=600',
        title: 'Venue N Line Colours',
        description: 'Hyundai refreshes the visual lineup of the sporty Venue N Line variant with 8 dynamic options.'
      },
      {
        image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/205104/xuv-7xo-exterior-right-front-three-quarter-547.png?isig=0&q=80',
        title: 'Thunder Blue Contrast',
        description: 'The signature N Line Thunder Blue returns with racing red exterior accents and black pillars.'
      },
      {
        image: 'https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Stealth Grey & Accents',
        description: 'A new modern matte Shadow Grey color is now available, featuring red calipers and dynamic sport exhausts.'
      }
    ]
  },
  {
    id: 'web-story-2026-tata-sierra-ev-teased-ahead-of-launch-everything-from-style-to-price-expectations',
    slug: '2026-tata-sierra-ev-teased-ahead-of-launch-everything-from-style-to-price-expectations',
    title: '2026 Tata Sierra EV teased ahead of launch — Everything from style to price expectations',
    image: 'https://static-cdn.cars24.com/prod/auto-news24-cms/webstory---newsroom/2025/11/14/b5415d30-1f82-41aa-a325-10b05daeffb5-tata-sierra-ev-side-profile-tata.webp?w=400&dpr=2&optimize=low&format=auto&quality=50',
    date: 'Nov 2025',
    alt: 'Tata Sierra EV',
    slides: [
      {
        image: 'https://static-cdn.cars24.com/prod/auto-news24-cms/webstory---newsroom/2025/11/14/b5415d30-1f82-41aa-a325-10b05daeffb5-tata-sierra-ev-side-profile-tata.webp?w=600',
        title: 'Tata Sierra EV Teased',
        description: 'Tata Motors releases the first official teasers showing off the futuristic details of the Sierra EV.'
      },
      {
        image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/149123/nexon-ev-exterior-right-front-three-quarter-80.png?isig=0&q=80',
        title: 'Acti.ev Architecture',
        description: 'Built on Tata\'s dedicated EV architecture, promising over 500km real-world range and ultra-fast charging.'
      },
      {
        image: 'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Price Expectations',
        description: 'Projected to start around ₹21 Lakhs, setting up a direct rivalry with the upcoming Creta EV.'
      }
    ]
  },
  {
    id: 'web-story-2026-hyundai-venue-colour-options-in-pictures',
    slug: '2026-hyundai-venue-colour-options-in-pictures',
    title: '2026 Hyundai Venue colour options in pictures — Find your favourite!',
    image: 'https://static-cdn.cars24.com/prod/auto-news24-cms/webstory---newsroom/2025/11/04/7ce48838-3cb6-40ab-9794-0689792bf827-new-hyundai-venue-exterior-front-profile-hyundai.webp?w=400&dpr=2&optimize=low&format=auto&quality=50',
    date: 'Nov 2025',
    alt: 'Hyundai Venue 2026',
    slides: [
      {
        image: 'https://static-cdn.cars24.com/prod/auto-news24-cms/webstory---newsroom/2025/11/04/7ce48838-3cb6-40ab-9794-0689792bf827-new-hyundai-venue-exterior-front-profile-hyundai.webp?w=600',
        title: '2026 Venue Paint Colors',
        description: 'Explore the full spectrum of refreshed color paint options for the new-generation Hyundai Venue.'
      },
      {
        image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/106815/creta-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80',
        title: 'Vibrant Fiery Red',
        description: 'The high-gloss Fiery Red shade is updated with deeper metallic flakes for a rich shine in daylight.'
      },
      {
        image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
        title: 'Classic Tones Restyled',
        description: 'Sleek silver and white tones receive fresh contrasts with dark glossy front grilles and alloy accents.'
      }
    ]
  }
];

export default function BlogSection() {
  const [activeStoryIndex, setActiveStoryIndex] = useState<number | null>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const slideDuration = 5000; // 5 seconds per slide
  const progressInterval = 50; // update progress every 50ms

  // Handle slide automatic progression
  useEffect(() => {
    if (activeStoryIndex === null) {
      setProgress(0);
      return;
    }

    let timer: NodeJS.Timeout | null = null;

    if (!isPaused) {
      timer = setInterval(() => {
        setProgress((prev) => {
          const next = prev + (progressInterval / slideDuration) * 100;
          if (next >= 100) {
            handleNextSlide();
            return 0;
          }
          return next;
        });
      }, progressInterval);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [activeStoryIndex, activeSlideIndex, isPaused]);

  // Handle keyboard navigation inside modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeStoryIndex === null) return;
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowRight') {
        handleNextSlide();
      } else if (e.key === 'ArrowLeft') {
        handlePrevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeStoryIndex, activeSlideIndex]);

  const handleNextSlide = () => {
    if (activeStoryIndex === null) return;
    const currentStory = webStories[activeStoryIndex];
    if (activeSlideIndex < currentStory.slides.length - 1) {
      setActiveSlideIndex(prev => prev + 1);
      setProgress(0);
    } else {
      // Go to next story
      if (activeStoryIndex < webStories.length - 1) {
        setActiveStoryIndex(activeStoryIndex + 1);
        setActiveSlideIndex(0);
        setProgress(0);
      } else {
        // Last story, last slide -> Close modal
        closeModal();
      }
    }
  };

  const handlePrevSlide = () => {
    if (activeStoryIndex === null) return;
    if (activeSlideIndex > 0) {
      setActiveSlideIndex(prev => prev - 1);
      setProgress(0);
    } else {
      // Go to previous story
      if (activeStoryIndex > 0) {
        const prevStoryIndex = activeStoryIndex - 1;
        setActiveStoryIndex(prevStoryIndex);
        setActiveSlideIndex(webStories[prevStoryIndex].slides.length - 1);
        setProgress(0);
      } else {
        // At first slide of first story, reset progress to 0
        setProgress(0);
      }
    }
  };

  const closeModal = () => {
    setActiveStoryIndex(null);
    setActiveSlideIndex(0);
    setProgress(0);
    setIsPaused(false);
  };

  const openStory = (index: number) => {
    setActiveStoryIndex(index);
    setActiveSlideIndex(0);
    setProgress(0);
    setIsPaused(false);
  };

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    if (clickX < width * 0.3) {
      handlePrevSlide();
    } else {
      handleNextSlide();
    }
  };

  return (
    <section className="py-20 bg-surface">
      <div className="container-fluid mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Web Stories</p>
            <h2 className="font-heading font-bold text-dark text-3xl md:text-4xl">Trending Web Stories</h2>
            <p className="text-muted mt-2">Tap to view the latest automotive updates and insights visually</p>
          </div>
          <Link to="/blog" className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200">
            View All Posts <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Web Stories Carousel */}
      <div className="bg-secondary py-10 lg:py-20">
        <div className="relative w-full overflow-hidden">
          <div className="flex overflow-x-scroll h-full scroll-smooth scrollbar-hide no-scrollbar">
            <div className="lg:px-20 px-4 flex scroll-smooth">
              {webStories.map((story, index) => (
                <div
                  key={story.id}
                  id={story.id}
                  onClick={() => openStory(index)}
                  className="relative shrinkOnTouch cursor-pointer focus:outline-none"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      openStory(index);
                    }
                  }}
                >
                  <figure className="md:w-[261px] w-[135px] h-[240px] md:h-[464px] md:mr-8 mr-3 relative flex justify-center overflow-hidden rounded-lg group">
                    <img
                      alt={story.alt}
                      loading="lazy"
                      width="400"
                      height="560"
                      decoding="async"
                      className="rounded-lg w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ color: 'transparent' }}
                      src={story.image}
                    />
                    <figcaption className="absolute bottom-0 md:pb-8 pb-2 md:px-6 px-2 z-10 w-full">
                      <div
                        className="py-1 px-2 border rounded-lg border-nickel text-xs w-fit md:mb-4 mb-2 font-medium leading-[14px] text-silverFoil bg-black/40 backdrop-blur-sm"
                        id={`web-story-date-${story.slug}`}
                      >
                        {story.date}
                      </div>
                      <h3
                        className="text-sm md:text-2xl font-semibold leading-4 md:leading-7 text-white line-clamp-2"
                        id={`web-story-title-${story.slug}`}
                      >
                        {story.title}
                      </h3>
                    </figcaption>
                    <div className="absolute w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/80 rounded-lg"></div>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Stories Viewer Modal */}
      {activeStoryIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-0 md:p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          {/* Main Container */}
          <div className="relative w-full max-w-[420px] h-full md:h-[90vh] md:max-h-[740px] md:rounded-3xl overflow-hidden bg-black shadow-2xl flex flex-col justify-between select-none">
            
            {/* Top Bar (Progress Bars + Story Header) */}
            <div className="absolute top-0 inset-x-0 z-30 p-4 bg-gradient-to-b from-black/80 to-transparent">
              {/* Progress Bars */}
              <div className="flex gap-1.5 mb-4">
                {webStories[activeStoryIndex].slides.map((_, idx) => (
                  <div key={idx} className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white rounded-full transition-all ease-linear"
                      style={{
                        width:
                          idx < activeSlideIndex
                            ? '100%'
                            : idx === activeSlideIndex
                            ? `${progress}%`
                            : '0%',
                        transitionDuration: idx === activeSlideIndex ? '50ms' : '0ms'
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Story Details & Close Button */}
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 bg-primary/20 flex items-center justify-center font-bold text-sm text-primary">
                    BW
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold line-clamp-1 max-w-[200px]">
                      {webStories[activeStoryIndex].title}
                    </h4>
                    <p className="text-[10px] text-white/60">{webStories[activeStoryIndex].date}</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                  aria-label="Close stories"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Tap Zones & Content */}
            <div
              className="relative w-full h-full cursor-pointer flex flex-col justify-end p-6 pb-12"
              onClick={handleCardClick}
              onMouseDown={() => setIsPaused(true)}
              onMouseUp={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
            >
              {/* Background Slide Image */}
              <img
                src={webStories[activeStoryIndex].slides[activeSlideIndex].image}
                alt={webStories[activeStoryIndex].slides[activeSlideIndex].title}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />

              {/* Gradient Bottom Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20 z-10 pointer-events-none" />

              {/* Text Content */}
              <div className="relative z-20 text-white">
                <h3 className="text-xl font-bold tracking-tight mb-2">
                  {webStories[activeStoryIndex].slides[activeSlideIndex].title}
                </h3>
                <p className="text-sm text-white/90 leading-relaxed font-light">
                  {webStories[activeStoryIndex].slides[activeSlideIndex].description}
                </p>
              </div>
            </div>

            {/* Desktop Navigation Buttons */}
            <div className="hidden md:block">
              {/* Previous Button */}
              <button
                onClick={handlePrevSlide}
                className="absolute left-[-60px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center text-white"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNextSlide}
                className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center text-white"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
