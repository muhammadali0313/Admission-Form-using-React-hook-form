import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHWBucU0EaGx-F3YSShxONP0Ku5I-6u9A",
  authDomain: "react-hook-form-71716.firebaseapp.com",
  projectId: "react-hook-form-71716",
  storageBucket: "react-hook-form-71716.appspot.com",
  messagingSenderId: "152513416710",
  appId: "1:152513416710:web:a7e387ba8be0d60328bd87"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
