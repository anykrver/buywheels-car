import type { Vehicle, Variant, PriceHistoryPoint, PriceHistorySummary } from '../types';


/**
 * Curated price history records for major vehicles.
 * Gives realistic month-by-month market movement, festive offers, and price hikes.
 */
const CURATED_PRICE_HISTORIES: Record<string, Omit<PriceHistoryPoint, 'id'>[]> = {
  'tata-nexon': [
    {
      date: 'Jan 2025',
      timestamp: '2025-01-15',
      price: 815000,
      changeType: 'launch',
      changeAmount: 0,
      title: '2025 Refresh Baseline Price',
      description: 'Tata Nexon lineup updated with enhanced feature packages and updated ex-showroom pricing.',
      badgeText: 'Launch Price'
    },
    {
      date: 'May 2025',
      timestamp: '2025-05-10',
      price: 830000,
      changeType: 'increase',
      changeAmount: 15000,
      title: 'Annual Input Cost & BS6 Price Hike',
      description: 'Tata Motors revised ex-showroom prices across all Nexon trims due to rising raw material costs.',
      badgeText: 'Price Hike +₹15,000'
    },
    {
      date: 'Jul 2025',
      timestamp: '2025-07-20',
      price: 805000,
      changeType: 'drop',
      changeAmount: -25000,
      title: 'Monsoon Special Consumer Benefit',
      description: 'Special mid-year consumer price reduction and direct cash savings introduced across variants.',
      badgeText: 'Price Drop -₹25,000'
    },
    {
      date: 'Oct 2025',
      timestamp: '2025-10-18',
      price: 775000,
      changeType: 'festival_offer',
      changeAmount: -30000,
      title: 'Diwali Festive Dhamaka Offer 🎉',
      description: 'Massive festival savings with ₹20,000 cash discount + ₹10,000 exchange bonus + corporate benefits.',
      badgeText: 'Festival Offer 🎉',
      festivalDetails: {
        offerName: 'Festive Dhamaka Super Savings',
        discountAmount: 20000,
        exchangeBonus: 10000,
        corporateDiscount: 5000,
        validTill: '31 Oct 2025',
        offerCode: 'FESTIVE-NEXON-35K'
      }
    },
    {
      date: 'Feb 2026',
      timestamp: '2026-02-05',
      price: 810000,
      changeType: 'increase',
      changeAmount: 35000,
      title: 'Post-Festive Standard Price Revision',
      description: 'Price normalized following the conclusion of festive promotion scheme.',
      badgeText: 'Price Revised +₹35,000'
    },
    {
      date: 'Jun 2026',
      timestamp: '2026-06-12',
      price: 785000,
      changeType: 'festival_offer',
      changeAmount: -25000,
      title: 'Grand Monsoon Festive Celebration 🎉',
      description: 'Monsoon festive campaign active! Includes direct cash rebate of ₹15,000 and exchange bonus of ₹10,000.',
      badgeText: 'Active Festival Offer 🎉',
      festivalDetails: {
        offerName: 'Monsoon Drive Festival',
        discountAmount: 15000,
        exchangeBonus: 10000,
        corporateDiscount: 5000,
        validTill: '15 Aug 2026',
        offerCode: 'MONSOON-FEST-2026'
      }
    }
  ],
  'hyundai-creta': [
    {
      date: 'Dec 2024',
      timestamp: '2024-12-10',
      price: 1100000,
      changeType: 'launch',
      changeAmount: 0,
      title: 'Creta Facelift Launch Price',
      description: 'Official price introduction for the facelifted Hyundai Creta featuring Level 2 ADAS.',
      badgeText: 'Initial Launch'
    },
    {
      date: 'Apr 2025',
      timestamp: '2025-04-15',
      price: 1120000,
      changeType: 'increase',
      changeAmount: 20000,
      title: 'Quarterly Price Revision',
      description: 'Hyundai Motor India announced price adjustment across SUV range.',
      badgeText: 'Price Hike +₹20,000'
    },
    {
      date: 'Sep 2025',
      timestamp: '2025-09-25',
      price: 1080000,
      changeType: 'drop',
      changeAmount: -40000,
      title: 'Special Consumer Discount Scheme',
      description: 'Direct discount scheme launched ahead of festive season to boost sales.',
      badgeText: 'Price Drop -₹40,000'
    },
    {
      date: 'Nov 2025',
      timestamp: '2025-11-05',
      price: 1055000,
      changeType: 'festival_offer',
      changeAmount: -25000,
      title: 'Super Festive Celebration Offer 🎉',
      description: 'Festive offer package including ₹15,000 cash discount, ₹10,000 exchange bonus, and free 3-year maintenance.',
      badgeText: 'Festival Offer 🎉',
      festivalDetails: {
        offerName: 'Festive Delight SUV Pass',
        discountAmount: 15000,
        exchangeBonus: 10000,
        corporateDiscount: 5000,
        validTill: '30 Nov 2025',
        offerCode: 'CRETA-FEST-2025'
      }
    },
    {
      date: 'Jan 2026',
      timestamp: '2026-01-20',
      price: 1115000,
      changeType: 'increase',
      changeAmount: 60000,
      title: 'New Year Standard Price Realignment',
      description: 'Ex-showroom price adjusted following end of year promotional benefits.',
      badgeText: 'Price Hike +₹60,000'
    },
    {
      date: 'Jul 2026',
      timestamp: '2026-07-10',
      price: 1085000,
      changeType: 'festival_offer',
      changeAmount: -30000,
      title: 'Freedom Fest Discount Celebration 🎉',
      description: 'Special Independence / Freedom Fest offer! Includes ₹20,000 cash benefit + ₹10,000 exchange perk.',
      badgeText: 'Active Festival Offer 🎉',
      festivalDetails: {
        offerName: 'Freedom Fest SUV Offer',
        discountAmount: 20000,
        exchangeBonus: 10000,
        corporateDiscount: 5000,
        validTill: '31 Aug 2026',
        offerCode: 'FREEDOM-CRETA-30K'
      }
    }
  ],
  'maruti-brezza': [
    {
      date: 'Jan 2025',
      timestamp: '2025-01-05',
      price: 834000,
      changeType: 'launch',
      changeAmount: 0,
      title: '2025 Model Baseline Price',
      description: 'Maruti Suzuki Brezza updated list price.',
      badgeText: 'Base Price'
    },
    {
      date: 'May 2025',
      timestamp: '2025-05-18',
      price: 849000,
      changeType: 'increase',
      changeAmount: 15000,
      title: 'Commodity Cost Adjustment',
      description: 'Maruti Suzuki implemented 1.8% price increase across ARENA lineup.',
      badgeText: 'Price Hike +₹15,000'
    },
    {
      date: 'Oct 2025',
      timestamp: '2025-10-12',
      price: 814000,
      changeType: 'festival_offer',
      changeAmount: -35000,
      title: 'Navratri & Diwali Mega Savings 🎉',
      description: 'Special festive discount with cash savings of ₹25,000 + exchange bonus of ₹10,000.',
      badgeText: 'Festival Offer 🎉',
      festivalDetails: {
        offerName: 'Navratri Mega Savings',
        discountAmount: 25000,
        exchangeBonus: 10000,
        validTill: '15 Nov 2025',
        offerCode: 'ARENA-FESTIVE-2025'
      }
    },
    {
      date: 'Feb 2026',
      timestamp: '2026-02-14',
      price: 844000,
      changeType: 'increase',
      changeAmount: 30000,
      title: 'Post-Festival Price Realignment',
      description: 'Prices returned to standard tariff following festive period.',
      badgeText: 'Price Hike +₹30,000'
    },
    {
      date: 'Jul 2026',
      timestamp: '2026-07-01',
      price: 824000,
      changeType: 'drop',
      changeAmount: -20000,
      title: 'Mid-Year Consumer Savings Drop',
      description: 'Maruti Suzuki launched ₹20,000 summer price discount for urban SUV buyers.',
      badgeText: 'Price Drop -₹20,000'
    }
  ]
};

/**
 * Generate dynamic historical price points for any vehicle and variant when custom curated history is absent.
 */
function generateDynamicPriceHistory(basePrice: number, vehicleSlug: string, variantName?: string): PriceHistoryPoint[] {
  const currentPrice = basePrice;
  const p1 = Math.round((currentPrice * 0.94) / 1000) * 1000;
  const p2 = Math.round((currentPrice * 0.97) / 1000) * 1000;
  const p3 = Math.round((currentPrice * 0.91) / 1000) * 1000;
  const p4 = Math.round((currentPrice * 0.96) / 1000) * 1000;
  const p5 = currentPrice;

  return [
    {
      id: `${vehicleSlug}-hp-1`,
      date: 'Jan 2025',
      timestamp: '2025-01-10',
      price: p1,
      changeType: 'launch',
      changeAmount: 0,
      title: `2025 Initial Model Pricing (${variantName || 'Standard'})`,
      description: `Baseline market price recorded for this vehicle variant in early 2025.`,
      badgeText: 'Baseline Price'
    },
    {
      id: `${vehicleSlug}-hp-2`,
      date: 'Apr 2025',
      timestamp: '2025-04-12',
      price: p2,
      changeType: 'increase',
      changeAmount: p2 - p1,
      title: 'Annual Input Cost Hike',
      description: `Manufacturer adjusted ex-showroom pricing due to inflation and raw material input cost updates.`,
      badgeText: `Price Hike +₹${(p2 - p1).toLocaleString('en-IN')}`
    },
    {
      id: `${vehicleSlug}-hp-3`,
      date: 'Oct 2025',
      timestamp: '2025-10-15',
      price: p3,
      changeType: 'festival_offer',
      changeAmount: p3 - p2,
      title: 'Diwali & Festive Celebration Deal 🎉',
      description: `Exclusive festival discount package with direct cash savings and exchange bonus.`,
      badgeText: 'Festival Offer 🎉',
      festivalDetails: {
        offerName: 'Diwali Grand Celebration Deal',
        discountAmount: Math.abs(Math.round((p2 - p3) * 0.65)),
        exchangeBonus: Math.abs(Math.round((p2 - p3) * 0.35)),
        validTill: '10 Nov 2025',
        offerCode: `FESTIVE-${vehicleSlug.toUpperCase()}`
      }
    },
    {
      id: `${vehicleSlug}-hp-4`,
      date: 'Jan 2026',
      timestamp: '2026-01-15',
      price: p4,
      changeType: 'increase',
      changeAmount: p4 - p3,
      title: 'New Year Revised Price',
      description: `Ex-showroom price adjusted post festive period across all dealerships.`,
      badgeText: `Price Hike +₹${(p4 - p3).toLocaleString('en-IN')}`
    },
    {
      id: `${vehicleSlug}-hp-5`,
      date: 'Jul 2026',
      timestamp: '2026-07-01',
      price: p5,
      changeType: p5 < p4 ? 'drop' : 'festival_offer',
      changeAmount: p5 - p4,
      title: p5 < p4 ? 'Special Mid-Year Consumer Drop' : 'Festive Season Special Offer 🎉',
      description: p5 < p4 
        ? 'Direct cash reduction introduced to offer enhanced value to customers.' 
        : 'Active monsoon festival offer with cash discount + exchange perks.',
      badgeText: p5 < p4 ? `Price Drop -₹${Math.abs(p5 - p4).toLocaleString('en-IN')}` : 'Active Festival Offer 🎉',
      festivalDetails: p5 >= p4 ? {
        offerName: 'Monsoon Savings Celebration',
        discountAmount: Math.round(p5 * 0.025),
        exchangeBonus: Math.round(p5 * 0.015),
        validTill: '31 Aug 2026',
        offerCode: `FESTIVE-${vehicleSlug.toUpperCase()}-2026`
      } : undefined
    }
  ];
}

/**
 * Get comprehensive Price History summary for a vehicle or specific variant.
 */
export function getVehiclePriceHistory(
  vehicle: Vehicle,
  selectedVariant?: Variant
): PriceHistorySummary {
  const targetPrice = selectedVariant ? selectedVariant.price : vehicle.startingPrice;
  const variantName = selectedVariant ? selectedVariant.name : undefined;

  const rawHistory = CURATED_PRICE_HISTORIES[vehicle.slug] || CURATED_PRICE_HISTORIES[vehicle.slug.toLowerCase()];

  let history: PriceHistoryPoint[];

  if (rawHistory && rawHistory.length > 0) {
    // Scale curated template by variant price ratio if variant is selected
    const baseCuratedPrice = rawHistory[rawHistory.length - 1].price;
    const ratio = baseCuratedPrice > 0 ? targetPrice / baseCuratedPrice : 1;

    history = rawHistory.map((item, index) => {
      const scaledPrice = Math.round((item.price * ratio) / 1000) * 1000;
      const scaledAmount = Math.round((item.changeAmount * ratio) / 1000) * 1000;
      
      let badgeText = item.badgeText;
      if (item.changeType === 'increase') {
        badgeText = `Price Hike +₹${Math.abs(scaledAmount).toLocaleString('en-IN')}`;
      } else if (item.changeType === 'drop') {
        badgeText = `Price Drop -₹${Math.abs(scaledAmount).toLocaleString('en-IN')}`;
      }

      return {
        ...item,
        id: `${vehicle.slug}-ph-${index}`,
        price: scaledPrice,
        changeAmount: scaledAmount,
        badgeText,
        festivalDetails: item.festivalDetails ? {
          ...item.festivalDetails,
          discountAmount: Math.round(item.festivalDetails.discountAmount * ratio),
          exchangeBonus: item.festivalDetails.exchangeBonus ? Math.round(item.festivalDetails.exchangeBonus * ratio) : undefined
        } : undefined
      };
    });
  } else {
    history = generateDynamicPriceHistory(targetPrice, vehicle.slug, variantName);
  }

  // Calculate summary metrics
  let lowestObj = history[0];
  let highestObj = history[0];

  history.forEach(pt => {
    if (pt.price < lowestObj.price) lowestObj = pt;
    if (pt.price > highestObj.price) highestObj = pt;
  });

  const firstPoint = history[0];
  const lastPoint = history[history.length - 1];
  const overallChange = lastPoint.price - firstPoint.price;
  const overallChangePercent = firstPoint.price > 0 ? Number(((overallChange / firstPoint.price) * 100).toFixed(1)) : 0;

  // Find if there's any active festival offer point in recent history
  const festivalPoint = history.slice().reverse().find(pt => pt.changeType === 'festival_offer' && pt.festivalDetails);

  return {
    currentPrice: targetPrice,
    lowestPrice: {
      price: lowestObj.price,
      date: lowestObj.date,
      label: lowestObj.title
    },
    highestPrice: {
      price: highestObj.price,
      date: highestObj.date,
      label: highestObj.title
    },
    overallChange,
    overallChangePercent,
    lastChange: lastPoint,
    hasActiveFestivalOffer: Boolean(festivalPoint),
    activeFestivalDetail: festivalPoint && festivalPoint.festivalDetails ? {
      ...festivalPoint.festivalDetails,
      title: festivalPoint.title,
      date: festivalPoint.date
    } : undefined,
    history
  };
}

/**
 * Format Indian rupee currency cleanly
 */
export function formatRupees(amount: number): string {
  if (amount >= 100000) {
    return `₹ ${(amount / 100000).toFixed(2)} Lakh`;
  }
  return `₹ ${amount.toLocaleString('en-IN')}`;
}
