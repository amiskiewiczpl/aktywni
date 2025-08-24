// ===== Prosty router SPA =====
function handleFormSubmit(e, form) {
	e.preventDefault();
	const fd = new FormData(form);
	const ev = Object.fromEntries(fd.entries());
	ev.id = uid();
	ev.capacity = Number(ev.capacity)||1; ev.taken = 0;
	ev.lat = parseFloat(ev.lat); ev.lng = parseFloat(ev.lng);
	saveEvents([ ...loadEvents(), ev ]);
	location.hash = '#/wydarzenia';
	renderEventsView();
}


// ===== Modal wydarzenia + mini‑mapa =====
let map, marker; let currentEventId = null;
function openEventModal(id){
const ev = loadEvents().find(x=>x.id===id); if(!ev) return;
currentEventId = id;
document.getElementById('m-title').textContent = ev.title;
document.getElementById('m-title-sm').textContent = ev.title;
document.getElementById('m-when').textContent = fmtDate(ev.datetime);
document.getElementById('m-place').textContent = ev.place;
document.getElementById('m-desc').textContent = ev.desc||'';
document.getElementById('m-cap-pill').outerHTML = capacityPillHTML(ev).replace('pill','pill').replace('wolnych','wolnych');
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
signups[id] = signups[id] || []; signups[id].push({name, email, at: new Date().toISOString()});
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


// Start
document.getElementById('year').textContent = new Date().getFullYear();
if(!location.hash) location.hash = '#/'
setActiveNav();
route();