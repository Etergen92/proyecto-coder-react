import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAt05hW6DK_COQEQSGjIEfyuDws4a5LYFY",
  authDomain: "coderbase-713c1.firebaseapp.com",
  projectId: "coderbase-713c1",
  storageBucket: "coderbase-713c1.appspot.com",
  messagingSenderId: "850874198717",
  appId: "1:850874198717:web:5dd412a7c5c6d5cf2865d4"
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(firebaseApp);


setPersistence(auth, browserLocalPersistence);

