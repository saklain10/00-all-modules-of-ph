//Danger do not share

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmc6vB5ZmSDizGlo6pzc9Wd7xOLjagzc8",
  authDomain: "explore-email-password-a-90159.firebaseapp.com",
  projectId: "explore-email-password-a-90159",
  storageBucket: "explore-email-password-a-90159.firebasestorage.app",
  messagingSenderId: "481866963029",
  appId: "1:481866963029:web:9f50395b02662f390e1cdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);