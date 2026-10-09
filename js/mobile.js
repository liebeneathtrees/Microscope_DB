// MOBILE SIDEBAR helpers. (The resize handler is registered once, in js/main.js.)
// ── MOBILE SIDEBAR ──
function isMobile(){return window.innerWidth<=768}
function toggleSidebar(){
  if(!isMobile())return;
  const open=document.getElementById('sidebar').classList.toggle('mobile-open');
  document.getElementById('sidebar-backdrop').classList.toggle('visible',open);
  document.getElementById('hamburger-btn').classList.toggle('is-open',open);
  document.body.style.overflow=open?'hidden':'';
}
function closeSidebar(){
  document.getElementById('sidebar').classList.remove('mobile-open');
  document.getElementById('sidebar-backdrop').classList.remove('visible');
  document.getElementById('hamburger-btn').classList.remove('is-open');
  document.body.style.overflow='';
}

