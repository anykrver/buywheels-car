import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface LocationData {
  city: string;
  pincode?: string;
  area?: string;
}

const DEFAULT_CITY = 'Ranchi';
const DEFAULT_PINCODE = '834001';
const DEFAULT_PINCODES = ['834001', '834002', '831001', '826001'];

interface LocationContextType {
  selectedCity: string;
  selectedPincode: string;
  selectedPincodes: string[];
  selectedArea: string;
  multiplier: number;
  pincodeModalOpen: boolean;
  openPincodeModal: () => void;
  closePincodeModal: () => void;
  setSelectedLocation: (data: LocationData) => void;
  setSelectedPincodes: (pincodes: string[]) => void;
  togglePincode: (pincode: string) => void;
}

export const CITY_MULTIPLIERS: Record<string, number> = {
  'Ranchi': 1.12,
  'Jamshedpur': 1.12,
  'Dhanbad': 1.12,
  'Bokaro': 1.12,
  'Hazaribagh': 1.12,
  'Ramgarh': 1.12,
};

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const LocationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState<string>(() => {
    return localStorage.getItem('userCity') || DEFAULT_CITY;
  });

  const [selectedPincode, setSelectedPincode] = useState<string>(() => {
    return localStorage.getItem('userPincode') || DEFAULT_PINCODE;
  });

  const [selectedPincodes, setSelectedPincodesState] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('userPincodes');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed.slice(0, 4);
        }
      }
    } catch (e) {
      console.warn('Error reading userPincodes from localStorage:', e);
    }
    const single = localStorage.getItem('userPincode');
    if (single) {
      const set = new Set([single, ...DEFAULT_PINCODES]);
      return Array.from(set).slice(0, 4);
    }
    return DEFAULT_PINCODES;
  });

  const [selectedArea, setSelectedArea] = useState<string>(() => {
    return localStorage.getItem('userArea') || '';
  });

  const [pincodeModalOpen, setPincodeModalOpen] = useState(false);

  const openPincodeModal = () => setPincodeModalOpen(true);
  const closePincodeModal = () => setPincodeModalOpen(false);

  const setSelectedPincodes = (pincodes: string[]) => {
    const validPincodes = pincodes.slice(0, 4);
    setSelectedPincodesState(validPincodes);
    localStorage.setItem('userPincodes', JSON.stringify(validPincodes));
    if (validPincodes.length > 0 && !validPincodes.includes(selectedPincode)) {
      setSelectedPincode(validPincodes[0]);
      localStorage.setItem('userPincode', validPincodes[0]);
    }
  };

  const togglePincode = (pincode: string) => {
    let updated: string[];
    if (selectedPincodes.includes(pincode)) {
      if (selectedPincodes.length === 1) return; // Keep at least one
      updated = selectedPincodes.filter(p => p !== pincode);
    } else {
      if (selectedPincodes.length >= 4) {
        // If already 4, replace the last one
        updated = [...selectedPincodes.slice(0, 3), pincode];
      } else {
        updated = [...selectedPincodes, pincode];
      }
    }
    setSelectedPincodes(updated);
  };

  const setSelectedLocation = (data: LocationData) => {
    if (data.city) {
      setSelectedCity(data.city);
      localStorage.setItem('userCity', data.city);
    }
    if (data.pincode !== undefined && data.pincode.trim() !== '') {
      setSelectedPincode(data.pincode);
      localStorage.setItem('userPincode', data.pincode);
      if (!selectedPincodes.includes(data.pincode)) {
        const next = [data.pincode, ...selectedPincodes.filter(p => p !== data.pincode)].slice(0, 4);
        setSelectedPincodesState(next);
        localStorage.setItem('userPincodes', JSON.stringify(next));
      }
    } else if (data.pincode === '') {
      setSelectedPincode('');
      localStorage.removeItem('userPincode');
    }
    if (data.area !== undefined) {
      setSelectedArea(data.area);
      localStorage.setItem('userArea', data.area);
    } else {
      setSelectedArea('');
      localStorage.removeItem('userArea');
    }
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const city = localStorage.getItem('userCity') || DEFAULT_CITY;
      const pincode = localStorage.getItem('userPincode') || DEFAULT_PINCODE;
      const area = localStorage.getItem('userArea') || '';
      try {
        const storedPincodes = localStorage.getItem('userPincodes');
        if (storedPincodes) {
          const parsed = JSON.parse(storedPincodes);
          if (Array.isArray(parsed)) setSelectedPincodesState(parsed.slice(0, 4));
        }
      } catch (e) {
        /* ignore */
      }
      setSelectedCity(city);
      setSelectedPincode(pincode);
      setSelectedArea(area);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const multiplier = CITY_MULTIPLIERS[selectedCity] || 1.12;

  return (
    <LocationContext.Provider
      value={{
        selectedCity,
        selectedPincode,
        selectedPincodes,
        selectedArea,
        multiplier,
        pincodeModalOpen,
        openPincodeModal,
        closePincodeModal,
        setSelectedLocation,
        setSelectedPincodes,
        togglePincode,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationContext = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocationContext must be used within a LocationProvider');
  }
  return context;
};
