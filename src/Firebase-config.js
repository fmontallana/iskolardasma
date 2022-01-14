import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC28rBsC0LfWT-_fT6ZJtV8GGLiMOWwjvI",
  authDomain: "iskolardasma.firebaseapp.com",
  projectId: "iskolardasma",
  storageBucket: "iskolardasma.appspot.com",
  messagingSenderId: "715435297821",
  appId: "1:715435297821:web:9ac18fd15f0c73daea4af4",
  measurementId: "G-5NS15XJBLG"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);