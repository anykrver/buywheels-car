import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Tag } from 'lucide-react';
import { formatPriceShort } from '../../utils/data';
import { fetchVehicles } from '../../utils/supabaseService';
import type { Vehicle } from '../../types';

const fallbackImg = 'https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=600';

// Arrow SVG matching the original design
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

export default function RecentlyLaunchedSection() {
  const scrollRef = useRef<HTMLUListElement>(null);
  const [vehiclesList, setVehiclesList] = useState<Vehicle[]>([]);

  useEffect(() => {
    fetchVehicles().then(setVehiclesList);
  }, []);

  // Deduplicate and filter new vehicles
  const seen = new Set();
  const recentlyLaunchedCars = vehiclesList.filter(v => {
    if (seen.has(v.id)) return false;
    seen.add(v.id);
    return v.isNew;
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
        <h2 className="font-heading text-xl font-semibold leading-7 text-white md:text-3xl md:leading-[38px]">
          Recently launched cars
        </h2>

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
            to="/cars"
            aria-label="View all recently launched cars"
            className="flex h-12 items-center gap-1.5 rounded-lg bg-neutral-800 py-3.5 pl-4 pr-3 text-primary transition-colors hover:bg-white/20"
          >
            <span className="text-base font-semibold leading-tight">
              View recently launched cars
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

          {recentlyLaunchedCars.map((car) => (
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
                      alt={`${car.model} Car Image`}
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

                    {/* Launch date */}
                    <div className="mt-2 flex items-center gap-1">
                      <span className="text-xs font-medium leading-[14px] text-neutral-500">
                        Launched on
                      </span>
                      <span className="h-0.5 w-0.5 rounded-full bg-neutral-500" />
                      <span className="text-xs font-medium leading-[14px] text-[#9b8afb]">
                        {car.year}
                      </span>
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
                      <Tag size={14} className="text-primary" />
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
        to="/cars"
        aria-label="View all recently launched cars"
        className="mx-auto mt-5 flex h-10 items-center justify-center gap-1.5 rounded-lg px-3 py-3 text-white transition-colors hover:bg-white/20 lg:hidden"
      >
        <span className="text-center text-sm font-semibold leading-none">
          View recently launched cars
        </span>
        <ArrowIcon className="h-4 w-4 -rotate-45 text-white" />
      </Link>
    </section>
  );
}
