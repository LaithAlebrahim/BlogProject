// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfdB6maKCsfxlZBudW8rN91PO8QoRkYIg",
  authDomain: "blog-569e4.firebaseapp.com",
  projectId: "blog-569e4",
  storageBucket: "blog-569e4.appspot.com",
  messagingSenderId: "948013805728",
  appId: "1:948013805728:web:debe283b1dc26f4c1059c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
