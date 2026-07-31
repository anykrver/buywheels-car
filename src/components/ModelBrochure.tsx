import React from 'react';
import { Download, Loader2 } from 'lucide-react';
import type { Vehicle } from '../types';

interface ModelBrochureProps {
  vehicle?: Vehicle;
  modelName?: string;
  brandName?: string;
  onDownload?: () => void | Promise<void>;
  isDownloading?: boolean;
  theme?: 'auto' | 'electric' | 'orange' | 'green';
  className?: string;
}

export const ModelBrochure: React.FC<ModelBrochureProps> = ({
  vehicle,
  modelName,
  brandName,
  onDownload,
  isDownloading = false,
  theme = 'auto',
  className = '',
}) => {
  const model = vehicle?.model || modelName || 'BE 6';
  const brand = vehicle?.brand || brandName || '';
  const brochureTitle = brand ? `${brand} ${model} Brochure` : `${model} Brochure`;
  const brochureDesc = `Download the ${model} brochure instantly`;

  // Determine if vehicle is an Electric Vehicle (EV)
  const isElectric =
    theme === 'electric' ||
    theme === 'green' ||
    (theme === 'auto' &&
      vehicle &&
      (vehicle.isEV ||
        vehicle.category === 'ev' ||
        vehicle.fuelTypes?.some(f => f.toLowerCase() === 'electric')));

  // Color variables: Electric Green (#03B94C) vs Buywheels Signature Orange (#FF6A00)
  const tabColor = isElectric ? '#03B94C' : '#FF6A00';
  const bgGradientClass = isElectric
    ? 'bg-gradient-to-br from-[#03B94C] to-[#01903A]'
    : 'bg-gradient-to-br from-[#FF6A00] to-[#E55B00]';
  const iconColor = isElectric ? '#03B94C' : '#FF6A00';

  return (
    <div id="modelBrochure" className={`px-2 py-4 lg:px-0 bg-white lg:rounded-2xl ${className}`}>
      <div className="" style={{ minHeight: '100px' }}>
        <div className="w-full overflow-hidden bg-white lg:px-2">
          {/* Curved top tab svg dynamically matching EV Green or Buywheels Orange */}
          <div className="-mb-[1px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="358" height="32" viewBox="0 0 358 32" fill="none" className="max-w-full">
              <path
                fill={tabColor}
                d="M0 12C0 5.373 5.373 0 12 0h236.192a12 12 0 0 1 9.341 4.466l18.604 23.068A12 12 0 0 0 285.478 32H358 0z"
              />
            </svg>
          </div>

          {/* Card background with wave background */}
          <div className={`relative w-full overflow-hidden h-auto rounded-lg rounded-tl-none ${bgGradientClass} p-4 sm:p-5 shadow-md`}>
            <div className="absolute top-[20px] left-[-40px] pointer-events-none">
              <svg width="509" height="164" viewBox="0 0 509 164" fill="none" className="w-full h-full">
                <path
                  d="M504.311 53.5124C352.559 119.01 311.655 23.9736 360.551 11.2211C405.252 -0.438193 413.675 75.1492 320.129 115.835C262.499 140.899 305.28 99.3585 294.515 81.7328C282.329 53.7261 243.395 83.9274 179.434 129.465C146.689 150.394 97.0445 167.029 53.7523 137.649C10.46 108.27 8.06351 69.7506 12.2768 54.1633"
                  stroke="white"
                  strokeOpacity="0.12"
                  strokeWidth="20"
                  strokeMiterlimit="10"
                />
              </svg>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1 h-full">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-white text-xl font-bold leading-tight">{brochureTitle}</h2>
                  {isElectric && (
                    <span className="bg-white/20 text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full tracking-wider">
                      ⚡ EV Electric
                    </span>
                  )}
                </div>
                <p className="text-white/95 leading-5 text-sm font-medium">{brochureDesc}</p>
              </div>
              <button
                type="button"
                onClick={onDownload}
                disabled={isDownloading}
                className="flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 active:scale-95 rounded-full px-5 py-2.5 mt-auto sm:mt-0 transition-all shadow-md cursor-pointer disabled:opacity-80 shrink-0 text-darkblack"
              >
                {isDownloading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" style={{ color: iconColor }} />
                    <span className="text-darkblack text-sm font-semibold">Downloading...</span>
                  </>
                ) : (
                  <>
                    <span className="text-darkblack text-sm font-semibold">Download Brochure</span>
                    <Download className="w-4 h-4 leading-none shrink-0" style={{ color: iconColor }} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelBrochure;
