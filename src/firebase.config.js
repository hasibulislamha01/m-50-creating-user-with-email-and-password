// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtxDiQM7MiIKISOpy2TQCJrTFJLC0cPWo",
  authDomain: "email-and-password-login-3e1ab.firebaseapp.com",
  projectId: "email-and-password-login-3e1ab",
  storageBucket: "email-and-password-login-3e1ab.appspot.com",
  messagingSenderId: "131787104542",
  appId: "1:131787104542:web:46962028ec25256edbe90f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;