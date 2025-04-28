// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxkv89-jL-CSlUXw_8l2XwwP0zfoxA-z4",
  authDomain: "auth-integration-51-70167.firebaseapp.com",
  projectId: "auth-integration-51-70167",
  storageBucket: "auth-integration-51-70167.firebasestorage.app",
  messagingSenderId: "222631907153",
  appId: "1:222631907153:web:2e9247276a420ce22c8d70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);