// MODEL AND BRAND SECTIONS — optical system, lineage, sources and data notes.
function srcLink(id) {
  const s = MDB.srcById.get(id); if (!s) return '';
  const tip = esc(`${s.title} — ${s.publisher} (${s.checked})`);
  return s.url ? `<a class="src-chip src-${s.checked}" href="${s.url}" target="_blank" rel="noopener" title="${tip}">${esc(s.title)}</a>` : `<span class="src-chip src-${s.checked}" title="${tip}">${esc(s.title)}</span>`;
}
const srcChips = ids => ids && ids.length ? `<div class="src-row">${ids.map(srcLink).join('')}</div>` : '';
function renderSourcesBlock(m) {
  if (!m.sources || !m.sources.length) return '';
  return `<div class="modal-sec"><div class="modal-sec-title">📚 Sources</div>${srcChips(m.sources)}<div class="src-legend"><b>verified</b> = checked against the source; <b>cited</b> = taken from a cited source, not re-checked.</div></div>`;
}
function renderOptics(m) {
  const l = MDB.opticsOf.get(m.id); if (!l) return '';
  const cards = l.map(({ o, note }) => {
    const sys = o.system === 'finite' ? `Finite · ${o.tube_length_mm} mm tube` : `Infinity${o.tube_lens_mm ? ` · ${o.tube_lens_mm} mm tube lens` : ''}`;
    const same = o.models.map(e => typeof e === 'string' ? e : e.id).filter(id => id !== m.id).map(id => MDB.byModel.get(id)).filter(Boolean);
    const shown = same.slice(0, 14).map(x => `<a class="lk" onclick="openModal('${x.co.id}','${x.m.id}')">${x.co.shortName} ${x.m.name}</a>`).join('');
    return `<div class="opt-card"><div class="opt-head"><strong>${o.label}</strong>${o.period ? `<span class="opt-period">${o.period}</span>` : ''}${confBadge(o.confidence)}</div>
<div class="opt-grid"><div><span>System</span>${sys}</div><div><span>Thread</span>${o.thread}</div><div><span>Parfocal</span>${o.parfocal_mm ? o.parfocal_mm + ' mm' : '—'}</div></div>
${note ? `<div class="opt-note">This model: ${note}</div>` : ''}${o.notes ? `<div class="opt-note">${o.notes}</div>` : ''}
${same.length ? `<div class="opt-same"><span>Same optical generation in this database (${same.length}):</span><div class="lk-row">${shown}${same.length > 14 ? `<em>+${same.length - 14} more</em>` : ''}</div></div>` : ''}
${o.source ? srcChips([o.source]) : ''}</div>`;
  }).join('');
  return `<div class="modal-sec"><div class="modal-sec-title">⚙️ Optical System</div>${cards}<div class="opt-warn">Objective compatibility depends on tube length, thread and parfocal distance together. Treat these figures as a starting point and check the objectives themselves.</div></div>`;
}
function renderLineage(m) {
  const l = MDB.lineageOf.get(m.id); if (!l) return '';
  const node = n => {
    if (n.ghost) return `<span class="ln ln-ghost" title="Not yet in the database">${n.name}</span>`;
    if (n.id === m.id) return `<span class="ln ln-cur">${n.name}</span>`;
    const x = MDB.byModel.get(n.id); return `<a class="ln" onclick="openModal('${x.co.id}','${x.m.id}')">${x.m.name}</a>`;
  };
  const rows = l.map(e => `<div class="lin-row"><div class="lin-label">${e.entry.label} ${confBadge(e.entry.confidence)}</div><div class="lin-chain">${e.groups.map(g => `<span class="lin-grp">${g.map(node).join('<span class="lin-and"> + </span>')}</span>`).join('<span class="lin-arrow">→</span>')}</div></div>`).join('');
  return `<div class="modal-sec"><div class="modal-sec-title">🧬 Lineage</div>${rows}<div class="lin-legend">Dashed names are not in the database yet. Lineage is approximate.</div></div>`;
}
const fmtVal = v => v == null ? '—' : Array.isArray(v) ? v.join('; ') : typeof v === 'boolean' ? (v ? 'Yes' : 'No') : String(v);
function targetLink(r) {
  if (r.scope === 'model') { const x = MDB.byModel.get(r.target); return x ? `<a class="lk" onclick="openModal('${x.co.id}','${x.m.id}')">${x.co.shortName}: ${x.m.name}</a>` : r.target; }
  if (r.scope === 'brand') { const c = G(r.target); return c ? `<a class="lk" onclick="selCo('${c.id}')">${c.name}</a>` : r.target; }
  if (r.scope === 'genealogy') return `<a class="lk" onclick="setView('oem')">Genealogy: ${r.target}</a>`;
  return '<span class="note-global">General</span>';
}
function noteCard(r, showTarget) {
  const diff = r.detail ? `<table class="note-diff"><thead><tr><th>Field</th><th>Kept</th><th>Discarded record</th></tr></thead><tbody>${Object.entries(r.detail).map(([k, [a, b]]) => `<tr><td>${k}</td><td>${fmtVal(a)}</td><td>${fmtVal(b)}</td></tr>`).join('')}</tbody></table>` : '';
  return `<div class="note-card"><div class="note-top">${showTarget ? targetLink(r) : ''}<span class="note-field">${r.field}</span>${sugBadge(r.confidence)}</div><div class="note-issue">${r.issue}</div>${r.suggestion ? `<div class="note-sug"><strong>To do:</strong> ${r.suggestion}</div>` : ''}${r.basis ? `<div class="note-basis">Basis: ${r.basis}</div>` : ''}${srcChips(r.sources)}${diff}</div>`;
}
function renderNotes(m) {
  const items = MDB.reviewFor('model', m.id); if (!items.length) return '';
  return `<div class="modal-sec"><details class="notes-box"><summary>⚠ Data notes (${items.length}): open questions about this entry</summary>${items.map(r => noteCard(r, false)).join('')}</details></div>`;
}
function brandReviewCount(id) { return DB.review.filter(r => r.status === 'open' && ((r.scope === 'brand' && r.target === id) || (r.scope === 'model' && (MDB.byModel.get(r.target) || { co: {} }).co.id === id))).length; }
function brandExtras(co) {
  const n = brandReviewCount(co.id), gaps = (DB.gaps.brands[co.id] || []).reduce((s, g) => s + g.models.length, 0);
  const srcs = co.sources && co.sources.length ? `<div class="brand-sources"><span class="brand-extra-label">Sources</span>${srcChips(co.sources)}</div>` : '';
  const links = n || gaps ? `<div class="brand-links">${n ? `<a onclick="nav('#/data/review?brand=${co.id}')">⚠ ${n} open data note${n !== 1 ? 's' : ''}</a>` : ''}${gaps ? `<a onclick="nav('#/data/gaps?brand=${co.id}')">📋 ${gaps} candidate models not yet listed</a>` : ''}</div>` : '';
  return srcs + links;
}
