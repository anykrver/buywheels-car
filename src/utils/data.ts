import type { Vehicle, Brand, Dealer, Review, Offer, FAQItem } from '../types';
import { vehicles } from './vehicle';

export { vehicles };

export const brands: Brand[] = [
  {
    "id": "br1",
    "name": "Maruti Suzuki",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/10/brands/logos/maruti-suzuki1647009823420.jpg?v=1647009823707&q=80",
    "vehicleCount": 17
  },
  {
    "id": "br3",
    "name": "Tata",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/16/brands/logos/tata.jpg?v=1629973276336&q=80",
    "vehicleCount": 13
  },
  {
    "id": "br4",
    "name": "Mahindra",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/9/brands/logos/mahindra.jpg?v=1629973668273&q=80",
    "vehicleCount": 9
  },
  {
    "id": "br5",
    "name": "Toyota",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/17/brands/logos/toyota.jpg?v=1630055705330&q=80",
    "vehicleCount": 9
  },
  {
    "id": "br2",
    "name": "Hyundai",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/8/brands/logos/hyundai.jpg?v=1629973193722&q=80",
    "vehicleCount": 10
  },
  {
    "id": "br11",
    "name": "Kia",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/70/brands/logos/kia.jpg?v=1630057189593&q=80",
    "vehicleCount": 4
  },
  {
    "id": "br7",
    "name": "Skoda",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/15/brands/logos/skoda1681982956420.jpg?v=1681982956529&q=80",
    "vehicleCount": 3
  },
  {
    "id": "br17",
    "name": "BMW",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/1/brands/logos/bmw.jpg?v=1629973130013&q=80",
    "vehicleCount": 3
  },
  {
    "id": "br6",
    "name": "Honda",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/7/brands/logos/honda.jpg?v=1630056209549&q=80",
    "vehicleCount": 3
  },
  {
    "id": "br12",
    "name": "Nissan",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/21/brands/logos/nissan.jpg?v=1631163973143&q=80",
    "vehicleCount": 3
  },
  {
    "id": "br9",
    "name": "MG",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/72/brands/logos/mg.jpg?v=1631163895654&q=80",
    "vehicleCount": 7
  },
  {
    "id": "br18",
    "name": "Mercedes-Benz",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/11/brands/logos/mercedes-benz.jpg?v=1629973270530&q=80",
    "vehicleCount": 3
  },
  {
    "id": "br10",
    "name": "Volkswagen",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/20/brands/logos/volkswagen.jpg?v=1630056096439&q=80",
    "vehicleCount": 8
  },
  {
    "id": "br13",
    "name": "Renault",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/45/brands/logos/renault.jpg?v=1630057266767&q=80",
    "vehicleCount": 4
  },
  {
    "id": "br21",
    "name": "Land Rover",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/23/brands/logos/land-rover1647236056893.jpg?v=1647236057234&q=80",
    "vehicleCount": 2
  },
  {
    "id": "br8",
    "name": "Citroen",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/74/brands/logos/citroen1649763818937.jpg?v=1649763819072&q=80",
    "vehicleCount": 3
  },
  {
    "id": "br14",
    "name": "Jeep",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/43/brands/logos/jeep.jpg?v=1631163646486&q=80",
    "vehicleCount": 3
  },
  {
    "id": "br16",
    "name": "Audi",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/18/brands/logos/audi.jpg?v=1630055874070&q=80",
    "vehicleCount": 3
  },
  {
    "id": "br15",
    "name": "BYD",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/111/brands/logos/byd1650348943682.jpg?v=1650348943775&q=80",
    "vehicleCount": 3
  },
  {
    "id": "br30",
    "name": "VinFast",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/155/brands/logos/vinfast1713865012063.jpg?v=1713865012556&q=80",
    "vehicleCount": 1
  },
  {
    "id": "br23",
    "name": "Lexus",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/34/brands/logos/lexus1753266706938.jpg?v=1753266707154&q=80",
    "vehicleCount": 2
  },
  {
    "id": "br19",
    "name": "Porsche",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/19/brands/logos/porsche.jpg?v=1631164048727&q=80",
    "vehicleCount": 3
  },
  {
    "id": "br20",
    "name": "Volvo",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/37/brands/logos/volvo.jpg?v=1641478299001&q=80",
    "vehicleCount": 2
  },
  {
    "id": "br24",
    "name": "Mini",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/51/brands/logos/mini1753266761791.jpg?v=1753266761988&q=80",
    "vehicleCount": 2
  },
  {
    "id": "br27",
    "name": "Force Motors",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/50/brands/logos/force-motors1753266590265.jpg?v=1753266590441&q=80",
    "vehicleCount": 1
  },
  {
    "id": "br31",
    "name": "Ferrari",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/33/brands/logos/ferrari1753266554970.jpg?v=1753266555197&q=80",
    "vehicleCount": 1
  },
  {
    "id": "br29",
    "name": "Lamborghini",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/30/brands/logos/lamborghini.jpg?v=1631163813246&q=80",
    "vehicleCount": 1
  },
  {
    "id": "br32",
    "name": "Jaguar",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/44/brands/logos/jaguar.jpg?v=1631163525508&q=80",
    "vehicleCount": 1
  },
  {
    "id": "br33",
    "name": "JSW",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/188/brands/logos/jsw1772024977296.jpg?v=1772024977457&q=80",
    "vehicleCount": 1
  },
  {
    "id": "br34",
    "name": "Rolls-Royce",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/25/brands/logos/rolls-royce.jpg?v=1631164135042&q=80",
    "vehicleCount": 1
  },
  {
    "id": "br26",
    "name": "Isuzu",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/61/brands/logos/isuzu1753266617584.jpg?v=1753266617818&q=80",
    "vehicleCount": 1
  },
  {
    "id": "br35",
    "name": "Tesla",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/73/brands/logos/tesla.jpg?v=1631163609705&q=80",
    "vehicleCount": 1
  },
  {
    "id": "br36",
    "name": "Maserati",
    "logo": "https://imgd.aeplcdn.com/0X0/n/gph63sa_1483779.jpg?q=80",
    "vehicleCount": 1
  },
  {
    "id": "br28",
    "name": "Aston Martin",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/49/brands/logos/aston-martin1753266065376.jpg?v=1753266065606&q=80",
    "vehicleCount": 1
  },
  {
    "id": "br37",
    "name": "McLaren",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/77/brands/logos/mclaren1649762557086.jpg?v=1649762557267&q=80",
    "vehicleCount": 1
  },
  {
    "id": "br38",
    "name": "Bentley",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/22/brands/logos/bentley1753266197135.jpg?v=1753266197662&q=80",
    "vehicleCount": 1
  },
  {
    "id": "br39",
    "name": "Lotus",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/123/brands/logos/lotus1700211136329.jpg?v=1700211136743&q=80",
    "vehicleCount": 1
  },
  {
    "id": "br40",
    "name": "OLA",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/119/brands/logos/ola1656591185411.jpg?v=1656591185786&q=80",
    "vehicleCount": 1
  },
  {
    "id": "br41",
    "name": "Genesis",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/183/brands/logos/gensis1762939958516.jpg?v=1762939958875&q=80",
    "vehicleCount": 1
  },
  {
    "id": "br42",
    "name": "Pravaig",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/135/brands/logos/pravaig1669203737160.jpg?v=1669203737308&q=80",
    "vehicleCount": 1
  },
  {
    "id": "br43",
    "name": "Fisker",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/113/brands/logos/fisker1650348917218.jpg?v=1650348917359&q=80",
    "vehicleCount": 1
  },
  {
    "id": "br44",
    "name": "Leapmotor",
    "logo": "https://imgd.aeplcdn.com/0X0/n/cw/ec/157/brands/logos/leapmotor1715761361374.jpg?v=1715761361605&q=80",
    "vehicleCount": 1
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
  },
  {
    "id": "d_kia_ranchi",
    "name": "Speed Kia Ranchi",
    "brand": "Kia",
    "brands": [
      "Kia"
    ],
    "location": "Ranchi",
    "city": "Ranchi",
    "address": "Kanke Road, Near CMPDI, Ranchi, Jharkhand 834008",
    "phone": "+91 94311 05432",
    "rating": 4.8,
    "reviewCount": 465,
    "image": "https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=400",
    "openHours": "Mon-Sat: 9 AM - 7:30 PM, Sun: 10 AM - 5 PM"
  },
  {
    "id": "d_kia_jamshedpur",
    "name": "Autobahn Kia Jamshedpur",
    "brand": "Kia",
    "brands": [
      "Kia"
    ],
    "location": "Jamshedpur",
    "city": "Jamshedpur",
    "address": "Bistupur Main Road, Jamshedpur, Jharkhand 831001",
    "phone": "+91 94313 87654",
    "rating": 4.7,
    "reviewCount": 380,
    "image": "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=400",
    "openHours": "Mon-Sat: 9 AM - 7:30 PM, Sun: 10 AM - 5 PM"
  },
  {
    "id": "d_kia_dhanbad",
    "name": "Capital Kia Dhanbad",
    "brand": "Kia",
    "brands": [
      "Kia"
    ],
    "location": "Dhanbad",
    "city": "Dhanbad",
    "address": "Govindpur Road, Dhanbad, Jharkhand 828109",
    "phone": "+91 94315 21098",
    "rating": 4.6,
    "reviewCount": 290,
    "image": "https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=400",
    "openHours": "Mon-Sat: 9 AM - 7 PM, Sun: 10 AM - 4 PM"
  }
];

import { blogPosts as importedBlogPosts } from './blogData';
export const blogPosts = importedBlogPosts;

export const reviews: Review[] = [
  {
    "id": "rk1",
    "name": "Vikramaditya Sahay",
    "avatar": "VS",
    "rating": 5,
    "vehicle": "Kia Seltos 2026",
    "comment": "Booked the 2026 Kia Seltos GTX+ Turbo DCT through Buywheels! The Trinity Panoramic Display and ADAS features are world-class. Got ₹35,000 off at Speed Kia Ranchi through Buywheels price negotiation!",
    "location": "Ranchi",
    "date": "January 2026",
    "verified": true
  },
  {
    "id": "rk2",
    "name": "Ananya Mukherjee",
    "avatar": "AM",
    "rating": 5,
    "vehicle": "Kia Sonet 2026",
    "comment": "Got my new Kia Sonet HTX in Pewter Olive color. The dual 10.25-inch screens and ventilated seats are a game changer in summer. Smooth delivery from Autobahn Kia Jamshedpur!",
    "location": "Jamshedpur",
    "date": "December 2025",
    "verified": true
  },
  {
    "id": "rk3",
    "name": "Manish Verma",
    "avatar": "MV",
    "rating": 5,
    "vehicle": "Kia Carens 2026",
    "comment": "Purchased the 7-seater Kia Carens for long family trips across Jharkhand. Third-row AC and electric tumble 2nd-row seats make every journey comfortable. Thanks Buywheels!",
    "location": "Dhanbad",
    "date": "November 2025",
    "verified": true
  },
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
    "image": "/images/offer_o1_exchange.jpg",
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
    "image": "/images/offer_o2_sbi_cashback.jpg",
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
    "image": "/images/offer_o3_corporate.jpg",
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
    "image": "/images/offer_o4_bank_loan.jpg",
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
    "image": "/images/offer_o5_ev_charger.jpg",
    "type": "festival"
  },
  {
    "id": "o6",
    "title": "EV Cashback Special Offer",
    "description": "Green rewards for EV buyers! Get an extra ₹15,000 cashback on the Tata Nexon EV or Punch EV.",
    "discount": "₹15,000 Cashback",
    "validTill": "September 30, 2026",
    "category": "EV",
    "image": "/images/offer_o6_ev_cashback.jpg",
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
    "image": "/images/offer_o7_low_emi.jpg",
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
    "image": "/images/offer_o6_ev_cashback.jpg",
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
