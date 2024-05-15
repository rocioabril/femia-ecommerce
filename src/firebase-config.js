import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAVK_JWSMft4TXRX_Qu7Js_DbHr5NF404g",
  authDomain: "react-ecommerce-64e44.firebaseapp.com",
  projectId: "react-ecommerce-64e44",
  storageBucket: "react-ecommerce-64e44.appspot.com",
  messagingSenderId: "297982476380",
  appId: "1:297982476380:web:f67dc8b9f67b47d0f4a699",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Export services
export { db, auth, storage };
