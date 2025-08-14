// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbSHqe6WRdEdL37ijpYVDZ2hzUyp8lqeQ",
  authDomain: "barber-app-e2547.firebaseapp.com",
  projectId: "barber-app-e2547",
  storageBucket: "barber-app-e2547.firebasestorage.app",
  messagingSenderId: "1096706003854",
  appId: "1:1096706003854:web:a2e0e0995cfa61aa438adf",
  measurementId: "G-DBZ4D6QPMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Exporta correctamente
export const auth = getAuth(app);
export const db = getFirestore(app);