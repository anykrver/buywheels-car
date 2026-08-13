import React, { useState, useMemo } from 'react';
import { 
  TrendingDown, TrendingUp, Bell, Calendar, ShieldCheck, 
  ChevronRight, CheckCircle2, IndianRupee, Layers
} from 'lucide-react';
import type { Vehicle, Variant, PriceHistoryPoint } from '../../types';
import { getVehiclePriceHistory, formatRupees } from '../../utils/priceHistoryService';

interface PriceHistorySectionProps {
  vehicle: Vehicle;
  selectedVariant?: Variant;
  onSelectVariant?: (variantId: string) => void;
  isElectric?: boolean;
}

export default function PriceHistorySection({
  vehicle,
  selectedVariant,
  onSelectVariant,
  isElectric = false
}: PriceHistorySectionProps) {
  const [selectedVariantId, setSelectedVariantId] = useState<string>(
    selectedVariant?.id || vehicle.variants[0]?.id || ''
  );
  const [hoveredPoint, setHoveredPoint] = useState<PriceHistoryPoint | null>(null);

  // Price Drop Alert Modal State
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [alertPhone, setAlertPhone] = useState(localStorage.getItem('niaa_user_phone') || '');
  const [alertSubmitted, setAlertSubmitted] = useState(false);

  // Sync with prop changes if any
  React.useEffect(() => {
    if (selectedVariant?.id) {
      setSelectedVariantId(selectedVariant.id);
    }
  }, [selectedVariant?.id]);

  const currentVariant = useMemo(() => {
    return vehicle.variants.find(v => v.id === selectedVariantId) || selectedVariant || vehicle.variants[0];
  }, [vehicle.variants, selectedVariantId, selectedVariant]);

  const summary = useMemo(() => {
    return getVehiclePriceHistory(vehicle, currentVariant);
  }, [vehicle, currentVariant]);

  const handleVariantChange = (id: string) => {
    setSelectedVariantId(id);
    if (onSelectVariant) {
      onSelectVariant(id);
    }
  };

  // SVG Chart calculation
  const chartData = summary.history;
  const minPriceInHistory = useMemo(() => Math.min(...chartData.map(d => d.price)), [chartData]);
  const maxPriceInHistory = useMemo(() => Math.max(...chartData.map(d => d.price)), [chartData]);
  const priceRange = Math.max(maxPriceInHistory - minPriceInHistory, 10000);

  const getChartCoordinates = (index: number, price: number) => {
    const svgWidth = 600;
    const svgHeight = 160;
    const paddingX = 35;
    const paddingY = 25;

    const xStep = (svgWidth - paddingX * 2) / Math.max(chartData.length - 1, 1);
    const x = paddingX + index * xStep;

    const normalizedY = (price - minPriceInHistory) / priceRange;
    const y = (svgHeight - paddingY) - normalizedY * (svgHeight - paddingY * 2);

    return { x, y };
  };

  const pathD = useMemo(() => {
    if (chartData.length === 0) return '';
    return chartData.reduce((acc, pt, idx) => {
      const { x, y } = getChartCoordinates(idx, pt.price);
      return idx === 0 ? `M ${x} ${y}` : `${acc} L ${x} ${y}`;
    }, '');
  }, [chartData, minPriceInHistory, priceRange]);

  const themeText = isElectric ? 'text-[#03B94C]' : 'text-primary';
  const themeBg = isElectric ? 'bg-[#03B94C]' : 'bg-primary';
  const themeBgLight = isElectric ? 'bg-[#03B94C]/10' : 'bg-primary-50';
  const themeBorder = isElectric ? 'border-[#03B94C]/30' : 'border-primary/20';

  const handleAlertSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!alertPhone || alertPhone.replace(/\D/g, '').length < 10) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }
    setAlertSubmitted(true);
    setTimeout(() => {
      setAlertSubmitted(false);
      setAlertModalOpen(false);
    }, 2000);
  };

  return (
    <div 
      id="price-history-section" 
      className="bg-white rounded-2xl border border-border p-4 sm:p-6 shadow-sm mb-6 mt-6 max-w-full overflow-hidden"
    >
      {/* Header & Variant Picker */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border">
        <div>
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-dark flex items-center gap-2">
            {vehicle.brand} {vehicle.model} Price History
          </h2>
          <p className="text-xs sm:text-sm text-muted mt-0.5">
            Track historical ex-showroom price revisions, drops, and offers over time.
          </p>
        </div>

        {vehicle.variants && vehicle.variants.length > 0 && (
          <div className="flex items-center gap-2 bg-surface p-1.5 rounded-xl border border-border self-start sm:self-auto">
            <span className="text-xs font-semibold text-muted pl-1 whitespace-nowrap">Variant:</span>
            <select
              value={selectedVariantId}
              onChange={(e) => handleVariantChange(e.target.value)}
              className="bg-white text-dark text-xs sm:text-sm font-semibold py-1.5 px-2.5 rounded-lg border border-border focus:outline-none focus:border-primary transition-colors cursor-pointer"
            >
              {vehicle.variants.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.name} ({formatRupees(v.price)})
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Clean Stat Grid (3 Stats + Price Alert Button) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 my-5">
        <div className="p-3.5 sm:p-4 rounded-xl bg-surface border border-border">
          <span className="text-xs text-muted font-medium block">Current Ex-Showroom</span>
          <span className="font-heading font-bold text-dark text-lg sm:text-xl block mt-0.5">
            {formatRupees(summary.currentPrice)}
          </span>
          <span className="text-[11px] text-muted truncate block mt-0.5">{currentVariant.name}</span>
        </div>

        <div className="p-3.5 sm:p-4 rounded-xl bg-surface border border-border">
          <span className="text-xs text-muted font-medium block">Lowest Recorded</span>
          <span className="font-heading font-bold text-emerald-600 text-lg sm:text-xl block mt-0.5">
            {formatRupees(summary.lowestPrice.price)}
          </span>
          <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1 mt-0.5">
            <TrendingDown size={12} /> {summary.lowestPrice.date}
          </span>
        </div>

        <div className="p-3.5 sm:p-4 rounded-xl bg-surface border border-border">
          <span className="text-xs text-muted font-medium block">Highest Price</span>
          <span className="font-heading font-bold text-dark text-lg sm:text-xl block mt-0.5">
            {formatRupees(summary.highestPrice.price)}
          </span>
          <span className="text-[11px] text-muted block mt-0.5">{summary.highestPrice.date}</span>
        </div>

        <div className="p-3.5 sm:p-4 rounded-xl bg-surface border border-border flex flex-col justify-between">
          <div>
            <span className="text-xs text-muted font-medium block">Price Drop Alert</span>
            <span className="text-[11px] text-dark-600 block mt-0.5">Get instant SMS/WhatsApp alerts on price cuts.</span>
          </div>
          <button
            type="button"
            onClick={() => setAlertModalOpen(true)}
            className={`mt-2 w-full py-1.5 px-3 rounded-lg text-xs font-bold ${themeBg} text-white hover:opacity-90 transition-all flex items-center justify-center gap-1.5`}
          >
            <Bell size={13} /> Set Alert
          </button>
        </div>
      </div>

      {/* Clean Price Trend Curve */}
      <div className="mb-6 p-4 rounded-xl border border-border bg-white">
        <div className="flex items-center justify-between mb-3 text-xs">
          <span className="font-bold text-dark">Price Movement Curve</span>
          <span className="text-muted">{chartData[0]?.date} - {chartData[chartData.length - 1]?.date}</span>
        </div>

        <div className="relative w-full h-44 sm:h-48 overflow-hidden">
          <svg viewBox="0 0 600 160" className="w-full h-full overflow-visible">
            {/* Gridlines */}
            {[30, 70, 110, 140].map((yVal) => (
              <line
                key={yVal}
                x1="20"
                y1={yVal}
                x2="580"
                y2={yVal}
                stroke="#F1F5F9"
                strokeWidth="1"
              />
            ))}

            {/* Line path */}
            <path
              d={pathD}
              fill="none"
              stroke={isElectric ? '#03B94C' : '#3B82F6'}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Points */}
            {chartData.map((pt, idx) => {
              const { x, y } = getChartCoordinates(idx, pt.price);
              const isDrop = pt.changeType === 'drop' || pt.changeType === 'festival_offer';
              const isHovered = hoveredPoint?.id === pt.id;

              return (
                <g key={pt.id || idx} className="cursor-pointer" onMouseEnter={() => setHoveredPoint(pt)}>
                  <circle
                    cx={x}
                    cy={y}
                    r={isHovered ? "6" : "4"}
                    fill={isDrop ? "#10B981" : "#3B82F6"}
                    className="transition-all"
                  />
                  <text
                    x={x}
                    y="155"
                    textAnchor="middle"
                    className="text-[10px] fill-slate-400 font-medium"
                  >
                    {pt.date}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Clean Hover Tooltip */}
          {hoveredPoint && (
            <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-3 py-2 rounded-lg shadow-lg pointer-events-none z-10 flex items-center gap-2">
              <span className="font-bold">{formatRupees(hoveredPoint.price)}</span>
              <span className="text-slate-300">· {hoveredPoint.date} ({hoveredPoint.badgeText})</span>
            </div>
          )}
        </div>
      </div>

      {/* Simple Price Revision Timeline Table */}
      <div>
        <h3 className="text-sm font-bold text-dark mb-3">Price Revision Logs</h3>
        <div className="overflow-x-auto border border-border rounded-xl">
          <table className="w-full text-xs text-left">
            <thead>
              <tr className="bg-surface text-muted font-semibold border-b border-border">
                <th className="p-3">Date</th>
                <th className="p-3">Event / Revision</th>
                <th className="p-3">Ex-Showroom Price</th>
                <th className="p-3 text-right">Price Change</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {summary.history.map((item) => {
                const isDrop = item.changeType === 'drop' || item.changeType === 'festival_offer';
                return (
                  <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-3 font-medium text-dark whitespace-nowrap">{item.date}</td>
                    <td className="p-3">
                      <div className="font-semibold text-dark">{item.title}</div>
                      <div className="text-muted text-[11px] mt-0.5">{item.description}</div>
                    </td>
                    <td className="p-3 font-bold text-dark whitespace-nowrap">{formatRupees(item.price)}</td>
                    <td className="p-3 text-right whitespace-nowrap">
                      {item.changeAmount !== 0 ? (
                        <span className={`font-bold px-2 py-0.5 rounded ${
                          isDrop ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-700'
                        }`}>
                          {item.changeAmount < 0 ? '' : '+'}{formatRupees(item.changeAmount)}
                        </span>
                      ) : (
                        <span className="text-muted">-</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Price Alert Modal */}
      {alertModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-5 shadow-xl relative border border-border">
            <button
              onClick={() => setAlertModalOpen(false)}
              className="absolute top-3 right-3 text-muted hover:text-dark p-1 rounded-lg"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 mb-3">
              <div className={`w-8 h-8 rounded-lg ${themeBgLight} flex items-center justify-center`}>
                <Bell size={16} className={themeText} />
              </div>
              <h3 className="font-bold text-dark text-base">Set Price Drop Alert</h3>
            </div>

            {alertSubmitted ? (
              <div className="py-6 text-center space-y-2">
                <CheckCircle2 size={32} className="text-emerald-500 mx-auto" />
                <p className="font-bold text-dark text-sm">Alert Set Successfully!</p>
                <p className="text-xs text-muted">We will notify you on WhatsApp/SMS whenever {vehicle.brand} {vehicle.model} prices change.</p>
              </div>
            ) : (
              <form onSubmit={handleAlertSubmit} className="space-y-3 text-xs">
                <p className="text-muted">
                  Get notified when ex-showroom price for <strong>{currentVariant.name}</strong> drops below {formatRupees(summary.currentPrice)}.
                </p>

                <div>
                  <label className="block font-semibold text-dark mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={alertPhone}
                    onChange={(e) => setAlertPhone(e.target.value.replace(/\D/g, ''))}
                    placeholder="Enter 10-digit mobile number"
                    className="input-field h-9 text-xs w-full"
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full py-2.5 rounded-xl text-white font-bold text-xs ${themeBg} hover:opacity-90 transition-all shadow-sm`}
                >
                  Notify Me On Price Drop
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
