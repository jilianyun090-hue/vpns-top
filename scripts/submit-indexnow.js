import fs from 'fs';
import path from 'path';
import https from 'https';

const host = 'vpns-top.com';
const baseUrl = `https://${host}`;
const key = '05709fa9015c42abb8ed05abca174cdd';
const keyLocation = `${baseUrl}/${key}.txt`;

// IndexNow API endpoints
const endpoints = [
  'api.indexnow.org',
  'www.bing.com'
];

function getAllUrls(dir, baseRoute = '') {
  let urls = [];
  if (!fs.existsSync(dir)) return urls;
  
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'go') { // exclude affiliate redirect routes
        urls = urls.concat(getAllUrls(fullPath, `${baseRoute}/${file}`));
      }
    } else if (file === 'index.html') {
      const route = baseRoute ? `${baseRoute}/` : '/';
      urls.push(`${baseUrl}${route}`);
    }
  }
  return urls;
}

async function submitIndexNow() {
  const distDir = path.join(process.cwd(), 'dist');
  let urlList = getAllUrls(distDir);
  
  if (urlList.length === 0) {
    // Fallback URL list if dist is not yet generated
    urlList = [
      `${baseUrl}/`,
      `${baseUrl}/brands/`,
      `${baseUrl}/blog/`,
      `${baseUrl}/topics/`,
      `${baseUrl}/compare/`,
      `${baseUrl}/about/`
    ];
  }

  // Deduplicate
  urlList = Array.from(new Set(urlList));

  const payload = JSON.stringify({
    host,
    key,
    keyLocation,
    urlList
  });

  console.log(`🚀 [IndexNow] Submitting ${urlList.length} URLs to IndexNow...`);

  for (const endpoint of endpoints) {
    const options = {
      hostname: endpoint,
      port: 443,
      path: '/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(payload)
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        if (res.statusCode === 200 || res.statusCode === 202) {
          console.log(`✅ [IndexNow] ${endpoint} accepted submission! (Status: ${res.statusCode})`);
        } else {
          console.log(`⚠️ [IndexNow] ${endpoint} returned status: ${res.statusCode} ${body}`);
        }
      });
    });

    req.on('error', (err) => {
      console.log(`⚠️ [IndexNow] Error submitting to ${endpoint}:`, err.message);
    });

    req.write(payload);
    req.end();
  }
}

submitIndexNow();
