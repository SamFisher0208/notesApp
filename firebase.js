// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGng23Aa4ArH4OQZkZuKdpdS3pq-b8ZIc",
  authDomain: "react-notes-781b2.firebaseapp.com",
  projectId: "react-notes-781b2",
  storageBucket: "react-notes-781b2.appspot.com",
  messagingSenderId: "125182367889",
  appId: "1:125182367889:web:acf997034bc01392b04730",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
