// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARnfT5cWkTAKlqnDmvd7P3FoX4JuL17Uo",
    authDomain: "ecommerce-reactjs-38280.firebaseapp.com",
    projectId: "ecommerce-reactjs-38280",
    storageBucket: "ecommerce-reactjs-38280.appspot.com",
    messagingSenderId: "472583798586",
    appId: "1:472583798586:web:5aa83c0a2ca097b8979a03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db