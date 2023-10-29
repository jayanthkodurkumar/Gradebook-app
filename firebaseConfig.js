// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVFci0bhg6D1GalWhmGv_HEH6MPB8tCYQ",
  authDomain: "gradebook-23400.firebaseapp.com",
  projectId: "gradebook-23400",
  storageBucket: "gradebook-23400.appspot.com",
  messagingSenderId: "402408625674",
  appId: "1:402408625674:web:5d16066ca584cd57c8f1f3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };
