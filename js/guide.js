// ANTIQUE GUIDE — rendering code. (Data is in data/guide.js.)
// ─── AI GUIDE ───
function renderGuide(main){
  const F=AG.filters;
  const eras=AG.eras;
  main.innerHTML=`<div class="view antique-view">
<div class="antique-hero-new">
  <h2>🏛️ Antique &amp; Vintage Microscope Guide</h2>
  <p>A curated collector's reference covering historically significant microscopes from the 1820s through the 1950s. Includes instrument identification, authentication guidance, buying advice, science history connections, and the complete evolution of binocular and trinocular head design.</p>
  <div class="antique-hero-tags">
    <span class="antique-hero-tag">📅 1820–1955 Coverage</span>
    <span class="antique-hero-tag">🔍 ${AG.eras.reduce((s,e)=>s+(e.items||[]).length,0)} Historical Instruments</span>
    <span class="antique-hero-tag">💷 Collector Value Ranges</span>
    <span class="antique-hero-tag">✅ Authentication Guide</span>
    <span class="antique-hero-tag">🔬 Science History Connections</span>
  </div>
</div>
<div class="antique-quick-facts">
  <div class="aqf-card"><div class="aqf-icon">👁️</div><div class="aqf-title">First Practical Binocular</div><div class="aqf-val">Wenham Prism, 1860 — British, adopted globally within 5 years</div></div>
  <div class="aqf-card"><div class="aqf-icon">📸</div><div class="aqf-title">First Practical Trinocular</div><div class="aqf-val">Leitz FS tube, c.1953 — defined all subsequent designs</div></div>
  <div class="aqf-card"><div class="aqf-icon">💰</div><div class="aqf-title">Highest Collector Value</div><div class="aqf-val">Powell &amp; Lealand No.1 Binocular — complete cased examples $6,000–$30,000+</div></div>
  <div class="aqf-card"><div class="aqf-icon">🏆</div><div class="aqf-title">Most Historically Significant</div><div class="aqf-val">Zeiss/Abbe apochromat system (1886) — defined modern objective design</div></div>
  <div class="aqf-card"><div class="aqf-icon">🛒</div><div class="aqf-title">Best Value Entry Point</div><div class="aqf-val">Watson, Bausch &amp; Lomb, or Leitz black-era instruments: $200–$800 functional</div></div>
  <div class="aqf-card"><div class="aqf-icon">⚠️</div><div class="aqf-title">Biggest Buyer Trap</div><div class="aqf-val">Modern Chinese brass reproductions — always check for period serial numbers &amp; maker signatures</div></div>
</div>
<div class="antique-edu-grid">
  <div class="edu-card">
    <h4>🔎 What Makes an Antique Microscope Valuable?</h4>
    <ul>
      <li><strong>Completeness:</strong> A full cased instrument with all original accessories can fetch 3–5× a bare stand. Missing even one objective significantly reduces value.</li>
      <li><strong>Maker prestige:</strong> Powell &amp; Lealand > Ross > Smith Beck &amp; Beck > Watson > Beck (British); Zeiss > Leitz (German); B&amp;L > American Optical (American).</li>
      <li><strong>Head configuration:</strong> Binocular versions command a substantial premium. Pre-1900 binoculars are genuinely rare.</li>
      <li><strong>Condition:</strong> Original lacquer/enamel, undamaged optics, smooth stage movement. Re-lacquered instruments lose collector value.</li>
      <li><strong>Provenance:</strong> Original receipt or documented institutional ownership adds significant value.</li>
    </ul>
  </div>
  <div class="edu-card">
    <h4>🧪 Optical Standards to Know</h4>
    <ul>
      <li><strong>Achromatic objective (1830s on):</strong> Corrects chromatic aberration for two wavelengths. Standard in most antique instruments.</li>
      <li><strong>Apochromatic objective (1886):</strong> Corrects for three wavelengths. Marked "Apo." Still optically competitive today.</li>
      <li><strong>Tube length:</strong> Pre-1976 Leitz = 170mm; Zeiss and most others = 160mm (DIN). Verify before buying objectives.</li>
      <li><strong>RMS thread:</strong> Royal Microscopical Society standard (20.32mm) — used from ~1857. Objectives interchangeable between makers.</li>
      <li><strong>Parfocal distance:</strong> Most pre-WWII objectives are 37mm (short barrel); post-war 45mm DIN. NOT interchangeable without shimming.</li>
    </ul>
  </div>
</div>
<div class="science-card">
  <h4>🔬 Famous Instruments — Where Science History Was Made</h4>
  <div class="science-fact"><div class="sf-year">1673</div><div class="sf-text"><strong>Antonie van Leeuwenhoek</strong> first observes bacteria and protozoa — discovering the microbial world. His single-lens instruments achieved ~270× magnification.</div></div>
  <div class="science-fact"><div class="sf-year">1858</div><div class="sf-text"><strong>Rudolf Virchow</strong> uses a Schiek compound microscope to establish cellular pathology — "every cell comes from a cell."</div></div>
  <div class="science-fact"><div class="sf-year">1876</div><div class="sf-text"><strong>Robert Koch</strong> photographs anthrax bacteria using Zeiss objectives — his landmark bacteriology papers relied on this combination.</div></div>
  <div class="science-fact"><div class="sf-year">1882</div><div class="sf-text"><strong>Robert Koch</strong> identifies <em>Mycobacterium tuberculosis</em> using a Zeiss microscope with Abbe condenser. The specific microscope is preserved in Berlin.</div></div>
  <div class="science-fact"><div class="sf-year">1886</div><div class="sf-text"><strong>Ernst Abbe &amp; Carl Zeiss</strong> introduce the apochromatic objective and compensating eyepiece system — defining professional microscopy optics to the present day.</div></div>
  <div class="science-fact"><div class="sf-year">1932</div><div class="sf-text"><strong>Frits Zernike</strong> invents phase contrast microscopy, enabling visualization of living, unstained cells. Commercial instruments appear by the mid-1940s. Nobel Prize 1953.</div></div>
</div>
${renderBinoSection()}
<div class="auth-guide">
  <h4>✅ Authentication &amp; Buying Checklist</h4>
  <div class="auth-row"><span class="check">✓</span><span>Check for the maker's name and city engraved or cast into the arm or base — all legitimate period instruments are signed.</span></div>
  <div class="auth-row"><span class="check">✓</span><span>Verify a period serial number against known databases (Leitz serial list, Zeiss Archive) to confirm the date matches the physical features.</span></div>
  <div class="auth-row"><span class="check">✓</span><span>Inspect objectives — period objectives should have the maker name, magnification, and aperture engraved. Original cases add significant value.</span></div>
  <div class="auth-row"><span class="check">✓</span><span>Test all mechanical functions: focus should be smooth, stage movement should have no slop. Seized mechanics are repairable; stripped gears are a problem.</span></div>
  <div class="auth-row"><span class="check">✓</span><span>Check optics against a light source — look for fungal haze, delamination, or cleaning marks in the center of field.</span></div>
  <div class="auth-row"><span class="warn">✗</span><span><strong>Beware of modern Chinese brass reproductions</strong> — sold as "antique" on eBay and Etsy. These lack maker signatures and feel toylike compared to genuine Victorian instruments.</span></div>
  <div class="auth-row"><span class="warn">✗</span><span><strong>Avoid re-lacquered or re-painted instruments</strong> — original patina, even tarnished, is preferable to a bright re-finish.</span></div>
  <div class="auth-row"><span class="warn">✗</span><span><strong>Mixed-maker assemblies:</strong> Check that objectives, condenser, and eyepieces are from the same maker and era as the stand.</span></div>
</div>
<div class="antique-tip">
  <strong>Collector's Note:</strong> Prices shown are estimated current ranges for complete, functional examples in good original condition. <strong>Condition is everything</strong> — a complete cased binocular with all original accessories can fetch 3–5× a bare instrument. Best markets: Bonhams and Christie's for top pieces; eBay completed listings for market reference; Quekett Microscopical Club meets for peer-priced transactions.
</div>
<div class="antique-filters">
  <div class="af-group">
    <span class="af-label">ERA:</span>
    ${[{id:'all',label:'All Eras'},...eras].map(e=>`<button class="af-btn${F.era===e.id?' active':''}" onclick="AF.era('${e.id}')">${e.label}</button>`).join('')}
  </div>
  <div class="af-divider"></div>
  <div class="af-group">
    <span class="af-label">ORIGIN:</span>
    ${['All','British','German','American','French','Austrian','Japanese','Swiss','Italian'].map(o=>`<button class="af-btn${F.origin===o?' active':''}" onclick="AF.origin('${o}')">${o}</button>`).join('')}
  </div>
  <div class="af-divider"></div>
  <div class="af-group">
    <span class="af-label">HEAD TYPE:</span>
    ${['All','Monocular only','Binocular available','Binocular dedicated','Trinocular available'].map(h=>`<button class="af-btn${F.head===h?' active':''}" onclick="AF.head('${h}')">${h}</button>`).join('')}
  </div>
  <div class="af-divider"></div>
  <div class="af-group">
    <span class="af-label">VALUE:</span>
    ${['All','Under $500','$500–$2k','$2k–$10k','$10k+'].map(v=>`<button class="af-btn${F.value===v?' active':''}" onclick="AF.value('${v}')">${v}</button>`).join('')}
  </div>
</div>
${renderAntiqueGrid()}
<div class="resources-strip">
  <h4>Further Reading &amp; Resources</h4>
  <div class="res-links">
    <span class="res-link" onclick="window.open('https://www.quekett.org','_blank')">Quekett Microscopical Club</span>
    <span class="res-link" onclick="window.open('https://www.rms.org.uk','_blank')">Royal Microscopical Society</span>
    <span class="res-link" onclick="window.open('https://antique-microscopes.com','_blank')">antique-microscopes.com</span>
    <span class="res-link" onclick="window.open('https://microscopy-uk.org.uk','_blank')">Microscopy-UK / Micscape</span>
    <span class="res-link" onclick="window.open('https://www.zeiss.com/corporate/en/about-zeiss/past/history/archives.html','_blank')">Zeiss Archive</span>
    <span class="res-link" onclick="window.open('https://zeisshistorica.org','_blank')">Zeiss Historica Society</span>
  </div>
</div>
</div>`;
}

function renderBinoSection(){
  return`<div class="bino-section">
<h3>👁️ Binocular &amp; Trinocular Heads: A Complete History</h3>
<p class="bino-intro">The progression from monocular to binocular to trinocular heads spans three centuries and represents one of the most important ergonomic and scientific advances in microscopy. Understanding this timeline helps collectors identify the capabilities and rarity of any antique instrument.</p>
<div class="bino-callout">
  <strong>Why binocular matters for collectors:</strong> Before the Wenham prism (1860), essentially all compound microscopes were monocular. Binocular instruments were expensive, difficult to make, and rare. A genuine Victorian Wenham binocular from a top maker (Powell &amp; Lealand, Ross, Beck, Watson) represents the pinnacle of 19th-century instrument making and commands a significant premium. Trinocular instruments from before 1960 are genuinely uncommon — the Leitz FS trinocular tube (1953) was the first widely adopted design, and pre-war examples with camera ports are exceptional finds.
</div>
<div class="tl-legend">
  <div class="tl-leg-item"><div class="tl-leg-dot" style="background:var(--amber-bright)"></div>Pioneering invention</div>
  <div class="tl-leg-item"><div class="tl-leg-dot" style="background:var(--blue)"></div>Major commercial development</div>
  <div class="tl-leg-item"><div class="tl-leg-dot" style="background:var(--purple)"></div>Trinocular / photomicrography milestone</div>
  <div class="tl-leg-item"><div class="tl-leg-dot" style="background:var(--green)"></div>Era shift / industry standard</div>
</div>
<div class="timeline">
  <div class="tl-item"><div class="tl-year">1677</div><div class="tl-dot dot-pioneer"></div><div class="tl-content"><div class="tl-title">First Binocular Microscope Concept</div><div class="tl-desc">Chérubin d'Orléans adapts the binocular telescope principle to a microscope — two complete monocular systems side by side. The image is pseudoscopic (relief appears reversed) and the design is impractical for high-power work, but the concept is established.</div><div class="tl-maker">Chérubin d'Orléans, France</div></div></div>
  <div class="tl-item"><div class="tl-year">1853</div><div class="tl-dot dot-pioneer"></div><div class="tl-content"><div class="tl-title">Riddell Prism Binocular — First Single-Objective Design</div><div class="tl-desc">Prof. John Leonard Riddell (Tulane University) presents the first binocular microscope using a single objective with a prism to split the light beam to both eyes. Still pseudoscopic, but a critical conceptual breakthrough. Nachet independently develops a similar prism binocular in Paris the same year.</div><div class="tl-maker">J.L. Riddell, New Orleans; C. Nachet, Paris</div></div></div>
  <div class="tl-item"><div class="tl-year">1860–61</div><div class="tl-dot dot-pioneer"></div><div class="tl-content"><div class="tl-title">Wenham Prism — The Dominant Victorian Binocular</div><div class="tl-desc">Francis Herbert Wenham (marine engineer turned optical adviser to Ross) presents his reflecting dividing prism to the Microscopical Society of London on 12 December 1860. The Wenham prism divides the emergent pencil of light geometrically — one half to each eye via a half-silvered prism above the objective — producing an orthoscopic (correct relief) image at medium power. Interpupillary adjustment via rack-and-pinion. This design is immediately adopted by nearly every British and American maker and remains the standard binocular arrangement for 60+ years. Converts existing monoculars from Ross, Beck, Watson, Powell &amp; Lealand.</div><div class="tl-maker">F.H. Wenham (optical adviser to Ross &amp; Co.); adopted by Smith Beck &amp; Beck, Watson, Powell &amp; Lealand, Bausch &amp; Lomb, Zentmayer</div></div></div>
  <div class="tl-item"><div class="tl-year">c.1862</div><div class="tl-dot dot-major"></div><div class="tl-content"><div class="tl-title">First Commercial Wenham Binoculars</div><div class="tl-desc">Smith Beck &amp; Beck (formerly Smith &amp; Beck) manufacture the first commercial Universal Model binocular microscopes incorporating the Wenham prism body. Ross follows immediately. Within five years, all leading English makers offer binocular bodies. These are available as complete instruments or as conversion kits for existing monoculars. Limitation: the aperture of the objective is halved, so resolution is reduced in binocular mode.</div><div class="tl-maker">Smith Beck &amp; Beck, R. &amp; J. Beck, Andrew Ross, W. Watson &amp; Sons</div></div></div>
  <div class="tl-item"><div class="tl-year">c.1876</div><div class="tl-dot dot-major"></div><div class="tl-content"><div class="tl-title">American Wenham Binoculars — Bausch &amp; Lomb and Zentmayer</div><div class="tl-desc">Bausch &amp; Lomb introduces the Universal Model microscope with binocular tubes, bringing the Wenham binocular to the American market at scale. Zentmayer (Philadelphia) offers his Grand American and Centennial models with binocular option. The binocular head becomes a mark of a serious research instrument in American universities and hospitals.</div><div class="tl-maker">Bausch &amp; Lomb (Rochester NY), J. Zentmayer (Philadelphia)</div></div></div>
  <div class="tl-item"><div class="tl-year">c.1890</div><div class="tl-dot dot-pioneer"></div><div class="tl-content"><div class="tl-title">Greenough Stereo Microscope — True Stereoscopic Vision</div><div class="tl-desc">Horatio S. Greenough collaborates with Carl Zeiss (Jena) to develop a microscope with two completely separate optical paths — one per eye — angled at 10–16°. Porro prisms in each path erect the image. Unlike the Wenham (which halves aperture and gives only partial stereopsis), the Greenough gives true 3D depth perception and retains full aperture in each path. This becomes the foundation of all modern stereo microscopes. Zeiss markets it commercially in the mid-1890s.</div><div class="tl-maker">H.S. Greenough &amp; Carl Zeiss, Jena</div></div></div>
  <div class="tl-item"><div class="tl-year">1900–1910</div><div class="tl-dot dot-major"></div><div class="tl-content"><div class="tl-title">Binocular Becomes Standard on Research Instruments</div><div class="tl-desc">By the Edwardian era, a binocular head is considered essential on any serious research microscope. All major makers (Zeiss, Leitz, B&amp;L, Watson, Beck, Powell &amp; Lealand) include binocular models in their standard catalogues. Interpupillary distance (IPD) is now adjustable on most instruments. The Wenham prism design is refined but unchanged in principle. German makers (Zeiss, Leitz) begin offering alternative prism arrangements that preserve more of the objective's full aperture.</div><div class="tl-maker">All major makers; Zeiss and Leitz lead in optical refinement</div></div></div>
  <div class="tl-item"><div class="tl-year">c.1910–1930</div><div class="tl-dot dot-major"></div><div class="tl-content"><div class="tl-title">Inclined Binocular Tubes — Ergonomics Improve</div><div class="tl-desc">The early Wenham binoculars use straight vertical tubes requiring the observer to look directly downward, causing neck strain. The transition era sees the introduction of inclined binocular heads (typically 30° or 45°), first on German instruments (Zeiss, Leitz) then adopted universally. This is a major ergonomic improvement enabling extended microscopy sessions. The inclined binocular head at 45° becomes the universal standard for research instruments.</div><div class="tl-maker">Carl Zeiss (Jena), E. Leitz (Wetzlar), Bausch &amp; Lomb</div></div></div>
  <div class="tl-item"><div class="tl-year">c.1930s</div><div class="tl-dot dot-major"></div><div class="tl-content"><div class="tl-title">Fixed vs. Adjustable IPD — Modern Head Ergonomics</div><div class="tl-desc">Early binocular heads had limited interpupillary distance (IPD) adjustment — the tube separation was altered by physically sliding tubes. Modern binocular heads introduce smooth, wide-range IPD adjustment (typically 48–75mm) via a rotating hinge mechanism, diopter adjustment on both eyepiece tubes, and matched eyepiece parfocality. This is the design used on all modern research microscopes and first appears on top-tier instruments from Zeiss and Leitz in the 1930s.</div><div class="tl-maker">Carl Zeiss Jena, E. Leitz Wetzlar</div></div></div>
  <div class="tl-item"><div class="tl-year">c.1850–1940</div><div class="tl-dot dot-trinocular"></div><div class="tl-content"><div class="tl-title">Photomicrography Before Trinoculars — Adapter Methods</div><div class="tl-desc">Before dedicated trinocular ports, photomicrography was accomplished by replacing an eyepiece with a camera bellows adapter, or using a separate vertical photographic tube alongside the binocular head. The Leitz Aristophot stand (introduced 1941) became the industry standard for photomicrography using this approach — a dedicated photographic column with the binocular head for simultaneous viewing and photography using a beam-splitting arrangement.</div><div class="tl-maker">E. Leitz (Aristophot, 1941), Carl Zeiss, Bausch &amp; Lomb</div></div></div>
  <div class="tl-item"><div class="tl-year">c.1953</div><div class="tl-dot dot-trinocular"></div><div class="tl-content"><div class="tl-title">Leitz FS Trinocular Tube — First Practical Trinocular Standard</div><div class="tl-desc">Ernst Leitz Wetzlar introduces the FS (Foto-Schnellwechsel, "fast photo change") trinocular tube, providing a dedicated third vertical port for a camera while both eyepieces remain in use. A beam-splitting prism divides light: typically 80% to eyepieces, 20% to the camera port (or switched 100% to camera via lever). This becomes the <em>de facto</em> standard that all subsequent makers follow. Zeiss, Nikon, Olympus, and B&amp;L all introduce comparable trinocular heads within five years.</div><div class="tl-maker">Ernst Leitz Wetzlar (FS trinocular); Carl Zeiss, Nikon follow c.1955–1960</div></div></div>
  <div class="tl-item"><div class="tl-year">1955–1965</div><div class="tl-dot dot-era"></div><div class="tl-content"><div class="tl-title">Industry-Wide Trinocular Adoption</div><div class="tl-desc">The trinocular head becomes standard on all research-grade instruments from every major maker. Zeiss, Nikon, Olympus, and Bausch &amp; Lomb all introduce research stands with trinocular heads. The 35mm SLR camera adapts directly to the camera port. This era marks the beginning of systematic photomicrographic documentation in research. Instruments from this period (Zeiss Standard WL trinocular, Leitz Ortholux trinocular, Nikon S trinocular) represent the earliest practically accessible vintage trinoculars.</div><div class="tl-maker">All major makers — Zeiss (Standard WL), Leitz (Ortholux), Nikon (S series), Olympus (BH), B&amp;L</div></div></div>
</div>
</div>`;
}

function renderAntiqueGrid(){
  const F=AG.filters;
  let html='';
  for(const era of AG.eras){
    if(!era.items)continue;
    if(F.era!=='all'&&F.era!==era.id)continue;
    let rows=era.items.filter(i=>{
      if(F.origin!=='All'&&i.origin!==F.origin)return false;
      if(F.value!=='All'){
        const v=i.valueBand;
        if(F.value==='Under $500'&&v!=='low')return false;
        if(F.value==='$500–$2k'&&v!=='mid')return false;
        if(F.value==='$2k–$10k'&&v!=='high')return false;
        if(F.value==='$10k+'&&v!=='ultra')return false;
      }
      if(F.head!=='All'){
        if(F.head==='Monocular only'&&!i.heads.includes('mono'))return false;
        if(F.head==='Binocular available'&&!i.heads.includes('bino'))return false;
        if(F.head==='Binocular dedicated'&&(i.heads.includes('mono')||!i.heads.includes('bino')))return false;
        if(F.head==='Trinocular available'&&!i.heads.includes('tri'))return false;
      }
      return true;
    });
    if(!rows.length)continue;
    const rarityLbl={common:'Common',scarce:'Scarce',rare:'Rare',exceptional:'Exceptional'};
    const valCls={low:'v-low',mid:'v-mid',high:'v-high',ultra:'v-ultra'};
    const headLabels={'mono':'Monocular','bino':'Wenham Bino','bino-only':'Bino Dedicated','stereo':'Stereo','tri':'Trinocular'};
    const headCls={'mono':'ht-mono','bino':'ht-bino','bino-only':'ht-bino-only','stereo':'ht-stereo','tri':'ht-tri'};
    html+=`<div class="era-section">
<div class="era-header"><span class="era-icon">${era.icon}</span><div><div class="era-title">${era.title}</div><div class="era-sub">${era.sub}</div></div><span class="era-count">${rows.length} instrument${rows.length!==1?'s':''}</span></div>
<div class="antique-table-wrap"><table class="antique-table">
<thead><tr><th>Maker</th><th>Model / Series</th><th>Origin</th><th>Years</th><th>Head Type(s)</th><th>Construction</th><th>Key Features &amp; Significance</th><th>Rarity</th><th>Est. Value (complete)</th></tr></thead>
<tbody>${rows.map(i=>`<tr>
<td><div class="at-maker">${i.maker}</div></td>
<td><div class="at-model">${i.model}</div></td>
<td class="at-origin"><span class="flag-sm">${i.flag}</span>${i.origin}</td>
<td class="at-years">${i.years}</td>
<td><div class="headtype-pills">${(i.heads||['mono']).map(h=>`<span class="ht-pill ${headCls[h]||'ht-mono'}">${headLabels[h]||h}</span>`).join('')}</div></td>
<td><span style="font-size:.87rem;color:var(--text2)">${i.construction}</span></td>
<td class="at-features">${i.features}</td>
<td><span class="rarity-pill r-${i.rarity}">${rarityLbl[i.rarity]}</span></td>
<td><span class="value-range ${valCls[i.valueBand]}">${i.value}</span></td>
</tr>`).join('')}
</tbody></table></div></div>`;
  }
  if(!html)html=`<div class="empty-state"><h3>No instruments match</h3><p>Try adjusting the filters above.</p></div>`;
  return html;
}

const AF={
  era(v){AG.filters.era=v;renderGuide(document.getElementById('main'))},
  origin(v){AG.filters.origin=v;renderGuide(document.getElementById('main'))},
  value(v){AG.filters.value=v;renderGuide(document.getElementById('main'))},
  head(v){AG.filters.head=v;renderGuide(document.getElementById('main'))}
};

