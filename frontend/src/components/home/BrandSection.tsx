import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { fetchBrands, fetchVehicles, BRAND_LOGOS_OVERRIDE } from '../../utils/supabaseService';
import type { Brand } from '../../types';

export default function BrandSection() {
  const [brandLogos, setBrandLogos] = useState<Brand[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    Promise.all([fetchBrands(), fetchVehicles()]).then(([brandsData, vehiclesData]) => {
      // Deduplicate brands by name and calculate exact model count for each
      const brandMap = new Map<string, Brand>();

      brandsData.forEach(b => {
        const logo = BRAND_LOGOS_OVERRIDE[b.name] || b.logo;
        const count = vehiclesData.filter(v => {
          const vBrand = (v.brand || '').toLowerCase().trim();
          const bName = (b.name || '').toLowerCase().trim();
          return vBrand === bName || vBrand.includes(bName) || bName.includes(vBrand);
        }).length;

        if (!brandMap.has(b.name)) {
          brandMap.set(b.name, {
            ...b,
            logo,
            vehicleCount: count > 0 ? count : (b.vehicleCount || 0)
          });
        }
      });

      // Sort brands strictly by number of models (vehicle count) descending
      const sortedBrands = Array.from(brandMap.values()).sort((a, b) => b.vehicleCount - a.vehicleCount);
      setBrandLogos(sortedBrands);
    });
  }, []);

  const visibleBrands = showAll ? brandLogos : brandLogos.slice(0, 12);

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container-fluid">
        <div className="mb-8 md:mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Brands</p>
          <h2 className="mb-3 font-heading text-2xl font-bold text-dark md:text-4xl">Popular Brands</h2>
          <p className="text-sm md:text-lg text-muted">Explore vehicles from India's most trusted manufacturers</p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
          {visibleBrands.map(({ name, logo }) => {
            const logoUrl = BRAND_LOGOS_OVERRIDE[name] || logo;
            return (
              <Link
                key={name}
                to={`/cars?brand=${encodeURIComponent(name)}`}
                className="group flex flex-col items-center justify-center gap-2 sm:gap-2.5 rounded-2xl border border-border bg-white p-3 sm:p-4 transition-all duration-200 hover:-translate-y-1 hover:border-primary hover:shadow-md"
              >
                <div className="flex h-20 w-20 sm:h-28 sm:w-28 md:h-32 md:w-32 items-center justify-center rounded-2xl bg-surface p-2 ring-1 ring-border transition-colors duration-200 group-hover:bg-primary-50 group-hover:ring-primary-200">
                  <img
                    src={logoUrl}
                    alt={`${name} logo`}
                    className="max-h-full max-w-full object-contain p-1 transition-transform duration-200 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png';
                    }}
                  />
                </div>
                <div className="text-center">
                  <p className="text-xs sm:text-sm font-semibold leading-tight text-dark transition-colors group-hover:text-primary">
                    {name}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {brandLogos.length > 12 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(prev => !prev)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-border bg-surface text-dark font-semibold text-sm hover:border-primary hover:text-primary transition-all duration-200 shadow-sm"
              id="view-more-brands-btn"
            >
              <span>{showAll ? 'View Less Brands' : 'View More Brands'}</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${showAll ? 'rotate-180' : ''}`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
