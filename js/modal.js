// MODEL DETAIL — modal content. Section helpers for optics, lineage, sources and data notes are in js/sections.js.
// ─── MODAL ───
function showModal(cid,mid){
  const co=G(cid),m=GM(cid,mid);if(!co||!m)return;
  const ic=inC(cid,mid);
  const oemSrc=m.oem_source?G(m.oem_source):null;
  const isDisc=m.discontinued;
  const specs=[
    ['Type',m.type+(m.subtype?` — ${m.subtype}`:'')],
    ['Introduced',introLabel(m)+discLabel(m)],
    ['Price Tier',tierLbl(m.price_tier)],
    ['Magnification',m.magnification||'—'],
    ['Objectives',m.objectives||'—'],
    ['Eyepieces',m.eyepieces||'—'],
    ['Illumination',m.illumination?m.illumination.join('; '):'—'],
    ['Stage',m.stage||'—'],
    ['Software',m.software||'—'],
    ['Fluorescence',m.fluorescence?'Yes':'No'],
    ['Phase Contrast',m.phase_contrast?'Yes':'No'],
    ['Darkfield',m.darkfield?'Yes':'No'],
    ['DIC / Nomarski',m.dic?'Yes':'No'],
    ['Motorized',m.motorized?'Yes':'No'],
    ['Inverted Design',m.inverted?'Yes':'No'],
    ['Camera Port',m.camera_port?'Yes':'No']
  ];
  if(specs.length%2!==0)specs.push(['','']);
  document.getElementById('modal-box').innerHTML=`
<div class="modal-header">
  <div><div class="modal-co-name">${co.flag} ${co.name}</div><div class="modal-m-name">${m.name}</div></div>
  <button class="modal-close" onclick="closeModal()">✕</button>
</div>
<div class="modal-body">
  ${m.image?`<img class="modal-img" src="${m.image}" alt="${m.name}" loading="lazy" onerror="this.remove()">`:''}
  <div class="modal-meta">
    <span class="type-badge type-${m.type}">${m.type} — ${m.subtype||''}</span>${m.kind?`<span class="kind-badge">${kindLbl(m.kind)}</span>`:''}
    <span class="price-tier tier-${m.price_tier}">${tierLbl(m.price_tier)}</span>
    <span style="font-size:.87rem;color:var(--text3)" ${m.discontinued_note?`title="${m.discontinued_note}"`:''}>Introduced: ${introLabel(m)}${discLabel(m)}</span>
  </div>
  <div class="modal-price-box">
    ${m.price_new?`<div class="modal-price-item"><div class="modal-price-label">💚 New Price (est.)</div><div class="modal-price-val">${m.price_new}</div></div>`:`<div class="modal-price-item"><div class="modal-price-label">New Price</div><div class="modal-price-val price-disc">${isDisc?'Discontinued — no longer available new':'Not listed'}</div></div>`}
    ${m.price_used?`<div class="modal-price-item"><div class="modal-price-label">🔵 Used / Refurb (est.)</div><div class="modal-price-val">${m.price_used}</div></div>`:''}
    ${isDisc?`<div class="modal-price-item"><div class="modal-price-label">Market Note</div><div class="modal-price-val price-disc" style="font-size:.85rem">Prices vary by condition, accessories &amp; seller. Check eBay, Labx, Biocompare used listings.</div></div>`:''}
  </div>
  ${m.noteworthy?`<div class="modal-sec"><div class="modal-sec-title">Key Notes &amp; Significance</div><div class="noteworthy">${m.noteworthy}</div></div>`:''}
  <div class="modal-sec">
    <div class="modal-sec-title">Full Specifications <span style="font-weight:400;font-size:.78rem;color:var(--text3);letter-spacing:0">— magnification is total with 10× eyepieces</span></div>
    <div class="spec-grid">${specs.map(([k,v])=>`<div class="sg-entry"><div class="sg-key">${k}</div><div class="sg-val" style="color:${v==='Yes'?'var(--green)':v==='No'?'var(--text3)':'var(--text)'}">${v}</div></div>`).join('')}</div>
  </div>
  ${m.applications?`<div class="modal-sec"><div class="modal-sec-title">Applications</div><div class="app-tags">${m.applications.map(a=>`<span class="app-tag-lg">${a}</span>`).join('')}</div></div>`:''}
  ${renderOptics(m)}
  ${renderObjGuide(m.objective_guide)}
  ${renderAccessories(m.accessories)}
  ${oemSrc?`<div class="modal-sec"><div class="modal-sec-title">OEM Source</div><div class="oem-notice" onclick="selCo('${oemSrc.id}')">📦 This instrument is OEM-manufactured by <strong>${oemSrc.name}</strong> (${oemSrc.country}) and sold under the ${co.shortName} brand. The optical system may be identical or nearly identical to ${oemSrc.shortName} instruments sold under their own name. <span style="color:var(--blue)">Click to view ${oemSrc.shortName} →</span></div></div>`:''}
  ${renderLineage(m)}
  ${renderSourcesBlock(m,co)}
  ${renderNotes(m)}
</div>
<div class="modal-footer">
  <button class="btn btn-primary" id="mcmp" onclick="toggleCmp('${cid}','${mid}');document.getElementById('mcmp').textContent=inC('${cid}','${mid}')?'✓ In Compare List':'+ Add to Compare'">${ic?'✓ In Compare List':'+ Add to Compare'}</button>
  <button class="btn btn-outline" id="mlist" onclick="toggleMyList('${cid}','${mid}')">${ML.has(cid,mid)?'★ In My List':'☆ Add to My List'}</button>
  <button class="btn btn-outline" onclick="copyLink()">Copy link</button>
  <button class="btn btn-outline" onclick="closeModal()">Close</button>
</div>`;
  document.getElementById('model-modal').classList.add('open');
}



// ─── RENDER HELPERS ───
function renderObjGuide(og){
  if(!og) return '';
  const cr=(og.compatible_series||[]).map(s=>`<tr><td><strong>${s.name}</strong>${s.code?`<div class="acc-code">${s.code}</div>`:''}</td><td>${s.note||''}</td></tr>`).join('');
  const ii=(og.incompatible||[]).map(i=>`<div class="incompat-item">${i}</div>`).join('');
  const id2=og.identification_resources?`<div class="buying-tip-box" style="background:#f5f3ff;border-color:#c4b5fd;color:#5b21b6"><strong>Identification Resources:</strong> ${og.identification_resources}</div>`:'';
  return `<div class="modal-sec"><div class="modal-sec-title">🔬 Objective Compatibility Guide</div>${og.warning?`<div class="obj-warning"><strong>⚠️ Warning:</strong> ${og.warning}</div>`:''}<div class="obj-meta-grid">${og.tube_length?`<div class="obj-meta-card"><div class="obj-meta-label">Tube Length</div><div class="obj-meta-val">${og.tube_length}</div></div>`:''} ${og.thread?`<div class="obj-meta-card"><div class="obj-meta-label">Thread</div><div class="obj-meta-val">${og.thread}</div></div>`:''} ${og.parfocal?`<div class="obj-meta-card"><div class="obj-meta-label">Parfocal</div><div class="obj-meta-val">${og.parfocal}</div></div>`:''}</div>${cr?`<div class="compat-label">✅ Compatible Series</div><table class="obj-series-table"><thead><tr><th>Series</th><th>Notes</th></tr></thead><tbody>${cr}</tbody></table>`:''} ${ii?`<div class="compat-label">❌ Incompatible</div><div class="incompat-list">${ii}</div>`:''} ${og.buying_tips?`<div class="buying-tip-box"><strong>💡 Buying Tips:</strong> ${og.buying_tips}</div>`:''} ${id2}</div>`;
}
function renderAccessories(acc){
  if(!acc) return '';
  const secs={stands:'Stands & Bases',heads:'Observation Heads',condensers:'Condensers',fluorescence:'Fluorescence & Illumination',cameras:'Camera & Documentation',teaching:'Teaching Accessories',illumination:'Illumination',auxiliary_objectives:'Auxiliary Objectives',eyepieces:'Eyepieces'};
  let h='';
  for(const [k,l] of Object.entries(secs)){
    if(!acc[k]||!acc[k].length) continue;
    const rows=acc[k].map(item=>{const n=typeof item==='string'?item:(item.name||'');const c=typeof item==='object'&&item.code?item.code:'';const note=typeof item==='object'&&item.note?item.note:'';return `<tr><td class="acc-name">${n}${c?`<div class="acc-code">${c}</div>`:''}</td><td class="acc-note">${note}</td></tr>`;}).join('');
    h+=`<div class="acc-section-head">${l}</div><table class="acc-table"><tbody>${rows}</tbody></table>`;
  }
  return h?`<div class="modal-sec"><div class="modal-sec-title">🗂️ Accessories</div>${h}</div>`:'';
}
