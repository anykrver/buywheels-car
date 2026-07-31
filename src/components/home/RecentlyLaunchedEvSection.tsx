import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Tag, Zap } from 'lucide-react';
import { formatPriceShort, vehicles as localVehicles } from '../../utils/data';
import type { Vehicle } from '../../types';

const fallbackImg = 'https://imgd.aeplcdn.com/664x374/n/cw/ec/141879/nexon-ev-exterior-right-front-three-quarter-7.jpeg';

// Arrow SVG matching the original design from RecentlyLaunchedSection
function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 14 14"
      className={className}
    >
      <path
        fill="currentColor"
        d="M12.122 7.31l-3.937 3.937a.438.438 0 11-.62-.619l3.192-3.19h-8.57a.437.437 0 110-.875h8.57l-3.192-3.19a.438.438 0 01.62-.62l3.937 3.938a.437.437 0 010 .619z"
      />
    </svg>
  );
}

const extraEvVehicles: Vehicle[] = [
  {
    id: "tata-sierra-ev-2026",
    slug: "tata-sierra-ev",
    category: "ev",
    brand: "Tata",
    model: "Sierra EV",
    year: 2026,
    startingPrice: 1879000,
    emiFrom: 35000,
    images: ["https://images.91wheels.com/assets/c_images/gallery/tata/sierra-ev/tata-sierra-ev-0-1782897309.png?w=800&q=40"],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/tata/sierra-ev/tata-sierra-ev-0-1782897309.png?w=800&q=40",
    fuelTypes: ["Electric"],
    transmissions: ["Automatic"],
    mileage: "500 km range",
    rangeKm: 500,
    variants: [],
    dealerPrices: [],
    features: ["500 km Range", "Dual Motor AWD", "12.3-inch Touchscreen"],
    colors: ["Teal Blue", "Pure White"],
    rating: 4.8,
    reviewCount: 350,
    isNew: true,
    isEV: true
  },
  {
    id: "mahindra-be-6e-2026",
    slug: "mahindra-be-6e",
    category: "ev",
    brand: "Mahindra",
    model: "BE 6",
    year: 2026,
    startingPrice: 1890000,
    emiFrom: 36000,
    images: ["https://images.91wheels.com/assets/c_images/gallery/mahindra/be-6e/mahindra-be-6e-4-1767931326.png?w=800&q=40"],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/mahindra/be-6e/mahindra-be-6e-4-1767931326.png?w=800&q=40",
    fuelTypes: ["Electric"],
    transmissions: ["Automatic"],
    mileage: "682 km range",
    rangeKm: 682,
    variants: [],
    dealerPrices: [],
    features: ["79 kWh Battery", "682 km Range", "Level 2 ADAS"],
    colors: ["Everest White", "Stealth Black"],
    rating: 4.9,
    reviewCount: 410,
    isNew: true,
    isEV: true
  },
  {
    id: "mahindra-xev-9s-2026",
    slug: "mahindra-xev-9s",
    category: "ev",
    brand: "Mahindra",
    model: "XEV 9S",
    year: 2026,
    startingPrice: 2140000,
    emiFrom: 41000,
    images: ["https://images.91wheels.com/assets/c_images/gallery/mahindra/xev-9s/mahindra-xev-9s-0-1766745066.png?w=800&q=40"],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/mahindra/xev-9s/mahindra-xev-9s-0-1766745066.png?w=800&q=40",
    fuelTypes: ["Electric"],
    transmissions: ["Automatic"],
    mileage: "650 km range",
    rangeKm: 650,
    variants: [],
    dealerPrices: [],
    features: ["79 kWh Battery", "650 km Range", "Triple Screen Cockpit"],
    colors: ["Mystic Copper", "Satin Black"],
    rating: 4.7,
    reviewCount: 290,
    isNew: true,
    isEV: true
  },
  {
    id: "mg-windsor-ev-2026",
    slug: "mg-windsor-ev",
    category: "ev",
    brand: "MG",
    model: "Windsor EV",
    year: 2026,
    startingPrice: 1470000,
    emiFrom: 28000,
    images: ["https://images.91wheels.com/assets/c_images/gallery/mg/windsor-ev/mg-windsor-ev-0-1781267952.png?w=800&q=40"],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/mg/windsor-ev/mg-windsor-ev-0-1781267952.png?w=800&q=40",
    fuelTypes: ["Electric"],
    transmissions: ["Automatic"],
    mileage: "331 km range",
    rangeKm: 331,
    variants: [],
    dealerPrices: [],
    features: ["15.6-inch Display", "331 km Range", "135-degree Reclining Seats"],
    colors: ["Turquoise Green", "Pearl White"],
    rating: 4.6,
    reviewCount: 520,
    isNew: true,
    isEV: true
  },
  {
    id: "tata-harrier-ev-2026",
    slug: "tata-harrier-ev",
    category: "ev",
    brand: "Tata",
    model: "Harrier EV",
    year: 2026,
    startingPrice: 2169000,
    emiFrom: 41500,
    images: ["https://images.91wheels.com/assets/c_images/gallery/tata/harrier-ev/tata-harrier-ev-0-1769674594.png?w=800&q=40"],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/tata/harrier-ev/tata-harrier-ev-0-1769674594.png?w=800&q=40",
    fuelTypes: ["Electric"],
    transmissions: ["Automatic"],
    mileage: "500 km range",
    rangeKm: 500,
    variants: [],
    dealerPrices: [],
    features: ["AWD Electric Drive", "500 km Range", "Panoramic Sunroof"],
    colors: ["Sunlit Gold", "Oberon Black"],
    rating: 4.8,
    reviewCount: 310,
    isNew: true,
    isEV: true
  },
  {
    id: "maruti-e-vitara-2026",
    slug: "maruti-e-vitara",
    category: "ev",
    brand: "Maruti Suzuki",
    model: "E Vitara",
    year: 2026,
    startingPrice: 1099000,
    emiFrom: 20500,
    images: ["https://images.91wheels.com/assets/c_images/gallery/maruti/e-vitara/maruti-e-vitara-1-1782292182.png?w=800&q=40"],
    thumbnailUrl: "https://images.91wheels.com/assets/c_images/gallery/maruti/e-vitara/maruti-e-vitara-1-1782292182.png?w=800&q=40",
    fuelTypes: ["Electric"],
    transmissions: ["Automatic"],
    mileage: "500 km range",
    rangeKm: 500,
    variants: [],
    dealerPrices: [],
    features: ["61 kWh Battery", "ALLGRIP e-AWD", "500 km Range"],
    colors: ["Nexa Blue", "Splendid Silver"],
    rating: 4.7,
    reviewCount: 480,
    isNew: true,
    isEV: true
  }
];

export default function RecentlyLaunchedEvSection() {
  const scrollRef = useRef<HTMLUListElement>(null);
  const [vehiclesList] = useState<Vehicle[]>([...extraEvVehicles, ...localVehicles]);

  // Deduplicate and filter EV vehicles
  const seen = new Set<string>();
  const recentlyLaunchedEvCars = vehiclesList.filter((v) => {
    if (seen.has(v.id) || seen.has(v.slug)) return false;

    const isEV =
      v.isEV === true ||
      v.category === 'ev' ||
      (v.fuelTypes && v.fuelTypes.includes('Electric')) ||
      v.model?.toLowerCase().includes('ev') ||
      v.slug?.toLowerCase().includes('ev');

    if (!isEV) return false;
    seen.add(v.id);
    if (v.slug) seen.add(v.slug);
    return true;
  });

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: dir === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="bg-[#0f0f10] py-9 lg:py-16">
      {/* Section header */}
      <div className="mx-auto mb-5 flex max-w-[1440px] items-center justify-between px-4 lg:mb-8 lg:px-10 xl:px-20">
        <div className="flex items-center gap-3">
          <h2 className="font-heading text-xl font-semibold leading-7 text-white md:text-3xl md:leading-[38px]">
            Recently launched cars in EV
          </h2>
          <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400 border border-emerald-500/20">
            <Zap size={12} className="text-emerald-400 fill-emerald-400" />
            EV
          </span>
        </div>

        {/* Desktop nav controls */}
        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-700 bg-neutral-800 text-white transition-colors hover:bg-white/20"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-700 bg-neutral-800 text-white transition-colors hover:bg-white/20"
          >
            <ChevronRight size={18} />
          </button>
          <Link
            to="/evs"
            aria-label="View all recently launched EV cars"
            className="flex h-12 items-center gap-1.5 rounded-lg bg-neutral-800 py-3.5 pl-4 pr-3 text-primary transition-colors hover:bg-white/20"
          >
            <span className="text-base font-semibold leading-tight">
              View recently launched cars in EV
            </span>
            <ArrowIcon className="h-5 w-5 -rotate-45 text-primary" />
          </Link>
        </div>
      </div>

      {/* Scrollable card list */}
      <div className="relative">
        <ul
          ref={scrollRef}
          className="m-0 flex list-none gap-4 overflow-x-auto overflow-y-hidden p-0 pr-4 sm:gap-5 sm:pr-5 lg:gap-6 lg:pr-0"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {/* Leading spacer matching dynamic-padding */}
          <li className="flex-shrink-0 pl-4 lg:pl-10 xl:pl-20" />

          {recentlyLaunchedEvCars.map((car) => (
            <li
              key={car.id}
              className="relative min-h-[369px] w-[308px] min-w-[308px] cursor-pointer overflow-hidden rounded-2xl border border-neutral-800 bg-[#1a1a1b] pb-4 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-600 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] md:pb-5 lg:min-h-[414px] lg:w-[320px] lg:min-w-[320px]"
            >
              <div className="flex h-full flex-col gap-4">
                {/* Card image */}
                <Link
                  to={`/vehicle/${car.slug}`}
                  aria-label={`View details of ${car.brand} ${car.model}`}
                  className="block"
                >
                  <div className="relative h-[172px] overflow-hidden rounded-t-2xl bg-gradient-to-b from-[#1a1a1b] to-[#0f0f10] md:h-[180px]">
                    {/* EV Badge */}
                    <div className="absolute top-3 left-3 z-20 flex items-center gap-1 rounded-full bg-emerald-950/80 px-2.5 py-1 text-xs font-semibold text-emerald-400 backdrop-blur-md border border-emerald-500/30">
                      <Zap size={12} className="text-emerald-400 fill-emerald-400" />
                      <span>{car.rangeKm ? `${car.rangeKm} km` : 'EV'}</span>
                    </div>

                    {/* Bottom gradient fade */}
                    <div
                      className="pointer-events-none absolute bottom-0 left-0 right-0 z-10"
                      style={{
                        height: 50,
                        background:
                          'linear-gradient(to bottom, rgba(0,0,0,0) 0%, #0f0f10 100%)',
                      }}
                    />
                    <img
                      src={car.thumbnailUrl}
                      alt={`${car.model} EV Car Image`}
                      loading="lazy"
                      width={1920}
                      height={1080}
                      className="absolute left-0 top-0 aspect-video h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = fallbackImg;
                      }}
                    />
                  </div>
                </Link>

                {/* Card body */}
                <div className="flex flex-1 flex-col items-start justify-start gap-4 px-4 md:px-5">
                  {/* Name + price block */}
                  <div className="flex w-full flex-col justify-start">
                    <div className="flex w-full items-center justify-between gap-3">
                      {/* Brand & Model */}
                      <div className="flex flex-col gap-1">
                        <p className="text-sm font-medium leading-[16px] text-neutral-400 md:text-base md:leading-tight">
                          {car.brand}
                        </p>
                        <p className="line-clamp-2 text-base font-medium leading-[20px] text-white md:text-lg md:leading-snug">
                          {car.model}
                        </p>
                      </div>
                      {/* Price */}
                      <div className="flex flex-shrink-0 flex-col items-end gap-1">
                        <p className="text-sm font-medium leading-[16px] text-white md:text-base md:leading-tight">
                          {formatPriceShort(car.startingPrice)}
                        </p>
                        <p className="text-xs font-medium leading-[14px] text-neutral-400 md:text-sm md:leading-none">
                          Ex-Showroom
                        </p>
                      </div>
                    </div>

                    {/* Launch date & Range */}
                    <div className="mt-2 flex items-center gap-1">
                      <span className="text-xs font-medium leading-[14px] text-neutral-500">
                        Launched on
                      </span>
                      <span className="h-0.5 w-0.5 rounded-full bg-neutral-500" />
                      <span className="text-xs font-medium leading-[14px] text-[#9b8afb]">
                        {car.year}
                      </span>
                      {car.rangeKm && (
                        <>
                          <span className="h-0.5 w-0.5 rounded-full bg-neutral-500" />
                          <span className="text-xs font-medium leading-[14px] text-emerald-400">
                            {car.rangeKm} km range
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* CTA buttons */}
                  <div className="z-20 mt-auto flex w-full flex-col gap-3">
                    {/* View Specifications */}
                    <Link
                      to={`/vehicle/${car.slug}`}
                      aria-label={`View specifications of ${car.brand} ${car.model}`}
                      className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-transparent px-2 py-[10px] transition-colors hover:bg-white/10 md:px-2.5 md:py-3"
                    >
                      <span className="text-xs font-semibold leading-[14px] text-white md:text-sm md:leading-none">
                        View Specifications
                      </span>
                      <ArrowIcon className="h-[14px] w-[14px] text-white md:h-4 md:w-4" />
                    </Link>

                    {/* Grab hot deals */}
                    <button
                      type="button"
                      className="flex h-10 w-full items-center justify-center gap-1.5 rounded-lg bg-neutral-800 p-3 transition-colors hover:bg-white/20"
                    >
                      <Tag size={14} className="text-emerald-400" />
                      <span className="text-sm font-semibold leading-[16px] text-white md:leading-none">
                        Grab hot deals
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}

          {/* Trailing spacer */}
          <li className="hidden flex-shrink-0 pr-10 xl:pr-20 lg:block" />
        </ul>
      </div>

      {/* Mobile "View all" link */}
      <Link
        to="/evs"
        aria-label="View all recently launched cars in EV"
        className="mx-auto mt-5 flex h-10 items-center justify-center gap-1.5 rounded-lg px-3 py-3 text-white transition-colors hover:bg-white/20 lg:hidden"
      >
        <span className="text-center text-sm font-semibold leading-none">
          View recently launched cars in EV
        </span>
        <ArrowIcon className="h-4 w-4 -rotate-45 text-white" />
      </Link>
    </section>
  );
}
