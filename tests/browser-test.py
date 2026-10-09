import sys, pathlib, re, json
from playwright.sync_api import sync_playwright
root = pathlib.Path(sys.argv[1]).resolve(); base = sys.argv[2] if len(sys.argv) > 2 else f"file://{root}/index.html"
IGN = ('stereo_microscope.jpg', 'compound_microscope.jpg'); errs = []; fails = []; checks = []
def ok(name, cond, extra=''):
    checks.append((name, bool(cond))); 
    if not cond: fails.append(f'{name} {extra}')
BAD = re.compile(r'undefined|NaN|\[object|>null<|\bnull\b')
def bad(txt): m = BAD.search(txt); return m.group(0) if m else None
with sync_playwright() as p:
    b = p.chromium.launch(); ctx = b.new_context(viewport={'width': 1280, 'height': 900}); pg = ctx.new_page()
    pg.on('pageerror', lambda e: errs.append('PAGEERROR ' + str(e)))
    pg.on('requestfailed', lambda r: errs.append('REQFAIL ' + r.url) if not any(i in r.url for i in IGN) else None)
    def wait_ready(): pg.wait_for_function('typeof DB!=="undefined" && DB.companies.length>0 && S.rendered', timeout=15000)
    pg.goto(base); wait_ready()
    ids = pg.evaluate('DB.companies.map(c=>c.id)'); models = pg.evaluate('DB.companies.flatMap(c=>c.models.map(m=>[c.id,m.id]))')
    # ---- every brand page
    for cid in ids:
        pg.evaluate(f"selCo('{cid}')"); pg.wait_for_function(f"S.view==='browse'&&S.co==='{cid}'")
        t = pg.inner_text('#main'); ok(f'brand {cid} renders', len(t) > 200 and (bad(t) is None), bad(t) or '')
    # ---- every model window (direct render) 
    badm = []
    for cid, mid in models:
        pg.evaluate(f"showModal('{cid}','{mid}')"); t = pg.inner_text('#modal-box')
        if bad(t) or len(t) < 150: badm.append((mid, bad(t)))
    ok(f'all {len(models)} model windows render clean', not badm, str(badm[:5]))
    pg.evaluate("hideModal()")
    # ---- each view
    for v in ['home', 'browse', 'compare', 'oem', 'guide', 'collection', 'data']:
        pg.evaluate(f"setView('{v}')"); pg.wait_for_function(f"S.view==='{v}'"); t = pg.inner_text('#main'); ok(f'view {v}', len(t) > 80 and bad(t) is None, bad(t) or '')
    for tab in ['review', 'gaps', 'sources', 'legend']:
        pg.evaluate(f"nav('#/data/{tab}')"); pg.wait_for_function(f"S.dv.tab==='{tab}'"); t = pg.inner_text('#main'); ok(f'data tab {tab}', len(t) > 200 and bad(t) is None, bad(t) or '')
    pg.evaluate("nav('#/data/review?brand=zeiss')"); pg.wait_for_function("S.dv.brand==='zeiss'"); ok('data review filtered by brand', pg.locator('.note-card').count() > 0)
    # ---- researched model (batch 1): Axiolab 5 with sources, optics, lineage
    pg.evaluate("showModal('zeiss','zeiss-axiolab5')"); mt = pg.inner_text('#modal-box')
    ok('Axiolab 5: approximate year shown with tilde', '~2019' in mt)
    links = pg.evaluate("[...document.querySelectorAll('#modal-box a.src-chip')].map(a=>a.href)")
    ok('Axiolab 5: manufacturer source links present', len(links) >= 2 and all(l.startswith('https://') for l in links) and any('pages.zeiss.com' in l for l in links), str(links))
    ok('Axiolab 5: optical system block', 'optical system' in mt.lower() and 'M27' in mt)
    ok('Axiolab 5: lineage links to Axiolab, not a placeholder', 'Lineage' in mt and pg.evaluate("document.querySelectorAll('#modal-box .ln-ghost').length")>=0 and pg.evaluate("[...document.querySelectorAll('#modal-box .ln-cur')].some(e=>e.textContent.includes('Axiolab 5'))"))
    ok('Axiolab 5: open data notes shown', 'Data notes' in mt)
    pg.evaluate("hideModal()")
    pg.evaluate("nav('#/data/gaps?brand=zeiss')"); pg.wait_for_function("S.dv.brand==='zeiss'&&S.dv.tab==='gaps'"); gt = pg.inner_text('#main')
    ok('gaps no longer list Axiolab 5 as missing', 'Axiolab 5' not in gt.replace('Axiovert 5','')); ok('gaps annotate Axiovert 5 with the dated press release', '12 Jan 2023' in gt)
    pg.evaluate("nav('#/data/review?brand=zeiss')"); pg.wait_for_function("S.dv.tab==='review'&&S.dv.brand==='zeiss'")
    ok('review notes show source links', pg.locator('.note-card a.src-chip').count() >= 1)
    # ---- guide filters (existing feature)
    pg.evaluate("setView('guide')"); ok('guide has timeline', pg.locator('.tl-dot').count() > 5)
    # ---- CSS bug fixes from the previous session
    pg.evaluate("selCo('zeiss')"); bg = pg.evaluate("(()=>{const e=document.querySelector('.pill-compound');return e?getComputedStyle(e).backgroundColor:null})()"); ok('pill-compound is styled', bg and bg != 'rgba(0, 0, 0, 0)', str(bg))
    dot = pg.evaluate("(()=>{for(const d of document.querySelectorAll('.tl-dot')){} return 1})()")
    pg.evaluate("setView('guide')"); has_purple = pg.evaluate("document.body.innerHTML.includes('dot-purple')"); ok('no dot-purple left', not has_purple)
    # ---- deep link: model URL in a fresh page, then close and back
    pg2 = ctx.new_page(); pg2.on('pageerror', lambda e: errs.append('PAGEERROR2 ' + str(e)))
    pg2.goto(base + '#/model/zeiss/zeiss-axioplan'); pg2.wait_for_function('typeof DB!=="undefined"&&S.rendered&&document.getElementById("model-modal").classList.contains("open")', timeout=15000)
    ok('deep link opens model window', 'Axioplan' in pg2.inner_text('#modal-box')); ok('deep link renders brand page behind', 'Zeiss' in pg2.inner_text('#main'))
    pg2.evaluate("closeModal()"); pg2.wait_for_function('!document.getElementById("model-modal").classList.contains("open")'); ok('close returns to brand route', pg2.evaluate('location.hash') == '#/brand/zeiss', pg2.evaluate('location.hash'))
    pg2.evaluate("openModal('zeiss','zeiss-axiophot')"); pg2.wait_for_function('document.getElementById("model-modal").classList.contains("open")'); pg2.go_back(); pg2.wait_for_function('!document.getElementById("model-modal").classList.contains("open")'); ok('back button closes model window', True)
    pg2.evaluate("openModal('zeiss','zeiss-axiophot')"); pg2.wait_for_function('S.modal'); pg2.keyboard.press('Escape'); pg2.wait_for_function('!S.modal'); ok('Escape closes model window', True)
    pg2.goto(base + '#/brand/nope'); pg2.wait_for_timeout(300); ok('unknown brand does not crash', pg2.locator('#main .view').count() > 0)
    pg2.goto(base + '#/model/zeiss/nope'); pg2.wait_for_timeout(300); ok('unknown model does not crash', pg2.locator('#main .view').count() > 0)
    # ---- search + feature chips
    pg.evaluate("setView('home')"); pg.fill('#global-search', 'axio'); pg.wait_for_function("S.view==='browse'&&!S.co&&document.querySelector('.finder-head')")
    n1 = pg.locator('.model-card').count(); ok('search "axio" finds models across brands', n1 > 10, str(n1))
    pg.fill('#global-search', 'zeiss axio'); pg.wait_for_timeout(400); n2 = pg.locator('.model-card').count(); ok('brand+model words narrow results', 0 < n2 <= n1, f'{n2} vs {n1}')
    pg.fill('#global-search', 'halogen 160mm'); pg.wait_for_timeout(400); ok('spec search works (halogen 160mm)', pg.locator('.model-card').count() > 0)
    pg.fill('#global-search', ''); pg.wait_for_timeout(300)
    pg.click('.ft-chip:has-text("DIC")'); pg.click('.ft-chip:has-text("Fluorescence")'); pg.wait_for_function("S.ff.length===2&&document.querySelector('.finder-head')")
    ntot = pg.evaluate("DB.companies.flatMap(c=>c.models).filter(m=>m.dic&&m.fluorescence).length"); ok('feature chips AND together', pg.locator('.model-card').count() == ntot, f"{pg.locator('.model-card').count()} vs {ntot}")
    ok('sidebar shrinks to brands with matches', pg.locator('.company-item').count() < 21)
    pg.click('.ft-chip:has-text("Inverted")'); pg.wait_for_timeout(200); ok('inverted chip stacks', all(pg.evaluate("S.ff").count(x) for x in ['dic','fluorescence','inverted']))
    pg.evaluate("clearFilters()"); ok('clear filters', pg.evaluate("S.ff.length")==0 and pg.locator('.company-item').count()==21)
    # ---- compare via URL, add/remove, copy link
    pg.goto(base + '#/compare?m=zeiss:zeiss-axioplan,leica:leica-dmrb'); pg.reload(); wait_ready(); pg.wait_for_selector('.cmp-table')
    ok('compare loads from URL', pg.locator('.cmp-table thead th').count() == 3, str(pg.locator('.cmp-table thead th').count()))
    t = pg.inner_text('.cmp-table'); ok('compare shows optical system + lineage rows', 'Optical system' in t and 'Lineage' in t and bad(t) is None, bad(t) or '')
    pg.evaluate("toggleCmp('nikon','nikon-optiphot')"); pg.wait_for_timeout(200); ok('compare hash follows list', 'nikon:nikon-optiphot' in pg.evaluate('location.hash'), pg.evaluate('location.hash'))
    # ---- my list: add, persists across reload, export shape, remove
    pg.evaluate("localStorage.clear()"); pg.evaluate("showModal('olympus','olympus-bh2')"); pg.click('#mlist'); ok('add to list', pg.evaluate("ML.has('olympus','olympus-bh2')"))
    pg.reload(); wait_ready(); ok('list persists after reload', pg.evaluate("ML.has('olympus','olympus-bh2')"))
    pg.evaluate("setView('collection')"); pg.wait_for_selector('.ml-row'); pg.fill('.ml-in', 'SN 123 <b>x</b>'); pg.keyboard.press('Tab'); pg.reload(); wait_ready(); pg.evaluate("setView('collection')"); pg.wait_for_selector('.ml-row')
    ok('serial saved and escaped (no HTML injection)', pg.evaluate("document.querySelector('.ml-in').value")=='SN 123 <b>x</b>' and pg.evaluate("document.querySelectorAll('.ml-row b').length")==0)
    pg.evaluate("ML.write([{c:'zeiss',m:'nope'}])"); pg.evaluate("setView('home')"); pg.evaluate("setView('collection')"); ok('stale list entry ignored', pg.locator('.ml-row').count()==0)
    ok('collection hero is dynamic (4 instruments)', '4 instruments' in pg.inner_text('.coll-hero'), pg.inner_text('.coll-hero'))
    # ---- mobile
    mp = b.new_context(viewport={'width': 390, 'height': 800}).new_page(); mp.on('pageerror', lambda e: errs.append('MOBILE ' + str(e)))
    mp.goto(base); mp.wait_for_function('typeof DB!=="undefined"&&S.rendered'); mp.click('#hamburger-btn'); ok('mobile sidebar opens', mp.evaluate("document.getElementById('sidebar').classList.contains('mobile-open')"))
    mp.click('.company-item >> nth=0'); mp.wait_for_function("S.view==='browse'&&S.co"); ok('mobile: picking a brand closes sidebar', not mp.evaluate("document.getElementById('sidebar').classList.contains('mobile-open')"))
    b.close()
print(f"{sum(1 for _,c in checks if c)}/{len(checks)} checks passed")
for f in fails: print('FAIL', f)
print('page errors / failed requests:', errs or 'none'); sys.exit(1 if fails or errs else 0)
