// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getStorage, connectStorageEmulator } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// 🔒 Nie inicjalizuj Firebase, jeśli nie ma wymaganych env (np. na GitHub Pages)
const required = ['apiKey','authDomain','projectId','storageBucket','messagingSenderId','appId'];
const hasConfig = required.every(k => typeof firebaseConfig[k] === 'string' && firebaseConfig[k]);

let app, auth, db, storage;

export function initFirebase() {
  if (app) return { app, auth, db, storage };

  if (!hasConfig) {
    console.warn('[Firebase] Pomijam inicjalizację – brak konfiguracji env (prod bez kluczy). UI działa, backend dojdzie później.');
    return { app: null, auth: null, db: null, storage: null };
  }

  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  storage = getStorage(app);

  setPersistence(auth, browserLocalPersistence);

  if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
    try {
      connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
      connectFirestoreEmulator(db, '127.0.0.1', 8080);
      connectStorageEmulator(storage, '127.0.0.1', 9199);
      console.log('[Firebase] Emulatory podłączone');
    } catch (e) {
      console.warn('[Firebase] Nie udało się podłączyć emulatorów:', e);
    }
  }

  return { app, auth, db, storage };
}

export { auth, db, storage };
