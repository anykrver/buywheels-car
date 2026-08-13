import React from 'react';
import { Check, Printer, Share2, MapPin, Calendar, Clock, Phone, User, ShieldCheck, X, Car, FileText } from 'lucide-react';
import { formatPrice } from '../../utils/data';

export interface TestDriveReceiptData {
  bookingId: string;
  customerName: string;
  phone: string;
  email?: string;
  city: string;
  pincode?: string;
  date: string;
  slot: string;
  vehicleName: string;
  vehicleBrand?: string;
  vehicleImage?: string;
  exShowroomPrice?: number;
  estimatedOnRoadPrice?: number;
  dealerBranch?: string;
  createdAt?: string;
}

interface TestDriveReceiptModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingData: TestDriveReceiptData;
}

export default function TestDriveReceiptModal({
  isOpen,
  onClose,
  bookingData,
}: TestDriveReceiptModalProps) {
  if (!isOpen || !bookingData) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    const text = `🚗 Buywheels Test Drive Booking Slip\nBooking ID: ${bookingData.bookingId}\nVehicle: ${bookingData.vehicleName}\nDate: ${bookingData.date} (${bookingData.slot})\nLocation: ${bookingData.city} (${bookingData.pincode || 'Jharkhand'})\nDealer: ${bookingData.dealerBranch || 'Authorized Dealership'}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Buywheels Test Drive Receipt',
          text: text,
          url: window.location.href,
        });
      } catch (err) {
        console.warn('Share cancelled or not supported:', err);
      }
    } else {
      navigator.clipboard.writeText(text);
      alert('Booking receipt details copied to clipboard!');
    }
  };

  const formattedDate = bookingData.date
    ? new Date(bookingData.date).toLocaleDateString('en-IN', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : bookingData.date;

  const createdDateStr = bookingData.createdAt
    ? new Date(bookingData.createdAt).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })
    : new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' });

  return (
    <div className="fixed inset-0 z-[110] bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in print:bg-white print:p-0 print:block">
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #buywheels-testdrive-receipt, #buywheels-testdrive-receipt * {
            visibility: visible;
          }
          #buywheels-testdrive-receipt {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            margin: 0;
            padding: 24px;
            box-shadow: none !important;
            border: 1px solid #E5E7EB !important;
            background: #ffffff !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>

      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-border flex flex-col relative max-h-[92vh] print:max-h-none print:shadow-none print:border-none">
        
        {/* Top Header Bar matching Buywheels Theme (Hidden in Print) */}
        <div className="no-print bg-dark text-white px-5 sm:px-6 py-4 flex items-center justify-between border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center text-white font-extrabold text-xs shadow-sm">
              BW
            </div>
            <span className="font-heading font-bold text-sm sm:text-base text-white">
              Official Test Drive Booking Slip
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors"
              title="Print or Save PDF"
            >
              <Printer size={14} /> <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <button
              onClick={handleShare}
              className="px-3 py-1.5 bg-primary hover:bg-primary-600 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
              title="Share Booking Slip"
            >
              <Share2 size={14} /> <span className="hidden sm:inline">Share</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable Receipt Body */}
        <div id="buywheels-testdrive-receipt" className="p-6 sm:p-8 overflow-y-auto space-y-6 bg-white text-dark">
          
          {/* Header Branding & Slip Number */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border pb-5 gap-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Buywheels" className="h-10 w-auto object-contain" />
              <div className="h-8 w-px bg-border hidden sm:block"></div>
              <div className="hidden sm:block">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-primary bg-primary-50 px-2 py-0.5 rounded border border-primary/20">
                  Jharkhand Mobility Network
                </span>
                <p className="text-[11px] text-muted font-medium mt-0.5">Ranchi · Jamshedpur · Dhanbad · Bokaro</p>
              </div>
            </div>

            <div className="sm:text-right bg-surface sm:bg-transparent p-3 sm:p-0 rounded-xl border sm:border-none border-border">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-success/10 text-success text-xs font-bold rounded-full border border-success/20 uppercase tracking-wide">
                <Check size={14} strokeWidth={3} /> Test Drive Reserved
              </div>
              <p className="text-xs font-mono font-bold text-dark mt-1.5">
                Pass ID: <span className="text-primary font-extrabold">{bookingData.bookingId}</span>
              </p>
              <p className="text-[11px] text-muted">Issued: {createdDateStr}</p>
            </div>
          </div>

          {/* Vehicle Banner Display */}
          <div className="relative overflow-hidden bg-gradient-to-br from-dark to-dark-700 text-white rounded-2xl p-5 shadow-card">
            <div className="flex flex-col sm:flex-row items-center gap-5 relative z-10">
              {bookingData.vehicleImage && (
                <img
                  src={bookingData.vehicleImage}
                  alt={bookingData.vehicleName}
                  className="w-full sm:w-44 aspect-video object-cover rounded-xl border border-white/10 shadow-md shrink-0 bg-white/5"
                  onError={(e) => {
                    e.currentTarget.src = 'https://imgd.aeplcdn.com/664x374/n/cw/ec/141879/nexon-ev-exterior-right-front-three-quarter-7.jpeg';
                  }}
                />
              )}
              <div className="flex-1 w-full text-left">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-primary bg-white/10 px-2.5 py-0.5 rounded border border-white/10">
                    {bookingData.vehicleBrand || 'Authorized Test Drive'}
                  </span>
                  <span className="text-xs text-white/80 font-medium flex items-center gap-1">
                    <Car size={14} className="text-primary" /> Free Doorstep / Showroom
                  </span>
                </div>
                <h3 className="font-heading font-extrabold text-white text-xl sm:text-2xl mt-1.5">
                  {bookingData.vehicleName}
                </h3>
                <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-white/10 text-xs">
                  {bookingData.exShowroomPrice && (
                    <div>
                      <span className="text-white/60 text-[11px]">Ex-Showroom:</span>
                      <p className="font-semibold text-white">{formatPrice(bookingData.exShowroomPrice)}</p>
                    </div>
                  )}
                  {bookingData.estimatedOnRoadPrice && (
                    <div>
                      <span className="text-white/60 text-[11px]">Est. On-Road ({bookingData.pincode || bookingData.city}):</span>
                      <p className="font-bold text-primary">{formatPrice(bookingData.estimatedOnRoadPrice)}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Customer & Appointment Information */}
          <div className="grid sm:grid-cols-2 gap-4">
            
            {/* Customer Details Box */}
            <div className="bg-white border border-border rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3">
              <h4 className="font-heading text-xs font-bold text-dark uppercase tracking-wider flex items-center gap-2 border-b border-border pb-2.5">
                <User size={15} className="text-primary" /> Customer Profile
              </h4>
              <div className="text-xs space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-muted font-medium">Name:</span>
                  <span className="font-semibold text-dark">{bookingData.customerName}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted font-medium">Mobile:</span>
                  <span className="font-semibold text-dark">+91 {bookingData.phone}</span>
                </div>
                {bookingData.email && (
                  <div className="flex justify-between items-center">
                    <span className="text-muted font-medium">Email:</span>
                    <span className="font-semibold text-dark truncate max-w-[150px]">{bookingData.email}</span>
                  </div>
                )}
                <div className="flex justify-between items-center pt-1 border-t border-border/50">
                  <span className="text-muted font-medium">Pincode / City:</span>
                  <span className="font-bold text-primary flex items-center gap-1">
                    <MapPin size={13} /> {bookingData.pincode ? `${bookingData.pincode} (${bookingData.city})` : bookingData.city}
                  </span>
                </div>
              </div>
            </div>

            {/* Schedule & Showroom Details Box */}
            <div className="bg-white border border-border rounded-2xl p-4 sm:p-5 shadow-2xs space-y-3">
              <h4 className="font-heading text-xs font-bold text-dark uppercase tracking-wider flex items-center gap-2 border-b border-border pb-2.5">
                <Calendar size={15} className="text-primary" /> Schedule & Showroom
              </h4>
              <div className="text-xs space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-muted font-medium">Date:</span>
                  <span className="font-bold text-dark">{formattedDate}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted font-medium">Time Window:</span>
                  <span className="font-semibold text-dark flex items-center gap-1">
                    <Clock size={13} className="text-primary" /> {bookingData.slot}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted font-medium">Dealer Hub:</span>
                  <span className="font-semibold text-dark">{bookingData.dealerBranch || `${bookingData.city} Authorized Center`}</span>
                </div>
                <div className="flex justify-between items-center pt-1 border-t border-border/50">
                  <span className="text-muted font-medium">Booking Status:</span>
                  <span className="font-extrabold text-success uppercase tracking-wider text-[11px]">Confirmed & Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Buywheels Official Verification Pass */}
          <div className="bg-primary-50 border border-primary/20 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-primary font-heading font-extrabold text-xs uppercase tracking-wider">
                <ShieldCheck size={16} /> Authorized Showroom Pass
              </div>
              <p className="text-xs font-medium text-dark-700 leading-relaxed">
                Present this digital receipt or Pass ID <span className="font-mono font-bold text-dark">{bookingData.bookingId}</span> at the showroom or to the home delivery executive.
              </p>
              <p className="text-[11px] text-muted">
                Need help or reschedule? Call Buywheels Support: <a href="tel:+919296961232" className="font-bold text-primary underline">+91 92969 61232</a>
              </p>
            </div>

            {/* QR Code Visual Component */}
            <div className="bg-white p-3 rounded-2xl border border-primary/20 shadow-sm shrink-0 flex flex-col items-center justify-center">
              <svg className="w-16 h-16 text-dark" viewBox="0 0 100 100" fill="currentColor">
                <path d="M0 0h30v30H0zM10 10h10v10H10zM70 0h30v30H70zM80 10h10v10H80zM0 70h30v30H0zM10 80h10v10H10zM35 5h10v10H35zM50 20h10v10H50zM35 35h30v10H35zM75 50h20v10H75zM40 60h15v10H40zM60 70h35v10H60zM40 85h25v10H40zM80 85h15v10H80z" />
              </svg>
              <span className="text-[9px] font-mono font-bold text-muted block mt-1">BW-VERIFY-QR</span>
            </div>
          </div>

          {/* Terms & Footer Note */}
          <div className="text-[11px] text-muted border-t border-border pt-4 space-y-1">
            <p className="flex items-center gap-1">
              <FileText size={12} className="text-muted shrink-0" />
              <strong>Requirements:</strong> Please carry your valid original Driving License for verification during the test drive.
            </p>
            <p className="pl-4">A Buywheels advisor will call you 2 hours before the appointment to confirm your location.</p>
          </div>
        </div>

        {/* Modal Action Footer (Hidden in Print) */}
        <div className="no-print bg-surface px-6 py-4 border-t border-border flex items-center justify-between shrink-0">
          <span className="text-xs font-semibold text-muted">Receipt ready for download or printing</span>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="btn-secondary h-11 text-xs px-5 justify-center"
            >
              <Printer size={15} /> Print Receipt
            </button>
            <button
              onClick={onClose}
              className="btn-primary h-11 text-xs px-6 justify-center"
            >
              Done & Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
