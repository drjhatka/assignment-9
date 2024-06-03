// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3cEfLsdCm7f07KHHeWQ30FyXonCnF9A4",
  authDomain: "assignment-9-9b7a0.firebaseapp.com",
  projectId: "assignment-9-9b7a0",
  storageBucket: "assignment-9-9b7a0.appspot.com",
  messagingSenderId: "507584066957",
  appId: "1:507584066957:web:b1ac56c72def2c7e2df9c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app}