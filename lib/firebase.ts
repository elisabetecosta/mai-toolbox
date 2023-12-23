import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";


const firebaseConfig = {
  apiKey: "AIzaSyCT8fkeakuQkdS-IUP-wd_RGg1CIs9Nq8E",
  authDomain: "mai-toolbox.firebaseapp.com",
  projectId: "mai-toolbox",
  storageBucket: "mai-toolbox.appspot.com",
  messagingSenderId: "581305916351",
  appId: "1:581305916351:web:d879abf57f9846ea029f0a"
};


const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };