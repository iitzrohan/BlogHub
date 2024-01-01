// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "bloghub-3240.firebaseapp.com",
  projectId: "bloghub-3240",
  storageBucket: "bloghub-3240.appspot.com",
  messagingSenderId: "5160892056",
  appId: "1:5160892056:web:b310da3f2ab94e2b2e82ed",
  measurementId: "G-GDBWGY9RLM",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
