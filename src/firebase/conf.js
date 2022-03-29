// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_h7Z6dQdQPLfmpNsE61OQGOKmcuB7_C8",
    authDomain: "e-commercejofre.firebaseapp.com",
    projectId: "e-commercejofre",
    storageBucket: "e-commercejofre.appspot.com",
    messagingSenderId: "276841565478",
    appId: "1:276841565478:web:21838e6aa30c9be20985e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app;
}