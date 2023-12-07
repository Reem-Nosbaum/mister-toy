// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjWm25ZDsEQZ_Cu1A_kfeDDDNl-kHqEEI",
  authDomain: "users-pop.firebaseapp.com",
  projectId: "users-pop",
  storageBucket: "users-pop.appspot.com",
  messagingSenderId: "659990061407",
  appId: "1:659990061407:web:aa11b1f4a909c13a52d6ea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
