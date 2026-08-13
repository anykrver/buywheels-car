import { useRef, useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { fetchReviews } from '../../utils/supabaseService';
import type { Review } from '../../types';

export default function ReviewsSection() {
  const [reviewsList, setReviewsList] = useState<Review[]>([]);
  const [scrollIndex, setScrollIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchReviews().then(setReviewsList);
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.85;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (!scrollRef.current || reviewsList.length === 0) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;
    const progress = scrollLeft / maxScroll;
    const index = Math.min(
      reviewsList.length - 1,
      Math.round(progress * (reviewsList.length - 1))
    );
    setScrollIndex(index);
  };

  return (
    <section className="w-full bg-white py-12 md:py-20 overflow-hidden">
      <div className="container-fluid">
        {/* Header */}
        <div className="mb-8 md:mb-10 flex items-end justify-between">
          <div>
            <p className="mb-1.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary">
              Testimonials
            </p>
            <h2 className="font-heading text-2xl font-bold text-dark md:text-3xl">
              What motivates us
            </h2>
            {/* Overall rating strip */}
            <div className="mt-2.5 flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} className="fill-warning text-warning" />
                ))}
              </div>
              <span className="font-heading text-lg font-bold text-dark">4.8</span>
              <span className="text-sm text-muted">from 10,000+ happy buyers in Jharkhand</span>
            </div>
          </div>

          {/* Desktop scroll arrows */}
          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll reviews left"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white text-dark shadow-sm transition-all hover:border-primary hover:text-primary hover:bg-primary-50"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll reviews right"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white text-dark shadow-sm transition-all hover:border-primary hover:text-primary hover:bg-primary-50"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable cards carousel */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth py-2 gap-4 sm:gap-6 no-scrollbar"
        >
          {reviewsList.map((review) => (
            <div
              key={review.id}
              className="flex-shrink-0 snap-start w-[280px] sm:w-[340px] md:w-[360px]"
            >
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-white p-5 sm:p-6 shadow-sm hover:shadow-card hover:border-primary/40 transition-all duration-200">
                <div>
                  {/* Top: Avatar + name */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-dark text-xs font-bold text-white">
                      {review.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-dark truncate">{review.name}</p>
                      <p className="text-[11px] text-muted truncate">
                        bought {review.vehicle} · {review.date}
                      </p>
                    </div>
                  </div>

                  {/* Star rating */}
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={14} className="fill-warning text-warning" />
                    ))}
                  </div>

                  {/* Review text */}
                  <p className="text-xs sm:text-sm leading-relaxed text-dark-600 italic">
                    "{review.comment}"
                  </p>
                </div>

                {/* Footer badge */}
                {review.verified && (
                  <div className="mt-4 pt-3 border-t border-border flex items-center">
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary-50 px-2.5 py-1 text-[11px] font-semibold text-primary">
                      ✓ Verified Buyer · {review.location}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Indicator dots for mobile */}
        {reviewsList.length > 1 && (
          <div className="mt-6 flex justify-center gap-1.5 md:hidden">
            {reviewsList.slice(0, Math.min(reviewsList.length, 6)).map((_, i) => {
              const active = Math.min(scrollIndex, 5) === i;
              return (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    active ? 'w-5 bg-primary' : 'w-1.5 bg-border'
                  }`}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
