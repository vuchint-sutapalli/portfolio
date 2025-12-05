import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const SITE_URL = process.env.VITE_SITE_URL || 'https://yourportfolio.com';
const CURRENT_DATE = new Date().toISOString().split('T')[0];

// Define your site routes
const routes = [
  {
    url: '',
    lastmod: CURRENT_DATE,
    changefreq: 'weekly',
    priority: '1.0'
  },
  {
    url: '#about',
    lastmod: CURRENT_DATE,
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    url: '#experience',
    lastmod: CURRENT_DATE,
    changefreq: 'monthly',
    priority: '0.8'
  },
  {
    url: '#skills',
    lastmod: CURRENT_DATE,
    changefreq: 'monthly',
    priority: '0.7'
  },
  {
    url: '#projects',
    lastmod: CURRENT_DATE,
    changefreq: 'weekly',
    priority: '0.9'
  },
  {
    url: '#contact',
    lastmod: CURRENT_DATE,
    changefreq: 'monthly',
    priority: '0.8'
  }
];

function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${SITE_URL}/${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  const outputPath = join(__dirname, '../public/sitemap.xml');
  
  try {
    writeFileSync(outputPath, sitemap);
    console.log('✅ Sitemap generated successfully at:', outputPath);
    console.log(`📝 Generated sitemap with ${routes.length} URLs`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

generateSitemap();
