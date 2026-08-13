import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Shield, ArrowRight, Check, Sparkles, Building2, Calculator, Car, ChevronRight, IndianRupee } from 'lucide-react';
import { vehicles as localVehicles, formatPrice, formatPriceShort } from '../utils/data';
import PageSEO from '../components/common/PageSEO';
import type { Vehicle } from '../types';

const CITY_RTO_RATES: Record<string, { rtoPercent: number; name: string; state: string }> = {
  ranchi: { rtoPercent: 0.07, name: 'Ranchi', state: 'Jharkhand' },
  jamshedpur: { rtoPercent: 0.07, name: 'Jamshedpur', state: 'Jharkhand' },
  dhanbad: { rtoPercent: 0.07, name: 'Dhanbad', state: 'Jharkhand' },
  bokaro: { rtoPercent: 0.07, name: 'Bokaro', state: 'Jharkhand' },
  hazaribagh: { rtoPercent: 0.07, name: 'Hazaribagh', state: 'Jharkhand' },
  ramgarh: { rtoPercent: 0.07, name: 'Ramgarh', state: 'Jharkhand' },
};

export default function CityOnRoadPrice() {
  const { slug, city: cityParam } = useParams<{ slug: string; city: string }>();

  const cityNameClean = (cityParam || 'ranchi').toLowerCase().replace('on-road-price-', '');
  const cityInfo = CITY_RTO_RATES[cityNameClean] || { rtoPercent: 0.07, name: cityNameClean.charAt(0).toUpperCase() + cityNameClean.slice(1), state: 'Jharkhand' };

  const vehicle: Vehicle = useMemo(() => {
    const found = localVehicles.find(v => v.slug === slug || v.id === slug);
    return found || localVehicles[0];
  }, [slug]);

  // Price computations
  const exShowroom = vehicle.startingPrice;
  const rtoTax = Math.round(exShowroom * cityInfo.rtoPercent);
  const insuranceCost = Math.round(exShowroom * 0.038);
  const fastagAndOther = 2500;
  const totalOnRoadPrice = exShowroom + rtoTax + insuranceCost + fastagAndOther;

  // Dynamic Page Title & Meta Description for Search Engines
  const pageTitle = `${vehicle.brand} ${vehicle.model} On Road Price in ${cityInfo.name} (August 2026) — Offers & EMI | BuyWheels`;
  const pageMetaDesc = `Get exact ${vehicle.brand} ${vehicle.model} on road price in ${cityInfo.name}, ${cityInfo.state}. Check ex-showroom price, RTO tax, insurance breakdown, dealer discounts & EMI starting @ ${formatPriceShort(vehicle.emiFrom)}/mo.`;

  // JSON-LD FAQ Schema for Google Rich Snippets
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': `What is the on road price of ${vehicle.brand} ${vehicle.model} in ${cityInfo.name}?`,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': `The starting on-road price of ${vehicle.brand} ${vehicle.model} in ${cityInfo.name} is ${formatPrice(totalOnRoadPrice)} (includes Ex-Showroom ${formatPrice(exShowroom)}, RTO Tax ${formatPrice(rtoTax)}, and Insurance ${formatPrice(insuranceCost)}).`
        }
      },
      {
        '@type': 'Question',
        'name': `What is the lowest monthly EMI for ${vehicle.brand} ${vehicle.model} in ${cityInfo.name}?`,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': `Monthly EMI for ${vehicle.brand} ${vehicle.model} in ${cityInfo.name} starts at ${formatPrice(vehicle.emiFrom)}/month for a 7-year loan at 8.5% interest rate.`
        }
      }
    ]
  };

  return (
    <>
      <PageSEO
        title={pageTitle}
        description={pageMetaDesc}
        canonicalUrl={`https://buywheels.in/vehicle/${vehicle.slug}/on-road-price-${cityNameClean}`}
        jsonLd={faqSchema}
      />

      <main className="min-h-screen bg-slate-50 pb-20 pt-24 text-slate-800">
        {/* Breadcrumb Navigation */}
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500 sm:text-sm">
            <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/cars" className="hover:text-slate-900 transition-colors">New Cars</Link>
            <ChevronRight size={14} />
            <Link to={`/vehicle/${vehicle.slug}`} className="hover:text-slate-900 transition-colors">{vehicle.brand} {vehicle.model}</Link>
            <ChevronRight size={14} />
            <span className="font-semibold text-primary">On-Road Price in {cityInfo.name}</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:p-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Image */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-inner">
                  <img
                    src={vehicle.thumbnailUrl}
                    alt={`${vehicle.brand} ${vehicle.model} in ${cityInfo.name}`}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute top-3 left-3 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white shadow-md">
                    {cityInfo.name} On-Road Quote
                  </div>
                </div>
              </div>

              {/* Right Column: Title & Price Summary */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1 text-xs font-semibold text-primary">
                  <MapPin size={14} />
                  <span>{cityInfo.name}, {cityInfo.state} Pricing</span>
                </div>

                <h1 className="font-heading text-2xl font-bold sm:text-4xl text-slate-900">
                  {vehicle.brand} {vehicle.model} On-Road Price in {cityInfo.name}
                </h1>
                <p className="text-sm text-slate-600">
                  Verified latest quote for {cityInfo.name} including state RTO registration tax, 1-year comprehensive insurance, FASTag & local dealer discount benefits.
                </p>

                {/* On-Road Price Banner */}
                <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-xl">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-slate-700">
                    <div className="sm:pr-4">
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Estimated On-Road Price</span>
                      <div className="text-3xl font-extrabold text-primary sm:text-4xl mt-1">
                        {formatPrice(totalOnRoadPrice)}
                      </div>
                    </div>
                    <div className="sm:pl-4">
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Ex-Showroom Price</span>
                      <div className="text-xl font-bold text-white mt-1">
                        {formatPrice(exShowroom)}
                      </div>
                    </div>
                    <div className="sm:pl-4">
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">EMI Starts @</span>
                      <div className="text-xl font-bold text-emerald-400 mt-1">
                        {formatPriceShort(vehicle.emiFrom)}/mo
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    to={`/test-drive?model=${encodeURIComponent(`${vehicle.brand} ${vehicle.model}`)}`}
                    className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-orange-600 transition-all hover:scale-105"
                  >
                    <Car size={18} />
                    <span>Book Test Drive in {cityInfo.name}</span>
                  </Link>
                  <Link
                    to={`/finance?vehicleId=${vehicle.id}`}
                    className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 hover:text-slate-900 transition-colors"
                  >
                    <Calculator size={18} />
                    <span>Calculate Loan EMI</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Price Breakdown Table */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="font-heading text-xl font-bold text-slate-900 sm:text-2xl">
              {vehicle.model} Detailed Price Breakdown in {cityInfo.name}
            </h2>
            <p className="text-xs text-slate-500">Itemized quotation breakdown with Jharkhand RTO tax & insurance charges</p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-100 text-xs uppercase text-slate-600 font-semibold border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4">Cost Component</th>
                  <th className="px-6 py-4">Calculation Details</th>
                  <th className="px-6 py-4 text-right">Amount (₹)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-900">Ex-Showroom Price</td>
                  <td className="px-6 py-4 text-xs text-slate-500">Base manufacturing ex-factory price</td>
                  <td className="px-6 py-4 font-bold text-right text-slate-900">{formatPrice(exShowroom)}</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-900">RTO Registration Tax ({cityInfo.state})</td>
                  <td className="px-6 py-4 text-xs text-slate-500">~{(cityInfo.rtoPercent * 100).toFixed(0)}% State road tax & safety levy</td>
                  <td className="px-6 py-4 font-bold text-right text-slate-900">{formatPrice(rtoTax)}</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-900">Comprehensive Insurance</td>
                  <td className="px-6 py-4 text-xs text-slate-500">1-Year Bumper-to-Bumper + 3-Year Third Party</td>
                  <td className="px-6 py-4 font-bold text-right text-slate-900">{formatPrice(insuranceCost)}</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-900">FASTag & Registration Accessories</td>
                  <td className="px-6 py-4 text-xs text-slate-500">Mandatory RFID tag & vehicle registration kit</td>
                  <td className="px-6 py-4 font-bold text-right text-slate-900">{formatPrice(fastagAndOther)}</td>
                </tr>
                <tr className="bg-orange-50/80 font-bold border-t-2 border-primary/20">
                  <td className="px-6 py-5 text-base text-primary">Total On-Road Price ({cityInfo.name})</td>
                  <td className="px-6 py-5 text-xs text-orange-700/80">Estimated final amount payable at dealership</td>
                  <td className="px-6 py-5 text-right text-xl text-primary">{formatPrice(totalOnRoadPrice)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Local Dealers in City */}
        <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="font-heading text-xl font-bold text-slate-900 sm:text-2xl">
              Authorized {vehicle.brand} Dealerships in {cityInfo.name}
            </h2>
            <p className="text-xs text-slate-500">Connect with local showrooms for instant vehicle availability and test drive slots</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-primary">
                  <Building2 size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{vehicle.brand} Authorized Showroom</h3>
                  <span className="text-xs text-slate-500">{cityInfo.name}, {cityInfo.state}</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 mb-4">
                Main Showroom & Service Center, Near Main Highway Road, {cityInfo.name}
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <a href="tel:+919296961232" className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:underline">
                  <Phone size={14} />
                  <span>Call Dealership</span>
                </a>
                <Link
                  to={`/test-drive?model=${encodeURIComponent(`${vehicle.brand} ${vehicle.model}`)}`}
                  className="text-xs font-bold text-primary hover:underline"
                >
                  Book Test Drive →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
