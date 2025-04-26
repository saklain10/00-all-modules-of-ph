// DO NOT SHARE THE FIREBASE CONFIG ONLINE

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3kaZpLiU8q7Z7t1GC-368pjiLJI2mcKY",
  authDomain: "simple-react-firebase-au-37808.firebaseapp.com",
  projectId: "simple-react-firebase-au-37808",
  storageBucket: "simple-react-firebase-au-37808.firebasestorage.app",
  messagingSenderId: "408573852264",
  appId: "1:408573852264:web:475183f51bc6c4f9e559dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);