import { useState } from 'react';
import { ChevronDown, ThumbsUp, ThumbsDown, Check } from 'lucide-react';
import { Vehicle } from '../../types';
import { formatPrice, vehicles } from '../../utils/data';

interface VehicleDetailSEOProps {
  vehicle: Vehicle;
}

export default function VehicleDetailSEO({ vehicle }: VehicleDetailSEOProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Helper variables for template text
  const brand = vehicle.brand;
  const model = vehicle.model;
  const displayCategory = vehicle.category === 'ev' ? 'EV' : (vehicle.model.toLowerCase().includes('swift') || vehicle.model.toLowerCase().includes('i20') || vehicle.model.toLowerCase().includes('baleno') || vehicle.model.toLowerCase().includes('glanza') ? 'Hatchback' : (vehicle.model.toLowerCase().includes('city') || vehicle.model.toLowerCase().includes('verna') || vehicle.model.toLowerCase().includes('slavia') || vehicle.model.toLowerCase().includes('virtus') || vehicle.model.toLowerCase().includes('camry') || vehicle.model.toLowerCase().includes('dzire') ? 'Sedan' : 'SUV'));

  // Calculate price range
  const variantPrices = vehicle.variants.map((v) => v.price);
  const minPrice = variantPrices.length > 0 ? Math.min(...variantPrices) : vehicle.startingPrice;
  const maxPrice = variantPrices.length > 0 ? Math.max(...variantPrices) : Math.round(vehicle.startingPrice * 1.3);

  // Format price ranges (e.g. ₹7.37-14.22 lakh)
  const formatLakhStr = (price: number) => {
    return `₹${(price / 100000).toFixed(2)} lakh`;
  };

  // Find competitors dynamically in similar price segment and category
  const competitors = vehicles
    .filter((v) => v.id !== vehicle.id && v.category === vehicle.category && Math.abs(v.startingPrice - vehicle.startingPrice) < vehicle.startingPrice * 0.45)
    .slice(0, 3);

  // Fallback competitors if none found
  const fallbackCompetitors = vehicle.category === 'ev' 
    ? [
        { brand: 'Tata', model: 'Punch EV', price: 1099000, category: 'EV' },
        { brand: 'MG', model: 'Windsor EV', price: 1349000, category: 'EV' }
      ]
    : [
        { brand: 'Kia', model: 'Sonet', price: 799000, category: 'SUV' },
        { brand: 'Hyundai', model: 'Venue', price: 794000, category: 'SUV' }
      ];

  const displayCompetitors = competitors.length > 0 
    ? competitors.map(c => ({ brand: c.brand, model: c.model, price: c.startingPrice, category: c.category === 'ev' ? 'EV' : 'SUV' }))
    : fallbackCompetitors;

  // Toggle helper
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // 1. Description Texts
  const summaryParagraphs = [
    `The New ${brand} ${model} builds on a story of innovation and trust in the Indian automotive market. Over the years, ${brand} has refined this ${displayCategory.toLowerCase()} through modern styling, updated powertrains, and cutting-edge features, while still retaining the core values of durability and comfort that customers appreciate in their daily lives.`,
    `The ${model} ${displayCategory} is designed to suit modern families seeking cabin comfort, practicality, and usable performance across fuel choices like ${vehicle.fuelTypes.join(', ')}. The ${model} car suits city commuters, highway travelers, and buyers upgrading from smaller hatchbacks who want a more complete everyday companion.`,
    `The ${brand} ${model} price in India currently ranges from ${formatLakhStr(minPrice)} to ${formatLakhStr(maxPrice)}, with over ${vehicle.variants.length} variants on sale. This wide range enables one to select a vehicle based on one's exact budget and requirements, contributing to the popularity of the ${model}.`
  ];

  // 2. Accordion Data Definition
  const accordionItems = [
    {
      id: 'price-variants',
      title: `${brand} ${model} Car Price in India with Variants, Engine Type & Transmission`,
      content: (
        <div className="space-y-4">
          <p className="text-sm leading-relaxed text-muted">
            The {model} lineup has {vehicle.variants.length} different variants. Below are the key variants along with the ex-showroom pricing and specifications:
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[500px] text-left border-collapse">
              <thead>
                <tr className="bg-surface border-b border-border text-xs font-semibold uppercase text-muted tracking-wider">
                  <th className="p-3">Variant</th>
                  <th className="p-3">Engine</th>
                  <th className="p-3">Transmission</th>
                  <th className="p-3 text-right">Ex-Showroom Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                {vehicle.variants.map((v) => (
                  <tr key={v.id} className="hover:bg-surface/30">
                    <td className="p-3 font-medium text-dark">{v.name}</td>
                    <td className="p-3 text-muted">{v.engineCC ? `${v.engineCC} cc` : ''} {v.fuelType}</td>
                    <td className="p-3 text-muted">{v.transmission}</td>
                    <td className="p-3 font-semibold text-dark text-right">{formatPrice(v.price)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted leading-relaxed">
            These variant configurations define the final {brand} {model} price in India, with the final on-road price varying by state taxes, registration fees, and optional insurance covers.
          </p>
        </div>
      )
    },
    {
      id: 'engines-driving',
      title: `${brand} ${model} Engines & Driving Experience`,
      content: (
        <div className="space-y-4">
          <p className="text-sm leading-relaxed text-muted">
            The {brand} {model} offers versatile powertrain choices adjusted to different buyer profiles:
          </p>
          <div className="space-y-3">
            <p className="font-semibold text-sm text-dark">Engine Details</p>
            <ul className="list-disc pl-5 text-sm text-muted space-y-1">
              {vehicle.isEV || vehicle.category === 'ev' ? (
                <li><strong>Electric Motor:</strong> Powered by a high-efficiency battery delivering {vehicle.powerBHP || 143} BHP and {vehicle.torqueNm || 215} Nm torque.</li>
              ) : (
                <>
                  {vehicle.engineCC && <li><strong>Main Engine Option:</strong> {vehicle.engineCC} cc / {vehicle.powerBHP || 100} BHP / {vehicle.torqueNm || 150} Nm.</li>}
                  {vehicle.fuelTypes.includes('CNG') && <li><strong>CNG Engine Option:</strong> Ultra-frugal factory-fitted bi-fuel CNG engine option.</li>}
                </>
              )}
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-sm text-dark">City Performance</p>
            <p className="text-sm leading-relaxed text-muted">
              {vehicle.isEV || vehicle.category === 'ev' 
                ? 'The electric drivetrain provides silent and smooth acceleration at low speeds. Its instant torque helps in overtaking quickly, while single-speed transmission ensures a jerk-free city ride.'
                : 'In city traffic, the engine provides smooth acceleration at low revs. The optional automatic transmission (AMT/CVT/DCT) matches stop-and-go traffic demands well. The clutch action is reasonably light on manual versions, making bumper-to-bumper commutes stress-free.'}
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-sm text-dark">Highway Performance</p>
            <p className="text-sm leading-relaxed text-muted">
              On open highways, the {model} feels relaxed and composed at steady speeds of 80-100 kmph. It climbs speeds linearly, offering confident high-speed stability and a well-sorted suspension that absorbs road imperfections effortlessly.
            </p>
          </div>
          <div className="bg-surface rounded-xl p-4">
            <p className="font-semibold text-sm text-dark mb-2">Who Should Pick Which Fuel Choice?</p>
            <ul className="list-disc pl-5 text-xs text-muted space-y-1">
              {vehicle.fuelTypes.includes('Petrol') && <li>Select <strong>Petrol</strong> if you value refinement, smooth driving, and moderate daily commutes.</li>}
              {vehicle.fuelTypes.includes('Diesel') && <li>Choose <strong>Diesel</strong> if high-torque highway cruising and long-distance travel are your priorities.</li>}
              {vehicle.fuelTypes.includes('CNG') && <li>Pick <strong>CNG</strong> if ultra-low running costs on a daily basis are your absolute focus.</li>}
              {(vehicle.isEV || vehicle.category === 'ev' || vehicle.fuelTypes.includes('Electric')) && <li>Go for <strong>Electric (EV)</strong> if you desire zero tailpipe emissions, silent driving, and future-ready technology.</li>}
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'variant-lineup',
      title: `A Closer Look at the ${brand} ${model} Variant Line-up`,
      content: (
        <div className="space-y-3">
          <p className="text-sm leading-relaxed text-muted font-medium">
            The variant lineup generally divides into four main trim tiers designed to cater to different budget brackets:
          </p>
          <div className="space-y-3 mt-2 text-sm text-muted">
            <div className="border-l-2 border-primary/45 pl-3">
              <p className="font-semibold text-dark text-xs uppercase tracking-wider">Base Tier (e.g., LXi / E / Smart / Sigma)</p>
              <p className="text-xs mt-0.5">Focuses on essential safety kit, including multiple airbags, ABS, EBD, power windows, and basic functional elements.</p>
            </div>
            <div className="border-l-2 border-primary/70 pl-3">
              <p className="font-semibold text-dark text-xs uppercase tracking-wider">Mid Tier (e.g., VXi / EX / Pure / Delta)</p>
              <p className="text-xs mt-0.5">Adds utility upgrades: larger touchscreen infotainment systems, rear air-conditioning vents, height-adjustable driver seats, and steering controls.</p>
            </div>
            <div className="border-l-2 border-primary pl-3">
              <p className="font-semibold text-dark text-xs uppercase tracking-wider">Upper-Mid Tier (e.g., ZXi / S / Creative / Zeta)</p>
              <p className="text-xs mt-0.5">The feature-rich sweet spot adding alloy wheels, automatic climate control, cruise control, rear parking camera, and LED headlamps.</p>
            </div>
            <div className="border-l-2 border-dark pl-3">
              <p className="font-semibold text-dark text-xs uppercase tracking-wider">Premium Tier (e.g., ZXi+ / SX(O) / Fearless / Alpha / Luxury)</p>
              <p className="text-xs mt-0.5">Offers top-shelf features: digital instrument console, premium speaker setup, leatherette cabin upholstery, 360-degree surround view cameras, and ADAS features.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'mileage',
      title: `${brand} ${model} Mileage Expectations`,
      content: (
        <div className="space-y-3">
          <p className="text-sm leading-relaxed text-muted">
            While the {model} doesn't aim for record-breaking efficiency, its real-world frugality makes it very pocket-friendly. The estimated ratings stand at:
          </p>
          <div className="grid grid-cols-2 gap-3 mt-2">
            {vehicle.fuelTypes.map((fuel) => {
              // Try to find a variant of this fuel type to get its mileage/range
              const matchingVariant = vehicle.variants.find(vr => vr.fuelType === fuel);
              let expectedMil = matchingVariant?.mileageKmpl 
                ? `${matchingVariant.mileageKmpl} kmpl`
                : (matchingVariant?.rangeKm 
                  ? `${matchingVariant.rangeKm} km range`
                  : vehicle.mileage || '17.4 kmpl');
              return (
                <div key={fuel} className="p-3 bg-surface rounded-xl border border-border/60">
                  <p className="text-xs text-muted">{fuel} Economy</p>
                  <p className="font-bold text-dark text-sm mt-0.5">{expectedMil}</p>
                </div>
              );
            })}
          </div>
          <p className="text-xs text-muted">
            *Note: Real-world mileage may vary based on traffic situations, road conditions, driving mode selections, and vehicle maintenance.
          </p>
        </div>
      )
    },
    {
      id: 'exterior',
      title: `${brand} ${model} Exterior Design`,
      content: (
        <div className="space-y-3 text-sm text-muted leading-relaxed">
          <p>
            The {brand} {model} features a bold road presence with its modern design language. The front end is dominated by sharp LED Day Running Lights (DRLs) and a sculpted bumper.
          </p>
          <p>
            From the side, it features dynamic lines, custom {vehicle.isEV ? 'aerodynamic wheel covers' : 'alloy wheels'}, and dual-tone roof options on the higher trims.
          </p>
          <p>
            With an impressive ground clearance of approximately {vehicle.groundClearance ? `${vehicle.groundClearance} mm` : (vehicle.category === 'ev' ? '180 mm' : '190 mm')}, the {model} confidently handles bad roads, deep potholes, and high speedbreakers without scratching the underbelly.
          </p>
        </div>
      )
    },
    {
      id: 'interior-tech',
      title: `${brand} ${model} Interior, Cabin Experience & Technology`,
      content: (
        <div className="space-y-4">
          <p className="text-sm leading-relaxed text-muted">
            The cabin interior emphasizes quality, ergonomics, and technology integration:
          </p>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="p-3.5 bg-surface rounded-xl">
              <p className="font-semibold text-xs text-dark uppercase mb-1">Cabin Space</p>
              <p className="text-xs text-muted leading-relaxed">Supportive front seating with ample knee and headroom. The rear bench accommodates two adults and a child comfortably.</p>
            </div>
            <div className="p-3.5 bg-surface rounded-xl">
              <p className="font-semibold text-xs text-dark uppercase mb-1">Infotainment & sound</p>
              <p className="text-xs text-muted leading-relaxed">Includes a responsive touchscreen console supporting wireless Android Auto & Apple CarPlay alongside high-quality audio speakers.</p>
            </div>
            <div className="p-3.5 bg-surface rounded-xl">
              <p className="font-semibold text-xs text-dark uppercase mb-1">Boot Capacity</p>
              <p className="text-xs text-muted leading-relaxed">Provides a {vehicle.bootSpaceL || 382}-litre boot space (around 312L for CNG models) with 60:40 split-folding rear seats for extra luggage flexibility.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'safety',
      title: `${brand}'s New ${model} Safety Features`,
      content: (
        <div className="space-y-3">
          <p className="text-sm leading-relaxed text-muted">
            Safety is a core pillar for the {brand} {model}. Key safety components include:
          </p>
          <div className="grid sm:grid-cols-2 gap-2 mt-1">
            {vehicle.features.filter(f => f.toLowerCase().includes('airbag') || f.toLowerCase().includes('camera') || f.toLowerCase().includes('adas') || f.toLowerCase().includes('safety') || f.toLowerCase().includes('esp') || f.toLowerCase().includes('shield')).map((f, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-muted">
                <Check size={12} className="text-success shrink-0" />
                <span>{f}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 text-xs text-muted">
              <Check size={12} className="text-success shrink-0" />
              <span>ABS & EBD Braking Tech</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted">
              <Check size={12} className="text-success shrink-0" />
              <span>ISOFIX Child Seat Mounts</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted">
              <Check size={12} className="text-success shrink-0" />
              <span>Electronic Stability Program (ESP)</span>
            </div>
          </div>
          <div className="mt-2 bg-success-50/50 border border-success/10 rounded-xl p-3.5 flex gap-3 items-center">
            <span className="w-10 h-10 bg-success/10 text-success rounded-full flex items-center justify-center font-bold text-sm shrink-0">
              {vehicle.safetyRating || 5}★
            </span>
            <p className="text-xs text-muted leading-relaxed">
              The {brand} {model} enjoys a reassuring <strong>{vehicle.safetyRating || 5}-star crash safety rating</strong> (GNCAP/BNCAP), making it one of the safest picks in its market segment.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'rivals',
      title: `${model} Rivals & Positioning at ${brand} ${model} Price`,
      content: (
        <div className="space-y-4">
          <p className="text-sm leading-relaxed text-muted">
            The {brand} {model} faces direct competition from other leading models in the segment. Here is how it compares:
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[600px] text-left border-collapse text-sm">
              <thead>
                <tr className="bg-surface border-b border-border text-xs font-semibold uppercase text-muted tracking-wider">
                  <th className="p-3">Rival Model</th>
                  <th className="p-3">Price Segment</th>
                  <th className="p-3">Key Focus / Alternative Angle</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {displayCompetitors.map((c, i) => (
                  <tr key={i} className="hover:bg-surface/30">
                    <td className="p-3 font-medium text-dark">{c.brand} {c.model}</td>
                    <td className="p-3 text-muted">Starts from {formatPrice(c.price)}</td>
                    <td className="p-3 text-muted text-xs">
                      {c.brand === 'Kia' 
                        ? 'Select for a sportier engine tune and highly tech-loaded cabin interface.' 
                        : c.brand === 'Hyundai' 
                          ? 'Select for refined engines, polished dashboard ergonomics, and smooth DCT options.' 
                          : c.brand === 'Mahindra' 
                            ? 'Select for higher horsepower turbocharged petrol options and Level-2 ADAS.'
                            : 'Select if you prefer styling alternatives and competitive packages in this price tier.'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'pros-cons',
      title: `Pros & Cons of ${brand} ${model}`,
      content: (
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-success-50/20 p-4 rounded-xl border border-success/10 space-y-2">
            <div className="flex items-center gap-1.5 text-success font-bold text-sm">
              <ThumbsUp size={16} />
              <span>Pros</span>
            </div>
            <ul className="text-xs text-muted pl-4 list-decimal space-y-1.5">
              {(vehicle.pros && vehicle.pros.length > 0 ? vehicle.pros : [
                `${vehicle.safetyRating && vehicle.safetyRating >= 4 ? `${vehicle.safetyRating}-star NCAP safety rating and robust body build` : 'Strong standard safety kit from the base variant'}`,
                'Premium audio sound quality and user-friendly touchscreen system',
                'Sorted suspension leading to stable high-speed highway rides',
                'Multiple variant families to pick from based on specific budgets'
              ]).map((pro, idx) => (
                <li key={idx}>{pro}</li>
              ))}
            </ul>
          </div>
          <div className="bg-orange-50/20 p-4 rounded-xl border border-orange-500/10 space-y-2">
            <div className="flex items-center gap-1.5 text-orange-500 font-bold text-sm">
              <ThumbsDown size={16} />
              <span>Cons</span>
            </div>
            <ul className="text-xs text-muted pl-4 list-decimal space-y-1.5">
              {(vehicle.cons && vehicle.cons.length > 0 ? vehicle.cons : [
                'Interior plastics lower down in the cabin lack premium finish',
                'Rear seating width feels slightly tight for three taller adults',
                vehicle.category === 'ev' ? 'Charging speeds depend heavily on public DC fast chargers.' : 'Automatic options (like AMT) have noticeable shifts lag.'
              ]).map((con, idx) => (
                <li key={idx}>{con}</li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'verdict',
      title: `Should You Buy The ${brand} ${model} ${displayCategory}?`,
      content: (
        <div className="space-y-3 text-sm text-muted leading-relaxed">
          <p>
            The New {model} is among the most complete and balanced options for buyers prioritizing safety, passenger comfort, and contemporary features in this price bracket.
          </p>
          <p>
            However, you can look elsewhere if your absolute priorities are the slickest cabin ergonomics, maximum engine refinement, or sporty cornering responses.
          </p>
          <p className="font-medium text-dark">
            Overall, the {brand} {model} stands tall as a highly recommended option that offers outstanding value for money.
          </p>
        </div>
      )
    }
  ];

  return (
    <section className="bg-surface border-t border-border mt-10" id="bikes-seocontent-section">
      <div className="container-fluid py-12 md:py-16">
        <h2 className="font-heading font-bold text-dark text-xl md:text-3xl mb-8">
          New {brand} {model} {displayCategory} - A Confident, Feature-Packed Compact {displayCategory}
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column: Summary text */}
          <div className="lg:w-[420px] shrink-0 space-y-4">
            {summaryParagraphs.map((p, idx) => (
              <p key={idx} className="text-dark-600 text-sm leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* Right column: Collapsible Accordion */}
          <div className="flex-1 space-y-3">
            {accordionItems.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-border overflow-hidden transition-all duration-300"
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => toggleAccordion(idx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between p-4 font-heading font-semibold text-sm sm:text-base text-dark text-left hover:text-primary transition-colors focus:outline-none"
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        size={18}
                        className={`text-muted transition-transform duration-300 shrink-0 ml-3 ${
                          isOpen ? 'rotate-180 text-primary' : ''
                        }`}
                      />
                    </button>
                  </h3>
                  
                  {/* Smooth expand animation container */}
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-[1000px] border-t border-border' : 'max-h-0 overflow-hidden'
                    }`}
                  >
                    <div className="p-4 sm:p-5 bg-white">
                      {item.content}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
