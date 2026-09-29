import { chromium } from 'playwright';
import { writeFileSync } from 'fs';

const svg = `<!doctype html><html><head><style>
html,body{margin:0;background:#333}
.row{display:flex;gap:16px;align-items:center;padding:16px}
</style></head><body>
<div class="row">
  <img src="http://127.0.0.1:8080/favicon.svg" width="16" height="16">
  <img src="http://127.0.0.1:8080/favicon.svg" width="32" height="32">
  <img src="http://127.0.0.1:8080/favicon.svg" width="64" height="64">
  <img src="http://127.0.0.1:8080/favicon.svg" width="180" height="180">
</div>
</body></html>`;

const browser = await chromium.launch({ args: ['--no-sandbox'] });
const page = await browser.newPage({ viewport: { width: 400, height: 240 } });
await page.setContent(svg, { waitUntil: 'networkidle' });
await page.screenshot({ path: '/workspace/.grok/favicon-raster.png' });
await browser.close();
console.log('rasterized');
