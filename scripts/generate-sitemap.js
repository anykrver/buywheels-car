const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://buywheels.in';

const staticRoutes = [
  '',
  '/cars',
  '/ev',
  '/compare',
  '/offers',
  '/finance',
  '/insurance',
  '/dealers',
  '/test-drive',
  '/care',
  '/blog',
  '/wishlist',
  '/about',
  '/careers',
  '/contact',
  '/privacy',
  '/terms',
  '/sitemap'
];

const sampleSlugs = [
  'maruti-suzuki-swift',
  'hyundai-creta',
  'tata-nexon',
  'mahindra-thar',
  'kia-seltos',
  'toyota-fortuner',
  'mahindra-scorpio-n',
  'tata-punch',
  'maruti-brezza',
  'hyundai-venue',
  'honda-city',
  'kia-sonet'
];

const targetCities = ['ranchi', 'jamshedpur', 'dhanbad', 'bokaro', 'hazaribagh'];

function generateXmlSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Static routes
  staticRoutes.forEach(route => {
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}${route}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>daily</changefreq>\n`;
    xml += `    <priority>${route === '' ? '1.0' : '0.8'}</priority>\n`;
    xml += `  </url>\n`;
  });

  // Programmatic Vehicle Detail & City On-Road Price routes
  sampleSlugs.forEach(slug => {
    // Main vehicle detail
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}/vehicle/${slug}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>daily</changefreq>\n`;
    xml += `    <priority>0.9</priority>\n`;
    xml += `  </url>\n`;

    // Programmatic city price pages
    targetCities.forEach(city => {
      xml += `  <url>\n`;
      xml += `    <loc>${BASE_URL}/vehicle/${slug}/on-road-price-${city}</loc>\n`;
      xml += `    <lastmod>${currentDate}</lastmod>\n`;
      xml += `    <changefreq>weekly</changefreq>\n`;
      xml += `    <priority>0.85</priority>\n`;
      xml += `  </url>\n`;
    });
  });

  xml += `</urlset>`;

  const publicSitemapPath = path.join(__dirname, '../frontend/public/sitemap.xml');
  fs.writeFileSync(publicSitemapPath, xml, 'utf8');
  console.log(`[Sitemap Generator]: Generated ${publicSitemapPath} with ${staticRoutes.length + (sampleSlugs.length * 6)} URLs!`);
}

generateXmlSitemap();
