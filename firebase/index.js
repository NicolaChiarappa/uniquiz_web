// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmf2ltWzsFbSvjBYIA4Yg5Dz931-ZVupc",
  authDomain: "uniquiz-1b245.firebaseapp.com",
  databaseURL:
    "https://uniquiz-1b245-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "uniquiz-1b245",
  storageBucket: "uniquiz-1b245.appspot.com",
  messagingSenderId: "605123245202",
  appId: "1:605123245202:web:f59d2ff57d825695dd624b",
  measurementId: "G-QP9X41WJTV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
