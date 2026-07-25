import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import VehicleCard from '../VehicleCard';
import { fetchVehicles } from '../../utils/supabaseService';
import type { Vehicle } from '../../types';

const tabs = ['All', 'Cars', 'Electric'];

export default function FeaturedVehicles() {
  const [vehiclesList, setVehiclesList] = useState<Vehicle[]>([]);
  
  useEffect(() => {
    fetchVehicles().then(setVehiclesList);
  }, []);

  const [activeTab, setActiveTab] = useState('All');
  const [compareList, setCompareList] = useState<Vehicle[]>([]);

  const filtered = vehiclesList.filter(v => {
    if (activeTab === 'Electric') return v.isEV || v.category?.toLowerCase() === 'ev';
    if (activeTab === 'Cars') return v.category?.toLowerCase() === 'car' || (!v.isEV && v.category?.toLowerCase() !== 'ev');
    return v.isBestSeller || v.isNew;
  });
  const displayVehicles = (filtered.length > 0 ? filtered : vehiclesList).slice(0, 6);

  const handleCompare = (vehicle: Vehicle) => {
    setCompareList(prev =>
      prev.some(v => v.id === vehicle.id)
        ? prev.filter(v => v.id !== vehicle.id)
        : prev.length < 3 ? [...prev, vehicle] : prev
    );
  };

  return (
    <section className="py-20 bg-surface">
      <div className="container-fluid">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Featured</p>
            <h2 className="font-heading font-bold text-dark text-3xl md:text-4xl">Top Picks This Month</h2>
            <p className="text-muted mt-2">Best selling and newly launched vehicles across Jharkhand</p>
          </div>
          <Link to="/cars" className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200">
            View All Vehicles <ArrowRight size={18} />
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto no-scrollbar pb-1">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-shrink-0 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-primary text-white shadow-primary'
                  : 'bg-white border border-border text-dark-600 hover:text-primary hover:border-primary'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayVehicles.map(vehicle => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onCompare={handleCompare}
            />
          ))}
        </div>

        {/* Compare bar */}
        {compareList.length > 0 && (
          <div className="fixed bottom-20 lg:bottom-6 left-1/2 -translate-x-1/2 z-40 bg-dark text-white rounded-2xl shadow-card-hover px-6 py-4 flex items-center gap-4 animate-slide-up">
            <span className="text-sm font-medium">{compareList.length} vehicles selected</span>
            <div className="flex gap-2">
              {compareList.map(v => (
                <span key={v.id} className="bg-white/15 text-white text-xs px-3 py-1 rounded-full">{v.model}</span>
              ))}
            </div>
            <Link to={`/compare?ids=${compareList.map(v => v.id).join(',')}`} className="bg-primary text-white text-sm font-semibold px-5 py-2 rounded-xl hover:bg-primary-600 transition-colors">
              Compare Now
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
