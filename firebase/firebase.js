// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_API_KEY,
  authDomain: "parabolic-might-367202.firebaseapp.com",
  projectId: "parabolic-might-367202",
  storageBucket: "parabolic-might-367202.appspot.com",
  messagingSenderId: "367156979867",
  appId: "1:367156979867:web:7837c5bd6412e9ea22fe3e",
  measurementId: "G-MTX98J1Q0F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
