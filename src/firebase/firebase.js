// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getDatabase,push,ref, set} from "firebase/database"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFZYPiT_2qC4gRy063Aie5aBsi6GS703I",
    authDomain: "fire-contact-app-a13ab.firebaseapp.com",
    projectId: "fire-contact-app-a13ab",
    storageBucket: "fire-contact-app-a13ab.appspot.com",
    messagingSenderId: "189683815819",
    appId: "1:189683815819:web:03935f3a792360da610b8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app)

export const writeToDataBase = (name,phone,gender) => {
   
    const useRef = ref(db,"contact");
    const newUserRef = push(useRef)

    set(newUserRef,{
        name:name,
        phone:phone,
        gender:gender,
        
    });
}

