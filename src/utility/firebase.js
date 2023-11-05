// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeYIdVClxfY6vhapcMXUDGYvpw83YakVs",
  authDomain: "moviesghar.firebaseapp.com",
  projectId: "moviesghar",
  storageBucket: "moviesghar.appspot.com",
  messagingSenderId: "635679910013",
  appId: "1:635679910013:web:4aeb499872fb7c9e4da914",
  measurementId: "G-J44TENVXLD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
