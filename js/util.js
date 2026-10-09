// SHARED STATE AND HELPERS
const S = { view: 'home', co: null, cat: 'all', st: 'all', q: '', mf: 'all', ff: [], cmp: [], modal: null, baseHash: '#/', rendered: false, dv: { tab: 'review', brand: '' } };
const G = id => DB.companies.find(c => c.id === id);
const GM = (cid, mid) => { const c = G(cid); return c ? c.models.find(m => m.id === mid) : null };
const inC = (cid, mid) => S.cmp.some(i => i.c === cid && i.m === mid);
const pillLabel = { compound: 'Compound', stereo: 'Stereo' };
const pills = cats => (cats || []).map(c => `<span class="cat-pill pill-${c}">${pillLabel[c] || c}</span>`).join('');
const tierLbl = t => ({ budget: 'Budget', mid: 'Mid-Range', premium: 'Premium', ultra: 'Ultra' }[t] || t);
const KIND_LABEL = { macroscope: 'Macroscope', digital: 'Digital', surgical: 'Surgical', slide_scanner: 'Slide scanner', laser_scanning: 'Laser scanning', super_resolution: 'Super-resolution' };
const kindLbl = k => KIND_LABEL[k] || k;
const FEATURES = [{ k: 'fluorescence', label: 'Fluorescence' }, { k: 'phase_contrast', label: 'Phase' }, { k: 'dic', label: 'DIC' }, { k: 'inverted', label: 'Inverted' }, { k: 'motorized', label: 'Motorized' }];
const featLabel = k => (FEATURES.find(f => f.k === k) || { label: k }).label;

// Introduction year, with a tilde when it is approximate.
const introLabel = m => (m.introduced_approx ? '~' : '') + m.introduced;
// Discontinued label: " (disc. 1990)", " (disc. ~1987)" for an estimate, " (disc.)" when the year is unknown.
function discLabel(m) { if (!m.discontinued) return ''; const y = m.discontinued_year; return y ? ` (disc. ${m.discontinued_approx ? '~' : ''}${y})` : ' (disc.)'; }

// Escape text typed by the visitor (search box, saved list). Data from the data files is trusted, as before.
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const CONF_TITLE = { verified: 'Checked against the source cited here', cited: 'Taken from a source cited in the research notes; not re-checked', approx: 'Approximate: from general knowledge, not yet checked against a manual or brochure' };
const confBadge = c => `<span class="conf conf-${c}" title="${CONF_TITLE[c] || ''}">${c === 'approx' ? 'approx.' : c}</span>`;
const sugBadge = c => `<span class="sug sug-${c}" title="How sure the suggestion is">${c} confidence</span>`;

// ---- derived indexes, built once after the data has loaded ----
MDB.derive = function () {
  const add = (map, k, v) => { (map.get(k) || map.set(k, []).get(k)).push(v); };
  MDB.byModel = new Map(); DB.companies.forEach(c => c.models.forEach(m => MDB.byModel.set(m.id, { co: c, m })));
  MDB.srcById = new Map(DB.sources.map(s => [s.id, s]));
  MDB.opticsOf = new Map();
  DB.optics.forEach(o => o.models.forEach(e => add(MDB.opticsOf, typeof e === 'string' ? e : e.id, { o, note: typeof e === 'string' ? '' : (e.note || '') })));
  MDB.lineageOf = new Map();
  const flat = n => Array.isArray(n) ? n.flatMap(flat) : [n];
  const norm = n => typeof n === 'string' ? { id: n, name: (MDB.byModel.get(n) || { m: { name: n } }).m.name } : { name: n.name, ghost: true };
  DB.lineage.forEach(l => { const groups = l.chain.map(g => flat(g).map(norm)); groups.forEach((g, i) => g.forEach(n => { if (n.id) add(MDB.lineageOf, n.id, { entry: l, groups, idx: i, prev: groups[i - 1] || [], next: groups[i + 1] || [] }); })); });
  MDB.reviewIdx = new Map();
  DB.review.filter(r => r.status === 'open').forEach(r => add(MDB.reviewIdx, r.scope + ':' + r.target, r));
  MDB.reviewFor = (scope, id) => MDB.reviewIdx.get(scope + ':' + id) || [];
};
const hasNotes = id => MDB.reviewFor('model', id).length > 0;

// One-line text versions used by the compare table
function opticsLine(o) {
  const sys = o.system === 'finite' ? `Finite, ${o.tube_length_mm} mm tube` : `Infinity${o.tube_lens_mm ? `, ${o.tube_lens_mm} mm tube lens` : ''}`;
  return `${sys} · ${o.thread} thread · ${o.parfocal_mm ? o.parfocal_mm + ' mm parfocal' : 'parfocal n/a'}`;
}
function opticsText(m) {
  const l = MDB.opticsOf.get(m.id); if (!l) return '—';
  return l.map(({ o, note }) => `${opticsLine(o)}${note ? ' (' + note.replace(/\.$/, '') + ')' : ''}`).join('<br>') + ' ' + confBadge('approx');
}
function lineageText(m) {
  const l = MDB.lineageOf.get(m.id); if (!l) return '—';
  const nm = n => n.name + (n.ghost ? ' (not listed)' : '');
  return l.map(e => `${e.prev.map(nm).join(' / ') || '—'} → <strong>this</strong> → ${e.next.map(nm).join(' / ') || '—'}`).join('<br>');
}
