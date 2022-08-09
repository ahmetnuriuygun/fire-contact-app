import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAHzPRW18qzDrXlXejL6HnyQIeMdDfFs2Y",
    authDomain: "fire-contact-de.firebaseapp.com",
    databaseURL: "https://fire-contact-de-default-rtdb.firebaseio.com",
    projectId: "fire-contact-de",
    storageBucket: "fire-contact-de.appspot.com",
    messagingSenderId: "388112293077",
    appId: "1:388112293077:web:f5e2a2ab0aee484f77d65c"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;