import React, { useState, useMemo } from 'react';
import { Search, X, MapPin, Check } from 'lucide-react';

export interface AreaItem {
  pincode: string;
  area: string;
  city: string;
  isPopular?: boolean;
}

export const POPULAR_AREAS: AreaItem[] = [
  { pincode: '834001', area: 'Main Road / Overbridge', city: 'Ranchi', isPopular: true },
  { pincode: '834002', area: 'Doranda / Hinoo', city: 'Ranchi', isPopular: true },
  { pincode: '834004', area: 'Kanke Road / Morabadi', city: 'Ranchi', isPopular: true },
  { pincode: '831001', area: 'Bistupur / Sakchi', city: 'Jamshedpur', isPopular: true },
  { pincode: '826001', area: 'Bank More / Hirapur', city: 'Dhanbad', isPopular: true },
  { pincode: '827004', area: 'Sector 4 / City Centre', city: 'Bokaro', isPopular: true },
  { pincode: '825301', area: 'Main Town / Korrah', city: 'Hazaribagh', isPopular: true },
  { pincode: '829122', area: 'Ramgarh Cantonment', city: 'Ramgarh', isPopular: true },
];

export const ALL_AREAS: AreaItem[] = [
  // Ranchi Key Locations
  { pincode: '834001', area: 'Main Road', city: 'Ranchi' },
  { pincode: '834001', area: 'Lalpur', city: 'Ranchi' },
  { pincode: '834001', area: 'Kokar', city: 'Ranchi' },
  { pincode: '834002', area: 'Doranda', city: 'Ranchi' },
  { pincode: '834002', area: 'Hinoo', city: 'Ranchi' },
  { pincode: '834002', area: 'Harmu Housing Colony', city: 'Ranchi' },
  { pincode: '834002', area: 'Argora', city: 'Ranchi' },
  { pincode: '834003', area: 'Tupudana', city: 'Ranchi' },
  { pincode: '834004', area: 'Dhurwa', city: 'Ranchi' },
  { pincode: '834005', area: 'Ratu Road', city: 'Ranchi' },
  { pincode: '834006', area: 'Kanke Road', city: 'Ranchi' },
  { pincode: '834008', area: 'Morabadi', city: 'Ranchi' },
  { pincode: '834009', area: 'Bariatu', city: 'Ranchi' },
  { pincode: '834010', area: 'Namkum', city: 'Ranchi' },

  // Jamshedpur Key Locations
  { pincode: '831001', area: 'Bistupur', city: 'Jamshedpur' },
  { pincode: '831001', area: 'Sakchi', city: 'Jamshedpur' },
  { pincode: '831003', area: 'Golmuri', city: 'Jamshedpur' },
  { pincode: '831004', area: 'Telco Colony', city: 'Jamshedpur' },
  { pincode: '831005', area: 'Kadma', city: 'Jamshedpur' },
  { pincode: '831006', area: 'Jugsalai', city: 'Jamshedpur' },
  { pincode: '831011', area: 'Sonari', city: 'Jamshedpur' },
  { pincode: '831012', area: 'Mango', city: 'Jamshedpur' },
  { pincode: '831013', area: 'Adityapur', city: 'Jamshedpur' },
  { pincode: '831017', area: 'Baridih', city: 'Jamshedpur' },

  // Dhanbad Key Locations
  { pincode: '826001', area: 'Bank More', city: 'Dhanbad' },
  { pincode: '826001', area: 'Hirapur', city: 'Dhanbad' },
  { pincode: '826004', area: 'Saraidhela', city: 'Dhanbad' },
  { pincode: '826004', area: 'Steel Gate', city: 'Dhanbad' },
  { pincode: '826004', area: 'Barwadda', city: 'Dhanbad' },
  { pincode: '826005', area: 'Coal Nagar', city: 'Dhanbad' },
  { pincode: '828109', area: 'Govindpur', city: 'Dhanbad' },
  { pincode: '828111', area: 'Jharia', city: 'Dhanbad' },
  { pincode: '828113', area: 'Katras', city: 'Dhanbad' },

  // Bokaro Key Locations
  { pincode: '827001', area: 'Sector 1', city: 'Bokaro' },
  { pincode: '827004', area: 'Sector 4 (City Centre)', city: 'Bokaro' },
  { pincode: '827009', area: 'Sector 9', city: 'Bokaro' },
  { pincode: '827012', area: 'Sector 12', city: 'Bokaro' },
  { pincode: '827013', area: 'Chas', city: 'Bokaro' },
  { pincode: '829107', area: 'Bokaro Thermal', city: 'Bokaro' },

  // Hazaribagh Key Locations
  { pincode: '825301', area: 'Main Town', city: 'Hazaribagh' },
  { pincode: '825301', area: 'Korrah', city: 'Hazaribagh' },
  { pincode: '825301', area: 'Matwari', city: 'Hazaribagh' },
  { pincode: '825301', area: 'Canary Hill Road', city: 'Hazaribagh' },
  { pincode: '825301', area: 'Pelawal', city: 'Hazaribagh' },
  { pincode: '825301', area: 'Demotand', city: 'Hazaribagh' },

  // Ramgarh Key Locations
  { pincode: '829122', area: 'Ramgarh Cantonment', city: 'Ramgarh' },
  { pincode: '829122', area: 'Main Market', city: 'Ramgarh' },
  { pincode: '829101', area: 'Barkakana', city: 'Ramgarh' },
  { pincode: '829119', area: 'Patratu', city: 'Ramgarh' },
  { pincode: '825314', area: 'Ghato', city: 'Ramgarh' },
  { pincode: '825316', area: 'Kuju', city: 'Ramgarh' },
];

interface AreaPincodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArea: (areaItem: AreaItem) => void;
  currentPincode?: string;
}

export default function AreaPincodeModal({
  isOpen,
  onClose,
  onSelectArea,
  currentPincode = '834001',
}: AreaPincodeModalProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPopular = useMemo(() => {
    if (!searchQuery.trim()) return POPULAR_AREAS;
    const q = searchQuery.toLowerCase();
    return POPULAR_AREAS.filter(
      item =>
        item.pincode.includes(q) ||
        item.area.toLowerCase().includes(q) ||
        item.city.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const filteredAll = useMemo(() => {
    if (!searchQuery.trim()) return ALL_AREAS;
    const q = searchQuery.toLowerCase();
    return ALL_AREAS.filter(
      item =>
        item.pincode.includes(q) ||
        item.area.toLowerCase().includes(q) ||
        item.city.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-end md:items-center justify-center animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-white rounded-t-3xl md:rounded-3xl shadow-2xl overflow-hidden animate-scale-in border border-border relative max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header & Close Button */}
        <div className="px-5 pt-5 pb-3 flex items-center justify-between border-b border-gray-100">
          <h3 className="font-semibold text-lg text-dark flex items-center gap-2">
            <MapPin size={20} className="text-primary" />
            Search your Area or Pincode
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-dark transition-colors outline-none"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-4 flex-1 overflow-hidden flex flex-col min-h-[300px]">
          {/* Search Box Input */}
          <div className="relative mb-4">
            <div className="relative flex items-center rounded-xl border border-primary/40 hover:border-primary/60 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 bg-white transition-all">
              <span className="absolute left-3.5 flex items-center pointer-events-none text-gray-400">
                <Search size={18} />
              </span>
              <input
                type="text"
                id="pinecode"
                name="pincode"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Pincode e.g. 834001 or area (Ranchi, Jamshedpur, Dhanbad...)"
                autoComplete="off"
                className="w-full py-3 pl-10 pr-10 text-sm font-medium text-dark bg-transparent outline-none placeholder:text-gray-400"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 p-1 rounded-full text-gray-400 hover:text-dark hover:bg-gray-100 transition-colors"
                >
                  <X size={15} />
                </button>
              )}
            </div>
          </div>

          {/* Scrollable Areas List */}
          <div className="flex-1 overflow-y-auto pr-1 max-h-[500px] space-y-4">
            {/* Popular Areas Section */}
            {filteredPopular.length > 0 && (
              <div>
                <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2 px-1">
                  Popular Jharkhand Areas
                </div>
                <div className="divide-y divide-gray-100 rounded-xl bg-gray-50/50 border border-gray-100 overflow-hidden">
                  {filteredPopular.map((item, idx) => {
                    const label = `${item.pincode} - ${item.area} - ${item.city}`;
                    const isSelected = currentPincode === item.pincode;
                    return (
                      <button
                        key={`pop-${item.pincode}-${idx}`}
                        type="button"
                        onClick={() => {
                          onSelectArea(item);
                          onClose();
                        }}
                        className={`w-full text-left px-3.5 py-3 text-sm flex items-center justify-between transition-colors hover:bg-primary/5 hover:text-primary cursor-pointer ${
                          isSelected ? 'bg-primary/10 text-primary font-semibold' : 'text-dark-700'
                        }`}
                      >
                        <span className="truncate">{label}</span>
                        {isSelected && <Check size={16} className="text-primary shrink-0 ml-2" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* All Areas Section */}
            {filteredAll.length > 0 && (
              <div>
                <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2 px-1 mt-2">
                  All Jharkhand Areas
                </div>
                <div className="divide-y divide-gray-100 rounded-xl bg-white border border-gray-100 overflow-hidden">
                  {filteredAll.map((item, idx) => {
                    const label = `${item.pincode} - ${item.area} - ${item.city}`;
                    const isSelected = currentPincode === item.pincode;
                    return (
                      <button
                        key={`all-${item.pincode}-${idx}`}
                        type="button"
                        onClick={() => {
                          onSelectArea(item);
                          onClose();
                        }}
                        className={`w-full text-left px-3.5 py-3 text-sm flex items-center justify-between transition-colors hover:bg-primary/5 hover:text-primary cursor-pointer ${
                          isSelected ? 'bg-primary/10 text-primary font-semibold' : 'text-dark-700'
                        }`}
                      >
                        <span className="truncate">{label}</span>
                        {isSelected && <Check size={16} className="text-primary shrink-0 ml-2" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {filteredPopular.length === 0 && filteredAll.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <p className="text-sm font-medium">No area found matching &quot;{searchQuery}&quot;</p>
                <p className="text-xs text-gray-400 mt-1">Try searching by Ranchi, Jamshedpur, Dhanbad, Bokaro, Hazaribagh or Ramgarh</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
