import { useRef, useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { fetchReviews } from '../../utils/supabaseService';
import type { Review } from '../../types';

export default function ReviewsSection() {
  const [reviewsList, setReviewsList] = useState<Review[]>([]);

  useEffect(() => {
    fetchReviews().then(setReviewsList);
  }, []);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -360 : 360, behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-white py-14 md:py-20">
      {/* Header */}
      <div className="mx-auto mb-8 flex max-w-[1280px] items-end justify-between px-4 sm:px-6 lg:px-8 md:mb-10">
        <div>
          <p className="mb-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </p>
          <h2 className="font-heading text-2xl font-semibold text-slate-900 md:text-3xl">
            What motivates us
          </h2>
          {/* Overall rating strip */}
          <div className="mt-3 flex items-center gap-2">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={16} className="fill-warning text-warning" />
              ))}
            </div>
            <span className="font-heading text-lg font-bold text-slate-900">4.8</span>
            <span className="text-sm text-neutral-500">from 10,000+ reviews</span>
          </div>
        </div>

        {/* Desktop scroll arrows */}
        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll reviews left"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 bg-white text-slate-700 shadow-sm transition-colors hover:border-primary hover:text-primary"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll('right')}
            aria-label="Scroll reviews right"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 bg-white text-slate-700 shadow-sm transition-colors hover:border-primary hover:text-primary"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Scrollable cards */}
      <div className="relative overflow-hidden">
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            gap: '0.75rem',
            margin: '0 0 0 0',
            padding: '0.75rem',
            // CSS custom property for cards per view (3 on lg, 2 on md, 1.2 on sm)
          } as React.CSSProperties}
        >
          {/* Leading spacer */}
          <div className="flex-shrink-0 pl-3 sm:pl-5 lg:pl-8 xl:pl-[calc((100vw-1280px)/2+32px)]" />

          {reviewsList.map((review) => (
            <div
              key={review.id}
              className="relative flex-shrink-0 snap-center"
              style={{ flex: '0 0 clamp(280px, 30vw, 360px)' }}
            >
              <div className="flex h-52 w-full flex-col overflow-y-auto rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:h-56 md:p-6">
                {/* Top: Avatar + name + action */}
                <div className="flex items-center gap-3">
                  <div className="flex flex-1 flex-col">
                    <p className="text-xs font-medium text-slate-900 md:text-sm">{review.name}</p>
                    <div className="flex items-center justify-between pt-1 text-[10px] text-neutral-500 md:text-xs">
                      <span>bought {review.vehicle} · {review.date}</span>
                    </div>
                  </div>
                  {/* Avatar circle */}
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-slate-900 text-[10px] font-medium text-white md:h-10 md:w-10 md:text-base">
                    {review.avatar}
                  </div>
                </div>

                {/* Star rating */}
                <div className="mt-2 flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={12} className="fill-warning text-warning" />
                  ))}
                </div>

                {/* Review text */}
                <div className="mt-2 flex-1">
                  <p className="line-clamp-4 text-xs leading-relaxed text-slate-700 md:text-sm">
                    "{review.comment}"
                  </p>
                </div>

                {/* Footer */}
                {review.verified && (
                  <div className="mt-3 flex items-center gap-1 border-t border-neutral-100 pt-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary-50 px-2 py-0.5 text-[10px] font-medium text-primary md:text-xs">
                      ✓ Verified Purchase · {review.location}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Trailing spacer */}
          <div className="flex-shrink-0 pr-3 sm:pr-5 lg:pr-8 xl:pr-[calc((100vw-1280px)/2+32px)]" />
        </div>
      </div>

      {/* Mobile scroll hint dots */}
      <div className="mt-5 flex justify-center gap-1.5 md:hidden">
        {reviewsList.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === 0 ? 'w-4 bg-primary' : 'w-1.5 bg-neutral-200'}`}
          />
        ))}
      </div>
    </section>
  );
}
