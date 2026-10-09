// DATA NOTES PAGE — review queue, coverage gaps, sources and archives, and how to read the badges.
const DV_TABS = [['review', 'Review queue'], ['gaps', 'Coverage gaps'], ['sources', 'Sources & archives'], ['legend', 'How to read this']];
function dvGo(tab, brand) { nav('#/data/' + tab + (brand ? '?brand=' + encodeURIComponent(brand) : '')); }
function dvBrand(v) { dvGo(S.dv.tab, v); }
function reviewBrandId(r) {
  if (r.scope === 'model') { const x = MDB.byModel.get(r.target); return x ? x.co.id : ''; }
  if (r.scope === 'brand') return r.target;
  if (r.scope === 'genealogy') return r.target.split('>')[0];
  return '';
}
function dvReview(open, brand) {
  const ids = [...new Set(open.map(reviewBrandId))];
  const opts = `<option value="">All brands</option>` + DB.companies.filter(c => ids.includes(c.id)).map(c => `<option value="${c.id}"${c.id === brand ? ' selected' : ''}>${c.shortName} (${open.filter(r => reviewBrandId(r) === c.id).length})</option>`).join('') + (ids.includes('') ? `<option value="general"${brand === 'general' ? ' selected' : ''}>General</option>` : '');
  const want = brand === 'general' ? '' : brand;
  const list = open.filter(r => !brand || reviewBrandId(r) === want);
  const groups = [...DB.companies.map(c => c.id), ''].map(id => ({ id, items: list.filter(r => reviewBrandId(r) === id) })).filter(g => g.items.length);
  return `<div class="dv-filter"><label>Show <select onchange="dvBrand(this.value)">${opts}</select></label><span>${list.length} open item${list.length !== 1 ? 's' : ''}. Delete an entry from <code>data/review.js</code> once it has been checked.</span></div>
${groups.map(g => { const c = G(g.id); return `<div class="section-title">${c ? `${c.flag} ${c.name}` : 'General'} <span class="finder-count">${g.items.length}</span></div>${g.items.map(r => noteCard(r, true)).join('')}`; }).join('') || '<div class="empty-state"><h3>Nothing open</h3></div>'}`;
}
function dvGaps(brand) {
  const g = DB.gaps, ids = Object.keys(g.brands).filter(id => !brand || id === brand);
  const rows = ids.map(id => {
    const c = G(id), groups = g.brands[id], n = groups.reduce((s, x) => s + x.models.length, 0);
    return `<details class="gap-box"${brand ? ' open' : ''}><summary>${c ? `${c.flag} ${c.name}` : id} <span class="finder-count">${n} candidate${n !== 1 ? 's' : ''}</span><span class="gap-have">${c ? c.models.length : 0} in database</span></summary>${groups.map(x => `<div class="gap-group">${x.group ? `<div class="gap-gname">${x.group}</div>` : ''}${x.models.length ? `<div class="gap-chips">${x.models.map(m => `<span class="gap-chip">${m}</span>`).join('')}</div>` : ''}${x.note ? `<div class="gap-note">${x.note}</div>` : ''}</div>`).join('')}</details>`;
  }).join('');
  const makers = brand ? '' : `<div class="section-title">Makers with no model pages yet</div><div class="gap-chips">${g.newBrands.map(b => `<span class="gap-chip" title="${b.reason}">${b.name}</span>`).join('')}</div>`;
  return `<div class="legend-box">${g.note}</div>${brand ? `<div class="dv-filter"><a class="lk" onclick="dvGo('gaps')">Show all brands</a></div>` : ''}${rows}${makers}`;
}
function dvSources() {
  const card = s => `<div class="src-card"><div class="src-top">${s.url ? `<a href="${s.url}" target="_blank" rel="noopener">${s.title}</a>` : `<strong>${s.title}</strong>`}<span class="conf conf-${s.checked}">${s.checked}</span></div><div class="src-pub">${s.publisher}${s.brands.length ? ' · ' + s.brands.map(b => (G(b) || { shortName: b }).shortName).join(', ') : ''}</div>${s.note ? `<div class="src-note">${s.note}</div>` : ''}</div>`;
  const arch = DB.sources.filter(s => s.type === 'archive'), ref = DB.sources.filter(s => s.type !== 'archive');
  return `<div class="legend-box">Archives are places to look for manuals and brochures. Only a few models have a source attached so far (see the count above). <b>verified</b> = checked against the source; <b>cited</b> = taken from a source named in the research notes and not re-checked.</div>
<div class="section-title">Archives to search</div>${arch.map(card).join('')}<div class="section-title">Sources used for corrections</div>${ref.map(card).join('')}`;
}
function dvLegend() {
  return `<div class="legend-box"><p><b>How this database treats certainty.</b> Entries mix facts that were checked against a source, estimates, and open questions. These marks show which is which.</p>
<p>${confBadge('verified')} Checked against the source shown beside it.<br>${confBadge('cited')} Taken from a source named in the research notes; not re-checked.<br>${confBadge('approx')} Approximate, from general knowledge. Optical systems, lineage chains and estimated discontinuation years carry this mark.</p>
<p><b>(disc. ~1987)</b> The tilde marks an estimated end-of-production year. Hover it for the reason and confidence. <b>(disc.)</b> alone means the model is discontinued but no year is known.</p>
<p><b>⚠ on a model card</b> The model has open data notes: a merged duplicate with conflicting values, an unconfirmed model name, a date that needs a brochure, and so on.</p>
<p><b>Prices</b> are estimates with no date attached. They are not quotes.</p></div>`;
}
function renderData(main) {
  const tab = S.dv.tab || 'review', brand = S.dv.brand || '';
  const models = DB.companies.flatMap(c => c.models), open = DB.review.filter(r => r.status === 'open');
  const gapN = Object.values(DB.gaps.brands).reduce((s, gs) => s + gs.reduce((t, x) => t + x.models.length, 0), 0);
  const stats = [['Models', models.length], ['With a source', models.filter(m => m.sources && m.sources.length).length], ['With optical data', MDB.opticsOf.size], ['In a lineage chain', MDB.lineageOf.size], ['Estimated end years', models.filter(m => m.discontinued_approx).length], ['Open data notes', open.length], ['Candidate models not listed', gapN]];
  const body = tab === 'gaps' ? dvGaps(brand) : tab === 'sources' ? dvSources() : tab === 'legend' ? dvLegend() : dvReview(open, brand);
  main.innerHTML = `<div class="view dv"><div class="dv-hero"><h2>📋 Data Notes</h2><p>MicroscopeDB mixes facts that were checked against a source with estimates and open questions. This page shows which is which, and what is still to do.</p></div>
<div class="dv-stats">${stats.map(([k, v]) => `<div class="dv-stat"><strong>${v}</strong><span>${k}</span></div>`).join('')}</div>
<div class="dv-tabs">${DV_TABS.map(([k, l]) => `<button class="dv-tab${k === tab ? ' active' : ''}" onclick="dvGo('${k}')">${l}</button>`).join('')}</div>${body}</div>`;
}
