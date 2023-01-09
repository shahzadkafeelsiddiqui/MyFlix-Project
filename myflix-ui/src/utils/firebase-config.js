
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyByFnaFVurQYNexlveN2HUyR4RVRGHhcug",
  authDomain: "react-netflix-clone-7cd65.firebaseapp.com",
  projectId: "react-netflix-clone-7cd65",
  storageBucket: "react-netflix-clone-7cd65.appspot.com",
  messagingSenderId: "965634358686",
  appId: "1:965634358686:web:8550dc82aa80b605c62a8f",
  measurementId: "G-49VPTJG818"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);