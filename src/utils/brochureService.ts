import jsPDF from 'jspdf';
import type { Vehicle } from '../types';
import { formatPrice } from './data';

// Known direct official brochure URLs for popular car models
export const OFFICIAL_BROCHURE_URLS: Record<string, string> = {
  'maruti-swift-2024': 'https://www.marutisuzuki.com/-/media/drive/swift/swift_brochure.pdf',
  'hyundai-creta-2024': 'https://www.hyundai.com/content/dam/hyundai/in/en/data/connect-to-service/brochure/creta.pdf',
  'tata-nexon-2024': 'https://cars.tatamotors.com/images/nexon/nexon-brochure.pdf',
  'mahindra-scorpio-n': 'https://auto.mahindra.com/on/demandware.static/-/Sites-mahindra-storefront-catalog/default/dw7e651817/brochures/Scorpio-N.pdf',
  'toyota-fortuner-2024': 'https://www.toyotabharat.com/documents/brochures/fortuner-brochure.pdf',
  'honda-city-2024': 'https://www.hondacarindia.com/e-brochure/City.pdf',
  'maruti-brezza-2024': 'https://www.marutisuzuki.com/-/media/drive/brezza/brezza_brochure.pdf',
  'mahindra-thar-2024': 'https://auto.mahindra.com/on/demandware.static/-/Sites-mahindra-storefront-catalog/default/brochures/Thar.pdf',
  'tata-punch-2024': 'https://cars.tatamotors.com/images/punch/punch-brochure.pdf',
  'kia-seltos-2024': 'https://www.kia.com/content/dam/kwcms/in/en/images/brochure/seltos-brochure.pdf',
};

/**
 * Generates and triggers download of an official PDF brochure for any vehicle.
 */
export async function downloadVehicleBrochure(vehicle: Vehicle): Promise<void> {
  // If a direct official PDF URL is mapped, we can open it in a new tab or fetch it
  const officialPdfUrl = OFFICIAL_BROCHURE_URLS[vehicle.slug];

  if (officialPdfUrl) {
    try {
      const windowRef = window.open(officialPdfUrl, '_blank');
      if (windowRef) {
        // Successfully opened direct official PDF
        return;
      }
    } catch {
      // Fallback to dynamic PDF generation if window popup blocked or link fails
    }
  }

  // Generate dynamic, complete PDF brochure using jsPDF
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 14;
  let y = 14;

  // 1. Header Banner
  doc.setFillColor(15, 41, 66); // Dark Navy #0f2942
  doc.rect(0, 0, pageWidth, 26, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.text('BUYWHEELS OFFICIAL E-BROCHURE', margin, 12);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(200, 220, 240);
  doc.text('Jharkhand Premier Car Store · Ranchi | Jamshedpur | Dhanbad | Bokaro', margin, 18);

  // Phone Helpline top right
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(255, 215, 0); // Gold
  doc.text('Helpline: +91 92969 61232', pageWidth - margin, 15, { align: 'right' });

  y = 34;

  // 2. Vehicle Model Title Section
  doc.setFillColor(245, 247, 250);
  doc.roundedRect(margin, y, pageWidth - margin * 2, 28, 3, 3, 'F');

  doc.setTextColor(15, 41, 66);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text(`${vehicle.brand} ${vehicle.model} (${vehicle.year})`, margin + 5, y + 10);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(100, 116, 139);
  const subtitle = `${vehicle.category.toUpperCase()} · ${vehicle.fuelTypes.join(', ')} · ${vehicle.transmissions.join(', ')}`;
  doc.text(subtitle, margin + 5, y + 18);

  // Rating badge
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(234, 88, 12); // Orange/Warning
  doc.text(`Rating: ${vehicle.rating} / 5 ★ (${vehicle.reviewCount} Reviews)`, pageWidth - margin - 5, y + 14, { align: 'right' });

  y += 34;

  // 3. Price & EMI Summary Box
  const colWidth = (pageWidth - margin * 2 - 8) / 3;

  // Starting Price Box
  doc.setFillColor(238, 242, 255);
  doc.roundedRect(margin, y, colWidth, 22, 2, 2, 'F');
  doc.setFontSize(8);
  doc.setTextColor(79, 70, 229);
  doc.text('STARTING PRICE (EX-SHOWROOM)', margin + 4, y + 6);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text(formatPrice(vehicle.startingPrice), margin + 4, y + 15);

  // Est EMI Box
  doc.setFillColor(240, 253, 244);
  doc.roundedRect(margin + colWidth + 4, y, colWidth, 22, 2, 2, 'F');
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(22, 101, 52);
  doc.text('EST. MONTHLY EMI', margin + colWidth + 8, y + 6);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text(`₹${vehicle.emiFrom.toLocaleString()}/mo*`, margin + colWidth + 8, y + 15);

  // Safety Rating Box
  doc.setFillColor(254, 243, 199);
  doc.roundedRect(margin + (colWidth + 4) * 2, y, colWidth, 22, 2, 2, 'F');
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(146, 64, 14);
  doc.text('SAFETY RATING', margin + (colWidth + 4) * 2 + 4, y + 6);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  const safetyText = vehicle.safetyRating ? `${vehicle.safetyRating} Star NCAP` : 'Certified Safe';
  doc.text(safetyText, margin + (colWidth + 4) * 2 + 4, y + 15);

  y += 28;

  // 4. Technical Specifications Table
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 41, 66);
  doc.text('Technical Specifications', margin, y);
  y += 4;

  const specsData = [
    ['Engine Displacement', vehicle.engineCC ? `${vehicle.engineCC} cc` : 'N/A', 'Certified Mileage', vehicle.mileage],
    ['Max Power', vehicle.powerBHP ? `${vehicle.powerBHP} bhp` : 'N/A', 'Max Torque', vehicle.torqueNm ? `${vehicle.torqueNm} Nm` : 'N/A'],
    ['Seating Capacity', `${vehicle.seatingCapacity || 5} Persons`, 'Boot Space', vehicle.bootSpaceL ? `${vehicle.bootSpaceL} L` : 'N/A'],
    ['Fuel Options', vehicle.fuelTypes.join(', '), 'Transmissions', vehicle.transmissions.join(', ')],
    ['Ground Clearance', vehicle.groundClearance ? `${vehicle.groundClearance} mm` : 'Standard', 'Model Year', `${vehicle.year}`],
  ];

  doc.setFontSize(8.5);
  specsData.forEach((row, idx) => {
    const rowY = y + idx * 7.5;
    if (idx % 2 === 0) {
      doc.setFillColor(248, 250, 252);
      doc.rect(margin, rowY - 4.5, pageWidth - margin * 2, 7.5, 'F');
    }

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(100, 116, 139);
    doc.text(row[0], margin + 4, rowY);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(row[1], margin + 45, rowY);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(100, 116, 139);
    doc.text(row[2], margin + 95, rowY);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(row[3], margin + 140, rowY);
  });

  y += specsData.length * 7.5 + 8;

  // 5. Key Features List
  if (vehicle.features && vehicle.features.length > 0) {
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 41, 66);
    doc.text('Key Features & Equipment', margin, y);
    y += 6;

    doc.setFontSize(8.5);
    const featureColWidth = (pageWidth - margin * 2) / 2;
    vehicle.features.slice(0, 10).forEach((feat, idx) => {
      const col = idx % 2;
      const row = Math.floor(idx / 2);
      const featX = margin + col * featureColWidth + 2;
      const featY = y + row * 6;

      doc.setFillColor(37, 99, 235); // Blue dot
      doc.circle(featX, featY - 1, 1, 'F');

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(51, 65, 85);
      doc.text(feat, featX + 4, featY);
    });

    y += Math.ceil(Math.min(vehicle.features.length, 10) / 2) * 6 + 8;
  }

  // 6. Color Options
  if (vehicle.colors && vehicle.colors.length > 0) {
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 41, 66);
    doc.text('Available Color Options', margin, y);
    y += 5;

    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    doc.text(vehicle.colors.join('  •  '), margin + 2, y);

    y += 10;
  }

  // 7. Variants Lineup Section
  if (vehicle.variants && vehicle.variants.length > 0) {
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 41, 66);
    doc.text('Variant Lineup & Price List', margin, y);
    y += 6;

    // Table Header
    doc.setFillColor(15, 41, 66);
    doc.rect(margin, y - 4, pageWidth - margin * 2, 7, 'F');
    doc.setFontSize(8);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(255, 255, 255);

    doc.text('VARIANT', margin + 4, y);
    doc.text('FUEL', margin + 65, y);
    doc.text('TRANSMISSION', margin + 95, y);
    doc.text('EX-SHOWROOM', margin + 145, y);

    y += 5;

    vehicle.variants.slice(0, 7).forEach((v, idx) => {
      const varY = y + idx * 6;
      if (idx % 2 === 1) {
        doc.setFillColor(248, 250, 252);
        doc.rect(margin, varY - 4, pageWidth - margin * 2, 6, 'F');
      }

      doc.setFont('helvetica', 'bold');
      doc.setTextColor(15, 23, 42);
      doc.text(v.name, margin + 4, varY);

      doc.setFont('helvetica', 'normal');
      doc.setTextColor(71, 85, 105);
      doc.text(v.fuelType, margin + 65, varY);
      doc.text(v.transmission, margin + 95, varY);

      doc.setFont('helvetica', 'bold');
      doc.setTextColor(37, 99, 235);
      doc.text(formatPrice(v.price), margin + 145, varY);
    });

    y += Math.min(vehicle.variants.length, 7) * 6 + 10;
  }

  // 8. Bottom Footer Contact Card
  doc.setFillColor(241, 245, 249);
  doc.roundedRect(margin, 268, pageWidth - margin * 2, 20, 2, 2, 'F');

  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 41, 66);
  doc.text('Buywheels India - Authorized Multibrand Car Partner', margin + 5, 275);

  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 116, 139);
  doc.text('Ranchi Head Office: Main Road, Near Overbridge, Ranchi, Jharkhand - 834001', margin + 5, 281);
  doc.text('Phone: +91 92969 61232  |  Email: sales@buywheels.in  |  Web: www.buywheels.in', margin + 5, 285);

  // Trigger browser download
  const filename = `${vehicle.brand.replace(/\s+/g, '_')}_${vehicle.model.replace(/\s+/g, '_')}_Official_Brochure.pdf`;
  doc.save(filename);
}
