// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-ZUQN1vMyzkMYF4o5Xp-aFe0QksI3qto",
  authDomain: "front-end-ef5e5.firebaseapp.com",
  projectId: "front-end-ef5e5",
  storageBucket: "front-end-ef5e5.appspot.com",
  messagingSenderId: "314956095609",
  appId: "1:314956095609:web:181cc51a9e62ab022734a8",
  measurementId: "G-VSPF5CEJM2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
