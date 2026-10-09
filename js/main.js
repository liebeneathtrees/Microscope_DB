// BOOT — load the data files listed in data/manifest.js, build the indexes, then start the router.
MDB.loadData = function (done) {
  if (MDB.inlined) return done([]);                       // standalone build: everything is already in the page
  const list = [...MDB.manifest.brands.map(b => `data/brands/${b}.js`), ...MDB.manifest.datasets.map(d => `data/${d}.js`)];
  const failed = []; let pending = list.length;
  list.forEach(src => {
    const s = document.createElement('script'); s.src = src; s.async = false;   // async=false keeps the listed order
    s.onload = () => { if (!--pending) done(failed); };
    s.onerror = () => { failed.push(src); if (!--pending) done(failed); };
    document.head.appendChild(s);
  });
};
MDB.fail = function (failed) {
  const where = location.href.replace(/[#?].*$/, '');
  document.getElementById('sidebar').innerHTML = '';
  document.getElementById('main').innerHTML = `<div class="load-error"><strong>MicroscopeDB could not load its data files.</strong><br><br>
${failed.length ? `Missing (${failed.length}): <code>${failed.slice(0, 6).join('</code>, <code>')}</code>${failed.length > 6 ? ` and ${failed.length - 6} more` : ''}<br><br>` : 'The data loaded but contained no brands.<br><br>'}
This page is at <code>${where}</code>. Check that:<br>
• the <b>whole</b> folder is together: <code>index.html</code> plus the <code>css/</code>, <code>js/</code> and <code>data/</code> folders, with the folder names unchanged;<br>
• on GitHub, all of those folders were uploaded to the same branch and Pages is serving that branch (file names are case-sensitive; keep the <code>.nojekyll</code> file in the repository root);<br>
• or use <code>MicroscopeDB_standalone.html</code>, which needs no other files.</div>`;
};
MDB.start = function () {
  MDB.derive();
  renderFeatureChips();
  const foot = document.getElementById('sidebar-foot');
  if (foot) foot.innerHTML = `<a onclick="nav('#/data')">📋 Data notes</a><span>v${MDB.version} · ${DB.companies.reduce((s, c) => s + c.models.length, 0)} models · data ${MDB.built}</span>`;
  window.addEventListener('hashchange', applyRoute);
  window.addEventListener('resize', () => { if (!isMobile()) closeSidebar(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && S.modal) closeModal(); });
  applyRoute();
};
MDB.loadData(failed => { if (failed.length || !DB.companies.length) MDB.fail(failed); else MDB.start(); });
