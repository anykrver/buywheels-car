import VehicleListing from './VehicleListing';
import PageSEO from '../components/common/PageSEO';

export default function Cars() {
  return (
    <>
      <PageSEO
        title="New Cars in Jharkhand 2026 | Compare Prices in Ranchi, Jamshedpur, Dhanbad | BuyWheels"
        description="Browse 200+ new cars in Jharkhand. Compare ex-showroom and on-road prices, EMI, mileage and features from authorised dealers in Ranchi, Jamshedpur, Dhanbad, Bokaro & Hazaribagh."
        canonicalPath="/cars"
      />
      <VehicleListing
        category="car"
        title="New Cars in Jharkhand"
        subtitle="Explore and compare prices across all authorized car dealerships in Jharkhand"
      />
    </>
  );
}
