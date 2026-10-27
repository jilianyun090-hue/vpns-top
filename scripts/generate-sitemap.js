import fs from 'fs';
import path from 'path';
import astroConfig from '../astro.config.mjs';

if (!astroConfig.site) {
  throw new Error('[Sitemap] astro.config.mjs must define a canonical site URL.');
}

const siteOrigin = new URL(astroConfig.site).origin;

function readTag(html, expression) {
  return html.match(expression)?.[0] ?? '';
}

function readAttribute(tag, attribute) {
  const match = tag.match(new RegExp(`\\b${attribute}=["']([^"']*)["']`, 'i'));
  return match?.[1] ?? '';
}

function escapeXml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function getIndexablePages(dir) {
  const pages = [];
  if (!fs.existsSync(dir)) return pages;

  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Affiliate redirect pages are intentionally noindex and stay out of the sitemap.
      if (file !== 'go') pages.push(...getIndexablePages(fullPath));
      continue;
    }

    if (file !== 'index.html') continue;

    const html = fs.readFileSync(fullPath, 'utf8');
    const robotsTag = readTag(html, /<meta\b[^>]*\bname=["']robots["'][^>]*>/i);
    const robots = readAttribute(robotsTag, 'content').toLowerCase();
    if (robots.split(/[\s,]+/).includes('noindex')) continue;

    const canonicalTag = readTag(html, /<link\b[^>]*\brel=["']canonical["'][^>]*>/i);
    const canonical = readAttribute(canonicalTag, 'href');
    if (!canonical) continue;

    try {
      const url = new URL(canonical);
      if (url.origin !== siteOrigin || url.search || url.hash) continue;

      const modifiedTag = readTag(html, /<meta\b[^>]*\bproperty=["']article:modified_time["'][^>]*>/i);
      const publishedTag = readTag(html, /<meta\b[^>]*\bproperty=["']article:published_time["'][^>]*>/i);
      const dateValue = readAttribute(modifiedTag || publishedTag, 'content');
      const date = dateValue ? new Date(dateValue) : null;

      pages.push({
        loc: url.href,
        lastmod: date && !Number.isNaN(date.valueOf()) ? date.toISOString() : undefined,
      });
    } catch {
      console.warn(`[Sitemap] Skipping invalid canonical URL in ${fullPath}`);
    }
  }

  return pages;
}

function generateSitemap() {
  const distDir = path.join(process.cwd(), 'dist');
  const pages = getIndexablePages(distDir);
  const uniquePages = new Map(pages.map((page) => [page.loc, page]));
  const sortedPages = [...uniquePages.values()].sort((a, b) => a.loc.localeCompare(b.loc));

  console.log(`🗺️ [Sitemap] Generating sitemap.xml for ${sortedPages.length} indexable pages on ${siteOrigin}...`);

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  for (const page of sortedPages) {
    xml += `  <url>\n`;
    xml += `    <loc>${escapeXml(page.loc)}</loc>\n`;
    if (page.lastmod) xml += `    <lastmod>${escapeXml(page.lastmod)}</lastmod>\n`;
    xml += `  </url>\n`;
  }

  xml += `</urlset>\n`;

  const publicSitemap = path.join(process.cwd(), 'public', 'sitemap.xml');
  const distSitemap = path.join(distDir, 'sitemap.xml');
  fs.writeFileSync(publicSitemap, xml, 'utf8');
  if (fs.existsSync(distDir)) fs.writeFileSync(distSitemap, xml, 'utf8');

  const rootSitemap = path.join(process.cwd(), 'sitemap.xml');
  if (fs.existsSync(rootSitemap)) fs.unlinkSync(rootSitemap);

  console.log(`✅ [Sitemap] Successfully generated public/sitemap.xml with ${sortedPages.length} indexable URLs!`);
}

generateSitemap();
