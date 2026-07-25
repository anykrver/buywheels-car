import type { Vehicle, Brand, Dealer, Review, Offer, FAQItem } from '../types';

export const vehicles: Vehicle[] = [
  {
    "id": "c1",
    "slug": "maruti-swift-2024",
    "category": "car",
    "brand": "Maruti Suzuki",
    "model": "Swift",
    "year": 2024,
    "startingPrice": 653000,
    "emiFrom": 9795,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/159099/swift-exterior-right-front-three-quarter-31.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/159099/swift-exterior-left-front-three-quarter-28.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/159099/swift-exterior-right-front-three-quarter-30.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/159099/swift-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/159099/swift-exterior-right-rear-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/159099/swift-exterior-right-rear-three-quarter-2.jpeg?isig=0&q=80"
    ],
    "threeSixtyImages": [
      "https://imgd.aeplcdn.com/1056x594/cw/360/marutisuzuki/2633/17321/closed-door/ab1601/1.jpg?q=80&v=20240809120142",
      "https://imgd.aeplcdn.com/1056x594/cw/360/marutisuzuki/2633/17321/closed-door/ab1601/2.jpg?q=80&v=20240809120142",
      "https://imgd.aeplcdn.com/1056x594/cw/360/marutisuzuki/2633/17321/closed-door/ab1601/3.jpg?q=80&v=20240809120142",
      "https://imgd.aeplcdn.com/1056x594/cw/360/marutisuzuki/2633/17321/closed-door/ab1601/4.jpg?q=80&v=20240809120142",
      "https://imgd.aeplcdn.com/1056x594/cw/360/marutisuzuki/2633/17321/closed-door/ab1601/5.jpg?q=80&v=20240809120142",
      "https://imgd.aeplcdn.com/1056x594/cw/360/marutisuzuki/2633/17321/closed-door/ab1601/6.jpg?q=80&v=20240809120142",
      "https://imgd.aeplcdn.com/1056x594/cw/360/marutisuzuki/2633/17321/closed-door/ab1601/7.jpg?q=80&v=20240809120142",
      "https://imgd.aeplcdn.com/1056x594/cw/360/marutisuzuki/2633/17321/closed-door/ab1601/8.jpg?q=80&v=20240809120142",
      "https://imgd.aeplcdn.com/1056x594/cw/360/marutisuzuki/2633/17321/closed-door/ab1601/9.jpg?q=80&v=20240809120142",
      "https://imgd.aeplcdn.com/1056x594/cw/360/marutisuzuki/2633/17321/closed-door/ab1601/10.jpg?q=80&v=20240809120142",
      "https://imgd.aeplcdn.com/1056x594/cw/360/marutisuzuki/2633/17321/closed-door/ab1601/11.jpg?q=80&v=20240809120142",
      "https://imgd.aeplcdn.com/1056x594/cw/360/marutisuzuki/2633/17321/closed-door/ab1601/12.jpg?q=80&v=20240809120142",
      "https://imgd.aeplcdn.com/1056x594/cw/360/marutisuzuki/2633/17321/closed-door/ab1601/13.jpg?q=80&v=20240809120142",
      "https://imgd.aeplcdn.com/1056x594/cw/360/marutisuzuki/2633/17321/closed-door/ab1601/14.jpg?q=80&v=20240809120142",
      "https://imgd.aeplcdn.com/1056x594/cw/360/marutisuzuki/2633/17321/closed-door/ab1601/15.jpg?q=80&v=20240809120142",
      "https://imgd.aeplcdn.com/1056x594/cw/360/marutisuzuki/2633/17321/closed-door/ab1601/16.jpg?q=80&v=20240809120142",
      "https://imgd.aeplcdn.com/1056x594/cw/360/marutisuzuki/2633/17321/closed-door/ab1601/17.jpg?q=80&v=20240809120142",
      "https://imgd.aeplcdn.com/1056x594/cw/360/marutisuzuki/2633/17321/closed-door/ab1601/18.jpg?q=80&v=20240809120142",
      "https://imgd.aeplcdn.com/1056x594/cw/360/marutisuzuki/2633/17321/closed-door/ab1601/19.jpg?q=80&v=20240809120142",
      "https://imgd.aeplcdn.com/1056x594/cw/360/marutisuzuki/2633/17321/closed-door/ab1601/20.jpg?q=80&v=20240809120142",
      "https://imgd.aeplcdn.com/1056x594/cw/360/marutisuzuki/2633/17321/closed-door/ab1601/21.jpg?q=80&v=20240809120142",
      "https://imgd.aeplcdn.com/1056x594/cw/360/marutisuzuki/2633/17321/closed-door/ab1601/22.jpg?q=80&v=20240809120142",
      "https://imgd.aeplcdn.com/1056x594/cw/360/marutisuzuki/2633/17321/closed-door/ab1601/23.jpg?q=80&v=20240809120142",
      "https://imgd.aeplcdn.com/1056x594/cw/360/marutisuzuki/2633/17321/closed-door/ab1601/24.jpg?q=80&v=20240809120142",
      "https://imgd.aeplcdn.com/1056x594/cw/360/marutisuzuki/2633/17321/closed-door/ab1601/25.jpg?q=80&v=20240809120142",
      "https://imgd.aeplcdn.com/1056x594/cw/360/marutisuzuki/2633/17321/closed-door/ab1601/26.jpg?q=80&v=20240809120142",
      "https://imgd.aeplcdn.com/1056x594/cw/360/marutisuzuki/2633/17321/closed-door/ab1601/27.jpg?q=80&v=20240809120142",
      "https://imgd.aeplcdn.com/1056x594/cw/360/marutisuzuki/2633/17321/closed-door/ab1601/28.jpg?q=80&v=20240809120142",
      "https://imgd.aeplcdn.com/1056x594/cw/360/marutisuzuki/2633/17321/closed-door/ab1601/29.jpg?q=80&v=20240809120142",
      "https://imgd.aeplcdn.com/1056x594/cw/360/marutisuzuki/2633/17321/closed-door/ab1601/30.jpg?q=80&v=20240809120142",
      "https://imgd.aeplcdn.com/1056x594/cw/360/marutisuzuki/2633/17321/closed-door/ab1601/31.jpg?q=80&v=20240809120142",
      "https://imgd.aeplcdn.com/1056x594/cw/360/marutisuzuki/2633/17321/closed-door/ab1601/32.jpg?q=80&v=20240809120142",
      "https://imgd.aeplcdn.com/1056x594/cw/360/marutisuzuki/2633/17321/closed-door/ab1601/33.jpg?q=80&v=20240809120142",
      "https://imgd.aeplcdn.com/1056x594/cw/360/marutisuzuki/2633/17321/closed-door/ab1601/34.jpg?q=80&v=20240809120142",
      "https://imgd.aeplcdn.com/1056x594/cw/360/marutisuzuki/2633/17321/closed-door/ab1601/35.jpg?q=80&v=20240809120142",
      "https://imgd.aeplcdn.com/1056x594/cw/360/marutisuzuki/2633/17321/closed-door/ab1601/36.jpg?q=80&v=20240809120142"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/159099/swift-exterior-right-front-three-quarter-31.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "CNG"
    ],
    "transmissions": [
      "Manual",
      "AMT"
    ],
    "mileage": "23.76 kmpl",
    "isBestSeller": true,
    "seatingCapacity": 5,
    "bootSpaceL": 268,
    "engineCC": 1197,
    "powerBHP": 81.58,
    "torqueNm": 112,
    "safetyRating": 3,
    "rating": 4.5,
    "reviewCount": 2340,
    "colors": [
      "Pearl Arctic White",
      "Speedy Blue",
      "Solid Fire Red",
      "Magma Grey",
      "Pearl Midnight Black"
    ],
    "features": [
      "6 Airbags",
      "ESP",
      "Hill Hold Assist",
      "Rear Parking Camera",
      "Cruise Control",
      "Auto Climate Control",
      "Wireless Charger",
      "SmartPlay Pro+"
    ],
    "variants": [
      {
        "id": "c1v1",
        "name": "LXi",
        "price": 579000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1197,
        "powerBHP": 81.58,
        "torqueNm": 112,
        "mileageKmpl": 23.76,
        "mileage": "23.76 kmpl",
        "features": ["Dual Airbags", "ABS with EBD", "Rear Parking Sensors", "Power Windows", "AC"]
      },
      {
        "id": "c1v2",
        "name": "VXi",
        "price": 694000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1197,
        "powerBHP": 81.58,
        "torqueNm": 112,
        "mileageKmpl": 23.76,
        "mileage": "23.76 kmpl",
        "features": ["Dual Airbags", "ABS with EBD", "Rear Parking Sensors", "Power Windows", "AC", "4-Speaker Audio", "Rear Defogger"],
        "additionalFeaturesOverBase": ["4-Speaker Audio", "Rear Defogger", "Day-Night IRVM"]
      },
      {
        "id": "c1v3",
        "name": "VXi AMT",
        "price": 749000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1197,
        "powerBHP": 81.58,
        "torqueNm": 112,
        "mileageKmpl": 23.76,
        "mileage": "23.76 kmpl",
        "features": ["Dual Airbags", "ABS with EBD", "Rear Parking Sensors", "Power Windows", "AC", "4-Speaker Audio", "AMT Gearbox"],
        "additionalFeaturesOverBase": ["AMT Automatic Gearbox"]
      },
      {
        "id": "c1v4",
        "name": "ZXi",
        "price": 824000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1197,
        "powerBHP": 81.58,
        "torqueNm": 112,
        "mileageKmpl": 23.76,
        "mileage": "23.76 kmpl",
        "features": ["6 Airbags", "ABS with EBD", "ESP", "Rear Parking Camera", "Cruise Control", "SmartPlay Pro+ 9in", "Wireless Charger", "Auto Climate Control"],
        "additionalFeaturesOverBase": ["6 Airbags", "ESP", "Hill Hold Assist", "Rear Camera", "SmartPlay Pro+", "Wireless Charger", "Cruise Control"]
      },
      {
        "id": "c1v5",
        "name": "ZXi AMT",
        "price": 879000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1197,
        "powerBHP": 81.58,
        "torqueNm": 112,
        "mileageKmpl": 23.76,
        "mileage": "23.76 kmpl",
        "features": ["6 Airbags", "ABS with EBD", "ESP", "Rear Parking Camera", "Cruise Control", "SmartPlay Pro+ 9in", "Wireless Charger", "Auto Climate Control", "AMT Gearbox"],
        "additionalFeaturesOverBase": ["AMT Automatic Gearbox"]
      },
      {
        "id": "c1v6",
        "name": "ZXi+",
        "price": 884000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1197,
        "powerBHP": 81.58,
        "torqueNm": 112,
        "mileageKmpl": 23.76,
        "mileage": "23.76 kmpl",
        "features": ["6 Airbags", "ABS with EBD", "ESP", "360 View Camera", "Cruise Control", "SmartPlay Pro+ 9in", "Wireless Charger", "Auto Climate Control", "Heads-Up Display", "LED Projector Headlamps"],
        "additionalFeaturesOverBase": ["360 View Camera", "Heads-Up Display", "LED Projector Headlamps", "Rain Sensing Wipers"]
      },
      {
        "id": "c1v7",
        "name": "ZXi+ AMT",
        "price": 939000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1197,
        "powerBHP": 81.58,
        "torqueNm": 112,
        "mileageKmpl": 23.76,
        "mileage": "23.76 kmpl",
        "features": ["6 Airbags", "ABS with EBD", "ESP", "360 View Camera", "Cruise Control", "SmartPlay Pro+ 9in", "Wireless Charger", "Auto Climate Control", "Heads-Up Display", "LED Projector Headlamps", "AMT Gearbox"],
        "additionalFeaturesOverBase": ["AMT Automatic Gearbox"]
      },
      {
        "id": "c1v8",
        "name": "VXi CNG",
        "price": 803000,
        "fuelType": "CNG",
        "transmission": "Manual",
        "engineCC": 1197,
        "powerBHP": 69.7,
        "torqueNm": 97,
        "mileageKmpl": 32.85,
        "mileage": "32.85 km/kg",
        "features": ["Dual Airbags", "ABS with EBD", "Rear Parking Sensors", "Power Windows", "Factory-Fitted CNG Kit", "AC"],
        "additionalFeaturesOverBase": ["Factory-Fitted CNG Kit", "Bi-Fuel Capability"]
      },
      {
        "id": "c1v9",
        "name": "ZXi CNG",
        "price": 929000,
        "fuelType": "CNG",
        "transmission": "Manual",
        "engineCC": 1197,
        "powerBHP": 69.7,
        "torqueNm": 97,
        "mileageKmpl": 32.85,
        "mileage": "32.85 km/kg",
        "features": ["6 Airbags", "ABS with EBD", "ESP", "Rear Parking Camera", "SmartPlay Pro+ 9in", "Wireless Charger", "Factory-Fitted CNG Kit"],
        "additionalFeaturesOverBase": ["Factory-Fitted CNG Kit", "Bi-Fuel Capability"]
      },
      {
        "id": "c1v10",
        "name": "ZXi+ CNG",
        "price": 989000,
        "fuelType": "CNG",
        "transmission": "Manual",
        "engineCC": 1197,
        "powerBHP": 69.7,
        "torqueNm": 97,
        "mileageKmpl": 32.85,
        "mileage": "32.85 km/kg",
        "features": ["6 Airbags", "ABS with EBD", "ESP", "360 View Camera", "Heads-Up Display", "SmartPlay Pro+ 9in", "Wireless Charger", "LED Projector Headlamps", "Factory-Fitted CNG Kit"],
        "additionalFeaturesOverBase": ["360 View Camera", "Heads-Up Display", "Factory-Fitted CNG Kit"]
      }
    ],
    "dealerPrices": [
      {
        "dealerId": "d1",
        "dealerName": "Maruti True Value Ranchi",
        "location": "Ranchi",
        "price": 710000,
        "discount": 25000,
        "rating": 4.6
      },
      {
        "dealerId": "d2",
        "dealerName": "Sundaram Motors Dhanbad",
        "location": "Dhanbad",
        "price": 705000,
        "discount": 30000,
        "rating": 4.4
      }
    ],
    "description": "The all-new Maruti Swift redefines sporty hatchback driving with a peppy engine, exceptional fuel efficiency, and a feature-packed cabin.",
    "pros": [
      "Peppy Z-series engine with great response",
      "Best-in-class fuel efficiency of up to 25.75 kmpl",
      "Excellent resale value and Maruti Suzuki service backing"
    ],
    "cons": [
      "Cabin plastic materials feel basic and scratchy",
      "Rear seating legroom is slightly tight for tall adults",
      "Lightweight build compared to European competitors"
    ],
    "groundClearance": 163
  },
  {
    "id": "c2",
    "slug": "hyundai-creta-2024",
    "category": "car",
    "brand": "Hyundai",
    "model": "Creta",
    "year": 2024,
    "startingPrice": 1090000,
    "emiFrom": 16350,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/106815/creta-exterior-right-front-three-quarter-6.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/106815/creta-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/106815/creta-exterior-right-side-view-2.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/106815/creta-exterior-right-rear-three-quarter-2.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/106815/creta-exterior-rear-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/106815/creta-exterior-left-rear-three-quarter.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/106815/creta-exterior-right-front-three-quarter-6.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "Diesel"
    ],
    "transmissions": [
      "Manual",
      "Automatic"
    ],
    "mileage": "17.4 kmpl",
    "isBestSeller": true,
    "isNew": true,
    "seatingCapacity": 5,
    "bootSpaceL": 433,
    "engineCC": 1497,
    "powerBHP": 115,
    "torqueNm": 144,
    "safetyRating": 5,
    "rating": 4.7,
    "reviewCount": 4821,
    "colors": [
      "Abyss Black",
      "Titan Grey",
      "Atlas White",
      "Fiery Red",
      "Cosmic Blue"
    ],
    "features": [
      "6 Airbags",
      "ADAS Level 2",
      "Panoramic Sunroof",
      "10.25\" Touchscreen",
      "Bose Sound System",
      "Ventilated Seats",
      "Wireless Charger",
      "360° Camera"
    ],
    "variants": [
          {
                "id": "c2v1",
                "name": "1.5 E",
                "price": 1240000,
                "fuelType": "Petrol",
                "transmission": "Manual",
                "engineCC": 1497,
                "powerBHP": 115
          },
          {
                "id": "c2v2",
                "name": "1.5 EX",
                "price": 1350000,
                "fuelType": "Petrol",
                "transmission": "Manual",
                "engineCC": 1497,
                "powerBHP": 115
          },
          {
                "id": "c2v3",
                "name": "1.5 EX Summer Edition",
                "price": 1360000,
                "fuelType": "Petrol",
                "transmission": "Manual",
                "engineCC": 1497,
                "powerBHP": 115
          },
          {
                "id": "c2v4",
                "name": "1.5 EX(O)",
                "price": 1420000,
                "fuelType": "Petrol",
                "transmission": "Manual",
                "engineCC": 1497,
                "powerBHP": 115
          },
          {
                "id": "c2v5",
                "name": "1.5 E Diesel",
                "price": 1470000,
                "fuelType": "Diesel",
                "transmission": "Manual",
                "engineCC": 1493,
                "powerBHP": 116
          },
          {
                "id": "c2v6",
                "name": "1.5 EX(O) Summer Edition",
                "price": 1480000,
                "fuelType": "Petrol",
                "transmission": "Manual",
                "engineCC": 1497,
                "powerBHP": 115
          },
          {
                "id": "c2v7",
                "name": "1.5 EX(O) IVT",
                "price": 1570000,
                "fuelType": "Petrol",
                "transmission": "Automatic",
                "engineCC": 1497,
                "powerBHP": 115
          },
          {
                "id": "c2v8",
                "name": "1.5 EX Diesel",
                "price": 1590000,
                "fuelType": "Diesel",
                "transmission": "Manual",
                "engineCC": 1493,
                "powerBHP": 116
          },
          {
                "id": "c2v9",
                "name": "1.5 S(O)",
                "price": 1590000,
                "fuelType": "Petrol",
                "transmission": "Manual",
                "engineCC": 1497,
                "powerBHP": 115
          },
          {
                "id": "c2v10",
                "name": "1.5 EX Summer Edition Diesel",
                "price": 1600000,
                "fuelType": "Diesel",
                "transmission": "Manual",
                "engineCC": 1493,
                "powerBHP": 116
          },
          {
                "id": "c2v11",
                "name": "1.5 S(O) Knight",
                "price": 1600000,
                "fuelType": "Petrol",
                "transmission": "Manual",
                "engineCC": 1497,
                "powerBHP": 115
          },
          {
                "id": "c2v12",
                "name": "1.5 S(O) Summer Edition",
                "price": 1600000,
                "fuelType": "Petrol",
                "transmission": "Manual",
                "engineCC": 1497,
                "powerBHP": 115
          },
          {
                "id": "c2v13",
                "name": "1.5 S(O) Knight Summer Edition",
                "price": 1620000,
                "fuelType": "Petrol",
                "transmission": "Manual",
                "engineCC": 1497,
                "powerBHP": 115
          },
          {
                "id": "c2v14",
                "name": "1.5 EX(O) IVT Summer Edition",
                "price": 1630000,
                "fuelType": "Petrol",
                "transmission": "Automatic",
                "engineCC": 1497,
                "powerBHP": 115
          },
          {
                "id": "c2v15",
                "name": "1.5 EX(O) Diesel",
                "price": 1660000,
                "fuelType": "Diesel",
                "transmission": "Manual",
                "engineCC": 1493,
                "powerBHP": 116
          },
          {
                "id": "c2v16",
                "name": "1.5 SX",
                "price": 1690000,
                "fuelType": "Petrol",
                "transmission": "Manual",
                "engineCC": 1497,
                "powerBHP": 115
          },
          {
                "id": "c2v17",
                "name": "1.5 SX Summer Edition",
                "price": 1700000,
                "fuelType": "Petrol",
                "transmission": "Manual",
                "engineCC": 1497,
                "powerBHP": 115
          },
          {
                "id": "c2v18",
                "name": "1.5 EX(O) Summer Edition Diesel",
                "price": 1730000,
                "fuelType": "Diesel",
                "transmission": "Manual",
                "engineCC": 1493,
                "powerBHP": 116
          },
          {
                "id": "c2v19",
                "name": "1.5 S(O) IVT",
                "price": 1750000,
                "fuelType": "Petrol",
                "transmission": "Automatic",
                "engineCC": 1497,
                "powerBHP": 115
          },
          {
                "id": "c2v20",
                "name": "1.5 S(O) IVT Summer Edition",
                "price": 1770000,
                "fuelType": "Petrol",
                "transmission": "Automatic",
                "engineCC": 1497,
                "powerBHP": 115
          },
          {
                "id": "c2v21",
                "name": "1.5 SX Tech",
                "price": 1770000,
                "fuelType": "Petrol",
                "transmission": "Manual",
                "engineCC": 1497,
                "powerBHP": 115
          },
          {
                "id": "c2v22",
                "name": "1.5 SX Premium",
                "price": 1780000,
                "fuelType": "Petrol",
                "transmission": "Manual",
                "engineCC": 1497,
                "powerBHP": 115
          },
          {
                "id": "c2v23",
                "name": "1.5 EX(O) Diesel AT",
                "price": 1810000,
                "fuelType": "Diesel",
                "transmission": "Automatic",
                "engineCC": 1493,
                "powerBHP": 116
          },
          {
                "id": "c2v24",
                "name": "1.5 S(O) Diesel",
                "price": 1840000,
                "fuelType": "Diesel",
                "transmission": "Manual",
                "engineCC": 1493,
                "powerBHP": 116
          },
          {
                "id": "c2v25",
                "name": "1.5 SX Premium Summer Edition",
                "price": 1840000,
                "fuelType": "Petrol",
                "transmission": "Manual",
                "engineCC": 1497,
                "powerBHP": 115
          },
          {
                "id": "c2v26",
                "name": "1.5 S(O) Summer Edition Diesel",
                "price": 1850000,
                "fuelType": "Diesel",
                "transmission": "Manual",
                "engineCC": 1493,
                "powerBHP": 116
          },
          {
                "id": "c2v27",
                "name": "1.5 S(O) Knight Diesel",
                "price": 1860000,
                "fuelType": "Diesel",
                "transmission": "Manual",
                "engineCC": 1493,
                "powerBHP": 116
          },
          {
                "id": "c2v28",
                "name": "1.5 S(O) Knight Summer Edition Diesel",
                "price": 1880000,
                "fuelType": "Diesel",
                "transmission": "Manual",
                "engineCC": 1493,
                "powerBHP": 116
          },
          {
                "id": "c2v29",
                "name": "1.5 EX(O) Summer Edition Diesel AT",
                "price": 1880000,
                "fuelType": "Diesel",
                "transmission": "Automatic",
                "engineCC": 1493,
                "powerBHP": 116
          },
          {
                "id": "c2v30",
                "name": "1.5 SX Tech IVT",
                "price": 1940000,
                "fuelType": "Petrol",
                "transmission": "Automatic",
                "engineCC": 1497,
                "powerBHP": 115
          },
          {
                "id": "c2v31",
                "name": "1.5 SX Premium IVT",
                "price": 1950000,
                "fuelType": "Petrol",
                "transmission": "Automatic",
                "engineCC": 1497,
                "powerBHP": 115
          },
          {
                "id": "c2v32",
                "name": "1.5 King",
                "price": 1950000,
                "fuelType": "Petrol",
                "transmission": "Manual",
                "engineCC": 1497,
                "powerBHP": 115
          }
    ],
    "dealerPrices": [
      {
        "dealerId": "d3",
        "dealerName": "Hyundai Jamshedpur",
        "location": "Jamshedpur",
        "price": 1110000,
        "discount": 35000,
        "rating": 4.7
      },
      {
        "dealerId": "d4",
        "dealerName": "Hyundai Ranchi",
        "location": "Ranchi",
        "price": 1115000,
        "discount": 30000,
        "rating": 4.5
      }
    ],
    "description": "The Hyundai Creta 2024 is a segment-defining SUV with cutting-edge ADAS technology, a luxurious cabin, and powerful engine options.",
    "pros": [
      "Packed with premium features like panoramic sunroof & ventilated seats",
      "Extremely comfortable ride quality over city roads and highways",
      "Wide range of refined engine and transmission options (CVT/IVT/DCT/Manual)"
    ],
    "cons": [
      "Polarizing exterior styling not to everyone's taste",
      "Long waiting periods for popular variants",
      "Average fuel efficiency in bumper-to-bumper city traffic"
    ],
    "groundClearance": 190
  },
  {
    "id": "c3",
    "slug": "tata-nexon-ev-2024",
    "category": "ev",
    "brand": "Tata",
    "model": "Nexon EV",
    "year": 2024,
    "startingPrice": 1249000,
    "emiFrom": 18735,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/149123/nexon-ev-exterior-right-front-three-quarter-80.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/149123/nexon-ev-exterior-right-rear-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/149123/nexon-ev-exterior-rear-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/149123/nexon-ev-exterior-left-rear-three-quarter-2.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/149123/nexon-ev-exterior-left-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/149123/nexon-ev-exterior-front-view.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/149123/nexon-ev-exterior-right-front-three-quarter-80.png?isig=0&q=80",
    "fuelTypes": [
      "Electric"
    ],
    "transmissions": [
      "Automatic"
    ],
    "mileage": "489 km range",
    "isNew": true,
    "isEV": true,
    "seatingCapacity": 5,
    "bootSpaceL": 350,
    "engineCC": 0,
    "powerBHP": 143,
    "torqueNm": 215,
    "safetyRating": 5,
    "rating": 4.6,
    "reviewCount": 1876,
    "colors": [
      "Fearless Purple",
      "Pristine White",
      "Daytona Grey",
      "Flame Red",
      "Intensi-Teal"
    ],
    "features": [
      "6 Airbags",
      "ADAS",
      "Panoramic Sunroof",
      "V2L Technology",
      "Fast Charging",
      "Digital Cockpit",
      "Air Purifier",
      "Wireless Charging"
    ],
    "variants": [
      {
        "id": "c3v1",
        "name": "Medium Range Smart",
        "price": 1249000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "rangeKm": 325,
        "powerBHP": 127,
        "torqueNm": 245,
        "mileage": "325 km range",
        "features": ["Dual Airbags", "ABS", "Rear Camera", "LED DRLs", "7in Touchscreen"],
        "additionalFeaturesOverBase": []
      },
      {
        "id": "c3v2",
        "name": "Medium Range Smart+ (S)",
        "price": 1349000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "rangeKm": 325,
        "powerBHP": 127,
        "torqueNm": 245,
        "mileage": "325 km range",
        "features": ["Dual Airbags", "ABS", "Rear Camera", "LED DRLs", "10.25in Touchscreen", "Connected Car Tech"],
        "additionalFeaturesOverBase": ["10.25in Touchscreen", "Connected Car Tech", "iRA Connectivity"]
      },
      {
        "id": "c3v3",
        "name": "Medium Range Creative",
        "price": 1419000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "rangeKm": 325,
        "powerBHP": 127,
        "torqueNm": 245,
        "mileage": "325 km range",
        "features": ["6 Airbags", "ABS", "Rear Camera", "LED DRLs", "10.25in Touchscreen", "Connected Car Tech", "Auto Climate Control", "Cruise Control"],
        "additionalFeaturesOverBase": ["6 Airbags", "Auto Climate Control", "Cruise Control", "Leatherette Seats"]
      },
      {
        "id": "c3v4",
        "name": "Medium Range Creative+ (S)",
        "price": 1479000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "rangeKm": 325,
        "powerBHP": 127,
        "torqueNm": 245,
        "mileage": "325 km range",
        "features": ["6 Airbags", "ABS", "Rear Camera", "LED DRLs", "10.25in Touchscreen", "Connected Car Tech", "Auto Climate Control", "Cruise Control", "Sunroof"],
        "additionalFeaturesOverBase": ["Sunroof", "JBL Sound System"]
      },
      {
        "id": "c3v5",
        "name": "Medium Range Fearless",
        "price": 1569000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "rangeKm": 325,
        "powerBHP": 127,
        "torqueNm": 245,
        "mileage": "325 km range",
        "features": ["6 Airbags", "ADAS", "Rear Camera", "LED DRLs", "10.25in Touchscreen", "Connected Car Tech", "Auto Climate Control", "Cruise Control", "Sunroof", "Ventilated Seats"],
        "additionalFeaturesOverBase": ["ADAS Level 2", "Ventilated Front Seats", "Wireless Charger"]
      },
      {
        "id": "c3v6",
        "name": "Medium Range Fearless+ (S)",
        "price": 1649000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "rangeKm": 325,
        "powerBHP": 127,
        "torqueNm": 245,
        "mileage": "325 km range",
        "features": ["6 Airbags", "ADAS", "360° Camera", "LED DRLs", "10.25in Touchscreen", "Connected Car Tech", "Auto Climate Control", "Cruise Control", "Sunroof", "Ventilated Seats"],
        "additionalFeaturesOverBase": ["360° Camera", "Drive Modes"]
      },
      {
        "id": "c3v7",
        "name": "Long Range Creative",
        "price": 1649000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "rangeKm": 489,
        "powerBHP": 143,
        "torqueNm": 250,
        "mileage": "489 km range",
        "features": ["6 Airbags", "ABS", "Rear Camera", "LED DRLs", "10.25in Touchscreen", "Connected Car Tech", "Auto Climate Control", "Cruise Control"],
        "additionalFeaturesOverBase": ["Larger 40.5 kWh Battery", "489 km ARAI range", "More Power (143 bhp)"]
      },
      {
        "id": "c3v8",
        "name": "Long Range Creative+ (S)",
        "price": 1729000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "rangeKm": 489,
        "powerBHP": 143,
        "torqueNm": 250,
        "mileage": "489 km range",
        "features": ["6 Airbags", "ABS", "Sunroof", "LED DRLs", "10.25in Touchscreen", "Connected Car Tech", "Auto Climate Control", "Cruise Control"],
        "additionalFeaturesOverBase": ["Sunroof", "JBL Sound System"]
      },
      {
        "id": "c3v9",
        "name": "Long Range Fearless",
        "price": 1829000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "rangeKm": 489,
        "powerBHP": 143,
        "torqueNm": 250,
        "mileage": "489 km range",
        "features": ["6 Airbags", "ADAS", "Sunroof", "LED DRLs", "10.25in Touchscreen", "Connected Car Tech", "Auto Climate Control", "Cruise Control", "Ventilated Seats"],
        "additionalFeaturesOverBase": ["ADAS Level 2", "Ventilated Front Seats"]
      },
      {
        "id": "c3v10",
        "name": "Long Range Fearless+ (S)",
        "price": 1999000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "rangeKm": 489,
        "powerBHP": 143,
        "torqueNm": 250,
        "mileage": "489 km range",
        "features": ["6 Airbags", "ADAS", "360° Camera", "LED DRLs", "10.25in Touchscreen", "Connected Car Tech", "Auto Climate Control", "Cruise Control", "Ventilated Seats", "Wireless Charger"],
        "additionalFeaturesOverBase": ["360° Camera", "Drive Modes", "Wireless Charger"]
      }
    ],
    "dealerPrices": [
      {
        "dealerId": "d5",
        "dealerName": "Tata Motors Ranchi",
        "location": "Ranchi",
        "price": 1255000,
        "discount": 20000,
        "rating": 4.5
      }
    ],
    "description": "The Tata Nexon EV leads India's electric revolution with class-leading range, fast charging capability, and advanced connected car features.",
    "pros": [
      "Reassuring 5-star safety rating with robust body shell",
      "Impressive real-world range of up to 350-400 km on Long Range",
      "Smooth and silent electric motor with instant pickup"
    ],
    "cons": [
      "Tata service experience can vary across dealer locations",
      "Rear cabin width is slightly narrow for three healthy adults",
      "Premium upfront price compared to petrol counterparts"
    ],
    "groundClearance": 208
  },
  {
    "id": "c4",
    "slug": "mahindra-scorpio-n-2024",
    "category": "car",
    "brand": "Mahindra",
    "model": "Scorpio-N",
    "year": 2024,
    "startingPrice": 1374900,
    "emiFrom": 20624,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/40432/scorpio-n-exterior-right-front-three-quarter-4.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/40432/scorpio-n-exterior-right-front-three-quarter-11.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/40432/scorpio-n-exterior-right-side-view-3.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/40432/scorpio-n-exterior-right-rear-three-quarter-3.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/40432/scorpio-n-exterior-rear-view-3.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/40432/scorpio-n-exterior-left-rear-three-quarter-4.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/40432/scorpio-n-exterior-right-front-three-quarter-4.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "Diesel"
    ],
    "transmissions": [
      "Manual",
      "Automatic"
    ],
    "mileage": "15.28 kmpl",
    "seatingCapacity": 7,
    "bootSpaceL": 720,
    "engineCC": 2184,
    "powerBHP": 175,
    "torqueNm": 370,
    "safetyRating": 5,
    "rating": 4.8,
    "reviewCount": 3241,
    "colors": [
      "Dazzling Silver",
      "Grand Canyon Red",
      "Deep Forest",
      "Everest White",
      "Galaxy Grey"
    ],
    "features": [
      "6 Airbags",
      "ADAS",
      "Panoramic Sunroof",
      "Sony 3D Sound",
      "4WD",
      "Terrain Modes",
      "Wireless Charger",
      "Connected Car Tech"
    ],
    "variants": [
      {
        "id": "c4v1",
        "name": "Z2 2L mStallion TGDi 2WD 7 Seater Petrol (E) MT",
        "price": 1349000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1997,
        "powerBHP": 200,
        "torqueNm": 370,
        "mileage": "19 kmpl",
        "features": ["ABS (Anti-Lock Braking System)", "ESP", "Hill Assist", "Hill Descent Control", "Front power windows"]
      },
      {
        "id": "c4v2",
        "name": "Z2 2.2L Gen II mHawk 2WD 7 Seater Diesel (E) MT",
        "price": 1399000,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 2184,
        "powerBHP": 130,
        "torqueNm": 300,
        "mileage": "19 kmpl",
        "features": ["ABS (Anti-Lock Braking System)", "ESP", "Hill Assist", "Hill Descent Control", "Front power windows"],
        "additionalFeaturesOverBase": ["2.2 L Diesel Gen II mHawk"]
      },
      {
        "id": "c4v3",
        "name": "Z4 2L mStallion TGDi 2WD 7 Seater Petrol (E) MT",
        "price": 1544000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1997,
        "powerBHP": 200,
        "torqueNm": 370,
        "mileage": "19 kmpl",
        "features": ["Wired Android Auto & Apple Carplay", "Manual Adjust - Slide & Recline And Height", "Electrically adjustable outside mirrors"]
      },
      {
        "id": "c4v4",
        "name": "Z4 2.2L Gen II mHawk 2WD 7 Seater Diesel (E) MT",
        "price": 1585000,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 2184,
        "powerBHP": 172,
        "torqueNm": 370,
        "mileage": "19 kmpl",
        "features": ["Wired Android Auto & Apple Carplay", "Manual Adjust - Slide & Recline And Height", "Electrically adjustable outside mirrors"],
        "additionalFeaturesOverBase": ["2.2 L Diesel Gen II mHawk"]
      },
      {
        "id": "c4v5",
        "name": "Z4 2L mStallion TGDi 2WD 7 Seater Petrol AT",
        "price": 1702000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1997,
        "powerBHP": 200,
        "torqueNm": 380,
        "mileage": "13 kmpl",
        "features": ["Wired Android Auto & Apple Carplay", "Manual Adjust - Slide & Recline And Height", "Electrically adjustable outside mirrors"],
        "additionalFeaturesOverBase": ["Automatic (TC)"]
      },
      {
        "id": "c4v6",
        "name": "Z4 2.2L Gen II mHawk 2WD 7 Seater Diesel AT",
        "price": 1750000,
        "fuelType": "Diesel",
        "transmission": "Automatic",
        "engineCC": 2184,
        "powerBHP": 172,
        "torqueNm": 400,
        "mileage": "16 kmpl",
        "features": ["Wired Android Auto & Apple Carplay", "Manual Adjust - Slide & Recline And Height", "Electrically adjustable outside mirrors"],
        "additionalFeaturesOverBase": ["Diesel"]
      },
      {
        "id": "c4v7",
        "name": "Z4 2.2L Gen II mHawk 4WD 7 Seater Diesel (E) MT",
        "price": 1802000,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 2184,
        "powerBHP": 172,
        "torqueNm": 370,
        "mileage": "19 kmpl",
        "features": ["Wired Android Auto & Apple Carplay", "Manual Adjust - Slide & Recline And Height", "Electrically adjustable outside mirrors"],
        "additionalFeaturesOverBase": ["AWD"]
      },
      {
        "id": "c4v8",
        "name": "Z6 2.2L Gen II mHawk 2WD 7 Seater Diesel MT",
        "price": 1690000,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 2184,
        "powerBHP": 172,
        "torqueNm": 370,
        "mileage": "19 kmpl",
        "features": ["Electrically adjustable steering", "Single Pane Sunroof"]
      },
      {
        "id": "c4v9",
        "name": "Z6 2.2L Gen II mHawk 2WD 7 Seater Diesel AT",
        "price": 1852000,
        "fuelType": "Diesel",
        "transmission": "Automatic",
        "engineCC": 2184,
        "powerBHP": 172,
        "torqueNm": 400,
        "mileage": "16 kmpl",
        "features": ["Electrically adjustable steering", "Single Pane Sunroof"],
        "additionalFeaturesOverBase": ["Automatic (TC)"]
      },
      {
        "id": "c4v10",
        "name": "Z8 (S) 2L mStallion TGDi 2WD 7 Seater Petrol MT",
        "price": 1725000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1997,
        "powerBHP": 200,
        "torqueNm": 370,
        "mileage": "19 kmpl",
        "features": ["Wireless Android Auto & Wired Apple Carplay", "DRLs", "Analogue Cum Digital instrument cluster", "Rear Only"]
      },
      {
        "id": "c4v11",
        "name": "Z8 (S) 2.2L Gen II mHawk 2WD 7 Seater Diesel MT",
        "price": 1820000,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 2184,
        "powerBHP": 172,
        "torqueNm": 370,
        "mileage": "19 kmpl",
        "features": ["Wireless Android Auto & Wired Apple Carplay", "DRLs", "Analogue Cum Digital instrument cluster", "Rear Only"],
        "additionalFeaturesOverBase": ["2.2 L Diesel Gen II mHawk"]
      },
      {
        "id": "c4v12",
        "name": "Z8 (S) 2L mStallion TGDi 2WD 7 Seater Petrol AT",
        "price": 1868000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1997,
        "powerBHP": 200,
        "torqueNm": 380,
        "mileage": "19 kmpl",
        "features": ["Wireless Android Auto & Wired Apple Carplay", "DRLs", "Analogue Cum Digital instrument cluster", "Rear Only"],
        "additionalFeaturesOverBase": ["Automatic (TC)"]
      },
      {
        "id": "c4v13",
        "name": "Z8 (S) 2.2L Gen II mHawk 2WD 7 Seater Diesel AT",
        "price": 1918000,
        "fuelType": "Diesel",
        "transmission": "Automatic",
        "engineCC": 2184,
        "powerBHP": 172,
        "torqueNm": 400,
        "mileage": "19 kmpl",
        "features": ["Wireless Android Auto & Wired Apple Carplay", "DRLs", "Analogue Cum Digital instrument cluster", "Rear Only"],
        "additionalFeaturesOverBase": ["2.2 L Diesel Gen II mHawk"]
      },
      {
        "id": "c4v14",
        "name": "Z8 2.2L Gen II mHawk 2WD 7 Seater Diesel MT",
        "price": 1930000,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 2184,
        "powerBHP": 172,
        "torqueNm": 370,
        "mileage": "19 kmpl",
        "features": ["Wireless Android Auto & Wired Apple Carplay", "DRLs", "Analogue Cum Digital instrument cluster", "Rear Only"]
      },
      {
        "id": "c4v15",
        "name": "Z8 T 2L mStallion TGDI 2WD 7 Seater Petrol",
        "price": 1986000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1997,
        "powerBHP": 200,
        "torqueNm": 370,
        "mileage": "19 kmpl",
        "features": ["Wireless Android Auto & Wired Apple Carplay", "DRLs", "Analogue Cum Digital instrument cluster"]
      },
      {
        "id": "c4v16",
        "name": "Z8 T 2.2L mHawk CRDI 2WD 7 Seater Diesel",
        "price": 2000000,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 2184,
        "powerBHP": 172,
        "torqueNm": 370,
        "mileage": "19 kmpl",
        "features": ["Wireless Android Auto & Wired Apple Carplay", "DRLs", "Analogue Cum Digital instrument cluster"]
      },
      {
        "id": "c4v17",
        "name": "Z8 L 2L mStallion TGDi 2WD 7 Seater Petrol",
        "price": 2075000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1997,
        "powerBHP": 200,
        "torqueNm": 370,
        "mileage": "19 kmpl",
        "features": ["12-speaker Sony 3D audio", "6-Way Power Driver Seat", "Front Camera", "Wireless Charger"]
      },
      {
        "id": "c4v18",
        "name": "Z8 2.2L Gen II mHawk 2WD 7 Seater Diesel AT",
        "price": 2080000,
        "fuelType": "Diesel",
        "transmission": "Automatic",
        "engineCC": 2184,
        "powerBHP": 172,
        "torqueNm": 400,
        "mileage": "16 kmpl",
        "features": ["Wireless Android Auto & Wired Apple Carplay", "DRLs", "Analogue Cum Digital instrument cluster"]
      },
      {
        "id": "c4v19",
        "name": "Z8 L 2L mStallion TGDi 2WD 6 Seater Petrol",
        "price": 2114000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1997,
        "powerBHP": 200,
        "torqueNm": 370,
        "mileage": "19 kmpl",
        "features": ["Captain Seats (6 Seater)", "12-speaker Sony 3D audio", "6-Way Power Driver Seat", "Front Camera"]
      },
      {
        "id": "c4v20",
        "name": "Z8 T 2L mStallion TGDI 2WD 7 Seater Petrol AT",
        "price": 2123000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1997,
        "powerBHP": 200,
        "torqueNm": 380,
        "mileage": "13 kmpl",
        "features": ["Wireless Android Auto & Wired Apple Carplay", "DRLs", "Analogue Cum Digital instrument cluster"]
      },
      {
        "id": "c4v21",
        "name": "Z8 L 2.2L Gen II mHawk 2WD 7 Seater Diesel",
        "price": 2132000,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 2184,
        "powerBHP": 172,
        "torqueNm": 370,
        "mileage": "19 kmpl",
        "features": ["12-speaker Sony 3D audio", "6-Way Power Driver Seat", "Front Camera", "Wireless Charger"]
      },
      {
        "id": "c4v22",
        "name": "Z8 L 2.2L Gen II mHawk 2WD 6 Seater Diesel",
        "price": 2168000,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 2184,
        "powerBHP": 172,
        "torqueNm": 370,
        "mileage": "19 kmpl",
        "features": ["Captain Seats (6 Seater)", "12-speaker Sony 3D audio", "6-Way Power Driver Seat", "Front Camera"]
      },
      {
        "id": "c4v23",
        "name": "Z8 T 2.2L mHawk CRDI 2WD 7 Seater Diesel AT",
        "price": 2177000,
        "fuelType": "Diesel",
        "transmission": "Automatic",
        "engineCC": 2184,
        "powerBHP": 172,
        "torqueNm": 400,
        "mileage": "16 kmpl",
        "features": ["Wireless Android Auto & Wired Apple Carplay", "DRLs", "Analogue Cum Digital instrument cluster"]
      },
      {
        "id": "c4v24",
        "name": "Z8 L 2L mStallion TGDi 2WD 7 Seater Petrol AT",
        "price": 2179000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1997,
        "powerBHP": 200,
        "torqueNm": 380,
        "mileage": "13 kmpl",
        "features": ["12-speaker Sony 3D audio", "6-Way Power Driver Seat", "Front Camera", "Wireless Charger"]
      },
      {
        "id": "c4v25",
        "name": "Z8 T 2.2L mHawk CRDI 4WD 7 Seater Diesel",
        "price": 2238000,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 2184,
        "powerBHP": 172,
        "torqueNm": 370,
        "mileage": "19 kmpl",
        "features": ["4WD Terrain Options", "Wireless Android Auto & Wired Apple Carplay", "DRLs"]
      },
      {
        "id": "c4v26",
        "name": "Z8 L 2L mStallion TGDi 2WD 6 Seater Petrol AT",
        "price": 2245000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1997,
        "powerBHP": 200,
        "torqueNm": 380,
        "mileage": "14 kmpl",
        "features": ["Captain Seats (6 Seater)", "12-speaker Sony 3D audio", "6-Way Power Driver Seat"]
      },
      {
        "id": "c4v27",
        "name": "Z8 L 2.2L Gen II mHawk 2WD 7 Seater Diesel AT",
        "price": 2277000,
        "fuelType": "Diesel",
        "transmission": "Automatic",
        "engineCC": 2184,
        "powerBHP": 172,
        "torqueNm": 400,
        "mileage": "16 kmpl",
        "features": ["12-speaker Sony 3D audio", "6-Way Power Driver Seat", "Front Camera", "Wireless Charger"]
      },
      {
        "id": "c4v28",
        "name": "Z8 L 2.2L Gen II mHawk 2WD 6 Seater Diesel AT",
        "price": 2298000,
        "fuelType": "Diesel",
        "transmission": "Automatic",
        "engineCC": 2184,
        "powerBHP": 172,
        "torqueNm": 400,
        "mileage": "14 kmpl",
        "features": ["Captain Seats (6 Seater)", "12-speaker Sony 3D audio", "6-Way Power Driver Seat"]
      },
      {
        "id": "c4v29",
        "name": "Z8 L 2.2L Gen II mHawk 4WD 7 Seater Diesel",
        "price": 2341000,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 2184,
        "powerBHP": 172,
        "torqueNm": 370,
        "mileage": "19 kmpl",
        "features": ["4WD Terrain Options", "12-speaker Sony 3D audio", "6-Way Power Driver Seat"]
      },
      {
        "id": "c4v30",
        "name": "Z8 T 2.2L mHawk CRDI 4WD 7 Seater Diesel AT",
        "price": 2388000,
        "fuelType": "Diesel",
        "transmission": "Automatic",
        "engineCC": 2184,
        "powerBHP": 172,
        "torqueNm": 400,
        "mileage": "16 kmpl",
        "features": ["4WD Terrain Options", "Wireless Android Auto & Wired Apple Carplay", "DRLs"]
      },
      {
        "id": "c4v31",
        "name": "Z8 L 2.2L Gen II mHawk 4WD 7 Seater Diesel AT",
        "price": 2495000,
        "fuelType": "Diesel",
        "transmission": "Automatic",
        "engineCC": 2184,
        "powerBHP": 172,
        "torqueNm": 450,
        "mileage": "16 kmpl",
        "features": ["4WD Terrain Options", "12-speaker Sony 3D audio", "6-Way Power Driver Seat", "Front Camera", "Wireless Charger"]
      }
    ],
    "dealerPrices": [
      {
        "dealerId": "d6",
        "dealerName": "Mahindra Ranchi",
        "location": "Ranchi",
        "price": 1380000,
        "discount": 15000,
        "rating": 4.6
      },
      {
        "dealerId": "d7",
        "dealerName": "Mahindra Bokaro",
        "location": "Bokaro",
        "price": 1385000,
        "discount": 12000,
        "rating": 4.3
      }
    ],
    "description": "The Mahindra Scorpio-N is a true SUV icon, combining bold design, powerful performance, and advanced tech for an unmatched driving experience.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 187
  },
  {
    "id": "c5",
    "slug": "toyota-fortuner-2024",
    "category": "car",
    "brand": "Toyota",
    "model": "Fortuner",
    "year": 2024,
    "startingPrice": 3476000,
    "emiFrom": 52140,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-28.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/44709/fortuner-exterior-right-side-view-3.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/44709/fortuner-exterior-right-rear-three-quarter-2.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/44709/fortuner-exterior-rear-view-7.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/44709/fortuner-exterior-left-rear-three-quarter-4.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-28.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "Diesel"
    ],
    "transmissions": [
      "Automatic"
    ],
    "mileage": "14.12 kmpl",
    "seatingCapacity": 7,
    "bootSpaceL": 800,
    "engineCC": 2755,
    "powerBHP": 201,
    "torqueNm": 500,
    "safetyRating": 5,
    "rating": 4.8,
    "reviewCount": 1987,
    "colors": [
      "White Pearl Crystal Shine",
      "Attitude Black",
      "Super White",
      "Silver Metallic",
      "Red Mica Metallic"
    ],
    "features": [
      "7 Airbags",
      "Toyota Safety Sense",
      "Panoramic View Monitor",
      "4WD",
      "Cooled & Heated Seats",
      "JBL Sound",
      "10.1\" Touchscreen",
      "AUTOPARK"
    ],
    "variants": [
      {
        "id": "c5v1",
        "name": "4x2 AT",
        "price": 3329900,
        "fuelType": "Diesel",
        "transmission": "Automatic",
        "engineCC": 2755,
        "powerBHP": 201,
        "torqueNm": 500,
        "mileageKmpl": 14.22,
        "mileage": "14.22 kmpl",
        "features": ["7 Airbags", "ABS with EBD", "10.1in Touchscreen", "Wireless Charger", "Auto Climate Control", "Cruise Control", "JBL Sound System", "LED Headlamps"],
        "additionalFeaturesOverBase": []
      },
      {
        "id": "c5v2",
        "name": "4x2 AT Petrol",
        "price": 3549900,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 2694,
        "powerBHP": 201,
        "torqueNm": 350,
        "mileageKmpl": 10.16,
        "mileage": "10.16 kmpl",
        "features": ["7 Airbags", "ABS with EBD", "10.1in Touchscreen", "Wireless Charger", "Auto Climate Control", "Cruise Control", "JBL Sound System", "LED Headlamps"],
        "additionalFeaturesOverBase": ["Petrol Engine"]
      },
      {
        "id": "c5v3",
        "name": "4x4 AT",
        "price": 3699900,
        "fuelType": "Diesel",
        "transmission": "Automatic",
        "engineCC": 2755,
        "powerBHP": 201,
        "torqueNm": 500,
        "mileageKmpl": 14.12,
        "mileage": "14.12 kmpl",
        "features": ["7 Airbags", "ABS with EBD", "10.1in Touchscreen", "Wireless Charger", "Auto Climate Control", "Cruise Control", "JBL Sound System", "LED Headlamps", "4WD with Multi-Terrain Select", "Downhill Assist Control"],
        "additionalFeaturesOverBase": ["4WD System", "Multi-Terrain Select", "Downhill Assist Control"]
      },
      {
        "id": "c5v4",
        "name": "4x4 AT Legender",
        "price": 4019900,
        "fuelType": "Diesel",
        "transmission": "Automatic",
        "engineCC": 2755,
        "powerBHP": 201,
        "torqueNm": 500,
        "mileageKmpl": 14.12,
        "mileage": "14.12 kmpl",
        "features": ["7 Airbags", "ABS with EBD", "10.1in Touchscreen", "Wireless Charger", "Auto Climate Control", "Cooled & Heated Front Seats", "JBL 11-Speaker Sound", "LED Headlamps", "4WD", "Panoramic View Monitor", "Toyota Safety Sense"],
        "additionalFeaturesOverBase": ["Cooled & Heated Front Seats", "11-Speaker JBL Audio", "Toyota Safety Sense ADAS", "Panoramic View Monitor"]
      },
      {
        "id": "c5v5",
        "name": "GR Sport",
        "price": 4499900,
        "fuelType": "Diesel",
        "transmission": "Automatic",
        "engineCC": 2755,
        "powerBHP": 201,
        "torqueNm": 500,
        "mileageKmpl": 14.12,
        "mileage": "14.12 kmpl",
        "features": ["7 Airbags", "ABS with EBD", "10.1in Touchscreen", "Wireless Charger", "Auto Climate Control", "GR Sport Body Kit", "Red Brake Calipers", "Cooled & Heated Front Seats", "JBL 11-Speaker Sound", "4WD", "Toyota Safety Sense"],
        "additionalFeaturesOverBase": ["GR Sport Body Kit", "Red Brake Calipers", "Sporty Suspension Tuning", "GR Badging"]
      }
    ],
    "dealerPrices": [
      {
        "dealerId": "d8",
        "dealerName": "Toyota Ranchi",
        "location": "Ranchi",
        "price": 3340000,
        "discount": 50000,
        "rating": 4.8
      }
    ],
    "description": "The Toyota Fortuner is the undisputed king of premium SUVs, offering legendary off-road capability with refined on-road luxury.",
    "pros": [
      "Powerful 2.8L diesel engine with massive torque",
      "Legendary bulletproof reliability and high resale value",
      "Outstanding off-road capability with robust 4WD system"
    ],
    "cons": [
      "Bumpy and stiff ride quality, especially at lower speeds",
      "Very premium pricing compared to actual features offered",
      "Heavy steering requires effort to navigate in city traffic"
    ],
    "groundClearance": 220
  },
  {
    "id": "c6",
    "slug": "honda-city-2024",
    "category": "car",
    "brand": "Honda",
    "model": "City",
    "year": 2024,
    "startingPrice": 1199000,
    "emiFrom": 17985,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/219846/city-facelift-exterior-right-front-three-quarter-2.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/219846/city-facelift-exterior-right-front-three-quarter-24.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/219846/city-facelift-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/219846/city-facelift-exterior-right-rear-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/219846/city-facelift-exterior-rear-view-28.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/219846/city-facelift-exterior-left-rear-three-quarter.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/219846/city-facelift-exterior-right-front-three-quarter-2.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "Hybrid"
    ],
    "transmissions": [
      "Manual",
      "CVT"
    ],
    "mileage": "18.4 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 506,
    "engineCC": 1498,
    "powerBHP": 121,
    "torqueNm": 145,
    "safetyRating": 4,
    "rating": 4.6,
    "reviewCount": 2187,
    "colors": [
      "Platinum White Pearl",
      "Lunar Silver Metallic",
      "Radiant Red Metallic",
      "Obsidian Blue Pearl",
      "Golden Brown Metallic"
    ],
    "features": [
      "6 Airbags",
      "Honda Sensing",
      "Sunroof",
      "LaneWatch Camera",
      "Wireless Charger",
      "Ambient Lighting",
      "8\" Display",
      "LKAS"
    ],
    "variants": [
      {
        "id": "c6v1",
        "name": "SV MT",
        "price": 1199000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1498,
        "powerBHP": 121,
        "torqueNm": 145,
        "mileageKmpl": 17.8,
        "mileage": "17.8 kmpl",
        "features": ["Dual Airbags", "ABS", "Rear Parking Sensors", "Power Windows", "AC", "8in Touchscreen"],
        "additionalFeaturesOverBase": []
      },
      {
        "id": "c6v2",
        "name": "V MT",
        "price": 1279000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1498,
        "powerBHP": 121,
        "torqueNm": 145,
        "mileageKmpl": 17.8,
        "mileage": "17.8 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Parking Camera", "Power Windows", "AC", "8in Touchscreen", "LaneWatch Camera"],
        "additionalFeaturesOverBase": ["6 Airbags", "LaneWatch Camera", "LED DRLs"]
      },
      {
        "id": "c6v3",
        "name": "V CVT",
        "price": 1389000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1498,
        "powerBHP": 121,
        "torqueNm": 145,
        "mileageKmpl": 18.4,
        "mileage": "18.4 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Parking Camera", "Power Windows", "AC", "8in Touchscreen", "LaneWatch Camera", "CVT Gearbox"],
        "additionalFeaturesOverBase": ["CVT Automatic Gearbox"]
      },
      {
        "id": "c6v4",
        "name": "VX MT",
        "price": 1469000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1498,
        "powerBHP": 121,
        "torqueNm": 145,
        "mileageKmpl": 17.8,
        "mileage": "17.8 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Parking Camera", "Auto Climate Control", "8in Touchscreen", "LaneWatch Camera", "Wireless Charger", "Sunroof"],
        "additionalFeaturesOverBase": ["Sunroof", "Wireless Charger", "Auto Climate Control"]
      },
      {
        "id": "c6v5",
        "name": "VX CVT",
        "price": 1569000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1498,
        "powerBHP": 121,
        "torqueNm": 145,
        "mileageKmpl": 18.4,
        "mileage": "18.4 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Parking Camera", "Auto Climate Control", "8in Touchscreen", "LaneWatch Camera", "Wireless Charger", "Sunroof", "CVT Gearbox"],
        "additionalFeaturesOverBase": ["CVT Automatic Gearbox"]
      },
      {
        "id": "c6v6",
        "name": "ZX MT",
        "price": 1599000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1498,
        "powerBHP": 121,
        "torqueNm": 145,
        "mileageKmpl": 17.8,
        "mileage": "17.8 kmpl",
        "features": ["6 Airbags", "Honda Sensing ADAS", "Rear Parking Camera", "Auto Climate Control", "8in Touchscreen", "LaneWatch Camera", "Wireless Charger", "Sunroof", "Ambient Lighting"],
        "additionalFeaturesOverBase": ["Honda Sensing ADAS", "Ambient Lighting", "Connected Car Features"]
      },
      {
        "id": "c6v7",
        "name": "ZX CVT",
        "price": 1699000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1498,
        "powerBHP": 121,
        "torqueNm": 145,
        "mileageKmpl": 18.4,
        "mileage": "18.4 kmpl",
        "features": ["6 Airbags", "Honda Sensing ADAS", "Rear Parking Camera", "Auto Climate Control", "8in Touchscreen", "LaneWatch Camera", "Wireless Charger", "Sunroof", "Ambient Lighting", "CVT Gearbox"],
        "additionalFeaturesOverBase": ["CVT Automatic Gearbox"]
      },
      {
        "id": "c6v8",
        "name": "ZX Hybrid CVT",
        "price": 1999000,
        "fuelType": "Hybrid",
        "transmission": "Automatic",
        "engineCC": 1498,
        "powerBHP": 126,
        "torqueNm": 253,
        "mileageKmpl": 26.5,
        "mileage": "26.5 kmpl",
        "features": ["6 Airbags", "Honda Sensing ADAS", "Rear Parking Camera", "Auto Climate Control", "8in Touchscreen", "LaneWatch Camera", "Wireless Charger", "Sunroof", "Ambient Lighting", "e-HEV Hybrid System"],
        "additionalFeaturesOverBase": ["e-HEV Hybrid Drivetrain", "26.5 kmpl ARAI Mileage", "Combined 126bhp System Power"]
      }
    ],
    "dealerPrices": [
      {
        "dealerId": "d9",
        "dealerName": "Honda Cars Ranchi",
        "location": "Ranchi",
        "price": 1205000,
        "discount": 20000,
        "rating": 4.5
      },
      {
        "dealerId": "d10",
        "dealerName": "Honda Cars Jamshedpur",
        "location": "Jamshedpur",
        "price": 1210000,
        "discount": 18000,
        "rating": 4.7
      }
    ],
    "description": "The Honda City remains India's favourite sedan, offering a perfect blend of comfort, performance, and premium features at an accessible price.",
    "pros": [
      "Low-slung aerodynamic shape offers excellent high-speed stability",
      "Generous passenger legroom and comfortable rear bench",
      "Large luggage boot space for family bags"
    ],
    "cons": [
      "Lower ground clearance can cause scraping on tall speedbreakers",
      "Low ingress and egress can be inconvenient for elderly passengers",
      "Parking in congested city areas can be tricky due to length"
    ],
    "groundClearance": 165
  },
  {
    "id": "c-brezza",
    "slug": "maruti-suzuki-brezza-2024",
    "category": "car",
    "brand": "Maruti Suzuki",
    "model": "Brezza",
    "year": 2024,
    "startingPrice": 739900,
    "emiFrom": 11099,
    "images": [
      "https://static-cdn.cars24.com/prod/new-car-cms/root/2024/10/21/4aa102d0-96fb-4ee8-aad2-68f1425ec263-Brezza.png"
    ],
    "thumbnailUrl": "https://static-cdn.cars24.com/prod/new-car-cms/root/2024/10/21/4aa102d0-96fb-4ee8-aad2-68f1425ec263-Brezza.png",
    "fuelTypes": [
      "Petrol",
      "CNG"
    ],
    "transmissions": [
      "Manual",
      "Automatic"
    ],
    "mileage": "19.8 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 328,
    "engineCC": 1462,
    "powerBHP": 101.6,
    "torqueNm": 136.8,
    "safetyRating": 4,
    "rating": 4.4,
    "reviewCount": 1540,
    "colors": [
      "Sizzling Red",
      "Brave Khaki",
      "Exuberant Blue",
      "Magma Grey",
      "Splendid Silver",
      "Pearl Arctic White"
    ],
    "features": [
      "6 Airbags",
      "Sunroof",
      "Wireless Charger",
      "Rear Camera",
      "Cruise Control",
      "360° Camera"
    ],
    "variants": [
      {
        "id": "cbrezzav1",
        "name": "LXi MT",
        "price": 834000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1462,
        "powerBHP": 101.6,
        "torqueNm": 136.8,
        "mileageKmpl": 19.89,
        "mileage": "19.89 kmpl",
        "features": ["Dual Airbags", "ABS with EBD", "Rear Parking Sensors", "Power Windows", "Keyless Entry", "AC"],
        "additionalFeaturesOverBase": []
      },
      {
        "id": "cbrezzav2",
        "name": "VXi MT",
        "price": 984000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1462,
        "powerBHP": 101.6,
        "torqueNm": 136.8,
        "mileageKmpl": 19.89,
        "mileage": "19.89 kmpl",
        "features": ["6 Airbags", "ABS with EBD", "Rear Parking Camera", "Power Windows", "SmartPlay Pro+ 9in", "Cruise Control"],
        "additionalFeaturesOverBase": ["6 Airbags", "Rear Camera", "SmartPlay Pro+", "Cruise Control"]
      },
      {
        "id": "cbrezzav3",
        "name": "VXi AT",
        "price": 1049000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1462,
        "powerBHP": 101.6,
        "torqueNm": 136.8,
        "mileageKmpl": 19.8,
        "mileage": "19.8 kmpl",
        "features": ["6 Airbags", "ABS with EBD", "Rear Parking Camera", "Power Windows", "SmartPlay Pro+ 9in", "Cruise Control", "AT Gearbox"],
        "additionalFeaturesOverBase": ["Automatic Torque Converter Gearbox"]
      },
      {
        "id": "cbrezzav4",
        "name": "ZXi MT",
        "price": 1149000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1462,
        "powerBHP": 101.6,
        "torqueNm": 136.8,
        "mileageKmpl": 19.89,
        "mileage": "19.89 kmpl",
        "features": ["6 Airbags", "ABS with EBD", "360° Camera", "Auto Climate Control", "SmartPlay Pro+ 9in", "Cruise Control", "Wireless Charger", "Sunroof"],
        "additionalFeaturesOverBase": ["360° Camera", "Sunroof", "Wireless Charger", "Auto Climate Control"]
      },
      {
        "id": "cbrezzav5",
        "name": "ZXi AT",
        "price": 1229000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1462,
        "powerBHP": 101.6,
        "torqueNm": 136.8,
        "mileageKmpl": 19.8,
        "mileage": "19.8 kmpl",
        "features": ["6 Airbags", "ABS with EBD", "360° Camera", "Auto Climate Control", "SmartPlay Pro+ 9in", "Cruise Control", "Wireless Charger", "Sunroof", "AT Gearbox"],
        "additionalFeaturesOverBase": ["Automatic Torque Converter Gearbox"]
      },
      {
        "id": "cbrezzav6",
        "name": "ZXi+ MT",
        "price": 1299000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1462,
        "powerBHP": 101.6,
        "torqueNm": 136.8,
        "mileageKmpl": 19.89,
        "mileage": "19.89 kmpl",
        "features": ["6 Airbags", "ABS with EBD", "360° Camera", "Auto Climate Control", "SmartPlay Pro+ 9in", "Cruise Control", "Wireless Charger", "Sunroof", "Heads-Up Display", "Connected Car"],
        "additionalFeaturesOverBase": ["Heads-Up Display", "Drive Modes", "Connected Car Features"]
      },
      {
        "id": "cbrezzav7",
        "name": "ZXi+ AT",
        "price": 1398000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1462,
        "powerBHP": 101.6,
        "torqueNm": 136.8,
        "mileageKmpl": 19.8,
        "mileage": "19.8 kmpl",
        "features": ["6 Airbags", "ABS with EBD", "360° Camera", "Auto Climate Control", "SmartPlay Pro+ 9in", "Cruise Control", "Wireless Charger", "Sunroof", "Heads-Up Display", "Connected Car", "AT Gearbox"],
        "additionalFeaturesOverBase": ["Automatic Torque Converter Gearbox"]
      },
      {
        "id": "cbrezzav8",
        "name": "ZXi+ CNG",
        "price": 1399000,
        "fuelType": "CNG",
        "transmission": "Manual",
        "engineCC": 1462,
        "powerBHP": 87.8,
        "torqueNm": 121.5,
        "mileageKmpl": 25.51,
        "mileage": "25.51 km/kg",
        "features": ["6 Airbags", "ABS with EBD", "360° Camera", "Auto Climate Control", "SmartPlay Pro+ 9in", "Cruise Control", "Wireless Charger", "Sunroof", "Factory-Fitted CNG"],
        "additionalFeaturesOverBase": ["Factory-Fitted CNG", "Bi-Fuel Capability", "25.51 km/kg Mileage"]
      }
    ],
    "dealerPrices": [
      {
        "dealerId": "d11",
        "dealerName": "Maruti True Value Ranchi",
        "location": "Ranchi",
        "price": 840000,
        "discount": 15000,
        "rating": 4.6
      },
      {
        "dealerId": "d12",
        "dealerName": "Sundaram Motors Dhanbad",
        "location": "Dhanbad",
        "price": 836000,
        "discount": 18000,
        "rating": 4.4
      }
    ],
    "description": "The Maruti Suzuki Brezza is a popular compact SUV with a spacious cabin, premium features, and a reliable, fuel-efficient engine.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 200
  },
  {
    "id": "c-bolero",
    "slug": "mahindra-bolero-2024",
    "category": "car",
    "brand": "Mahindra",
    "model": "Bolero",
    "year": 2024,
    "startingPrice": 799500,
    "emiFrom": 11993,
    "images": [
      "https://static-cdn.cars24.com/prod/vehicles/mahindra/bolero/bolero-car-image-qJEVB99AoAJt4nbB.png"
    ],
    "thumbnailUrl": "https://static-cdn.cars24.com/prod/vehicles/mahindra/bolero/bolero-car-image-qJEVB99AoAJt4nbB.png",
    "fuelTypes": [
      "Diesel"
    ],
    "transmissions": [
      "Manual"
    ],
    "mileage": "16.0 kmpl",
    "seatingCapacity": 7,
    "bootSpaceL": 384,
    "engineCC": 1493,
    "powerBHP": 75,
    "torqueNm": 210,
    "safetyRating": 3,
    "rating": 4.3,
    "reviewCount": 980,
    "colors": [
      "Mist Silver",
      "Lakeside Brown",
      "Diamond White"
    ],
    "features": [
      "Rear Camera",
      "Power Windows",
      "Digital Instrument Cluster",
      "Keyless Entry"
    ],
    "variants": [
      {
        "id": "cbolerov1",
        "name": "B4 MT",
        "price": 979000,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 1493,
        "powerBHP": 75,
        "torqueNm": 210,
        "mileageKmpl": 16.0,
        "mileage": "16.0 kmpl",
        "features": ["Dual Airbags", "ABS", "Power Windows", "AC", "Manual Windows (Rear)"],
        "additionalFeaturesOverBase": []
      },
      {
        "id": "cbolerov2",
        "name": "B6 MT",
        "price": 1030000,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 1493,
        "powerBHP": 75,
        "torqueNm": 210,
        "mileageKmpl": 16.0,
        "mileage": "16.0 kmpl",
        "features": ["Dual Airbags", "ABS", "Power Windows", "AC", "Keyless Entry", "Rear Parking Sensors"],
        "additionalFeaturesOverBase": ["Keyless Entry", "Rear Parking Sensors"]
      },
      {
        "id": "cbolerov3",
        "name": "B6(O) MT",
        "price": 1081000,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 1493,
        "powerBHP": 75,
        "torqueNm": 210,
        "mileageKmpl": 16.0,
        "mileage": "16.0 kmpl",
        "features": ["Dual Airbags", "ABS", "Power Windows", "AC", "Keyless Entry", "Rear Parking Camera", "Digital Instrument Cluster"],
        "additionalFeaturesOverBase": ["Rear Parking Camera", "Digital Instrument Cluster"]
      }
    ],
    "dealerPrices": [
      {
        "dealerId": "d13",
        "dealerName": "Mahindra Ranchi",
        "location": "Ranchi",
        "price": 985000,
        "discount": 10000,
        "rating": 4.5
      }
    ],
    "description": "The Mahindra Bolero is a legendary, rugged SUV built to conquer tough terrains with its robust build and dependable diesel engine.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 180
  },
  {
    "id": "c-kylaq",
    "slug": "skoda-kylaq-2024",
    "category": "car",
    "brand": "Skoda",
    "model": "Kylaq",
    "year": 2024,
    "startingPrice": 755000,
    "emiFrom": 11325,
    "isNew": true,
    "images": [
      "https://static-cdn.cars24.com/prod/new-car-cms/Skoda/Kylaq/2024/11/06/151ca1d1-9d5b-4152-a8b0-3c192542dc1f-6.png"
    ],
    "thumbnailUrl": "https://static-cdn.cars24.com/prod/new-car-cms/Skoda/Kylaq/2024/11/06/151ca1d1-9d5b-4152-a8b0-3c192542dc1f-6.png",
    "fuelTypes": [
      "Petrol"
    ],
    "transmissions": [
      "Manual",
      "Automatic"
    ],
    "mileage": "18.5 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 380,
    "engineCC": 999,
    "powerBHP": 115,
    "torqueNm": 178,
    "safetyRating": 5,
    "rating": 4.5,
    "reviewCount": 320,
    "colors": [
      "Carbon Steel",
      "Candy White",
      "Brilliant Silver",
      "Tornado Red"
    ],
    "features": [
      "6 Airbags",
      "Sunroof",
      "Wireless Charger",
      "Rear Camera",
      "Cruise Control",
      "ADAS"
    ],
    "variants": [
      {
        "id": "ckylaqv1",
        "name": "Classic MT",
        "price": 789000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 999,
        "powerBHP": 115,
        "torqueNm": 178,
        "mileageKmpl": 18.5,
        "mileage": "18.5 kmpl",
        "features": ["Dual Airbags", "ABS", "Rear Camera", "Power Windows", "Digital Cluster", "AC"],
        "additionalFeaturesOverBase": []
      },
      {
        "id": "ckylaqv2",
        "name": "Active MT",
        "price": 899000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 999,
        "powerBHP": 115,
        "torqueNm": 178,
        "mileageKmpl": 18.5,
        "mileage": "18.5 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "Power Windows", "8in Touchscreen", "Cruise Control"],
        "additionalFeaturesOverBase": ["6 Airbags", "8in Touchscreen", "Cruise Control"]
      },
      {
        "id": "ckylaqv3",
        "name": "Ambition MT",
        "price": 999000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 999,
        "powerBHP": 115,
        "torqueNm": 178,
        "mileageKmpl": 18.5,
        "mileage": "18.5 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "Auto Climate Control", "8in Touchscreen", "Cruise Control", "Sunroof", "Wireless Charger"],
        "additionalFeaturesOverBase": ["Auto Climate Control", "Sunroof", "Wireless Charger"]
      },
      {
        "id": "ckylaqv4",
        "name": "Signature MT",
        "price": 1109000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 999,
        "powerBHP": 115,
        "torqueNm": 178,
        "mileageKmpl": 18.5,
        "mileage": "18.5 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "Auto Climate Control", "10.25in Touchscreen", "Cruise Control", "Sunroof", "Wireless Charger", "ADAS Level 2", "Connected Car"],
        "additionalFeaturesOverBase": ["10.25in Touchscreen", "ADAS Level 2", "Connected Car"]
      },
      {
        "id": "ckylaqv5",
        "name": "Ambition AT",
        "price": 1099000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 999,
        "powerBHP": 115,
        "torqueNm": 178,
        "mileageKmpl": 18.5,
        "mileage": "18.5 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "Auto Climate Control", "8in Touchscreen", "Cruise Control", "Sunroof", "Wireless Charger", "6-Speed AT Gearbox"],
        "additionalFeaturesOverBase": ["6-Speed Automatic Gearbox"]
      },
      {
        "id": "ckylaqv6",
        "name": "Signature AT",
        "price": 1240000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 999,
        "powerBHP": 115,
        "torqueNm": 178,
        "mileageKmpl": 18.5,
        "mileage": "18.5 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "Auto Climate Control", "10.25in Touchscreen", "Cruise Control", "Sunroof", "Wireless Charger", "ADAS Level 2", "Connected Car", "6-Speed AT Gearbox"],
        "additionalFeaturesOverBase": ["6-Speed Automatic Gearbox"]
      }
    ],
    "dealerPrices": [
      {
        "dealerId": "d14",
        "dealerName": "Skoda Ranchi",
        "location": "Ranchi",
        "price": 795000,
        "discount": 5000,
        "rating": 4.6
      }
    ],
    "description": "The Skoda Kylaq brings European build quality, turbocharged performance, and smart features to the sub-compact SUV segment.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c-taisor",
    "slug": "toyota-urban-cruiser-taisor-2024",
    "category": "car",
    "brand": "Toyota",
    "model": "Urban Cruiser Taisor",
    "year": 2024,
    "startingPrice": 743000,
    "emiFrom": 11145,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/132427/taisor-exterior-right-front-three-quarter-41.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/132427/taisor-exterior-right-front-three-quarter-2.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/132427/taisor-exterior-right-front-three-quarter-38.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/132427/taisor-exterior-right-side-view-2.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/132427/taisor-exterior-right-rear-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/132427/taisor-exterior-right-rear-three-quarter-3.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/132427/taisor-exterior-right-front-three-quarter-41.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "CNG"
    ],
    "transmissions": [
      "Manual",
      "Automatic"
    ],
    "mileage": "22.8 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 308,
    "engineCC": 1197,
    "powerBHP": 89.7,
    "torqueNm": 113,
    "safetyRating": 4,
    "rating": 4.4,
    "reviewCount": 450,
    "colors": [
      "Lucent Orange",
      "Sportin Red",
      "Gaming Grey",
      "Cafe White",
      "Enticing Silver"
    ],
    "features": [
      "6 Airbags",
      "Sunroof",
      "Wireless Charger",
      "Rear Camera",
      "Cruise Control",
      "360° Camera"
    ],
    "variants": [
      {
        "id": "ctaisorv1",
        "name": "E 1.2 MT",
        "price": 774000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1197,
        "powerBHP": 89.7,
        "torqueNm": 113,
        "mileageKmpl": 22.85,
        "mileage": "22.85 kmpl",
        "features": ["Dual Airbags", "ABS", "Rear Camera", "Power Windows", "AC"],
        "additionalFeaturesOverBase": []
      },
      {
        "id": "ctaisorv2",
        "name": "S 1.2 MT",
        "price": 875000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1197,
        "powerBHP": 89.7,
        "torqueNm": 113,
        "mileageKmpl": 22.85,
        "mileage": "22.85 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "Power Windows", "9in Touchscreen", "Cruise Control"],
        "additionalFeaturesOverBase": ["6 Airbags", "9in Touchscreen", "Cruise Control"]
      },
      {
        "id": "ctaisorv3",
        "name": "G 1.2 MT",
        "price": 992000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1197,
        "powerBHP": 89.7,
        "torqueNm": 113,
        "mileageKmpl": 22.85,
        "mileage": "22.85 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "Auto Climate Control", "9in Touchscreen", "Cruise Control", "Wireless Charger", "Sunroof"],
        "additionalFeaturesOverBase": ["Sunroof", "Wireless Charger", "Auto Climate Control"]
      },
      {
        "id": "ctaisorv4",
        "name": "G 1.2 AMT",
        "price": 1048000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1197,
        "powerBHP": 89.7,
        "torqueNm": 113,
        "mileageKmpl": 22.8,
        "mileage": "22.8 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "Auto Climate Control", "9in Touchscreen", "Cruise Control", "Wireless Charger", "Sunroof", "AMT Gearbox"],
        "additionalFeaturesOverBase": ["AMT Automatic Gearbox"]
      },
      {
        "id": "ctaisorv5",
        "name": "V 1.0 Turbo MT",
        "price": 1099000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 998,
        "powerBHP": 99,
        "torqueNm": 148,
        "mileageKmpl": 21.5,
        "mileage": "21.5 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "Auto Climate Control", "9in Touchscreen", "Cruise Control", "Wireless Charger", "Sunroof", "ADAS"],
        "additionalFeaturesOverBase": ["1.0 Turbo Engine (99bhp)", "ADAS Level 2"]
      },
      {
        "id": "ctaisorv6",
        "name": "V 1.0 Turbo AT",
        "price": 1166000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 998,
        "powerBHP": 99,
        "torqueNm": 148,
        "mileageKmpl": 21.5,
        "mileage": "21.5 kmpl",
        "features": ["6 Airbags", "ABS", "360° Camera", "Auto Climate Control", "9in Touchscreen", "Cruise Control", "Wireless Charger", "Sunroof", "ADAS", "AT Gearbox"],
        "additionalFeaturesOverBase": ["6-Speed Automatic", "360° Camera"]
      },
      {
        "id": "ctaisorv7",
        "name": "V 1.0 Turbo AT Gravity",
        "price": 1288000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 998,
        "powerBHP": 99,
        "torqueNm": 148,
        "mileageKmpl": 21.5,
        "mileage": "21.5 kmpl",
        "features": ["6 Airbags", "ABS", "360° Camera", "Auto Climate Control", "9in Touchscreen", "Cruise Control", "Wireless Charger", "Sunroof", "ADAS", "AT Gearbox", "Gravity Pack"],
        "additionalFeaturesOverBase": ["Gravity Edition Exterior Pack"]
      }
    ],
    "dealerPrices": [
      {
        "dealerId": "d15",
        "dealerName": "Toyota Ranchi",
        "location": "Ranchi",
        "price": 780000,
        "discount": 10000,
        "rating": 4.7
      }
    ],
    "description": "The Toyota Urban Cruiser Taisor combines sleek crossover styling, premium cabin comfort, and reliable petrol engine options.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c-aircross",
    "slug": "citroen-aircross-2024",
    "category": "car",
    "brand": "Citroen",
    "model": "Aircross",
    "year": 2024,
    "startingPrice": 889000,
    "emiFrom": 13335,
    "images": [
      "https://static-cdn.cars24.com/prod/new-car-cms/Citroen/C3-Aircross/2024/04/12/42aa563a-5dcf-4b9a-9848-d63d08436772-Citroen_C3-Aircross_Color-Image.png"
    ],
    "thumbnailUrl": "https://static-cdn.cars24.com/prod/new-car-cms/Citroen/C3-Aircross/2024/04/12/42aa563a-5dcf-4b9a-9848-d63d08436772-Citroen_C3-Aircross_Color-Image.png",
    "fuelTypes": [
      "Petrol"
    ],
    "transmissions": [
      "Manual",
      "Automatic"
    ],
    "mileage": "18.5 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 444,
    "engineCC": 1199,
    "powerBHP": 109,
    "torqueNm": 190,
    "safetyRating": 4,
    "rating": 4.2,
    "reviewCount": 280,
    "colors": [
      "Polar White",
      "Steel Grey",
      "Platinum Grey",
      "Cosmo Blue"
    ],
    "features": [
      "6 Airbags",
      "Sunroof",
      "Rear Camera",
      "Cruise Control",
      "Ventilated Seats"
    ],
    "variants": [
      {
        "id": "caircrossv1",
        "name": "You 1.2 Turbo MT",
        "price": 849000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1199,
        "powerBHP": 109,
        "torqueNm": 190,
        "mileageKmpl": 19.8,
        "mileage": "19.8 kmpl",
        "features": ["2 Airbags", "ABS", "Rear Camera", "Power Windows", "AC"],
        "additionalFeaturesOverBase": []
      },
      {
        "id": "caircrossv2",
        "name": "You Plus 1.2 Turbo MT",
        "price": 1049000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1199,
        "powerBHP": 109,
        "torqueNm": 190,
        "mileageKmpl": 19.8,
        "mileage": "19.8 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "Auto Climate Control", "10in Touchscreen", "Cruise Control"],
        "additionalFeaturesOverBase": ["6 Airbags", "10in Touchscreen", "Auto Climate Control"]
      },
      {
        "id": "caircrossv3",
        "name": "Plus 1.2 Turbo MT",
        "price": 1149000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1199,
        "powerBHP": 109,
        "torqueNm": 190,
        "mileageKmpl": 19.8,
        "mileage": "19.8 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "Auto Climate Control", "10in Touchscreen", "Cruise Control", "Sunroof", "Wireless Charger"],
        "additionalFeaturesOverBase": ["Sunroof", "Wireless Charger"]
      },
      {
        "id": "caircrossv4",
        "name": "Max 1.2 Turbo MT 7 STR",
        "price": 1249000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1199,
        "powerBHP": 109,
        "torqueNm": 190,
        "mileageKmpl": 19.8,
        "mileage": "19.8 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "Auto Climate Control", "10in Touchscreen", "Cruise Control", "Sunroof", "Wireless Charger", "Ventilated Seats", "7 Seater"],
        "additionalFeaturesOverBase": ["Ventilated Front Seats", "7-Seater Configuration"]
      },
      {
        "id": "caircrossv5",
        "name": "Max 1.2 Turbo AT 7 STR",
        "price": 1399000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1199,
        "powerBHP": 109,
        "torqueNm": 190,
        "mileageKmpl": 18.5,
        "mileage": "18.5 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "Auto Climate Control", "10in Touchscreen", "Cruise Control", "Sunroof", "Wireless Charger", "Ventilated Seats", "7 Seater", "AT Gearbox"],
        "additionalFeaturesOverBase": ["6-Speed Automatic Gearbox"]
      }
    ],
    "dealerPrices": [
      {
        "dealerId": "d16",
        "dealerName": "Citroen Ranchi",
        "location": "Ranchi",
        "price": 855000,
        "discount": 25000,
        "rating": 4.4
      }
    ],
    "description": "The Citroen Aircross offers outstanding ride comfort, distinctive design styling, and a powerful turbo-petrol engine.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c-basalt",
    "slug": "citroen-basalt-2024",
    "category": "car",
    "brand": "Citroen",
    "model": "Basalt",
    "year": 2024,
    "startingPrice": 855000,
    "emiFrom": 12825,
    "isNew": true,
    "images": [
      "https://static-cdn.cars24.com/prod/new-car-cms/Citroen/Basalt/2024/08/09/90dc1cf7-9f35-4fe0-808d-be901b2b579e-6-_2_.png"
    ],
    "thumbnailUrl": "https://static-cdn.cars24.com/prod/new-car-cms/Citroen/Basalt/2024/08/09/90dc1cf7-9f35-4fe0-808d-be901b2b579e-6-_2_.png",
    "fuelTypes": [
      "Petrol"
    ],
    "transmissions": [
      "Manual",
      "Automatic"
    ],
    "mileage": "18.0 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 470,
    "engineCC": 1199,
    "powerBHP": 109,
    "torqueNm": 205,
    "safetyRating": 4,
    "rating": 4.3,
    "reviewCount": 310,
    "colors": [
      "Polar White",
      "Steel Grey",
      "Platinum Grey",
      "Cosmo Blue"
    ],
    "features": [
      "6 Airbags",
      "Sunroof",
      "Rear Camera",
      "Cruise Control",
      "Wireless Charger"
    ],
    "variants": [
      {
        "id": "cbasaltv1",
        "name": "You 1.2 MT",
        "price": 799000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1199,
        "powerBHP": 81,
        "torqueNm": 115,
        "mileageKmpl": 19.4,
        "mileage": "19.4 kmpl",
        "features": ["2 Airbags", "ABS", "Rear Camera", "Power Windows", "AC"],
        "additionalFeaturesOverBase": []
      },
      {
        "id": "cbasaltv2",
        "name": "You Plus 1.2 Turbo MT",
        "price": 999000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1199,
        "powerBHP": 109,
        "torqueNm": 205,
        "mileageKmpl": 18.0,
        "mileage": "18.0 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "Auto Climate Control", "10in Touchscreen", "Cruise Control"],
        "additionalFeaturesOverBase": ["6 Airbags", "1.2 Turbo Engine (109bhp)", "10in Touchscreen"]
      },
      {
        "id": "cbasaltv3",
        "name": "Plus 1.2 Turbo MT",
        "price": 1149000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1199,
        "powerBHP": 109,
        "torqueNm": 205,
        "mileageKmpl": 18.0,
        "mileage": "18.0 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "Auto Climate Control", "10in Touchscreen", "Cruise Control", "Sunroof", "Wireless Charger"],
        "additionalFeaturesOverBase": ["Sunroof", "Wireless Charger"]
      },
      {
        "id": "cbasaltv4",
        "name": "Max 1.2 Turbo MT",
        "price": 1269000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1199,
        "powerBHP": 109,
        "torqueNm": 205,
        "mileageKmpl": 18.0,
        "mileage": "18.0 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "Auto Climate Control", "10in Touchscreen", "Cruise Control", "Sunroof", "Wireless Charger", "Ventilated Seats"],
        "additionalFeaturesOverBase": ["Ventilated Front Seats"]
      },
      {
        "id": "cbasaltv5",
        "name": "Max 1.2 Turbo AT",
        "price": 1379000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1199,
        "powerBHP": 109,
        "torqueNm": 205,
        "mileageKmpl": 17.5,
        "mileage": "17.5 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "Auto Climate Control", "10in Touchscreen", "Cruise Control", "Sunroof", "Wireless Charger", "Ventilated Seats", "AT Gearbox"],
        "additionalFeaturesOverBase": ["6-Speed Automatic Gearbox"]
      }
    ],
    "dealerPrices": [
      {
        "dealerId": "d17",
        "dealerName": "Citroen Jamshedpur",
        "location": "Jamshedpur",
        "price": 805000,
        "discount": 20000,
        "rating": 4.5
      }
    ],
    "description": "The Citroen Basalt is a stylish coupe-SUV combining a sporty roofline, massive boot space, and an incredibly comfortable ride.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c-thar",
    "slug": "mahindra-thar-2024",
    "category": "car",
    "brand": "Mahindra",
    "model": "Thar",
    "year": 2024,
    "startingPrice": 1032000,
    "emiFrom": 15480,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/204996/thar-2025-exterior-right-front-three-quarter-5.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/204996/thar-2025-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/204996/thar-2025-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/204996/thar-2025-exterior-right-rear-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/204996/thar-2025-exterior-rear-view-2.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/204996/thar-2025-exterior-left-rear-three-quarter.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/204996/thar-2025-exterior-right-front-three-quarter-5.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "Diesel"
    ],
    "transmissions": [
      "Manual",
      "Automatic"
    ],
    "mileage": "15.2 kmpl",
    "seatingCapacity": 4,
    "bootSpaceL": 344,
    "engineCC": 2184,
    "powerBHP": 130,
    "torqueNm": 300,
    "safetyRating": 4,
    "rating": 4.6,
    "reviewCount": 1120,
    "colors": [
      "Stealth Black",
      "Red Rage",
      "Deep Grey",
      "Everest White",
      "Desert Fury"
    ],
    "features": [
      "4WD System",
      "Mechanical Locking Differential",
      "7-inch Touchscreen",
      "Roll Cage",
      "ESP with Roll Over Mitigation",
      "Removable Roof"
    ],
    "variants": [
      {
        "id": "ctharv1",
        "name": "AX Opt Hard Top Diesel MT",
        "price": 999000,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 2184,
        "powerBHP": 130,
        "torqueNm": 300,
        "mileageKmpl": 15.2,
        "mileage": "15.2 kmpl",
        "features": ["Dual Airbags", "ABS", "4WD", "Removable Hardtop", "AC"],
        "additionalFeaturesOverBase": []
      },
      {
        "id": "ctharv2",
        "name": "AX Opt Soft Top Diesel MT",
        "price": 1030000,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 2184,
        "powerBHP": 130,
        "torqueNm": 300,
        "mileageKmpl": 15.2,
        "mileage": "15.2 kmpl",
        "features": ["Dual Airbags", "ABS", "4WD", "Convertible Soft Top", "AC"],
        "additionalFeaturesOverBase": ["Convertible Soft Top"]
      },
      {
        "id": "ctharv3",
        "name": "LX Hard Top Diesel MT",
        "price": 1269000,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 2184,
        "powerBHP": 130,
        "torqueNm": 300,
        "mileageKmpl": 15.2,
        "mileage": "15.2 kmpl",
        "features": ["Dual Airbags", "ESP", "4WD", "Rear Camera", "7in Touchscreen", "Roll Cage", "Mechanical Locking Diff"],
        "additionalFeaturesOverBase": ["ESP", "Rear Camera", "7in Touchscreen", "Mechanical Locking Differential"]
      },
      {
        "id": "ctharv4",
        "name": "LX Soft Top Diesel MT",
        "price": 1299000,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 2184,
        "powerBHP": 130,
        "torqueNm": 300,
        "mileageKmpl": 15.2,
        "mileage": "15.2 kmpl",
        "features": ["Dual Airbags", "ESP", "4WD", "Rear Camera", "7in Touchscreen", "Convertible Soft Top", "Mechanical Locking Diff"],
        "additionalFeaturesOverBase": ["Convertible Soft Top"]
      },
      {
        "id": "ctharv5",
        "name": "LX Hard Top Diesel AT",
        "price": 1380000,
        "fuelType": "Diesel",
        "transmission": "Automatic",
        "engineCC": 2184,
        "powerBHP": 130,
        "torqueNm": 300,
        "mileageKmpl": 15.2,
        "mileage": "15.2 kmpl",
        "features": ["Dual Airbags", "ESP", "4WD", "Rear Camera", "7in Touchscreen", "Roll Cage", "6-Speed AT"],
        "additionalFeaturesOverBase": ["6-Speed Automatic Gearbox"]
      },
      {
        "id": "ctharv6",
        "name": "LX Hard Top Petrol MT",
        "price": 1507000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1997,
        "powerBHP": 150,
        "torqueNm": 320,
        "mileageKmpl": 12.4,
        "mileage": "12.4 kmpl",
        "features": ["Dual Airbags", "ESP", "4WD", "Rear Camera", "7in Touchscreen", "Roll Cage", "Turbo Petrol Engine"],
        "additionalFeaturesOverBase": ["2.0L Turbo Petrol Engine (150bhp)"]
      },
      {
        "id": "ctharv7",
        "name": "LX Hard Top Petrol AT",
        "price": 1686000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1997,
        "powerBHP": 150,
        "torqueNm": 320,
        "mileageKmpl": 12.4,
        "mileage": "12.4 kmpl",
        "features": ["Dual Airbags", "ESP", "4WD", "Rear Camera", "7in Touchscreen", "Roll Cage", "Turbo Petrol Engine", "6-Speed AT"],
        "additionalFeaturesOverBase": ["6-Speed Automatic Gearbox"]
      }
    ],
    "dealerPrices": [
      {
        "dealerId": "d6",
        "dealerName": "Mahindra Ranchi",
        "location": "Ranchi",
        "price": 1005000,
        "discount": 10000,
        "rating": 4.6
      }
    ],
    "description": "The Mahindra Thar is India's favorite lifestyle 4x4 SUV, offering unmatched off-road capability combined with retro-modern road presence.",
    "pros": [
      "Unmatched road presence and lifestyle design styling",
      "Exceptional off-roading capability with mechanical locking diff",
      "Strong build quality with 4-star safety rating"
    ],
    "cons": [
      "Stiff suspension leads to bumpy and bouncy ride",
      "Highly impractical interior space and tiny boot capacity",
      "Frugal engine choices have high running costs"
    ],
    "groundClearance": 226
  },
  {
    "id": "c-xuv700",
    "slug": "mahindra-xuv700-2024",
    "category": "car",
    "brand": "Mahindra",
    "model": "XUV700",
    "year": 2024,
    "startingPrice": 1366000,
    "emiFrom": 20490,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/205104/xuv-7xo-exterior-right-front-three-quarter-547.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/205104/xuv-7xo-exterior-car-roof.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/205104/xuv-7xo-exterior-right-side-view-61.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/205104/xuv-7xo-exterior-rear-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/205104/xuv-7xo-exterior-left-rear-three-quarter.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/205104/xuv-7xo-exterior-right-front-three-quarter-547.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "Diesel"
    ],
    "transmissions": [
      "Manual",
      "Automatic"
    ],
    "mileage": "16.5 kmpl",
    "seatingCapacity": 7,
    "bootSpaceL": 240,
    "engineCC": 1999,
    "powerBHP": 197,
    "torqueNm": 380,
    "safetyRating": 5,
    "rating": 4.7,
    "reviewCount": 2430,
    "colors": [
      "Everest White",
      "Midnight Black",
      "Dazzling Silver",
      "Red Rage",
      "Electric Blue"
    ],
    "features": [
      "ADAS Level 2",
      "Panoramic Skyroof",
      "Dual 10.25-inch Screens",
      "Sony 3D Sound",
      "Smart Door Handles",
      "Ventilated Seats"
    ],
    "variants": [
      {
        "id": "cxuvv1",
        "name": "MX 5 STR Petrol MT",
        "price": 1399000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1999,
        "powerBHP": 197,
        "torqueNm": 380,
        "mileageKmpl": 14.99,
        "mileage": "14.99 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "7in Touchscreen", "Cruise Control", "AC"],
        "additionalFeaturesOverBase": []
      },
      {
        "id": "cxuvv2",
        "name": "MX 7 STR Petrol MT",
        "price": 1449000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1999,
        "powerBHP": 197,
        "torqueNm": 380,
        "mileageKmpl": 14.99,
        "mileage": "14.99 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "7in Touchscreen", "Cruise Control", "AC", "7-Seat Config"],
        "additionalFeaturesOverBase": ["7-Seat Configuration"]
      },
      {
        "id": "cxuvv3",
        "name": "AX3 5 STR Petrol MT",
        "price": 1699000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1999,
        "powerBHP": 197,
        "torqueNm": 380,
        "mileageKmpl": 14.99,
        "mileage": "14.99 kmpl",
        "features": ["6 Airbags", "ADAS Level 2", "10.25in Display", "Auto Climate Control", "Sunroof", "Wireless Charger"],
        "additionalFeaturesOverBase": ["ADAS Level 2", "10.25in Display", "Sunroof", "Wireless Charger"]
      },
      {
        "id": "cxuvv4",
        "name": "AX5 5 STR Petrol AT",
        "price": 1899000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1999,
        "powerBHP": 197,
        "torqueNm": 380,
        "mileageKmpl": 14.4,
        "mileage": "14.4 kmpl",
        "features": ["6 Airbags", "ADAS Level 2", "Dual 10.25in Displays", "Auto Climate Control", "Panoramic Skyroof", "Wireless Charger", "Sony 3D Sound"],
        "additionalFeaturesOverBase": ["Dual 10.25in Displays", "Panoramic Skyroof", "Sony 3D Sound"]
      },
      {
        "id": "cxuvv5",
        "name": "AX5 L 5 STR Diesel AT",
        "price": 1999000,
        "fuelType": "Diesel",
        "transmission": "Automatic",
        "engineCC": 2184,
        "powerBHP": 182,
        "torqueNm": 420,
        "mileageKmpl": 16.5,
        "mileage": "16.5 kmpl",
        "features": ["6 Airbags", "ADAS Level 2", "Dual 10.25in Displays", "Auto Climate Control", "Panoramic Skyroof", "Wireless Charger", "Sony 3D Sound", "Ventilated Seats"],
        "additionalFeaturesOverBase": ["Diesel Engine (182bhp)", "Ventilated Front Seats"]
      },
      {
        "id": "cxuvv6",
        "name": "AX7 L 7 STR Diesel AT",
        "price": 2299000,
        "fuelType": "Diesel",
        "transmission": "Automatic",
        "engineCC": 2184,
        "powerBHP": 182,
        "torqueNm": 450,
        "mileageKmpl": 16.5,
        "mileage": "16.5 kmpl",
        "features": ["6 Airbags", "ADAS Level 2", "Dual 10.25in Displays", "Dual-zone Climate Control", "Panoramic Skyroof", "Wireless Charger", "Sony 3D Sound", "Ventilated Seats", "Smart Door Handles"],
        "additionalFeaturesOverBase": ["7-Seat Config", "Dual-zone Climate Control", "Smart Door Handles"]
      }
    ],
    "dealerPrices": [
      {
        "dealerId": "d6",
        "dealerName": "Mahindra Ranchi",
        "location": "Ranchi",
        "price": 1410000,
        "discount": 25000,
        "rating": 4.6
      }
    ],
    "description": "The Mahindra XUV700 leads its class with advanced ADAS features, high-performance engine options, and a premium cockpit design.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 200
  },
  {
    "id": "c-punch",
    "slug": "tata-punch-2024",
    "category": "car",
    "brand": "Tata",
    "model": "Punch",
    "year": 2024,
    "startingPrice": 560000,
    "emiFrom": 8400,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/172825/punch-exterior-right-front-three-quarter-250.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/172825/punch-exterior-right-front-three-quarter-10.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/172825/punch-exterior-right-side-view-10.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/172825/punch-exterior-right-rear-three-quarter-3.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/172825/punch-facelift-exterior-rear-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/172825/punch-facelift-exterior-left-rear-three-quarter-4.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/172825/punch-exterior-right-front-three-quarter-250.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "CNG"
    ],
    "transmissions": [
      "Manual",
      "AMT"
    ],
    "mileage": "20.09 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 366,
    "engineCC": 1199,
    "powerBHP": 86,
    "torqueNm": 113,
    "safetyRating": 5,
    "rating": 4.4,
    "reviewCount": 3870,
    "colors": [
      "Tornado Blue",
      "Calypso Red",
      "Meteor Bronze",
      "Atomic Orange",
      "Orcus White"
    ],
    "features": [
      "Dual Airbags",
      "Harman Infotainment",
      "Cool Box",
      "Rear Camera",
      "Auto Headlamps",
      "Rain Sensing Wipers"
    ],
    "variants": [
      {
        "id": "cpunchv1",
        "name": "Pure MT",
        "price": 612900,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1199,
        "powerBHP": 86,
        "torqueNm": 113,
        "mileageKmpl": 20.09,
        "mileage": "20.09 kmpl",
        "features": ["Dual Airbags", "ABS", "Rear Sensors", "AC", "Power Windows"],
        "additionalFeaturesOverBase": []
      },
      {
        "id": "cpunchv2",
        "name": "Adventure MT",
        "price": 727900,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1199,
        "powerBHP": 86,
        "torqueNm": 113,
        "mileageKmpl": 20.09,
        "mileage": "20.09 kmpl",
        "features": ["Dual Airbags", "ABS", "Rear Camera", "AC", "Power Windows", "7in Touchscreen"],
        "additionalFeaturesOverBase": ["Rear Camera", "7in Touchscreen"]
      },
      {
        "id": "cpunchv3",
        "name": "Accomplished MT",
        "price": 827900,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1199,
        "powerBHP": 86,
        "torqueNm": 113,
        "mileageKmpl": 20.09,
        "mileage": "20.09 kmpl",
        "features": ["Dual Airbags", "ABS", "Rear Camera", "Auto Climate Control", "10.25in Touchscreen", "Cruise Control"],
        "additionalFeaturesOverBase": ["10.25in Touchscreen", "Auto Climate Control", "Cruise Control"]
      },
      {
        "id": "cpunchv4",
        "name": "Accomplished AMT",
        "price": 887900,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1199,
        "powerBHP": 86,
        "torqueNm": 113,
        "mileageKmpl": 19.79,
        "mileage": "19.79 kmpl",
        "features": ["Dual Airbags", "ABS", "Rear Camera", "Auto Climate Control", "10.25in Touchscreen", "Cruise Control", "AMT Gearbox"],
        "additionalFeaturesOverBase": ["AMT Automatic Gearbox"]
      },
      {
        "id": "cpunchv5",
        "name": "Creative MT",
        "price": 939900,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1199,
        "powerBHP": 86,
        "torqueNm": 113,
        "mileageKmpl": 20.09,
        "mileage": "20.09 kmpl",
        "features": ["Dual Airbags", "ABS", "Rear Camera", "Auto Climate Control", "10.25in Touchscreen", "Cruise Control", "Sunroof", "Connected Car"],
        "additionalFeaturesOverBase": ["Sunroof", "iRA Connected Car Tech"]
      },
      {
        "id": "cpunchv6",
        "name": "Creative AMT",
        "price": 999900,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1199,
        "powerBHP": 86,
        "torqueNm": 113,
        "mileageKmpl": 19.79,
        "mileage": "19.79 kmpl",
        "features": ["Dual Airbags", "ABS", "Rear Camera", "Auto Climate Control", "10.25in Touchscreen", "Cruise Control", "Sunroof", "Connected Car", "AMT Gearbox"],
        "additionalFeaturesOverBase": ["AMT Automatic Gearbox"]
      },
      {
        "id": "cpunchv7",
        "name": "Creative Flagship AMT",
        "price": 1019900,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1199,
        "powerBHP": 86,
        "torqueNm": 113,
        "mileageKmpl": 19.79,
        "mileage": "19.79 kmpl",
        "features": ["Dual Airbags", "ABS", "Rear Camera", "Auto Climate Control", "10.25in Touchscreen", "Cruise Control", "Sunroof", "Connected Car", "AMT Gearbox", "Wireless Charger", "ADAS Level 1"],
        "additionalFeaturesOverBase": ["Wireless Charger", "ADAS Level 1"]
      }
    ],
    "dealerPrices": [
      {
        "dealerId": "d5",
        "dealerName": "Tata Motors Ranchi",
        "location": "Ranchi",
        "price": 615000,
        "discount": 15000,
        "rating": 4.5
      }
    ],
    "description": "The Tata Punch is a sub-compact SUV that offers 5-star GNCAP safety, commanding seating position, and rugged styling for the city.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 187
  },
  {
    "id": "c-seltos",
    "slug": "kia-seltos-2024",
    "category": "car",
    "brand": "Kia",
    "model": "Seltos",
    "year": 2024,
    "startingPrice": 1099000,
    "emiFrom": 16485,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/192817/seltos-exterior-right-front-three-quarter-50.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/192817/new-seltos-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/192817/new-seltos-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/192817/new-seltos-exterior-right-rear-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/192817/new-seltos-exterior-rear-view-36.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/192817/new-seltos-exterior-left-rear-three-quarter-35.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/192817/seltos-exterior-right-front-three-quarter-50.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "Diesel"
    ],
    "transmissions": [
      "Manual",
      "Automatic",
      "CVT"
    ],
    "mileage": "17.0 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 433,
    "engineCC": 1497,
    "powerBHP": 113,
    "torqueNm": 144,
    "safetyRating": 3,
    "rating": 4.6,
    "reviewCount": 1980,
    "colors": [
      "Pewter Olive",
      "Imperial Blue",
      "Intense Red",
      "Aurora Black Pearl",
      "Glacier White Pearl"
    ],
    "features": [
      "Dual-zone Climate Control",
      "Panoramic Sunroof",
      "Bose 8-Speaker Audio",
      "ADAS Level 2",
      "360° Camera",
      "Ambient Mood Lighting"
    ],
    "variants": [
      {
        "id": "cseltosv1",
        "name": "HTE 1.5 MT",
        "price": 1089900,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1497,
        "powerBHP": 113,
        "torqueNm": 144,
        "mileageKmpl": 17.7,
        "mileage": "17.7 kmpl",
        "features": ["Dual Airbags", "ABS", "Rear Camera", "Power Windows", "AC"],
        "additionalFeaturesOverBase": []
      },
      {
        "id": "cseltosv2",
        "name": "HTK 1.5 MT",
        "price": 1224900,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1497,
        "powerBHP": 113,
        "torqueNm": 144,
        "mileageKmpl": 17.7,
        "mileage": "17.7 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "10.25in Touchscreen", "AC", "Cruise Control"],
        "additionalFeaturesOverBase": ["6 Airbags", "10.25in Touchscreen", "Cruise Control"]
      },
      {
        "id": "cseltosv3",
        "name": "HTK Plus 1.5 MT",
        "price": 1384900,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1497,
        "powerBHP": 113,
        "torqueNm": 144,
        "mileageKmpl": 17.7,
        "mileage": "17.7 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "10.25in Touchscreen", "Auto Climate Control", "Cruise Control", "Sunroof"],
        "additionalFeaturesOverBase": ["Auto Climate Control", "Sunroof"]
      },
      {
        "id": "cseltosv4",
        "name": "HTK Plus 1.5 Diesel MT",
        "price": 1474900,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 1493,
        "powerBHP": 114,
        "torqueNm": 250,
        "mileageKmpl": 21.0,
        "mileage": "21.0 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "10.25in Touchscreen", "Auto Climate Control", "Cruise Control", "Sunroof"],
        "additionalFeaturesOverBase": ["Diesel Engine (114bhp)", "Better Mileage"]
      },
      {
        "id": "cseltosv5",
        "name": "HTX Plus 1.5 CVT",
        "price": 1664900,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1497,
        "powerBHP": 113,
        "torqueNm": 144,
        "mileageKmpl": 17.0,
        "mileage": "17.0 kmpl",
        "features": ["6 Airbags", "ADAS Level 2", "Rear Camera", "10.25in Touchscreen", "Dual-zone Climate Control", "Panoramic Sunroof", "Wireless Charger", "Bose 8-Speaker"],
        "additionalFeaturesOverBase": ["ADAS Level 2", "Dual-zone Climate Control", "Panoramic Sunroof", "Bose Audio"]
      },
      {
        "id": "cseltosv6",
        "name": "GTX Plus 1.5 Diesel AT",
        "price": 2029900,
        "fuelType": "Diesel",
        "transmission": "Automatic",
        "engineCC": 1493,
        "powerBHP": 114,
        "torqueNm": 250,
        "mileageKmpl": 18.8,
        "mileage": "18.8 kmpl",
        "features": ["6 Airbags", "ADAS Level 2", "360° Camera", "10.25in Touchscreen", "Dual-zone Climate Control", "Panoramic Sunroof", "Wireless Charger", "Bose 8-Speaker", "Ventilated Seats", "Ambient Mood Lighting"],
        "additionalFeaturesOverBase": ["360° Camera", "Ventilated Seats", "Ambient Mood Lighting", "Automatic Gearbox"]
      }
    ],
    "dealerPrices": [],
    "description": "The Kia Seltos is a sophisticated mid-size SUV that pairs striking futuristic looks with a tech-laden and highly comfortable cabin.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c-hycross",
    "slug": "toyota-innova-hycross-2024",
    "category": "car",
    "brand": "Toyota",
    "model": "Innova Hycross",
    "year": 2024,
    "startingPrice": 1870000,
    "emiFrom": 28050,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/115025/innova-hycross-exterior-right-front-three-quarter-74.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/115025/innova-hycross-exterior-right-front-three-quarter-72.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/115025/innova-hycross-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/115025/innova-hycross-exterior-rear-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/115025/innova-hycross-exterior-left-front-three-quarter-5.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/115025/innova-hycross-exterior-left-front-three-quarter-4.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/115025/innova-hycross-exterior-right-front-three-quarter-74.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "Hybrid"
    ],
    "transmissions": [
      "Automatic",
      "CVT"
    ],
    "mileage": "23.24 kmpl",
    "seatingCapacity": 7,
    "bootSpaceL": 300,
    "engineCC": 1987,
    "powerBHP": 184,
    "torqueNm": 188,
    "safetyRating": 5,
    "rating": 4.8,
    "reviewCount": 1540,
    "colors": [
      "Blackish Ageha Glass Flake",
      "Super White",
      "Platinum White Pearl",
      "Silver Metallic",
      "Attitude Black Mica"
    ],
    "features": [
      "Self-Charging Hybrid",
      "Ottoman Seats in Middle Row",
      "Toyota Safety Sense ADAS",
      "Multi-zone Climate Control",
      "Panoramic Sunroof"
    ],
    "variants": [
      {
        "id": "chycrossv1",
        "name": "GX 7 STR Petrol",
        "price": 1977000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1987,
        "powerBHP": 173,
        "torqueNm": 188,
        "mileageKmpl": 16.13,
        "mileage": "16.13 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "AC", "9in Touchscreen", "7-Seat Configuration"],
        "additionalFeaturesOverBase": []
      },
      {
        "id": "chycrossv2",
        "name": "GX 8 STR Petrol",
        "price": 2017000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1987,
        "powerBHP": 173,
        "torqueNm": 188,
        "mileageKmpl": 16.13,
        "mileage": "16.13 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "AC", "9in Touchscreen", "8-Seat Configuration"],
        "additionalFeaturesOverBase": ["8-Seat Configuration"]
      },
      {
        "id": "chycrossv3",
        "name": "VX 7 STR Petrol",
        "price": 2175000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1987,
        "powerBHP": 173,
        "torqueNm": 188,
        "mileageKmpl": 16.13,
        "mileage": "16.13 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "Auto Climate Control", "10in Touchscreen", "Ottoman Middle Seats", "Wireless Charger"],
        "additionalFeaturesOverBase": ["Ottoman Middle Seats", "Wireless Charger", "10in Touchscreen"]
      },
      {
        "id": "chycrossv4",
        "name": "ZX 7 STR Hybrid",
        "price": 2546000,
        "fuelType": "Hybrid",
        "transmission": "Automatic",
        "engineCC": 1987,
        "powerBHP": 184,
        "torqueNm": 188,
        "mileageKmpl": 21.1,
        "mileage": "21.1 kmpl",
        "features": ["6 Airbags", "Toyota Safety Sense ADAS", "Rear Camera", "Multi-zone Climate Control", "10in Touchscreen", "Ottoman Middle Seats", "Wireless Charger", "Strong Self-Charging Hybrid"],
        "additionalFeaturesOverBase": ["Self-Charging Hybrid System", "21.1 kmpl ARAI", "Toyota Safety Sense ADAS"]
      },
      {
        "id": "chycrossv5",
        "name": "ZX (O) 7 STR Hybrid",
        "price": 3098000,
        "fuelType": "Hybrid",
        "transmission": "Automatic",
        "engineCC": 1987,
        "powerBHP": 184,
        "torqueNm": 188,
        "mileageKmpl": 21.1,
        "mileage": "21.1 kmpl",
        "features": ["6 Airbags", "Toyota Safety Sense ADAS", "Panoramic Sunroof", "Multi-zone Climate Control", "10in Touchscreen", "Ottoman Middle Seats", "Wireless Charger", "Strong Self-Charging Hybrid", "360° View Camera", "Heads-Up Display"],
        "additionalFeaturesOverBase": ["Panoramic Sunroof", "360° View Camera", "Heads-Up Display"]
      }
    ],
    "dealerPrices": [
      {
        "dealerId": "d8",
        "dealerName": "Toyota Ranchi",
        "location": "Ranchi",
        "price": 1985000,
        "discount": 20000,
        "rating": 4.8
      }
    ],
    "description": "The Toyota Innova Hycross is a premium MPV combining absolute lounge comfort, robust styling, and exceptional hybrid fuel economy.",
    "pros": [
      "Spacious 3-row cabin seating up to 7-8 occupants comfortably",
      "Highly practical modular seating rows that fold flat for luggage",
      "Very soft suspension setup makes long family trips comfortable"
    ],
    "cons": [
      "Large dimensions make city driving and parking slightly difficult",
      "Boxy styling lacks the aesthetic appeal of a modern SUV",
      "Fully loaded vehicle can struggle on steep mountain roads"
    ],
    "groundClearance": 180
  },
  {
    "id": "c-baleno",
    "slug": "maruti-suzuki-baleno-2024",
    "category": "car",
    "brand": "Maruti Suzuki",
    "model": "Baleno",
    "year": 2024,
    "startingPrice": 598900,
    "emiFrom": 8984,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/102663/baleno-exterior-right-front-three-quarter-69.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/102663/baleno-exterior-right-front-three-quarter-64.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/102663/baleno-exterior-right-front-three-quarter-68.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/102663/baleno-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/102663/baleno-exterior-right-rear-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/102663/baleno-exterior-rear-view.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/102663/baleno-exterior-right-front-three-quarter-69.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "CNG"
    ],
    "transmissions": [
      "Manual",
      "AMT"
    ],
    "mileage": "22.35 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 318,
    "engineCC": 1197,
    "powerBHP": 88.5,
    "torqueNm": 113,
    "safetyRating": 3,
    "rating": 4.4,
    "reviewCount": 2320,
    "colors": [
      "Nexa Blue",
      "Grandeur Grey",
      "Opulent Red",
      "Splendid Silver",
      "Arctic White"
    ],
    "features": [
      "Head-up Display",
      "360° View Camera",
      "9-inch SmartPlay Pro+",
      "6 Airbags",
      "Arkamys Sound System",
      "Auto Dimming IRVM"
    ],
    "variants": [
      {
        "id": "cbalenov1",
        "name": "Sigma MT",
        "price": 666000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1197,
        "powerBHP": 88.5,
        "torqueNm": 113,
        "mileageKmpl": 22.35,
        "mileage": "22.35 kmpl",
        "features": ["Dual Airbags", "ABS", "Rear Sensors", "Power Windows", "AC"],
        "additionalFeaturesOverBase": []
      },
      {
        "id": "cbalenov2",
        "name": "Delta MT",
        "price": 724000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1197,
        "powerBHP": 88.5,
        "torqueNm": 113,
        "mileageKmpl": 22.35,
        "mileage": "22.35 kmpl",
        "features": ["Dual Airbags", "ABS", "Rear Camera", "Power Windows", "AC", "SmartPlay Pro 9in"],
        "additionalFeaturesOverBase": ["SmartPlay Pro 9in", "Rear Camera"]
      },
      {
        "id": "cbalenov3",
        "name": "Zeta MT",
        "price": 779000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1197,
        "powerBHP": 88.5,
        "torqueNm": 113,
        "mileageKmpl": 22.35,
        "mileage": "22.35 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "Auto Climate Control", "SmartPlay Pro+ 9in", "Cruise Control"],
        "additionalFeaturesOverBase": ["6 Airbags", "Auto Climate Control", "Cruise Control"]
      },
      {
        "id": "cbalenov4",
        "name": "Zeta AMT",
        "price": 834000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1197,
        "powerBHP": 88.5,
        "torqueNm": 113,
        "mileageKmpl": 22.35,
        "mileage": "22.35 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "Auto Climate Control", "SmartPlay Pro+ 9in", "Cruise Control", "AMT Gearbox"],
        "additionalFeaturesOverBase": ["AMT Automatic Gearbox"]
      },
      {
        "id": "cbalenov5",
        "name": "Alpha MT",
        "price": 928000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1197,
        "powerBHP": 88.5,
        "torqueNm": 113,
        "mileageKmpl": 22.35,
        "mileage": "22.35 kmpl",
        "features": ["6 Airbags", "ABS", "360° View Camera", "Auto Climate Control", "SmartPlay Pro+ 9in", "Heads-Up Display", "Wireless Charger", "Arkamys Sound"],
        "additionalFeaturesOverBase": ["360° View Camera", "Heads-Up Display", "Wireless Charger", "Arkamys Sound System"]
      },
      {
        "id": "cbalenov6",
        "name": "Alpha AMT",
        "price": 983000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1197,
        "powerBHP": 88.5,
        "torqueNm": 113,
        "mileageKmpl": 22.35,
        "mileage": "22.35 kmpl",
        "features": ["6 Airbags", "ABS", "360° View Camera", "Auto Climate Control", "SmartPlay Pro+ 9in", "Heads-Up Display", "Wireless Charger", "Arkamys Sound", "AMT Gearbox"],
        "additionalFeaturesOverBase": ["AMT Automatic Gearbox"]
      },
      {
        "id": "cbalenov7",
        "name": "Zeta CNG MT",
        "price": 893000,
        "fuelType": "CNG",
        "transmission": "Manual",
        "engineCC": 1197,
        "powerBHP": 76.4,
        "torqueNm": 98.5,
        "mileageKmpl": 30.61,
        "mileage": "30.61 km/kg",
        "features": ["6 Airbags", "ABS", "Rear Camera", "Auto Climate Control", "SmartPlay Pro+ 9in", "Factory-Fitted CNG"],
        "additionalFeaturesOverBase": ["Factory-Fitted CNG", "Bi-Fuel Capability", "30.61 km/kg"]
      }
    ],
    "dealerPrices": [
      {
        "dealerId": "d1",
        "dealerName": "Maruti True Value Ranchi",
        "location": "Ranchi",
        "price": 670000,
        "discount": 15000,
        "rating": 4.6
      }
    ],
    "description": "The Maruti Suzuki Baleno is a highly popular premium hatchback featuring modern tech like a HUD and 360-degree camera with class-leading space.",
    "pros": [
      "Compact dimensions make it very easy to drive and park in city traffic",
      "Outstanding fuel economy keeps running costs low",
      "Widespread service support and highly affordable parts"
    ],
    "cons": [
      "Limited luggage boot space for weekend family trips",
      "Cabin is not well insulated from engine and tyre noise at highway speeds",
      "Suspension feels slightly basic over large road potholes"
    ],
    "groundClearance": 165
  },
  {
    "id": "c-ertiga",
    "slug": "maruti-suzuki-ertiga-2024",
    "category": "car",
    "brand": "Maruti Suzuki",
    "model": "Ertiga",
    "year": 2024,
    "startingPrice": 885000,
    "emiFrom": 13275,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/115777/ertiga-exterior-right-front-three-quarter-10.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/115777/ertiga-exterior-right-front-three-quarter-9.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/115777/ertiga-exterior-right-side-view-2.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/115777/ertiga-exterior-right-rear-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/115777/ertiga-exterior-rear-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/115777/ertiga-exterior-left-rear-three-quarter.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/115777/ertiga-exterior-right-front-three-quarter-10.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "CNG"
    ],
    "transmissions": [
      "Manual",
      "Automatic"
    ],
    "mileage": "20.51 kmpl",
    "seatingCapacity": 7,
    "bootSpaceL": 209,
    "engineCC": 1462,
    "powerBHP": 102,
    "torqueNm": 136.8,
    "safetyRating": 3,
    "rating": 4.5,
    "reviewCount": 1850,
    "colors": [
      "Metallic Magma Grey",
      "Pearl Metallic Oxford Blue",
      "Metallic Silky Silver",
      "Dignity Brown",
      "Pearl Arctic White"
    ],
    "features": [
      "Dual-tone Interiors",
      "SmartPlay Studio",
      "Air-Cooled Cup Holders",
      "Paddle Shifters",
      "Projector Headlamps"
    ],
    "variants": [
      {
        "id": "certigav1",
        "name": "LXi MT",
        "price": 869000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1462,
        "powerBHP": 102,
        "torqueNm": 136.8,
        "mileageKmpl": 20.51,
        "mileage": "20.51 kmpl",
        "features": ["Dual Airbags", "ABS", "Power Windows", "AC", "7-Seat Configuration"],
        "additionalFeaturesOverBase": []
      },
      {
        "id": "certigav2",
        "name": "VXi MT",
        "price": 984000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1462,
        "powerBHP": 102,
        "torqueNm": 136.8,
        "mileageKmpl": 20.51,
        "mileage": "20.51 kmpl",
        "features": ["Dual Airbags", "ABS", "Rear Camera", "SmartPlay Studio 7in", "AC", "7-Seat Configuration"],
        "additionalFeaturesOverBase": ["Rear Camera", "SmartPlay Studio 7in"]
      },
      {
        "id": "certigav3",
        "name": "ZXi MT",
        "price": 1077000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1462,
        "powerBHP": 102,
        "torqueNm": 136.8,
        "mileageKmpl": 20.51,
        "mileage": "20.51 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "SmartPlay Studio 7in", "Auto Climate Control", "Projector Headlamps", "7-Seat Configuration"],
        "additionalFeaturesOverBase": ["6 Airbags", "Auto Climate Control", "Projector Headlamps"]
      },
      {
        "id": "certigav4",
        "name": "ZXi Plus MT",
        "price": 1177000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1462,
        "powerBHP": 102,
        "torqueNm": 136.8,
        "mileageKmpl": 20.51,
        "mileage": "20.51 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "SmartPlay Studio 7in", "Auto Climate Control", "Paddle Shifters", "Air-Cooled Cup Holders", "7-Seat Configuration"],
        "additionalFeaturesOverBase": ["Paddle Shifters", "Air-Cooled Cup Holders"]
      },
      {
        "id": "certigav5",
        "name": "ZXi AT",
        "price": 1212000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1462,
        "powerBHP": 102,
        "torqueNm": 136.8,
        "mileageKmpl": 19.9,
        "mileage": "19.9 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "SmartPlay Studio 7in", "Auto Climate Control", "AT Gearbox", "7-Seat Configuration"],
        "additionalFeaturesOverBase": ["Automatic Torque Converter Gearbox"]
      },
      {
        "id": "certigav6",
        "name": "ZXi Plus AT",
        "price": 1303000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1462,
        "powerBHP": 102,
        "torqueNm": 136.8,
        "mileageKmpl": 19.9,
        "mileage": "19.9 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "SmartPlay Studio 7in", "Auto Climate Control", "Paddle Shifters", "Air-Cooled Cup Holders", "AT Gearbox", "7-Seat Configuration"],
        "additionalFeaturesOverBase": ["Automatic Torque Converter Gearbox"]
      },
      {
        "id": "certigav7",
        "name": "VXi CNG MT",
        "price": 1097000,
        "fuelType": "CNG",
        "transmission": "Manual",
        "engineCC": 1462,
        "powerBHP": 87.8,
        "torqueNm": 121.5,
        "mileageKmpl": 26.11,
        "mileage": "26.11 km/kg",
        "features": ["Dual Airbags", "ABS", "Rear Camera", "SmartPlay Studio 7in", "AC", "Factory-Fitted CNG", "7-Seat Configuration"],
        "additionalFeaturesOverBase": ["Factory-Fitted CNG", "Bi-Fuel Capability"]
      }
    ],
    "dealerPrices": [],
    "description": "The Maruti Suzuki Ertiga is India's best-selling 7-seater MPV, renowned for its spacious interior, high fuel efficiency, and utility.",
    "pros": [
      "Spacious 3-row cabin seating up to 7-8 occupants comfortably",
      "Highly practical modular seating rows that fold flat for luggage",
      "Very soft suspension setup makes long family trips comfortable"
    ],
    "cons": [
      "Large dimensions make city driving and parking slightly difficult",
      "Boxy styling lacks the aesthetic appeal of a modern SUV",
      "Fully loaded vehicle can struggle on steep mountain roads"
    ],
    "groundClearance": 180
  },
  {
    "id": "c-safari",
    "slug": "tata-safari-2024",
    "category": "car",
    "brand": "Tata",
    "model": "Safari",
    "year": 2024,
    "startingPrice": 1329000,
    "emiFrom": 19935,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/138895/safari-exterior-right-front-three-quarter-40.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/138895/safari-facelift-exterior-right-front-three-quarter-38.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/138895/safari-facelift-exterior-right-side-view-2.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/138895/safari-exterior-right-side-view-4.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/138895/safari-facelift-exterior-right-rear-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/138895/safari-facelift-exterior-rear-view-54.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/138895/safari-exterior-right-front-three-quarter-40.png?isig=0&q=80",
    "fuelTypes": [
      "Diesel"
    ],
    "transmissions": [
      "Manual",
      "Automatic"
    ],
    "mileage": "16.3 kmpl",
    "seatingCapacity": 7,
    "bootSpaceL": 420,
    "engineCC": 1956,
    "powerBHP": 170,
    "torqueNm": 350,
    "safetyRating": 5,
    "rating": 4.7,
    "reviewCount": 1120,
    "colors": [
      "Cosmic Gold",
      "Galactic Sapphire",
      "Stardust Grey",
      "Lunar White",
      "Oberon Black"
    ],
    "features": [
      "Dual Panoramic Sunroof",
      "Ventilated First & Second Rows",
      "ADAS Suite",
      "12.3-inch Infotainment",
      "9-Speaker JBL Audio"
    ],
    "variants": [
      {
        "id": "csafariv1",
        "name": "Smart MT",
        "price": 1619000,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 1956,
        "powerBHP": 170,
        "torqueNm": 350,
        "mileageKmpl": 16.3,
        "mileage": "16.3 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "9in Touchscreen", "Auto Climate Control", "7-Seat Configuration"],
        "additionalFeaturesOverBase": []
      },
      {
        "id": "csafariv2",
        "name": "Smart Plus MT",
        "price": 1769000,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 1956,
        "powerBHP": 170,
        "torqueNm": 350,
        "mileageKmpl": 16.3,
        "mileage": "16.3 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "12.3in Touchscreen", "Auto Climate Control", "Wireless Charger", "7-Seat Configuration"],
        "additionalFeaturesOverBase": ["12.3in Touchscreen", "Wireless Charger"]
      },
      {
        "id": "csafariv3",
        "name": "Adventure MT",
        "price": 1929000,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 1956,
        "powerBHP": 170,
        "torqueNm": 350,
        "mileageKmpl": 16.3,
        "mileage": "16.3 kmpl",
        "features": ["6 Airbags", "ADAS", "Rear Camera", "12.3in Touchscreen", "Auto Climate Control", "Wireless Charger", "Dual Panoramic Sunroof", "JBL 9-Speaker"],
        "additionalFeaturesOverBase": ["ADAS Suite", "Dual Panoramic Sunroof", "JBL 9-Speaker System"]
      },
      {
        "id": "csafariv4",
        "name": "Accomplished MT",
        "price": 2199000,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 1956,
        "powerBHP": 170,
        "torqueNm": 350,
        "mileageKmpl": 16.3,
        "mileage": "16.3 kmpl",
        "features": ["6 Airbags", "ADAS", "Rear Camera", "12.3in Touchscreen", "Dual-zone Climate Control", "Wireless Charger", "Dual Panoramic Sunroof", "JBL 9-Speaker", "Ventilated Front Seats"],
        "additionalFeaturesOverBase": ["Dual-zone Climate Control", "Ventilated Front Seats"]
      },
      {
        "id": "csafariv5",
        "name": "Accomplished AT",
        "price": 2399000,
        "fuelType": "Diesel",
        "transmission": "Automatic",
        "engineCC": 1956,
        "powerBHP": 170,
        "torqueNm": 350,
        "mileageKmpl": 16.3,
        "mileage": "16.3 kmpl",
        "features": ["6 Airbags", "ADAS", "Rear Camera", "12.3in Touchscreen", "Dual-zone Climate Control", "Wireless Charger", "Dual Panoramic Sunroof", "JBL 9-Speaker", "Ventilated Front Seats", "AT Gearbox"],
        "additionalFeaturesOverBase": ["6-Speed Automatic Gearbox"]
      },
      {
        "id": "csafariv6",
        "name": "Accomplished Plus AT",
        "price": 2734000,
        "fuelType": "Diesel",
        "transmission": "Automatic",
        "engineCC": 1956,
        "powerBHP": 170,
        "torqueNm": 350,
        "mileageKmpl": 16.3,
        "mileage": "16.3 kmpl",
        "features": ["6 Airbags", "ADAS", "360° Camera", "12.3in Touchscreen", "Dual-zone Climate Control", "Wireless Charger", "Dual Panoramic Sunroof", "JBL 9-Speaker", "Ventilated Front & 2nd Row Seats", "AT Gearbox"],
        "additionalFeaturesOverBase": ["360° Camera", "Ventilated 2nd Row Seats"]
      }
    ],
    "dealerPrices": [],
    "description": "The Tata Safari is a premium 3-row flagship SUV, offering imposing style, 5-star GNCAP safety, and executive-level comfort.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 205
  },
  {
    "id": "c-i20",
    "slug": "hyundai-i20-2024",
    "category": "car",
    "brand": "Hyundai",
    "model": "i20",
    "year": 2024,
    "startingPrice": 599700,
    "emiFrom": 8996,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/150603/i20-exterior-right-front-three-quarter-13.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/150603/i20-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/150603/i20-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/150603/i20-exterior-rear-view-2.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/150603/i20-exterior-front-view.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/150603/i20-exterior-right-front-three-quarter-13.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol"
    ],
    "transmissions": [
      "Manual",
      "CVT"
    ],
    "mileage": "20.0 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 311,
    "engineCC": 1197,
    "powerBHP": 82,
    "torqueNm": 114,
    "safetyRating": 3,
    "rating": 4.5,
    "reviewCount": 1420,
    "colors": [
      "Fiery Red",
      "Polar White",
      "Typhoon Silver",
      "Starry Night",
      "Amazon Grey"
    ],
    "features": [
      "Electric Sunroof",
      "Bose Premium 7 Speaker System",
      "10.25-inch Touchscreen",
      "Oxyboost Air Purifier",
      "6 Airbags"
    ],
    "variants": [
      {
        "id": "ci20v1",
        "name": "Era 1.2 MT",
        "price": 704000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1197,
        "powerBHP": 82,
        "torqueNm": 114,
        "mileageKmpl": 20.35,
        "mileage": "20.35 kmpl",
        "features": ["Dual Airbags", "ABS", "Rear Sensors", "Power Windows", "AC"],
        "additionalFeaturesOverBase": []
      },
      {
        "id": "ci20v2",
        "name": "Magna 1.2 MT",
        "price": 805000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1197,
        "powerBHP": 82,
        "torqueNm": 114,
        "mileageKmpl": 20.35,
        "mileage": "20.35 kmpl",
        "features": ["Dual Airbags", "ABS", "Rear Camera", "8in Touchscreen", "AC"],
        "additionalFeaturesOverBase": ["Rear Camera", "8in Touchscreen"]
      },
      {
        "id": "ci20v3",
        "name": "Sportz 1.2 MT",
        "price": 897000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1197,
        "powerBHP": 82,
        "torqueNm": 114,
        "mileageKmpl": 20.35,
        "mileage": "20.35 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "10.25in Touchscreen", "Auto Climate Control", "Cruise Control"],
        "additionalFeaturesOverBase": ["6 Airbags", "10.25in Touchscreen", "Auto Climate Control", "Cruise Control"]
      },
      {
        "id": "ci20v4",
        "name": "Sportz 1.2 IVT",
        "price": 962000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1197,
        "powerBHP": 82,
        "torqueNm": 114,
        "mileageKmpl": 19.65,
        "mileage": "19.65 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "10.25in Touchscreen", "Auto Climate Control", "Cruise Control", "IVT CVT Gearbox"],
        "additionalFeaturesOverBase": ["IVT CVT Automatic Gearbox"]
      },
      {
        "id": "ci20v5",
        "name": "Asta 1.2 MT",
        "price": 1009000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1197,
        "powerBHP": 82,
        "torqueNm": 114,
        "mileageKmpl": 20.35,
        "mileage": "20.35 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "10.25in Touchscreen", "Auto Climate Control", "Cruise Control", "Sunroof", "Wireless Charger"],
        "additionalFeaturesOverBase": ["Sunroof", "Wireless Charger"]
      },
      {
        "id": "ci20v6",
        "name": "Asta (O) 1.2 IVT",
        "price": 1121000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1197,
        "powerBHP": 82,
        "torqueNm": 114,
        "mileageKmpl": 19.65,
        "mileage": "19.65 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "10.25in Touchscreen", "Auto Climate Control", "Cruise Control", "Sunroof", "Wireless Charger", "Bose Premium 7-Speaker", "Oxyboost Air Purifier", "IVT Gearbox"],
        "additionalFeaturesOverBase": ["Bose Premium 7-Speaker", "Oxyboost Air Purifier"]
      }
    ],
    "dealerPrices": [],
    "description": "The Hyundai i20 is a premium hatchback combining cutting-edge technology, striking design, and advanced safety features for modern city driving.",
    "pros": [
      "Compact dimensions make it very easy to drive and park in city traffic",
      "Outstanding fuel economy keeps running costs low",
      "Widespread service support and highly affordable parts"
    ],
    "cons": [
      "Limited luggage boot space for weekend family trips",
      "Cabin is not well insulated from engine and tyre noise at highway speeds",
      "Suspension feels slightly basic over large road potholes"
    ],
    "groundClearance": 165
  },
  {
    "id": "c-hector",
    "slug": "mg-hector-2024",
    "category": "car",
    "brand": "MG",
    "model": "Hector",
    "year": 2024,
    "startingPrice": 1199000,
    "emiFrom": 17985,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/212881/hector-facelift-exterior-right-front-three-quarter.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/212881/hector-facelift-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/212881/hector-facelift-exterior-right-rear-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/212881/hector-facelift-exterior-rear-view-2.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/212881/hector-facelift-exterior-rear-view-3.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/212881/hector-facelift-exterior-right-front-three-quarter.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "Diesel"
    ],
    "transmissions": [
      "Manual",
      "CVT"
    ],
    "mileage": "15.5 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 587,
    "engineCC": 1956,
    "powerBHP": 168,
    "torqueNm": 350,
    "safetyRating": 5,
    "rating": 4.6,
    "reviewCount": 1210,
    "colors": [
      "Dune Brown",
      "Havana Grey",
      "Candy White",
      "Glaze Red",
      "Aurora Silver"
    ],
    "features": [
      "14-inch HD Infotainment Screen",
      "Dual-pane Panoramic Sunroof",
      "Level 2 ADAS",
      "Smart Power Tailgate",
      "Wireless Charger"
    ],
    "variants": [
      {
        "id": "chectorv1",
        "name": "Style 1.5 Turbo MT",
        "price": 1399000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1451,
        "powerBHP": 141,
        "torqueNm": 250,
        "mileageKmpl": 15.5,
        "mileage": "15.5 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "10.4in Touchscreen", "Auto Climate Control", "5-Seat"],
        "additionalFeaturesOverBase": []
      },
      {
        "id": "chectorv2",
        "name": "Select 1.5 Turbo MT",
        "price": 1599000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1451,
        "powerBHP": 141,
        "torqueNm": 250,
        "mileageKmpl": 15.5,
        "mileage": "15.5 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "14in Portrait Screen", "Auto Climate Control", "Wireless Charger", "Level 2 ADAS"],
        "additionalFeaturesOverBase": ["14in Portrait Screen", "Wireless Charger", "ADAS Level 2"]
      },
      {
        "id": "chectorv3",
        "name": "Shine 1.5 Turbo MT",
        "price": 1749000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1451,
        "powerBHP": 141,
        "torqueNm": 250,
        "mileageKmpl": 15.5,
        "mileage": "15.5 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "14in Portrait Screen", "Auto Climate Control", "Wireless Charger", "Level 2 ADAS", "Dual-Pane Sunroof", "Smart Power Tailgate"],
        "additionalFeaturesOverBase": ["Dual-Pane Panoramic Sunroof", "Smart Power Tailgate"]
      },
      {
        "id": "chectorv4",
        "name": "Shine Pro 2.0 Diesel MT",
        "price": 1899000,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 1956,
        "powerBHP": 168,
        "torqueNm": 350,
        "mileageKmpl": 16.8,
        "mileage": "16.8 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "14in Portrait Screen", "Auto Climate Control", "Wireless Charger", "Level 2 ADAS", "Dual-Pane Sunroof", "Smart Power Tailgate"],
        "additionalFeaturesOverBase": ["2.0L Diesel Engine (168bhp)", "Better Mileage"]
      },
      {
        "id": "chectorv5",
        "name": "Savvy Pro 1.5 Turbo CVT",
        "price": 2220000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1451,
        "powerBHP": 141,
        "torqueNm": 250,
        "mileageKmpl": 14.9,
        "mileage": "14.9 kmpl",
        "features": ["6 Airbags", "ABS", "360° Camera", "14in Portrait Screen", "Dual-zone Climate Control", "Wireless Charger", "Level 2 ADAS", "Dual-Pane Sunroof", "Smart Power Tailgate", "CVT Gearbox", "Heads-Up Display"],
        "additionalFeaturesOverBase": ["CVT Automatic", "360° Camera", "Dual-zone Climate Control", "Heads-Up Display"]
      }
    ],
    "dealerPrices": [],
    "description": "The MG Hector is a feature-rich mid-size SUV that stands out with its massive portrait touchscreen, premium space, and connected car technology.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c-slavia",
    "slug": "skoda-slavia-2024",
    "category": "car",
    "brand": "Skoda",
    "model": "Slavia",
    "year": 2024,
    "startingPrice": 999900,
    "emiFrom": 14999,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/175951/slavia-exterior-right-front-three-quarter-10.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/175951/slavia-exterior-right-front-three-quarter-8.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/175951/slavia-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/175951/slavia-exterior-right-side-view.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/175951/slavia-exterior-right-front-three-quarter-10.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol"
    ],
    "transmissions": [
      "Manual",
      "Automatic"
    ],
    "mileage": "19.4 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 521,
    "engineCC": 999,
    "powerBHP": 114,
    "torqueNm": 178,
    "safetyRating": 5,
    "rating": 4.7,
    "reviewCount": 980,
    "colors": [
      "Crystal Blue",
      "Tornado Red",
      "Carbon Steel",
      "Brilliant Silver",
      "Candy White"
    ],
    "features": [
      "Electric Sunroof",
      "Ventilated Front Seats",
      "8-inch Virtual Cockpit",
      "10-inch Infotainment",
      "Electronic Stability Control"
    ],
    "variants": [
      {
        "id": "cslaviav1",
        "name": "Classic 1.0 TSI MT",
        "price": 1139000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 999,
        "powerBHP": 114,
        "torqueNm": 178,
        "mileageKmpl": 19.4,
        "mileage": "19.4 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "Power Windows", "AC", "ESC"],
        "additionalFeaturesOverBase": []
      },
      {
        "id": "cslaviav2",
        "name": "Active 1.0 TSI MT",
        "price": 1309000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 999,
        "powerBHP": 114,
        "torqueNm": 178,
        "mileageKmpl": 19.4,
        "mileage": "19.4 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "10in Touchscreen", "Auto Climate Control", "ESC", "Cruise Control"],
        "additionalFeaturesOverBase": ["10in Touchscreen", "Auto Climate Control", "Cruise Control"]
      },
      {
        "id": "cslaviav3",
        "name": "Ambition 1.0 TSI MT",
        "price": 1449000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 999,
        "powerBHP": 114,
        "torqueNm": 178,
        "mileageKmpl": 19.4,
        "mileage": "19.4 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "10in Touchscreen", "Auto Climate Control", "Sunroof", "Wireless Charger"],
        "additionalFeaturesOverBase": ["Sunroof", "Wireless Charger"]
      },
      {
        "id": "cslaviav4",
        "name": "Ambition 1.0 TSI AT",
        "price": 1549000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 999,
        "powerBHP": 114,
        "torqueNm": 178,
        "mileageKmpl": 19.4,
        "mileage": "19.4 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "10in Touchscreen", "Auto Climate Control", "Sunroof", "Wireless Charger", "6-Speed AT"],
        "additionalFeaturesOverBase": ["6-Speed Automatic Gearbox"]
      },
      {
        "id": "cslaviav5",
        "name": "Style 1.5 TSI MT",
        "price": 1619000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1498,
        "powerBHP": 148,
        "torqueNm": 250,
        "mileageKmpl": 18.9,
        "mileage": "18.9 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "10in Touchscreen", "Auto Climate Control", "Sunroof", "Wireless Charger", "Ventilated Front Seats"],
        "additionalFeaturesOverBase": ["1.5L TSI Engine (148bhp)", "Ventilated Front Seats"]
      },
      {
        "id": "cslaviav6",
        "name": "Prestige 1.5 TSI DSG",
        "price": 1869000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1498,
        "powerBHP": 148,
        "torqueNm": 250,
        "mileageKmpl": 19.4,
        "mileage": "19.4 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "10in Touchscreen", "Auto Climate Control", "Sunroof", "Wireless Charger", "Ventilated Front Seats", "8in Virtual Cockpit", "7-Speed DSG"],
        "additionalFeaturesOverBase": ["7-Speed DSG Automatic", "8in Virtual Cockpit", "Ambient Lighting"]
      }
    ],
    "dealerPrices": [],
    "description": "The Skoda Slavia is an elegant and dynamic premium sedan designed specifically for the Indian market, offering outstanding driving performance.",
    "pros": [
      "Low-slung aerodynamic shape offers excellent high-speed stability",
      "Generous passenger legroom and comfortable rear bench",
      "Large luggage boot space for family bags"
    ],
    "cons": [
      "Lower ground clearance can cause scraping on tall speedbreakers",
      "Low ingress and egress can be inconvenient for elderly passengers",
      "Parking in congested city areas can be tricky due to length"
    ],
    "groundClearance": 165
  },
  {
    "id": "c-virtus",
    "slug": "volkswagen-virtus-2024",
    "category": "car",
    "brand": "Volkswagen",
    "model": "Virtus",
    "year": 2024,
    "startingPrice": 1049900,
    "emiFrom": 15749,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/144681/virtus-exterior-right-front-three-quarter-11.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/144681/virtus-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/144681/virtus-exterior-right-side-view-6.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/144681/virtus-exterior-right-rear-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/144681/virtus-exterior-rear-view.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/144681/virtus-exterior-right-front-three-quarter-11.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol"
    ],
    "transmissions": [
      "Manual",
      "Automatic"
    ],
    "mileage": "19.6 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 521,
    "engineCC": 1498,
    "powerBHP": 148,
    "torqueNm": 250,
    "safetyRating": 5,
    "rating": 4.8,
    "reviewCount": 1050,
    "colors": [
      "Wild Cherry Red",
      "Rising Blue Metallic",
      "Curcuma Yellow",
      "Carbon Steel Grey",
      "Reflex Silver"
    ],
    "features": [
      "1.5L TSI EVO Engine",
      "GT Styling Elements",
      "8-inch Digital Cockpit",
      "10-inch Touchscreen",
      "Ambient Lighting"
    ],
    "variants": [
      {
        "id": "cvirtusv1",
        "name": "Comfortline 1.0 TSI MT",
        "price": 1156000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 999,
        "powerBHP": 114,
        "torqueNm": 178,
        "mileageKmpl": 19.6,
        "mileage": "19.6 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "Power Windows", "AC"],
        "additionalFeaturesOverBase": []
      },
      {
        "id": "cvirtusv2",
        "name": "Highline 1.0 TSI MT",
        "price": 1379000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 999,
        "powerBHP": 114,
        "torqueNm": 178,
        "mileageKmpl": 19.6,
        "mileage": "19.6 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "10in Touchscreen", "Auto Climate Control", "Cruise Control"],
        "additionalFeaturesOverBase": ["10in Touchscreen", "Auto Climate Control", "Cruise Control"]
      },
      {
        "id": "cvirtusv3",
        "name": "Highline 1.0 TSI AT",
        "price": 1479000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 999,
        "powerBHP": 114,
        "torqueNm": 178,
        "mileageKmpl": 19.6,
        "mileage": "19.6 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "10in Touchscreen", "Auto Climate Control", "Cruise Control", "6-Speed AT"],
        "additionalFeaturesOverBase": ["6-Speed Automatic Gearbox"]
      },
      {
        "id": "cvirtusv4",
        "name": "Topline 1.0 TSI MT",
        "price": 1539000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 999,
        "powerBHP": 114,
        "torqueNm": 178,
        "mileageKmpl": 19.6,
        "mileage": "19.6 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "10in Touchscreen", "Auto Climate Control", "Cruise Control", "Wireless Charger", "Sunroof"],
        "additionalFeaturesOverBase": ["Sunroof", "Wireless Charger"]
      },
      {
        "id": "cvirtusv5",
        "name": "GT Plus 1.5 TSI DSG",
        "price": 1799000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1498,
        "powerBHP": 148,
        "torqueNm": 250,
        "mileageKmpl": 18.7,
        "mileage": "18.7 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "10in Touchscreen", "Auto Climate Control", "Cruise Control", "Wireless Charger", "Sunroof", "GT Styling", "8in Digital Cockpit"],
        "additionalFeaturesOverBase": ["1.5L TSI Engine (148bhp)", "GT Styling", "8in Digital Cockpit"]
      },
      {
        "id": "cvirtusv6",
        "name": "GT Plus Sport 1.5 TSI DSG",
        "price": 1915000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1498,
        "powerBHP": 148,
        "torqueNm": 250,
        "mileageKmpl": 18.7,
        "mileage": "18.7 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "10in Touchscreen", "Auto Climate Control", "Cruise Control", "Wireless Charger", "Sunroof", "GT Styling", "8in Digital Cockpit", "Ambient Lighting"],
        "additionalFeaturesOverBase": ["Ambient Lighting", "Sport Pack"]
      }
    ],
    "dealerPrices": [],
    "description": "The Volkswagen Virtus is a striking, performance-oriented sedan that brings together premium build quality, sporty aesthetics, and class-leading driving dynamics.",
    "pros": [
      "Low-slung aerodynamic shape offers excellent high-speed stability",
      "Generous passenger legroom and comfortable rear bench",
      "Large luggage boot space for family bags"
    ],
    "cons": [
      "Lower ground clearance can cause scraping on tall speedbreakers",
      "Low ingress and egress can be inconvenient for elderly passengers",
      "Parking in congested city areas can be tricky due to length"
    ],
    "groundClearance": 165
  },
  {
    "id": "c-verna",
    "slug": "hyundai-verna-2024",
    "category": "car",
    "brand": "Hyundai",
    "model": "Verna",
    "year": 2024,
    "startingPrice": 1098000,
    "emiFrom": 16470,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/204398/verna-exterior-right-front-three-quarter.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/204398/verna-exterior-right-rear-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/204398/verna-exterior-left-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/204398/verna-exterior-left-front-three-quarter-10.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/204398/verna-exterior-front-view-6.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/204398/verna-exterior-right-front-three-quarter.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol"
    ],
    "transmissions": [
      "Manual",
      "CVT",
      "Automatic"
    ],
    "mileage": "18.6 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 528,
    "engineCC": 1482,
    "powerBHP": 158,
    "torqueNm": 253,
    "safetyRating": 5,
    "rating": 4.7,
    "reviewCount": 1340,
    "colors": [
      "Abyss Black",
      "Atlas White",
      "Titan Grey",
      "Fiery Red",
      "Tellurian Brown"
    ],
    "features": [
      "Level 2 ADAS Suite",
      "Horizon LED DRLs",
      "Bose Premium Audio",
      "Heated & Ventilated Seats",
      "10.25-inch Dual Screens"
    ],
    "variants": [
      {
        "id": "cvernav1",
        "name": "EX 1.5 MPi MT",
        "price": 1100000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1497,
        "powerBHP": 113,
        "torqueNm": 144,
        "mileageKmpl": 18.6,
        "mileage": "18.6 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "Auto Climate Control", "Power Windows"],
        "additionalFeaturesOverBase": []
      },
      {
        "id": "cvernav2",
        "name": "S 1.5 MPi MT",
        "price": 1229000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1497,
        "powerBHP": 113,
        "torqueNm": 144,
        "mileageKmpl": 18.6,
        "mileage": "18.6 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "10.25in Touchscreen", "Auto Climate Control", "Cruise Control"],
        "additionalFeaturesOverBase": ["10.25in Touchscreen", "Cruise Control"]
      },
      {
        "id": "cvernav3",
        "name": "S 1.5 MPi IVT",
        "price": 1339000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1497,
        "powerBHP": 113,
        "torqueNm": 144,
        "mileageKmpl": 17.9,
        "mileage": "17.9 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "10.25in Touchscreen", "Auto Climate Control", "Cruise Control", "IVT CVT Gearbox"],
        "additionalFeaturesOverBase": ["IVT CVT Automatic Gearbox"]
      },
      {
        "id": "cvernav4",
        "name": "SX 1.5 Turbo MT",
        "price": 1449000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1482,
        "powerBHP": 158,
        "torqueNm": 253,
        "mileageKmpl": 18.3,
        "mileage": "18.3 kmpl",
        "features": ["6 Airbags", "ADAS", "Rear Camera", "10.25in Touchscreen", "Auto Climate Control", "Sunroof", "Wireless Charger", "Ventilated Seats"],
        "additionalFeaturesOverBase": ["1.5L Turbo Engine (158bhp)", "ADAS Level 2", "Sunroof", "Wireless Charger"]
      },
      {
        "id": "cvernav5",
        "name": "SX 1.5 Turbo IVT",
        "price": 1579000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1482,
        "powerBHP": 158,
        "torqueNm": 253,
        "mileageKmpl": 17.5,
        "mileage": "17.5 kmpl",
        "features": ["6 Airbags", "ADAS", "Rear Camera", "10.25in Touchscreen", "Auto Climate Control", "Sunroof", "Wireless Charger", "Ventilated Seats", "IVT Gearbox"],
        "additionalFeaturesOverBase": ["IVT Automatic Gearbox"]
      },
      {
        "id": "cvernav6",
        "name": "SX (O) 1.5 Turbo DCT",
        "price": 1742000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1482,
        "powerBHP": 158,
        "torqueNm": 253,
        "mileageKmpl": 18.6,
        "mileage": "18.6 kmpl",
        "features": ["6 Airbags", "ADAS Level 2", "360° Camera", "10.25in Dual Screens", "Dual-zone Climate Control", "Sunroof", "Wireless Charger", "Ventilated & Heated Seats", "Bose Audio", "7-Speed DCT"],
        "additionalFeaturesOverBase": ["7-Speed DCT", "360° Camera", "Dual-zone Climate Control", "Bose Audio"]
      }
    ],
    "dealerPrices": [],
    "description": "The futuristic Hyundai Verna matches styling inspired by parametric design with high-performance turbo engines and segment-first luxury features.",
    "pros": [
      "Low-slung aerodynamic shape offers excellent high-speed stability",
      "Generous passenger legroom and comfortable rear bench",
      "Large luggage boot space for family bags"
    ],
    "cons": [
      "Lower ground clearance can cause scraping on tall speedbreakers",
      "Low ingress and egress can be inconvenient for elderly passengers",
      "Parking in congested city areas can be tricky due to length"
    ],
    "groundClearance": 170
  },
  {
    "id": "c-elevate",
    "slug": "honda-elevate-2024",
    "category": "car",
    "brand": "Honda",
    "model": "Elevate",
    "year": 2024,
    "startingPrice": 1169000,
    "emiFrom": 17535,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/142515/elevate-exterior-right-front-three-quarter-29.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/142515/elevate-exterior-right-front-three-quarter-26.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/142515/elevate-exterior-right-side-view-2.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/142515/elevate-exterior-right-side-view-4.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/142515/elevate-exterior-left-rear-three-quarter-2.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/142515/elevate-exterior-right-front-three-quarter-29.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol"
    ],
    "transmissions": [
      "Manual",
      "CVT"
    ],
    "mileage": "16.9 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 458,
    "engineCC": 1498,
    "powerBHP": 119,
    "torqueNm": 145,
    "safetyRating": 5,
    "rating": 4.5,
    "reviewCount": 890,
    "colors": [
      "Phoenix Orange Pearl",
      "Obsidian Blue Pearl",
      "Radiant Red Metallic",
      "Golden Brown Metallic",
      "Platinum White Pearl"
    ],
    "features": [
      "Honda SENSING ADAS",
      "LaneWatch Camera",
      "10.25-inch Touchscreen",
      "Single-pane Sunroof",
      "Wireless Apple CarPlay/Android Auto"
    ],
    "variants": [
      {
        "id": "celevatev1",
        "name": "SV MT",
        "price": 1169000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1498,
        "powerBHP": 119,
        "torqueNm": 145,
        "mileageKmpl": 16.9,
        "mileage": "16.9 kmpl",
        "features": ["Dual Airbags", "ABS", "Rear Camera", "Power Windows", "AC"],
        "additionalFeaturesOverBase": []
      },
      {
        "id": "celevatev2",
        "name": "V MT",
        "price": 1289000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1498,
        "powerBHP": 119,
        "torqueNm": 145,
        "mileageKmpl": 16.9,
        "mileage": "16.9 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "10.25in Touchscreen", "Auto Climate Control", "LaneWatch Camera"],
        "additionalFeaturesOverBase": ["6 Airbags", "10.25in Touchscreen", "LaneWatch Camera"]
      },
      {
        "id": "celevatev3",
        "name": "V CVT",
        "price": 1399000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1498,
        "powerBHP": 119,
        "torqueNm": 145,
        "mileageKmpl": 16.9,
        "mileage": "16.9 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "10.25in Touchscreen", "Auto Climate Control", "LaneWatch Camera", "CVT Gearbox"],
        "additionalFeaturesOverBase": ["CVT Automatic Gearbox"]
      },
      {
        "id": "celevatev4",
        "name": "VX MT",
        "price": 1479000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1498,
        "powerBHP": 119,
        "torqueNm": 145,
        "mileageKmpl": 16.9,
        "mileage": "16.9 kmpl",
        "features": ["6 Airbags", "Honda SENSING ADAS", "Rear Camera", "10.25in Touchscreen", "Auto Climate Control", "LaneWatch Camera", "Sunroof", "Wireless Charger"],
        "additionalFeaturesOverBase": ["Honda SENSING ADAS", "Sunroof", "Wireless Charger"]
      },
      {
        "id": "celevatev5",
        "name": "VX CVT",
        "price": 1579000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1498,
        "powerBHP": 119,
        "torqueNm": 145,
        "mileageKmpl": 16.9,
        "mileage": "16.9 kmpl",
        "features": ["6 Airbags", "Honda SENSING ADAS", "Rear Camera", "10.25in Touchscreen", "Auto Climate Control", "LaneWatch Camera", "Sunroof", "Wireless Charger", "CVT Gearbox"],
        "additionalFeaturesOverBase": ["CVT Automatic Gearbox"]
      },
      {
        "id": "celevatev6",
        "name": "ZX CVT",
        "price": 1643000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1498,
        "powerBHP": 119,
        "torqueNm": 145,
        "mileageKmpl": 16.9,
        "mileage": "16.9 kmpl",
        "features": ["6 Airbags", "Honda SENSING ADAS", "360° View Camera", "10.25in Touchscreen", "Auto Climate Control", "LaneWatch Camera", "Sunroof", "Wireless Charger", "CVT Gearbox"],
        "additionalFeaturesOverBase": ["360° View Camera"]
      }
    ],
    "dealerPrices": [],
    "description": "The Honda Elevate is a robust, urban SUV featuring high ground clearance, a spacious cabin, and Honda's signature i-VTEC refinement and reliability.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c-grandvitara",
    "slug": "maruti-suzuki-grand-vitara-2024",
    "category": "car",
    "brand": "Maruti Suzuki",
    "model": "Grand Vitara",
    "year": 2024,
    "startingPrice": 1080000,
    "emiFrom": 16200,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/123185/grand-vitara-exterior-right-front-three-quarter-5.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/123185/grand-vitara-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/123185/grand-vitara-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/123185/grand-vitara-exterior-right-rear-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/123185/grand-vitara-exterior-rear-view.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/123185/grand-vitara-exterior-right-front-three-quarter-5.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "Hybrid",
      "CNG"
    ],
    "transmissions": [
      "Manual",
      "Automatic",
      "CVT"
    ],
    "mileage": "27.97 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 373,
    "engineCC": 1490,
    "powerBHP": 102,
    "torqueNm": 136.8,
    "safetyRating": 5,
    "rating": 4.6,
    "reviewCount": 1730,
    "colors": [
      "Nexa Blue",
      "Splendid Silver",
      "Grandeur Grey",
      "Opulent Red",
      "Arctic White"
    ],
    "features": [
      "Strong Hybrid Powertrain",
      "ALLGRIP 4WD System",
      "Panoramic Sunroof",
      "360 View Camera",
      "Head-Up Display"
    ],
    "variants": [
      {
        "id": "cgrandvitarav1",
        "name": "Sigma Smart Hybrid MT",
        "price": 1080000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1462,
        "powerBHP": 102,
        "torqueNm": 136.8,
        "mileageKmpl": 19.38,
        "mileage": "19.38 kmpl",
        "features": ["Dual Airbags", "ABS", "Rear Camera", "AC", "Power Windows"],
        "additionalFeaturesOverBase": []
      },
      {
        "id": "cgrandvitarav2",
        "name": "Delta Smart Hybrid MT",
        "price": 1213000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1462,
        "powerBHP": 102,
        "torqueNm": 136.8,
        "mileageKmpl": 19.38,
        "mileage": "19.38 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "9in Touchscreen", "Auto Climate Control", "Cruise Control"],
        "additionalFeaturesOverBase": ["6 Airbags", "9in Touchscreen", "Auto Climate Control"]
      },
      {
        "id": "cgrandvitarav3",
        "name": "Zeta Smart Hybrid MT",
        "price": 1362000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1462,
        "powerBHP": 102,
        "torqueNm": 136.8,
        "mileageKmpl": 19.38,
        "mileage": "19.38 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "9in Touchscreen", "Auto Climate Control", "Cruise Control", "Sunroof", "Wireless Charger"],
        "additionalFeaturesOverBase": ["Sunroof", "Wireless Charger"]
      },
      {
        "id": "cgrandvitarav4",
        "name": "Alpha Smart Hybrid AT",
        "price": 1519000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1462,
        "powerBHP": 102,
        "torqueNm": 136.8,
        "mileageKmpl": 20.58,
        "mileage": "20.58 kmpl",
        "features": ["6 Airbags", "ABS", "360° Camera", "9in Touchscreen", "Auto Climate Control", "Cruise Control", "Panoramic Sunroof", "Wireless Charger", "HUD"],
        "additionalFeaturesOverBase": ["360° Camera", "Panoramic Sunroof", "Heads-Up Display"]
      },
      {
        "id": "cgrandvitarav5",
        "name": "Alpha Intelligent Hybrid CVT",
        "price": 1812000,
        "fuelType": "Hybrid",
        "transmission": "Automatic",
        "engineCC": 1490,
        "powerBHP": 91,
        "torqueNm": 122,
        "mileageKmpl": 27.97,
        "mileage": "27.97 kmpl",
        "features": ["6 Airbags", "ABS", "360° Camera", "9in Touchscreen", "Auto Climate Control", "Cruise Control", "Panoramic Sunroof", "Wireless Charger", "HUD", "Strong Hybrid"],
        "additionalFeaturesOverBase": ["Strong Hybrid System", "27.97 kmpl ARAI"]
      },
      {
        "id": "cgrandvitarav6",
        "name": "Alpha Plus Intelligent Hybrid CVT",
        "price": 1999000,
        "fuelType": "Hybrid",
        "transmission": "Automatic",
        "engineCC": 1490,
        "powerBHP": 91,
        "torqueNm": 122,
        "mileageKmpl": 27.97,
        "mileage": "27.97 kmpl",
        "features": ["6 Airbags", "ABS", "360° Camera", "9in Touchscreen", "Auto Climate Control", "Cruise Control", "Panoramic Sunroof", "Wireless Charger", "HUD", "Strong Hybrid", "ALLGRIP 4WD"],
        "additionalFeaturesOverBase": ["ALLGRIP 4WD System"]
      }
    ],
    "dealerPrices": [],
    "description": "The Grand Vitara is Maruti Suzuki's flagship SUV, featuring a highly efficient self-charging strong hybrid system and off-road capability.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c-tiago-ev",
    "slug": "tata-tiago-ev-2024",
    "category": "ev",
    "brand": "Tata",
    "model": "Tiago EV",
    "year": 2024,
    "startingPrice": 799000,
    "emiFrom": 11985,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/218950/next-gen-tiago-ev-exterior-right-front-three-quarter-36.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/218950/next-gen-tiago-ev-exterior-left-front-three-quarter-35.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/218950/next-gen-tiago-ev-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/218950/next-gen-tiago-ev-exterior-right-rear-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/218950/next-gen-tiago-ev-exterior-rear-view-3.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/218950/next-gen-tiago-ev-exterior-right-front-three-quarter-36.png?isig=0&q=80",
    "fuelTypes": [
      "Electric"
    ],
    "transmissions": [
      "Automatic"
    ],
    "mileage": "315 km range",
    "seatingCapacity": 5,
    "bootSpaceL": 240,
    "engineCC": 0,
    "powerBHP": 74,
    "torqueNm": 114,
    "safetyRating": 4,
    "rating": 4.5,
    "reviewCount": 1120,
    "colors": [
      "Signature Teal Blue",
      "Tropical Mist",
      "Daytona Grey",
      "Pristine White",
      "Midnight Plum"
    ],
    "features": [
      "Multi-mode Regen",
      "Ziptron High Voltage Tech",
      "7-inch Harman Touchscreen",
      "Cruise Control",
      "Fully Auto AC"
    ],
    "variants": [
      {
        "id": "ctiagoevv1",
        "name": "XE Medium Range",
        "price": 799000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "engineCC": 0,
        "powerBHP": 60,
        "torqueNm": 110,
        "mileageKmpl": 250,
        "mileage": "250 km range",
        "features": ["Dual Airbags", "ABS", "Rear Camera", "AC", "Ziptron EV Tech"],
        "additionalFeaturesOverBase": []
      },
      {
        "id": "ctiagoevv2",
        "name": "XM Medium Range",
        "price": 847000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "engineCC": 0,
        "powerBHP": 60,
        "torqueNm": 110,
        "mileageKmpl": 250,
        "mileage": "250 km range",
        "features": ["Dual Airbags", "ABS", "Rear Camera", "7in Touchscreen", "Auto AC"],
        "additionalFeaturesOverBase": ["7in Touchscreen"]
      },
      {
        "id": "ctiagoevv3",
        "name": "XZ+ Medium Range",
        "price": 949000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "engineCC": 0,
        "powerBHP": 60,
        "torqueNm": 110,
        "mileageKmpl": 250,
        "mileage": "250 km range",
        "features": ["Dual Airbags", "ABS", "Rear Camera", "7in Touchscreen", "Auto AC", "Cruise Control"],
        "additionalFeaturesOverBase": ["Cruise Control"]
      },
      {
        "id": "ctiagoevv4",
        "name": "XZ Plus Long Range",
        "price": 1009000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "engineCC": 0,
        "powerBHP": 74,
        "torqueNm": 114,
        "mileageKmpl": 315,
        "mileage": "315 km range",
        "features": ["Dual Airbags", "ABS", "Rear Camera", "7in Touchscreen", "Auto AC", "Cruise Control", "Long Range Battery"],
        "additionalFeaturesOverBase": ["Long Range Battery (315km)", "74bhp Motor"]
      },
      {
        "id": "ctiagoevv5",
        "name": "XZ Plus Tech LUX Long Range",
        "price": 1149000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "engineCC": 0,
        "powerBHP": 74,
        "torqueNm": 114,
        "mileageKmpl": 315,
        "mileage": "315 km range",
        "features": ["Dual Airbags", "ABS", "Rear Camera", "7in Touchscreen", "Auto AC", "Cruise Control", "Long Range Battery", "Wireless Charger", "Sunroof"],
        "additionalFeaturesOverBase": ["Wireless Charger", "Sunroof"]
      }
    ],
    "dealerPrices": [],
    "description": "The Tata Tiago EV is the most accessible premium electric hatchback in India, delivering zero emissions, high-tech features, and a fun drive.",
    "pros": [
      "Completely silent, vibration-free cabin environment",
      "Instant electric torque response makes overtaking a breeze",
      "Zero tailpipe emissions and extremely cheap running costs"
    ],
    "cons": [
      "Long road trips require planning around public charging stations",
      "Higher initial investment cost compared to ICE cars",
      "Long-term battery replacement cost is high"
    ],
    "groundClearance": 165
  },
  {
    "id": "c-scorpio-classic",
    "slug": "mahindra-scorpio-classic-2024",
    "category": "car",
    "brand": "Mahindra",
    "model": "Scorpio Classic",
    "year": 2024,
    "startingPrice": 1359000,
    "emiFrom": 20385,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/128413/scorpio-exterior-right-front-three-quarter-2.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/128413/scorpio-classic-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/128413/scorpio-classic-exterior-rear-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/128413/scorpio-classic-exterior-left-rear-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/128413/scorpio-classic-interior-dashboard-2.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/128413/scorpio-exterior-right-front-three-quarter-2.png?isig=0&q=80",
    "fuelTypes": [
      "Diesel"
    ],
    "transmissions": [
      "Manual"
    ],
    "mileage": "15.0 kmpl",
    "seatingCapacity": 7,
    "bootSpaceL": 460,
    "engineCC": 2184,
    "powerBHP": 130,
    "torqueNm": 300,
    "safetyRating": 3,
    "rating": 4.6,
    "reviewCount": 2140,
    "colors": [
      "Galaxy Grey",
      "Everest White",
      "Stealth Black",
      "Molten Red Rage"
    ],
    "features": [
      "Signature Scorpio Grille",
      "mHawk Gen 2 Engine",
      "9-inch Touchscreen Infotainment",
      "Cruise Control",
      "17-inch Alloy Wheels"
    ],
    "variants": [
      {
        "id": "cscorpiocv1",
        "name": "S MT 7 STR",
        "price": 1359000,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 2184,
        "powerBHP": 130,
        "torqueNm": 300,
        "mileageKmpl": 15.0,
        "mileage": "15.0 kmpl",
        "features": ["Dual Airbags", "ABS", "Power Windows", "AC", "7-Seat"],
        "additionalFeaturesOverBase": []
      },
      {
        "id": "cscorpiocv2",
        "name": "S5 MT 7 STR",
        "price": 1484000,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 2184,
        "powerBHP": 130,
        "torqueNm": 300,
        "mileageKmpl": 15.0,
        "mileage": "15.0 kmpl",
        "features": ["Dual Airbags", "ABS", "Rear Camera", "9in Touchscreen", "AC", "7-Seat"],
        "additionalFeaturesOverBase": ["9in Touchscreen", "Rear Camera"]
      },
      {
        "id": "cscorpiocv3",
        "name": "S7 MT 7 STR",
        "price": 1588000,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 2184,
        "powerBHP": 130,
        "torqueNm": 300,
        "mileageKmpl": 15.0,
        "mileage": "15.0 kmpl",
        "features": ["Dual Airbags", "ABS", "Rear Camera", "9in Touchscreen", "Auto Climate Control", "Cruise Control", "7-Seat"],
        "additionalFeaturesOverBase": ["Auto Climate Control", "Cruise Control"]
      },
      {
        "id": "cscorpiocv4",
        "name": "S11 MT 7 STR",
        "price": 1735000,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 2184,
        "powerBHP": 130,
        "torqueNm": 300,
        "mileageKmpl": 15.0,
        "mileage": "15.0 kmpl",
        "features": ["Dual Airbags", "ABS", "Rear Camera", "9in Touchscreen", "Auto Climate Control", "Cruise Control", "17in Alloy Wheels", "LED Projector Headlamps"],
        "additionalFeaturesOverBase": ["17in Alloy Wheels", "LED Projector Headlamps"]
      }
    ],
    "dealerPrices": [],
    "description": "The Scorpio Classic maintains Mahindra's legendary muscular stance and robust capabilities, updated with the lightweight mHawk engine.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c-glanza",
    "slug": "toyota-glanza-2024",
    "category": "car",
    "brand": "Toyota",
    "model": "Glanza",
    "year": 2024,
    "startingPrice": 686000,
    "emiFrom": 10290,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/112839/glanza-exterior-right-front-three-quarter-6.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/112839/glanza-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/112839/glanza-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/112839/glanza-exterior-right-rear-three-quarter-2.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/112839/glanza-exterior-left-rear-three-quarter.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/112839/glanza-exterior-right-front-three-quarter-6.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "CNG"
    ],
    "transmissions": [
      "Manual",
      "AMT"
    ],
    "mileage": "22.3 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 318,
    "engineCC": 1197,
    "powerBHP": 89,
    "torqueNm": 113,
    "safetyRating": 3,
    "rating": 4.5,
    "reviewCount": 860,
    "colors": [
      "Sportin Red",
      "Gaming Grey",
      "Enticing Silver",
      "Insta Blue",
      "Cafe White"
    ],
    "features": [
      "Toyota i-Connect Connected Features",
      "9-inch Smart Playcast",
      "Heads-up Display",
      "360 Degree Camera",
      "6 Airbags"
    ],
    "variants": [
      {
        "id": "cglanzav1",
        "name": "E MT",
        "price": 686000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1197,
        "powerBHP": 89,
        "torqueNm": 113,
        "mileageKmpl": 22.3,
        "mileage": "22.3 kmpl",
        "features": ["Dual Airbags", "ABS", "Rear Sensors", "Power Windows", "AC"],
        "additionalFeaturesOverBase": []
      },
      {
        "id": "cglanzav2",
        "name": "S MT",
        "price": 750000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1197,
        "powerBHP": 89,
        "torqueNm": 113,
        "mileageKmpl": 22.3,
        "mileage": "22.3 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "9in Smart Playcast", "Auto AC", "Cruise Control"],
        "additionalFeaturesOverBase": ["6 Airbags", "9in Smart Playcast", "Rear Camera"]
      },
      {
        "id": "cglanzav3",
        "name": "G MT",
        "price": 831000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1197,
        "powerBHP": 89,
        "torqueNm": 113,
        "mileageKmpl": 22.3,
        "mileage": "22.3 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "9in Smart Playcast", "Auto AC", "Cruise Control", "Wireless Charger", "HUD"],
        "additionalFeaturesOverBase": ["Wireless Charger", "Heads-Up Display"]
      },
      {
        "id": "cglanzav4",
        "name": "G AMT",
        "price": 886000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1197,
        "powerBHP": 89,
        "torqueNm": 113,
        "mileageKmpl": 22.3,
        "mileage": "22.3 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "9in Smart Playcast", "Auto AC", "Cruise Control", "Wireless Charger", "HUD", "AMT Gearbox"],
        "additionalFeaturesOverBase": ["AMT Automatic Gearbox"]
      },
      {
        "id": "cglanzav5",
        "name": "V AMT",
        "price": 1000000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1197,
        "powerBHP": 89,
        "torqueNm": 113,
        "mileageKmpl": 22.3,
        "mileage": "22.3 kmpl",
        "features": ["6 Airbags", "ABS", "360° Camera", "9in Smart Playcast", "Auto AC", "Cruise Control", "Wireless Charger", "HUD", "AMT Gearbox", "Toyota i-Connect"],
        "additionalFeaturesOverBase": ["360° Camera", "Toyota i-Connect"]
      }
    ],
    "dealerPrices": [],
    "description": "The Toyota Glanza is a dynamic, premium hatchback packed with smart features, sporty design, and backed by Toyota's unmatched warranty and service support.",
    "pros": [
      "Compact dimensions make it very easy to drive and park in city traffic",
      "Outstanding fuel economy keeps running costs low",
      "Widespread service support and highly affordable parts"
    ],
    "cons": [
      "Limited luggage boot space for weekend family trips",
      "Cabin is not well insulated from engine and tyre noise at highway speeds",
      "Suspension feels slightly basic over large road potholes"
    ],
    "groundClearance": 165
  },
  {
    "id": "c-jimny",
    "slug": "maruti-suzuki-jimny-2024",
    "category": "car",
    "brand": "Maruti Suzuki",
    "model": "Jimny",
    "year": 2024,
    "startingPrice": 1274000,
    "emiFrom": 19110,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45299/jimny-exterior-right-front-three-quarter-23.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45299/jimny-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45299/jimny-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45299/jimny-exterior-right-rear-three-quarter-2.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45299/jimny-exterior-rear-view-2.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/45299/jimny-exterior-right-front-three-quarter-23.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol"
    ],
    "transmissions": [
      "Manual",
      "Automatic"
    ],
    "mileage": "16.9 kmpl",
    "seatingCapacity": 4,
    "bootSpaceL": 208,
    "engineCC": 1462,
    "powerBHP": 103,
    "torqueNm": 134,
    "safetyRating": 3,
    "rating": 4.5,
    "reviewCount": 860,
    "colors": [
      "Kinetic Yellow",
      "Sizzling Red",
      "Nexa Blue",
      "Granite Grey",
      "Bluish Black"
    ],
    "features": [
      "ALLGRIP PRO 4WD System",
      "Brake Limited Slip Differential",
      "9-inch SmartPlay Pro+",
      "6 Airbags",
      "LED Headlamps with Washers"
    ],
    "variants": [
      {
        "id": "cjimnyv1",
        "name": "Zeta MT",
        "price": 1274000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1462,
        "powerBHP": 103,
        "torqueNm": 134,
        "mileageKmpl": 16.94,
        "mileage": "16.94 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "4WD System", "AC", "9in SmartPlay"],
        "additionalFeaturesOverBase": []
      },
      {
        "id": "cjimnyv2",
        "name": "Alpha MT",
        "price": 1394000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1462,
        "powerBHP": 103,
        "torqueNm": 134,
        "mileageKmpl": 16.94,
        "mileage": "16.94 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "4WD System", "Auto Climate Control", "9in SmartPlay", "LED Headlamps", "BLSD"],
        "additionalFeaturesOverBase": ["LED Headlamp Washers", "Brake LSD"]
      },
      {
        "id": "cjimnyv3",
        "name": "Zeta AT",
        "price": 1374000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1462,
        "powerBHP": 103,
        "torqueNm": 134,
        "mileageKmpl": 16.39,
        "mileage": "16.39 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "4WD System", "AC", "9in SmartPlay", "4-Speed AT Gearbox"],
        "additionalFeaturesOverBase": ["4-Speed Automatic Gearbox"]
      },
      {
        "id": "cjimnyv4",
        "name": "Alpha AT",
        "price": 1479000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1462,
        "powerBHP": 103,
        "torqueNm": 134,
        "mileageKmpl": 16.39,
        "mileage": "16.39 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "4WD System", "Auto Climate Control", "9in SmartPlay", "LED Headlamps", "BLSD", "4-Speed AT Gearbox"],
        "additionalFeaturesOverBase": ["4-Speed Automatic Gearbox"]
      }
    ],
    "dealerPrices": [],
    "description": "The Maruti Suzuki Jimny is a legendary lightweight off-roader, designed with a rugged ladder-frame chassis, standard 4WD, and timeless retro-modern styling.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c-xuv3xo",
    "slug": "mahindra-xuv-3xo-2024",
    "category": "car",
    "brand": "Mahindra",
    "model": "XUV 3XO",
    "year": 2024,
    "startingPrice": 749000,
    "emiFrom": 11235,
    "isNew": true,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/156405/xuv-3xo-exterior-right-front-three-quarter-33.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/156405/xuv-3xo-exterior-right-front-three-quarter-32.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/156405/xuv-3xo-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/156405/xuv-3xo-exterior-right-rear-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/156405/xuv-3xo-exterior-rear-view.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/156405/xuv-3xo-exterior-right-front-three-quarter-33.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "Diesel"
    ],
    "transmissions": [
      "Manual",
      "Automatic"
    ],
    "mileage": "20.1 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 364,
    "engineCC": 1197,
    "powerBHP": 110,
    "torqueNm": 200,
    "safetyRating": 5,
    "rating": 4.6,
    "reviewCount": 1340,
    "colors": [
      "Deep Forest",
      "Nebula Blue",
      "Everest White",
      "Stealth Black",
      "Tango Red"
    ],
    "features": [
      "Skyroof Panoramic Sunroof",
      "Level 2 ADAS Suite",
      "Dual 10.25-inch Screens",
      "Harman Kardon Audio System",
      "Dual Zone Climate Control"
    ],
    "variants": [
      {
        "id": "cxuv3xov1",
        "name": "MX1 1.2 Petrol MT",
        "price": 749000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1197,
        "powerBHP": 110,
        "torqueNm": 200,
        "mileageKmpl": 20.1,
        "mileage": "20.1 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "Power Windows", "AC"],
        "additionalFeaturesOverBase": []
      },
      {
        "id": "cxuv3xov2",
        "name": "MX2 1.2 Petrol MT",
        "price": 899000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1197,
        "powerBHP": 110,
        "torqueNm": 200,
        "mileageKmpl": 20.1,
        "mileage": "20.1 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "10.25in Touchscreen", "Auto Climate Control", "Cruise Control"],
        "additionalFeaturesOverBase": ["10.25in Touchscreen", "Auto Climate Control"]
      },
      {
        "id": "cxuv3xov3",
        "name": "MX3 1.2 Petrol AMT",
        "price": 999000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1197,
        "powerBHP": 110,
        "torqueNm": 200,
        "mileageKmpl": 20.1,
        "mileage": "20.1 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "10.25in Touchscreen", "Auto Climate Control", "Cruise Control", "Sunroof", "AMT Gearbox"],
        "additionalFeaturesOverBase": ["Sunroof", "AMT Gearbox"]
      },
      {
        "id": "cxuv3xov4",
        "name": "AX5 1.2 Petrol MT",
        "price": 1199000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1197,
        "powerBHP": 110,
        "torqueNm": 200,
        "mileageKmpl": 20.1,
        "mileage": "20.1 kmpl",
        "features": ["6 Airbags", "ADAS Level 2", "360° Camera", "Dual 10.25in Screens", "Auto Climate Control", "Cruise Control", "Sunroof", "Wireless Charger"],
        "additionalFeaturesOverBase": ["ADAS Level 2", "360° Camera", "Dual Screens", "Wireless Charger"]
      },
      {
        "id": "cxuv3xov5",
        "name": "AX7 L 1.2 Petrol AT",
        "price": 1549000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1197,
        "powerBHP": 129,
        "torqueNm": 230,
        "mileageKmpl": 18.9,
        "mileage": "18.9 kmpl",
        "features": ["6 Airbags", "ADAS Level 2", "360° Camera", "Dual 10.25in Screens", "Dual-zone Climate Control", "Cruise Control", "Skyroof", "Wireless Charger", "Harman Kardon"],
        "additionalFeaturesOverBase": ["Dual-zone Climate Control", "Skyroof Panoramic Sunroof", "Harman Kardon Audio"]
      }
    ],
    "dealerPrices": [],
    "description": "The Mahindra XUV 3XO sets a new benchmark in the compact SUV segment with premium features, powerful turbo engines, and a 5-star GNCAP equivalent structure.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c-alcazar",
    "slug": "hyundai-alcazar-2024",
    "category": "car",
    "brand": "Hyundai",
    "model": "Alcazar",
    "year": 2024,
    "startingPrice": 1677000,
    "emiFrom": 25155,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/157825/alcazar-exterior-right-front-three-quarter-24.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/157825/alcazar-facelift-exterior-right-front-three-quarter-22.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/157825/alcazar-facelift-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/157825/alcazar-facelift-exterior-right-rear-three-quarter-2.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/157825/alcazar-exterior-right-front-three-quarter-24.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "Diesel"
    ],
    "transmissions": [
      "Manual",
      "Automatic"
    ],
    "mileage": "18.8 kmpl",
    "seatingCapacity": 7,
    "bootSpaceL": 180,
    "engineCC": 1493,
    "powerBHP": 113,
    "torqueNm": 250,
    "safetyRating": 5,
    "rating": 4.5,
    "reviewCount": 920,
    "colors": [
      "Robust Emerald Matte",
      "Titan Grey Matte",
      "Starry Night",
      "Ranger Khaki",
      "Abyss Black"
    ],
    "features": [
      "Dual 10.25-inch Screens",
      "Panoramic Sunroof",
      "Bose 8-Speaker Sound System",
      "Second-row Captain Seats",
      "8-Way Power Adjustable Driver Seat"
    ],
    "variants": [
      {
        "id": "calcazarv1",
        "name": "Executive 1.5 Turbo Petrol MT 7 STR",
        "price": 1677000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1482,
        "powerBHP": 158,
        "torqueNm": 253,
        "mileageKmpl": 18.8,
        "mileage": "18.8 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "10.25in Touchscreen", "Auto Climate Control", "7-Seat"],
        "additionalFeaturesOverBase": []
      },
      {
        "id": "calcazarv2",
        "name": "Prestige 1.5 Turbo Petrol AT 6 STR",
        "price": 1849000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1482,
        "powerBHP": 158,
        "torqueNm": 253,
        "mileageKmpl": 17.5,
        "mileage": "17.5 kmpl",
        "features": ["6 Airbags", "ABS", "Rear Camera", "10.25in Touchscreen", "Auto Climate Control", "6-Seat Captain", "Wireless Charger"],
        "additionalFeaturesOverBase": ["6-Seat Captain Config", "Wireless Charger", "AT Gearbox"]
      },
      {
        "id": "calcazarv3",
        "name": "Platinum 1.5 Turbo Petrol AT 6 STR",
        "price": 1989000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1482,
        "powerBHP": 158,
        "torqueNm": 253,
        "mileageKmpl": 17.5,
        "mileage": "17.5 kmpl",
        "features": ["6 Airbags", "ADAS Level 2", "360° Camera", "Dual 10.25in Screens", "Dual-zone Climate Control", "Panoramic Sunroof", "Wireless Charger", "Bose 8-Speaker"],
        "additionalFeaturesOverBase": ["ADAS Level 2", "Panoramic Sunroof", "Bose Audio", "Dual Screens"]
      },
      {
        "id": "calcazarv4",
        "name": "Signature 1.5 Diesel AT 6 STR",
        "price": 2140000,
        "fuelType": "Diesel",
        "transmission": "Automatic",
        "engineCC": 1493,
        "powerBHP": 114,
        "torqueNm": 250,
        "mileageKmpl": 20.4,
        "mileage": "20.4 kmpl",
        "features": ["6 Airbags", "ADAS Level 2", "360° Camera", "Dual 10.25in Screens", "Dual-zone Climate Control", "Panoramic Sunroof", "Wireless Charger", "Bose 8-Speaker", "8-Way Power Driver Seat"],
        "additionalFeaturesOverBase": ["1.5L Diesel Engine", "8-Way Power Seat", "Better Mileage"]
      }
    ],
    "dealerPrices": [],
    "description": "The Hyundai Alcazar is a premium 3-row SUV offering modern layout options, high-class safety tech, and sophisticated styling for large families.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c-sonet",
    "slug": "kia-sonet-2024",
    "category": "car",
    "brand": "Kia",
    "model": "Sonet",
    "year": 2024,
    "startingPrice": 799000,
    "emiFrom": 11985,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/174423/sonet-exterior-right-front-three-quarter-12.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/174423/sonet-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/174423/sonet-exterior-right-rear-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/174423/sonet-exterior-rear-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/174423/sonet-exterior-left-rear-three-quarter.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/174423/sonet-exterior-right-front-three-quarter-12.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "Diesel"
    ],
    "transmissions": [
      "Manual",
      "Automatic",
      "iMT"
    ],
    "mileage": "18.4 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 385,
    "engineCC": 1197,
    "powerBHP": 82,
    "torqueNm": 115,
    "safetyRating": 3,
    "rating": 4.5,
    "reviewCount": 1520,
    "colors": [
      "Pewter Olive",
      "Intense Red",
      "Imperial Blue",
      "Aurora Black Pearl",
      "Glacier White"
    ],
    "features": [
      "Electric Sunroof",
      "Bose Premium Sound System",
      "10.25-inch Touchscreen",
      "Ventilated Front Seats",
      "ADAS Level 1 Features"
    ],
    "variants": [
      {
        "id": "csonetv1",
        "name": "HTE 1.2 Petrol MT",
        "price": 799000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1197,
        "powerBHP": 82
      },
      {
        "id": "csonetv2",
        "name": "X-Line 1.5 Diesel AT",
        "price": 1575000,
        "fuelType": "Diesel",
        "transmission": "Automatic",
        "engineCC": 1493,
        "powerBHP": 114
      }
    ],
    "dealerPrices": [],
    "description": "The Kia Sonet is a stylish and feature-rich compact SUV that pairs bold looks with multiple refined engine and transmission configurations.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c-amaze",
    "slug": "honda-amaze-2024",
    "category": "car",
    "brand": "Honda",
    "model": "Amaze",
    "year": 2024,
    "startingPrice": 715000,
    "emiFrom": 10725,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/184377/amaze-exterior-right-front-three-quarter-5.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/184377/amaze-2024-exterior-left-front-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/184377/amaze-2024-exterior-right-rear-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/184377/amaze-2024-exterior-rear-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/184377/amaze-2024-exterior-left-rear-three-quarter.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/184377/amaze-exterior-right-front-three-quarter-5.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol"
    ],
    "transmissions": [
      "Manual",
      "CVT"
    ],
    "mileage": "18.6 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 420,
    "engineCC": 1199,
    "powerBHP": 89,
    "torqueNm": 110,
    "safetyRating": 4,
    "rating": 4.3,
    "reviewCount": 1140,
    "colors": [
      "Meteoroid Grey Metallic",
      "Radiant Red Metallic",
      "Platinum White Pearl",
      "Lunar Silver Metallic",
      "Golden Brown Metallic"
    ],
    "features": [
      "LED Projector Headlamps",
      "CVT Transmission Option",
      "7-inch Touchscreen",
      "Cruise Control",
      "Dual Airbags"
    ],
    "variants": [
      {
        "id": "camazev1",
        "name": "E MT",
        "price": 715000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1199,
        "powerBHP": 89
      },
      {
        "id": "camazev2",
        "name": "VX CVT",
        "price": 996000,
        "fuelType": "Petrol",
        "transmission": "CVT",
        "engineCC": 1199,
        "powerBHP": 89
      }
    ],
    "dealerPrices": [],
    "description": "The Honda Amaze is a highly practical compact sedan offering a spacious cabin, comfortable ride, and class-leading CVT transmission option.",
    "pros": [
      "Low-slung aerodynamic shape offers excellent high-speed stability",
      "Generous passenger legroom and comfortable rear bench",
      "Large luggage boot space for family bags"
    ],
    "cons": [
      "Lower ground clearance can cause scraping on tall speedbreakers",
      "Low ingress and egress can be inconvenient for elderly passengers",
      "Parking in congested city areas can be tricky due to length"
    ],
    "groundClearance": 165
  },
  {
    "id": "c-camry",
    "slug": "toyota-camry-2024",
    "category": "car",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2024,
    "startingPrice": 4617000,
    "emiFrom": 69255,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/192443/camry-exterior-right-front-three-quarter-15.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/192443/camry-exterior-right-front-three-quarter-13.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/192443/camry-exterior-right-side-view-11.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/192443/camry-exterior-right-rear-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/192443/camry-exterior-rear-view.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/192443/camry-exterior-right-front-three-quarter-15.png?isig=0&q=80",
    "fuelTypes": [
      "Hybrid"
    ],
    "transmissions": [
      "Automatic"
    ],
    "mileage": "22.3 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 524,
    "engineCC": 2487,
    "powerBHP": 176,
    "torqueNm": 221,
    "safetyRating": 5,
    "rating": 4.8,
    "reviewCount": 230,
    "colors": [
      "Platinum White Pearl",
      "Silver Metallic",
      "Attitude Black Mica",
      "Burning Black",
      "Red Mica"
    ],
    "features": [
      "Self-Charging Hybrid Powertrain",
      "3-Zone Climate Control",
      "Reclining Rear Seats",
      "9-Speaker JBL Sound System",
      "9 Airbags"
    ],
    "variants": [
      {
        "id": "ccamryv1",
        "name": "2.5 Hybrid",
        "price": 4617000,
        "fuelType": "Hybrid",
        "transmission": "Automatic",
        "engineCC": 2487,
        "powerBHP": 176
      }
    ],
    "dealerPrices": [],
    "description": "The Toyota Camry is a premium hybrid luxury sedan offering executive class comfort, whisper-quiet electric drive modes, and exceptional efficiency.",
    "pros": [
      "Low-slung aerodynamic shape offers excellent high-speed stability",
      "Generous passenger legroom and comfortable rear bench",
      "Large luggage boot space for family bags"
    ],
    "cons": [
      "Lower ground clearance can cause scraping on tall speedbreakers",
      "Low ingress and egress can be inconvenient for elderly passengers",
      "Parking in congested city areas can be tricky due to length"
    ],
    "groundClearance": 165
  },
  {
    "id": "c-dzire",
    "slug": "maruti-suzuki-dzire-2024",
    "category": "car",
    "brand": "Maruti Suzuki",
    "model": "Dzire",
    "year": 2024,
    "startingPrice": 657000,
    "emiFrom": 9855,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/170173/dzire-exterior-right-front-three-quarter-27.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/170173/dzire-2024-exterior-right-front-three-quarter-26.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/170173/dzire-2024-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/170173/dzire-2024-exterior-right-rear-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/170173/dzire-3024-exterior-rear-view-2.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/170173/dzire-exterior-right-front-three-quarter-27.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "CNG"
    ],
    "transmissions": [
      "Manual",
      "AMT"
    ],
    "mileage": "22.41 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 378,
    "engineCC": 1197,
    "powerBHP": 88.5,
    "torqueNm": 113,
    "safetyRating": 5,
    "rating": 4.5,
    "reviewCount": 2130,
    "colors": [
      "Sherwood Brown",
      "Phoenix Red",
      "Oxford Blue",
      "Magma Grey",
      "Arctic White"
    ],
    "features": [
      "SmartPlay Studio Infotainment",
      "Automatic Climate Control",
      "Rear AC Vents",
      "Hill Hold Assist",
      "Cruise Control"
    ],
    "variants": [
      {
        "id": "cdzirev1",
        "name": "LXi MT",
        "price": 657000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1197,
        "powerBHP": 88.5
      },
      {
        "id": "cdzirev2",
        "name": "ZXi Plus AMT",
        "price": 939000,
        "fuelType": "Petrol",
        "transmission": "AMT",
        "engineCC": 1197,
        "powerBHP": 88.5
      }
    ],
    "dealerPrices": [],
    "description": "The Maruti Suzuki Dzire is India's bestselling compact sedan, loved for its combination of elegant looks, superb fuel economy, and comfortable cabin.",
    "pros": [
      "Low-slung aerodynamic shape offers excellent high-speed stability",
      "Generous passenger legroom and comfortable rear bench",
      "Large luggage boot space for family bags"
    ],
    "cons": [
      "Lower ground clearance can cause scraping on tall speedbreakers",
      "Low ingress and egress can be inconvenient for elderly passengers",
      "Parking in congested city areas can be tricky due to length"
    ],
    "groundClearance": 165
  },
  {
    "id": "c-altok10",
    "slug": "maruti-suzuki-alto-k10-2024",
    "category": "car",
    "brand": "Maruti Suzuki",
    "model": "Alto K10",
    "year": 2024,
    "startingPrice": 399000,
    "emiFrom": 5985,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/127563/alto-k10-exterior-right-front-three-quarter-63.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/127563/alto-k10-exterior-right-front-three-quarter-60.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/127563/alto-k10-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/127563/alto-k10-exterior-right-rear-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/127563/alto-k10-exterior-rear-view.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/127563/alto-k10-exterior-right-front-three-quarter-63.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "CNG"
    ],
    "transmissions": [
      "Manual",
      "AMT"
    ],
    "mileage": "24.39 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 214,
    "engineCC": 998,
    "powerBHP": 66,
    "torqueNm": 89,
    "safetyRating": 2,
    "rating": 4.2,
    "reviewCount": 1520,
    "colors": [
      "Solid White",
      "Silky Silver",
      "Granite Grey",
      "Speedy Blue",
      "Earth Gold"
    ],
    "features": [
      "SmartPlay Studio Touchscreen",
      "Power Windows",
      "Digital Speedometer",
      "Dual Front Airbags",
      "ABS with EBD"
    ],
    "variants": [
      {
        "id": "caltok10v1",
        "name": "Std MT",
        "price": 399000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 998,
        "powerBHP": 66
      },
      {
        "id": "caltok10v2",
        "name": "VXi Plus AMT",
        "price": 585000,
        "fuelType": "Petrol",
        "transmission": "AMT",
        "engineCC": 998,
        "powerBHP": 66
      }
    ],
    "dealerPrices": [],
    "description": "The Alto K10 is the quintessential entry-level Indian hatchback, offering low cost of ownership, high reliability, and excellent fuel efficiency.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c-magnite",
    "slug": "nissan-magnite-2024",
    "category": "car",
    "brand": "Nissan",
    "model": "Magnite",
    "year": 2024,
    "startingPrice": 599000,
    "emiFrom": 8985,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/173325/magnite-exterior-right-front-three-quarter-27.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/173325/magnite-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/173325/magnite-exterior-right-rear-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/173325/magnite-exterior-rear-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/173325/magnite-exterior-left-rear-three-quarter.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/173325/magnite-exterior-right-front-three-quarter-27.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol"
    ],
    "transmissions": [
      "Manual",
      "CVT",
      "AMT"
    ],
    "mileage": "20.0 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 336,
    "engineCC": 999,
    "powerBHP": 99,
    "torqueNm": 160,
    "safetyRating": 4,
    "rating": 4.4,
    "reviewCount": 1340,
    "colors": [
      "Flare Garnet Red",
      "Sandstone Brown",
      "Blade Silver",
      "Onyx Black",
      "Storm White"
    ],
    "features": [
      "Around View Monitor 360 Camera",
      "Wireless Charger",
      "7-inch Digital Instrument Cluster",
      "Hill Start Assist",
      "Traction Control"
    ],
    "variants": [
      {
        "id": "cmagnitev1",
        "name": "Visia MT",
        "price": 599000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 999,
        "powerBHP": 72
      },
      {
        "id": "cmagnitev2",
        "name": "Tekna Turbo CVT",
        "price": 1150000,
        "fuelType": "Petrol",
        "transmission": "CVT",
        "engineCC": 999,
        "powerBHP": 99
      }
    ],
    "dealerPrices": [],
    "description": "The Nissan Magnite is a highly competitive sub-compact SUV that pairs aggressive look with rich safety technology at a very attractive price point.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c-c3",
    "slug": "citroen-c3-2024",
    "category": "car",
    "brand": "Citroen",
    "model": "C3",
    "year": 2024,
    "startingPrice": 616000,
    "emiFrom": 9240,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/173529/c3-facelift-exterior-right-front-three-quarter.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/173529/c3-facelift-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    "fuelTypes": [
      "Petrol"
    ],
    "transmissions": [
      "Manual",
      "Automatic"
    ],
    "mileage": "19.3 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 315,
    "engineCC": 1198,
    "powerBHP": 81,
    "torqueNm": 115,
    "safetyRating": 3,
    "rating": 4.3,
    "reviewCount": 410,
    "colors": [
      "Steel Grey",
      "Platinum Grey",
      "Polar White",
      "Zesty Orange"
    ],
    "features": [
      "10.2-inch Infotainment Screen",
      "Wireless Screen Mirroring",
      "Citroen Comfort Suspension",
      "Day/Night IRVM",
      "Rear Parking Sensors"
    ],
    "variants": [
      {
        "id": "cc3v1",
        "name": "Live 1.2 PureTech MT",
        "price": 616000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1198,
        "powerBHP": 81
      },
      {
        "id": "cc3v2",
        "name": "Shine 1.2 Gen III Turbo AT",
        "price": 999000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1199,
        "powerBHP": 109
      }
    ],
    "dealerPrices": [],
    "description": "The Citroen C3 is a hatchback with SUV design cues that is renowned for its segment-best suspension comfort, styling accents, and spacious interiors.",
    "pros": [
      "Compact dimensions make it very easy to drive and park in city traffic",
      "Outstanding fuel economy keeps running costs low",
      "Widespread service support and highly affordable parts"
    ],
    "cons": [
      "Limited luggage boot space for weekend family trips",
      "Cabin is not well insulated from engine and tyre noise at highway speeds",
      "Suspension feels slightly basic over large road potholes"
    ],
    "groundClearance": 165
  },
  {
    "id": "c-fronx",
    "slug": "maruti-suzuki-fronx-2024",
    "category": "car",
    "brand": "Maruti Suzuki",
    "model": "Fronx",
    "year": 2024,
    "startingPrice": 751500,
    "emiFrom": 11273,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-108.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/130591/fronx-exterior-right-side-view-2.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/130591/fronx-exterior-right-rear-three-quarter-2.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/130591/fronx-exterior-right-rear-three-quarter-6.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "CNG"
    ],
    "transmissions": [
      "Manual",
      "AMT",
      "Automatic"
    ],
    "mileage": "21.79 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 308,
    "engineCC": 1197,
    "powerBHP": 89,
    "torqueNm": 113,
    "safetyRating": 5,
    "rating": 4.5,
    "reviewCount": 1250,
    "colors": [
      "Nexa Blue",
      "Arctic White",
      "Grandeur Grey",
      "Earthen Brown",
      "Opulent Red",
      "Splendid Silver"
    ],
    "features": [
      "9-inch SmartPlay Pro+ Touchscreen",
      "Head-up Display (HUD)",
      "360 View Camera",
      "Wireless Charger",
      "6 Airbags & ESP"
    ],
    "variants": [
      {
        "id": "cfronxv1",
        "name": "Sigma 1.2L MT",
        "price": 751500,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1197,
        "powerBHP": 89
      },
      {
        "id": "cfronxv2",
        "name": "Alpha 1.0L Turbo AT",
        "price": 1297500,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 998,
        "powerBHP": 99
      }
    ],
    "dealerPrices": [],
    "description": "The Maruti Suzuki Fronx is a sporty, coupe-styled compact crossover that combines rugged SUV details with premium hatchback convenience, built on the Nexa platform.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c-wagonr",
    "slug": "maruti-suzuki-wagon-r-2024",
    "category": "car",
    "brand": "Maruti Suzuki",
    "model": "WagonR",
    "year": 2024,
    "startingPrice": 557000,
    "emiFrom": 8355,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/112947/wagon-r-exterior-right-front-three-quarter-6.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/112947/wagon-r-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/112947/wagon-r-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/112947/wagon-r-exterior-right-rear-three-quarter.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/112947/wagon-r-exterior-right-front-three-quarter-6.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "CNG"
    ],
    "transmissions": [
      "Manual",
      "AMT"
    ],
    "mileage": "24.4 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 341,
    "engineCC": 1197,
    "powerBHP": 89,
    "torqueNm": 113,
    "safetyRating": 2,
    "rating": 4.3,
    "reviewCount": 3100,
    "colors": [
      "Gallant Red",
      "Nutmeg Brown",
      "Poolside Blue",
      "Silky Silver",
      "Superior White"
    ],
    "features": [
      "SmartPlay Studio",
      "Dual Airbags",
      "ABS with EBD",
      "Rear Parking Sensors",
      "Steering Mounted Controls"
    ],
    "variants": [
      {
        "id": "cwagonrv1",
        "name": "LXi 1.0 MT",
        "price": 557000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 998,
        "powerBHP": 66
      },
      {
        "id": "cwagonrv2",
        "name": "ZXi Plus 1.2 AMT",
        "price": 736000,
        "fuelType": "Petrol",
        "transmission": "AMT",
        "engineCC": 1197,
        "powerBHP": 89
      }
    ],
    "dealerPrices": [],
    "description": "The WagonR is an iconic tall-boy hatchback that dominates Indian roads with its spacious cabin, great mileage, and unmatched Maruti Suzuki reliability.",
    "pros": [
      "Compact dimensions make it very easy to drive and park in city traffic",
      "Outstanding fuel economy keeps running costs low",
      "Widespread service support and highly affordable parts"
    ],
    "cons": [
      "Limited luggage boot space for weekend family trips",
      "Cabin is not well insulated from engine and tyre noise at highway speeds",
      "Suspension feels slightly basic over large road potholes"
    ],
    "groundClearance": 165
  },
  {
    "id": "c-exter",
    "slug": "hyundai-exter-2024",
    "category": "car",
    "brand": "Hyundai",
    "model": "Exter",
    "year": 2024,
    "startingPrice": 601000,
    "emiFrom": 9015,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/216807/exter-exterior-right-front-three-quarter.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/216807/exter-exterior-front-view-4.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/216807/exter-interior-dashboard.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/216807/exter-interior-infotainment-system.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/216807/exter-exterior-right-front-three-quarter.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "CNG"
    ],
    "transmissions": [
      "Manual",
      "AMT"
    ],
    "mileage": "19.4 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 391,
    "engineCC": 1197,
    "powerBHP": 82,
    "torqueNm": 114,
    "safetyRating": 3,
    "rating": 4.4,
    "reviewCount": 1620,
    "colors": [
      "Cosmic Blue",
      "Starry Night",
      "Fiery Red",
      "Atlas White",
      "Ranger Khaki"
    ],
    "features": [
      "8-inch Touchscreen",
      "Dashcam with Dual Camera",
      "Connected Car Tech",
      "Electric Sunroof",
      "6 Airbags"
    ],
    "variants": [
      {
        "id": "cexterv1",
        "name": "EX MT",
        "price": 601000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1197,
        "powerBHP": 82
      },
      {
        "id": "cexterv2",
        "name": "SX(O) Connect AMT",
        "price": 1016000,
        "fuelType": "Petrol",
        "transmission": "AMT",
        "engineCC": 1197,
        "powerBHP": 82
      }
    ],
    "dealerPrices": [],
    "description": "The Hyundai Exter is a micro-SUV combining SUV styling cues with a city-friendly footprint, packed with segment-first features like a dashcam and sunroof.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c-altroz",
    "slug": "tata-altroz-2024",
    "category": "car",
    "brand": "Tata",
    "model": "Altroz",
    "year": 2024,
    "startingPrice": 670000,
    "emiFrom": 10050,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/199863/altroz-exterior-right-front-three-quarter-13.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/199863/altroz-facelift-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/199863/altroz-facelift-exterior-right-rear-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/199863/altroz-facelift-exterior-rear-view-3.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/199863/altroz-exterior-right-front-three-quarter-13.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "Diesel"
    ],
    "transmissions": [
      "Manual",
      "DCT"
    ],
    "mileage": "22.0 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 345,
    "engineCC": 1199,
    "powerBHP": 86,
    "torqueNm": 113,
    "safetyRating": 5,
    "rating": 4.4,
    "reviewCount": 1780,
    "colors": [
      "Opera Blue",
      "Avenue White",
      "Downtown Red",
      "Harbour Blue",
      "Arcade Grey"
    ],
    "features": [
      "iRA Connected Car Tech",
      "10.25-inch Touchscreen",
      "Ventilated Front Seats",
      "Auto-dimming IRVM",
      "6 Airbags"
    ],
    "variants": [
      {
        "id": "caltrozv1",
        "name": "XE MT",
        "price": 670000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1199,
        "powerBHP": 86
      },
      {
        "id": "caltrozv2",
        "name": "XZ Plus Luxe DCA",
        "price": 1098000,
        "fuelType": "Petrol",
        "transmission": "DCT",
        "engineCC": 1199,
        "powerBHP": 114
      }
    ],
    "dealerPrices": [],
    "description": "The Tata Altroz is a 5-star GNCAP rated premium hatchback with sharp Impact 2.0 design, turbo-petrol option, and class-leading safety.",
    "pros": [
      "Compact dimensions make it very easy to drive and park in city traffic",
      "Outstanding fuel economy keeps running costs low",
      "Widespread service support and highly affordable parts"
    ],
    "cons": [
      "Limited luggage boot space for weekend family trips",
      "Cabin is not well insulated from engine and tyre noise at highway speeds",
      "Suspension feels slightly basic over large road potholes"
    ],
    "groundClearance": 165
  },
  {
    "id": "c-curvv",
    "slug": "tata-curvv-2024",
    "category": "car",
    "brand": "Tata",
    "model": "Curvv",
    "year": 2024,
    "startingPrice": 1000000,
    "emiFrom": 15000,
    "isNew": true,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/139651/curvv-exterior-right-front-three-quarter-16.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/139651/curvv-exterior-right-rear-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/139651/curvv-interior-dashboard-43.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/139651/curvv-interior-steering-wheel.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/139651/curvv-exterior-right-front-three-quarter-16.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "Diesel"
    ],
    "transmissions": [
      "Manual",
      "Automatic"
    ],
    "mileage": "18.5 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 500,
    "engineCC": 1497,
    "powerBHP": 150,
    "torqueNm": 250,
    "safetyRating": 5,
    "rating": 4.6,
    "reviewCount": 680,
    "colors": [
      "Virtual Sunrise",
      "Flame Red",
      "Pure Grey",
      "Pristine White",
      "Cosmic Gold"
    ],
    "features": [
      "Coupe SUV Styling",
      "Level 2 ADAS",
      "Panoramic Sunroof",
      "12.3-inch Touchscreen",
      "Ventilated Leatherette Seats"
    ],
    "variants": [
      {
        "id": "ccurvvv1",
        "name": "Smart 1.2T MT",
        "price": 1000000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1199,
        "powerBHP": 118
      },
      {
        "id": "ccurvvv2",
        "name": "Accomplished+ S 1.5D AT",
        "price": 1950000,
        "fuelType": "Diesel",
        "transmission": "Automatic",
        "engineCC": 1497,
        "powerBHP": 150
      }
    ],
    "dealerPrices": [],
    "description": "The Tata Curvv is India's first mass-market coupe SUV, combining head-turning design with a premium tech-loaded cabin and multiple powertrain choices.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c-tharroxx",
    "slug": "mahindra-thar-roxx-2024",
    "category": "car",
    "brand": "Mahindra",
    "model": "Thar Roxx",
    "year": 2024,
    "startingPrice": 1299000,
    "emiFrom": 19485,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/124839/thar-roxx-exterior-right-front-three-quarter-2.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/124839/thar-roxx-exterior-right-side-view-2.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/124839/thar-roxx-exterior-rear-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/124839/thar-roxx-exterior-rear-view-5.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/124839/thar-roxx-exterior-right-front-three-quarter-2.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "Diesel"
    ],
    "transmissions": [
      "Manual",
      "Automatic"
    ],
    "mileage": "15.2 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 647,
    "engineCC": 1997,
    "powerBHP": 150,
    "torqueNm": 330,
    "safetyRating": 5,
    "rating": 4.7,
    "reviewCount": 1040,
    "colors": [
      "Stealth Black",
      "Everest White",
      "Deep Forest",
      "Nebula Blue",
      "Battleship Grey"
    ],
    "features": [
      "Dual 10.25-inch Screens",
      "Panoramic Sunroof",
      "Level 2 ADAS Suite",
      "Electronic Locking Differential",
      "Harmon Kardon Audio"
    ],
    "variants": [
      {
        "id": "ctharroxxv1",
        "name": "MX1 Petrol MT",
        "price": 1299000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1997,
        "powerBHP": 150
      },
      {
        "id": "ctharroxxv2",
        "name": "AX7L Diesel AT 4WD",
        "price": 2249000,
        "fuelType": "Diesel",
        "transmission": "Automatic",
        "engineCC": 2184,
        "powerBHP": 172
      }
    ],
    "dealerPrices": [],
    "description": "The Mahindra Thar Roxx is the highly anticipated 5-door lifestyle off-roader, offering enhanced practicality, a premium cabin, advanced tech like ADAS, and robust 4WD capability.",
    "pros": [
      "Unmatched road presence and lifestyle design styling",
      "Exceptional off-roading capability with mechanical locking diff",
      "Strong build quality with 4-star safety rating"
    ],
    "cons": [
      "Stiff suspension leads to bumpy and bouncy ride",
      "Highly impractical interior space and tiny boot capacity",
      "Frugal engine choices have high running costs"
    ],
    "groundClearance": 226
  },
  {
    "id": "c-xuv400",
    "slug": "mahindra-xuv400-2024",
    "category": "car",
    "brand": "Mahindra",
    "model": "XUV400",
    "year": 2024,
    "startingPrice": 1599000,
    "emiFrom": 23985,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45278/xuv400-exterior-right-front-three-quarter-8.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45278/xuv400-exterior-right-front-three-quarter-2.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45278/xuv400-exterior-right-rear-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45278/xuv400-exterior-front-view.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/45278/xuv400-exterior-right-front-three-quarter-8.png?isig=0&q=80",
    "fuelTypes": [
      "Electric"
    ],
    "transmissions": [
      "Automatic"
    ],
    "mileage": "456 km range",
    "seatingCapacity": 5,
    "bootSpaceL": 378,
    "engineCC": 0,
    "powerBHP": 148,
    "torqueNm": 310,
    "safetyRating": 5,
    "rating": 4.4,
    "reviewCount": 560,
    "colors": [
      "Galaxy Grey",
      "Arctic Blue",
      "Napoli Black",
      "Everest White",
      "Tango Red"
    ],
    "features": [
      "Fast Charging 0-80% in 50 min",
      "10.25-inch Infotainment",
      "Connected Car Tech with Alexa",
      "Regen Braking Modes",
      "Sunroof"
    ],
    "variants": [
      {
        "id": "cxuv400v1",
        "name": "EC Pro",
        "price": 1599000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "engineCC": 0,
        "powerBHP": 148
      },
      {
        "id": "cxuv400v2",
        "name": "EL Pro Long Range",
        "price": 1899000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "engineCC": 0,
        "powerBHP": 148
      }
    ],
    "dealerPrices": [],
    "description": "The Mahindra XUV400 is an all-electric compact SUV with a 456 km range, fast-charging capability, and 5-star BNCAP safety — zero emissions, full performance.",
    "pros": [
      "Completely silent, vibration-free cabin environment",
      "Instant electric torque response makes overtaking a breeze",
      "Zero tailpipe emissions and extremely cheap running costs"
    ],
    "cons": [
      "Long road trips require planning around public charging stations",
      "Higher initial investment cost compared to ICE cars",
      "Long-term battery replacement cost is high"
    ],
    "groundClearance": 190
  },
  {
    "id": "c-carens",
    "slug": "kia-carens-2024",
    "category": "car",
    "brand": "Kia",
    "model": "Carens",
    "year": 2024,
    "startingPrice": 1070000,
    "emiFrom": 16050,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/174325/carens-exterior-right-front-three-quarter-9.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/174325/carens-exterior-right-side-view-2.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/174325/carens-exterior-right-rear-three-quarter-2.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/174325/carens-exterior-rear-view-6.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/174325/carens-exterior-left-rear-three-quarter.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/174325/carens-exterior-right-front-three-quarter-9.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "Diesel"
    ],
    "transmissions": [
      "Manual",
      "Automatic"
    ],
    "mileage": "16.5 kmpl",
    "seatingCapacity": 7,
    "bootSpaceL": 216,
    "engineCC": 1497,
    "powerBHP": 113,
    "torqueNm": 144,
    "safetyRating": 3,
    "rating": 4.5,
    "reviewCount": 1830,
    "colors": [
      "Moss Brown",
      "Intense Red",
      "Sparkling Silver",
      "Imperial Blue",
      "Aurora Black Pearl"
    ],
    "features": [
      "10.25-inch Touchscreen",
      "One-touch Tumble Second-Row",
      "Air Purifier with Virus Protection",
      "Bose Sound System",
      "6 Airbags"
    ],
    "variants": [
      {
        "id": "ccarensv1",
        "name": "Classic 1.5 Petrol MT 7 STR",
        "price": 1070000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1497,
        "powerBHP": 113
      },
      {
        "id": "ccarensv2",
        "name": "Luxury Plus 1.5 Diesel AT 6 STR",
        "price": 1930000,
        "fuelType": "Diesel",
        "transmission": "Automatic",
        "engineCC": 1493,
        "powerBHP": 114
      }
    ],
    "dealerPrices": [],
    "description": "The Kia Carens is a premium 3-row recreational vehicle blending MPV practicality with SUV visual presence, strong diesel option, and extensive connectivity.",
    "pros": [
      "Spacious 3-row cabin seating up to 7-8 occupants comfortably",
      "Highly practical modular seating rows that fold flat for luggage",
      "Very soft suspension setup makes long family trips comfortable"
    ],
    "cons": [
      "Large dimensions make city driving and parking slightly difficult",
      "Boxy styling lacks the aesthetic appeal of a modern SUV",
      "Fully loaded vehicle can struggle on steep mountain roads"
    ],
    "groundClearance": 180
  },
  {
    "id": "c-hyryder",
    "slug": "toyota-urban-cruiser-hyryder-2024",
    "category": "car",
    "brand": "Toyota",
    "model": "Urban Cruiser Hyryder",
    "year": 2024,
    "startingPrice": 1107000,
    "emiFrom": 16605,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/124027/hyryder-exterior-right-front-three-quarter-74.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/124027/hyryder-exterior-right-front-three-quarter-76.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/124027/hyryder-exterior-right-side-view-10.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/124027/hyryder-exterior-right-rear-three-quarter-11.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/124027/hyryder-exterior-rear-view-6.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/124027/hyryder-exterior-right-front-three-quarter-74.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "Hybrid"
    ],
    "transmissions": [
      "Manual",
      "Automatic"
    ],
    "mileage": "27.9 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 328,
    "engineCC": 1462,
    "powerBHP": 103,
    "torqueNm": 137,
    "safetyRating": 5,
    "rating": 4.5,
    "reviewCount": 980,
    "colors": [
      "Cafe White",
      "Enticing Silver",
      "Gaming Grey",
      "Sporting Red",
      "Midnight Black"
    ],
    "features": [
      "Strong Hybrid Powertrain",
      "Toyota i-Connect",
      "Panoramic Sunroof",
      "HUD",
      "Toyota Safety Sense"
    ],
    "variants": [
      {
        "id": "chryderv1",
        "name": "E MT",
        "price": 1107000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1462,
        "powerBHP": 103
      },
      {
        "id": "chryderv2",
        "name": "V Hybrid AT",
        "price": 1897000,
        "fuelType": "Hybrid",
        "transmission": "Automatic",
        "engineCC": 1490,
        "powerBHP": 115
      }
    ],
    "dealerPrices": [],
    "description": "The Toyota Urban Cruiser Hyryder combines Toyota's legendary hybrid expertise with a modern mid-size SUV design, delivering segment-best mileage of 27.9 kmpl.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c-astor",
    "slug": "mg-astor-2024",
    "category": "car",
    "brand": "MG",
    "model": "Astor",
    "year": 2024,
    "startingPrice": 998000,
    "emiFrom": 14970,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/51940/astor-exterior-right-front-three-quarter-8.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/51940/astor-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/51940/astor-exterior-right-side-view-2.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/51940/astor-exterior-left-rear-three-quarter-2.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/51940/astor-exterior-left-side-view-2.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/51940/astor-exterior-right-front-three-quarter-8.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol"
    ],
    "transmissions": [
      "Manual",
      "Automatic",
      "CVT"
    ],
    "mileage": "15.6 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 443,
    "engineCC": 1349,
    "powerBHP": 138,
    "torqueNm": 220,
    "safetyRating": 5,
    "rating": 4.4,
    "reviewCount": 720,
    "colors": [
      "Aurora Silver",
      "Spiced Orange",
      "Candy White",
      "Glaze Red",
      "Starry Black"
    ],
    "features": [
      "AI Personal Assistant",
      "Level 2 ADAS",
      "10.1-inch Touchscreen",
      "Digital Bluetooth Key",
      "6 Airbags"
    ],
    "variants": [
      {
        "id": "castorv1",
        "name": "Style 1.5 MT",
        "price": 998000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1498,
        "powerBHP": 108
      },
      {
        "id": "castorv2",
        "name": "Savvy Pro 1.3 Turbo AT",
        "price": 1713000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1349,
        "powerBHP": 138
      }
    ],
    "dealerPrices": [],
    "description": "The MG Astor is a tech-forward mid-size SUV featuring India's first AI personal assistant, autonomous Level 2 ADAS, and a refined turbo-petrol drivetrain.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c-kushaq",
    "slug": "skoda-kushaq-2024",
    "category": "car",
    "brand": "Skoda",
    "model": "Kushaq",
    "year": 2024,
    "startingPrice": 1098000,
    "emiFrom": 16470,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/187043/kushaq-facelift-exterior-right-front-three-quarter-6.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/187043/kushaq-exterior-rear-view-12.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/187043/kushaq-exterior-left-front-three-quarter-16.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/187043/kushaq-exterior-front-view-12.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/187043/kushaq-facelift-exterior-right-front-three-quarter-6.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol"
    ],
    "transmissions": [
      "Manual",
      "Automatic"
    ],
    "mileage": "19.8 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 385,
    "engineCC": 1498,
    "powerBHP": 150,
    "torqueNm": 250,
    "safetyRating": 5,
    "rating": 4.5,
    "reviewCount": 870,
    "colors": [
      "Honey Orange",
      "Carbon Steel",
      "Tornado Red",
      "Candy White",
      "Reflex Silver"
    ],
    "features": [
      "1.5 TSI Turbo Petrol",
      "10-inch Touchscreen",
      "Ventilated Seats",
      "Electric Sunroof",
      "6 Airbags & ESC"
    ],
    "variants": [
      {
        "id": "ckushaqv1",
        "name": "Active 1.0 TSI MT",
        "price": 1098000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 999,
        "powerBHP": 114
      },
      {
        "id": "ckushaqv2",
        "name": "Prestige Classic 1.5 TSI AT",
        "price": 1899000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1498,
        "powerBHP": 150
      }
    ],
    "dealerPrices": [],
    "description": "The Skoda Kushaq delivers European driving dynamics, strong TSI turbo engines, and a 5-star GNCAP safety structure — designed for Indian roads, engineered in Europe.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c-kiger",
    "slug": "renault-kiger-2024",
    "category": "car",
    "brand": "Renault",
    "model": "Kiger",
    "year": 2024,
    "startingPrice": 606000,
    "emiFrom": 9090,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/208550/kiger-exterior-right-front-three-quarter-30.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/208550/kiger-facelift-exterior-right-front-three-quarter-11.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/208550/kiger-facelift-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/208550/kiger-exterior-right-rear-three-quarter-10.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/208550/kiger-exterior-rear-view-12.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/208550/kiger-exterior-right-front-three-quarter-30.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol"
    ],
    "transmissions": [
      "Manual",
      "CVT",
      "AMT"
    ],
    "mileage": "20.5 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 405,
    "engineCC": 999,
    "powerBHP": 100,
    "torqueNm": 160,
    "safetyRating": 4,
    "rating": 4.3,
    "reviewCount": 940,
    "colors": [
      "Radiant Red",
      "ICY Blue",
      "Moonlight Grey",
      "Planet Grey",
      "Mahogany Brown"
    ],
    "features": [
      "8-inch Touchscreen",
      "Wireless Phone Charging",
      "Air Purifier",
      "LED DRLs",
      "PM 2.5 Filter"
    ],
    "variants": [
      {
        "id": "ckigerv1",
        "name": "RXE 1.0 MT",
        "price": 606000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 999,
        "powerBHP": 71
      },
      {
        "id": "ckigerv2",
        "name": "RXZ Turbo CVT",
        "price": 1083000,
        "fuelType": "Petrol",
        "transmission": "CVT",
        "engineCC": 999,
        "powerBHP": 100
      }
    ],
    "dealerPrices": [],
    "description": "The Renault Kiger is an affordable sub-compact SUV with class-leading boot space, turbo-petrol option, and attractive French design language.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c-xl6",
    "slug": "maruti-suzuki-xl6-2024",
    "category": "car",
    "brand": "Maruti Suzuki",
    "model": "XL6",
    "year": 2024,
    "startingPrice": 1145000,
    "emiFrom": 17175,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/115601/xl6-exterior-right-front-three-quarter-13.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/115601/2022-xl6-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/115601/2022-xl6-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/115601/2022-xl6-exterior-right-rear-three-quarter-3.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/115601/2022-xl6-exterior-rear-view.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/115601/xl6-exterior-right-front-three-quarter-13.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "CNG"
    ],
    "transmissions": [
      "Manual",
      "Automatic"
    ],
    "mileage": "20.9 kmpl",
    "seatingCapacity": 6,
    "bootSpaceL": 209,
    "engineCC": 1462,
    "powerBHP": 103,
    "torqueNm": 137,
    "safetyRating": 3,
    "rating": 4.4,
    "reviewCount": 1120,
    "colors": [
      "Opulent Red",
      "Arctic White",
      "Celestial Blue",
      "Grandeur Grey",
      "Brave Khaki"
    ],
    "features": [
      "Captain Seats in Second Row",
      "Suzuki Connect Telematics",
      "9-inch SmartPlay Pro+",
      "Cruise Control",
      "Rear AC Vents"
    ],
    "variants": [
      {
        "id": "cxl6v1",
        "name": "Zeta MT",
        "price": 1145000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1462,
        "powerBHP": 103
      },
      {
        "id": "cxl6v2",
        "name": "Alpha+ AT",
        "price": 1467000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1462,
        "powerBHP": 103
      }
    ],
    "dealerPrices": [],
    "description": "The Maruti Suzuki XL6 is the premium 6-seater Nexa counterpart of the Ertiga, featuring captain seats, upmarket cabin trim, and a refined driving experience.",
    "pros": [
      "Spacious 3-row cabin seating up to 7-8 occupants comfortably",
      "Highly practical modular seating rows that fold flat for luggage",
      "Very soft suspension setup makes long family trips comfortable"
    ],
    "cons": [
      "Large dimensions make city driving and parking slightly difficult",
      "Boxy styling lacks the aesthetic appeal of a modern SUV",
      "Fully loaded vehicle can struggle on steep mountain roads"
    ],
    "groundClearance": 180
  },
  {
    "id": "c-invicto",
    "slug": "maruti-suzuki-invicto-2024",
    "category": "car",
    "brand": "Maruti Suzuki",
    "model": "Invicto",
    "year": 2024,
    "startingPrice": 2531000,
    "emiFrom": 37965,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/147201/invicto-exterior-right-front-three-quarter-68.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/147201/invicto-exterior-right-front-three-quarter-67.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/147201/invicto-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/147201/invicto-exterior-right-rear-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/147201/invicto-exterior-rear-view-2.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/147201/invicto-exterior-right-front-three-quarter-68.png?isig=0&q=80",
    "fuelTypes": [
      "Hybrid"
    ],
    "transmissions": [
      "Automatic"
    ],
    "mileage": "23.2 kmpl",
    "seatingCapacity": 7,
    "bootSpaceL": 0,
    "engineCC": 1987,
    "powerBHP": 184,
    "torqueNm": 188,
    "safetyRating": 5,
    "rating": 4.6,
    "reviewCount": 340,
    "colors": [
      "Nexa Blue",
      "Mystic White",
      "Majestic Silver",
      "Grandeur Grey",
      "Cave Black"
    ],
    "features": [
      "Strong Hybrid System",
      "Ottoman Second-Row Seats",
      "Dual-Zone Climate Control",
      "9-inch Touchscreen",
      "360 Degree Camera"
    ],
    "variants": [
      {
        "id": "cinvictov1",
        "name": "Zeta+ Hybrid MT",
        "price": 2531000,
        "fuelType": "Hybrid",
        "transmission": "Automatic",
        "engineCC": 1987,
        "powerBHP": 184
      },
      {
        "id": "cinvictov2",
        "name": "Alpha+ Hybrid AT",
        "price": 2866000,
        "fuelType": "Hybrid",
        "transmission": "Automatic",
        "engineCC": 1987,
        "powerBHP": 184
      }
    ],
    "dealerPrices": [],
    "description": "The Maruti Suzuki Invicto is a premium hybrid MPV based on Toyota's Innova Hycross platform, offering luxury seating, strong hybrid efficiency, and Nexa exclusivity.",
    "pros": [
      "Spacious 3-row cabin seating up to 7-8 occupants comfortably",
      "Highly practical modular seating rows that fold flat for luggage",
      "Very soft suspension setup makes long family trips comfortable"
    ],
    "cons": [
      "Large dimensions make city driving and parking slightly difficult",
      "Boxy styling lacks the aesthetic appeal of a modern SUV",
      "Fully loaded vehicle can struggle on steep mountain roads"
    ],
    "groundClearance": 180
  },
  {
    "id": "c-ciaz",
    "slug": "maruti-suzuki-ciaz-2024",
    "category": "car",
    "brand": "Maruti Suzuki",
    "model": "Ciaz",
    "year": 2024,
    "startingPrice": 942000,
    "emiFrom": 14130,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/48542/ciaz-exterior-right-front-three-quarter-2.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/48542/ciaz-exterior-right-side-view.jpeg?q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/48542/ciaz-exterior-right-rear-three-quarter.jpeg?q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/48542/ciaz-exterior-rear-view.jpeg?q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/48542/ciaz-exterior-left-rear-three-quarter.jpeg?q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/48542/ciaz-exterior-right-front-three-quarter-2.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol"
    ],
    "transmissions": [
      "Manual",
      "Automatic"
    ],
    "mileage": "20.6 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 510,
    "engineCC": 1462,
    "powerBHP": 103,
    "torqueNm": 138,
    "safetyRating": 3,
    "rating": 4.4,
    "reviewCount": 1860,
    "colors": [
      "Pearl Arctic White",
      "Nexa Blue",
      "Grandeur Grey",
      "Celestial Blue",
      "Opulent Red"
    ],
    "features": [
      "SmartPlay Infotainment",
      "Cruise Control",
      "Rear AC Vents",
      "LED Projector Headlamps",
      "Smart Hybrid with SHVS"
    ],
    "variants": [
      {
        "id": "cciazv1",
        "name": "Sigma MT",
        "price": 942000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1462,
        "powerBHP": 103
      },
      {
        "id": "cciazv2",
        "name": "Alpha AT",
        "price": 1197000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1462,
        "powerBHP": 103
      }
    ],
    "dealerPrices": [],
    "description": "The Maruti Suzuki Ciaz is a refined mid-size sedan with a segment-leading 510-litre boot, mild-hybrid technology, and best-in-class rear seat comfort.",
    "pros": [
      "Low-slung aerodynamic shape offers excellent high-speed stability",
      "Generous passenger legroom and comfortable rear bench",
      "Large luggage boot space for family bags"
    ],
    "cons": [
      "Lower ground clearance can cause scraping on tall speedbreakers",
      "Low ingress and egress can be inconvenient for elderly passengers",
      "Parking in congested city areas can be tricky due to length"
    ],
    "groundClearance": 165
  },
  {
    "id": "c-venue",
    "slug": "hyundai-venue-2024",
    "category": "car",
    "brand": "Hyundai",
    "model": "Venue",
    "year": 2024,
    "startingPrice": 794000,
    "emiFrom": 11910,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/197163/venue-exterior-right-front-three-quarter.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/197163/venue-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/197163/venue-exterior-right-rear-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/197163/venue-exterior-rear-view.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/197163/venue-exterior-right-front-three-quarter.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "Diesel"
    ],
    "transmissions": [
      "Manual",
      "Automatic"
    ],
    "mileage": "17.5 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 350,
    "engineCC": 1197,
    "powerBHP": 82,
    "torqueNm": 114,
    "safetyRating": 4,
    "rating": 4.4,
    "reviewCount": 2100,
    "colors": [
      "Typhoon Silver",
      "Titan Grey",
      "Denim Blue",
      "Fiery Red",
      "Polar White"
    ],
    "features": [
      "8-inch Touchscreen",
      "Electric Sunroof",
      "Bluelink Connected Car Tech",
      "Rear AC Vents",
      "6 Airbags"
    ],
    "variants": [
      {
        "id": "cvenuev1",
        "name": "E 1.2 Petrol MT",
        "price": 794000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1197,
        "powerBHP": 82
      },
      {
        "id": "cvenuev2",
        "name": "SX 1.5 Diesel MT",
        "price": 1237000,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 1493,
        "powerBHP": 113
      }
    ],
    "dealerPrices": [],
    "description": "The Hyundai Venue is a feature-rich compact SUV that offers a smart design, premium interiors, and versatile engine options including a refined diesel motor.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c-punchev",
    "slug": "tata-punch-ev-2024",
    "category": "ev",
    "brand": "Tata",
    "model": "Punch EV",
    "year": 2024,
    "startingPrice": 999000,
    "emiFrom": 14985,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/217141/punch-ev-exterior-right-front-three-quarter-327.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/217141/punch-ev-facelift-exterior-right-front-three-quarter-4.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/217141/punch-ev-facelift-exterior-right-side-view-2.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/217141/punch-ev-facelift-exterior-right-rear-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/217141/punch-ev-facelift-exterior-rear-view.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/217141/punch-ev-exterior-right-front-three-quarter-327.png?isig=0&q=80",
    "fuelTypes": [
      "Electric"
    ],
    "transmissions": [
      "Automatic"
    ],
    "mileage": "421 km range",
    "seatingCapacity": 5,
    "bootSpaceL": 366,
    "engineCC": 0,
    "powerBHP": 120,
    "torqueNm": 190,
    "safetyRating": 5,
    "rating": 4.6,
    "reviewCount": 940,
    "colors": [
      "Empowered Oxide",
      "Seaweed Green",
      "Fearless Red",
      "Daytona Grey",
      "Pristine White"
    ],
    "features": [
      "10.25-inch Touchscreen",
      "360 Degree Camera",
      "Ventilated Front Seats",
      "Electronic Parking Brake",
      "Paddle Shifters for Regen"
    ],
    "variants": [
      {
        "id": "cpunchevv1",
        "name": "Smart MR",
        "price": 999000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "rangeKm": 315,
        "powerBHP": 80
      },
      {
        "id": "cpunchevv2",
        "name": "Empowered+ LR",
        "price": 1429000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "rangeKm": 421,
        "powerBHP": 120
      }
    ],
    "dealerPrices": [],
    "description": "The Tata Punch EV is a highly advanced micro-SUV built on the Acti.ev dedicated EV architecture, offering an impressive range, tech-loaded cabin, and high safety standards.",
    "pros": [
      "Completely silent, vibration-free cabin environment",
      "Instant electric torque response makes overtaking a breeze",
      "Zero tailpipe emissions and extremely cheap running costs"
    ],
    "cons": [
      "Long road trips require planning around public charging stations",
      "Higher initial investment cost compared to ICE cars",
      "Long-term battery replacement cost is high"
    ],
    "groundClearance": 187
  },
  {
    "id": "c-celerio",
    "slug": "maruti-suzuki-celerio-2024",
    "category": "car",
    "brand": "Maruti Suzuki",
    "model": "Celerio",
    "year": 2024,
    "startingPrice": 536500,
    "emiFrom": 8048,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/53695/celerio-exterior-right-front-three-quarter-8.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/53695/new-gen-celerio-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/53695/new-gen-celerio-exterior-right-side-view-2.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/53695/celerio-exterior-right-front-three-quarter-8.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "CNG"
    ],
    "transmissions": [
      "Manual",
      "AMT"
    ],
    "mileage": "25.2 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 313,
    "engineCC": 998,
    "powerBHP": 66,
    "torqueNm": 89,
    "safetyRating": 2,
    "rating": 4.2,
    "reviewCount": 880,
    "colors": [
      "Solid Fire Red",
      "Speedy Blue",
      "Silky Silver",
      "Glistening Grey",
      "Arctic White"
    ],
    "features": [
      "SmartPlay Studio Touchscreen",
      "Engine Push Start/Stop",
      "Keyless Entry",
      "Steering Mounted Controls",
      "Dual Airbags"
    ],
    "variants": [
      {
        "id": "cceleriov1",
        "name": "LXi MT",
        "price": 536500,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 998,
        "powerBHP": 66
      },
      {
        "id": "cceleriov2",
        "name": "ZXi+ AMT",
        "price": 704500,
        "fuelType": "Petrol",
        "transmission": "AMT",
        "engineCC": 998,
        "powerBHP": 66
      }
    ],
    "dealerPrices": [],
    "description": "The Maruti Suzuki Celerio is a highly efficient city hatchback, offering an easy driving experience, practical cabin space, and class-leading fuel economy.",
    "pros": [
      "Compact dimensions make it very easy to drive and park in city traffic",
      "Outstanding fuel economy keeps running costs low",
      "Widespread service support and highly affordable parts"
    ],
    "cons": [
      "Limited luggage boot space for weekend family trips",
      "Cabin is not well insulated from engine and tyre noise at highway speeds",
      "Suspension feels slightly basic over large road potholes"
    ],
    "groundClearance": 165
  },
  {
    "id": "c-tiago",
    "slug": "tata-tiago-2024",
    "category": "car",
    "brand": "Tata",
    "model": "Tiago",
    "year": 2024,
    "startingPrice": 564900,
    "emiFrom": 8474,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/219990/next-gen-tiago-exterior-right-front-three-quarter-38.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/219990/next-gen-tiago-exterior-right-front-three-quarter-37.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/219990/next-gen-tiago-exterior-right-side-view-5.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/219990/next-gen-tiago-exterior-right-rear-three-quarter.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/219990/next-gen-tiago-exterior-right-front-three-quarter-38.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "CNG"
    ],
    "transmissions": [
      "Manual",
      "AMT"
    ],
    "mileage": "20.0 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 242,
    "engineCC": 1199,
    "powerBHP": 85,
    "torqueNm": 113,
    "safetyRating": 4,
    "rating": 4.3,
    "reviewCount": 1490,
    "colors": [
      "Midnight Plum",
      "Arizona Blue",
      "Flame Red",
      "Opal White",
      "Daytona Grey"
    ],
    "features": [
      "7-inch Harman Touchscreen",
      "Fully Digital Instrument Cluster",
      "8-speaker Sound System",
      "Auto Climate Control",
      "Dual Airbags"
    ],
    "variants": [
      {
        "id": "ctiagov1",
        "name": "XE MT",
        "price": 564900,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1199,
        "powerBHP": 85
      },
      {
        "id": "ctiagov2",
        "name": "XZA+ AMT",
        "price": 789900,
        "fuelType": "Petrol",
        "transmission": "AMT",
        "engineCC": 1199,
        "powerBHP": 85
      }
    ],
    "dealerPrices": [],
    "description": "The Tata Tiago is a beautifully styled hatchback that packs a punch with its solid build quality, reliable performance, and impressive 4-star safety rating.",
    "pros": [
      "Compact dimensions make it very easy to drive and park in city traffic",
      "Outstanding fuel economy keeps running costs low",
      "Widespread service support and highly affordable parts"
    ],
    "cons": [
      "Limited luggage boot space for weekend family trips",
      "Cabin is not well insulated from engine and tyre noise at highway speeds",
      "Suspension feels slightly basic over large road potholes"
    ],
    "groundClearance": 165
  },
  {
    "id": "c-tigor",
    "slug": "tata-tigor-2024",
    "category": "car",
    "brand": "Tata",
    "model": "Tigor",
    "year": 2024,
    "startingPrice": 629900,
    "emiFrom": 9449,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41160/tigor-exterior-right-front-three-quarter-25.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41160/tigor-exterior-right-side-view-2.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41160/tigor-exterior-right-rear-three-quarter-9.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/41160/tigor-exterior-rear-view-2.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/41160/tigor-exterior-right-front-three-quarter-25.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "CNG"
    ],
    "transmissions": [
      "Manual",
      "AMT"
    ],
    "mileage": "19.6 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 419,
    "engineCC": 1199,
    "powerBHP": 85,
    "torqueNm": 113,
    "safetyRating": 4,
    "rating": 4.3,
    "reviewCount": 920,
    "colors": [
      "Magnetic Red",
      "Arizona Blue",
      "Opal White",
      "Daytona Grey"
    ],
    "features": [
      "7-inch Harman Infotainment",
      "Automatic Climate Control",
      "Digital Instrument Cluster",
      "Push Button Start/Stop",
      "Projector Headlamps"
    ],
    "variants": [
      {
        "id": "ctigorv1",
        "name": "XE MT",
        "price": 629900,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1199,
        "powerBHP": 85
      },
      {
        "id": "ctigorv2",
        "name": "XZA+ AMT",
        "price": 859900,
        "fuelType": "Petrol",
        "transmission": "AMT",
        "engineCC": 1199,
        "powerBHP": 85
      }
    ],
    "dealerPrices": [],
    "description": "The Tata Tigor is a premium compact sedan combining a sleek fastback roofline, cavernous boot space, and robust safety standards at a reasonable price.",
    "pros": [
      "Low-slung aerodynamic shape offers excellent high-speed stability",
      "Generous passenger legroom and comfortable rear bench",
      "Large luggage boot space for family bags"
    ],
    "cons": [
      "Lower ground clearance can cause scraping on tall speedbreakers",
      "Low ingress and egress can be inconvenient for elderly passengers",
      "Parking in congested city areas can be tricky due to length"
    ],
    "groundClearance": 165
  },
  {
    "id": "c-aura",
    "slug": "hyundai-aura-2024",
    "category": "car",
    "brand": "Hyundai",
    "model": "Aura",
    "year": 2024,
    "startingPrice": 648600,
    "emiFrom": 9729,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/139133/aura-exterior-right-front-three-quarter-9.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/139133/aura-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/139133/aura-exterior-right-side-view.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/139133/aura-exterior-right-front-three-quarter-9.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "CNG"
    ],
    "transmissions": [
      "Manual",
      "AMT"
    ],
    "mileage": "20.5 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 402,
    "engineCC": 1197,
    "powerBHP": 82,
    "torqueNm": 114,
    "safetyRating": 3,
    "rating": 4.4,
    "reviewCount": 890,
    "colors": [
      "Starry Night",
      "Fiery Red",
      "Typhoon Silver",
      "Titan Grey",
      "Atlas White"
    ],
    "features": [
      "8-inch Touchscreen Infotainment",
      "Wireless Charger",
      "6 Airbags standard",
      "Cruise Control",
      "Rear AC Vents"
    ],
    "variants": [
      {
        "id": "caurav1",
        "name": "E 1.2 MT",
        "price": 648600,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1197,
        "powerBHP": 82
      },
      {
        "id": "caurav2",
        "name": "SX+ 1.2 AMT",
        "price": 889000,
        "fuelType": "Petrol",
        "transmission": "AMT",
        "engineCC": 1197,
        "powerBHP": 82
      }
    ],
    "dealerPrices": [],
    "description": "The Hyundai Aura is a premium compact sedan designed for modern families, offering top-tier interior styling, strong connectivity, and class-leading safety features.",
    "pros": [
      "Low-slung aerodynamic shape offers excellent high-speed stability",
      "Generous passenger legroom and comfortable rear bench",
      "Large luggage boot space for family bags"
    ],
    "cons": [
      "Lower ground clearance can cause scraping on tall speedbreakers",
      "Low ingress and egress can be inconvenient for elderly passengers",
      "Parking in congested city areas can be tricky due to length"
    ],
    "groundClearance": 165
  },
  {
    "id": "c-eeco",
    "slug": "maruti-suzuki-eeco-2024",
    "category": "car",
    "brand": "Maruti Suzuki",
    "model": "Eeco",
    "year": 2024,
    "startingPrice": 532000,
    "emiFrom": 7980,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/135523/eeco-exterior-right-front-three-quarter-3.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/135523/eeco-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/135523/eeco-interior-front-row-seats-7.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/135523/eeco-exterior-right-front-three-quarter-3.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "CNG"
    ],
    "transmissions": [
      "Manual"
    ],
    "mileage": "20.2 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 540,
    "engineCC": 1197,
    "powerBHP": 80,
    "torqueNm": 104,
    "safetyRating": 0,
    "rating": 4.1,
    "reviewCount": 1650,
    "colors": [
      "Metallic Glistening Grey",
      "Solid White",
      "Metallic Silky Silver",
      "Pearl Midnight Black"
    ],
    "features": [
      "Digital Instrument Cluster",
      "Reclining Front Seats",
      "Dual Airbags",
      "ABS with EBD",
      "AC with Heater"
    ],
    "variants": [
      {
        "id": "ceecov1",
        "name": "5 STR Standard",
        "price": 532000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1197,
        "powerBHP": 80
      },
      {
        "id": "ceecov2",
        "name": "5 STR AC CNG",
        "price": 658000,
        "fuelType": "CNG",
        "transmission": "Manual",
        "engineCC": 1197,
        "powerBHP": 71
      }
    ],
    "dealerPrices": [],
    "description": "The Maruti Suzuki Eeco is India's most popular multi-utility van, catering to family travel and business cargo needs with unmatched cabin space and a robust powertrain.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c-spresso",
    "slug": "maruti-suzuki-s-presso-2024",
    "category": "car",
    "brand": "Maruti Suzuki",
    "model": "S-Presso",
    "year": 2024,
    "startingPrice": 426500,
    "emiFrom": 6398,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/126463/s-presso-exterior-right-front-three-quarter-5.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/126463/s-presso-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/126463/s-presso-exterior-right-side-view.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/126463/s-presso-exterior-right-front-three-quarter-5.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "CNG"
    ],
    "transmissions": [
      "Manual",
      "AMT"
    ],
    "mileage": "24.4 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 240,
    "engineCC": 998,
    "powerBHP": 66,
    "torqueNm": 89,
    "safetyRating": 1,
    "rating": 4.1,
    "reviewCount": 980,
    "colors": [
      "Solid Fire Red",
      "Starry Blue",
      "Granite Grey",
      "Silky Silver",
      "Solid Sizzle Orange",
      "Superior White"
    ],
    "features": [
      "SmartPlay Studio Infotainment",
      "Centrally Mounted Cluster",
      "Steering Mounted Controls",
      "Dual Airbags & ESP",
      "Keyless Entry"
    ],
    "variants": [
      {
        "id": "cspressov1",
        "name": "Std MT",
        "price": 426500,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 998,
        "powerBHP": 66
      },
      {
        "id": "cspressov2",
        "name": "VXi+ AMT",
        "price": 576500,
        "fuelType": "Petrol",
        "transmission": "AMT",
        "engineCC": 998,
        "powerBHP": 66
      }
    ],
    "dealerPrices": [],
    "description": "The Maruti Suzuki S-Presso is an entry-level mini-SUV styled hatchback, offering a high seating position, great ground clearance, and an extremely fuel-efficient motor.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c-boleroneo",
    "slug": "mahindra-bolero-neo-2024",
    "category": "car",
    "brand": "Mahindra",
    "model": "Bolero Neo",
    "year": 2024,
    "startingPrice": 989900,
    "emiFrom": 14849,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/210989/bolero-neo-exterior-right-front-three-quarter-3.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/210989/bolero-neo-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/210989/bolero-neo-exterior-rear-view.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/210989/bolero-neo-exterior-right-front-three-quarter-3.png?isig=0&q=80",
    "fuelTypes": [
      "Diesel"
    ],
    "transmissions": [
      "Manual"
    ],
    "mileage": "17.3 kmpl",
    "seatingCapacity": 7,
    "bootSpaceL": 384,
    "engineCC": 1493,
    "powerBHP": 100,
    "torqueNm": 260,
    "safetyRating": 3,
    "rating": 4.4,
    "reviewCount": 780,
    "colors": [
      "Napoli Black",
      "Majestic Silver",
      "Highway Red",
      "Diamond White",
      "Rocky Beige"
    ],
    "features": [
      "7-inch Touchscreen Infotainment",
      "Multi Terrain Technology (MTT)",
      "Micro Hybrid Tech",
      "Dual Airbags & ABS",
      "Rear Parking Sensors"
    ],
    "variants": [
      {
        "id": "cboleroneov1",
        "name": "N4 MT",
        "price": 989900,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 1493,
        "powerBHP": 100
      },
      {
        "id": "cboleroneov2",
        "name": "N10 (O) MT",
        "price": 1249000,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 1493,
        "powerBHP": 100
      }
    ],
    "dealerPrices": [],
    "description": "The Mahindra Bolero Neo is a modern iteration of the rugged TUV300, combining Bolero ruggedness with body-on-frame diesel performance and 7-seater layout.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 180
  },
  {
    "id": "c-carnival",
    "slug": "kia-carnival-2024",
    "category": "car",
    "brand": "Kia",
    "model": "Carnival",
    "year": 2024,
    "startingPrice": 6390000,
    "emiFrom": 95850,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/138947/carnival-exterior-right-front-three-quarter-20.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/138947/carnival-exterior-right-front-three-quarter-16.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/138947/carnival-exterior-right-side-view-19.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/138947/carnival-exterior-right-rear-three-quarter-19.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/138947/carnival-exterior-right-front-three-quarter-20.png?isig=0&q=80",
    "fuelTypes": [
      "Diesel"
    ],
    "transmissions": [
      "Automatic"
    ],
    "mileage": "14.2 kmpl",
    "seatingCapacity": 7,
    "bootSpaceL": 540,
    "engineCC": 2151,
    "powerBHP": 197,
    "torqueNm": 440,
    "safetyRating": 5,
    "rating": 4.8,
    "reviewCount": 120,
    "colors": [
      "Glacier White Pearl",
      "Aurora Black Pearl"
    ],
    "features": [
      "Dual 12.3-inch Curved Displays",
      "Dual Electric Sunroofs",
      "ADAS Level 2 Suite",
      "Powered Ottoman Seats",
      "Bose 12-speaker Audio"
    ],
    "variants": [
      {
        "id": "ccarnivalv1",
        "name": "Limousine Plus 2.2D AT",
        "price": 6390000,
        "fuelType": "Diesel",
        "transmission": "Automatic",
        "engineCC": 2151,
        "powerBHP": 197
      }
    ],
    "dealerPrices": [],
    "description": "The Kia Carnival is a luxury MPV that offers first-class seating, dual sunroofs, an array of ADAS level-2 features, and a premium cabin engineered for absolute luxury.",
    "pros": [
      "Spacious 3-row cabin seating up to 7-8 occupants comfortably",
      "Highly practical modular seating rows that fold flat for luggage",
      "Very soft suspension setup makes long family trips comfortable"
    ],
    "cons": [
      "Large dimensions make city driving and parking slightly difficult",
      "Boxy styling lacks the aesthetic appeal of a modern SUV",
      "Fully loaded vehicle can struggle on steep mountain roads"
    ],
    "groundClearance": 180
  },
  {
    "id": "c-innovacrysta",
    "slug": "toyota-innova-crysta-2024",
    "category": "car",
    "brand": "Toyota",
    "model": "Innova Crysta",
    "year": 2024,
    "startingPrice": 1999000,
    "emiFrom": 29985,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/222736/innova-crysta-2026-exterior-right-front-three-quarter.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/222736/innova-crysta-2026-exterior-right-front-three-quarter-8.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/222736/innova-crysta-2026-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/222736/innova-crysta-2026-exterior-right-rear-three-quarter.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/222736/innova-crysta-2026-exterior-right-front-three-quarter.png?isig=0&q=80",
    "fuelTypes": [
      "Diesel"
    ],
    "transmissions": [
      "Manual"
    ],
    "mileage": "12.0 kmpl",
    "seatingCapacity": 7,
    "bootSpaceL": 300,
    "engineCC": 2393,
    "powerBHP": 148,
    "torqueNm": 343,
    "safetyRating": 5,
    "rating": 4.7,
    "reviewCount": 990,
    "colors": [
      "Super White",
      "Silver Metallic",
      "Attitude Black Mica",
      "Avant-Garde Bronze",
      "Platinum White Pearl"
    ],
    "features": [
      "8-inch Touchscreen Infotainment",
      "7 Airbags",
      "Eco and Power Drive Modes",
      "Automatic Climate Control",
      "Premium Captain Seats"
    ],
    "variants": [
      {
        "id": "cinnovacrystav1",
        "name": "GX 7 STR MT",
        "price": 1999000,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 2393,
        "powerBHP": 148
      },
      {
        "id": "cinnovacrystav2",
        "name": "ZX 7 STR MT",
        "price": 2655000,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 2393,
        "powerBHP": 148
      }
    ],
    "dealerPrices": [],
    "description": "The Toyota Innova Crysta is India's legendary diesel MPV, widely respected for its unmatched reliability, strong torque delivery, safety standards, and absolute highway comfort.",
    "pros": [
      "Spacious 3-row cabin seating up to 7-8 occupants comfortably",
      "Highly practical modular seating rows that fold flat for luggage",
      "Very soft suspension setup makes long family trips comfortable"
    ],
    "cons": [
      "Large dimensions make city driving and parking slightly difficult",
      "Boxy styling lacks the aesthetic appeal of a modern SUV",
      "Fully loaded vehicle can struggle on steep mountain roads"
    ],
    "groundClearance": 180
  },
  {
    "id": "c-cometev",
    "slug": "mg-comet-ev-2024",
    "category": "ev",
    "brand": "MG",
    "model": "Comet EV",
    "year": 2024,
    "startingPrice": 699000,
    "emiFrom": 10485,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/125193/comet-ev-exterior-right-front-three-quarter-31.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/125193/comet-ev-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/125193/comet-ev-exterior-right-side-view.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/125193/comet-ev-exterior-right-front-three-quarter-31.png?isig=0&q=80",
    "fuelTypes": [
      "Electric"
    ],
    "transmissions": [
      "Automatic"
    ],
    "mileage": "230 km range",
    "seatingCapacity": 4,
    "bootSpaceL": 0,
    "engineCC": 0,
    "powerBHP": 41,
    "torqueNm": 110,
    "safetyRating": 3,
    "rating": 4.2,
    "reviewCount": 310,
    "colors": [
      "Candy White",
      "Aurora Silver",
      "Starry Black",
      "Apple Green",
      "Sunlight Yellow"
    ],
    "features": [
      "Dual 10.25-inch Screens",
      "Connected Car Tech",
      "Keyless Entry & Drive",
      "Smart Start System",
      "Rear Parking Camera"
    ],
    "variants": [
      {
        "id": "ccometevv1",
        "name": "Executive",
        "price": 699000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "rangeKm": 230,
        "powerBHP": 41
      },
      {
        "id": "ccometevv2",
        "name": "Exclusive Fast Charge",
        "price": 858000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "rangeKm": 230,
        "powerBHP": 41
      }
    ],
    "dealerPrices": [],
    "description": "The MG Comet EV is an ultra-compact electric city car designed for dense traffic. It packs a futuristic cabin, dual screens, and low running costs in an easy-to-park footprint.",
    "pros": [
      "Completely silent, vibration-free cabin environment",
      "Instant electric torque response makes overtaking a breeze",
      "Zero tailpipe emissions and extremely cheap running costs"
    ],
    "cons": [
      "Long road trips require planning around public charging stations",
      "Higher initial investment cost compared to ICE cars",
      "Long-term battery replacement cost is high"
    ],
    "groundClearance": 175
  },
  {
    "id": "c-windsorev",
    "slug": "mg-windsor-ev-2024",
    "category": "ev",
    "brand": "MG",
    "model": "Windsor EV",
    "year": 2024,
    "startingPrice": 1349800,
    "emiFrom": 20247,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/174611/windsor-ev-exterior-right-front-three-quarter-84.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/174611/windsor-ev-exterior-right-front-three-quarter-76.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/174611/windsor-ev-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/174611/windsor-ev-exterior-right-rear-three-quarter.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/174611/windsor-ev-exterior-right-front-three-quarter-84.png?isig=0&q=80",
    "fuelTypes": [
      "Electric"
    ],
    "transmissions": [
      "Automatic"
    ],
    "mileage": "331 km range",
    "seatingCapacity": 5,
    "bootSpaceL": 604,
    "engineCC": 0,
    "powerBHP": 134,
    "torqueNm": 200,
    "safetyRating": 5,
    "rating": 4.6,
    "reviewCount": 220,
    "colors": [
      "Clay Beige",
      "Turquoise Green",
      "Pearl White",
      "Starry Black"
    ],
    "features": [
      "15.6-inch GrandTouch Screen",
      "135 Degree Aero Lounge Seats",
      "Glass Roof",
      "Infinity Sound System",
      "ADAS Level 2"
    ],
    "variants": [
      {
        "id": "cwindsorevv1",
        "name": "Excite",
        "price": 1349800,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "rangeKm": 331,
        "powerBHP": 134
      },
      {
        "id": "cwindsorevv2",
        "name": "Essence",
        "price": 1549800,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "rangeKm": 331,
        "powerBHP": 134
      }
    ],
    "dealerPrices": [],
    "description": "The MG Windsor EV is a luxury electric utility crossover combining standard EV range with lounge-like comfort, featuring 135-degree reclining seats and a giant 15.6-inch touchscreen.",
    "pros": [
      "Completely silent, vibration-free cabin environment",
      "Instant electric torque response makes overtaking a breeze",
      "Zero tailpipe emissions and extremely cheap running costs"
    ],
    "cons": [
      "Long road trips require planning around public charging stations",
      "Higher initial investment cost compared to ICE cars",
      "Long-term battery replacement cost is high"
    ],
    "groundClearance": 175
  },
  {
    "id": "c-jeepcompass",
    "slug": "jeep-compass-2024",
    "category": "car",
    "brand": "Jeep",
    "model": "Compass",
    "year": 2024,
    "startingPrice": 1899000,
    "emiFrom": 28485,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/47051/compass-exterior-right-front-three-quarter-84.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/47051/compass-exterior-right-front-three-quarter-83.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/47051/compass-exterior-right-side-view-5.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/47051/compass-exterior-right-rear-three-quarter.avif?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/47051/compass-exterior-right-front-three-quarter-84.png?isig=0&q=80",
    "fuelTypes": [
      "Diesel"
    ],
    "transmissions": [
      "Manual",
      "Automatic"
    ],
    "mileage": "16.2 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 438,
    "engineCC": 1956,
    "powerBHP": 168,
    "torqueNm": 350,
    "safetyRating": 5,
    "rating": 4.5,
    "reviewCount": 450,
    "colors": [
      "Exotica Red",
      "Minimal Grey",
      "Grigio Magnesio",
      "Galaxy Blue",
      "Vocal White"
    ],
    "features": [
      "10.1-inch Uconnect Infotainment",
      "Dual-pane Panoramic Sunroof",
      "Wireless Charging",
      "Ventilated Front Seats",
      "Electronic Stability Control (ESC)"
    ],
    "variants": [
      {
        "id": "cjeepcompassv1",
        "name": "Sport 2.0D MT",
        "price": 1899000,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 1956,
        "powerBHP": 168
      },
      {
        "id": "cjeepcompassv2",
        "name": "Model S 2.0D AT",
        "price": 2833000,
        "fuelType": "Diesel",
        "transmission": "Automatic",
        "engineCC": 1956,
        "powerBHP": 168
      }
    ],
    "dealerPrices": [],
    "description": "The Jeep Compass is a premium SUV built for on-road sophistication and off-road ruggedness. It offers European driving dynamics, a luxury cabin, and a strong diesel motor.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c-triber",
    "slug": "renault-triber-2024",
    "category": "car",
    "brand": "Renault",
    "model": "Triber",
    "year": 2024,
    "startingPrice": 599900,
    "emiFrom": 8999,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/199767/triber-exterior-right-front-three-quarter-26.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/199767/triber-exterior-right-front-three-quarter-18.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/199767/triber-2025-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/199767/triber-exterior-right-rear-three-quarter-28.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/199767/triber-exterior-right-front-three-quarter-26.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol"
    ],
    "transmissions": [
      "Manual",
      "AMT"
    ],
    "mileage": "19.0 kmpl",
    "seatingCapacity": 7,
    "bootSpaceL": 625,
    "engineCC": 999,
    "powerBHP": 71,
    "torqueNm": 96,
    "safetyRating": 4,
    "rating": 4.3,
    "reviewCount": 710,
    "colors": [
      "Electric Blue",
      "Cedar Brown",
      "Fiery Red",
      "Moonlight Grey",
      "Ice Cool White"
    ],
    "features": [
      "8-inch Touchscreen Infotainment",
      "EasyFix Removable Seats",
      "Digital Cluster",
      "Rear AC Vents in 2nd & 3rd Rows",
      "4 Airbags"
    ],
    "variants": [
      {
        "id": "ctriberv1",
        "name": "RXE MT",
        "price": 599900,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 999,
        "powerBHP": 71
      },
      {
        "id": "ctriberv2",
        "name": "RXZ AMT",
        "price": 847500,
        "fuelType": "Petrol",
        "transmission": "AMT",
        "engineCC": 999,
        "powerBHP": 71
      }
    ],
    "dealerPrices": [],
    "description": "The Renault Triber is a highly versatile and spacious 7-seater sub-4m MPV, offering modular seating layout, an impressive boot space, and robust styling details.",
    "pros": [
      "Spacious 3-row cabin seating up to 7-8 occupants comfortably",
      "Highly practical modular seating rows that fold flat for luggage",
      "Very soft suspension setup makes long family trips comfortable"
    ],
    "cons": [
      "Large dimensions make city driving and parking slightly difficult",
      "Boxy styling lacks the aesthetic appeal of a modern SUV",
      "Fully loaded vehicle can struggle on steep mountain roads"
    ],
    "groundClearance": 180
  },
  {
    "id": "c_porsche_porsche_cayenne",
    "slug": "porsche-cayenne",
    "category": "car",
    "brand": "Porsche",
    "model": "Cayenne",
    "year": 2026,
    "startingPrice": 14290000,
    "emiFrom": 214350,
    "images": [
      "/images/porsche_cayenne.jpg"
    ],
    "thumbnailUrl": "/images/porsche_cayenne.jpg",
    "fuelTypes": [
      "Petrol",
      "Hybrid"
    ],
    "transmissions": [
      "Automatic"
    ],
    "mileage": "10.8 kmpl",
    "isNew": true,
    "seatingCapacity": 5,
    "engineCC": 2995,
    "powerBHP": 348,
    "torqueNm": 500,
    "safetyRating": 5,
    "rating": 4.6,
    "reviewCount": 85,
    "colors": [
      "White",
      "Black",
      "Silver",
      "Grey"
    ],
    "features": [
      "Touchscreen Infotainment",
      "Multi-function Steering",
      "Power Windows",
      "Dual Airbags",
      "ABS with EBD"
    ],
    "variants": [
      {
        "id": "c_porsche_porsche_cayennev1",
        "name": "Base SUV",
        "price": 14290000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 2995,
        "powerBHP": 348,
        "mileageKmpl": 10.8
      },
      {
        "id": "c_porsche_porsche_cayennev2",
        "name": "Coupe",
        "price": 14720000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 2995,
        "powerBHP": 348,
        "mileageKmpl": 10.8
      },
      {
        "id": "c_porsche_porsche_cayennev3",
        "name": "Turbo E-Hybrid",
        "price": 24480000,
        "fuelType": "Hybrid",
        "transmission": "Automatic",
        "engineCC": 3996,
        "powerBHP": 729,
        "mileageKmpl": 15.5
      }
    ],
    "dealerPrices": [
      {
        "dealerId": "d1",
        "dealerName": "Maruti True Value Ranchi",
        "location": "Ranchi",
        "price": 14912000,
        "discount": 15000,
        "rating": 4.6
      },
      {
        "dealerId": "d5",
        "dealerName": "Tata Motors Ranchi",
        "location": "Ranchi",
        "price": 14910000,
        "discount": 20000,
        "rating": 4.5
      }
    ],
    "description": "The Porsche Cayenne is a premium mid-size luxury crossover SUV that offers sports-car performance combined with executive luxury and off-road capability.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 210,
    "bootSpaceL": 648
  },
  {
    "id": "c_byd_emax_7",
    "slug": "emax-7",
    "category": "ev",
    "brand": "BYD",
    "model": "eMAX 7",
    "year": 2026,
    "startingPrice": 2690000,
    "emiFrom": 40350,
    "images": [
      "/images/byd_emax_7.jpg"
    ],
    "thumbnailUrl": "/images/byd_emax_7.jpg",
    "fuelTypes": [
      "Electric"
    ],
    "transmissions": [
      "Automatic"
    ],
    "mileage": "530 km range",
    "isNew": true,
    "seatingCapacity": 7,
    "engineCC": 0,
    "powerBHP": 201,
    "torqueNm": 310,
    "safetyRating": 5,
    "rating": 4.6,
    "reviewCount": 85,
    "colors": [
      "White",
      "Black",
      "Silver",
      "Grey"
    ],
    "features": [
      "Touchscreen Infotainment",
      "Multi-function Steering",
      "Power Windows",
      "Dual Airbags",
      "ABS with EBD"
    ],
    "variants": [
      {
        "id": "c_byd_emax_7v1",
        "name": "Premium 6 STR",
        "price": 2690000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "engineCC": 0,
        "powerBHP": 161,
        "rangeKm": 420
      },
      {
        "id": "c_byd_emax_7v2",
        "name": "Premium 7 STR",
        "price": 2750000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "engineCC": 0,
        "powerBHP": 161,
        "rangeKm": 420
      },
      {
        "id": "c_byd_emax_7v3",
        "name": "Superior 6 STR",
        "price": 2990000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "engineCC": 0,
        "powerBHP": 201,
        "rangeKm": 530
      },
      {
        "id": "c_byd_emax_7v4",
        "name": "Superior 7 STR",
        "price": 3010000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "engineCC": 0,
        "powerBHP": 201,
        "rangeKm": 530
      }
    ],
    "dealerPrices": [
      {
        "dealerId": "d1",
        "dealerName": "Maruti True Value Ranchi",
        "location": "Ranchi",
        "price": 2702000,
        "discount": 15000,
        "rating": 4.6
      },
      {
        "dealerId": "d5",
        "dealerName": "Tata Motors Ranchi",
        "location": "Ranchi",
        "price": 2700000,
        "discount": 20000,
        "rating": 4.5
      }
    ],
    "description": "The BYD eMAX 7 is an all-electric 3-row MPV designed for families, offering an advanced Blade Battery, rich features, and impressive range.",
    "pros": [
      "Completely silent, vibration-free cabin environment",
      "Instant electric torque response makes overtaking a breeze",
      "Zero tailpipe emissions and extremely cheap running costs"
    ],
    "cons": [
      "Long road trips require planning around public charging stations",
      "Higher initial investment cost compared to ICE cars",
      "Long-term battery replacement cost is high"
    ],
    "groundClearance": 175,
    "bootSpaceL": 180
  },
  {
    "id": "c_mini_cooper_s",
    "slug": "cooper-s",
    "category": "car",
    "brand": "Mini",
    "model": "Cooper S",
    "year": 2026,
    "startingPrice": 4490000,
    "emiFrom": 67350,
    "images": [
      "/images/mini_cooper_s.jpg"
    ],
    "thumbnailUrl": "/images/mini_cooper_s.jpg",
    "fuelTypes": [
      "Petrol"
    ],
    "transmissions": [
      "Automatic"
    ],
    "mileage": "16.5 kmpl",
    "isNew": true,
    "seatingCapacity": 4,
    "engineCC": 1998,
    "powerBHP": 201,
    "torqueNm": 300,
    "safetyRating": 5,
    "rating": 4.6,
    "reviewCount": 85,
    "colors": [
      "White",
      "Black",
      "Silver",
      "Grey"
    ],
    "features": [
      "Touchscreen Infotainment",
      "Multi-function Steering",
      "Power Windows",
      "Dual Airbags",
      "ABS with EBD"
    ],
    "variants": [
      {
        "id": "c_mini_cooper_sv1",
        "name": "Cooper S Classic",
        "price": 4490000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1998,
        "powerBHP": 201,
        "mileageKmpl": 16.5
      },
      {
        "id": "c_mini_cooper_sv2",
        "name": "Cooper S Favoured",
        "price": 4790000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1998,
        "powerBHP": 201,
        "mileageKmpl": 16.5
      }
    ],
    "dealerPrices": [
      {
        "dealerId": "d1",
        "dealerName": "Maruti True Value Ranchi",
        "location": "Ranchi",
        "price": 4502000,
        "discount": 15000,
        "rating": 4.6
      },
      {
        "dealerId": "d5",
        "dealerName": "Tata Motors Ranchi",
        "location": "Ranchi",
        "price": 4500000,
        "discount": 20000,
        "rating": 4.5
      }
    ],
    "description": "The Mini Cooper S is a premium hot-hatch featuring go-kart handling, retro-modern styling, and a punchy 2.0L turbocharged petrol engine.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 146,
    "bootSpaceL": 211
  },
  {
    "id": "c_maruti_suzuki_eeco_cargo",
    "slug": "eeco-cargo",
    "category": "car",
    "brand": "Maruti Suzuki",
    "model": "Eeco Cargo",
    "year": 2026,
    "startingPrice": 542000,
    "emiFrom": 8130,
    "images": [
      "/images/maruti_suzuki_eeco_cargo.jpg"
    ],
    "thumbnailUrl": "/images/maruti_suzuki_eeco_cargo.jpg",
    "fuelTypes": [
      "Petrol",
      "CNG"
    ],
    "transmissions": [
      "Manual"
    ],
    "mileage": "19.71 kmpl",
    "isNew": true,
    "seatingCapacity": 2,
    "engineCC": 1197,
    "powerBHP": 80,
    "torqueNm": 104.4,
    "safetyRating": 5,
    "rating": 4.6,
    "reviewCount": 85,
    "colors": [
      "White",
      "Black",
      "Silver",
      "Grey"
    ],
    "features": [
      "Touchscreen Infotainment",
      "Multi-function Steering",
      "Power Windows",
      "Dual Airbags",
      "ABS with EBD"
    ],
    "variants": [
      {
        "id": "c_maruti_suzuki_eeco_cargov1",
        "name": "Standard Petrol",
        "price": 542000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1197,
        "powerBHP": 80,
        "mileageKmpl": 19.7
      },
      {
        "id": "c_maruti_suzuki_eeco_cargov2",
        "name": "AC Petrol",
        "price": 582000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1197,
        "powerBHP": 80,
        "mileageKmpl": 19.7
      },
      {
        "id": "c_maruti_suzuki_eeco_cargov3",
        "name": "Standard CNG",
        "price": 674000,
        "fuelType": "CNG",
        "transmission": "Manual",
        "engineCC": 1197,
        "powerBHP": 71,
        "mileageKmpl": 26.8
      }
    ],
    "dealerPrices": [
      {
        "dealerId": "d1",
        "dealerName": "Maruti True Value Ranchi",
        "location": "Ranchi",
        "price": 554000,
        "discount": 15000,
        "rating": 4.6
      },
      {
        "dealerId": "d5",
        "dealerName": "Tata Motors Ranchi",
        "location": "Ranchi",
        "price": 552000,
        "discount": 20000,
        "rating": 4.5
      }
    ],
    "description": "The Maruti Suzuki Eeco Cargo is India’s leading commercial cargo van, providing massive cargo volume, a reliable petrol/CNG engine, and low maintenance costs.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190,
    "bootSpaceL": 1000
  },
  {
    "id": "c-zsev",
    "slug": "mg-zs-ev-2024",
    "category": "ev",
    "brand": "MG",
    "model": "ZS EV",
    "year": 2024,
    "startingPrice": 1898000,
    "emiFrom": 28470,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/110437/zs-ev-exterior-right-front-three-quarter-70.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/110437/zs-ev-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/110437/zs-ev-exterior-right-rear-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/110437/zs-ev-exterior-rear-view.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/110437/zs-ev-exterior-right-front-three-quarter-70.png?isig=0&q=80",
    "fuelTypes": [
      "Electric"
    ],
    "transmissions": [
      "Automatic"
    ],
    "mileage": "461 km range",
    "seatingCapacity": 5,
    "bootSpaceL": 448,
    "engineCC": 0,
    "powerBHP": 174,
    "torqueNm": 280,
    "safetyRating": 5,
    "rating": 4.5,
    "reviewCount": 320,
    "colors": [
      "Glaze Red",
      "Aurora Silver",
      "Starry Black",
      "Candy White"
    ],
    "features": [
      "10.1-inch Touchscreen",
      "Panoramic Sunroof",
      "Level 2 ADAS Suite",
      "PM 2.5 Filter",
      "360 Degree Camera"
    ],
    "variants": [
      {
        "id": "czsev1",
        "name": "Executive",
        "price": 1898000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "rangeKm": 461,
        "powerBHP": 174
      },
      {
        "id": "czsev2",
        "name": "Exclusive Plus",
        "price": 2398000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "rangeKm": 461,
        "powerBHP": 174
      }
    ],
    "dealerPrices": [],
    "description": "The MG ZS EV is a premium electric SUV combining exceptional range, strong performance, and advanced level-2 ADAS driver assistance features in a stylish design.",
    "pros": [
      "Completely silent, vibration-free cabin environment",
      "Instant electric torque response makes overtaking a breeze",
      "Zero tailpipe emissions and extremely cheap running costs"
    ],
    "cons": [
      "Long road trips require planning around public charging stations",
      "Higher initial investment cost compared to ICE cars",
      "Long-term battery replacement cost is high"
    ],
    "groundClearance": 175
  },
  {
    "id": "c-gloster",
    "slug": "mg-gloster-2024",
    "category": "car",
    "brand": "MG",
    "model": "Gloster",
    "year": 2024,
    "startingPrice": 3880000,
    "emiFrom": 58200,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/129689/gloster-exterior-right-front-three-quarter-5.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/129689/gloster-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/129689/gloster-exterior-right-rear-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/129689/gloster-exterior-rear-view.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/129689/gloster-exterior-right-front-three-quarter-5.png?isig=0&q=80",
    "fuelTypes": [
      "Diesel"
    ],
    "transmissions": [
      "Automatic"
    ],
    "mileage": "12.4 kmpl",
    "seatingCapacity": 7,
    "bootSpaceL": 343,
    "engineCC": 1996,
    "powerBHP": 158,
    "torqueNm": 373,
    "safetyRating": 5,
    "rating": 4.6,
    "reviewCount": 280,
    "colors": [
      "Metal Black",
      "Metal Ash",
      "Warm White",
      "Deep Golden"
    ],
    "features": [
      "12.3-inch Infotainment",
      "ADAS Level 1 Suite",
      "Panoramic Sunroof",
      "Massage Seats",
      "4WD Terrain Selection"
    ],
    "variants": [
      {
        "id": "cglosterv1",
        "name": "Sharp 7 STR 2WD",
        "price": 3880000,
        "fuelType": "Diesel",
        "transmission": "Automatic",
        "engineCC": 1996,
        "powerBHP": 158
      },
      {
        "id": "cglosterv2",
        "name": "Savvy 6 STR 4WD",
        "price": 4386000,
        "fuelType": "Diesel",
        "transmission": "Automatic",
        "engineCC": 1996,
        "powerBHP": 213
      }
    ],
    "dealerPrices": [],
    "description": "The MG Gloster is a massive, premium body-on-frame full-size SUV offering absolute luxury, a highly spacious cabin, advanced ADAS tech, and strong 4WD off-road capabilities.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c-hectorplus",
    "slug": "mg-hector-plus-2024",
    "category": "car",
    "brand": "MG",
    "model": "Hector Plus",
    "year": 2024,
    "startingPrice": 1730000,
    "emiFrom": 25950,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/214253/hector-plus-exterior-right-front-three-quarter.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/214253/hector-plus-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/214253/hector-plus-exterior-right-rear-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/214253/hector-plus-exterior-rear-view-2.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/214253/hector-plus-exterior-right-front-three-quarter.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "Diesel"
    ],
    "transmissions": [
      "Manual",
      "Automatic"
    ],
    "mileage": "15.5 kmpl",
    "seatingCapacity": 7,
    "bootSpaceL": 155,
    "engineCC": 1956,
    "powerBHP": 168,
    "torqueNm": 350,
    "safetyRating": 5,
    "rating": 4.4,
    "reviewCount": 420,
    "colors": [
      "Dune Brown",
      "Havanna Grey",
      "Candy White",
      "Glaze Red",
      "Aurora Silver",
      "Starry Black"
    ],
    "features": [
      "14-inch HD Portrait Screen",
      "Dual-pane Panoramic Sunroof",
      "Level 2 ADAS Suite",
      "i-SMART Next Gen Tech",
      "Ventilated Front Seats"
    ],
    "variants": [
      {
        "id": "chectorplusv1",
        "name": "Smart Pro Petrol MT",
        "price": 1730000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1451,
        "powerBHP": 141
      },
      {
        "id": "chectorplusv2",
        "name": "Savvy Pro Diesel MT",
        "price": 2276000,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 1956,
        "powerBHP": 168
      }
    ],
    "dealerPrices": [],
    "description": "The MG Hector Plus is a highly premium 6/7-seater version of the Hector, featuring a captain seat configuration in the second row, massive 14-inch portrait screen, and a tech-rich cabin.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c_nissan_x_trail",
    "slug": "x-trail",
    "category": "car",
    "brand": "Nissan",
    "model": "X-Trail",
    "year": 2026,
    "startingPrice": 4992000,
    "emiFrom": 74880,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/133165/x-trail-exterior-right-front-three-quarter-28.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/133165/x-trail-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/133165/x-trail-exterior-right-side-view-3.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/133165/x-trail-exterior-right-rear-three-quarter-3.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/133165/x-trail-exterior-right-front-three-quarter-28.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol"
    ],
    "transmissions": [
      "Automatic"
    ],
    "mileage": "13.7 kmpl",
    "isNew": true,
    "seatingCapacity": 7,
    "engineCC": 1498,
    "powerBHP": 161,
    "torqueNm": 300,
    "safetyRating": 4,
    "rating": 4.5,
    "reviewCount": 45,
    "colors": [
      "Champagne Silver",
      "Solid White",
      "Diamond Black",
      "Gun Metallic"
    ],
    "features": [
      "Panoramic Sunroof",
      "12.3-inch Digital Instrument Cluster",
      "360 Degree Camera",
      "Dual Zone Climate Control",
      "ADAS Level 2 Suite"
    ],
    "variants": [
      {
        "id": "c_nissan_x_trailv1",
        "name": "Standard 1.5 Turbo CVT",
        "price": 4992000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1498,
        "powerBHP": 161
      }
    ],
    "dealerPrices": [
      {
        "dealerId": "d1",
        "dealerName": "Maruti True Value Ranchi",
        "location": "Ranchi",
        "price": 5004000,
        "discount": 15000,
        "rating": 4.6
      },
      {
        "dealerId": "d5",
        "dealerName": "Tata Motors Ranchi",
        "location": "Ranchi",
        "price": 5002000,
        "discount": 20000,
        "rating": 4.5
      }
    ],
    "description": "The Nissan X-Trail is a premium 7-seater SUV equipped with a high-tech 1.5-litre variable compression turbo petrol engine, advanced CVT transmission, and a feature-packed luxury cabin.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c-taigun",
    "slug": "volkswagen-taigun-2024",
    "category": "car",
    "brand": "Volkswagen",
    "model": "Taigun",
    "year": 2024,
    "startingPrice": 1170000,
    "emiFrom": 17550,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/207718/taigun-facelift-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/207718/taigun-facelift-exterior-right-side-view-3.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/207718/taigun-facelift-exterior-rear-view-8.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/207718/taigun-facelift-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80",
    "fuelTypes": [
      "Petrol"
    ],
    "transmissions": [
      "Manual",
      "Automatic"
    ],
    "mileage": "19.8 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 385,
    "engineCC": 999,
    "powerBHP": 114,
    "torqueNm": 178,
    "safetyRating": 5,
    "rating": 4.6,
    "reviewCount": 380,
    "colors": [
      "Curcuma Yellow",
      "Wild Cherry Red",
      "Carbon Steel Grey",
      "Reflex Silver",
      "Candy White"
    ],
    "features": [
      "10-inch Touchscreen Infotainment",
      "8-inch Digital Cockpit",
      "Electric Sunroof",
      "Ventilated Front Seats",
      "6 Airbags & ESC"
    ],
    "variants": [
      {
        "id": "ctaigunv1",
        "name": "Comfortline 1.0 TSI MT",
        "price": 1170000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 999,
        "powerBHP": 114
      },
      {
        "id": "ctaigunv2",
        "name": "Topline 1.0 TSI AT",
        "price": 1690000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 999,
        "powerBHP": 114
      }
    ],
    "dealerPrices": [],
    "description": "The Volkswagen Taigun is a premium mid-size SUV that brings solid German engineering, fun-to-drive dynamics, a robust 5-star GNCAP safety rating, and a high-tech cabin layout to India.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c-tiguan",
    "slug": "volkswagen-tiguan-2024",
    "category": "car",
    "brand": "Volkswagen",
    "model": "Tiguan",
    "year": 2024,
    "startingPrice": 3517000,
    "emiFrom": 52755,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/53123/tiguan-exterior-right-front-three-quarter-4.jpeg?q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/53123/tiguan-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/53123/tiguan-exterior-right-rear-three-quarter.jpeg?q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/53123/tiguan-exterior-rear-view.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/53123/tiguan-exterior-right-front-three-quarter-4.jpeg?q=80",
    "fuelTypes": [
      "Petrol"
    ],
    "transmissions": [
      "Automatic"
    ],
    "mileage": "12.6 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 615,
    "engineCC": 1984,
    "powerBHP": 187,
    "torqueNm": 320,
    "safetyRating": 5,
    "rating": 4.7,
    "reviewCount": 190,
    "colors": [
      "Nightshade Blue",
      "Dolphin Grey",
      "Reflex Silver",
      "Deep Black",
      "Oryx White"
    ],
    "features": [
      "4MOTION Active Control 4WD",
      "Panoramic Sunroof",
      "3-Zone Climate Control",
      "Vienna Leather Seats",
      "IQ.Light Matrix LED Headlamps"
    ],
    "variants": [
      {
        "id": "ctiguanv1",
        "name": "Elegance 2.0 TSI DSG 4MOTION",
        "price": 3517000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1984,
        "powerBHP": 187
      }
    ],
    "dealerPrices": [],
    "description": "The Volkswagen Tiguan is a luxury flagship SUV offering premium sophistication, a powerful 2.0-litre TSI engine combined with 7-speed DSG, and Volkswagen's signature 4MOTION all-wheel-drive dynamics.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c-polo",
    "slug": "volkswagen-polo-2024",
    "category": "car",
    "brand": "Volkswagen",
    "model": "Polo",
    "year": 2024,
    "startingPrice": 645000,
    "emiFrom": 9675,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/29628/polo-exterior-right-front-three-quarter-2.jpeg?q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/29628/polo-exterior-right-side-view-2.jpeg?q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/29628/polo-exterior-right-rear-three-quarter-2.jpeg?q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/29628/polo-exterior-rear-view-2.jpeg?q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/29628/polo-exterior-right-front-three-quarter-2.jpeg?q=80",
    "fuelTypes": [
      "Petrol"
    ],
    "transmissions": [
      "Manual",
      "Automatic"
    ],
    "mileage": "17.2 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 280,
    "engineCC": 999,
    "powerBHP": 109,
    "torqueNm": 175,
    "safetyRating": 4,
    "rating": 4.5,
    "reviewCount": 1200,
    "colors": [
      "Flash Red",
      "Sunset Red",
      "Candy White",
      "Carbon Steel Grey",
      "Lapiz Blue"
    ],
    "features": [
      "7-inch Touchscreen Infotainment",
      "Climatronic Automatic AC",
      "Cruise Control",
      "Rain-sensing Wipers",
      "Dual Airbags & ABS"
    ],
    "variants": [
      {
        "id": "cpolov1",
        "name": "Comfortline 1.0 TSI MT",
        "price": 645000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 999,
        "powerBHP": 109
      },
      {
        "id": "cpolov2",
        "name": "GT 1.0 TSI AT",
        "price": 1025000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 999,
        "powerBHP": 109
      }
    ],
    "dealerPrices": [],
    "description": "The Volkswagen Polo is a legendary premium hatchback, celebrated for its rock-solid build quality, timeless European design, and punchy TSI turbocharged engine performance.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c-id4",
    "slug": "volkswagen-id4-2024",
    "category": "ev",
    "brand": "Volkswagen",
    "model": "ID.4",
    "year": 2024,
    "startingPrice": 4500000,
    "emiFrom": 67500,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/138087/id4-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/138087/id4-exterior-left-rear-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/197367/id4-exterior-front-view.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/138087/id4-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    "fuelTypes": [
      "Electric"
    ],
    "transmissions": [
      "Automatic"
    ],
    "mileage": "520 km range",
    "seatingCapacity": 5,
    "bootSpaceL": 543,
    "engineCC": 0,
    "powerBHP": 204,
    "torqueNm": 310,
    "safetyRating": 5,
    "rating": 4.6,
    "reviewCount": 85,
    "colors": [
      "Glacier White Metallic",
      "Mythos Black Metallic",
      "Blue Dusk Metallic",
      "Scale Silver Metallic"
    ],
    "features": [
      "12-inch Discover Pro Touchscreen",
      "ID.Light Communication System",
      "Panoramic Glass Roof",
      "IQ.Drive ADAS Suite",
      "19-inch Alloy Wheels"
    ],
    "variants": [
      {
        "id": "c-id4v1",
        "name": "Pro Performance",
        "price": 4500000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "engineCC": 0,
        "powerBHP": 204,
        "rangeKm": 520
      },
      {
        "id": "c-id4v2",
        "name": "GTX AWD",
        "price": 5500000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "engineCC": 0,
        "powerBHP": 299,
        "rangeKm": 480
      }
    ],
    "dealerPrices": [],
    "description": "The Volkswagen ID.4 is an all-electric SUV bringing German engineering, high-end cabin safety, and smooth electric performance to the premium EV segment.",
    "pros": [
      "Completely silent, vibration-free cabin environment",
      "Instant electric torque response makes overtaking a breeze",
      "Zero tailpipe emissions and extremely cheap running costs"
    ],
    "cons": [
      "Long road trips require planning around public charging stations",
      "Higher initial investment cost compared to ICE cars",
      "Long-term battery replacement cost is high"
    ],
    "groundClearance": 175
  },
  {
    "id": "c-jetta",
    "slug": "volkswagen-jetta-2024",
    "category": "car",
    "brand": "Volkswagen",
    "model": "Jetta",
    "year": 2024,
    "startingPrice": 1478000,
    "emiFrom": 22170,
    "images": [
      "https://imgd.aeplcdn.com/664x374/cw/ec/17725/Volkswagen-Jetta-Right-Front-Three-Quarter-55817.jpg?v=201711021421&q=80",
      "https://imgd.aeplcdn.com/664x374/cw/ec/17725/Volkswagen-Jetta-Right-Rear-Three-Quarter-88435.jpg?v=201711021421&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/cw/ec/17725/Volkswagen-Jetta-Right-Front-Three-Quarter-55817.jpg?v=201711021421&q=80",
    "fuelTypes": [
      "Petrol",
      "Diesel"
    ],
    "transmissions": [
      "Manual",
      "Automatic"
    ],
    "mileage": "19.3 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 510,
    "engineCC": 1968,
    "powerBHP": 138,
    "torqueNm": 320,
    "safetyRating": 5,
    "rating": 4.5,
    "reviewCount": 430,
    "colors": [
      "Candy White",
      "Reflex Silver",
      "Toffee Brown",
      "Deep Black Pearl",
      "Platinum Grey"
    ],
    "features": [
      "Dual Zone Climatronic AC",
      "Touchscreen Audio System",
      "12-Way Powered Driver Seat",
      "8 Airbags",
      "Electronic Stability Control (ESC)"
    ],
    "variants": [
      {
        "id": "cjettav1",
        "name": "Trendline 2.0 TDI MT",
        "price": 1478000,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 1968,
        "powerBHP": 138
      },
      {
        "id": "cjettav2",
        "name": "Highline 2.0 TDI DSG",
        "price": 2017000,
        "fuelType": "Diesel",
        "transmission": "Automatic",
        "engineCC": 1968,
        "powerBHP": 138
      }
    ],
    "dealerPrices": [],
    "description": "The Volkswagen Jetta is a highly acclaimed premium midsize executive sedan, celebrated by driving enthusiasts for its strong TDI diesel engine, smooth DSG gearbox, and impeccable high-speed stability.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c-troc",
    "slug": "volkswagen-t-roc-2024",
    "category": "car",
    "brand": "Volkswagen",
    "model": "T-Roc",
    "year": 2024,
    "startingPrice": 2135000,
    "emiFrom": 32025,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/55747/t-roc-exterior-right-front-three-quarter-3.jpeg?q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/55747/t-roc-exterior-right-side-view.jpeg?q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/55747/t-roc-exterior-right-rear-three-quarter.jpeg?q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/55747/t-roc-exterior-rear-view.jpeg?q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/55747/t-roc-exterior-right-front-three-quarter-3.jpeg?q=80",
    "fuelTypes": [
      "Petrol"
    ],
    "transmissions": [
      "Automatic"
    ],
    "mileage": "17.8 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 445,
    "engineCC": 1498,
    "powerBHP": 148,
    "torqueNm": 250,
    "safetyRating": 5,
    "rating": 4.6,
    "reviewCount": 220,
    "colors": [
      "Curcuma Yellow",
      "Ravenna Blue",
      "Energetic Orange",
      "Flash Red",
      "Indium Grey",
      "Pure White"
    ],
    "features": [
      "Panoramic Sunroof",
      "Active Info Digital Cockpit",
      "Dual Zone Control",
      "LED Headlamps & DRLs",
      "Electronic Stability Control"
    ],
    "variants": [
      {
        "id": "ctrocv1",
        "name": "Standard 1.5 TSI DSG",
        "price": 2135000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1498,
        "powerBHP": 148
      }
    ],
    "dealerPrices": [],
    "description": "The Volkswagen T-Roc is a stylish, fully imported compact crossover SUV featuring a striking dual-tone paint job, premium cabin features, and a powerful, efficient 1.5L TSI Evo engine.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c-passat",
    "slug": "volkswagen-passat-2024",
    "category": "car",
    "brand": "Volkswagen",
    "model": "Passat",
    "year": 2024,
    "startingPrice": 2999000,
    "emiFrom": 44985,
    "images": [
      "https://imgd.aeplcdn.com/664x374/cw/ec/23206/Volkswagen-Passat-GTE-Left-Front-Three-Quarter-72042.jpg?v=201711021421&wm=1&q=80",
      "https://imgd.aeplcdn.com/664x374/cw/ec/23206/Volkswagen-Passat-GTE-left-rear-three-quarter-72040.jpg?v=201711021421&wm=1&q=80",
      "https://imgd.aeplcdn.com/664x374/cw/ec/23206/Volkswagen-Passat-GTE-Left-Side-View-72043.jpg?v=201711021421&wm=1&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/cw/ec/23206/Volkswagen-Passat-GTE-Left-Front-Three-Quarter-72042.jpg?v=201711021421&wm=1&q=80",
    "fuelTypes": [
      "Petrol",
      "Diesel"
    ],
    "transmissions": [
      "Automatic"
    ],
    "mileage": "17.4 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 586,
    "engineCC": 1968,
    "powerBHP": 174,
    "torqueNm": 350,
    "safetyRating": 5,
    "rating": 4.7,
    "reviewCount": 160,
    "colors": [
      "Deep Black Pearl",
      "Pyrite Silver Metallic",
      "Mangano Grey Metallic",
      "Oryx White",
      "Atlantic Blue"
    ],
    "features": [
      "Nappa Leather Upholstery",
      "Dynamic Chassis Control (DCC)",
      "Hands-free Tailgate Open",
      "Park Assist with 360 Camera",
      "9 Airbags"
    ],
    "variants": [
      {
        "id": "cpassatv1",
        "name": "Highline 2.0 TDI DSG",
        "price": 2999000,
        "fuelType": "Diesel",
        "transmission": "Automatic",
        "engineCC": 1968,
        "powerBHP": 174
      }
    ],
    "dealerPrices": [],
    "description": "The Volkswagen Passat is a flagship executive luxury sedan offering peerless rear-seat legroom, premium dynamic chassis control, Nappa leather luxury, and business-class highway cruising comfort.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c_byd_atto_3",
    "slug": "atto-3",
    "category": "ev",
    "brand": "BYD",
    "model": "Atto 3",
    "year": 2024,
    "startingPrice": 2499000,
    "emiFrom": 37485,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/130183/atto-3-exterior-right-front-three-quarter-105.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/130183/atto-3-exterior-right-side-view-2.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/130183/atto-3-exterior-right-front-three-quarter-105.png?isig=0&q=80",
    "fuelTypes": [
      "Electric"
    ],
    "transmissions": [
      "Automatic"
    ],
    "mileage": "521 km range",
    "seatingCapacity": 5,
    "bootSpaceL": 440,
    "engineCC": 0,
    "powerBHP": 201,
    "torqueNm": 310,
    "safetyRating": 5,
    "rating": 4.6,
    "reviewCount": 150,
    "colors": [
      "Boulder Grey",
      "Parkour Red",
      "Ski White",
      "Surf Blue",
      "Cosmos Black"
    ],
    "features": [
      "12.8-inch Rotating Touchscreen",
      "Panoramic Sunroof",
      "NFC Card Key",
      "ADAS Level 2 Suite",
      "360 Degree Camera"
    ],
    "variants": [
      {
        "id": "cbydatto3v1",
        "name": "Dynamic",
        "price": 2499000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "rangeKm": 468,
        "powerBHP": 201
      },
      {
        "id": "cbydatto3v2",
        "name": "Superior",
        "price": 3399000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "rangeKm": 521,
        "powerBHP": 201
      }
    ],
    "dealerPrices": [],
    "description": "The BYD Atto 3 is a premium electric SUV featuring a quirky muscle-styled interior, outstanding range from BYD's proprietary Blade Battery, and a 5-star Euro NCAP safety rating.",
    "pros": [
      "Completely silent, vibration-free cabin environment",
      "Instant electric torque response makes overtaking a breeze",
      "Zero tailpipe emissions and extremely cheap running costs"
    ],
    "cons": [
      "Long road trips require planning around public charging stations",
      "Higher initial investment cost compared to ICE cars",
      "Long-term battery replacement cost is high"
    ],
    "groundClearance": 175
  },
  {
    "id": "c_byd_seal",
    "slug": "byd-seal",
    "category": "ev",
    "brand": "BYD",
    "model": "Seal",
    "year": 2024,
    "startingPrice": 4100000,
    "emiFrom": 61500,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/139619/seal-exterior-right-front-three-quarter-10.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/139619/seal-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/139619/seal-exterior-right-rear-three-quarter.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/139619/seal-exterior-rear-view.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/139619/seal-exterior-right-front-three-quarter-10.png?isig=0&q=80",
    "fuelTypes": [
      "Electric"
    ],
    "transmissions": [
      "Automatic"
    ],
    "mileage": "650 km range",
    "seatingCapacity": 5,
    "bootSpaceL": 400,
    "engineCC": 0,
    "powerBHP": 308,
    "torqueNm": 360,
    "safetyRating": 5,
    "rating": 4.8,
    "reviewCount": 98,
    "colors": [
      "Aurora White",
      "Cosmos Black",
      "Atlantis Grey",
      "Rosmarinus Green"
    ],
    "features": [
      "15.6-inch Rotating Screen",
      "Dynaudio 12-Speaker System",
      "Ventilated & Heated Seats",
      "Head-Up Display",
      "Cell-to-Body (CTB) Structure"
    ],
    "variants": [
      {
        "id": "c_byd_sealv1",
        "name": "Dynamic RWD",
        "price": 4100000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "engineCC": 0,
        "powerBHP": 201,
        "rangeKm": 510
      },
      {
        "id": "c_byd_sealv2",
        "name": "Premium RWD",
        "price": 4555000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "engineCC": 0,
        "powerBHP": 308,
        "rangeKm": 650
      },
      {
        "id": "c_byd_sealv3",
        "name": "Performance AWD",
        "price": 5300000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "engineCC": 0,
        "powerBHP": 523,
        "rangeKm": 580
      }
    ],
    "dealerPrices": [],
    "description": "The BYD Seal is a luxury electric sedan featuring a sleek drag-coefficient design, punchy acceleration, and Cell-to-Body (CTB) battery integration.",
    "pros": [
      "Completely silent, vibration-free cabin environment",
      "Instant electric torque response makes overtaking a breeze",
      "Zero tailpipe emissions and extremely cheap running costs"
    ],
    "cons": [
      "Long road trips require planning around public charging stations",
      "Higher initial investment cost compared to ICE cars",
      "Long-term battery replacement cost is high"
    ],
    "groundClearance": 175
  },
  {
    "id": "c_tata_harrier",
    "slug": "harrier",
    "category": "car",
    "brand": "Tata",
    "model": "Harrier",
    "year": 2024,
    "startingPrice": 1549000,
    "emiFrom": 23235,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/139139/harrier-exterior-right-front-three-quarter-7.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/139139/harrier-facelift-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/139139/harrier-facelift-exterior-rear-view-17.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/139139/harrier-exterior-right-front-three-quarter-7.png?isig=0&q=80",
    "fuelTypes": [
      "Diesel"
    ],
    "transmissions": [
      "Manual",
      "Automatic"
    ],
    "mileage": "16.8 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 445,
    "engineCC": 1956,
    "powerBHP": 168,
    "torqueNm": 350,
    "safetyRating": 5,
    "rating": 4.7,
    "reviewCount": 320,
    "colors": [
      "Sunlit Yellow",
      "Coral Red",
      "Pebble Grey",
      "Lunar White",
      "Oberon Black"
    ],
    "features": [
      "12.3-inch Touchscreen Infotainment",
      "Level 2 ADAS Suite",
      "Panoramic Sunroof",
      "Ventilated Front Seats",
      "Gesture Controlled Power Tailgate"
    ],
    "variants": [
      {
        "id": "ctataharrierv1",
        "name": "Smart MT",
        "price": 1549000,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 1956,
        "powerBHP": 168
      },
      {
        "id": "ctataharrierv2",
        "name": "Fearless + Dark Edition AT",
        "price": 2449000,
        "fuelType": "Diesel",
        "transmission": "Automatic",
        "engineCC": 1956,
        "powerBHP": 168
      }
    ],
    "dealerPrices": [],
    "description": "The Tata Harrier is a premium mid-size SUV combining bold styling, robust Land Rover-derived OMEGAArc platform engineering, exceptional safety ratings, and dynamic road presence.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 205
  },
  {
    "id": "c_tata_nexon_ice",
    "slug": "nexon-ice",
    "category": "car",
    "brand": "Tata",
    "model": "Nexon",
    "year": 2024,
    "startingPrice": 800000,
    "emiFrom": 12000,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-79.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/141867/nexon-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/141867/nexon-facelift-exterior-rear-view.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-79.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "Diesel"
    ],
    "transmissions": [
      "Manual",
      "Automatic"
    ],
    "mileage": "17.44 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 382,
    "engineCC": 1199,
    "powerBHP": 118,
    "torqueNm": 170,
    "safetyRating": 5,
    "rating": 4.6,
    "reviewCount": 780,
    "colors": [
      "Fearless Purple",
      "Creative Ocean",
      "Pure Grey",
      "Flame Red",
      "Pristine White"
    ],
    "features": [
      "10.25-inch Touchscreen Infotainment",
      "360 Degree Camera",
      "Sequential LED DRLs",
      "Voice Assisted Sunroof",
      "Ventilated Front Seats"
    ],
    "variants": [
      {
        "id": "c_tata_nexon_icev1",
        "name": "Smart Petrol MT",
        "price": 800000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1199,
        "powerBHP": 118,
        "mileageKmpl": 17.4
      },
      {
        "id": "c_tata_nexon_icev2",
        "name": "Pure Petrol MT",
        "price": 970000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1199,
        "powerBHP": 118,
        "mileageKmpl": 17.4
      },
      {
        "id": "c_tata_nexon_icev3",
        "name": "Creative Petrol DCA",
        "price": 1220000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1199,
        "powerBHP": 118,
        "mileageKmpl": 17
      },
      {
        "id": "c_tata_nexon_icev4",
        "name": "Fearless Diesel AMT",
        "price": 1440000,
        "fuelType": "Diesel",
        "transmission": "Automatic",
        "engineCC": 1497,
        "powerBHP": 113,
        "mileageKmpl": 23.2
      }
    ],
    "dealerPrices": [],
    "description": "The Tata Nexon is one of India’s most popular sub-compact SUVs, renowned for its 5-star GNCAP safety rating, high ground clearance, and futuristic design.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 208
  },
  {
    "id": "c_tata_curvv_ev",
    "slug": "curvv-ev",
    "category": "ev",
    "brand": "Tata",
    "model": "Curvv EV",
    "year": 2024,
    "startingPrice": 1749000,
    "emiFrom": 26235,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/115617/curvv-ev-exterior-right-front-three-quarter-8.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/115617/curvv-ev-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/115617/curvv-ev-exterior-left-front-three-quarter-34.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/115617/curvv-ev-exterior-right-front-three-quarter-8.png?isig=0&q=80",
    "fuelTypes": [
      "Electric"
    ],
    "transmissions": [
      "Automatic"
    ],
    "mileage": "585 km range",
    "seatingCapacity": 5,
    "bootSpaceL": 500,
    "engineCC": 0,
    "powerBHP": 165,
    "torqueNm": 215,
    "safetyRating": 5,
    "rating": 4.7,
    "reviewCount": 120,
    "colors": [
      "Virtual Bronze",
      "Flame Red",
      "Empowered Oxide",
      "Pristine White",
      "Pure Grey"
    ],
    "features": [
      "Aero Coupe Design",
      "12.3-inch Harman Touchscreen",
      "Panoramic Sunroof",
      "Level 2 ADAS",
      "Frunk & Powered Tailgate"
    ],
    "variants": [
      {
        "id": "ctatacurvvevv1",
        "name": "Creative 45",
        "price": 1749000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "rangeKm": 502,
        "powerBHP": 148
      },
      {
        "id": "ctatacurvvevv2",
        "name": "Empowered + A 55",
        "price": 2199000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "rangeKm": 585,
        "powerBHP": 165
      }
    ],
    "dealerPrices": [],
    "description": "The Tata Curvv EV is a pioneering electric Coupe SUV featuring a stunning slope-back roof profile, premium features, dynamic electric driving performance, and advanced safety.",
    "pros": [
      "Completely silent, vibration-free cabin environment",
      "Instant electric torque response makes overtaking a breeze",
      "Zero tailpipe emissions and extremely cheap running costs"
    ],
    "cons": [
      "Long road trips require planning around public charging stations",
      "Higher initial investment cost compared to ICE cars",
      "Long-term battery replacement cost is high"
    ],
    "groundClearance": 175
  },
  {
    "id": "c_tata_tigor_ev",
    "slug": "tigor-ev",
    "category": "ev",
    "brand": "Tata",
    "model": "Tigor EV",
    "year": 2024,
    "startingPrice": 1249000,
    "emiFrom": 18735,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/135723/tigor-ev-exterior-right-front-three-quarter-4.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/135723/tigor-ev-exterior-left-side-view.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/135723/tigor-ev-exterior-right-front-three-quarter-4.png?isig=0&q=80",
    "fuelTypes": [
      "Electric"
    ],
    "transmissions": [
      "Automatic"
    ],
    "mileage": "315 km range",
    "seatingCapacity": 5,
    "bootSpaceL": 316,
    "engineCC": 0,
    "powerBHP": 74,
    "torqueNm": 170,
    "safetyRating": 4,
    "rating": 4.4,
    "reviewCount": 210,
    "colors": [
      "Signature Teal Blue",
      "Daytona Grey",
      "Pristine White"
    ],
    "features": [
      "7-inch Harman Touchscreen",
      "Ziptron High Voltage Tech",
      "Automatic Climate Control",
      "Dual Airbags",
      "Rear Parking Camera"
    ],
    "variants": [
      {
        "id": "ctatatigorevv1",
        "name": "XE",
        "price": 1249000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "rangeKm": 315,
        "powerBHP": 74
      },
      {
        "id": "ctatatigorevv2",
        "name": "XZ+ Lux",
        "price": 1375000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "rangeKm": 315,
        "powerBHP": 74
      }
    ],
    "dealerPrices": [],
    "description": "The Tata Tigor EV is a highly sensible, practical electric compact sedan powered by Tata's proven Ziptron high-voltage electric platform, making it a perfect eco-friendly city car.",
    "pros": [
      "Completely silent, vibration-free cabin environment",
      "Instant electric torque response makes overtaking a breeze",
      "Zero tailpipe emissions and extremely cheap running costs"
    ],
    "cons": [
      "Long road trips require planning around public charging stations",
      "Higher initial investment cost compared to ICE cars",
      "Long-term battery replacement cost is high"
    ],
    "groundClearance": 165
  },
  {
    "id": "c_hyundai_tucson",
    "slug": "tucson",
    "category": "car",
    "brand": "Hyundai",
    "model": "Tucson",
    "year": 2024,
    "startingPrice": 2902000,
    "emiFrom": 43530,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/106821/tucson-exterior-right-front-three-quarter-8.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/106821/tucson-exterior-right-side-view.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/106821/tucson-exterior-rear-view.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/106821/tucson-exterior-right-front-three-quarter-8.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "Diesel"
    ],
    "transmissions": [
      "Automatic"
    ],
    "mileage": "18.0 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 540,
    "engineCC": 1999,
    "powerBHP": 154,
    "torqueNm": 192,
    "safetyRating": 5,
    "rating": 4.6,
    "reviewCount": 140,
    "colors": [
      "Polar White",
      "Phantom Black",
      "Fiery Red",
      "Typhoon Silver",
      "Starry Night"
    ],
    "features": [
      "10.25-inch Dual Screens",
      "Level 2 ADAS Suite",
      "Panoramic Sunroof",
      "Dual Zone Climate Control",
      "Premium 8-Speaker Bose Sound"
    ],
    "variants": [
      {
        "id": "chyundaitucsonv1",
        "name": "Platinum 2.0 Petrol AT",
        "price": 2902000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1999,
        "powerBHP": 154
      },
      {
        "id": "chyundaitucsonv2",
        "name": "Signature 2.0 Diesel AT AWD",
        "price": 3594000,
        "fuelType": "Diesel",
        "transmission": "Automatic",
        "engineCC": 1997,
        "powerBHP": 184
      }
    ],
    "dealerPrices": [],
    "description": "The Hyundai Tucson is a highly sophisticated luxury premium SUV offering futuristic design, dynamic ADAS driving safety features, and executive cabin luxury.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c_hyundai_ioniq_5",
    "slug": "ioniq-5",
    "category": "ev",
    "brand": "Hyundai",
    "model": "Ioniq 5",
    "year": 2024,
    "startingPrice": 4605000,
    "emiFrom": 69075,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/201627/ioniq-5-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/201627/ioniq-5-exterior-right-side-view-28.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/201627/ioniq-5-exterior-rear-view.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/201627/ioniq-5-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
    "fuelTypes": [
      "Electric"
    ],
    "transmissions": [
      "Automatic"
    ],
    "mileage": "631 km range",
    "seatingCapacity": 5,
    "bootSpaceL": 527,
    "engineCC": 0,
    "powerBHP": 215,
    "torqueNm": 350,
    "safetyRating": 5,
    "rating": 4.8,
    "reviewCount": 92,
    "colors": [
      "Gravity Gold Matte",
      "Optic White",
      "Midnight Black Pearl"
    ],
    "features": [
      "800V Ultra-Fast Charging",
      "V2L (Vehicle-to-Load) Power Source",
      "Dual 12.3-inch Curved Screens",
      "Vision Roof",
      "Smart ADAS Level 2"
    ],
    "variants": [
      {
        "id": "chyundaiioniq5v1",
        "name": "RWD",
        "price": 4605000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "rangeKm": 631,
        "powerBHP": 215
      }
    ],
    "dealerPrices": [],
    "description": "The Hyundai Ioniq 5 is a stunning flagship electric crossover styled with retro-futuristic pixel-art aesthetics, high-speed 800V architecture, and eco-friendly cabin materials.",
    "pros": [
      "Completely silent, vibration-free cabin environment",
      "Instant electric torque response makes overtaking a breeze",
      "Zero tailpipe emissions and extremely cheap running costs"
    ],
    "cons": [
      "Long road trips require planning around public charging stations",
      "Higher initial investment cost compared to ICE cars",
      "Long-term battery replacement cost is high"
    ],
    "groundClearance": 175
  },
  {
    "id": "c_hyundai_grand_i10_nios",
    "slug": "grand-i10-nios",
    "category": "car",
    "brand": "Hyundai",
    "model": "Grand i10 Nios",
    "year": 2024,
    "startingPrice": 592000,
    "emiFrom": 8880,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/136183/grand-i10-nios-exterior-right-front-three-quarter-17.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/136183/grand-i10-nios-exterior-right-side-view-7.jpeg?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/136183/grand-i10-nios-exterior-rear-view.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/136183/grand-i10-nios-exterior-right-front-three-quarter-17.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol",
      "CNG"
    ],
    "transmissions": [
      "Manual",
      "Automatic"
    ],
    "mileage": "20.7 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 260,
    "engineCC": 1197,
    "powerBHP": 82,
    "torqueNm": 114,
    "safetyRating": 3,
    "rating": 4.5,
    "reviewCount": 540,
    "colors": [
      "Spark Green",
      "Fiery Red",
      "Typhoon Silver",
      "Atlas White",
      "Titan Grey",
      "Aqua Teal"
    ],
    "features": [
      "8-inch Touchscreen Infotainment",
      "Wireless Smartphone Charger",
      "Automatic AC with Rear Vents",
      "Type-C USB Charger",
      "6 Airbags Standard"
    ],
    "variants": [
      {
        "id": "chyundaigrandi10niosv1",
        "name": "Era 1.2 Kappa MT",
        "price": 592000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1197,
        "powerBHP": 82
      },
      {
        "id": "chyundaigrandi10niosv2",
        "name": "Asta 1.2 Kappa AMT",
        "price": 856000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1197,
        "powerBHP": 82
      }
    ],
    "dealerPrices": [],
    "description": "The Hyundai Grand i10 Nios is a smart, trendy, and highly feature-packed city hatchback that offers premium comfort, refined engines, and smooth driving manners.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c_jeep_wrangler",
    "slug": "jeep-wrangler",
    "category": "car",
    "brand": "Jeep",
    "model": "Wrangler",
    "year": 2024,
    "startingPrice": 6765000,
    "emiFrom": 101475,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/174975/wrangler-exterior-right-front-three-quarter-34.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/174975/wrangler-exterior-right-side-view-6.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/174975/wrangler-exterior-right-front-three-quarter-34.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol"
    ],
    "transmissions": [
      "Automatic"
    ],
    "mileage": "10.6 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 533,
    "engineCC": 1995,
    "powerBHP": 268,
    "torqueNm": 400,
    "safetyRating": 4,
    "rating": 4.7,
    "reviewCount": 65,
    "colors": [
      "Firecracker Red",
      "Sarge Green",
      "Bright White",
      "Black",
      "Granite Crystal"
    ],
    "features": [
      "Removable Doors & Roof",
      "12.3-inch Touchscreen Uconnect 5",
      "Heavy-Duty Dana 44 Axles",
      "Tru-Lok Differentials",
      "Alpine 9-Speaker Audio"
    ],
    "variants": [
      {
        "id": "cjeepwranglerv1",
        "name": "Unlimited",
        "price": 6765000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1995,
        "powerBHP": 268
      },
      {
        "id": "cjeepwranglerv2",
        "name": "Rubicon",
        "price": 7165000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1995,
        "powerBHP": 268
      }
    ],
    "dealerPrices": [],
    "description": "The Jeep Wrangler is the ultimate legendary go-anywhere 4x4 off-road SUV featuring removable doors and roof, robust mechanical locking differentials, and modern cabin tech.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c_jeep_meridian",
    "slug": "jeep-meridian",
    "category": "car",
    "brand": "Jeep",
    "model": "Meridian",
    "year": 2024,
    "startingPrice": 3120000,
    "emiFrom": 46800,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/47139/meridian-exterior-right-front-three-quarter-18.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/47139/meridian-exterior-right-rear-three-quarter-2.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/47139/meridian-exterior-right-front-three-quarter-18.png?isig=0&q=80",
    "fuelTypes": [
      "Diesel"
    ],
    "transmissions": [
      "Manual",
      "Automatic"
    ],
    "mileage": "16.2 kmpl",
    "seatingCapacity": 7,
    "bootSpaceL": 170,
    "engineCC": 1956,
    "powerBHP": 168,
    "torqueNm": 350,
    "safetyRating": 5,
    "rating": 4.5,
    "reviewCount": 110,
    "colors": [
      "Techno Metallic Green",
      "Brilliant Black",
      "Grigio Magnesio",
      "Pearl White",
      "Velvet Red"
    ],
    "features": [
      "10.1-inch Uconnect Infotainment",
      "9-Speaker Alpine System",
      "Panoramic Sunroof",
      "360 Degree Camera",
      "Dual-Zone Climate Control"
    ],
    "variants": [
      {
        "id": "cjeepmeridianv1",
        "name": "Limited (O) MT",
        "price": 3120000,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 1956,
        "powerBHP": 168
      },
      {
        "id": "cjeepmeridianv2",
        "name": "Limited (O) 9AT 4x4",
        "price": 3715000,
        "fuelType": "Diesel",
        "transmission": "Automatic",
        "engineCC": 1956,
        "powerBHP": 168
      }
    ],
    "dealerPrices": [],
    "description": "The Jeep Meridian is a premium 3-row 7-seater SUV designed with signature Jeep styling, authentic off-road capability, and a highly upscale leather-clad cabin.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c_porsche_911",
    "slug": "porsche-911",
    "category": "car",
    "brand": "Porsche",
    "model": "911",
    "year": 2024,
    "startingPrice": 19890000,
    "emiFrom": 298350,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/39232/911-exterior-right-front-three-quarter-154385.png?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/39232/911-exterior-right-front-three-quarter-154385.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol"
    ],
    "transmissions": [
      "Automatic"
    ],
    "mileage": "11.1 kmpl",
    "seatingCapacity": 4,
    "bootSpaceL": 132,
    "engineCC": 2981,
    "powerBHP": 443,
    "torqueNm": 530,
    "safetyRating": 5,
    "rating": 4.9,
    "reviewCount": 45,
    "colors": [
      "Guards Red",
      "Racing Yellow",
      "Carrera White",
      "Jet Black Metallic",
      "GT Silver Metallic"
    ],
    "features": [
      "Rear Engine Rear Wheel Drive",
      "Porsche Active Suspension Management",
      "Sport Chrono Package",
      "10.9-inch PCM Touchscreen",
      "Bose Surround Sound System"
    ],
    "variants": [
      {
        "id": "c_porsche_911v1",
        "name": "Carrera",
        "price": 19890000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 2981,
        "powerBHP": 380,
        "mileageKmpl": 11.1
      },
      {
        "id": "c_porsche_911v2",
        "name": "Carrera S",
        "price": 22400000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 2981,
        "powerBHP": 443,
        "mileageKmpl": 10.5
      },
      {
        "id": "c_porsche_911v3",
        "name": "Turbo S",
        "price": 33500000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 3745,
        "powerBHP": 641,
        "mileageKmpl": 9
      }
    ],
    "dealerPrices": [],
    "description": "The Porsche 911 is the quintessential high-performance sports car, offering unmatched rear-engine driving dynamics, everyday usability, and timeless design.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 100
  },
  {
    "id": "c_porsche_taycan",
    "slug": "porsche-taycan",
    "category": "ev",
    "brand": "Porsche",
    "model": "Taycan",
    "year": 2024,
    "startingPrice": 16090000,
    "emiFrom": 241350,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45063/taycan-exterior-right-front-three-quarter-6.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/45063/taycan-exterior-left-front-three-quarter.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/45063/taycan-exterior-right-front-three-quarter-6.png?isig=0&q=80",
    "fuelTypes": [
      "Electric"
    ],
    "transmissions": [
      "Automatic"
    ],
    "mileage": "444 km range",
    "seatingCapacity": 4,
    "bootSpaceL": 407,
    "engineCC": 0,
    "powerBHP": 522,
    "torqueNm": 640,
    "safetyRating": 5,
    "rating": 4.8,
    "reviewCount": 30,
    "colors": [
      "Frozen Blue Metallic",
      "Mamba Green Metallic",
      "Dolomite Silver Metallic",
      "Carrera White Metallic"
    ],
    "features": [
      "800V Architecture",
      "Porsche Advanced Cockpit with Curved Display",
      "Launch Control with Overboost",
      "2-Speed Transmission on Rear Axle",
      "Adaptive Air Suspension"
    ],
    "variants": [
      {
        "id": "c_porsche_taycanv1",
        "name": "Base Taycan",
        "price": 16090000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "engineCC": 0,
        "powerBHP": 322,
        "rangeKm": 444
      },
      {
        "id": "c_porsche_taycanv2",
        "name": "Taycan 4S",
        "price": 17500000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "engineCC": 0,
        "powerBHP": 522,
        "rangeKm": 463
      },
      {
        "id": "c_porsche_taycanv3",
        "name": "Taycan Turbo S",
        "price": 24400000,
        "fuelType": "Electric",
        "transmission": "Automatic",
        "engineCC": 0,
        "powerBHP": 750,
        "rangeKm": 412
      }
    ],
    "dealerPrices": [],
    "description": "The Porsche Taycan is a high-performance all-electric luxury sedan combining Porsche’s sports car DNA with silent, high-efficiency battery power.",
    "pros": [
      "Completely silent, vibration-free cabin environment",
      "Instant electric torque response makes overtaking a breeze",
      "Zero tailpipe emissions and extremely cheap running costs"
    ],
    "cons": [
      "Long road trips require planning around public charging stations",
      "Higher initial investment cost compared to ICE cars",
      "Long-term battery replacement cost is high"
    ],
    "groundClearance": 127
  },
  {
    "id": "c_mini_countryman",
    "slug": "mini-countryman",
    "category": "car",
    "brand": "Mini",
    "model": "Countryman",
    "year": 2024,
    "startingPrice": 4810000,
    "emiFrom": 72150,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/34290/countryman-exterior-right-front-three-quarter-49.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/34290/countryman-exterior-right-side-view.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/34290/countryman-exterior-right-front-three-quarter-49.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol"
    ],
    "transmissions": [
      "Automatic"
    ],
    "mileage": "14.3 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 450,
    "engineCC": 1998,
    "powerBHP": 189,
    "torqueNm": 280,
    "safetyRating": 5,
    "rating": 4.6,
    "reviewCount": 50,
    "colors": [
      "British Racing Green",
      "Island Blue",
      "Chili Red",
      "Midnight Black",
      "Sage Green"
    ],
    "features": [
      "8.8-inch Touchscreen with Navigation",
      "Harman Kardon Sound",
      "Panoramic Glass Sunroof",
      "Hands-free Tailgate",
      "Leather Chester Seats"
    ],
    "variants": [
      {
        "id": "cminicountrymanv1",
        "name": "Cooper S JCW Inspired",
        "price": 4810000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1998,
        "powerBHP": 189
      }
    ],
    "dealerPrices": [],
    "description": "The Mini Countryman is a larger, more adventurous crossover Mini offering outstanding family utility, high seating position, and classic go-kart handling.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c_nissan_kicks",
    "slug": "nissan-kicks",
    "category": "car",
    "brand": "Nissan",
    "model": "Kicks",
    "year": 2023,
    "startingPrice": 950000,
    "emiFrom": 14250,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/32596/kicks-exterior-right-side-view.jpeg?q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/32596/kicks-exterior-right-rear-three-quarter.jpeg?q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/32596/kicks-exterior-right-side-view.jpeg?q=80",
    "fuelTypes": [
      "Petrol"
    ],
    "transmissions": [
      "Manual",
      "Automatic"
    ],
    "mileage": "14.2 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 400,
    "engineCC": 1330,
    "powerBHP": 154,
    "torqueNm": 254,
    "safetyRating": 4,
    "rating": 4.3,
    "reviewCount": 160,
    "colors": [
      "Pearl White",
      "Blade Silver",
      "Bronze Grey",
      "Fire Red",
      "Deep Blue Pearl"
    ],
    "features": [
      "8-inch Touchscreen Infotainment",
      "360-degree Around View Monitor",
      "Automatic AC",
      "Hill Start Assist",
      "NissanConnect Connectivity"
    ],
    "variants": [
      {
        "id": "cnissankicksv1",
        "name": "XL 1.5",
        "price": 950000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1498,
        "powerBHP": 105
      },
      {
        "id": "cnissankicksv2",
        "name": "XV Premium 1.3 Turbo CVT",
        "price": 1490000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1330,
        "powerBHP": 154
      }
    ],
    "dealerPrices": [],
    "description": "The Nissan Kicks is a spacious, robust compact crossover powered by a high-torque 1.3L Turbo Petrol engine and features excellent ground clearance.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c_renault_kwid",
    "slug": "renault-kwid",
    "category": "car",
    "brand": "Renault",
    "model": "Kwid",
    "year": 2024,
    "startingPrice": 470000,
    "emiFrom": 7050,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/141125/kwid-exterior-right-front-three-quarter-38.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/141125/kwid-exterior-right-side-view-2.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/141125/kwid-exterior-right-front-three-quarter-38.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol"
    ],
    "transmissions": [
      "Manual",
      "Automatic"
    ],
    "mileage": "21.4 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 279,
    "engineCC": 999,
    "powerBHP": 67,
    "torqueNm": 91,
    "safetyRating": 2,
    "rating": 4.4,
    "reviewCount": 680,
    "colors": [
      "Outback Bronze",
      "Fiery Red",
      "Ice Cool White",
      "Moonlight Silver",
      "Zanskar Blue"
    ],
    "features": [
      "8-inch Touchscreen Infotainment",
      "Reverse Parking Camera",
      "Fully Digital Instrument Cluster",
      "Android Auto & Apple CarPlay",
      "ESP & Traction Control"
    ],
    "variants": [
      {
        "id": "crenaultkwidv1",
        "name": "RXE 1.0L",
        "price": 470000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 999,
        "powerBHP": 67
      },
      {
        "id": "crenaultkwidv2",
        "name": "Climber 1.0L AMT",
        "price": 612500,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 999,
        "powerBHP": 67
      }
    ],
    "dealerPrices": [],
    "description": "The Renault Kwid is a highly stylish entry-level micro-SUV styled hatchback offering SUV-inspired ground clearance, outstanding mileage, and modern features.",
    "pros": [
      "Compact dimensions make it very easy to drive and park in city traffic",
      "Outstanding fuel economy keeps running costs low",
      "Widespread service support and highly affordable parts"
    ],
    "cons": [
      "Limited luggage boot space for weekend family trips",
      "Cabin is not well insulated from engine and tyre noise at highway speeds",
      "Suspension feels slightly basic over large road potholes"
    ],
    "groundClearance": 165
  },
  {
    "id": "c_renault_duster",
    "slug": "renault-duster",
    "category": "car",
    "brand": "Renault",
    "model": "Duster",
    "year": 2022,
    "startingPrice": 986000,
    "emiFrom": 14790,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/163801/duster-exterior-right-front-three-quarter-12.png?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/163801/duster-exterior-right-front-three-quarter-12.png?isig=0&q=80",
    "fuelTypes": [
      "Petrol"
    ],
    "transmissions": [
      "Manual",
      "Automatic"
    ],
    "mileage": "16.4 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 475,
    "engineCC": 1330,
    "powerBHP": 154,
    "torqueNm": 254,
    "safetyRating": 3,
    "rating": 4.6,
    "reviewCount": 920,
    "colors": [
      "Caspian Blue",
      "Mahogany Brown",
      "Cayenne Orange",
      "Moonlight Silver",
      "Slate Grey"
    ],
    "features": [
      "7-inch Touchscreen MediaNAV",
      "Automatic Climate Control",
      "Projector Headlamps with DRLs",
      "Cruise Control",
      "17-inch Diamond Cut Alloy Wheels"
    ],
    "variants": [
      {
        "id": "crenaultdusterv1",
        "name": "RXS 1.5",
        "price": 986000,
        "fuelType": "Petrol",
        "transmission": "Manual",
        "engineCC": 1498,
        "powerBHP": 105
      },
      {
        "id": "crenaultdusterv2",
        "name": "RXZ 1.3 Turbo CVT",
        "price": 1425000,
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "engineCC": 1330,
        "powerBHP": 154
      }
    ],
    "dealerPrices": [],
    "description": "The Renault Duster is the legendary midsize SUV that pioneered the modern compact SUV segment in India, praised for its exceptional ride quality and highway stability.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c_toyota_hilux",
    "slug": "toyota-hilux",
    "category": "car",
    "brand": "Toyota",
    "model": "Hilux",
    "year": 2024,
    "startingPrice": 3040000,
    "emiFrom": 45600,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/109265/hilux-exterior-right-front-three-quarter-44.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/109265/hilux-exterior-left-side-view-3.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/109265/hilux-exterior-right-front-three-quarter-44.png?isig=0&q=80",
    "fuelTypes": [
      "Diesel"
    ],
    "transmissions": [
      "Manual",
      "Automatic"
    ],
    "mileage": "12.6 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 435,
    "engineCC": 2755,
    "powerBHP": 201,
    "torqueNm": 500,
    "safetyRating": 5,
    "rating": 4.7,
    "reviewCount": 85,
    "colors": [
      "Emotional Red",
      "Gray Metallic",
      "Silver Metallic",
      "Super White",
      "White Pearl Crystal Shine"
    ],
    "features": [
      "4WD with High & Low Range",
      "Active Traction Control (A-TRC)",
      "Electronic Differential Lock",
      "8-inch Infotainment with Apple CarPlay",
      "7 Airbags"
    ],
    "variants": [
      {
        "id": "ctoyotahiluxv1",
        "name": "Std MT 4x4",
        "price": 3040000,
        "fuelType": "Diesel",
        "transmission": "Manual",
        "engineCC": 2755,
        "powerBHP": 201
      },
      {
        "id": "ctoyotahiluxv2",
        "name": "High AT 4x4",
        "price": 3790000,
        "fuelType": "Diesel",
        "transmission": "Automatic",
        "engineCC": 2755,
        "powerBHP": 201
      }
    ],
    "dealerPrices": [],
    "description": "The Toyota Hilux is an indestructible premium lifestyle utility pickup truck powered by a strong 2.8L diesel engine, featuring legendary off-road reliability.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 190
  },
  {
    "id": "c_toyota_land_cruiser",
    "slug": "toyota-land-cruiser",
    "category": "car",
    "brand": "Toyota",
    "model": "Land Cruiser",
    "year": 2024,
    "startingPrice": 21000000,
    "emiFrom": 315000,
    "images": [
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/139739/land-cruiser-exterior-right-front-three-quarter-3.png?isig=0&q=80",
      "https://imgd.aeplcdn.com/664x374/n/cw/ec/139739/land-cruiser-exterior-right-side-view-5.jpeg?isig=0&q=80"
    ],
    "thumbnailUrl": "https://imgd.aeplcdn.com/664x374/n/cw/ec/139739/land-cruiser-exterior-right-front-three-quarter-3.png?isig=0&q=80",
    "fuelTypes": [
      "Diesel"
    ],
    "transmissions": [
      "Automatic"
    ],
    "mileage": "11.0 kmpl",
    "seatingCapacity": 5,
    "bootSpaceL": 1131,
    "engineCC": 3346,
    "powerBHP": 304,
    "torqueNm": 700,
    "safetyRating": 5,
    "rating": 4.9,
    "reviewCount": 30,
    "colors": [
      "Precious White Pearl",
      "Super White",
      "Dark Red Mica Metallic",
      "Attitude Black Mica",
      "Dark Blue Mica"
    ],
    "features": [
      "3.3L Twin-Turbo V6 Diesel",
      "Multi-Terrain Select (MTS)",
      "Electronic Kinetic Dynamic Suspension (E-KDSS)",
      "12.3-inch Infotainment Screen",
      "14-Speaker JBL Premium Sound"
    ],
    "variants": [
      {
        "id": "ctoyotalandcruiserv1",
        "name": "ZX 3.3 Diesel",
        "price": 21000000,
        "fuelType": "Diesel",
        "transmission": "Automatic",
        "engineCC": 3346,
        "powerBHP": 304,
        "mileageKmpl": 11
      }
    ],
    "dealerPrices": [],
    "description": "The Toyota Land Cruiser LC300 is the ultimate global flagship luxury SUV combining peerless luxury comfort, advanced off-road mechanical systems, and iconic durability.",
    "pros": [
      "High ground clearance to easily tackle bad roads and water logging",
      "High, commanding seating position with clear front road visibility",
      "Spacious cabin feel with robust body build quality"
    ],
    "cons": [
      "Body roll is noticeable during fast cornering on highways",
      "Larger dimensions can feel bulkier in heavy city traffic flow",
      "Fuel economy is lower than equivalent size hatchbacks or sedans"
    ],
    "groundClearance": 230
  }
];

export const brands: Brand[] = [
  {
    "id": "br1",
    "name": "Maruti Suzuki",
    "logo": "https://static-cdn.cars24.com/prod/bikes/2025/05/27/Suzuki_Logos_176x176_4cdbf2d508-81f7c4b3-7c01-4de6-8bd1-5c970e9e26d4.png?w=60&dpr=3&optimize=low&format=auto&quality=50",
    "vehicleCount": 17
  },
  {
    "id": "br2",
    "name": "Hyundai",
    "logo": "https://static-cdn.cars24.com/prod/bikes/2025/06/25/Hyundai-c380f1c1-86a1-4444-a5a9-6f68306b023c.png?w=60&dpr=3&optimize=low&format=auto&quality=50",
    "vehicleCount": 10
  },
  {
    "id": "br3",
    "name": "Tata",
    "logo": "https://static-cdn.cars24.com/prod/bikes/2025/07/01/Container-1-47cf9d69-e2e2-4bae-b6c2-811bab4544ba.png?w=60&dpr=3&optimize=low&format=auto&quality=50",
    "vehicleCount": 13
  },
  {
    "id": "br4",
    "name": "Mahindra",
    "logo": "https://static-cdn.cars24.com/prod/bikes/2025/06/25/Mahindra-29d3c1df-fd38-4d36-9491-2319596e9032.png?w=60&dpr=3&optimize=low&format=auto&quality=50",
    "vehicleCount": 9
  },
  {
    "id": "br5",
    "name": "Toyota",
    "logo": "https://static-cdn.cars24.com/prod/bikes/2025/06/25/Toyota-098fa7f6-4842-422e-8b8a-1dc97641a2fe.png?w=60&dpr=3&optimize=low&format=auto&quality=50",
    "vehicleCount": 9
  },
  {
    "id": "br6",
    "name": "Honda",
    "logo": "https://static-cdn.cars24.com/prod/bikes/2025/06/25/Container-5-d813c3ab-e96c-4f3c-80df-c45f70b7b527.png?w=60&dpr=3&optimize=low&format=auto&quality=50",
    "vehicleCount": 3
  },
  {
    "id": "br11",
    "name": "Kia",
    "logo": "https://static-cdn.cars24.com/prod/bikes/2025/06/25/Kia-64a3d6aa-8cc7-4f6b-8bd8-e71c4a7a5832.png?w=60&dpr=3&optimize=low&format=auto&quality=50",
    "vehicleCount": 4
  },
  {
    "id": "br7",
    "name": "Skoda",
    "logo": "https://static-cdn.cars24.com/prod/bikes/2025/07/01/Container-4-fe646a5a-1f0b-4ca1-a70c-2b0d7ad1cd19.png?w=60&dpr=3&optimize=low&format=auto&quality=50",
    "vehicleCount": 3
  },
  {
    "id": "br8",
    "name": "Citroen",
    "logo": "https://static-cdn.cars24.com/prod/bikes/2025/06/25/Citroen-c99960d3-a967-412f-b579-99c41d62f1b0.png?w=60&dpr=2&optimize=low&format=auto&quality=50",
    "vehicleCount": 3
  },
  {
    "id": "br9",
    "name": "MG",
    "logo": "https://static-cdn.cars24.com/prod/bikes/2025/06/25/MG-29145582-cf3b-4edf-9e6b-5bb79036108d.png?w=60&dpr=3&optimize=low&format=auto&quality=50",
    "vehicleCount": 7
  },
  {
    "id": "br10",
    "name": "Volkswagen",
    "logo": "https://static-cdn.cars24.com/prod/bikes/2025/06/25/VW-bb54ceb0-f19f-4a47-98e9-47107a96de6e.png?w=60&dpr=2&optimize=low&format=auto&quality=50",
    "vehicleCount": 8
  },
  {
    "id": "br12",
    "name": "Nissan",
    "logo": "https://static-cdn.cars24.com/prod/bikes/2025/07/01/Container-2-1657e5a7-4f2c-4df7-bf35-949db36509a3.png?w=60&dpr=3&optimize=low&format=auto&quality=50",
    "vehicleCount": 3
  },
  {
    "id": "br13",
    "name": "Renault",
    "logo": "https://static-cdn.cars24.com/prod/bikes/2025/06/25/Renault-2baa1686-fb01-43a7-90d5-f3c19c22c810.png?w=60&dpr=3&optimize=low&format=auto&quality=50",
    "vehicleCount": 4
  },
  {
    "id": "br14",
    "name": "Jeep",
    "logo": "https://static-cdn.cars24.com/prod/bikes/2025/06/25/%60Jeep-af79fdab-9f41-4a08-9a1d-8c868d3fb265.png?w=60&dpr=2&optimize=low&format=auto&quality=50",
    "vehicleCount": 3
  },
  {
    "id": "br15",
    "name": "Porsche",
    "logo": "https://static-cdn.cars24.com/prod/bikes/2025/06/25/Porsche-38b3e724-1977-4494-a9e9-a8aa7062ab6c.png?w=60&dpr=2&optimize=low&format=auto&quality=50",
    "vehicleCount": 3
  },
  {
    "id": "br16",
    "name": "BYD",
    "logo": "https://static-cdn.cars24.com/prod/bikes/2025/06/25/BYD-6fb0b956-c3c6-4084-ba74-b3544e47aa61.png?w=60&dpr=2&optimize=low&format=auto&quality=50",
    "vehicleCount": 3
  },
  {
    "id": "br17",
    "name": "Mini",
    "logo": "https://static-cdn.cars24.com/prod/bikes/2025/06/25/Mini%20cooper-3717633e-e379-49ab-94a9-27e3fef45b1d.png?w=60&dpr=2&optimize=low&format=auto&quality=50",
    "vehicleCount": 2
  }
];

export const dealers: Dealer[] = [
  {
    "id": "d1",
    "name": "Maruti True Value Ranchi",
    "brand": "Maruti Suzuki",
    "brands": [
      "Maruti Suzuki"
    ],
    "location": "Ranchi",
    "city": "Ranchi",
    "address": "Main Road, Doranda, Ranchi, Jharkhand 834002",
    "phone": "+91 92969 61232",
    "rating": 4.6,
    "reviewCount": 342,
    "image": "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=400",
    "openHours": "Mon-Sat: 9 AM - 7 PM, Sun: 10 AM - 5 PM"
  },
  {
    "id": "d3",
    "name": "Hyundai Showroom Jamshedpur",
    "brand": "Hyundai",
    "brands": [
      "Hyundai"
    ],
    "location": "Jamshedpur",
    "city": "Jamshedpur",
    "address": "Bistupur, Jamshedpur, Jharkhand 831001",
    "phone": "+91 87654 32109",
    "rating": 4.7,
    "reviewCount": 521,
    "image": "https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=400",
    "openHours": "Mon-Sat: 9 AM - 7 PM, Sun: 10 AM - 6 PM"
  },
  {
    "id": "d5",
    "name": "Tata Motors Ranchi",
    "brand": "Tata",
    "brands": [
      "Tata"
    ],
    "location": "Ranchi",
    "city": "Ranchi",
    "address": "Kanke Road, Ranchi, Jharkhand 834008",
    "phone": "+91 76543 21098",
    "rating": 4.5,
    "reviewCount": 289,
    "image": "https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=400",
    "openHours": "Mon-Sat: 9 AM - 7 PM, Sun: 10 AM - 5 PM"
  },
  {
    "id": "d6",
    "name": "Mahindra Ranchi",
    "brand": "Mahindra",
    "brands": [
      "Mahindra"
    ],
    "location": "Ranchi",
    "city": "Ranchi",
    "address": "Lalpur Chowk, Ranchi, Jharkhand 834001",
    "phone": "+91 65432 10987",
    "rating": 4.6,
    "reviewCount": 412,
    "image": "https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=400",
    "openHours": "Mon-Sat: 8:30 AM - 7 PM, Sun: 10 AM - 5 PM"
  },
  {
    "id": "d8",
    "name": "Toyota Ranchi",
    "brand": "Toyota",
    "brands": [
      "Toyota"
    ],
    "location": "Ranchi",
    "city": "Ranchi",
    "address": "Circular Road, Ranchi, Jharkhand 834001",
    "phone": "+91 54321 09876",
    "rating": 4.8,
    "reviewCount": 234,
    "image": "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400",
    "openHours": "Mon-Sat: 9 AM - 7 PM, Sun: 11 AM - 5 PM"
  }
];

import { blogPosts as importedBlogPosts } from './blogData';
export const blogPosts = importedBlogPosts;

export const reviews: Review[] = [
  {
    "id": "r1",
    "name": "Rajesh Kumar",
    "avatar": "RK",
    "rating": 5,
    "vehicle": "Hyundai Creta 2024",
    "comment": "Buywheels helped me get the best deal on my Creta! The price comparison tool saved me over ₹40,000 compared to what the dealer initially quoted. Excellent service, truly buyer-first!",
    "location": "Ranchi",
    "date": "June 2024",
    "verified": true
  },
  {
    "id": "r2",
    "name": "Priya Singh",
    "avatar": "PS",
    "rating": 5,
    "vehicle": "Maruti Swift 2024",
    "comment": "I was confused about which variant to choose. The Buywheels team helped me every step of the way. Got my Swift at the best price in Ranchi, with the Buywheels Welcome Kit thrown in!",
    "location": "Jamshedpur",
    "date": "May 2024",
    "verified": true
  },
  {
    "id": "r3",
    "name": "Amit Mahato",
    "avatar": "AM",
    "rating": 5,
    "vehicle": "Mahindra XUV700",
    "comment": "The comparison feature on Buywheels is fantastic. I compared prices across 3 dealers in Dhanbad and saved ₹25,000 on my XUV700. The Buywheels Welcome Kit was a great bonus!",
    "location": "Dhanbad",
    "date": "June 2024",
    "verified": true
  },
  {
    "id": "r4",
    "name": "Sunita Devi",
    "avatar": "SD",
    "rating": 4,
    "vehicle": "Tata Ace Gold",
    "comment": "Got my Ace Gold for my business through Buywheels. The finance comparison tool was very helpful. Got a great loan rate through their partner bank. Highly recommend!",
    "location": "Bokaro",
    "date": "May 2024",
    "verified": true
  },
  {
    "id": "r5",
    "name": "Vikram Soni",
    "avatar": "VS",
    "rating": 5,
    "vehicle": "Mahindra Scorpio-N",
    "comment": "Outstanding experience! Buywheels guided me through the entire buying process — from comparing variants to finalizing the deal and insurance. Worth every rupee of trust!",
    "location": "Ranchi",
    "date": "April 2024",
    "verified": true
  },
  {
    "id": "r6",
    "name": "Deepak Yadav",
    "avatar": "DY",
    "rating": 5,
    "vehicle": "Honda City Hybrid",
    "comment": "Smooth experience from start to finish. The EMI calculator and loan comparison tool are top-notch. Got my City Hybrid at ₹25,000 below the listed price. Thank you Buywheels!",
    "location": "Jamshedpur",
    "date": "June 2024",
    "verified": true
  }
];

export const offers: Offer[] = [
  {
    "id": "o1",
    "title": "Monsoon Bumper Exchange Bonus",
    "description": "Get up to ₹50,000 exchange bonus on your old vehicle when you buy any new car this monsoon season.",
    "discount": "Up to ₹50,000",
    "validTill": "August 31, 2026",
    "category": "Cars",
    "image": "https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=600",
    "type": "exchange"
  },
  {
    "id": "o2",
    "title": "SBI Credit Card Instant Cashback",
    "description": "Get flat ₹5,000 instant cashback on paying the booking amount of any vehicle using SBI Credit Cards.",
    "discount": "Flat ₹5,000 Cashback",
    "validTill": "July 31, 2026",
    "category": "Bank",
    "brand": "SBI",
    "image": "https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=600",
    "code": "SBICB5K",
    "type": "cashback"
  },
  {
    "id": "o3",
    "title": "Corporate Discount Program",
    "description": "Employees of partner companies get exclusive additional discounts of up to ₹30,000 on new vehicles.",
    "discount": "Up to ₹30,000",
    "validTill": "December 31, 2026",
    "category": "All Vehicles",
    "image": "https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=600",
    "type": "corporate"
  },
  {
    "id": "o4",
    "title": "SBI Car Loan Cashback",
    "description": "Get ₹10,000 cashback when you finance your new vehicle through SBI. Valid on loans above ₹5 lakhs.",
    "discount": "₹10,000 Cashback",
    "validTill": "July 31, 2026",
    "category": "Finance",
    "brand": "SBI",
    "image": "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=600",
    "code": "SBIBW10K",
    "type": "bank"
  },
  {
    "id": "o5",
    "title": "EV Special: Free Home Charger",
    "description": "Buy any electric vehicle through Buywheels and get a free home charging setup worth ₹25,000.",
    "discount": "₹25,000 Worth Free",
    "validTill": "August 31, 2026",
    "category": "EV",
    "image": "https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=600",
    "type": "festival"
  },
  {
    "id": "o6",
    "title": "EV Cashback Special Offer",
    "description": "Green rewards for EV buyers! Get an extra ₹15,000 cashback on the Tata Nexon EV or Punch EV.",
    "discount": "₹15,000 Cashback",
    "validTill": "September 30, 2026",
    "category": "EV",
    "image": "https://images.pexels.com/photos/8825701/pexels-photo-8825701.jpeg?auto=compress&cs=tinysrgb&w=600",
    "code": "GOGREEN15",
    "type": "cashback"
  },
  {
    "id": "o7",
    "title": "Special Low-Interest Rate EMI",
    "description": "Finance your dream vehicle with interest rates starting at just 7.99% with select banking partners.",
    "discount": "7.99% Interest Rate",
    "validTill": "September 30, 2026",
    "category": "Finance",
    "image": "https://images.pexels.com/photos/164501/pexels-photo-164501.jpeg?auto=compress&cs=tinysrgb&w=600",
    "code": "LOWEMI799",
    "type": "emi"
  },
  {
    "id": "o8",
    "title": "Zero Down Payment & Flexi-EMI",
    "description": "Get flexible EMI schemes with zero down payment options from our banking partners HDFC and ICICI.",
    "discount": "Zero Down Payment",
    "validTill": "October 31, 2026",
    "category": "Finance",
    "image": "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600",
    "code": "FLEXIEMI",
    "type": "emi"
  }
];

export const faqs: FAQItem[] = [
  {
    "id": "faq1",
    "question": "How does Buywheels help me get the best price?",
    "answer": "Buywheels aggregates real-time prices from all authorized dealerships in Jharkhand. We compare prices across multiple dealers and negotiate on your behalf to ensure you get the best available deal. Our platform is completely transparent — we show you the exact ex-showroom and on-road prices from every dealer."
  },
  {
    "id": "faq2",
    "question": "Is Buywheels a dealership?",
    "answer": "No, Buywheels is not a dealership. We are a buyer-first platform that connects you with authorized dealerships across Jharkhand. We help you compare prices, negotiate deals, and complete your purchase — all while ensuring you get the best available price."
  },
  {
    "id": "faq3",
    "question": "What is the Buywheels Welcome Kit?",
    "answer": "The Buywheels Welcome Kit is an exclusive package given to every buyer who purchases a vehicle through Buywheels. It includes premium vehicle accessories, an extended warranty certificate, a roadside assistance membership, and our exclusive Buywheels Owner's Club membership."
  },
  {
    "id": "faq4",
    "question": "Can I get a test drive arranged through Buywheels?",
    "answer": "Absolutely! You can book a free test drive directly through our platform. Simply select your preferred vehicle and location, and we will coordinate with the nearest authorized dealer to arrange a test drive at your convenience."
  },
  {
    "id": "faq5",
    "question": "What cities in Jharkhand does Buywheels operate in?",
    "answer": "Buywheels currently operates across all major cities in Jharkhand including Ranchi, Jamshedpur, Dhanbad, Bokaro, Hazaribagh, Deoghar, Dumka, and Giridih. We are rapidly expanding to cover every district in Jharkhand."
  },
  {
    "id": "faq6",
    "question": "How does vehicle financing work on Buywheels?",
    "answer": "We partner with leading banks and NBFCs to offer competitive loan rates. You can compare loan offers from multiple lenders on our platform, check your eligibility instantly, and apply online. Our finance experts will guide you through the entire process to get you the best rate."
  }
];

export const formatPrice = (price: number): string => {
  if (price >= 10000000) {
    return `₹${(price / 10000000).toFixed(2)} Cr`;
  } else if (price >= 100000) {
    return `₹${(price / 100000).toFixed(2)} L`;
  } else if (price >= 1000) {
    return `₹${(price / 1000).toFixed(0)}K`;
  }
  return `₹${price.toLocaleString('en-IN')}`;
};

export const formatPriceShort = (price: number): string => {
  if (price >= 10000000) {
    return `₹${(price / 10000000).toFixed(1)} Cr`;
  } else if (price >= 100000) {
    return `₹${(price / 100000).toFixed(1)} L`;
  }
  return `₹${price.toLocaleString('en-IN')}`;
};

export const getVehiclesByCategory = (category: string) =>
  vehicles.filter(v => v.category === category);

export const getFeaturedVehicles = () =>
  vehicles.filter(v => v.isBestSeller || v.isNew).slice(0, 6);

export const getRelatedVehicles = (id: string, category: string) =>
  vehicles.filter(v => v.category === category && v.id !== id).slice(0, 4);

export const getBodyType = (v: any): string => {
  const model = v.model.toLowerCase();
  
  if (model.includes('swift') || model.includes('baleno') || model.includes('i20') || model.includes('tiago') || model.includes('altroz') || model.includes('kwid') || model.includes('glanza') || model.includes('wagonr') || model.includes('c3')) {
    return 'Hatchback';
  }
  if (model.includes('city') || model.includes('verna') || model.includes('dzire') || model.includes('amaze') || model.includes('ciaz') || model.includes('superb') || model.includes('slavia') || model.includes('virtus') || model.includes('camry')) {
    return 'Sedan';
  }
  if (model.includes('ertiga') || model.includes('hycross') || model.includes('carens') || model.includes('triber') || model.includes('carnival') || model.includes('innova') || model.includes('xl6') || model.includes('invicto')) {
    return 'MUV';
  }
  if (model.includes('basalt')) {
    return 'Coupe';
  }
  return 'SUV';
};

export const getDailySales = (vehicleId: string, isBestSeller?: boolean, rating?: number, reviewCount?: number): number => {
  const today = new Date();
  const dateString = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  
  let hash = 0;
  const str = vehicleId + dateString;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  
  const baseSales = isBestSeller ? 1200 : ((rating && rating > 4.5) ? 800 : 400);
  const reviewBonus = Math.min(300, Math.floor((reviewCount || 0) * 0.1));
  const fluctuation = (Math.abs(hash) % 301) - 150;
  
  return Math.max(150, baseSales + reviewBonus + fluctuation);
};
