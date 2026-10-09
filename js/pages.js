// PAGES — My Collection and Industry Genealogy.
function renderCollection(main){
  const items=MY_COLLECTION.map(c=>({...c,co:G(c.coId),m:GM(c.coId,c.mId)})).filter(c=>c.co&&c.m);
  const yrs=items.map(c=>c.m.introduced),yMin=Math.min(...yrs),yMax=Math.max(...yrs);
  const cards=items.map(c=>`<div class="coll-card" onclick="openModal('${c.coId}','${c.mId}')"><div class="coll-card-top"><div class="coll-card-make">${c.co.flag} ${c.co.name}</div><div class="coll-card-name">${c.m.name}</div><div class="coll-card-sub">${c.m.subtype||c.m.type}</div></div><div class="coll-card-body"><div class="coll-sn">${c.sn}</div><div class="coll-tags">${(c.tags||[]).map(t=>`<span class="coll-tag">${t}</span>`).join('')}</div><div class="coll-highlight">${c.highlight||''}</div><button class="coll-btn" onclick="event.stopPropagation();openModal('${c.coId}','${c.mId}')">Full Details →</button></div></div>`).join('');
  main.innerHTML=`<div class="view"><div class="coll-view"><div class="coll-hero"><h2>🔬 My Microscope Collection</h2><p>${items.length} instruments, introduced between ${yMin} and ${yMax}.</p></div><div class="coll-warn-card"><div class="coll-warn-title">⚠️ Objective Compatibility Reminder</div><div class="coll-warn-text"><strong>BH-2:</strong> Requires 45mm parfocal LB objectives. Standard 36.65mm objectives screw in but cannot focus.<br><br><strong>Zeiss GF:</strong> 160mm RMS objectives. Inspect Neofluars for delamination.</div></div><div class="coll-grid">${cards}</div><div style="text-align:center;margin-top:8px"><button class="btn btn-outline" onclick="setView('browse')">Browse Full Database →</button></div></div></div>`;
  mountMyList(main);
}

// ─── INDUSTRY GENEALOGY ───
function renderOEM(main){
  const lbl={merger:'Merger',acquisition:'Acquisition',oem:'OEM Supply',rebrand:'Rebrand / Spin-off',split:'Split / Partition',name_change:'Rename / Rebrand',milestone:'Product Milestone',transfer:'Service Transfer'};
  const groupOrder=['zeiss','leica','leitz','wild','reichert','bausch','olympus','nikon','ao','deltavision','vickers','motic','labomed','meiji','national-optical'];
  const groups={};
  DB.oem_relations.forEach(r=>{const key=r.source;if(!groups[key])groups[key]=[];groups[key].push(r);});
  const legend=Object.entries(lbl).map(([k,v])=>`<span class="rel-pill rel-${k}">${v}</span>`).join(' ');
  const buildGroup=coId=>{
    const entries=groups[coId];
    if(!entries||!entries.length) return '';
    const co=G(coId);
    const name=co?`${co.flag} ${co.name}`:coId;
    const rows=entries.map(r=>{
      const src=G(r.source),tgt=G(r.target),self=r.source===r.target;
      const srcLink=src?`<span class="oem-co-link" onclick="selCo('${src.id}')">${src.flag} ${src.shortName}</span>`:r.source;
      const tgtLink=tgt&&!self?`<span class="oem-co-link" onclick="selCo('${tgt.id}')">${tgt.flag} ${tgt.shortName}</span>`:(self?'<em style="color:var(--text3)">Internal</em>':r.target);
      return `<tr class="r-${r.type}"><td><span class="rel-pill rel-${r.type}">${lbl[r.type]||r.type}</span></td><td>${srcLink}</td><td>${tgtLink}</td><td style="color:var(--text3);white-space:nowrap">${r.year||'—'}</td><td style="line-height:1.6">${r.description}${srcChips(r.sources)}</td></tr>`;
    }).join('');
    return `<div class="industry-group"><div class="industry-group-head"><span class="industry-group-name">${name}</span><span class="industry-group-count">${entries.length} event${entries.length!==1?'s':''}</span></div><div class="oem-tbl-wrap"><table class="oem-tbl"><thead><tr><th style="width:130px">Event Type</th><th style="width:160px">From</th><th style="width:160px">To / Result</th><th style="width:58px">Year</th><th>What Happened</th></tr></thead><tbody>${rows}</tbody></table></div></div>`;
  };
  const allGrouped=groupOrder.map(buildGroup).join('');
  const remaining=Object.keys(groups).filter(k=>!groupOrder.includes(k)).map(buildGroup).join('');
  main.innerHTML=`<div class="view"><div class="industry-hero"><h2>🌎 Industry Genealogy &amp; Corporate History</h2><p>The complete corporate lineage of every manufacturer in the database — mergers, acquisitions, Cold War splits, OEM supply chains, rebrands, and name changes. Understanding these relationships is essential for buyers: an instrument sold under one brand may be optically identical to a product at a very different price under another name.</p></div><div class="oem-legend">${legend}</div>${allGrouped}${remaining}</div>`;
}

