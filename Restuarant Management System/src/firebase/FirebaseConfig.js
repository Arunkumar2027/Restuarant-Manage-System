// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC6wjgzCXn4koguGSt_W82hMX5NfYEXM8A",
  authDomain: "myecom-7f79a.firebaseapp.com",
  projectId: "myecom-7f79a",
  storageBucket: "myecom-7f79a.appspot.com",
  messagingSenderId: "278249904398",
  appId: "1:278249904398:web:48fdff6f7d1306f9a79f5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export {auth,fireDB}