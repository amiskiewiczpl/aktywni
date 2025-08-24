// ===== ROUTER (hash) =====
const routes = {
  '/': () => renderTemplate('home-tpl'),
  '/wydarzenia': renderEventsView,
  '/nowe': () => guardOrganizer(() => renderTemplate('create-tpl', initCreateForm)),
  '/login': renderLoginView,
  '/profil': renderProfileView,
};

function renderTemplate(id, after) {
  const tpl = document.getElementById(id);
  document.getElementById('app').innerHTML = tpl.innerHTML;
  after && after();
}

function setActiveNav() {
  const hash = location.hash.replace('#','');
  document.querySelectorAll('header .btn').forEach(a=>a.classList.remove('active'));
  if(hash.startsWith('/wydarzenia')) document.getElementById('nav-events').classList.add('active');
  if(hash.startsWith('/nowe')) document.getElementById('nav-create').classList.add('active');
  if(hash.startsWith('/login')) document.getElementById('nav-login').classList.add('active');
  if(hash.startsWith('/profil')) document.getElementById('nav-profile').classList.add('active');
}

window.addEventListener('hashchange', ()=>{ setActiveNav(); route(); });
function route(){
  const path = location.hash.replace('#','') || '/';
  (routes[path] || routes['/'])();
  updateAuthNav();
}

// ===== PSEUDO‑AUTH (demo na localStorage) =====
const AUTH_KEY = 'aktywni:auth:user';
function getUser(){ try { return JSON.parse(localStorage.getItem(AUTH_KEY)); } catch { return null } }
function setUser(u){ localStorage.setItem(AUTH_KEY, JSON.stringify(u)); updateAuthNav(); }
function signOut(){ localStorage.removeItem(AUTH_KEY); updateAuthNav(); }

function updateAuthNav(){
  const u = getUser();
  const login = document.getElementById('nav-login');
  const prof  = document.getElementById('nav-profile');
  const create= document.getElementById('nav-create');
  if(!login || !prof) return;

  if(u){
    login.style.display = 'none';
    prof.style.display  = '';
    prof.textContent    = u.name ? `Profil (${u.name})` : 'Profil';
    create.classList.remove('link'); // organizer "demo" ma dostęp
  }else{
    login.style.display = '';
    prof.style.display  = 'none';
    prof.textContent    = 'Profil';
    create.classList.add('link');
  }
}

// Na razie każdy zalogowany jest „organizatorem” demka
function guardOrganizer(fn){
  const u = getUser();
  if(!u){ location.hash = '#/login'; return; }
  fn();
}

// ===== DANE DEMO (localStorage) =====
const STORE_KEY = 'aktywni:events:v1';
const SIGN_KEY  = 'aktywni:signups:v1';

function uid(){
  try{ if(window.crypto && window.crypto.randomUUID) return window.crypto.randomUUID(); }catch{}
  return 'id-'+Math.random().toString(36).slice(2)+Date.now();
}

const sample = [
  { id: uid(), title: 'Bieg nad Wisłą', datetime: addDaysISO(3, '18:00'), place:'Bulwary Wiślane, Warszawa', lat:52.237, lng:21.022, capacity: 20, taken: 5, banner:'https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=1200&auto=format&fit=crop', desc:'Lekki bieg ~6km, tempo konwersacyjne. Każdy mile widziany.' },
  { id: uid(), title: 'Siatkówka plażowa', datetime: addDaysISO(5, '17:30'), place:'Plaża Poniatówka', lat:52.234, lng:21.040, capacity: 12, taken: 9, banner:'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop', desc:'Gramy 3×3, poziom rekreacyjny. Zabierz wodę i uśmiech :)' },
  { id: uid(), title: 'Joga w parku', datetime: addDaysISO(2, '08:30'), place:'Park Skaryszewski', lat:52.244, lng:21.056, capacity: 25, taken: 12, banner:'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1200&auto=format&fit=crop', desc:'Poranna sesja vinyasa, mata mile widziana.' }
];

function addDaysISO(d, time='10:00'){
  const dt = new Date(Date.now() + d*24*3600*1000);
  const yyyy = dt.getFullYear();
  const mm = String(dt.getMonth()+1).padStart(2,'0');
  const dd = String(dt.getDate()).padStart(2,'0');
  return `${yyyy}-${mm}-${dd}T${time}`;
}
function loadEvents(){
  const raw = localStorage.getItem(STORE_KEY);
  if(raw){ try { return JSON.parse(raw); } catch(e){ console.warn(e); } }
  localStorage.setItem(STORE_KEY, JSON.stringify(sample));
  return sample;
}
function saveEvents(list){ localStorage.setItem(STORE_KEY, JSON.stringify(list)); }
function loadSignups(){ return JSON.parse(localStorage.getItem(SIGN_KEY) || '{}'); }
function saveSignups(v){ localStorage.setItem(SIGN_KEY, JSON.stringify(v)); }

// ===== LISTA WYDARZEŃ =====
function renderEventsView(){
  renderTemplate('events-tpl');
  const listEl = document.getElementById('events-list');
  const events = loadEvents().sort((a,b)=> new Date(a.datetime) - new Date(b.datetime));
  listEl.innerHTML = '';
  events.forEach(ev=> listEl.appendChild(eventCard(ev)) );
}
function eventCard(ev){
  const li = document.createElement('div');
  li.className = 'event';
  li.innerHTML = `
    <div class="banner">${ev.banner ? `<img src="${ev.banner}" alt="${ev.title}">` : ''}</div>
    <div>
      <div class="title">${ev.title}</div>
      <div class="meta">${fmtDate(ev.datetime)} · ${ev.place}</div>
    </div>
    <div style="display:flex; gap:8px; align-items:center">
      ${capacityPillHTML(ev)}
      <button class="btn" aria-label="Otwórz szczegóły">Szczegóły</button>
    </div>`;
  li.querySelector('button').addEventListener('click', ()=> openEventModal(ev.id));
  return li;
}
function capacityPillHTML(ev){
  const left = Math.max(0, ev.capacity - (ev.taken||0));
  const cls = left===0? 'none' : left<5? 'low' : 'ok';
  return `<span class="pill ${cls}">${left} wolnych</span>`;
}

// ===== TWORZENIE WYDARZENIA =====
function initCreateForm(){
  const form = document.getElementById('create-form');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const fd = new FormData(form);
    const ev = Object.fromEntries(fd.entries());
    ev.id = uid();
    ev.capacity = Number(ev.capacity)||1; ev.taken = 0;
    ev.lat = parseFloat(ev.lat); ev.lng = parseFloat(ev.lng);
    saveEvents([ ...loadEvents(), ev ]);
    location.hash = '#/wydarzenia';
  });
}

// ===== LOGIN =====
function renderLoginView(){
  renderTemplate('login-tpl', ()=>{
    const form = document.getElementById('login-form');
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const { email, name } = Object.fromEntries(new FormData(form).entries());
      setUser({ uid: uid(), email, name });
      location.hash = '#/profil';
    });
  });
}

// ===== PROFIL =====
function renderProfileView(){
  const u = getUser();
  if(!u){ location.hash = '#/login'; return; }
  renderTemplate('profile-tpl', ()=>{
    const box = document.getElementById('profile-box');
    box.innerHTML = `
      <div class="meta">Zalogowano jako:</div>
      <div style="font-weight:700">${u.name || '(bez imienia)'}</div>
      <div class="meta">${u.email}</div>
    `;
    document.getElementById('btn-logout').addEventListener('click', ()=>{
      signOut();
      location.hash = '#/login';
    });
  });
}

// ===== MODAL + MAPA =====
let map, marker;
function openEventModal(id){
  const ev = loadEvents().find(x=>x.id===id); if(!ev) return;

  document.getElementById('m-title').textContent = ev.title;
  document.getElementById('m-title-sm').textContent = ev.title;
  document.getElementById('m-when').textContent = fmtDate(ev.datetime);
  document.getElementById('m-place').textContent = ev.place;
  document.getElementById('m-desc').textContent = ev.desc||'';
  document.getElementById('m-cap-pill').outerHTML = capacityPillHTML(ev);
  const banner = document.getElementById('m-banner');
  banner.innerHTML = ev.banner? `<img src="${ev.banner}" alt="${ev.title}" style="width:100%; height:100%; object-fit:cover">` : '';

  const modal = document.getElementById('event-modal');
  modal.classList.add('open');
  if(!map){
    map = L.map('map');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; OpenStreetMap' }).addTo(map);
  }
  map.setView([ev.lat, ev.lng], 14);
  if(marker){ marker.remove(); }
  marker = L.marker([ev.lat, ev.lng]).addTo(map).bindPopup(ev.title);

  const form = document.getElementById('join-form');
  form.onsubmit = (e)=>{
    e.preventDefault();
    const { name, email } = Object.fromEntries(new FormData(form).entries());
    const events = loadEvents();
    const idx = events.findIndex(x=>x.id===id);
    const left = events[idx].capacity - (events[idx].taken||0);
    const msg = document.getElementById('join-msg');
    if(left<=0){ msg.innerHTML = '<span class="danger">Brak miejsc</span>'; return; }
    events[idx].taken = (events[idx].taken||0) + 1; saveEvents(events);
    const signups = loadSignups();
    (signups[id] = signups[id] || []).push({name, email, at: new Date().toISOString()});
    saveSignups(signups);
    msg.innerHTML = '<span class="success">Jesteś zapisany/a! Do zobaczenia 🔥</span>';
    renderEventsView();
  };
}

document.getElementById('m-close').addEventListener('click', ()=> document.getElementById('event-modal').classList.remove('open'));
document.getElementById('event-modal').addEventListener('click', (e)=>{ if(e.target.id==='event-modal') e.currentTarget.classList.remove('open'); });

// ===== Utils =====
function fmtDate(iso){
  try{
    const d = new Date(iso);
    return d.toLocaleString('pl-PL', { weekday:'short', year:'numeric', month:'short', day:'numeric', hour:'2-digit', minute:'2-digit' });
  }catch{ return iso }
}

// ===== Start =====
document.getElementById('year').textContent = new Date().getFullYear();
if(!location.hash) location.hash = '#/';
setActiveNav();
route();
