import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Plus, X, Check, Minus, ArrowRight, Share2, CheckCircle } from 'lucide-react';
import { formatPriceShort, vehicles as localVehicles } from '../utils/data';
import type { Vehicle } from '../types';

function VehicleSelector({
  selected,
  onSelect,
  onRemove,
  usedIds,
  vehiclesList,
}: {
  selected: Vehicle | null;
  onSelect: (v: Vehicle) => void;
  onRemove: () => void;
  usedIds: string[];
  vehiclesList: Vehicle[];
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  const available = vehiclesList.filter(v =>
    !usedIds.includes(v.id) &&
    `${v.brand} ${v.model}`.toLowerCase().includes(search.toLowerCase())
  );

  if (selected) {
    return (
      <div className="flex flex-col">
        <div className="relative">
          <img
            src={selected.thumbnailUrl}
            alt={`${selected.brand} ${selected.model}`}
            className="w-full aspect-video object-cover rounded-xl"
            onError={(e) => {
              e.currentTarget.src = 'https://imgd.aeplcdn.com/664x374/n/cw/ec/141879/nexon-ev-exterior-right-front-three-quarter-7.jpeg';
            }}
          />
          <button
            onClick={onRemove}
            className="absolute top-2 right-2 w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-card hover:bg-error hover:text-white transition-colors"
          >
            <X size={14} />
          </button>
        </div>
        <div className="mt-3">
          <p className="text-xs text-primary font-semibold">{selected.brand}</p>
          <p className="font-heading font-bold text-dark text-lg">{selected.model}</p>
          <p className="font-semibold text-dark mt-1">{formatPriceShort(selected.startingPrice)}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-full aspect-video border-2 border-dashed border-border rounded-xl flex flex-col items-center justify-center gap-2 hover:border-primary hover:bg-primary-50 transition-all group"
      >
        <div className="w-10 h-10 bg-surface rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Plus size={20} className="text-muted group-hover:text-primary" />
        </div>
        <span className="text-sm text-muted group-hover:text-primary font-medium">Add Vehicle</span>
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 z-20 mt-2 bg-white rounded-2xl border border-border shadow-card-hover overflow-hidden">
          <div className="p-3 border-b border-border flex items-center gap-2">
            <input
              autoFocus
              type="text"
              placeholder="Search vehicle..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="input-field text-sm h-10 flex-1"
            />
            <button
              type="button"
              onClick={() => { setOpen(false); setSearch(''); }}
              className="p-1.5 rounded-lg hover:bg-surface text-muted hover:text-dark transition-colors"
              title="Close"
            >
              <X size={16} />
            </button>
          </div>
          <div className="max-h-64 overflow-y-auto">
            {available.map(v => (
              <button
                key={v.id}
                onClick={() => { onSelect(v); setOpen(false); setSearch(''); }}
                className="w-full flex items-center gap-3 p-3 hover:bg-surface transition-colors text-left"
              >
                <img
                  src={v.thumbnailUrl}
                  alt={v.model}
                  className="w-12 h-8 object-cover rounded-lg"
                  onError={(e) => {
                    e.currentTarget.src = 'https://imgd.aeplcdn.com/664x374/n/cw/ec/141879/nexon-ev-exterior-right-front-three-quarter-7.jpeg';
                  }}
                />
                <div>
                  <p className="text-sm font-medium text-dark">{v.brand} {v.model}</p>
                  <p className="text-xs text-muted">{formatPriceShort(v.startingPrice)}</p>
                </div>
              </button>
            ))}
            {available.length === 0 && (
              <p className="text-center text-muted text-sm py-4">No vehicles found</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

const specs = [
  { label: 'Starting Price', key: 'startingPrice', format: formatPriceShort },
  { label: 'EMI From', key: 'emiFrom', format: (v: number) => `${formatPriceShort(v)}/mo` },
  { label: 'Fuel Type', key: 'fuelTypes', format: (v: string[]) => v.join(', ') },
  { label: 'Transmission', key: 'transmissions', format: (v: string[]) => v.join(', ') },
  { label: 'Mileage', key: 'mileage', format: (v: string) => v },
  { label: 'Engine', key: 'engineCC', format: (v: number) => v ? `${v} cc` : 'N/A' },
  { label: 'Power', key: 'powerBHP', format: (v: number) => v ? `${v} bhp` : 'N/A' },
  { label: 'Torque', key: 'torqueNm', format: (v: number) => v ? `${v} Nm` : 'N/A' },
  { label: 'Seating', key: 'seatingCapacity', format: (v: number) => v ? `${v} Persons` : 'N/A' },
  { label: 'Boot Space', key: 'bootSpaceL', format: (v: number) => v ? `${v} L` : 'N/A' },
  { label: 'Rating', key: 'rating', format: (v: number) => `${v} ★` },
  { label: 'Safety Rating', key: 'safetyRating', format: (v: number) => v ? `${v} Stars (GNCAP)` : 'N/A' },
];

const POPULAR_COMPARISONS_RAW = [
  { id: 'comp1', v1: 'c2', v2: 'kia-seltos-2026', title: 'Creta vs Seltos' },
  { id: 'comp2', v1: 'c-brezza', v2: 'c3', title: 'Brezza vs Nexon EV' },
  { id: 'comp3', v1: 'c4', v2: 'c-xuv700', title: 'Scorpio N vs XUV700' },
  { id: 'comp4', v1: 'c1', v2: 'c-i20', title: 'Swift vs i20' },
  { id: 'comp5', v1: 'c-thar', v2: 'c-jimny', title: 'Thar vs Jimny' },
  { id: 'comp6', v1: 'c-virtus', v2: 'c-slavia', title: 'Virtus vs Slavia' },
  { id: 'comp7', v1: 'c-punch', v2: 'c-brezza', title: 'Punch vs Brezza' },
];

export default function Compare() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [vehiclesList] = useState<Vehicle[]>(localVehicles);

  const selected = useMemo(() => {
    const ids = searchParams.get('ids')?.split(',') || [];
    const initialSelected: (Vehicle | null)[] = [null, null, null];
    let idx = 0;
    for (const id of ids) {
      if (idx >= 3) break;
      const vehicle = vehiclesList.find(v => v.id === id);
      if (vehicle) {
        initialSelected[idx] = vehicle;
        idx++;
      }
    }
    return initialSelected;
  }, [searchParams, vehiclesList]);

  const popularComparisons = useMemo(() => {
    return POPULAR_COMPARISONS_RAW.map(comp => {
      const car1 = vehiclesList.find(v => v.id === comp.v1 || v.slug === comp.v1 || v.model.toLowerCase().includes(comp.v1.toLowerCase()));
      const car2 = vehiclesList.find(v => v.id === comp.v2 || v.slug === comp.v2 || v.model.toLowerCase().includes(comp.v2.toLowerCase()));
      return {
        ...comp,
        v1Id: car1?.id || comp.v1,
        v2Id: car2?.id || comp.v2,
        car1: car1 ? {
          brand: car1.brand,
          model: car1.model,
          price: formatPriceShort(car1.startingPrice),
          image: car1.thumbnailUrl
        } : null,
        car2: car2 ? {
          brand: car2.brand,
          model: car2.model,
          price: formatPriceShort(car2.startingPrice),
          image: car2.thumbnailUrl
        } : null
      };
    }).filter(comp => comp.car1 && comp.car2) as any[];
  }, [vehiclesList]);

  const activeCount = selected.filter(Boolean).length;
  const usedIds = selected.filter(Boolean).map(v => v!.id);

  const handleSelect = (index: number, vehicle: Vehicle) => {
    const next = [...selected];
    next[index] = vehicle;
    const ids = next.filter(Boolean).map(v => v!.id).join(',');
    setSearchParams(ids ? { ids } : {}, { replace: true });
  };

  const handleRemove = (index: number) => {
    const next = [...selected];
    next[index] = null;
    const ids = next.filter(Boolean).map(v => v!.id).join(',');
    setSearchParams(ids ? { ids } : {}, { replace: true });
  };

  const handleSelectComparison = (v1Id: string, v2Id: string) => {
    setSearchParams({ ids: `${v1Id},${v2Id}` }, { replace: true });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddCarCardClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [shareCopied, setShareCopied] = useState(false);
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setShareCopied(true);
      setTimeout(() => setShareCopied(false), 2500);
    });
  };



  return (
    <div className="min-h-screen bg-surface pt-24 pb-24 lg:pb-12">
      <div className="container-fluid">
        <div className="mb-8">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Compare</p>
          <div className="flex items-center justify-between gap-4">
            <h1 className="font-heading font-bold text-dark text-3xl md:text-4xl mb-2">Compare Vehicles Side by Side</h1>
            {activeCount >= 2 && (
              <button
                onClick={handleShare}
                className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-white hover:bg-primary-50 hover:border-primary text-sm font-medium text-dark hover:text-primary transition-all shadow-sm"
              >
                {shareCopied ? <CheckCircle size={16} className="text-success" /> : <Share2 size={16} />}
                {shareCopied ? 'Link Copied!' : 'Share Comparison'}
              </button>
            )}
          </div>
          <p className="text-muted">Select up to 3 vehicles to compare specifications, features, and prices</p>
        </div>

        {/* Vehicle selectors */}
        <div className="bg-white rounded-2xl border border-border p-6 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {selected.map((vehicle, i) => (
              <VehicleSelector
                key={i}
                selected={vehicle}
                onSelect={v => handleSelect(i, v)}
                onRemove={() => handleRemove(i)}
                usedIds={usedIds}
                vehiclesList={vehiclesList}
              />
            ))}
          </div>
        </div>

        {/* Comparison table */}
        {activeCount >= 2 && (
          <div className="bg-white rounded-2xl border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 text-sm font-semibold text-muted w-36">Specification</th>
                    {selected.map((v, i) => v && (
                      <th key={i} className="p-4 text-left">
                        <p className="text-xs text-primary font-semibold">{v.brand}</p>
                        <p className="font-heading font-bold text-dark">{v.model}</p>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {specs.map(({ label, key, format }) => {
                    const values = selected.filter(Boolean).map(v => (v as any)[key]);
                    const numValues = values.filter(v => typeof v === 'number');
                    const bestValue = numValues.length > 0
                      ? key === 'startingPrice' || key === 'emiFrom'
                        ? Math.min(...numValues)
                        : Math.max(...numValues)
                      : null;

                    return (
                      <tr key={label} className="border-b border-border last:border-0 hover:bg-surface/50">
                        <td className="p-4 text-sm text-muted font-medium">{label}</td>
                        {selected.map((v, i) => v ? (
                          <td key={i} className="p-4">
                            <span className={`text-sm font-semibold ${
                              bestValue !== null && (v as any)[key] === bestValue ? 'text-primary' : 'text-dark'
                            }`}>
                              {(format as any)((v as any)[key])}
                            </span>
                            {bestValue !== null && (v as any)[key] === bestValue && typeof (v as any)[key] === 'number' && (
                              <span className="ml-2 text-xs bg-primary-50 text-primary px-1.5 py-0.5 rounded-full">Best</span>
                            )}
                          </td>
                        ) : null)}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Features comparison */}
            <div className="p-6 border-t border-border">
              <h3 className="font-heading font-semibold text-dark mb-4">Features Comparison</h3>
              <div className="grid gap-2">
                {['6 Airbags', 'Sunroof', 'Wireless Charger', 'ADAS', 'Rear Camera', 'Cruise Control', '360° Camera', 'Ventilated Seats'].map(feat => (
                  <div key={feat} className="grid grid-cols-4 gap-4 py-2 border-b border-surface text-sm">
                    <span className="text-muted">{feat}</span>
                    {selected.map((v, i) => v ? (
                      <div key={i} className="flex justify-center">
                        {v.features.includes(feat) ? (
                          <Check size={16} className="text-success" />
                        ) : (
                          <Minus size={16} className="text-border" />
                        )}
                      </div>
                    ) : null)}
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTAs per vehicle column — PRD §7.4.5 */}
            <div className="p-6 border-t border-border bg-surface/50">
              <h3 className="font-heading font-semibold text-dark mb-4 text-sm">Take Action</h3>
              <div className="grid gap-4" style={{ gridTemplateColumns: `180px repeat(${activeCount}, 1fr)` }}>
                <div />
                {selected.map((v, i) => v ? (
                  <div key={i} className="flex flex-col gap-2">
                    <Link
                      to={`/vehicle/${v.slug || v.id}`}
                      className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary-600 transition-all shadow-sm"
                    >
                      View Details
                    </Link>
                    <Link
                      to={`/test-drive?vehicle=${v.slug || v.id}`}
                      className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-primary text-primary text-xs font-semibold hover:bg-primary-50 transition-all"
                    >
                      Book Test Drive
                    </Link>
                    <Link
                      to={`/vehicle/${v.slug || v.id}`}
                      className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-surface border border-border text-dark text-xs font-medium hover:bg-white transition-all"
                    >
                      Get Quote
                    </Link>
                  </div>
                ) : null)}
              </div>
            </div>
          </div>
        )}

        {activeCount < 2 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-border">
            <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ArrowRight size={24} className="text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-dark text-lg mb-2">Select vehicles to compare</h3>
            <p className="text-muted text-sm">Add at least 2 vehicles to start the comparison</p>
          </div>
        )}

        {/* Popular Comparisons Section */}
        <div className="mt-16 border-t border-border pt-12">
          <div className="mb-6">
            <h2 className="font-heading font-bold text-dark text-2xl">Popular Comparisons</h2>
            <p className="text-muted text-sm mt-1">Direct comparisons selected by our buyers</p>
          </div>
          
          <div className="relative" data-test-id="swiper-wrapper">
            <ul className="flex overflow-x-auto no-scrollbar scrollbar-hide list-none m-0 p-0 text-xl md:text-3xl gap-4 sm:gap-5 lg:gap-6 pr-4 sm:pr-5 lg:pr-0 pb-4" style={{ scrollbarWidth: 'none' }}>
              {popularComparisons.map((comp) => (
                <li key={comp.id} className="flex-none">
                  <div
                    onClick={() => handleSelectComparison(comp.v1Id, comp.v2Id)}
                    className="min-w-[308px] lg:min-w-[320px] lg:h-[294px] h-[270px] flex flex-col gap-3 lg:gap-4 relative transition duration-300 md:hover:scale-[1.02] ease-in-out mb-1 group will-change-transform cursor-pointer"
                  >
                    <div className="h-[218px] lg:h-[238px] pt-8 lg:pt-10 rounded-xl lg:rounded-2xl flex pointer-events-none">
                      {/* Car 1 */}
                      <div className="flex-1 flex flex-col min-w-fit py-4 gap-4 relative h-[186px] lg:h-[198px] ">
                        <img
                          alt={comp.car1?.model || ''}
                          loading="lazy"
                          width="146"
                          height="78"
                          className="relative z-10 object-contain h-[78px] w-[146px] lg:w-[144px] lg:h-[90px]"
                          src={comp.car1?.image || ''}
                          onError={(e) => {
                            e.currentTarget.src = 'https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=600';
                          }}
                        />
                        <div className="relative z-10 px-3 w-[154px] lg:w-[162px]">
                          <div className="mb-1 text-nickel text-sm font-medium leading-none text-ellipsis">{comp.car1.brand}</div>
                          <div className="mb-2 text-primary text-sm font-medium leading-none text-ellipsis line-clamp-1" title={comp.car1.model}>{comp.car1.model}</div>
                          <div className="text-primary text-sm font-semibold leading-none relative flex">
                            {comp.car1.price}<div>*</div>
                          </div>
                        </div>
                        <div className="absolute bg-partner-secondary w-[158px] lg:w-[162px] h-[120px] bottom-0 rounded-tl-xl rounded-bl-xl"></div>
                      </div>

                      {/* Car 2 */}
                      <div className="flex-1 flex flex-col min-w-fit py-4 gap-4 relative h-[186px] lg:h-[198px] ">
                        <img
                          alt={comp.car2?.model || ''}
                          loading="lazy"
                          width="146"
                          height="78"
                          className="relative z-10 object-contain h-[78px] w-[146px] lg:w-[144px] lg:h-[90px]"
                          src={comp.car2?.image || ''}
                          onError={(e) => {
                            e.currentTarget.src = 'https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=600';
                          }}
                        />
                        <div className="relative z-10 px-3 w-[154px] lg:w-[162px]">
                          <div className="mb-1 text-nickel text-sm font-medium leading-none text-ellipsis">{comp.car2.brand}</div>
                          <div className="mb-2 text-primary text-sm font-medium leading-none text-ellipsis line-clamp-1" title={comp.car2.model}>{comp.car2.model}</div>
                          <div className="text-primary text-sm font-semibold leading-none relative flex">
                            {comp.car2.price}<div>*</div>
                          </div>
                        </div>
                        <div className="absolute bg-partner-secondary w-[158px] lg:w-[162px] h-[120px] bottom-0 rounded-tr-xl rounded-br-xl -left-1"></div>
                      </div>
                    </div>

                    <button className="font-semibold md:leading-tight min-w-[148px] px-4 text-base text-primary md:hover:bg-mercury h-10 pl-3 pr-2.5 py-3 bg-secondary rounded-lg justify-center items-center gap-1.5 flex w-full pointer-events-auto transition-colors duration-200">
                      <span className="text-center text-primary text-sm font-semibold leading-none">{comp.title}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 14 14" className="w-4 h-4 -rotate-45 ">
                        <g>
                          <path fill="currentColor" d="M12.122 7.31l-3.937 3.937a.438.438 0 11-.62-.619l3.192-3.19h-8.57a.437.437 0 110-.875h8.57l-3.192-3.19a.438.438 0 01.62-.62l3.937 3.938a.437.437 0 010 .619z"></path>
                        </g>
                      </svg>
                    </button>
                  </div>
                </li>
              ))}

              {/* Add car card */}
              <li className="flex-none">
                <div
                  onClick={handleAddCarCardClick}
                  className="min-w-[308px] lg:min-w-[320px] lg:h-[294px] h-[270px] flex flex-col gap-3 lg:gap-4 relative transition duration-300 md:hover:scale-[1.02] ease-in-out mb-1 group cursor-pointer"
                >
                  <div className="h-[218px] lg:h-[238px] rounded-xl lg:rounded-2xl flex flex-col items-center justify-center p-6 bg-white border-2 border-dashed border-border hover:border-primary hover:bg-primary-50/20 transition-colors text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Plus size={24} />
                    </div>
                    <p className="font-heading font-bold text-dark text-base">Custom Comparison</p>
                    <p className="text-xs text-muted mt-1">Select any 2 or 3 vehicles to compare</p>
                  </div>
                  <button className="font-semibold text-sm text-primary bg-surface hover:bg-primary-50 rounded-xl h-10 flex items-center justify-center gap-1.5 w-full transition-colors border border-border">
                    <span>Compare Any Vehicles</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
