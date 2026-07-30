import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface LocationData {
  city: string;
  pincode?: string;
  area?: string;
}

interface LocationContextType {
  selectedCity: string;
  selectedPincode: string;
  selectedArea: string;
  multiplier: number;
  pincodeModalOpen: boolean;
  openPincodeModal: () => void;
  closePincodeModal: () => void;
  setSelectedLocation: (data: LocationData) => void;
}

const DEFAULT_CITY = 'Ranchi';
const DEFAULT_PINCODE = '834001';

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

  const [selectedArea, setSelectedArea] = useState<string>(() => {
    return localStorage.getItem('userArea') || '';
  });

  const [pincodeModalOpen, setPincodeModalOpen] = useState(false);

  const openPincodeModal = () => setPincodeModalOpen(true);
  const closePincodeModal = () => setPincodeModalOpen(false);

  const setSelectedLocation = (data: LocationData) => {
    if (data.city) {
      setSelectedCity(data.city);
      localStorage.setItem('userCity', data.city);
    }
    if (data.pincode !== undefined) {
      setSelectedPincode(data.pincode);
      localStorage.setItem('userPincode', data.pincode);
    } else {
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
        selectedArea,
        multiplier,
        pincodeModalOpen,
        openPincodeModal,
        closePincodeModal,
        setSelectedLocation,
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
