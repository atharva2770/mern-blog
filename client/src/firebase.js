// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-3c182.firebaseapp.com",
    projectId: "mern-blog-3c182",
    storageBucket: "mern-blog-3c182.appspot.com",
    messagingSenderId: "98485828387",
    appId: "1:98485828387:web:7875482a1443c6d74a2a96"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);