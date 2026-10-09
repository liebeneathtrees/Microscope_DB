// COMPARE — side-by-side table and the compare tray.
// ─── COMPARE ───
function renderCompare(main){
  if(!S.cmp.length){
    main.innerHTML=`<div class="view"><div class="compare-empty"><div class="compare-empty-icon">⚖️</div><h3>No Models Selected</h3><p>Browse companies in the sidebar, open any model card, and click <strong>"+ Compare"</strong> to add up to 4 models for side-by-side comparison.</p><button class="btn btn-primary" style="margin-top:20px" onclick="setView('browse')">Browse Microscopes →</button></div></div>`;return;
  }
  const items=S.cmp.map(i=>({co:G(i.c),m:GM(i.c,i.m)})).filter(i=>i.co&&i.m);
  const rows=[
    {l:'Manufacturer',v:(co,m)=>co.name},{l:'Type / Subtype',v:(co,m)=>m.type+' — '+(m.subtype||'')},
    {l:'Year Introduced',v:(co,m)=>introLabel(m)+discLabel(m)},
    {l:'Lineage',v:(co,m)=>lineageText(m)},{l:'Price Tier',v:(co,m)=>tierLbl(m.price_tier)},
    {l:'New Price (est.)',v:(co,m)=>m.price_new||(m.discontinued?'Discontinued':'—')},
    {l:'Used Price (est.)',v:(co,m)=>m.price_used||'—'},
    {l:'Magnification',v:(co,m)=>m.magnification||'—'},{l:'Objectives',v:(co,m)=>m.objectives||'—'},{l:'Optical system',v:(co,m)=>opticsText(m)},
    {l:'Illumination',v:(co,m)=>m.illumination?m.illumination.join('; '):'—'},{l:'Stage',v:(co,m)=>m.stage||'—'},
    {l:'Software',v:(co,m)=>m.software||'—'},
    {l:'Fluorescence',v:(co,m)=>m.fluorescence?'Yes':'No',b:true},
    {l:'Phase Contrast',v:(co,m)=>m.phase_contrast?'Yes':'No',b:true},
    {l:'Darkfield',v:(co,m)=>m.darkfield?'Yes':'No',b:true},
    {l:'DIC',v:(co,m)=>m.dic?'Yes':'No',b:true},
    {l:'Motorized',v:(co,m)=>m.motorized?'Yes':'No',b:true},
    {l:'Inverted Design',v:(co,m)=>m.inverted?'Yes':'No',b:true},
    {l:'Applications',v:(co,m)=>m.applications?m.applications.join(', '):'—'}
  ];
  main.innerHTML=`<div class="view">
<div class="compare-topbar">
  <div class="section-title" style="margin-bottom:0;flex:1">Side-by-Side Comparison (${items.length} model${items.length!==1?'s':''})</div>
  <button class="btn btn-outline" onclick="copyLink()">Copy link</button>
  <button class="btn btn-danger" onclick="clearCmp()">Clear All</button>
</div>
<div class="cmp-table-wrap">
<table class="cmp-table">
  <thead><tr><th>Specification</th>${items.map(({co,m})=>`<th><div class="cmp-co">${co.flag} ${co.shortName}</div><div class="cmp-name">${m.name}</div><button class="rm-btn" onclick="toggleCmp('${co.id}','${m.id}')">Remove ✕</button></th>`).join('')}</tr></thead>
  <tbody>${rows.map(row=>`<tr><td>${row.l}</td>${items.map(({co,m})=>{const v=row.v(co,m);return`<td class="${row.b?(v==='Yes'?'sv-yes':'sv-no'):''}">${v}</td>`}).join('')}</tr>`).join('')}</tbody>
</table>
</div>
<div style="margin-top:20px"><button class="btn btn-outline" onclick="setView('browse')">← Back to Browse</button></div>
</div>`;
}


// ─── COMPARE TRAY ───
function toggleCmp(cid,mid){
  const idx=S.cmp.findIndex(i=>i.c===cid&&i.m===mid);
  if(idx>=0){S.cmp.splice(idx,1)}else{if(S.cmp.length>=4){alert('Maximum 4 models.');return}S.cmp.push({c:cid,m:mid})}
  updateTray();updateBadge();
  if(S.view==='browse'&&S.co)renderCo(document.getElementById('main'));
  if(S.view==='compare'){syncCompareHash();renderCompare(document.getElementById('main'))}
}
function clearCmp(){S.cmp=[];updateTray();updateBadge();syncCompareHash();renderCompare(document.getElementById('main'))}
function updateTray(){
  const tray=document.getElementById('compare-tray'),items=document.getElementById('tray-items');
  const main=document.getElementById('main');
  if(!S.cmp.length){tray.classList.remove('visible');if(main)main.style.paddingBottom='0';return}
  if(main)main.style.paddingBottom='72px';
  tray.classList.add('visible');
  items.innerHTML=S.cmp.map(({c,m})=>{const co=G(c),mo=GM(c,m);if(!co||!mo)return'';return`<div class="tray-item"><span>${co.shortName}: ${mo.name}</span><span class="tray-rm" onclick="toggleCmp('${c}','${m}')">×</span></div>`}).join('');
}
function updateBadge(){const b=document.getElementById('cmp-badge');if(S.cmp.length){b.style.display='inline-flex';b.textContent=S.cmp.length}else b.style.display='none'}

