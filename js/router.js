// ROUTER — every page has a URL (#/brand/zeiss, #/model/zeiss/zeiss-axioplan, #/compare?m=…), so pages can be linked, bookmarked and used with the back button.
function parseHash(h) {
  h = (h || '').replace(/^#\/?/, ''); const [path, query = ''] = h.split('?');
  const p = path.split('/').filter(Boolean).map(decodeURIComponent), q = new URLSearchParams(query);
  if (!p.length) return { view: 'home' };
  switch (p[0]) {
    case 'browse': return { view: 'browse' };
    case 'brand': return { view: 'browse', co: p[1] };
    case 'model': return { view: 'browse', co: p[1], model: p[2], modal: true };
    case 'compare': return { view: 'compare', items: (q.get('m') || '').split(',').filter(Boolean).map(s => { const [c, m] = s.split(':'); return { c, m }; }) };
    case 'data': return { view: 'data', tab: p[1] || 'review', brand: q.get('brand') || '' };
    case 'oem': case 'guide': case 'collection': return { view: p[0] };
    default: return { view: 'home' };
  }
}
const compareHash = () => '#/compare' + (S.cmp.length ? '?m=' + S.cmp.map(i => i.c + ':' + i.m).join(',') : '');
function nav(hash) { if (location.hash === hash || (!location.hash && hash === '#/')) applyRoute(); else location.hash = hash; }
function syncCompareHash() { if (S.view === 'compare') history.replaceState(null, '', compareHash()); }
function paintTabs() { document.querySelectorAll('.header-tab').forEach(t => t.classList.remove('active')); const t = document.getElementById('tab-' + S.view); if (t) t.classList.add('active'); }

function render() {
  renderSidebar();
  const main = document.getElementById('main');
  if (S.view === 'home') renderHome(main);
  else if (S.view === 'browse') { S.co ? renderCo(main) : renderBrowseLanding(main); }
  else if (S.view === 'compare') renderCompare(main);
  else if (S.view === 'oem') renderOEM(main);
  else if (S.view === 'guide') renderGuide(main);
  else if (S.view === 'collection') renderCollection(main);
  else if (S.view === 'data') renderData(main);
  updateTray();
}
function hideModal() { document.getElementById('model-modal').classList.remove('open'); S.modal = null; }

function applyRoute() {
  const r = parseHash(location.hash), main = document.getElementById('main');
  if (r.co && !G(r.co)) { r.co = null; r.modal = false; }
  if (r.modal && !GM(r.co, r.model)) r.modal = false;
  if (r.view === 'compare' && r.items && r.items.length) { S.cmp = r.items.filter(i => GM(i.c, i.m)).slice(0, 4); updateTray(); updateBadge(); }
  if (isMobile()) closeSidebar();
  if (r.modal) {
    if (!S.rendered) { S.view = 'browse'; S.co = r.co; S.baseHash = '#/brand/' + r.co; render(); }
    S.modal = { c: r.co, m: r.model }; showModal(r.co, r.model);
  } else {
    // Closing a model window returns to the page underneath without redrawing it (keeps the scroll position).
    if (S.modal && S.rendered && (location.hash || '#/') === S.baseHash) { hideModal(); paintTabs(); return; }
    S.baseHash = location.hash || '#/';
    S.view = r.view; if (r.view === 'browse') S.co = r.co || null;
    if (r.view === 'data') S.dv = { tab: r.tab || 'review', brand: r.brand || '' };
    hideModal(); render(); main.scrollTop = 0;
  }
  S.rendered = true; paintTabs();
}

// ---- navigation actions used by buttons and links ----
function setView(v) { nav(v === 'home' ? '#/' : v === 'browse' ? (S.co ? '#/brand/' + encodeURIComponent(S.co) : '#/browse') : v === 'compare' ? compareHash() : '#/' + v); }
function goHome() { S.co = null; nav('#/'); }
function selCo(id) { S.mf = 'all'; nav('#/brand/' + encodeURIComponent(id)); }
function openModal(cid, mid) { nav('#/model/' + encodeURIComponent(cid) + '/' + encodeURIComponent(mid)); }
function closeModal(e) {
  if (e && e.target !== document.getElementById('model-modal')) return;
  if (S.modal) nav(S.baseHash || '#/browse'); else hideModal();
}
function setCat(c) { S.cat = c; document.querySelectorAll('#cat-filters .filter-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === c)); refreshMain(); }
function setSt(s) { S.st = s; document.querySelectorAll('#st-filters .filter-btn').forEach(b => b.classList.toggle('active', b.dataset.st === s)); refreshMain(); }
function setMF(t) { S.mf = t; renderCo(document.getElementById('main')); }

function toast(msg) {
  const t = document.createElement('div'); t.className = 'toast'; t.textContent = msg; document.body.appendChild(t);
  setTimeout(() => t.classList.add('show'), 10); setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 1800);
}
function copyLink() {
  const url = location.href;
  if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(url).then(() => toast('Link copied'), () => window.prompt('Copy this link:', url));
  else window.prompt('Copy this link:', url);
}
