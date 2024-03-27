const { getFirestore } = require("firebase/firestore");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.FIREBASE_APIKEY,
  authDomain: "ff202403.firebaseapp.com",
  projectId: "ff202403",
  storageBucket: "ff202403.appspot.com",
  messagingSenderId: "668867051522",
  appId: "1:668867051522:web:ec2a7d8ac724bcbc5a671b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);