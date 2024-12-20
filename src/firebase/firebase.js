import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqH9d69pWmjcnkSGA-NC0kPFkybXHSf_s",
  authDomain: "medimind-c8044.firebaseapp.com",
  projectId: "medimind-c8044",
  storageBucket: "medimind-c8044.firebasestorage.app",
  messagingSenderId: "425305859640",
  appId: "1:425305859640:web:622624a164af4aa5f8a8cd",
  measurementId: "G-FENZK91FNS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore
const auth = getAuth(app);

// Set auth persistence to browserLocalPersistence (keeps user logged in)
setPersistence(auth, browserLocalPersistence)
  .then(() => console.log("Session persistence set to local"))
  .catch((error) => console.error("Error setting session persistence:", error));

export { auth, db };
