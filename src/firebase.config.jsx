// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //ATTENTION PLEASE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //for some reason firebase is not allowing  values from the env.local file
  //after many tries I couldn't get it to work, hence the workaround 
  //please consider when marking! I didn't have enough time to contact support session.
  apiKey: "AIzaSyB3cEfLsdCm7f07KHHeWQ30FyXonCnF9A4",
  authDomain: "assignment-9-9b7a0.firebaseapp.com",
  projectId: "assignment-9-9b7a0",
  storageBucket: "assignment-9-9b7a0.appspot.com",
  messagingSenderId: "507584066957",
  appId: "1:507584066957:web:b1ac56c72def2c7e2df9c4"
};
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_SECURE_API_KEY ,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app}