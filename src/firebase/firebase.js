import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZcQnUe5QCMGQW3cAbu4ONm4OYCDwJwUw",
  authDomain: "smart-healthcare-monitor-38765.firebaseapp.com",
  projectId: "smart-healthcare-monitor-38765",
  storageBucket: "smart-healthcare-monitor-38765.firebasestorage.app",
  messagingSenderId: "1015104077410",
  appId: "1:1015104077410:web:78e10a8e493ec3d0161b3b",
};

const app = initializeApp(firebaseConfig);

// Authentication
export const auth = getAuth(app);

// Firestore Database
export const db = getFirestore(app);

export default app;