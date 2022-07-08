// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_CNUNZVMGAgqHl8XkFhIiYeAak9HchaI",
  authDomain: "blogtest-325ad.firebaseapp.com",
  projectId: "blogtest-325ad",
  storageBucket: "blogtest-325ad.appspot.com",
  messagingSenderId: "796651435073",
  appId: "1:796651435073:web:33e845e03f4210e47b42c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
