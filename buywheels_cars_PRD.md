# 🚗 BUYWHEELS CARS
## Car Discovery & Buying Assistance Platform — Product Requirements Document
### Version 2.0 · August 2026 · Status: Active Production Baseline
#### *India's Most Trusted Vehicle-Buying Platform — Built for Jharkhand & Tier-2/3 Cities*

---

> **Vision:** Build the most transparent, feature-rich, and beautifully designed car-buying discovery platform in India — starting in Jharkhand (Ranchi, Jamshedpur, Dhanbad, Bokaro, Hazaribagh) and scaling nationally to become the dominant automotive marketplace for Tier-2 and Tier-3 Indian cities.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Product Vision & Business Model](#2-product-vision--business-model)
3. [Goals & Success Metrics](#3-goals--success-metrics)
4. [Market Opportunity](#4-market-opportunity)
5. [User Personas](#5-user-personas)
6. [System Architecture](#6-system-architecture)
   - [6.1 Full-Stack Folder Structure](#61-full-stack-folder-structure)
   - [6.2 Component Summary](#62-component-summary)
7. [Feature Modules — Detailed Requirements](#7-feature-modules--detailed-requirements)
   - [7.1 Homepage](#71-homepage)
   - [7.2 Vehicle Listing (Cars & EVs)](#72-vehicle-listing-cars--evs)
   - [7.3 Vehicle Detail Page](#73-vehicle-detail-page)
   - [7.4 Compare Vehicles](#74-compare-vehicles)
   - [7.5 Offers & Deals](#75-offers--deals)
   - [7.6 Finance & Loan Calculator](#76-finance--loan-calculator)
   - [7.7 Insurance Calculator](#77-insurance-calculator)
   - [7.8 Test Drive Booking](#78-test-drive-booking)
   - [7.9 Dealers Directory](#79-dealers-directory)
   - [7.10 Buywheels Care](#710-buywheels-care)
   - [7.11 Blog & Content Hub](#711-blog--content-hub)
   - [7.12 Wishlist](#712-wishlist)
   - [7.13 AI Chat Assistant](#713-ai-chat-assistant)
   - [7.14 User Authentication](#714-user-authentication)
   - [7.15 Careers](#715-careers)
8. [UI/UX Design System](#8-uiux-design-system)
9. [SEO & Vehicle Google Ranking Masterplan](#9-seo--vehicle-google-ranking-masterplan)
   - [9.1 High-Intent Keyword Strategy](#91-high-intent-keyword-strategy)
   - [9.2 Programmatic Page & URL Architecture](#92-programmatic-page--url-architecture)
   - [9.3 Structured Data & JSON-LD Schema Stack](#93-structured-data--json-ld-schema-stack)
   - [9.4 E-E-A-T Content Blueprint per Vehicle](#94-e-e-a-t-content-blueprint-per-vehicle)
   - [9.5 Automated Google Indexing & XML Sitemap](#95-automated-google-indexing--xml-sitemap)
   - [9.6 Core Web Vitals & Page Speed Targets](#96-core-web-vitals--page-speed-targets)
   - [9.7 Programmatic SEO Matrix](#97-programmatic-seo-matrix)
10. [Non-Functional Requirements](#10-non-functional-requirements)
11. [Technology Stack](#11-technology-stack)
12. [Database Schema (Prisma / PostgreSQL)](#12-database-schema-prisma--postgresql)
13. [Milestones & Roadmap](#13-milestones--roadmap)
14. [Risk Register](#14-risk-register)
15. [Appendix — Route & Page Inventory](#15-appendix--route--page-inventory)

---

## 1. Executive Summary

**BuyWheels Cars** is a comprehensive, web-based car discovery and buying assistance platform designed for new car buyers in Jharkhand and surrounding Tier-2/3 Indian cities. The platform eliminates information asymmetry in the car-buying journey — empowering buyers with transparent pricing, real dealer offers, EMI calculators, insurance estimates, test drive booking, and an AI-powered car advisor.

**Phase 1 — Jharkhand Focus:** BuyWheels launches with deep coverage across 5 major cities (Ranchi, Jamshedpur, Dhanbad, Bokaro, Hazaribagh) with curated dealers, localised pricing, and pincode-level offer customisation.

**Phase 2 — Full-Stack Platform Expansion:** The platform incorporates a 2-tier architecture with a React 18 SPA frontend and a Node.js + Express + Prisma REST API backend, enabling automated lead routing, dealer inventory sync, and SEO-driven programmatic content generation.

The product is inspired by platforms like CarWale, CarDekho, and Cars24 but designed with a **significantly superior UI/UX** — a clean, modern aesthetic with an orange accent brand (`#FF6A00`), dark glassmorphism elements, smooth micro-animations, and 100/100 SEO optimization — positioning it as the premium Tier-2 answer to metro-centric automotive portals.

---

## 2. Product Vision & Business Model

### 2.1 Two-Layer Business Model

```
+--------------------------------------------------------------+
|                  BUYWHEELS PLATFORM (Owner)                   |
|  Drives car-buyer traffic · Aggregates dealer inventory ·     |
|  Generates leads · Monetises through dealer partnerships      |
+------------------------------+-------------------------------+
                               | connects buyers with
              +----------------+-----------------+
              |                                  |
       +------+------+                  +--------+--------+
       |  Car Buyers |                  |  Dealerships    |
       |  (Jharkhand)|   · · · · ·      | (50+ partners)  |
       |  Free users |                  | Lead customers  |
       +-------------+                  +-----------------+
```

### 2.2 Revenue Streams

| Stream | Model | Estimated Potential |
|--------|-------|---------------------|
| Dealer Lead Generation | Per qualified lead / monthly retainer | ₹200–₹800/lead |
| Featured Listings | Premium placement for models/brands | ₹5,000–₹25,000/month per brand |
| Finance Referrals | Commission from NBFCs/banks on loan referrals | 0.5–1.5% of loan value |
| Insurance Referrals | Commission from insurance partners | ₹300–₹2,000/policy |
| Buywheels Care Subscriptions | Monthly/annual care plans | ₹499–₹2,499/year |
| Dealer SaaS Dashboard (Phase 2) | Per-dealer CRM/inventory portal | ₹1,999–₹7,999/month |
| Content & Sponsored Reviews | Brand-sponsored editorial content | ₹15,000–₹75,000/piece |

---

## 3. Goals & Success Metrics

| Goal Category | Key Metric | 6-Month Target | 12-Month Target |
|---------------|------------|----------------|-----------------|
| Organic Traffic | Monthly Active Users (MAU) | 100,000 MAU | 500,000 MAU |
| SEO Ranking | Top 3 Positions on Google | 50 Vehicle Keywords | 300+ Vehicle Keywords |
| Lead Generation | Verified Test Drives & Quotes | 1,500 leads/mo | 7,500 leads/mo |
| Dealer Onboarding | Active Authorized Dealerships | 35 Dealerships | 75 Dealerships |
| Conversion Rate | Visitor-to-Lead Ratio | 2.5% | 4.8% |

---

## 4. Market Opportunity

- **Tier-2/3 Automotive Surge:** Car sales growth in Tier-2/3 cities (14–18% YoY) is outstripping metro cities (4–6% YoY).
- **High Intent Local Search:** "Car price in Ranchi", "Swift on road price Jamshedpur", "Best SUV in Jharkhand" have high commercial intent with low competitive digital density compared to Delhi/Mumbai.
- **Zero Digital Transparency:** Most regional buyers face non-transparent dealer quotes, hidden accessories fees, and delays in test drive bookings.

---

## 5. User Personas

### Persona 1: Rajesh (First-Time Buyer)
- **Age:** 28 · **City:** Ranchi · **Profession:** IT Manager
- **Goal:** Buy a reliable hatchback/compact SUV under ₹10 Lakhs.
- **Need:** Clear on-road price in Ranchi, EMI options under ₹12,000/month, test drive at home.

### Persona 2: Priya (EV Enthusiast)
- **Age:** 34 · **City:** Jamshedpur · **Profession:** Doctor
- **Goal:** Switch from petrol to electric SUV (Tata Nexon EV / MG Windsor EV).
- **Need:** Real-world battery range in Jharkhand topography, subsidy details, charger setup assistance.

### Persona 3: Dealer Manager (Sudha Maruti)
- **City:** Ranchi · **Role:** Sales Head
- **Goal:** Acquire high-intent, qualified leads without paying exorbitant metro agency costs.
- **Need:** Direct customer lead dashboard with phone, preferred variant, and timeline.

---

## 6. System Architecture

### 6.1 Full-Stack Folder Structure

```
buywheels-car-main/
├── README.md                           # Comprehensive documentation
├── package.json                        # Monorepo/Root script runner
├── buywheels_cars_PRD.md               # BuyWheels Cars PRD
├── DreamGirl_Salon_PRD.md              # Architectural Reference PRD
├── frontend/                           # React 18 + TypeScript + Vite Frontend SPA
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   ├── index.html
│   ├── public/                         # sitemap.xml, robots.txt, assets
│   └── src/
│       ├── App.tsx                     # Main App Component & Router
│       ├── components/
│       │   ├── common/                 # Navbar, Footer, MobileNav, Toast, PageSEO, ChatAssistant
│       │   ├── home/                   # HeroSection, CategorySection, BrandSection, FeaturedVehicles
│       │   ├── vehicle/                # VehicleCard, VehicleFilters, PriceHistory, ServiceCost, Brochure
│       │   └── modals/                 # AreaPincodeModal, TestDriveReceiptModal
│       ├── context/                    # LocationContext, WishlistContext
│       ├── pages/                      # 21 Page Components (Home, Cars, EVs, Detail, Compare, etc.)
│       ├── services/                   # apiService.ts (Node/Express REST API client + Fallback)
│       ├── types/                      # TypeScript Definitions
│       └── utils/                      # Data formatting, PDF brochure generator, color mappings
│
└── backend/                            # Node.js + Express.js + TypeScript REST API
    ├── package.json
    ├── tsconfig.json
    └── src/
        ├── server.ts                   # Express Application Bootstrap
        ├── routes/                     # REST API Routes (/api/v1/*)
        ├── controllers/                # Request Handlers (Vehicles, Dealers, Leads, Offers, etc.)
        ├── middleware/                 # CORS, Logger, Error Handler
        ├── data/                       # Authoritative Mock & Seed Data
        └── types/                      # Data Models
```

### 6.2 Component Summary

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Frontend | React 18 + Vite + TypeScript | High-performance SPA with instant navigation |
| Styling | TailwindCSS + Vanilla CSS | Dark/light glassmorphism luxury tokens |
| Backend | Node.js + Express.js | Production REST API for vehicles, leads, dealers |
| Database | Prisma ORM + PostgreSQL / Supabase | Relational data persistence |
| SEO Engine | React Helmet / PageSEO + JSON-LD | Rich Google snippets & automated sitemaps |

---

## 7. Feature Modules — Detailed Requirements

### 7.1 Homepage
- **Hero Section:** High-converting banner, background car visuals, animated stats (`50+ Dealers`, `200+ Cars`, `10,000+ Happy Buyers`), area pincode modal trigger.
- **Search Widget:** Interactive search bar with instant autocomplete suggestions (`SearchSuggestions.tsx`) and filter pills (Budget, Body Type, Fuel, Transmission, City).
- **Brand Selection Grid:** Multi-brand carousel (Maruti Suzuki, Hyundai, Tata, Mahindra, Kia, Toyota, Honda, Skoda, BMW).
- **Featured Selection (Top Picks):** 6 cards per page displaying diverse top brands (**Maruti Suzuki, Hyundai, Tata, Mahindra, Kia, Toyota**).
- **Recently Launched Cars & EVs:** Live horizontal scroll cards showcasing newly released models.
- **Testimonials & FAQs:** Verified buyer reviews with Jharkhand city badges and expandable FAQ accordions.

### 7.2 Vehicle Listing (Cars & EVs)
- Dynamic filter sidebar: Body Type, Fuel Type, Transmission, Budget range slider, Safety Rating (3★+, 4★+, 5★), Seating Capacity.
- Toggle between Grid and List view.
- Real-time sort: Popularity, Price (Low to High), Price (High to Low), Rating.

### 7.3 Vehicle Detail Page
- **Visual Showcase:** High-resolution image gallery, 360-degree exterior viewer simulator.
- **On-Road Price Breakdown:** Ex-showroom, RTO Jharkhand, Insurance, FASTag, and registration cost calculator per city (Ranchi, Jamshedpur, Dhanbad, etc.).
- **Dealer Price Comparison Table:** Displays local authorized dealers with prices, active cash discounts, and customer ratings.
- **Variant Matrix Table:** Interactive comparison of all trim levels (e.g. LXi, VXi, ZXi, ZXi+).
- **Service & Maintenance Cost Estimator:** 1-5 year periodic service cost breakdown.
- **Price Trend History Graph:** Historical price movement tracker over the last 12 months.
- **Instant Brochure Download:** Dynamic client-side PDF brochure generator (`jspdf`).

### 7.4 Compare Vehicles
- Side-by-side comparison of up to 4 vehicles across 35+ parameters (Engine, Mileage, Safety, Dimensions, Features, Price).
- Highlight differences toggle button.
- One-click share comparison link with native web clipboard copy.

### 7.5 Offers & Deals
- Ticking countdown timer for deals ending soon (`OfferCountdown.tsx`).
- Categorized tabs: Cashback, Bank Offers, Exchange Bonus, Corporate Benefits.
- Coupon code copy functionality.

### 7.6 Finance & Loan Calculator
- Interactive sliders: Loan Amount, Down Payment, Interest Rate, Loan Tenure (1–7 years).
- Dynamic SVG Donut Chart (`LoanDonutChart.tsx`) illustrating Principal vs. Total Interest breakdown.
- SBI, HDFC, ICICI bank loan rate comparison grid.

### 7.7 Insurance Calculator
- Insurer comparison grid (HDFC ERGO, Bajaj Allianz, ICICI Lombard).
- Instant quote estimate generator based on vehicle IDV (Insured Declared Value).

### 7.8 Test Drive Booking
- 3-step booking flow: Vehicle selection, Date & Time slot, Home Delivery vs. Dealer Visit.
- Instant downloadable/printable **Test Drive Receipt Modal** with booking ID.

### 7.9 Dealers Directory
- Searchable dealership directory across Jharkhand cities.
- Filter by Brand and City.
- Direct call CTA, address, opening hours, and Google Maps pin integration.

---

## 8. UI/UX Design System

- **Primary Color:** Electric Orange (`#FF6A00`) — High energy, commercial CTA contrast.
- **Background Palette:** Sleek Dark Mode (`#0F0F10` & `#1A1A1B`) paired with pristine glassmorphism overlays (`rgba(255,255,255,0.05)`).
- **Typography:** Inter & Outfit sans-serif fonts from Google Fonts for high legibility.
- **Micro-Animations:** Smooth hover transitions (`transform 0.3s ease`), count-up numbers, glowing focus rings.

---

## 9. SEO & Vehicle Google Ranking Masterplan

To rank **every single vehicle** on the #1 page of Google search results in target geographies (Jharkhand and nationwide Tier-2/3 markets), BuyWheels implements an advanced, 7-pillar SEO framework:

```
+-------------------------------------------------------------------------+
|                  BUYWHEELS VEHICLE SEO RANKING ENGINE                   |
+-------------------------------------------------------------------------+
| 1. High-Intent Keyword Matrix  |  2. Programmatic URL Architecture      |
| 3. JSON-LD Schema Stack        |  4. 1,500+ Word E-E-A-T Content         |
| 5. Automated Google Indexing   |  6. 100/100 Core Web Vitals             |
| 7. Internal Link Graph Cluster |                                        |
+-------------------------------------------------------------------------+
```

### 9.1 High-Intent Keyword Strategy

We target 4 distinct intent layers for every vehicle:

1. **Transactional (High Conversion):**
   - `[Model] on road price in [City]` (e.g. *"Maruti Swift on road price in Ranchi"*)
   - `Buy [Model] in [City] dealer discount`
   - `Book [Model] test drive [City]`
2. **Commercial Comparison:**
   - `[Car A] vs [Car B] price in Jharkhand` (e.g. *"Creta vs Seltos price in Jamshedpur"*)
   - `Best SUV under [Budget] Lakh in Ranchi`
3. **Informational & Technical:**
   - `[Model] mileage in city and highway`
   - `[Model] service cost 5 year breakdown`
   - `[Model] safety rating NCAP`
4. **Local Dealership Intent:**
   - `[Brand] car showroom in [City]` (e.g. *"Tata car showroom near me Dhanbad"*)

### 9.2 Programmatic Page & URL Architecture

Every vehicle generates a cluster of search-engine optimized, clean URLs:

| Page Type | URL Structure | Target Primary Keyword Pattern |
|-----------|---------------|--------------------------------|
| Main Vehicle Page | `/vehicle/:slug` | `[Brand] [Model] Price, Images, Specs & Reviews` |
| City On-Road Price | `/vehicle/:slug/on-road-price-:city` | `[Brand] [Model] On Road Price in [City] (August 2026)` |
| Vehicle Mileage | `/vehicle/:slug/mileage` | `[Brand] [Model] Real World Mileage & Fuel Efficiency` |
| Vehicle Colors | `/vehicle/:slug/colors` | `[Brand] [Model] All 8 Color Options with Images` |
| Vehicle Variants | `/vehicle/:slug/variants` | `[Brand] [Model] Variants Price List, Features & Comparison` |
| Vehicle Reviews | `/vehicle/:slug/user-reviews` | `[Brand] [Model] User Reviews & Rating in Jharkhand` |
| City Dealerships | `/dealers/:brand/:city` | `Authorized [Brand] Dealers & Showrooms in [City]` |

### 9.3 Structured Data & JSON-LD Schema Stack

Every vehicle detail page injects **6 concurrent JSON-LD Schemas** to ensure rich snippets in Google SERPs:

#### 1. Car Schema (`schema.org/Car`)
```json
{
  "@context": "https://schema.org",
  "@type": "Car",
  "name": "Maruti Suzuki Swift 2024",
  "image": "https://imgd.aeplcdn.com/664x374/n/cw/ec/159231/swift-exterior-right-front-three-quarter-3.jpeg",
  "brand": { "@type": "Brand", "name": "Maruti Suzuki" },
  "model": "Swift",
  "vehicleModelDate": "2024",
  "fuelType": "Petrol",
  "fuelConsumption": "24.8 kmpl",
  "vehicleEngine": { "@type": "EngineSpecification", "engineDisplacement": "1197 cc", "enginePower": "80 bhp" },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "INR",
    "lowPrice": "649000",
    "highPrice": "949000",
    "offerCount": "5"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "reviewCount": "412"
  }
}
```

#### 2. ItemList & BreadcrumbList Schema
Enables Google rich breadcrumb paths: `Home > New Cars > Maruti Suzuki > Swift`.

#### 3. FAQPage Schema
Injects 5+ vehicle-specific FAQs directly into Google "People Also Ask" search result accordions.

#### 4. AutoDealer / LocalBusiness Schema
Connects local dealer locations in Ranchi/Jamshedpur with Google Maps Knowledge Panels.

### 9.4 E-E-A-T Content Blueprint per Vehicle

To satisfy Google's **Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T)** guidelines, every vehicle detail page contains 1,500+ words of structured content:

1. **On-Road Price Matrix:** Exact breakdown of Ex-Showroom + RTO (Jharkhand registration charges) + Insurance + TCS + FASTag for 5 Jharkhand cities.
2. **Expert Verdict (Pros & Cons):** Unbiased editorial assessment tested on local road conditions (highways, hills, monsoon potholes).
3. **Comprehensive Specification Grid:** 35+ parameters categorized under Engine, Transmission, Fuel & Performance, Steering & Suspension, Safety, and Comfort.
4. **Variant Comparison:** Clear explanation of why to buy/skip specific trims (e.g. *"Why VXi is the value-for-money choice"*).
5. **Real Owner Reviews:** Verified customer reviews with city tags and photo proof.

### 9.5 Automated Google Indexing & XML Sitemap

- **Dynamic XML Sitemap (`public/sitemap.xml`):** Automatically indexes all 200+ car models, EV pages, city pages, dealer pages, and blog articles with `<lastmod>` and `<changefreq>`.
- **Robots.txt (`public/robots.txt`):** Directs Googlebot, Bingbot, and DuckDuckGo crawlers efficiently while disallowing private routes (`/login`, `/wishlist`).
- **Google Indexing API Script (`scripts/index-google.js`):** Pushes new vehicle launches and price changes to Google Indexing API within 60 seconds of updating the database.

### 9.6 Core Web Vitals & Page Speed Targets

Google ranks fast pages higher. BuyWheels is engineered for maximum speed:

| Metric | Target | Optimization Technique |
|--------|--------|------------------------|
| Largest Contentful Paint (LCP) | **< 1.2s** | WebP/AVIF images, CDN caching, pre-loaded hero images |
| Interaction to Next Paint (INP) | **< 50ms** | Lightweight React 18 event loops, zero main thread blocks |
| Cumulative Layout Shift (CLS) | **0.00** | Explicit width/height on all images and containers |
| First Input Delay (FID) | **< 10ms** | Code splitting and tree-shaken Lucide icon bundles |
| Performance Score | **98/100** | Vite production minification and gzip compression |

### 9.7 Programmatic SEO Matrix

```
┌─────────────────────────┐     ┌─────────────────────────┐
│     Vehicle Database    │ ──> │ Programmatic Engine     │
│   (200+ Models x 5 Cities) │     │ (Dynamic Template Generator)│
└─────────────────────────┘     └─────────────────────────┘
                                             │
                                             ▼
                                ┌─────────────────────────┐
                                │   1,000+ SEO Landing    │
                                │   Pages Indexed on Google│
                                └─────────────────────────┘
```

---

## 10. Non-Functional Requirements

- **Availability:** 99.9% uptime guaranteed via Netlify/Vercel edge CDN.
- **Security:** HTTPS everywhere, CORS protection, sanitized user inputs, secure JWT authentication.
- **Accessibility:** WCAG 2.1 Level AA compliance, aria-labels on all interactive buttons.
- **Responsiveness:** 100% fluid responsive design across Mobile (320px+), Tablet (768px+), Laptop (1024px+), and Ultrawide (1440px+).

---

## 11. Technology Stack

- **Frontend:** React 18, Vite, TypeScript, Tailwind CSS, Lucide Icons, React Router v7.
- **Backend:** Node.js, Express.js, TypeScript, CORS, Dotenv.
- **Database / ORM:** PostgreSQL / Supabase, Prisma ORM.
- **PDF Generation:** `jspdf` & `html2canvas`.
- **Analytics & SEO:** Google Analytics 4 (GA4), Google Search Console, Schema.org JSON-LD.

---

## 12. Database Schema (Prisma / PostgreSQL)

```prisma
model Vehicle {
  id              String           @id @default(uuid())
  slug            String           @unique
  category        String           // car, ev, bike, truck
  brand           String
  model           String
  year            Int
  startingPrice   Float
  emiFrom         Float
  thumbnailUrl    String
  images          String[]
  fuelTypes       String[]
  transmissions   String[]
  mileage         String
  rating          Float            @default(4.5)
  reviewCount     Int              @default(0)
  isNew           Boolean          @default(false)
  isBestSeller    Boolean          @default(false)
  isEV            Boolean          @default(false)
  seatingCapacity Int?
  bootSpaceL      Int?
  engineCC        Int?
  powerBHP        Float?
  torqueNm        Float?
  safetyRating    Int?             @default(4)
  description     String?
  pros            String[]
  cons            String[]
  variants        VehicleVariant[]
  dealerPrices    DealerPrice[]
  createdAt       DateTime         @default(now())
  updatedAt       DateTime         @updatedAt
}

model VehicleVariant {
  id           String   @id @default(uuid())
  vehicleId    String
  vehicle      Vehicle  @relation(fields: [vehicleId], references: [id])
  name         String
  price        Float
  fuelType     String
  transmission String
  mileage      String?
  features     String[]
}

model DealerPrice {
  id          String   @id @default(uuid())
  vehicleId   String
  vehicle     Vehicle  @relation(fields: [vehicleId], references: [id])
  dealerName  String
  location    String
  price       Float
  discount    Float?
  rating      Float?
}

model Lead {
  id              String   @id @default(uuid())
  name            String
  phone           String
  email           String?
  source          String
  vehicleInterest String?
  notes           String?
  stage           String   @default("New")
  createdAt       DateTime @default(now())
}
```

---

## 13. Milestones & Roadmap

- **Q3 2026 (Completed):** Comprehensive PRD baseline, full-stack `frontend/` and `backend/` codebase reorganization, 21 active page routes, GA4, robots.txt, sitemap.xml, and vehicle brand reordering.
- **Q4 2026:** Programmatic city page generation (`/vehicle/:slug/on-road-price-:city`), Google Indexing API automation, dealer SaaS portal beta launch.
- **Q1 2027:** Expansion across all 24 districts of Jharkhand and Bihar.

---

## 14. Risk Register

| Risk | Impact | Likelihood | Mitigation Strategy |
|------|--------|------------|---------------------|
| Slow Google Indexing | High | Medium | Use Google Indexing API script to force instant indexing of new pages within 60s. |
| Inaccurate Local Pricing | Medium | Low | Direct API integration with authorized dealership price sheets updated monthly. |
| Mobile Performance Drop | High | Low | Strict image compression (WebP < 100KB) and aggressive Vite code splitting. |

---

## 15. Appendix — Route & Page Inventory

| # | Route | Component | Description |
|---|-------|-----------|-------------|
| 1 | `/` | `Home.tsx` | Main Homepage with Hero, Search, Top Picks, FAQs & SEO |
| 2 | `/cars` | `Cars.tsx` / `VehicleListing.tsx` | New Cars directory with multi-filters & sorting |
| 3 | `/ev` | `EVs.tsx` / `VehicleListing.tsx` | Electric Vehicles directory |
| 4 | `/vehicle/:slug` | `VehicleDetail.tsx` | Vehicle Detail with specs, colors, dealers & PDF brochure |
| 5 | `/compare` | `Compare.tsx` | Vehicle comparison tool (up to 4 models) |
| 6 | `/offers` | `Offers.tsx` | Promotional offers & countdown deals |
| 7 | `/finance` | `Finance.tsx` | EMI Loan Calculator & SVG donut chart |
| 8 | `/insurance` | `Insurance.tsx` | Vehicle insurance quote calculator |
| 9 | `/dealers` | `Dealers.tsx` | Authorized dealerships directory in Jharkhand |
| 10 | `/test-drive` | `TestDrive.tsx` | Test drive booking & receipt generator |
| 11 | `/care` | `Care.tsx` | BuyWheels 24x7 Roadside Care & Warranty plans |
| 12 | `/blog` | `Blog.tsx` | Auto news, buying guides & comparisons |
| 13 | `/wishlist` | `Wishlist.tsx` | User saved cars wishlist |
| 14 | `/about` | `About.tsx` | Company vision, team & mission |
| 15 | `/careers` | `Careers.tsx` | Job openings & application form |
| 16 | `/contact` | `Contact.tsx` | Contact details & inquiry submission |
| 17 | `/login` | `Login.tsx` | User authentication & OTP login |
| 18 | `/privacy` | `Privacy.tsx` | Privacy Policy statement |
| 19 | `/terms` | `Terms.tsx` | Terms of Service agreement |
| 20 | `/sitemap` | `Sitemap.tsx` | User-facing HTML site map |

---
*BuyWheels Cars — Product & Engineering Team (2026)*
