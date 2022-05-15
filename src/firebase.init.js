// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getApp } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-lz2fCMXRc4x_WMcBTK7IArBA7LLtrdE",
    authDomain: "justice-forum.firebaseapp.com",
    projectId: "justice-forum",
    storageBucket: "justice-forum.appspot.com",
    messagingSenderId: "315874978393",
    appId: "1:315874978393:web:2ecfe553bd9fbb78e05f48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getApp(app);

export default auth;