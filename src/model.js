// src/model.js
import { Timestamp, serverTimestamp } from 'firebase/firestore';

// Konwersja obiektu z formularza na dokument "events" gotowy do zapisu w Firestore
export function toEventDoc(input, organizerId) {
  const dt = typeof input.datetime === 'string'
    ? new Date(input.datetime)
    : input.datetime instanceof Date
      ? input.datetime
      : new Date();

  return {
    title: String(input.title || '').trim(),
    datetime: Timestamp.fromDate(dt),
    place: String(input.place || '').trim(),
    geo: {
      lat: Number(input.geo?.lat ?? input.lat ?? 0),
      lng: Number(input.geo?.lng ?? input.lng ?? 0)
    },
    capacity: Math.max(1, Number(input.capacity ?? 1)),
    taken: Number(input.taken ?? 0),
    banner: input.banner || null,
    desc: input.desc || '',
    tags: Array.isArray(input.tags) ? input.tags : [],
    city: input.city || '',
    organizerId: String(organizerId || ''),
    status: input.status || 'open',
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  };
}
