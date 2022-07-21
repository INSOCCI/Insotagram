import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBo3N2o_pRUG0WnMKgnQktC4fqtDntmcac",
    authDomain: "auth-a0271.firebaseapp.com",
    projectId: "auth-a0271",
    storageBucket: "auth-a0271.appspot.com",
    messagingSenderId: "1079952895131",
    appId: "1:1079952895131:web:814b7a7d452229e2d2ea3e",
    measurementId: "G-7JJ3L2SRSP"
  };

initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();

