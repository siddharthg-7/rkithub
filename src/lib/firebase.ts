import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMpsbe6czcAxAT8sV59u-M7i9A2VcEWsE",
  authDomain: "rkithub-f20ae.firebaseapp.com",
  projectId: "rkithub-f20ae",
  storageBucket: "rkithub-f20ae.firebasestorage.app",
  messagingSenderId: "487641709706",
  appId: "1:487641709706:web:e4c71694d5aab6baab0173",
  measurementId: "G-CV05B28F17"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
