// SEARCH AND FILTERS — text search across brands, models and specs, plus feature chips.
function tokens(q) { return (q || '').toLowerCase().split(/\s+/).filter(Boolean) }
function modelHay(m) {
  if (!m._h) m._h = [m.name, m.series, m.subtype, m.kind ? kindLbl(m.kind) : '', (m.applications || []).join(' '), m.magnification, m.objectives, m.eyepieces, (m.illumination || []).join(' '), m.stage, m.software, m.noteworthy, m.introduced].filter(Boolean).join(' ').toLowerCase();
  return m._h;
}
const brandHay = c => (c.name + ' ' + c.shortName + ' ' + c.country).toLowerCase();
const featOk = m => S.ff.every(k => m[k]);
// A model matches when it has every selected feature and every search word appears in its brand name or its specs.
function modelOk(co, m) {
  if (!featOk(m)) return false;
  const t = tokens(S.q); if (!t.length) return true;
  const h = brandHay(co) + ' ' + modelHay(m);
  return t.every(x => h.includes(x));
}
function filtered() {
  return DB.companies.filter(c => {
    if (S.cat !== 'all' && !c.categories.includes(S.cat)) return false;
    if (S.st !== 'all' && c.status !== S.st) return false;
    if (S.q || S.ff.length) return c.models.some(m => modelOk(c, m));
    return true;
  });
}
function renderFeatureChips() {
  const el = document.getElementById('ft-filters'); if (!el) return;
  el.innerHTML = FEATURES.map(f => `<button class="ft-chip${S.ff.includes(f.k) ? ' active' : ''}" onclick="toggleFeature('${f.k}')" aria-pressed="${S.ff.includes(f.k)}">${f.label}</button>`).join('');
}
function refreshMain() {
  renderSidebar();
  if (S.view !== 'browse') return;
  const main = document.getElementById('main');
  S.co ? renderCo(main) : renderBrowseLanding(main);
}
function toggleFeature(k) {
  const i = S.ff.indexOf(k); i >= 0 ? S.ff.splice(i, 1) : S.ff.push(k);
  renderFeatureChips();
  if (S.view !== 'browse' && S.ff.length) { S.co = null; nav('#/browse'); return; }
  refreshMain();
}
function clearFilters() {
  S.q = ''; S.ff = []; const g = document.getElementById('global-search'); if (g) g.value = '';
  renderFeatureChips(); refreshMain();
}
function searchAll() { S.co = null; nav('#/browse'); }
let _searchTimer;
function handleSearch(v) {
  clearTimeout(_searchTimer); S.q = v;
  _searchTimer = setTimeout(() => {
    if (S.q.trim() && S.view !== 'browse') { S.co = null; nav('#/browse'); return; }
    refreshMain();
  }, 160);
}
function filterNote(co, mods) {
  if (!S.q && !S.ff.length) return '';
  return `<div class="filter-note">Filtering ${co.shortName}${S.q ? ` for “${esc(S.q)}”` : ''}${S.ff.length ? ` with ${S.ff.map(featLabel).join(' + ')}` : ''}: ${mods.length} of ${co.models.length} models. <a onclick="searchAll()">Search all brands</a> · <a onclick="clearFilters()">Clear</a></div>`;
}
// Cross-brand results, shown on the Browse page when no brand is selected and a search or feature filter is active.
function renderFinder(el) {
  const groups = [];
  DB.companies.forEach(c => {
    if (S.cat !== 'all' && !c.categories.includes(S.cat)) return;
    if (S.st !== 'all' && c.status !== S.st) return;
    const ms = c.models.filter(m => modelOk(c, m) && (S.cat === 'all' || m.type === S.cat));
    if (ms.length) groups.push({ c, ms });
  });
  const total = groups.reduce((s, g) => s + g.ms.length, 0);
  const what = `${S.q ? ` matching “${esc(S.q)}”` : ''}${S.ff.length ? ` with ${S.ff.map(featLabel).join(' + ')}` : ''}`;
  el.innerHTML = `<div class="view"><div class="finder-head"><div><h2>Model search</h2><p>${total} model${total !== 1 ? 's' : ''} in ${groups.length} brand${groups.length !== 1 ? 's' : ''}${what}.</p></div><button class="btn btn-outline" onclick="clearFilters()">Clear filters</button></div>
${total ? groups.map(g => `<div class="section-title">${g.c.flag} ${g.c.name} <span class="finder-count">${g.ms.length}</span></div><div class="model-grid">${g.ms.map(m => modelCard(g.c, m)).join('')}</div>`).join('') : `<div class="empty-state"><h3>No models match</h3><p>Try fewer words, or remove a feature filter.</p></div>`}</div>`;
}
