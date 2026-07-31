import type { Vehicle, FuelType } from '../types';

export interface ServiceScheduleItem {
  id: string;
  serviceTitle: string;
  scheduleKm: string;
  isFree: boolean;
  cost: number;
  laborCost: number;
  partsCost: number;
  partsReplaced: string[];
  description?: string;
}

export interface FuelServiceCostBreakdown {
  fuelType: FuelType;
  freeServicesCount: number;
  freeServicesSummary: string;
  total5YearCost: number;
  avgAnnualCost: number;
  costPerKm: number;
  services: ServiceScheduleItem[];
  commonPartsPrices: {
    name: string;
    price: number;
    interval: string;
  }[];
}

export interface ServiceCostSummary {
  vehicleId: string;
  brand: string;
  model: string;
  min5YearCost: number;
  max5YearCost: number;
  summaryParagraph: string;
  availableFuelTypes: FuelType[];
  fuelBreakdowns: Record<string, FuelServiceCostBreakdown>;
}

export function formatRupees(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

// Generate deterministic service cost data based on vehicle & fuel type
export function getVehicleServiceCost(vehicle: Vehicle): ServiceCostSummary {
  const brand = vehicle.brand;
  const model = vehicle.model;
  const fuels: FuelType[] = vehicle.fuelTypes && vehicle.fuelTypes.length > 0 
    ? vehicle.fuelTypes 
    : ['Petrol'];

  const isEV = vehicle.isEV || vehicle.category === 'ev' || fuels.includes('Electric');
  
  // Base price modifier factor
  const priceFactor = Math.max(0.8, Math.min(2.5, (vehicle.startingPrice || 800000) / 900000));

  const fuelBreakdowns: Record<string, FuelServiceCostBreakdown> = {};
  let minCost = Infinity;
  let maxCost = 0;

  fuels.forEach((fuel) => {
    let freeCount = 3;
    let service1Cost = 0;
    let service2Cost = 0;
    let service3Cost = 0;
    let service4Cost = Math.round(7214 * priceFactor);
    let service5Cost = Math.round(7214 * priceFactor);
    let partsList1 = ['Engine Oil Top-up Check', 'General Safety Inspection', 'Washing & Cleaning'];
    let partsList2 = ['Engine Oil Check', 'Brake Fluid Check', 'Wheel Alignment Check', 'Washing & Cleaning'];
    let partsList3 = ['Engine Oil & Filter Check', 'AC Filter Cleaning', 'Battery Voltage Check', 'Washing'];
    let partsList4 = ['Engine Oil Change', 'Oil Filter Replacement', 'Air Filter Replacement', 'Wheel Balancing'];
    let partsList5 = ['Engine Oil Change', 'Oil Filter Replacement', 'Spark Plug Replacement', 'Brake Fluid Flush'];

    if (fuel === 'Electric') {
      freeCount = 3;
      service4Cost = Math.round(3450 * priceFactor);
      service5Cost = Math.round(3890 * priceFactor);
      partsList1 = ['HV Battery Diagnostic', 'Brake Pad & Fluid Check', 'Tire Pressure & Tread Inspection'];
      partsList2 = ['High Voltage System Diagnostics', 'AC Cabin Filter Cleaning', 'Software Updates'];
      partsList3 = ['Brake Fluid Moisture Inspection', 'Suspension Alignment', 'Coolant Level Inspection'];
      partsList4 = ['Cabin Air Filter Replacement', 'Brake Fluid Replacement', 'Key Fob Battery Change'];
      partsList5 = ['Coolant Flush', 'Wheel Alignment & Balancing', 'Full Diagnostics Check'];
    } else if (fuel === 'Diesel') {
      service4Cost = Math.round(8420 * priceFactor);
      service5Cost = Math.round(7950 * priceFactor);
      partsList4 = ['Synthetic Engine Oil Replacement', 'Diesel Fuel Filter', 'Oil Filter', 'Brake Fluid'];
      partsList5 = ['Engine Oil & Oil Filter', 'Air Filter', 'DPF Inspection', 'Wheel Alignment'];
    } else if (fuel === 'CNG') {
      service4Cost = Math.round(7180 * priceFactor);
      service5Cost = Math.round(7350 * priceFactor);
      partsList4 = ['Engine Oil & Oil Filter', 'CNG Low Pressure Filter', 'Spark Plugs', 'Gas Leak Test'];
      partsList5 = ['Engine Oil & Oil Filter', 'CNG Valve O-Ring Check', 'Air Filter Replacement'];
    }

    const services: ServiceScheduleItem[] = [
      {
        id: 's1',
        serviceTitle: '1st Service',
        scheduleKm: '10,000km or 1 year',
        isFree: true,
        cost: service1Cost,
        laborCost: 0,
        partsCost: service1Cost,
        partsReplaced: partsList1,
        description: 'First complimentary service covering basic health checks and fluid top-ups.'
      },
      {
        id: 's2',
        serviceTitle: '2nd Service',
        scheduleKm: '20,000km or 2 years',
        isFree: true,
        cost: service2Cost,
        laborCost: 0,
        partsCost: service2Cost,
        partsReplaced: partsList2,
        description: 'Second complimentary inspection including wheel alignment and brake checks.'
      },
      {
        id: 's3',
        serviceTitle: '3rd Service',
        scheduleKm: '30,000km or 3 years',
        isFree: true,
        cost: service3Cost,
        laborCost: 0,
        partsCost: service3Cost,
        partsReplaced: partsList3,
        description: 'Final free service covering comprehensive electrical and filter checks.'
      },
      {
        id: 's4',
        serviceTitle: '4th Service',
        scheduleKm: '40,000km or 4 years',
        isFree: false,
        cost: service4Cost,
        laborCost: Math.round(service4Cost * 0.4),
        partsCost: Math.round(service4Cost * 0.6),
        partsReplaced: partsList4,
        description: 'Major periodic maintenance service with essential oil and filter replacements.'
      },
      {
        id: 's5',
        serviceTitle: '5th Service',
        scheduleKm: '50,000km or 5 years',
        isFree: false,
        cost: service5Cost,
        laborCost: Math.round(service5Cost * 0.42),
        partsCost: Math.round(service5Cost * 0.58),
        partsReplaced: partsList5,
        description: '5th year annual maintenance to keep vehicle running in top condition.'
      }
    ];

    const total5YearCost = services.reduce((sum, s) => sum + s.cost, 0);
    const avgAnnualCost = Math.round(total5YearCost / 5);
    const costPerKm = parseFloat((total5YearCost / 50000).toFixed(2));

    if (total5YearCost < minCost) minCost = total5YearCost;
    if (total5YearCost > maxCost) maxCost = total5YearCost;

    let commonParts = [
      { name: fuel === 'Electric' ? 'Cabin AC Filter' : 'Engine Oil (4L Synthetic)', price: Math.round(fuel === 'Electric' ? 650 : 2850 * priceFactor), interval: 'Every 10,000 km' },
      { name: fuel === 'Electric' ? 'Brake Fluid Dot 4' : 'Oil Filter Element', price: Math.round(fuel === 'Electric' ? 450 : 420 * priceFactor), interval: 'Every 10,000 km' },
      { name: fuel === 'Electric' ? 'Wiper Blade Set' : 'Air Filter Element', price: Math.round(fuel === 'Electric' ? 850 : 680 * priceFactor), interval: 'Every 15,000 km' },
      { name: fuel === 'Electric' ? 'Front Brake Pads' : 'Spark Plug Set / Fuel Filter', price: Math.round(fuel === 'Electric' ? 2900 : 1850 * priceFactor), interval: 'Every 30,000 km' },
      { name: 'Wheel Alignment & Balancing', price: Math.round(950 * priceFactor), interval: 'Every 10,000 km' }
    ];

    fuelBreakdowns[fuel] = {
      fuelType: fuel,
      freeServicesCount: freeCount,
      freeServicesSummary: `${brand} ${model} comes with ${freeCount} free services*`,
      total5YearCost,
      avgAnnualCost,
      costPerKm,
      services,
      commonPartsPrices: commonParts
    };
  });

  const formattedMin = formatRupees(minCost);
  const formattedMax = formatRupees(maxCost);

  let summaryParagraph = `The approximate service costs for ${brand} ${model} range between ${formattedMin} to ${formattedMax}, depending on the fuel type. `;
  
  const fuelSummaries = fuels.map(f => {
    const cost = fuelBreakdowns[f]?.total5YearCost || minCost;
    return `The service cost of the ${brand} ${model} ${f} variant for 5 years is approximately ${formatRupees(cost)}.`;
  }).join(' ');

  summaryParagraph += fuelSummaries;

  return {
    vehicleId: vehicle.id,
    brand,
    model,
    min5YearCost: minCost,
    max5YearCost: maxCost,
    summaryParagraph,
    availableFuelTypes: fuels,
    fuelBreakdowns
  };
}
