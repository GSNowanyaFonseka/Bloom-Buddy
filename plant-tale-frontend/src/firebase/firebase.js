import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA92MaqKfheIrnOcfnK62WizUeYCenBJzQ",
  authDomain: "plant-tale.firebaseapp.com",
  projectId: "plant-tale",
  storageBucket: "plant-tale.firebasestorage.app",
  messagingSenderId: "862850061265",
  appId: "1:862850061265:web:e5033ce750b6c5f8b3c6f0",
  measurementId: "G-EHP457NL5M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;