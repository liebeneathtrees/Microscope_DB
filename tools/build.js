#!/usr/bin/env node
// Builds dist/MicroscopeDB_standalone.html: one self-contained file (CSS, JS and all data inlined) that opens
// from a double-click in any browser with no other files. Usage: node tools/build.js
const fs = require('fs'), path = require('path');
const root = path.resolve(__dirname, '..'), read = f => fs.readFileSync(path.join(root, f), 'utf8');
const safe = js => js.replace(/<\/script/gi, '<\\/script');
let html = read('index.html');
html = html.replace('<link rel="stylesheet" href="css/styles.css">', () => `<style>\n${read('css/styles.css')}</style>`);
const manifest = (() => { const m = {}; new Function('MDB', read('data/manifest.js'))(m); return m.manifest; })();
const dataFiles = [...manifest.brands.map(b => `data/brands/${b}.js`), ...manifest.datasets.map(d => `data/${d}.js`)];
html = html.replace(/<script src="([^"]+)"><\/script>/g, (tag, src) => {
  let out = `<script>\n${safe(read(src))}\n</script>`;
  if (src === 'data/manifest.js') out += '\n' + dataFiles.map(f => `<script>\n${safe(read(f))}\n</script>`).join('\n') + '\n<script>MDB.inlined = true;</script>';
  return out;
});
fs.mkdirSync(path.join(root, 'dist'), { recursive: true });
const out = path.join(root, 'dist', 'MicroscopeDB_standalone.html'); fs.writeFileSync(out, html);
console.log(`Wrote dist/MicroscopeDB_standalone.html (${Math.round(html.length / 1024)} KB, ${dataFiles.length} data files inlined)`);
