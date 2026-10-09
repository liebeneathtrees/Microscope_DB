#!/usr/bin/env node
// MicroscopeDB data validator. Loads the data exactly as the browser does (core → manifest → brands → datasets)
// and checks it. Usage: node tools/validate.js [--quiet]    Exit code 1 if there are errors.
const fs = require('fs'), vm = require('vm'), path = require('path');
const root = path.resolve(__dirname, '..');
const read = f => fs.readFileSync(path.join(root, 'data', f), 'utf8');
const ctx = vm.createContext({ console });
const run = (code, name) => vm.runInContext(code, ctx, { filename: name });
run(read('core.js') + '\n;', 'core.js'); run(read('manifest.js'), 'manifest.js');
const man = vm.runInContext('MDB.manifest', ctx);
for (const b of man.brands) run(read(`brands/${b}.js`), `brands/${b}.js`);
for (const d of man.datasets) run(read(`${d}.js`), `${d}.js`);
const DB = vm.runInContext('DB', ctx), MDB = vm.runInContext('MDB', ctx), COLL = vm.runInContext('typeof MY_COLLECTION!=="undefined"?MY_COLLECTION:[]', ctx);
const E = MDB.ENUMS, errors = [], warns = [];
const err = (w, m) => errors.push(`${w}: ${m}`), warn = (w, m) => warns.push(`${w}: ${m}`);
const brandIds = new Set(DB.companies.map(c => c.id)), models = DB.companies.flatMap(c => c.models.map(m => ({ m, c })));
const modelIds = new Set(models.map(x => x.m.id)), srcIds = new Set(DB.sources.map(s => s.id));
const inEnum = (v, list) => list.includes(v);
const thisYear = new Date().getFullYear();

// brands
const REQ_CO = ['id', 'name', 'shortName', 'flag', 'country', 'founded', 'status', 'featured', 'hq', 'categories', 'overview', 'oem', 'models'];
if (new Set(DB.companies.map(c => c.id)).size !== DB.companies.length) err('brands', 'duplicate brand id');
for (const c of DB.companies) {
  for (const k of REQ_CO) if (c[k] === undefined) err(c.id, `missing brand field ${k}`);
  if (!inEnum(c.status, E.status)) err(c.id, `bad status ${c.status}`);
  if (typeof c.featured !== 'boolean') err(c.id, 'featured must be true/false');
  const cats = ['compound', 'stereo'].filter(t => c.models.some(m => m.type === t));
  if (JSON.stringify(cats) !== JSON.stringify(c.categories)) err(c.id, `categories ${JSON.stringify(c.categories)} should be ${JSON.stringify(cats)}`);
  for (const s of c.sources || []) if (!srcIds.has(s)) err(c.id, `unknown source ${s}`);
  if (!man.brands.includes(c.id)) err(c.id, 'brand not listed in data/manifest.js');
}
// models
const REQ = ['id', 'name', 'series', 'type', 'subtype', 'introduced', 'discontinued', 'price_tier', 'price_new', 'price_used', 'illumination', 'magnification', 'objectives', 'eyepieces', 'stage', 'fluorescence', 'phase_contrast', 'darkfield', 'dic', 'motorized', 'inverted', 'camera_port', 'software', 'applications', 'noteworthy', 'oem_source'];
const seen = new Map(); const priceRe = /^(\$|€)\d[\d,]*(\.\d+)?(–(\$|€)\d[\d,]*(\.\d+)?)?\+?$/;
const unparsed = [], noLight = [], discPrice = [];
for (const { m, c } of models) {
  const w = m.id || `${c.id}#?`;
  if (seen.has(m.id)) err(w, `duplicate id (also in ${seen.get(m.id)})`); seen.set(m.id, c.id);
  if (!String(m.id).startsWith(c.id + '-')) err(w, `id should start with "${c.id}-"`);
  for (const k of REQ) if (m[k] === undefined) err(w, `missing field ${k}`);
  if (!inEnum(m.type, E.type)) err(w, `bad type ${m.type}`);
  if (m.kind !== undefined && !inEnum(m.kind, E.kind)) err(w, `bad kind ${m.kind}`);
  if (!inEnum(m.price_tier, E.price_tier)) err(w, `bad price_tier ${JSON.stringify(m.price_tier)}`);
  if (typeof m.introduced !== 'number') err(w, 'introduced must be a year (number)');
  if (m.introduced_approx !== undefined && typeof m.introduced_approx !== 'boolean') err(w, 'introduced_approx must be true/false');
  if (typeof m.discontinued !== 'boolean') err(w, `discontinued must be true/false, got ${JSON.stringify(m.discontinued)}`);
  const dy = m.discontinued_year;
  if (dy !== null && dy !== undefined && typeof dy !== 'number') err(w, 'discontinued_year must be a number or null');
  if (m.discontinued === false && dy != null) err(w, 'discontinued_year set on a current model');
  if (dy != null && m.introduced > dy) err(w, `introduced ${m.introduced} is after discontinued_year ${dy}`);
  if (dy != null && dy > thisYear) err(w, `discontinued_year ${dy} is in the future`);
  if (m.introduced > thisYear) err(w, `introduced ${m.introduced} is in the future`);
  if (m.discontinued_approx && !m.discontinued_note) warn(w, 'discontinued_approx without discontinued_note');
  if (m.introduced < c.founded && !c.founded_note) warn(w, `introduced ${m.introduced} is before the brand was founded (${c.founded})`);
  for (const k of ['price_new', 'price_used']) if (m[k] && !priceRe.test(m[k])) warn(w, `${k} not in standard format: ${JSON.stringify(m[k])}`);
  if (/[€]/.test((m.price_new || '') + (m.price_used || '')) !== (m.currency === 'EUR')) err(w, 'currency EUR must match € prices');
  for (const l of m.light_sources || []) if (!inEnum(l, E.light_sources)) err(w, `bad light_sources value ${l}`);
  if (m.light_sources === undefined) err(w, 'missing light_sources'); else if (!m.light_sources.length) noLight.push(w);
  if (m.mag_min == null && m.magnification) unparsed.push(w);
  if (m.discontinued && m.price_new) discPrice.push(w);
  for (const s of m.sources || []) if (!srcIds.has(s)) err(w, `unknown source ${s}`);
  if (m.oem_source && !brandIds.has(m.oem_source)) err(w, `oem_source ${m.oem_source} is not a brand`);
}
// genealogy
DB.oem_relations.forEach((r, i) => {
  const w = `genealogy[${i}] ${r.source}>${r.target} ${r.year}`;
  if (!brandIds.has(r.source)) err(w, 'unknown source brand'); if (!brandIds.has(r.target)) err(w, 'unknown target brand');
  if (!inEnum(r.type, E.relation)) err(w, `bad type ${r.type}`); if (typeof r.year !== 'number') err(w, 'year must be a number');
  for (const s of r.sources || []) if (!srcIds.has(s)) err(w, `unknown source ${s}`);
});
// sources, optics, lineage, review, collection, gaps
if (srcIds.size !== DB.sources.length) err('sources', 'duplicate source id');
for (const s of DB.sources) if (!['verified', 'cited'].includes(s.checked)) err(s.id, `bad checked value ${s.checked}`);
const optOf = {};
for (const o of DB.optics) {
  if (!brandIds.has(o.brand)) err(o.id, 'unknown brand'); if (!inEnum(o.confidence, E.confidence)) err(o.id, `bad confidence ${o.confidence}`);
  if (o.source && !srcIds.has(o.source)) err(o.id, `unknown source ${o.source}`);
  for (const e of o.models) { const id = typeof e === 'string' ? e : e.id; if (!modelIds.has(id)) err(o.id, `unknown model ${id}`); (optOf[id] = optOf[id] || []).push({ o: o.id, note: typeof e === 'object' }); }
}
for (const [id, list] of Object.entries(optOf)) if (list.length > 1 && !list.every(x => x.note)) err('optics', `${id} is in ${list.length} generations without a note on each`);
const flat = n => Array.isArray(n) ? n.flatMap(flat) : [n];
for (const l of DB.lineage) {
  if (l.chain.length < 2) err(l.id, 'chain needs at least 2 nodes');
  for (const n of l.chain.flatMap(flat)) if (typeof n === 'string' && !modelIds.has(n)) err(l.id, `unknown model ${n}`); else if (typeof n === 'object' && !n.name) err(l.id, 'ghost node needs a name');
}
const revIds = new Set();
for (const r of DB.review) {
  if (revIds.has(r.id)) err(r.id, 'duplicate review id'); revIds.add(r.id);
  if (r.scope === 'model' && !modelIds.has(r.target)) err(r.id, `unknown model ${r.target}`);
  if (r.scope === 'brand' && !brandIds.has(r.target)) err(r.id, `unknown brand ${r.target}`);
  for (const s of r.sources || []) if (!srcIds.has(s)) err(r.id, `unknown source ${s}`);
}
for (const c of COLL) if (!models.some(x => x.c.id === c.coId && x.m.id === c.mId)) err('collection', `${c.coId}/${c.mId} not found`);
for (const b of Object.keys(DB.gaps.brands)) if (!brandIds.has(b)) err('gaps', `unknown brand ${b}`);

// summary
const open = DB.review.filter(r => r.status === 'open').length;
const pct = n => `${n}/${models.length}`;
const lines = [
  `Brands ${DB.companies.length} · models ${models.length} · genealogy events ${DB.oem_relations.length} · sources ${DB.sources.length} · optics generations ${DB.optics.length} · lineage chains ${DB.lineage.length}`,
  `Coverage: with sources ${pct(models.filter(x => (x.m.sources || []).length).length)} · with optics ${pct(Object.keys(optOf).length)} · in a lineage chain ${pct(new Set(DB.lineage.flatMap(l => l.chain.flatMap(flat)).filter(n => typeof n === 'string')).size)} · estimated discontinued year ${models.filter(x => x.m.discontinued_approx).length} · open review items ${open}`
];
if (!process.argv.includes('--quiet')) {
  console.log(lines.join('\n'));
  if (noLight.length) console.log(`Note: ${noLight.length} models have no recognised light source in their illumination text.`);
  if (unparsed.length) console.log(`Note: ${unparsed.length} models have a magnification text with no parseable range (mag_min/mag_max null).`);
  if (discPrice.length) console.log(`Note: ${discPrice.length} discontinued models still carry a new price.`);
  warns.forEach(w => console.log('WARN  ' + w));
}
errors.forEach(e => console.log('ERROR ' + e));
console.log(errors.length ? `\n${errors.length} error(s), ${warns.length} warning(s)` : `\nOK: no errors${warns.length ? `, ${warns.length} warning(s)` : ''}`);
process.exit(errors.length ? 1 : 0);
