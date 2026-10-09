// BROWSE — sidebar, home, brand pages, model cards. (Moved from the old single-file app; patched for v4.)
// ─── SIDEBAR ───
function renderSidebar(){
  const list=document.getElementById('company-list');
  const cos=filtered();
  const featured=cos.filter(c=>c.featured);
  const regular=cos.filter(c=>c.status==='active'&&!c.featured);
  const hist=cos.filter(c=>c.status==='historical');
  let h='';
  if(featured.length){h+=`<div class="sidebar-section-label">★ The Big Four</div>`;featured.forEach(c=>{h+=coItem(c,true)})}
  if(regular.length){h+=`<div class="sidebar-section-label">Other Active (${regular.length})</div>`;regular.forEach(c=>{h+=coItem(c,false)})}
  if(hist.length){h+=`<div class="sidebar-section-label">Historical / Absorbed</div>`;hist.forEach(c=>{h+=coItem(c,false)})}
  if(!cos.length)h=`<div style="padding:22px 10px;text-align:center;color:var(--text3);font-size:.9rem">No companies match.</div>`;
  list.innerHTML=h;
}
function coItem(c,feat){
  const sel=S.co===c.id;
  const featCls=feat?' featured-co':'';
  const star=feat?`<span class="co-star" title="Big Four manufacturer">★</span>`:'';
  return`<div class="company-item${sel?' active':''}${featCls}" onclick="selCo('${c.id}')"><div class="company-dot ${c.status==='active'?'dot-active':'dot-hist'}"></div><div style="flex:1;min-width:0"><div style="display:flex;align-items:center">${star}<span class="company-item-name" style="${feat?'margin-left:4px':''}">${c.shortName}</span></div><div class="company-item-country">${c.flag} ${c.country} &middot; Est. ${c.founded}</div><div class="cat-pills" style="margin-top:3px">${pills(c.categories)}</div></div></div>`;
}


// ─── HOME ───
function renderHome(main){
  const total=DB.companies.reduce((s,c)=>s+c.models.length,0);
  const act=DB.companies.filter(c=>c.status==='active').length;
  const hist=DB.companies.filter(c=>c.status==='historical').length;
  const stereoCount=DB.companies.reduce((s,c)=>s+c.models.filter(m=>m.type==='stereo').length,0);
  const optCount=DB.companies.reduce((s,c)=>s+c.models.filter(m=>m.type==='compound').length,0);
  const discCount=DB.companies.reduce((s,c)=>s+c.models.filter(m=>m.discontinued).length,0);
  const usedN=DB.companies.reduce((s,c)=>s+c.models.filter(m=>m.price_used).length,0);
  const newN=DB.companies.reduce((s,c)=>s+c.models.filter(m=>m.price_new).length,0);
  const bigFour=DB.companies.filter(c=>c.featured).map(c=>c.shortName).join(', ');

  function photoCard(filename,label,icon,hint){
    return`<div class="photo-card">
      <img src="${filename}" alt="${label}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="photo-placeholder" style="display:none">
        <div class="photo-placeholder-icon">${icon}</div>
        <div class="photo-placeholder-text">Place <strong>${filename}</strong> in the same folder</div>
      </div>
      <div class="photo-card-label">${label}</div>
    </div>`;
  }

  main.innerHTML=`<div class="view">
<div class="home-hero">
  <h1>The <em>Definitive</em> Microscope Reference Database</h1>
  <div class="home-hero-body">
    <div class="home-hero-text">
      <p>MicroscopeDB is a comprehensive reference tool for researchers, buyers, collectors, and enthusiasts. It covers ${DB.companies.length} manufacturers — from the Big Four (${bigFour}) to historical brass-era makers — with ${total}+ documented models spanning student scopes to ultra-research platforms, all with verified specifications and estimated price ranges for new and used instruments.</p>
      <div class="quick-actions">
        <button class="btn btn-primary" onclick="selCo('zeiss')">Browse the Big Four</button>
        <button class="btn btn-ghost" onclick="setView('compare')">Compare Models</button>
        <button class="btn btn-ghost" onclick="setView('guide')">🏛️ Antique Guide</button>
      </div>
    </div>
    <div class="home-photos">
      ${photoCard('stereo_microscope.jpg','Stereo Microscope','🔬','your stereo photo')}
      ${photoCard('compound_microscope.jpg','Compound Microscope','🔬','your compound photo')}
    </div>
  </div>
</div>

<div class="section-title">What's Inside MicroscopeDB</div>
<div class="home-feature-grid">
  <div class="feature-card" onclick="setView('browse')">
    <div class="feature-card-icon">🏭</div>
    <div class="feature-card-title">Manufacturer Profiles &amp; Model Database</div>
    <div class="feature-card-desc">Detailed profiles for ${DB.companies.length} manufacturers with company history, OEM relationships, and full specification sheets for ${total}+ models. Covers active companies and historical makers — from budget education scopes to ultra-research platforms. Every model includes estimated new and used market prices.</div>
    <div class="feature-card-link">Browse all manufacturers</div>
  </div>
  <div class="feature-card" onclick="setView('compare')">
    <div class="feature-card-icon">⚖️</div>
    <div class="feature-card-title">Side-by-Side Model Comparison</div>
    <div class="feature-card-desc">Select up to 4 models from any manufacturer and compare them across 20 specification rows simultaneously — magnification, objectives, illumination, fluorescence, phase contrast, DIC, motorization, and price. Ideal for shortlisting instruments before a purchase decision.</div>
    <div class="feature-card-link">Open comparison tool</div>
  </div>
  <div class="feature-card" onclick="setView('oem')">
    <div class="feature-card-icon">🔗</div>
    <div class="feature-card-title">OEM &amp; Corporate Relationship Map</div>
    <div class="feature-card-desc">The microscopy industry's hidden connections — acquisitions, mergers, OEM supply chains, and rebrands that buyers rarely know about. Learn why an AmScope may be a Motic, why Leica carries the Wild and B&amp;L heritage, and which modern brands share the same optical systems under different nameplates.</div>
    <div class="feature-card-link">View relationship table</div>
  </div>
  <div class="feature-card" onclick="setView('guide')">
    <div class="feature-card-icon">🏛️</div>
    <div class="feature-card-title">Antique &amp; Vintage Microscope Buyers Guide</div>
    <div class="feature-card-desc">A curated guide to historically significant and collectible instruments from the 1820s to the 1950s. Features a complete illustrated timeline of binocular and trinocular head development — from the Wenham prism (1860) to the first trinocular tube (Leitz, 1953) — with current estimated collector values and rarity ratings.</div>
    <div class="feature-card-link">Explore the antique guide</div>
  </div>
</div>

<div class="section-title">Database Scope</div>
<div class="home-scope-grid">
  <div class="scope-card">
    <div class="scope-card-top"><div class="scope-card-icon">🔬</div><div class="scope-card-title">Compound Optical Microscopes</div></div>
    <div class="scope-card-body">Upright and inverted research, clinical, and educational compound microscopes from all major manufacturers. Covers brightfield, phase contrast, darkfield, DIC, and fluorescence instruments across all price tiers.</div>
    <div class="scope-card-stat"><strong>${optCount}</strong> compound models documented</div>
  </div>
  <div class="scope-card">
    <div class="scope-card-top"><div class="scope-card-icon">🪲</div><div class="scope-card-title">Stereo &amp; Zoom Microscopes</div></div>
    <div class="scope-card-body">Greenough and CMO stereo/zoom instruments from entry-level dissection scopes through research fluorescence stereos. Includes historical zoom stereo designs tracing back to the Bausch &amp; Lomb Stereozoom (1947) — the original template for all modern stereos.</div>
    <div class="scope-card-stat"><strong>${stereoCount}</strong> stereo models documented</div>
  </div>
  <div class="scope-card">
    <div class="scope-card-top"><div class="scope-card-icon">📜</div><div class="scope-card-title">Historical &amp; Collectible Instruments</div></div>
    <div class="scope-card-body">Discontinued instruments from the 1830s through the 1980s with used-market price ranges. Includes the Big Four's collectible lines (Zeiss Axiophot, Leica DMRB, Nikon SMZ1500, Olympus BH-2) plus Victorian brass instruments for the antique collector.</div>
    <div class="scope-card-stat"><strong>${discCount}</strong> historical models with valuations</div>
  </div>
  <div class="scope-card">
    <div class="scope-card-top"><div class="scope-card-icon">⭐</div><div class="scope-card-title">The Big Four</div></div>
    <div class="scope-card-body">Zeiss, Leica, Nikon, and Olympus/Evident receive extended coverage with both current and historical model lines — from 1980s collectibles still holding strong used-market value through to current research platforms.</div>
    <div class="scope-card-stat"><strong>${DB.companies.filter(c=>c.featured).reduce((s,c)=>s+c.models.length,0)}</strong> models across the Big Four</div>
  </div>
  <div class="scope-card">
    <div class="scope-card-top"><div class="scope-card-icon">💰</div><div class="scope-card-title">Price Intelligence</div></div>
    <div class="scope-card-body">Models carry estimated price ranges: used or refurbished where known, and new prices for models still sold. Ranges are approximate and undated, and describe complete, functional, good-condition examples. Check current listings before buying or selling.</div>
    <div class="scope-card-stat"><strong>${usedN}</strong> used and <strong>${newN}</strong> new price ranges across ${total} models</div>
  </div>
  <div class="scope-card">
    <div class="scope-card-top"><div class="scope-card-icon">🏭</div><div class="scope-card-title">Industry Genealogy</div></div>
    <div class="scope-card-body">${DB.oem_relations.length} documented corporate events — mergers, acquisitions, splits, OEM relationships, rebrands, and name changes. Traces the complete genealogy of every company in the database.</div>
    <div class="scope-card-stat"><strong>${DB.oem_relations.length}</strong> corporate events documented</div>
  </div>
</div>

<div class="section-title">Manufacturer Coverage</div>
<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:28px">
  ${DB.companies.map(c=>`<div style="display:flex;align-items:center;gap:6px;background:var(--white);border:1px solid var(--border);border-radius:7px;padding:7px 13px;cursor:pointer;transition:all .15s;font-size:.9rem" onmouseover="this.style.borderColor='var(--blue)';this.style.background='var(--blue-light)'" onmouseout="this.style.borderColor='var(--border)';this.style.background='var(--white)'" onclick="selCo('${c.id}')"><span>${c.flag}</span><span style="font-weight:${c.featured?700:500};color:var(--navy)">${c.shortName}</span>${c.featured?'<span style="color:var(--amber-bright);font-size:.8rem">★</span>':''}<span style="font-size:.77rem;color:var(--text3)">${c.models.length} models</span></div>`).join('')}
</div>
</div>`;
}


function renderBrowseLanding(el){
  if(S.q||S.ff.length){renderFinder(el);return}
  const active=DB.companies.filter(c=>c.status==='active');
  const hist=DB.companies.filter(c=>c.status!=='active');
  const chips=(arr,label)=>arr.length?`
    <div class="bl-group-title">${label}</div>
    <div class="bl-chips">${arr.map(co=>`
      <button class="bl-chip${co.featured?' bl-chip--featured':''}" onclick="selCo('${co.id}')">
        <span class="bl-chip-flag">${co.flag}</span>
        <span class="bl-chip-name">${co.shortName}</span>
        ${co.featured?'<span class="bl-chip-star">★</span>':''}
      </button>`).join('')}
    </div>`:''
  el.innerHTML=`<div class="view bl-landing">
    <div class="bl-hero">
      <h2>Browse Manufacturers</h2>
      <p>Select a company from the sidebar or click any tile below to open its full profile and model list.</p>
    </div>
    ${chips(active,'Active Manufacturers')}
    ${chips(hist,'Historical &amp; Absorbed')}
  </div>`;
}

function renderCo(main){
  const co=G(S.co);if(!co){renderBrowseLanding(main);return}
  let oemH='';
  if(co.oem.acquiredBy)oemH+=`<span class="oem-badge oem-acquired" onclick="setView('oem')">🏢 Acquired: ${co.oem.acquiredBy}</span>`;
  if(co.oem.acquired&&co.oem.acquired.length)co.oem.acquired.forEach(a=>{oemH+=`<span class="oem-badge oem-absorbed" onclick="setView('oem')">🔗 Absorbed: ${a}</span>`});
  if(co.oem.makesFor&&co.oem.makesFor.length)oemH+=`<span class="oem-badge oem-supplier" onclick="setView('oem')">🏭 OEM Supplier to: ${co.oem.makesFor.slice(0,3).join(', ')}${co.oem.makesFor.length>3?' +more':''}</span>`;
  if(co.oem.madeBy&&co.oem.madeBy.length)oemH+=`<span class="oem-badge oem-sourced" onclick="setView('oem')">📦 Sourced from: ${co.oem.madeBy[0]}</span>`;
  if(co.oem.notes)oemH+=`<span class="oem-badge oem-note">ℹ️ ${co.oem.notes}</span>`;
  if(!oemH)oemH=`<span style="font-size:.9rem;color:var(--text3)">No OEM relationships on record.</span>`;
  const types=[...new Set(co.models.map(m=>m.type))];
  let mods=co.models;
  if(S.mf!=='all')mods=mods.filter(m=>m.type===S.mf);
  mods=mods.filter(m=>modelOk(co,m));
  const featHeader=co.featured?' featured-header':'';
  main.innerHTML=`<div class="view">
<div class="company-header${featHeader}">
  <div class="company-header-top">
    <div class="company-flag">${co.flag}</div>
    <div style="flex:1">
      <div class="company-name">${co.name}${co.featured?' <span style="font-size:1.1rem;color:var(--amber-bright)" title="Big Four Manufacturer">★</span>':''}</div>
      <div class="company-meta">
        <span class="company-meta-item">📍 ${co.hq}</span>
        <span class="company-meta-item" ${co.founded_note?`title="${co.founded_note}"`:''}>📅 Est. ${co.founded}${co.founded_note?' ⓘ':''}</span>
        <span class="status-badge ${co.status==='active'?'status-active':'status-hist'}">${co.status==='active'?'● Active':'○ Historical'}</span>
      </div>
      <div class="cat-pills" style="margin-top:10px">${pills(co.categories)}</div>
    </div>
  </div>
  <div class="company-overview">${co.overview}</div>
  ${brandExtras(co)}
  <div class="oem-relations">${oemH}</div>
</div>
<div class="section-title">Models &amp; Instruments</div>
<div class="model-filters">
  ${['all',...types].map(t=>`<button class="mf-btn${S.mf===t?' active':''}" onclick="setMF('${t}')">${t==='all'?'All Types':t.charAt(0).toUpperCase()+t.slice(1)}</button>`).join('')}
  <span style="margin-left:auto;font-size:.875rem;color:var(--text3)">${mods.length}${mods.length!==co.models.length?' of '+co.models.length:''} model${mods.length!==1?'s':''}</span>
</div>
${filterNote(co,mods)}
<div class="mag-note">🔬 <span>Magnification shown as <strong>total</strong> with standard <strong>10× eyepieces</strong>. Stereo and surgical scopes note their eyepiece in the value.</span></div>
${mods.length===0?`<div class="empty-state"><h3>No models match</h3><p>Try a different filter.</p></div>`:''}
<div class="model-grid">${mods.map(m=>modelCard(co,m)).join('')}</div>
</div>`;
}

// ─── MODEL CARD ───
function modelCard(co,m){
  const ic=inC(co.id,m.id);
  const isDisc=m.discontinued;
  const priceHtml=`<div class="mc-price">
    ${m.price_new?`<div class="price-line"><span class="price-line-label">New:</span><span class="price-new-tag">${m.price_new}</span></div>`:''}
    ${m.price_used?`<div class="price-line"><span class="price-line-label">Used:</span><span class="price-used-tag">${m.price_used}</span></div>`:''}
    ${isDisc?`<span class="price-disc-note">Discontinued${m.discontinued_year?' '+(m.discontinued_approx?'~':'')+m.discontinued_year:''} — no longer manufactured</span>`:''}
  </div>`;
  return`<div class="model-card${isDisc?' discontinued-card':''}" onclick="openModal('${co.id}','${m.id}')">
  <div class="mc-top"><span class="type-badge type-${m.type}">${m.type}</span>${m.kind?`<span class="kind-badge">${kindLbl(m.kind)}</span>`:''}<span class="mc-year">${introLabel(m)}${discLabel(m)}${hasNotes(m.id)?' <span class="mc-flag" title="Open data notes on this model">⚠</span>':''}</span></div>
  <div class="mc-name">${m.name}</div>
  ${m.series?`<div class="mc-series">${m.series} series &middot; ${m.subtype||''}</div>`:''}
  ${m.applications?`<div class="mc-apps">${m.applications.slice(0,4).map(a=>`<span class="app-tag">${a}</span>`).join('')}</div>`:''}
  ${priceHtml}
  <div class="mc-specs">
    ${m.magnification?`<div class="spec-row"><span class="spec-k">Magnification</span><span class="spec-v">${m.magnification}</span></div>`:''}
    ${m.objectives?`<div class="spec-row"><span class="spec-k">Objectives</span><span class="spec-v">${m.objectives}</span></div>`:''}
    <div class="spec-row"><span class="spec-k">Fluorescence</span><span class="spec-v ${m.fluorescence?'sv-yes':'sv-no'}">${m.fluorescence?'Yes':'No'}</span></div>
    <div class="spec-row"><span class="spec-k">Phase Contrast</span><span class="spec-v ${m.phase_contrast?'sv-yes':'sv-no'}">${m.phase_contrast?'Yes':'No'}</span></div>
    <div class="spec-row"><span class="spec-k">Motorized</span><span class="spec-v ${m.motorized?'sv-yes':'sv-no'}">${m.motorized?'Yes':'No'}</span></div>
    <div class="spec-row"><span class="spec-k">Inverted</span><span class="spec-v ${m.inverted?'sv-yes':'sv-no'}">${m.inverted?'Yes':'No'}</span></div>
  </div>
  <div class="mc-footer">
    <span class="price-tier tier-${m.price_tier}">${tierLbl(m.price_tier)}</span>
    ${m.oem_source?`<span class="oem-src-tag">📦 OEM: ${m.oem_source}</span>`:''}
    <button class="cmp-btn${ic?' added':''}" onclick="event.stopPropagation();toggleCmp('${co.id}','${m.id}')">${ic?'✓ Added':'+ Compare'}</button>
  </div>
</div>`;
}

