// MY LIST — a personal list saved in this browser (localStorage), with JSON export/import.
// The published "My Collection" (data/collection.js) is separate and read-only.
const ML = {
  key: 'mdb.mylist.v1',
  read() { try { const a = JSON.parse(localStorage.getItem(this.key) || '[]'); return Array.isArray(a) ? a : []; } catch (e) { return []; } },
  write(a) { try { localStorage.setItem(this.key, JSON.stringify(a)); return true; } catch (e) { return false; } },
  available() { try { localStorage.setItem('mdb.test', '1'); localStorage.removeItem('mdb.test'); return true; } catch (e) { return false; } },
  has(c, m) { return this.read().some(x => x.c === c && x.m === m); },
  toggle(c, m) {
    const a = this.read(), i = a.findIndex(x => x.c === c && x.m === m);
    if (i >= 0) a.splice(i, 1); else a.push({ c, m, sn: '', note: '', added: new Date().toISOString().slice(0, 10) });
    return this.write(a);
  },
  update(c, m, field, val) { const a = this.read(), x = a.find(y => y.c === c && y.m === m); if (!x) return; x[field] = String(val).slice(0, 500); this.write(a); }
};
function toggleMyList(c, m) {
  if (!ML.toggle(c, m)) { alert('This browser is not allowing MicroscopeDB to save a list (private browsing or blocked storage).'); return; }
  const b = document.getElementById('mlist'); if (b) b.textContent = ML.has(c, m) ? '★ In My List' : '☆ Add to My List';
  if (S.view === 'collection') refreshMyList();
}
function myListHTML() {
  if (!ML.available()) return `<div class="ml-box"><h3>Your list</h3><p class="ml-note">Saving is not available in this browser mode, so a personal list can't be kept here.</p></div>`;
  const items = ML.read().map(x => ({ x, r: MDB.byModel.get(x.m) })).filter(i => i.r && i.r.co.id === i.x.c);
  const rows = items.map(({ x, r }) => `<div class="ml-row"><div class="ml-name"><a class="lk" onclick="openModal('${x.c}','${x.m}')">${r.co.shortName} ${r.m.name}</a><span>${introLabel(r.m)}${discLabel(r.m)}</span></div>
<input class="ml-in" placeholder="Serial number" value="${esc(x.sn)}" onchange="ML.update('${x.c}','${x.m}','sn',this.value)" aria-label="Serial number">
<input class="ml-in ml-wide" placeholder="Notes (condition, accessories…)" value="${esc(x.note)}" onchange="ML.update('${x.c}','${x.m}','note',this.value)" aria-label="Notes">
<button class="btn btn-outline ml-rm" onclick="toggleMyList('${x.c}','${x.m}')">Remove</button></div>`).join('');
  return `<div class="ml-box"><div class="ml-head"><h3>Your list <span class="ml-count">${items.length}</span></h3><div class="ml-actions"><button class="btn btn-outline" onclick="mlExport()">Export</button><label class="btn btn-outline ml-import">Import<input type="file" accept="application/json,.json" onchange="mlImport(this)" hidden></label></div></div>
<p class="ml-note">Saved only in this browser. Use <strong>Add to My List</strong> on any model. Export to back it up or move it to another device.</p>${rows || '<div class="ml-empty">Nothing here yet. Open any model and choose “Add to My List”.</div>'}</div>`;
}
function mountMyList(main) { const host = main.querySelector('.coll-view'); if (host) host.insertAdjacentHTML('beforeend', '<div id="ml-host">' + myListHTML() + '</div>'); }
function refreshMyList() { const h = document.getElementById('ml-host'); if (h) h.innerHTML = myListHTML(); }
function mlExport() {
  const blob = new Blob([JSON.stringify({ app: 'MicroscopeDB', list: ML.read() }, null, 1)], { type: 'application/json' });
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'microscopedb-my-list.json'; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}
function mlImport(input) {
  const f = input.files && input.files[0]; if (!f) return;
  const rd = new FileReader();
  rd.onload = () => {
    try {
      const j = JSON.parse(rd.result), arr = Array.isArray(j) ? j : j.list; if (!Array.isArray(arr)) throw new Error('no list');
      const cur = ML.read(); let added = 0;
      arr.forEach(x => { if (x && GM(x.c, x.m) && !cur.some(y => y.c === x.c && y.m === x.m)) { cur.push({ c: x.c, m: x.m, sn: String(x.sn || '').slice(0, 500), note: String(x.note || '').slice(0, 500), added: String(x.added || '').slice(0, 10) }); added++; } });
      ML.write(cur); refreshMyList(); toast(`Imported ${added} item${added !== 1 ? 's' : ''}`);
    } catch (e) { alert('That file is not a MicroscopeDB list.'); }
    input.value = '';
  };
  rd.readAsText(f);
}
