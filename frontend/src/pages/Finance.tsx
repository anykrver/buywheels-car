import { useState } from 'react';
import { Calculator, Check, ArrowRight, Shield } from 'lucide-react';
import { formatPriceShort } from '../utils/data';
import { supabase } from '../utils/supabaseClient';
import PageSEO from '../components/common/PageSEO';

const banks = [
  { name: 'State Bank of India', abbr: 'SBI', rate: '8.5%', tenure: '7 years', color: 'bg-blue-700', minLoan: '₹1 Lakh', maxLoan: '₹1 Crore', processing: '0.35%' },
  { name: 'HDFC Bank', abbr: 'HDFC', rate: '8.75%', tenure: '7 years', color: 'bg-blue-900', minLoan: '₹1 Lakh', maxLoan: '₹1 Crore', processing: '0.5%' },
  { name: 'ICICI Bank', abbr: 'ICICI', rate: '9.0%', tenure: '7 years', color: 'bg-orange-600', minLoan: '₹1 Lakh', maxLoan: '₹1 Crore', processing: '0.5%' },
  { name: 'Axis Bank', abbr: 'AXIS', rate: '9.25%', tenure: '6 years', color: 'bg-red-700', minLoan: '₹1 Lakh', maxLoan: '₹75 Lakh', processing: '0.75%' },
  { name: 'Kotak Mahindra', abbr: 'KMB', rate: '9.5%', tenure: '5 years', color: 'bg-red-600', minLoan: '₹2 Lakh', maxLoan: '₹50 Lakh', processing: '1%' },
  { name: 'Bank of Baroda', abbr: 'BOB', rate: '8.65%', tenure: '7 years', color: 'bg-orange-700', minLoan: '₹1 Lakh', maxLoan: '₹75 Lakh', processing: '0.5%' },
];

export default function Finance() {
  const [price, setPrice] = useState(1000000);
  const [down, setDown] = useState(200000);
  const [tenure, setTenure] = useState(60);
  const [rate, setRate] = useState(8.5);

  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    employment: 'Salaried',
    income: '',
    vehicleType: 'Car',
    preferredBank: 'State Bank of India',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loan = price - down;
  const r = rate / 12 / 100;
  const emi = (loan * r * Math.pow(1 + r, tenure)) / (Math.pow(1 + r, tenure) - 1);
  const totalPay = emi * tenure;
  const totalInterest = totalPay - loan;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleBankSelect = (bankName: string) => {
    const bank = banks.find(b => b.name === bankName);
    if (bank) {
      setRate(parseFloat(bank.rate));
    }
    setFormData(prev => ({
      ...prev,
      preferredBank: bankName,
    }));
    const element = document.getElementById('loan-form');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Simple validation
    if (!formData.firstName.trim() || !formData.lastName.trim()) {
      setError('Please enter your first and last name');
      return;
    }
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone.trim())) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }
    if (!formData.income.trim()) {
      setError('Please enter your monthly income');
      return;
    }

    setIsSubmitting(true);
    
    const { error: dbError } = await supabase
      .from('loan_applications')
      .insert([
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          phone: formData.phone,
          email: formData.email || null,
          employment: formData.employment,
          monthly_income: Number(formData.income),
          vehicle_type: formData.vehicleType,
          preferred_bank: formData.preferredBank,
          loan_amount: loan,
          estimated_emi: Math.round(emi)
        }
      ]);

    setIsSubmitting(false);
    if (!dbError) {
      setIsSuccess(true);
    } else {
      console.error('Error submitting loan application:', dbError);
      setError('Failed to submit loan request. Please check your connection and try again.');
    }
  };

  return (
    <div className="min-h-screen bg-surface pt-24 pb-24 lg:pb-12">
      <PageSEO
        title="Car Loan Calculator & EMI Calculator | Vehicle Finance in Jharkhand | BuyWheels"
        description="Calculate car loan EMI instantly. Compare interest rates from SBI, HDFC, ICICI, Axis and other banks. Apply for car finance online for vehicles in Ranchi, Jamshedpur and across Jharkhand."
        canonicalPath="/finance"
      />
      {/* Hero */}
      <div className="bg-dark py-16 mb-10">
        <div className="container-fluid text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Finance</p>
          <h1 className="font-heading font-bold text-white text-4xl md:text-5xl mb-4">
            Smart Vehicle Financing
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Compare loan offers from India's top banks and NBFCs. Apply online in 5 minutes.
          </p>
        </div>
      </div>

      <div className="container-fluid">
        <div className="grid lg:grid-cols-2 gap-10 mb-16" id="loan-form">
          {/* EMI Calculator */}
          <div className="bg-white rounded-2xl border border-border shadow-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                <Calculator size={20} className="text-primary" />
              </div>
              <h2 className="font-heading font-bold text-dark text-xl">EMI Calculator</h2>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-dark">Vehicle Price</label>
                  <span className="text-sm font-semibold text-primary">{formatPriceShort(price)}</span>
                </div>
                <input type="range" min={100000} max={10000000} step={50000} value={price}
                  onChange={e => setPrice(Number(e.target.value))} className="w-full accent-primary" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-dark">Down Payment</label>
                  <span className="text-sm font-semibold text-primary">{formatPriceShort(down)}</span>
                </div>
                <input type="range" min={0} max={price * 0.8} step={10000} value={down}
                  onChange={e => setDown(Number(e.target.value))} className="w-full accent-primary" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-dark">Loan Tenure</label>
                  <span className="text-sm font-semibold text-primary">{tenure} months</span>
                </div>
                <input type="range" min={12} max={84} step={12} value={tenure}
                  onChange={e => setTenure(Number(e.target.value))} className="w-full accent-primary" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-dark">Interest Rate</label>
                  <span className="text-sm font-semibold text-primary">{rate}% p.a.</span>
                </div>
                <input type="range" min={7} max={18} step={0.25} value={rate}
                  onChange={e => setRate(Number(e.target.value))} className="w-full accent-primary" />
              </div>
            </div>

            {/* Result */}
            <div className="mt-6 bg-primary rounded-2xl p-5 text-white shadow-md">
              <p className="text-white/80 text-xs uppercase tracking-wider font-semibold">Monthly EMI</p>
              <p className="font-heading font-bold text-4xl mt-1 mb-4">{formatPriceShort(Math.round(emi))}</p>
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/20 text-sm">
                <div>
                  <p className="text-white/60 text-xs">Loan Amount</p>
                  <p className="font-semibold">{formatPriceShort(loan)}</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs">Total Interest</p>
                  <p className="font-semibold">{formatPriceShort(Math.round(totalInterest))}</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs">Total Payable</p>
                  <p className="font-semibold">{formatPriceShort(Math.round(totalPay))}</p>
                </div>
              </div>
            </div>

            {/* Visual SVG Donut Chart — PRD §7.6.1 */}
            <LoanDonutChart principal={loan} interest={Math.max(0, totalInterest)} />
          </div>

          {/* Apply form */}
          <div className="bg-white rounded-2xl border border-border shadow-card p-6 flex flex-col justify-center">
            {!isSuccess ? (
              <form onSubmit={handleFormSubmit}>
                <h2 className="font-heading font-bold text-dark text-xl mb-6">Apply for Vehicle Loan</h2>

                {error && (
                  <div className="bg-error/10 border border-error/20 text-error rounded-xl p-3 text-xs mb-4">
                    {error}
                  </div>
                )}

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      required
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First Name"
                      className="input-field"
                    />
                    <input
                      required
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last Name"
                      className="input-field"
                    />
                  </div>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Mobile Number"
                    className="input-field"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="input-field"
                  />
                  <select
                    name="employment"
                    value={formData.employment}
                    onChange={handleInputChange}
                    className="select-field"
                  >
                    <option value="Salaried">Salaried</option>
                    <option value="Self-Employed">Self-Employed</option>
                    <option value="Business Owner">Business Owner</option>
                    <option value="Farmer">Farmer</option>
                  </select>
                  <input
                    required
                    type="number"
                    name="income"
                    value={formData.income}
                    onChange={handleInputChange}
                    placeholder="Monthly Income (₹)"
                    className="input-field"
                  />
                  <select
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleInputChange}
                    className="select-field"
                  >
                    <option value="Car">Car</option>
                    <option value="Electric Vehicle">Electric Vehicle</option>
                  </select>
                  <select
                    name="preferredBank"
                    value={formData.preferredBank}
                    onChange={handleInputChange}
                    className="select-field"
                  >
                    {banks.map(b => (
                      <option key={b.name} value={b.name}>{b.name}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center mt-6 h-12 text-sm"
                >
                  {isSubmitting ? 'Checking eligibility...' : 'Check Loan Eligibility'} <ArrowRight size={18} />
                </button>

                <div className="flex items-start gap-2 mt-4 text-xs text-muted">
                  <Shield size={14} className="text-success mt-0.5 flex-shrink-0" />
                  <span>Your data is 100% secure. We use bank-grade encryption for all submissions.</span>
                </div>
              </form>
            ) : (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-4 animate-scale-in">
                  <Check size={32} strokeWidth={3} />
                </div>
                <h3 className="font-heading font-bold text-dark text-2xl mb-2">Application Success!</h3>
                <p className="text-muted text-sm max-w-sm mx-auto mb-6">
                  Thanks, <span className="font-semibold">{formData.firstName}</span>! We have successfully registered loan eligibility request for your selected bank.
                </p>

                <div className="bg-surface rounded-xl p-4 border border-border text-left mb-6 max-w-xs mx-auto text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted">Selected Lender:</span>
                    <span className="font-semibold text-dark">{formData.preferredBank}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Estimated Loan Amount:</span>
                    <span className="font-semibold text-dark">{formatPriceShort(loan)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Estimated EMI:</span>
                    <span className="font-semibold text-primary">{formatPriceShort(Math.round(emi))}/mo</span>
                  </div>
                </div>

                <p className="text-xs text-muted mb-6">
                  A financing expert will call you on <span className="font-semibold">+91 {formData.phone}</span> in 15 minutes to collect document details.
                </p>

                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({ firstName: '', lastName: '', phone: '', email: '', employment: 'Salaried', income: '', vehicleType: 'Car', preferredBank: 'State Bank of India' });
                  }}
                  className="btn-secondary w-full h-11 text-xs justify-center"
                >
                  Submit Another Loan Inquiry
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bank comparison */}
        <div>
          <h2 className="font-heading font-bold text-dark text-2xl mb-6">Compare Bank Loan Rates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {banks.map((bank, i) => (
              <div
                key={bank.name}
                className={`bg-white rounded-2xl border p-5 hover:shadow-card transition-all hover:-translate-y-0.5 ${
                  i === 0 ? 'border-primary' : 'border-border'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${bank.color}`}>
                    <span className="font-heading font-bold text-white text-xs">{bank.abbr}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-dark text-sm">{bank.name}</p>
                    {i === 0 && <span className="text-xs bg-primary-50 text-primary px-2 py-0.5 rounded-full font-medium">Lowest Rate</span>}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div>
                    <p className="text-muted text-xs">Interest Rate</p>
                    <p className="font-heading font-bold text-dark text-lg">{bank.rate}</p>
                  </div>
                  <div>
                    <p className="text-muted text-xs">Max Tenure</p>
                    <p className="font-semibold text-dark">{bank.tenure}</p>
                  </div>
                  <div>
                    <p className="text-muted text-xs">Processing Fee</p>
                    <p className="font-semibold text-dark">{bank.processing}</p>
                  </div>
                  <div>
                    <p className="text-muted text-xs">Max Loan</p>
                    <p className="font-semibold text-dark">{bank.maxLoan}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleBankSelect(bank.name)}
                  className="w-full h-10 bg-primary text-white font-semibold text-sm rounded-xl hover:bg-primary-600 transition-colors"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-16 bg-white rounded-2xl border border-border p-8">
          <h2 className="font-heading font-bold text-dark text-2xl mb-6">Why Finance with Buywheels?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Lowest Interest Rates', desc: 'We negotiate special rates with partner banks that you won\'t find elsewhere' },
              { title: 'Instant Eligibility Check', desc: 'Know your loan eligibility in seconds — no paperwork, no waiting' },
              { title: 'Compare 10+ Lenders', desc: 'One application, multiple offers. Choose what works best for you' },
              { title: 'Doorstep Documentation', desc: 'Our team handles all paperwork at your doorstep, free of charge' },
            ].map(({ title, desc }) => (
              <div key={title} className="flex flex-col">
                <div className="w-8 h-8 bg-primary-50 rounded-xl flex items-center justify-center mb-3">
                  <Check size={16} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-dark mb-1">{title}</h3>
                <p className="text-muted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function LoanDonutChart({ principal, interest }: { principal: number; interest: number }) {
  const total = principal + interest;
  const principalPct = total > 0 ? Math.round((principal / total) * 100) : 50;
  const interestPct = 100 - principalPct;
  const circumference = 2 * Math.PI * 40;
  const principalDash = (principalPct / 100) * circumference;
  const interestDash = (interestPct / 100) * circumference;

  return (
    <div className="flex items-center gap-4 bg-surface rounded-2xl p-4 border border-border mt-4">
      <div className="relative w-20 h-20 shrink-0 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          <circle cx="50" cy="50" r="40" fill="transparent" stroke="#E5E7EB" strokeWidth="14" />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            stroke="#FF6A00"
            strokeWidth="14"
            strokeDasharray={`${principalDash} ${circumference}`}
            strokeDashoffset="0"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            stroke="#1A1A2E"
            strokeWidth="14"
            strokeDasharray={`${interestDash} ${circumference}`}
            strokeDashoffset={`-${principalDash}`}
          />
        </svg>
        <div className="absolute text-center">
          <span className="text-xs font-bold text-dark">{principalPct}%</span>
          <span className="text-[9px] text-muted block">Loan</span>
        </div>
      </div>

      <div className="space-y-2 text-xs flex-1">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 font-medium text-dark">
            <span className="w-2.5 h-2.5 rounded-full bg-primary" /> Principal Loan
          </span>
          <span className="font-bold text-dark">{principalPct}%</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 font-medium text-dark">
            <span className="w-2.5 h-2.5 rounded-full bg-dark" /> Total Interest
          </span>
          <span className="font-bold text-dark">{interestPct}%</span>
        </div>
      </div>
    </div>
  );
}

