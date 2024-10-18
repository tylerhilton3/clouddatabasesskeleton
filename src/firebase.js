// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyBtnuFZYtSMxmRA8reBqA5ZUOLBN_qcWQs",

    authDomain: "clouddatabases-fdaff.firebaseapp.com",
  
    projectId: "clouddatabases-fdaff",
  
    storageBucket: "clouddatabases-fdaff.appspot.com",
  
    messagingSenderId: "1083268144153",
  
    appId: "1:1083268144153:web:2bf493a63cf2e8d0669e88",
  
    measurementId: "G-15VCZNGL93"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);