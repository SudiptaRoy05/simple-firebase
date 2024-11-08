// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvY9-vugA-sN9dIwIDimGQfCnVg_8TdEk",
  authDomain: "fire-8d77a.firebaseapp.com",
  projectId: "fire-8d77a",
  storageBucket: "fire-8d77a.firebasestorage.app",
  messagingSenderId: "210482584681",
  appId: "1:210482584681:web:bdbfcbbc92219eef2096f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;