// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.FIREBASE_APIKEY,
  authDomain: "vue20240325.firebaseapp.com",
  projectId: "vue20240325",
  storageBucket: "vue20240325.appspot.com",
  messagingSenderId: "1095534779951",
  appId: "1:1095534779951:web:badb850f8b737b88ad30da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)