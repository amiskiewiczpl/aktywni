// src/dev/seed.js
import { initFirebase } from '../firebase.js';
import {
  collection, addDoc, serverTimestamp, Timestamp, doc, setDoc
} from 'firebase/firestore';

const { db } = initFirebase();

const now = new Date();
function plusDays(d, time='18:00') {
  const t = new Date(now.getTime() + d*24*3600*1000);
  const [h, m] = time.split(':').map(Number);
  t.setHours(h, m, 0, 0);
  return Timestamp.fromDate(t);
}

async function seed() {
  const organizerId = 'demo-organizer';

  const e1Ref = await addDoc(collection(db, 'events'), {
    title: 'Bieg nad Wisłą',
    datetime: plusDays(3, '18:00'),
    place: 'Bulwary Wiślane, Warszawa',
    geo: { lat: 52.237, lng: 21.022 },
    capacity: 20,
    taken: 2,
    banner: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=1200&auto=format&fit=crop',
    desc: 'Lekki bieg ~6km, tempo konwersacyjne.',
    tags: ['bieg','rekreacja'],
    city: 'Warszawa',
    organizerId,
    status: 'open',
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });

  const e2Ref = await addDoc(collection(db, 'events'), {
    title: 'Siatkówka plażowa',
    datetime: plusDays(5, '17:30'),
    place: 'Plaża Poniatówka',
    geo: { lat: 52.234, lng: 21.040 },
    capacity: 12,
    taken: 1,
    banner: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop',
    desc: 'Gramy 3×3, poziom rekreacyjny.',
    tags: ['siatkówka','plażowa'],
    city: 'Warszawa',
    organizerId,
    status: 'open',
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });

  const e3Ref = await addDoc(collection(db, 'events'), {
    title: 'Joga w parku',
    datetime: plusDays(2, '08:30'),
    place: 'Park Skaryszewski',
    geo: { lat: 52.244, lng: 21.056 },
    capacity: 25,
    taken: 0,
    banner: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1200&auto=format&fit=crop',
    desc: 'Poranna sesja vinyasa.',
    tags: ['joga','wellbeing'],
    city: 'Warszawa',
    organizerId,
    status: 'open',
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });

  // przykładowy signup (subkolekcja)
  await setDoc(doc(db, 'events', e1Ref.id, 'signups', 'example1'), {
    userId: 'demo-user',
    name: 'Ania',
    email: 'ania@example.com',
    status: 'confirmed',
    createdAt: serverTimestamp()
  });

  console.log('[seed] done:', e1Ref.id, e2Ref.id, e3Ref.id);
}

seed().catch(console.error);
