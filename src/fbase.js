// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore"; // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDI4T-CyUECPwrI0PZL_vIiIkYl7hhnPtc",
  authDomain: "react-oz.firebaseapp.com",
  databaseURL: "https://react-oz-default-rtdb.firebaseio.com",
  projectId: "react-oz",
  storageBucket: "react-oz.appspot.com",
  messagingSenderId: "24618921981",
  appId: "1:24618921981:web:f07cd66524c84226f8b394",
  measurementId: "G-JRFSSXXH07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
