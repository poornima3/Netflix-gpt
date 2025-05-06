// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjZGU_ulMF-ItwN251nH3TVXp1VFUezgE",
  authDomain: "netflix-gpt-5fec9.firebaseapp.com",
  projectId: "netflix-gpt-5fec9",
  storageBucket: "netflix-gpt-5fec9.firebasestorage.app",
  messagingSenderId: "1035218248218",
  appId: "1:1035218248218:web:e8cd53f6c4ebdfbb0227a3",
  measurementId: "G-C03S3FHNJL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();