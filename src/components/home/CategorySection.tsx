import { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { vehicles as mockVehicles, getBodyType } from '../../utils/data';
import { fetchVehicles } from '../../utils/supabaseService';
import type { Vehicle } from '../../types';

type BrowseTabId = 'engine' | 'price' | 'body' | 'fuel' | 'seating';

interface BrowseCard {
  eyebrow: string;
  title: string;
  count: string;
  path: string;
  image?: string;
  imageAlt?: string;
}

interface BrowseGroup {
  id: BrowseTabId;
  label: string;
  items: BrowseCard[];
}

export default function CategorySection() {
  const [activeTab, setActiveTab] = useState<BrowseTabId>('price');
  const [vehicleList, setVehicleList] = useState<Vehicle[]>(mockVehicles);

  useEffect(() => {
    fetchVehicles().then(data => {
      if (data && data.length > 0) setVehicleList(data);
    });
  }, []);

  const browseGroups = useMemo((): BrowseGroup[] => {
    // Unique list of vehicles
    const seen = new Set();
    const uniqueVehicles = vehicleList.filter(v => {
      if (seen.has(v.id)) return false;
      seen.add(v.id);
      return true;
    });

    const getCountStr = (num: number) => `${num} ${num === 1 ? 'car' : 'cars'}`;

    return [
      {
        id: 'engine',
        label: 'Engine',
        items: [
          {
            eyebrow: 'Under', title: '1000cc',
            count: getCountStr(uniqueVehicles.filter(v => v.engineCC && v.engineCC <= 1000).length),
            path: '/cars?engineCCMax=1000',
            image: '/images/ig_02c4f8a42d259d22016a42895444048191ba50091f3a07829e.png',
            imageAlt: 'Small hatchback under 1000cc',
          },
          {
            eyebrow: 'Under', title: '1500cc',
            count: getCountStr(uniqueVehicles.filter(v => v.engineCC && v.engineCC <= 1500).length),
            path: '/cars?engineCCMax=1500',
            image: '/images/ig_02c4f8a42d259d22016a4287db22c08191950b277ebfb78608.png',
            imageAlt: 'Hatchback under 1500cc',
          },
          {
            eyebrow: 'Under', title: '2000cc',
            count: getCountStr(uniqueVehicles.filter(v => v.engineCC && v.engineCC <= 2000).length),
            path: '/cars?engineCCMax=2000',
            image: '/images/ig_02c4f8a42d259d22016a42890eadfc8191bfac96a0c64ead7b.png',
            imageAlt: 'Car engine under 2000cc',
          },
          {
            eyebrow: 'Under', title: '3000cc',
            count: getCountStr(uniqueVehicles.filter(v => v.engineCC && v.engineCC <= 3000).length),
            path: '/cars?engineCCMax=3000',
            image: '/images/ig_02c4f8a42d259d22016a4286e2e58081919602762caa901158.png',
            imageAlt: 'SUV under 3000cc',
          },
          {
            eyebrow: 'Above', title: '3000cc',
            count: getCountStr(uniqueVehicles.filter(v => v.engineCC && v.engineCC > 3000).length),
            path: '/cars?engineCCMin=3001',
            image: '/images/ig_02c4f8a42d259d22016a42879e5da48191969a6a481bc76165.png',
            imageAlt: 'High-performance SUV above 3000cc',
          },
        ],
      },
      {
        id: 'price',
        label: 'Price',
        items: [
          {
            eyebrow: 'Under', title: '5 lakh',
            count: getCountStr(uniqueVehicles.filter(v => v.startingPrice <= 500000).length),
            path: '/cars?priceMax=500000',
            image: '/images/ig_02c4f8a42d259d22016a42895444048191ba50091f3a07829e.png',
            imageAlt: 'Budget car under 5 lakh',
          },
          {
            eyebrow: 'Under', title: '6 lakh',
            count: getCountStr(uniqueVehicles.filter(v => v.startingPrice <= 600000).length),
            path: '/cars?priceMax=600000',
            image: '/images/ig_02c4f8a42d259d22016a4287db22c08191950b277ebfb78608.png',
            imageAlt: 'Car under 6 lakh',
          },
          {
            eyebrow: 'Under', title: '7 lakh',
            count: getCountStr(uniqueVehicles.filter(v => v.startingPrice <= 700000).length),
            path: '/cars?priceMax=700000',
            image: '/images/ig_02c4f8a42d259d22016a42890eadfc8191bfac96a0c64ead7b.png',
            imageAlt: 'Car under 7 lakh',
          },
          {
            eyebrow: 'Under', title: '10 lakh',
            count: getCountStr(uniqueVehicles.filter(v => v.startingPrice <= 1000000).length),
            path: '/cars?priceMax=1000000',
            image: '/images/ig_02c4f8a42d259d22016a4286e2e58081919602762caa901158.png',
            imageAlt: 'SUV under 10 lakh',
          },
          {
            eyebrow: 'Under', title: '15 lakh',
            count: getCountStr(uniqueVehicles.filter(v => v.startingPrice <= 1500000).length),
            path: '/cars?priceMax=1500000',
            image: '/images/ig_02c4f8a42d259d22016a428721944081919c5b38250ef576a5.png',
            imageAlt: 'Premium SUV under 15 lakh',
          },
          {
            eyebrow: 'Under', title: '20 lakh',
            count: getCountStr(uniqueVehicles.filter(v => v.startingPrice <= 2000000).length),
            path: '/cars?priceMax=2000000',
            image: '/images/ig_02c4f8a42d259d22016a4288175e08819188f974dc735abcae.png',
            imageAlt: 'Luxury sedan under 20 lakh',
          },
          {
            eyebrow: 'Under', title: '50 lakh',
            count: getCountStr(uniqueVehicles.filter(v => v.startingPrice <= 5000000).length),
            path: '/cars?priceMax=5000000',
            image: '/images/ig_02c4f8a42d259d22016a4288d0700c81919fa03b93cc3a2dd7.png',
            imageAlt: 'Sports coupe under 50 lakh',
          },
          {
            eyebrow: 'Under', title: '1 crore',
            count: getCountStr(uniqueVehicles.filter(v => v.startingPrice <= 10000000).length),
            path: '/cars?priceMax=10000000',
            image: '/images/ig_02c4f8a42d259d22016a428764c8448191a6f6b0b9ca40eea6.png',
            imageAlt: 'Luxury car under 1 crore',
          },
        ],
      },
      {
        id: 'body',
        label: 'Body Type',
        items: [
          {
            eyebrow: 'Hatchback', title: 'cars',
            count: getCountStr(uniqueVehicles.filter(v => getBodyType(v) === 'Hatchback').length),
            path: '/cars?bodyType=Hatchback',
            image: '/images/ig_02c4f8a42d259d22016a4287db22c08191950b277ebfb78608.png',
            imageAlt: 'Hatchback car',
          },
          {
            eyebrow: 'Sedan', title: 'cars',
            count: getCountStr(uniqueVehicles.filter(v => getBodyType(v) === 'Sedan').length),
            path: '/cars?bodyType=Sedan',
            image: '/images/ig_02c4f8a42d259d22016a4288175e08819188f974dc735abcae.png',
            imageAlt: 'Sedan car',
          },
          {
            eyebrow: 'SUV', title: 'cars',
            count: getCountStr(uniqueVehicles.filter(v => getBodyType(v) === 'SUV').length),
            path: '/cars?bodyType=SUV',
            image: '/images/ig_02c4f8a42d259d22016a4286e2e58081919602762caa901158.png',
            imageAlt: 'SUV car',
          },
          {
            eyebrow: 'MUV', title: 'cars',
            count: getCountStr(uniqueVehicles.filter(v => getBodyType(v) === 'MUV').length),
            path: '/cars?bodyType=MUV',
            image: '/images/ig_02c4f8a42d259d22016a42888fe2888191b333ea588687cb5a.png',
            imageAlt: 'MUV / MPV car',
          },
          {
            eyebrow: 'Coupe', title: 'cars',
            count: getCountStr(uniqueVehicles.filter(v => getBodyType(v) === 'Coupe').length),
            path: '/cars?bodyType=Coupe',
            image: '/images/ig_02c4f8a42d259d22016a4288d0700c81919fa03b93cc3a2dd7.png',
            imageAlt: 'Coupe car',
          },
        ],
      },
      {
        id: 'fuel',
        label: 'Fuel',
        items: [
          {
            eyebrow: 'Petrol', title: 'cars',
            count: getCountStr(uniqueVehicles.filter(v => v.fuelTypes.includes('Petrol')).length),
            path: '/cars?fuel=Petrol',
            image: '/images/ig_02c4f8a42d259d22016a4287db22c08191950b277ebfb78608.png',
            imageAlt: 'Petrol car',
          },
          {
            eyebrow: 'CNG', title: 'cars',
            count: getCountStr(uniqueVehicles.filter(v => v.fuelTypes.includes('CNG')).length),
            path: '/cars?fuel=CNG',
            image: '/images/ig_02c4f8a42d259d22016a42895444048191ba50091f3a07829e.png',
            imageAlt: 'CNG car',
          },
          {
            eyebrow: 'Electric', title: 'cars',
            count: getCountStr(uniqueVehicles.filter(v => v.fuelTypes.includes('Electric')).length),
            path: '/ev',
            image: '/images/ig_02c4f8a42d259d22016a42899dcc5c819189aca323ec92c12d.png',
            imageAlt: 'Electric car at charger',
          },
          {
            eyebrow: 'Diesel', title: 'cars',
            count: getCountStr(uniqueVehicles.filter(v => v.fuelTypes.includes('Diesel')).length),
            path: '/cars?fuel=Diesel',
            image: '/images/ig_02c4f8a42d259d22016a42885128408191a75a9e5d18640009.png',
            imageAlt: 'Diesel SUV',
          },
          {
            eyebrow: 'Hybrid', title: 'cars',
            count: getCountStr(uniqueVehicles.filter(v => v.fuelTypes.includes('Hybrid')).length),
            path: '/cars?fuel=Hybrid',
            image: '/images/ig_02c4f8a42d259d22016a428721944081919c5b38250ef576a5.png',
            imageAlt: 'Hybrid car',
          },
        ],
      },
      {
        id: 'seating',
        label: 'Seating Capacity',
        items: [
          {
            eyebrow: '2 Seater', title: 'cars',
            count: getCountStr(uniqueVehicles.filter(v => v.seatingCapacity === 2).length),
            path: '/cars?seatingCapacity=2',
            image: '/images/ig_02c4f8a42d259d22016a4288d0700c81919fa03b93cc3a2dd7.png',
            imageAlt: '2-seater sports coupe',
          },
          {
            eyebrow: '4 Seater', title: 'cars',
            count: getCountStr(uniqueVehicles.filter(v => v.seatingCapacity === 4).length),
            path: '/cars?seatingCapacity=4',
            image: '/images/ig_02c4f8a42d259d22016a4288175e08819188f974dc735abcae.png',
            imageAlt: '4-seater sedan',
          },
          {
            eyebrow: '5 Seater', title: 'cars',
            count: getCountStr(uniqueVehicles.filter(v => v.seatingCapacity === 5).length),
            path: '/cars?seatingCapacity=5',
            image: '/images/ig_02c4f8a42d259d22016a4286e2e58081919602762caa901158.png',
            imageAlt: '5-seater SUV',
          },
          {
            eyebrow: '6 Seater', title: 'cars',
            count: getCountStr(uniqueVehicles.filter(v => v.seatingCapacity === 6).length),
            path: '/cars?seatingCapacity=6',
            image: '/images/ig_02c4f8a42d259d22016a42885128408191a75a9e5d18640009.png',
            imageAlt: '6-seater SUV',
          },
          {
            eyebrow: '7 Seater', title: 'cars',
            count: getCountStr(uniqueVehicles.filter(v => v.seatingCapacity === 7).length),
            path: '/cars?seatingCapacity=7',
            image: '/images/ig_02c4f8a42d259d22016a42888fe2888191b333ea588687cb5a.png',
            imageAlt: '7-seater MUV',
          },
          {
            eyebrow: '8 Seater', title: 'cars',
            count: getCountStr(uniqueVehicles.filter(v => v.seatingCapacity === 8).length),
            path: '/cars?seatingCapacity=8',
            image: '/images/ig_02c4f8a42d259d22016a42885128408191a75a9e5d18640009.png',
            imageAlt: '8-seater large SUV',
          },
        ],
      },
    ];
  }, []);

  const activeGroup = useMemo(
    () => browseGroups.find((group) => group.id === activeTab) ?? browseGroups[0],
    [activeTab, browseGroups]
  );

  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20">
      <div className="flex flex-col justify-center">
        <h2 className="font-heading text-center text-xl font-semibold leading-7 text-dark md:text-3xl md:leading-[38px]">
          Browse by
        </h2>

        <div className="my-8 flex w-full gap-x-3 overflow-x-auto px-4 text-center no-scrollbar md:justify-center md:px-0 lg:gap-x-4">
          {browseGroups.map((group) => {
            const isActive = group.id === activeTab;

            return (
              <button
                key={group.id}
                type="button"
                onClick={() => setActiveTab(group.id)}
                className={`flex h-[34px] min-w-fit items-center justify-center rounded-full border px-3 py-2 text-xs font-medium leading-[14px] transition-colors duration-200 lg:h-10 lg:px-4 lg:py-3 lg:text-sm lg:leading-none ${
                  isActive
                    ? 'border-dark bg-dark text-white'
                    : 'border-border bg-white text-dark hover:bg-surface'
                }`}
                aria-pressed={isActive}
              >
                {group.label}
              </button>
            );
          })}
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8">
          <ul className="mx-auto flex min-h-[286px] max-w-content list-none gap-4 overflow-x-auto overflow-y-hidden p-0 pb-3 text-xl no-scrollbar snap-x snap-mandatory sm:gap-5 lg:gap-6">
            {activeGroup.items.map((item) => (
              <li key={`${activeGroup.id}-${item.eyebrow}-${item.title}`} className="shrink-0 snap-center">
                <Link
                  to={item.path}
                  className="group relative flex h-[272px] min-h-[272px] w-[180px] min-w-[180px] justify-center overflow-hidden rounded-2xl border border-white/70 bg-dark shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.imageAlt ?? ''}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      aria-hidden={item.imageAlt ? undefined : 'true'}
                    />
                  )}
                  <div className="absolute inset-x-3 bottom-1 h-10 rounded-full bg-black/35 blur-xl" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-black/75 via-black/30 to-black/10" />

                  <div className="absolute top-6 z-10 inline-flex h-[86px] w-[132px] flex-col items-start justify-start gap-2">
                    <div className="flex w-full flex-col items-start justify-start gap-1">
                      <div className="inline-flex w-full items-center justify-center">
                        <span className="grow text-center text-base font-semibold leading-tight text-white/80 drop-shadow md:text-lg md:leading-snug">
                          {item.eyebrow}
                        </span>
                      </div>
                      <div className="w-full text-center text-base font-semibold leading-snug text-white drop-shadow md:text-xl md:leading-7">
                        {item.title}
                      </div>
                    </div>
                    <div className="h-4 w-[132px] truncate text-center text-sm font-medium leading-none text-white/80 drop-shadow">
                      {item.count}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
