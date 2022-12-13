import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_tf3HiPnyp5htXv8X9NpRk6dCssO8Lmo",
  authDomain: "chart-75a9f.firebaseapp.com",
  projectId: "chart-75a9f",
  storageBucket: "chart-75a9f.appspot.com",
  messagingSenderId: "158740473927",
  appId: "1:158740473927:web:640922e64e444afbc1a962"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()