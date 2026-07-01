import { Link } from 'react-router-dom';
import { TrendingDown, MapPin, Star, ArrowRight, CheckCircle } from 'lucide-react';
import { vehicles, formatPriceShort } from '../../utils/data';

export default function PriceComparisonSection() {
  const vehicle = vehicles[1]; // Hyundai Creta

  return (
    <section className="py-20 bg-surface">
      <div className="container-fluid">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Price Comparison</p>
            <h2 className="font-heading font-bold text-dark text-3xl md:text-4xl mb-4">
              Compare Prices Across Every Dealer in Jharkhand
            </h2>
            <p className="text-muted text-lg mb-8 leading-relaxed">
              Buywheels aggregates real-time prices from all authorized dealerships so you always know who offers the best deal — before you even step into a showroom.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                'Real-time prices from authorized dealers only',
                'Transparent breakdown of on-road price',
                'No fake discounts or inflated prices',
                'Save up to ₹50,000 on popular models',
              ].map(point => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-dark-600">{point}</span>
                </li>
              ))}
            </ul>

            <Link to="/compare" className="btn-primary">
              Compare Prices Now <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right: Comparison card */}
          <div className="bg-white rounded-2xl border border-border shadow-card p-6">
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
              <img
                src={vehicle.thumbnailUrl}
                alt={vehicle.model}
                className="w-24 h-16 object-cover rounded-xl"
              />
              <div>
                <p className="text-xs text-muted mb-0.5">{vehicle.brand}</p>
                <h3 className="font-heading font-semibold text-dark text-lg">{vehicle.model} 2024</h3>
                <p className="text-sm text-muted">SX (O) DCT Diesel</p>
              </div>
            </div>

            {/* Dealer prices */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between text-xs text-muted font-medium uppercase tracking-wider px-3">
                <span>Dealer</span>
                <span>Price</span>
              </div>
              {vehicle.dealerPrices.map((dp, i) => (
                <div
                  key={dp.dealerId}
                  className={`flex items-center justify-between p-3 rounded-xl transition-all ${
                    i === 0 ? 'bg-primary-50 border border-primary/30' : 'bg-surface'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {i === 0 && (
                      <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full">BEST</span>
                    )}
                    <div>
                      <p className="font-medium text-dark text-sm">{dp.dealerName}</p>
                      <p className="text-muted text-xs flex items-center gap-1">
                        <MapPin size={10} /> {dp.location}
                        <Star size={10} className="ml-1 text-warning fill-warning" /> {dp.rating}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-heading font-bold text-lg ${i === 0 ? 'text-primary' : 'text-dark'}`}>
                      {formatPriceShort(dp.price)}
                    </p>
                    <p className="text-xs text-success">Save {formatPriceShort(dp.discount)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm text-success bg-success/10 rounded-xl p-3">
              <TrendingDown size={16} className="text-success" />
              <span className="font-medium">You save <strong>{formatPriceShort(vehicle.dealerPrices[0].discount)}</strong> by choosing the best dealer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
