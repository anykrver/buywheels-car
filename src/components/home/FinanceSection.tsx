import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ArrowRight, Check } from 'lucide-react';
import { formatPriceShort } from '../../utils/data';

export default function FinanceSection() {
  const [vehiclePrice, setVehiclePrice] = useState(1000000);
  const [downPayment, setDownPayment] = useState(200000);
  const [tenure, setTenure] = useState(60);
  const [rate, setRate] = useState(8.5);

  const loanAmount = vehiclePrice - downPayment;
  const monthlyRate = rate / 12 / 100;
  const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1);
  const totalAmount = emi * tenure;
  const totalInterest = totalAmount - loanAmount;

  const banks = [
    { name: 'SBI', rate: '8.5%', processing: '0.35%' },
    { name: 'HDFC Bank', rate: '8.75%', processing: '0.5%' },
    { name: 'ICICI Bank', rate: '9.0%', processing: '0.5%' },
    { name: 'Axis Bank', rate: '9.25%', processing: '0.75%' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-fluid">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: EMI Calculator */}
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Finance</p>
            <h2 className="font-heading font-bold text-dark text-3xl md:text-4xl mb-4">
              EMI Calculator
            </h2>
            <p className="text-muted text-lg mb-8">
              Calculate your monthly EMI and compare loan offers from India's top banks.
            </p>

            <div className="space-y-6">
              {/* Vehicle Price */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-dark">Vehicle Price</label>
                  <span className="text-sm font-semibold text-primary">{formatPriceShort(vehiclePrice)}</span>
                </div>
                <input
                  type="range"
                  min={100000}
                  max={10000000}
                  step={50000}
                  value={vehiclePrice}
                  onChange={e => setVehiclePrice(Number(e.target.value))}
                  className="w-full h-2 rounded-full accent-primary cursor-pointer"
                />
                <div className="flex justify-between text-xs text-muted mt-1">
                  <span>₹1 L</span>
                  <span>₹1 Cr</span>
                </div>
              </div>

              {/* Down Payment */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-dark">Down Payment</label>
                  <span className="text-sm font-semibold text-primary">{formatPriceShort(downPayment)}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={vehiclePrice * 0.8}
                  step={10000}
                  value={downPayment}
                  onChange={e => setDownPayment(Number(e.target.value))}
                  className="w-full h-2 rounded-full accent-primary cursor-pointer"
                />
              </div>

              {/* Tenure */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-dark">Loan Tenure</label>
                  <span className="text-sm font-semibold text-primary">{tenure} months</span>
                </div>
                <input
                  type="range"
                  min={12}
                  max={84}
                  step={12}
                  value={tenure}
                  onChange={e => setTenure(Number(e.target.value))}
                  className="w-full h-2 rounded-full accent-primary cursor-pointer"
                />
                <div className="flex justify-between text-xs text-muted mt-1">
                  <span>12 mo</span>
                  <span>84 mo</span>
                </div>
              </div>

              {/* Rate */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-dark">Interest Rate</label>
                  <span className="text-sm font-semibold text-primary">{rate}% p.a.</span>
                </div>
                <input
                  type="range"
                  min={7}
                  max={18}
                  step={0.25}
                  value={rate}
                  onChange={e => setRate(Number(e.target.value))}
                  className="w-full h-2 rounded-full accent-primary cursor-pointer"
                />
              </div>
            </div>

            {/* Result */}
            <div className="mt-8 bg-primary rounded-2xl p-6 text-white">
              <p className="text-white/70 text-sm mb-1">Monthly EMI</p>
              <p className="font-heading font-bold text-4xl mb-4">{formatPriceShort(Math.round(emi))}</p>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20 text-sm">
                <div>
                  <p className="text-white/60">Loan Amount</p>
                  <p className="font-semibold">{formatPriceShort(loanAmount)}</p>
                </div>
                <div>
                  <p className="text-white/60">Total Interest</p>
                  <p className="font-semibold">{formatPriceShort(Math.round(totalInterest))}</p>
                </div>
                <div>
                  <p className="text-white/60">Total Payable</p>
                  <p className="font-semibold">{formatPriceShort(Math.round(totalAmount))}</p>
                </div>
              </div>
            </div>

            <Link to="/finance" className="btn-secondary mt-6 w-full justify-center">
              <Calculator size={18} /> Explore All Finance Options
            </Link>
          </div>

          {/* Right: Bank comparison */}
          <div>
            <h3 className="font-heading font-semibold text-dark text-xl mb-6">Compare Loan Offers</h3>
            <div className="space-y-4 mb-8">
              {banks.map((bank, i) => (
                <div
                  key={bank.name}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                    i === 0 ? 'border-primary bg-primary-50' : 'border-border bg-white hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-heading font-bold text-sm text-white ${
                      ['bg-blue-700', 'bg-blue-900', 'bg-orange-600', 'bg-red-700'][i]
                    }`}>
                      {bank.name.slice(0, 2)}
                    </div>
                    <div>
                      <p className="font-semibold text-dark">{bank.name}</p>
                      <p className="text-xs text-muted">Processing: {bank.processing}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-heading font-bold text-lg ${i === 0 ? 'text-primary' : 'text-dark'}`}>
                      {bank.rate}
                    </p>
                    {i === 0 && <p className="text-xs text-primary font-medium">Lowest Rate</p>}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {[
                'Instant loan eligibility check',
                'Compare 10+ banks & NBFCs',
                'Apply online in 5 minutes',
                'Dedicated finance advisor',
              ].map(benefit => (
                <div key={benefit} className="flex items-center gap-3 text-dark-600">
                  <div className="w-5 h-5 bg-success/15 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-success" />
                  </div>
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            <Link to="/finance" className="btn-primary mt-8 w-full justify-center">
              Apply for Loan <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
