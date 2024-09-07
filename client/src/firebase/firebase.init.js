// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VIITE_apiKey,
  authDomain: import.meta.env.VIITE_authDomain,
  projectId: import.meta.env.VIITE_projectId,
  storageBucket: import.meta.env.VIITE_storageBucket,
  messagingSenderId: import.meta.env.VIITE_messagingSenderId,
  appId: import.meta.env.VIITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth};