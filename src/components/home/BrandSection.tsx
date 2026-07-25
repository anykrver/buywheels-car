import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBrands } from '../../utils/supabaseService';
import type { Brand } from '../../types';

export default function BrandSection() {
  const [brandLogos, setBrandLogos] = useState<Brand[]>([]);

  useEffect(() => {
    fetchBrands().then((brands) => {
      const specialBrands = ['Porsche', 'BYD', 'Mini'];
      const standard = brands.filter(b => !specialBrands.includes(b.name));
      const special = [];
      for (const name of specialBrands) {
        const found = brands.find(b => b.name === name);
        if (found) special.push(found);
      }
      setBrandLogos([...standard, ...special]);
    });
  }, []);
  return (
    <section className="bg-white py-20">
      <div className="container-fluid">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Brands</p>
          <h2 className="mb-3 font-heading text-3xl font-bold text-dark md:text-4xl">Popular Brands</h2>
          <p className="text-lg text-muted">Explore vehicles from India's most trusted manufacturers</p>
        </div>

        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
          {brandLogos.map(({ name, logo, vehicleCount }) => (
            <Link
              key={name}
              to={`/cars?brand=${encodeURIComponent(name)}`}
              className="group flex min-h-[148px] flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:shadow-card"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-surface p-1.5 ring-1 ring-border transition-colors duration-200 group-hover:bg-primary-50 group-hover:ring-primary-100 md:h-[88px] md:w-[88px]">
                <img
                  src={logo}
                  alt={`${name} logo`}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="text-center">
                <p className="text-xs font-medium leading-tight text-dark transition-colors group-hover:text-primary">
                  {name}
                </p>
                <p className="mt-0.5 text-[11px] text-muted">{vehicleCount} vehicles</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
