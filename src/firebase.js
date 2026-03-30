// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 🔹 Masukkan konfigurasi Firebase kamu di sini
const firebaseConfig = {
  apiKey: "AIzaSyCh2EYLCsxVh2GotIxFyBF2viqQ81sqqCA",
  authDomain: "portfolio-7abd4.firebaseapp.com",
  projectId: "portfolio-7abd4",
  storageBucket: "portfolio-7abd4.firebasestorage.app",
  messagingSenderId: "532336706041",
  appId: "1:532336706041:web:f3ac76b7482b294b657d28"
};

// Inisialisasi Firebas
const app = initializeApp(firebaseConfig);

// Authentication
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Fungsi login/logout
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);