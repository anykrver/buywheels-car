import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, RefreshCw, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import VehicleCard from '../VehicleCard';
import { vehicles as localVehicles } from '../../utils/data';
import type { Vehicle } from '../../types';

const TABS = [
  'All Picks',
  'SUVs',
  'Hatchbacks',
  'Sedans',
  'Electric (EV)',
  'Under ₹10 Lakhs',
];

export default function FeaturedVehicles() {
  const [vehiclesList] = useState<Vehicle[]>(localVehicles);
  const [activeTab, setActiveTab] = useState('All Picks');
  const [compareList, setCompareList] = useState<Vehicle[]>([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  // Format current month dynamically (e.g., "July 2026")
  const currentMonthName = useMemo(() => {
    return new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' });
  }, []);

  // Filter vehicles dynamically based on active tab
  const filteredVehicles = useMemo(() => {
    if (!vehiclesList.length) return [];

    return vehiclesList.filter(v => {
      const model = (v.model || '').toLowerCase();
      const desc = (v.description || '').toLowerCase();

      if (activeTab === 'Electric (EV)') {
        return v.isEV || v.category?.toLowerCase() === 'ev' || model.includes('ev');
      }

      if (activeTab === 'SUVs') {
        return (
          model.includes('creta') || model.includes('nexon') || model.includes('scorpio') ||
          model.includes('thar') || model.includes('brezza') || model.includes('fortuner') ||
          model.includes('xuv') || model.includes('seltos') || model.includes('punch') ||
          model.includes('safari') || model.includes('hector') || model.includes('elevate') ||
          model.includes('sonet') || model.includes('exter') || model.includes('curvv') ||
          model.includes('kylaq') || model.includes('taisor') || model.includes('basalt') ||
          model.includes('hyryder') || model.includes('astor') || desc.includes('suv')
        );
      }

      if (activeTab === 'Hatchbacks') {
        return (
          model.includes('swift') || model.includes('i20') || model.includes('baleno') ||
          model.includes('glanza') || model.includes('alto') || model.includes('wagonr') ||
          model.includes('altroz') || model.includes('c3') || model.includes('tiago')
        );
      }

      if (activeTab === 'Sedans') {
        return (
          model.includes('city') || model.includes('verna') || model.includes('slavia') ||
          model.includes('virtus') || model.includes('camry') || model.includes('dzire') ||
          model.includes('amaze')
        );
      }

      if (activeTab === 'Under ₹10 Lakhs') {
        return v.startingPrice <= 1000000;
      }

      // Default 'All Picks'
      return true;
    });
  }, [vehiclesList, activeTab]);

  const pageSize = 6;
  const totalPages = Math.ceil(filteredVehicles.length / pageSize) || 1;
  const currentPage = pageIndex % totalPages;
  const displayVehicles = filteredVehicles.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

  const handleNextPage = () => {
    setIsRotating(true);
    setTimeout(() => {
      setPageIndex(prev => (prev + 1) % totalPages);
      setIsRotating(false);
    }, 200);
  };

  const handlePrevPage = () => {
    setIsRotating(true);
    setTimeout(() => {
      setPageIndex(prev => (prev - 1 + totalPages) % totalPages);
      setIsRotating(false);
    }, 200);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setPageIndex(0);
  };

  const handleCompare = (vehicle: Vehicle) => {
    setCompareList(prev =>
      prev.some(v => v.id === vehicle.id)
        ? prev.filter(v => v.id !== vehicle.id)
        : prev.length < 3 ? [...prev, vehicle] : prev
    );
  };

  return (
    <section className="py-20 bg-surface relative overflow-hidden">
      <div className="container-fluid">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary-50 px-3 py-1 rounded-full border border-primary/20 flex items-center gap-1.5">
                <Sparkles size={13} className="text-primary animate-pulse" />
                Featured Selection
              </span>
            </div>
            <h2 className="font-heading font-bold text-dark text-3xl md:text-4xl">
              Top Picks for {currentMonthName}
            </h2>
            <p className="text-muted text-sm mt-1.5">
              Handpicked bestsellers and top-rated vehicles updated dynamically across Jharkhand
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
            {/* Interactive "Change Cars" Shuffle Button */}
            <button
              onClick={handleNextPage}
              disabled={totalPages <= 1}
              className="group flex items-center gap-2 bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow-md transition-all active:scale-95 disabled:opacity-50"
              title="Click to change displayed cars"
            >
              <RefreshCw
                size={16}
                className={`transition-transform duration-500 ${isRotating ? 'rotate-180' : 'group-hover:rotate-90'}`}
              />
              <span>Change Cars</span>
            </button>

            <Link
              to="/cars"
              className="flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-200 bg-white border border-border hover:border-primary px-4 py-2.5 rounded-xl"
            >
              View All Vehicles <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Dynamic Category Tabs & Controls Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-primary text-white shadow-primary scale-[1.02]'
                    : 'bg-white border border-border text-dark-600 hover:text-primary hover:border-primary'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Pagination Counter & Navigation */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between sm:justify-end gap-3 text-xs font-semibold text-muted bg-white border border-border px-3 py-1.5 rounded-xl self-start sm:self-auto">
              <span>
                Page <strong className="text-dark">{currentPage + 1}</strong> of {totalPages} ({filteredVehicles.length} cars)
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={handlePrevPage}
                  className="p-1 rounded-lg hover:bg-surface text-dark transition-colors"
                  title="Previous cars"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={handleNextPage}
                  className="p-1 rounded-lg hover:bg-surface text-dark transition-colors"
                  title="Next cars"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300">
          {displayVehicles.map(vehicle => (
            <div
              key={`${activeTab}-${currentPage}-${vehicle.id}`}
              className="animate-fade-in transition-all duration-300"
            >
              <VehicleCard
                vehicle={vehicle}
                onCompare={handleCompare}
              />
            </div>
          ))}
        </div>

        {/* Floating Compare Tray */}
        {compareList.length > 0 && (
          <div data-compare-bar="true" className="fixed bottom-20 lg:bottom-6 left-1/2 -translate-x-1/2 z-40 bg-dark/95 backdrop-blur-md text-white rounded-2xl shadow-card-hover px-6 py-4 flex items-center gap-4 animate-slide-up border border-white/10">
            <span className="text-sm font-medium">{compareList.length} vehicles selected</span>
            <div className="flex gap-2">
              {compareList.map(v => (
                <span key={v.id} className="bg-white/15 text-white text-xs px-3 py-1 rounded-full">{v.model}</span>
              ))}
            </div>
            <Link
              to={`/compare?ids=${compareList.map(v => v.id).join(',')}`}
              className="bg-primary text-white text-sm font-semibold px-5 py-2 rounded-xl hover:bg-primary-600 transition-colors"
            >
              Compare Now
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
