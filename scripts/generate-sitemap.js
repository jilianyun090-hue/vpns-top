import fs from 'fs';
import path from 'path';

const domain = 'https://vpns-top.com';
const currentDate = new Date().toISOString().split('T')[0];

function getAllRoutes(dir, baseRoute = '') {
  let routes = [];
  if (!fs.existsSync(dir)) return routes;

  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Exclude affiliate redirect routes (/go/)
      if (file !== 'go') {
        routes = routes.concat(getAllRoutes(fullPath, `${baseRoute}/${file}`));
      }
    } else if (file === 'index.html') {
      const route = baseRoute ? `${baseRoute}/` : '/';
      routes.push(route);
    }
  }
  return routes;
}

function getPriorityAndFreq(route) {
  if (route === '/') return { priority: '1.0', changefreq: 'daily' };
  if (route === '/brands/' || route === '/blog/') return { priority: '0.9', changefreq: 'daily' };
  if (route.startsWith('/brands/')) return { priority: '0.8', changefreq: 'weekly' };
  if (route.startsWith('/blog/')) return { priority: '0.8', changefreq: 'weekly' };
  if (route.startsWith('/topics/') || route === '/compare/') return { priority: '0.8', changefreq: 'weekly' };
  if (route === '/about/') return { priority: '0.7', changefreq: 'monthly' };
  return { priority: '0.6', changefreq: 'weekly' };
}

function generateSitemap() {
  const distDir = path.join(process.cwd(), 'dist');
  const routes = getAllRoutes(distDir);
  
  // Deduplicate and sort routes
  const sortedRoutes = Array.from(new Set(routes)).sort();

  console.log(`🗺️ [Sitemap] Generating sitemap.xml for ${sortedRoutes.length} pages on ${domain}...`);

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  for (const route of sortedRoutes) {
    const loc = `${domain}${route}`;
    const { priority, changefreq } = getPriorityAndFreq(route);

    xml += `  <url>\n`;
    xml += `    <loc>${loc}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += `  </url>\n`;
  }

  xml += `</urlset>\n`;

  // Write to public/sitemap.xml and dist/sitemap.xml
  const publicSitemap = path.join(process.cwd(), 'public', 'sitemap.xml');
  const distSitemap = path.join(distDir, 'sitemap.xml');

  fs.writeFileSync(publicSitemap, xml, 'utf-8');
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(distSitemap, xml, 'utf-8');
  }

  // Also remove old root sitemap.xml if exists
  const rootSitemap = path.join(process.cwd(), 'sitemap.xml');
  if (fs.existsSync(rootSitemap)) {
    fs.unlinkSync(rootSitemap);
  }

  console.log(`✅ [Sitemap] Successfully generated public/sitemap.xml with ${sortedRoutes.length} URLs!`);
}

generateSitemap();
