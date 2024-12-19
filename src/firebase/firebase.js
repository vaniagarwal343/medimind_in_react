// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqH9d69pWmjcnkSGA-NC0kPFkybXHSf_s",
  authDomain: "medimind-c8044.firebaseapp.com",
  projectId: "medimind-c8044",
  storageBucket: "medimind-c8044.firebasestorage.app",
  messagingSenderId: "425305859640",
  appId: "1:425305859640:web:622624a164af4aa5f8a8cd",
  measurementId: "G-FENZK91FNS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };