import VehicleListing from './VehicleListing';
import PageSEO from '../components/common/PageSEO';

export default function EVs() {
  return (
    <>
      <PageSEO
        title="Electric Cars in Jharkhand 2026 | EV Prices, Range & Dealers | BuyWheels"
        description="Explore electric vehicles in Jharkhand. Compare EV prices, battery range, charging options and government subsidies from authorised EV dealers in Ranchi, Jamshedpur & Bokaro."
        canonicalPath="/ev"
      />
      <VehicleListing
        category="ev"
        title="Electric Vehicles in Jharkhand"
        subtitle="Discover the future of mobility — compare EV prices, range, and charging options across Jharkhand"
      />
    </>
  );
}
