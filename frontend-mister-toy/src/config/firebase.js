import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWdvGHmJRMmH1RMFAWCzdhLcUZYak-FeQ",
  authDomain: "pop-users.firebaseapp.com",
  projectId: "pop-users",
  storageBucket: "pop-users.appspot.com",
  messagingSenderId: "748144986040",
  appId: "1:748144986040:web:eda2ea11f53218a188b14d",
  measurementId: "G-4EJ2PFPE5X",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
