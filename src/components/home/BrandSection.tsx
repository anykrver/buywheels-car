import { Link } from 'react-router-dom';

const brandLogos = [
  {
    name: 'Maruti Suzuki',
    logo: 'https://static-cdn.cars24.com/prod/bikes/2025/05/27/Suzuki_Logos_176x176_4cdbf2d508-81f7c4b3-7c01-4de6-8bd1-5c970e9e26d4.png',
    count: 18,
  },
  {
    name: 'Hyundai',
    logo: 'https://static-cdn.cars24.com/prod/bikes/2025/06/25/Hyundai-c380f1c1-86a1-4444-a5a9-6f68306b023c.png',
    count: 14,
  },
  {
    name: 'Tata',
    logo: 'https://static-cdn.cars24.com/prod/bikes/2025/07/01/Container-1-47cf9d69-e2e2-4bae-b6c2-811bab4544ba.png',
    count: 16,
  },
  {
    name: 'Mahindra',
    logo: 'https://static-cdn.cars24.com/prod/bikes/2025/06/25/Mahindra-29d3c1df-fd38-4d36-9491-2319596e9032.png',
    count: 12,
  },
  {
    name: 'Toyota',
    logo: 'https://static-cdn.cars24.com/prod/bikes/2025/06/25/Toyota-098fa7f6-4842-422e-8b8a-1dc97641a2fe.png',
    count: 10,
  },
  {
    name: 'Honda',
    logo: 'https://static-cdn.cars24.com/prod/bikes/2025/06/25/Container-5-d813c3ab-e96c-4f3c-80df-c45f70b7b527.png',
    count: 14,
  },
  {
    name: 'Kia',
    logo: 'https://static-cdn.cars24.com/prod/bikes/2025/06/25/Kia-64a3d6aa-8cc7-4f6b-8bd8-e71c4a7a5832.png',
    count: 6,
  },
  {
    name: 'Renault',
    logo: 'https://static-cdn.cars24.com/prod/bikes/2025/06/25/Renault-2baa1686-fb01-43a7-90d5-f3c19c22c810.png',
    count: 8,
  },
  {
    name: 'Skoda',
    logo: 'https://static-cdn.cars24.com/prod/bikes/2025/07/01/Container-4-fe646a5a-1f0b-4ca1-a70c-2b0d7ad1cd19.png',
    count: 7,
  },
  {
    name: 'MG',
    logo: 'https://static-cdn.cars24.com/prod/bikes/2025/06/25/MG-29145582-cf3b-4edf-9e6b-5bb79036108d.png',
    count: 5,
  },
  {
    name: 'Nissan',
    logo: 'https://static-cdn.cars24.com/prod/bikes/2025/07/01/Container-2-1657e5a7-4f2c-4df7-bf35-949db36509a3.png',
    count: 6,
  },
  {
    name: 'Volkswagen',
    logo: 'https://static-cdn.cars24.com/prod/bikes/2025/06/25/VW-bb54ceb0-f19f-4a47-98e9-47107a96de6e.png',
    count: 6,
  },
];

export default function BrandSection() {
  return (
    <section className="bg-white py-20">
      <div className="container-fluid">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Brands</p>
          <h2 className="mb-3 font-heading text-3xl font-bold text-dark md:text-4xl">Popular Brands</h2>
          <p className="text-lg text-muted">Explore vehicles from India's most trusted manufacturers</p>
        </div>

        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
          {brandLogos.map(({ name, logo, count }) => (
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
                <p className="mt-0.5 text-[11px] text-muted">{count} vehicles</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
