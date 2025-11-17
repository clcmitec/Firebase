// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAGxleWApz6RjpekwNixa2dtK0eZS6hcY4",
  authDomain: "mitechronos.firebaseapp.com",
  projectId: "mitechronos",
  storageBucket: "mitechronos.firebasestorage.app",
  messagingSenderId: "468504016268",
  appId: "1:468504016268:web:6d2db8c1f494acbe8c92a9",
  measurementId: "G-14GTGFP4KY"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);