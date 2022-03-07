
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhTeQeibwcnQniwDnVVpxkxi3JlR3jeqM",
  authDomain: "rj-mermoz.firebaseapp.com",
  projectId: "rj-mermoz",
  storageBucket: "rj-mermoz.appspot.com",
  messagingSenderId: "939960949321",
  appId: "1:939960949321:web:966595f3057d97b14efd98"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);