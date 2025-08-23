// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDVbKi0L-zi-5UiUHFVhOueQ2NW6_asJQ",
  authDomain: "salon-booking-webapp.firebaseapp.com",
  projectId: "salon-booking-webapp",
  storageBucket: "salon-booking-webapp.firebasestorage.app",
  messagingSenderId: "1050601210066",
  appId: "1:1050601210066:web:26dc76652a616f581d2d0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

//export const db = firebase.firestore();
//export const auth = firebase.auth();