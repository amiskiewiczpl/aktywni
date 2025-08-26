// ===== ROUTER (hash) =====
import { initFirebase } from './firebase.js';
const { storage } = initFirebase() || {};

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

// ===== DEMO AUTH =====
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
    create.classList.remove('link');
  }else{
    login.style.display = '';
    prof.style.display  = 'none';
    prof.textContent    = 'Profil';
    create.classList.add('link');
  }
}
function guardOrganizer(fn){
  const u = getUser();
  if(!u){ location.hash = '#/login'; return; }
  fn();
}

// ===== SPORTY + POZIOMY =====
const SPORTS = {
  'Siatkówka': [
    'A1 – Początkujący','A2 – Odbijający','A3 – Grający',
    'B1 – Średniozaawansowany','B2 – Zaawansowany',
    'C1 – Półzawodowy','C2 – Zawodowy – PRO'
  ],
  'Tenis': ['NTRP 1.0','NTRP 1.5','NTRP 2.0','NTRP 2.5','NTRP 3.0','NTRP 3.5','NTRP 4.0','NTRP 4.5','NTRP 5.0','NTRP 5.5','NTRP 6.0','NTRP 7.0'],
  'Padel': ['Początkujący','Rekreacyjny','Średniozaawansowany','Zaawansowany','Turniejowy/Pro'],
  'Squash': ['Początkujący','Klubowy','Średniozaawansowany','Zaawansowany','Turniejowy/Pro'],
  'Piłka Nożna': ['Rekreacyjny','Amatorski','Półprofesjonalny','Zaawansowany'],
  'Kolarstwo': ['Rekreacyjne','Treningowe','Amatorskie wyścigi','Zaawansowane wyścigi'],
  'Koszykówka 3x3': ['Rekreacyjny','Ligowy amator','Średniozaawansowany','Zaawansowany','Turniejowy/Pro'],
  'Koszykówka': ['Rekreacyjny','Ligowy amator','Średniozaawansowany','Zaawansowany','Turniejowy/Pro'],
  'Badminton': ['Początkujący','Rekreacyjny','Średniozaawansowany','Zaawansowany','Turniejowy/Pro'],
  'Siatkówka plażowa': [
    'A1 – Początkujący','A2 – Odbijający','A3 – Grający',
    'B1 – Średniozaawansowany','B2 – Zaawansowany',
    'C1 – Półzawodowy','C2 – Zawodowy – PRO'
  ]
};
const CYCLING_DISTANCES = genRangeLabels(25, 25, 300, ' km'); // 25,50,...,300
const CYCLING_PACES = genBracketLabels(15, 5, 45, ' km/h');   // 15–20 ... 40–45
function genRangeLabels(start, step, end, suffix){ const a=[]; for(let v=start; v<=end; v+=step) a.push(`${v}${suffix}`); return a; }
function genBracketLabels(start, step, end, suffix){ const a=[]; for(let v=start; v<end; v+=step) a.push(`${v}–${v+step}${suffix}`); return a; }

// ===== DANE DEMO =====
const STORE_KEY = 'aktywni:events:v1';
const SIGN_KEY  = 'aktywni:signups:v1';
const SKILLS_KEY= 'aktywni:user:skills';

function uid(){ try{ if(crypto?.randomUUID) return crypto.randomUUID(); }catch{} return 'id-'+Math.random().toString(36).slice(2)+Date.now(); }

const sample = [
  { id: uid(), title: 'Siatkówka plażowa — sparing', datetime: futureISO(5,'17:30'), place:'Plaża Poniatówka', lat:52.234, lng:21.040, capacity: 12, taken: 4, banner:'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop', desc:'Gramy 3×3, poziom rekreacyjny.', sport:'Siatkówka plażowa', level:'A2 – Odbijający', sex:'mix' },
  { id: uid(), title: 'Koszykówka 3x3 — gierki', datetime: futureISO(2,'08:30'), place:'Park Skaryszewski', lat:52.244, lng:21.056, capacity: 25, taken: 12, banner:'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop', desc:'Szybkie granie 3x3, wpadaj.', sport:'Koszykówka 3x3', level:'Ligowy amator', sex:'women' }
];
function futureISO(days, time='18:00'){
  const d=new Date(Date.now()+days*86400000);
  const y=d.getFullYear(), m=String(d.getMonth()+1).padStart(2,'0'), dd=String(d.getDate()).padStart(2,'0');
  return `${y}-${m}-${dd}T${time}`;
}

function loadEvents(){ const raw = localStorage.getItem(STORE_KEY); if(raw){ try { return JSON.parse(raw); } catch(e){} } localStorage.setItem(STORE_KEY, JSON.stringify(sample)); return sample; }
function saveEvents(list){ localStorage.setItem(STORE_KEY, JSON.stringify(list)); }
function loadSignups(){ return JSON.parse(localStorage.getItem(SIGN_KEY) || '{}'); }
function saveSignups(v){ localStorage.setItem(SIGN_KEY, JSON.stringify(v)); }
function loadSkills(){ return JSON.parse(localStorage.getItem(SKILLS_KEY) || '{}'); }
function saveSkills(v){ localStorage.setItem(SKILLS_KEY, JSON.stringify(v)); }

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
  const cyclingMeta = ev.sport==='Kolarstwo'
    ? ` · 🚴 ${ev.cyclingDistance||''}${ev.cyclingDistance&&ev.cyclingPace?' · ':''}${ev.cyclingPace||''}`
    : '';
  li.innerHTML = `
    <div class="banner">${ev.banner ? `<img src="${ev.banner}" alt="${ev.title}">` : ''}</div>
    <div>
      <div class="title">${ev.title}</div>
      <div class="meta">${fmtDate(ev.datetime)} · ${ev.place}</div>
      <div class="meta">🏷️ ${ev.sport} — <strong>${ev.level}</strong> · ${sexLabel(ev.sex)}${cyclingMeta}</div>
    </div>
    <div style="display:flex; gap:8px; align-items:center">
      ${capacityPillHTML(ev)}
      <button class="btn" aria-label="Otwórz szczegóły">Szczegóły</button>
    </div>`;
  li.querySelector('button').addEventListener('click', (e)=> { lastFocused = e.currentTarget; openEventModal(ev.id); });
  return li;
}
function capacityPillHTML(ev){
  const left = Math.max(0, ev.capacity - (ev.taken||0));
  const cls = left===0? 'none' : left<5? 'low' : 'ok';
  return `<span id="m-cap-pill" class="pill ${cls}">${left} wolnych</span>`;
}
function sexLabel(s){ if(s==='women') return 'Kobiety'; if(s==='men') return 'Mężczyźni'; return 'Mix'; }

// ===== CREATE FORM =====
function initCreateForm(){
  // datetime-local: nic nie ograniczamy tekstem; min można ustawić jeśli chcesz: document.getElementById('dt').min = new Date().toISOString().slice(0,16);

  // Sporty/poziomy
  const sportSel = document.getElementById('sport-select');
  const levelSel = document.getElementById('level-select');
  sportSel.innerHTML = Object.keys(SPORTS).map(s=>`<option value="${s}">${s}</option>`).join('');
  const setLevels = () => {
    const lvls = SPORTS[sportSel.value] || [];
    levelSel.innerHTML = lvls.map(l=>`<option value="${l}">${l}</option>`).join('');
    document.getElementById('cycling-extra').style.display = (sportSel.value==='Kolarstwo') ? 'grid' : 'none';
  };
  sportSel.addEventListener('change', setLevels);
  setLevels();

  // Kolarstwo: słowniki
  document.getElementById('cycling-distance').innerHTML = CYCLING_DISTANCES.map(v=>`<option value="${v}">${v}</option>`).join('');
  document.getElementById('cycling-pace').innerHTML = CYCLING_PACES.map(v=>`<option value="${v}">${v}</option>`).join('');

  // Mapa + geocoder (Photon) + reverse geocode
  const mapEl = document.getElementById('create-map');
  const placeInput = document.getElementById('place');
  const latEl = document.getElementById('lat');
  const lngEl = document.getElementById('lng');

  const mapCreate = L.map(mapEl, { attributionControl:false, zoomControl:true });
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(mapCreate);
  const warsaw = [52.231, 21.007];
  mapCreate.setView(warsaw, 12);
  let pin = L.marker(warsaw, { draggable:true }).addTo(mapCreate);
  latEl.value = warsaw[0]; lngEl.value = warsaw[1];

  const geocoder = L.Control.geocoder({
    defaultMarkGeocode: false,
    placeholder: 'Szukaj miejsca…',
    geocoder: L.Control.Geocoder.photon()
  })
  .on('markgeocode', function(e) {
    const c = e.geocode.center;
    mapCreate.setView(c, 15);
    pin.setLatLng(c);
    latEl.value = c.lat.toFixed(6);
    lngEl.value = c.lng.toFixed(6);
    placeInput.value = e.geocode.name || placeInput.value;
  })
  .addTo(mapCreate);

  async function reverseGeocode(lat, lng){
    try{
      const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`;
      const r = await fetch(url, { headers: { 'Accept-Language': 'pl' }});
      const j = await r.json();
      return j.display_name || `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
    }catch{ return `${lat.toFixed(5)}, ${lng.toFixed(5)}`; }
  }
  async function setByLatLng(c){
    mapCreate.setView(c, 15);
    pin.setLatLng(c);
    latEl.value = c.lat.toFixed(6);
    lngEl.value = c.lng.toFixed(6);
    placeInput.value = await reverseGeocode(c.lat, c.lng);
  }
  mapCreate.on('click', (ev)=> setByLatLng(ev.latlng));
  pin.on('dragend', ()=> setByLatLng(pin.getLatLng()));

  placeInput.addEventListener('change', ()=>{
    const q = placeInput.value?.trim();
    if(!q) return;
    const g = L.Control.Geocoder.photon();
    g.geocode(q, (results)=>{
      if(results && results[0]){
        const c = results[0].center;
        setByLatLng(c);
      }
    });
  });

  // Submit
  const form = document.getElementById('create-form');
  form.addEventListener('submit', async (e)=>{
    e.preventDefault();

    const dt = document.getElementById('dt').value; // YYYY-MM-DDTHH:mm
    if(!dt){ alert('Ustaw datę i godzinę.'); return; }

    const fd = new FormData(form);
    const ev = Object.fromEntries(fd.entries());
    ev.id = uid();
    ev.capacity = Number(ev.capacity)||1; ev.taken = 0;
    ev.lat = parseFloat(ev.lat); ev.lng = parseFloat(ev.lng);
    ev.datetime = dt; // prosto z datetime-local

    // Upload banera jeśli storage istnieje, inaczej użyj URL
    const file = document.getElementById('bannerFile').files[0];
    if (file && storage) {
      try {
        const { ref, uploadBytes, getDownloadURL } = await import('firebase/storage');
        const path = `banners/${ev.id}-${file.name}`;
        const r = ref(storage, path);
        await uploadBytes(r, file);
        ev.banner = await getDownloadURL(r);
      } catch {
        ev.banner = document.getElementById('bannerUrl').value || '';
      }
    } else {
      ev.banner = document.getElementById('bannerUrl').value || '';
    }

    if (ev.sport !== 'Kolarstwo') {
      delete ev.cyclingDistance;
      delete ev.cyclingPace;
    }

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

    const form = document.getElementById('skills-form');
    const skills = loadSkills();
    form.innerHTML = Object.keys(SPORTS).map(s=>{
      const options = SPORTS[s].map(l=>`<option ${skills[s]===l?'selected':''}>${l}</option>`).join('');
      return `
        <div class="field" style="display:grid; grid-template-columns:200px 1fr; gap:12px; align-items:center">
          <label style="margin:0">${s}</label>
          <select name="${s}">${options}</select>
        </div>`;
    }).join('');

    const cycBox = document.getElementById('skills-cycling');
    const cycDist = document.getElementById('skill-cyc-dist');
    const cycPace = document.getElementById('skill-cyc-pace');
    cycDist.innerHTML = CYCLING_DISTANCES.map(v=>`<option ${skills._cyclingDistance===v?'selected':''}>${v}</option>`).join('');
    cycPace.innerHTML = CYCLING_PACES.map(v=>`<option ${skills._cyclingPace===v?'selected':''}>${v}</option>`).join('');
    cycBox.style.display = 'block';

    document.getElementById('btn-save-skills').addEventListener('click', (e)=>{
      e.preventDefault();
      const data = {};
      form.querySelectorAll('select').forEach(sel=> { data[sel.name] = sel.value; });
      data._cyclingDistance = cycDist.value;
      data._cyclingPace = cycPace.value;
      saveSkills(data);
      alert('Zapisano poziomy.');
    });

    document.getElementById('btn-logout').addEventListener('click', ()=>{
      signOut();
      location.hash = '#/login';
    });
  });
}

// ===== MODAL + MAPA =====
let map = null, marker = null, escHandler = null, lastFocused = null;

function openEventModal(id){
  const ev = loadEvents().find(x=>x.id===id); if(!ev) return;

  const modal = document.getElementById('event-modal');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');

  document.getElementById('m-title').textContent = ev.title;
  document.getElementById('m-title-sm').textContent = ev.title;
  document.getElementById('m-when').textContent = fmtDate(ev.datetime);
  document.getElementById('m-place').textContent = ev.place;
  document.getElementById('m-desc').textContent = ev.desc||'';
  document.getElementById('m-sport').innerHTML = `🏷️ ${ev.sport} — <strong>${ev.level}</strong> · ${sexLabel(ev.sex)}`;

  const cyc = document.getElementById('m-cycling');
  if (ev.sport === 'Kolarstwo' && (ev.cyclingDistance || ev.cyclingPace)) {
    cyc.style.display = '';
    cyc.textContent = `🚴 ${ev.cyclingDistance||''}${ev.cyclingDistance&&ev.cyclingPace?' · ':''}${ev.cyclingPace||''}`;
  } else {
    cyc.style.display = 'none';
    cyc.textContent = '';
  }

  const left = Math.max(0, ev.capacity - (ev.taken||0));
  const pill = document.getElementById('m-cap-pill');
  pill.textContent = `${left} wolnych`;
  pill.classList.remove('none','low','ok');
  pill.classList.add(left===0? 'none' : left<5? 'low' : 'ok');

  const banner = document.getElementById('m-banner');
  banner.innerHTML = ev.banner
    ? `<img src="${ev.banner}" alt="${ev.title}" style="width:100%; height:100%; object-fit:cover">`
    : '';

  if (map) { try { map.remove(); } catch(_) {} map = null; marker = null; }
  const mapEl = document.getElementById('map');
  mapEl.innerHTML = '';
  map = L.map(mapEl, { attributionControl: false, zoomControl: true });
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);
  marker = L.marker([ev.lat, ev.lng]).addTo(map).bindPopup(ev.title);
  map.setView([ev.lat, ev.lng], 14);
  setTimeout(()=> map.invalidateSize(), 150);

  const closeBtn = document.getElementById('m-close');
  closeBtn.focus();
  escHandler = (e)=>{
    if(e.key === 'Escape') closeModal();
    if(e.key === 'Tab'){
      const f = modal.querySelectorAll('button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])');
      const list = Array.from(f).filter(el=> !el.disabled && el.offsetParent !== null);
      if(!list.length) return;
      const first = list[0], last = list[list.length-1];
      if(e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
      else if(!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
    }
  };
  document.addEventListener('keydown', escHandler);

  const form = document.getElementById('join-form');
  form.onsubmit = (e)=>{
    e.preventDefault();
    const { name, email } = Object.fromEntries(new FormData(form).entries());
    const events = loadEvents();
    const idx = events.findIndex(x=>x.id===id);
    const leftLocal = events[idx].capacity - (events[idx].taken||0);
    const msg = document.getElementById('join-msg');
    if(leftLocal<=0){ msg.innerHTML = '<span class="danger">Brak miejsc</span>'; return; }
    events[idx].taken = (events[idx].taken||0) + 1; saveEvents(events);
    const signups = loadSignups();
    (signups[id] = signups[id] || []).push({name, email, at: new Date().toISOString()});
    saveSignups(signups);
    msg.innerHTML = '<span class="success">Jesteś zapisany/a! Do zobaczenia 🔥</span>';
    renderEventsView();
  };
}

function closeModal(){
  const modal = document.getElementById('event-modal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  if (escHandler){ document.removeEventListener('keydown', escHandler); escHandler = null; }
  if (map){ try { map.remove(); } catch(_) {} map = null; marker = null; }
  const mapEl = document.getElementById('map'); if(mapEl) mapEl.innerHTML = '';
  if (lastFocused && typeof lastFocused.focus === 'function'){ lastFocused.focus(); }
}

document.getElementById('m-close').addEventListener('click', closeModal);
document.getElementById('event-modal').addEventListener('click', (e)=>{ if(e.target.id==='event-modal') closeModal(); });

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
