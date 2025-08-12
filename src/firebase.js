import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXPoSEAqgIer8nA_ipwQ_g3Y6l-8VCbNI",
  authDomain: "netflix-clone-eca13.firebaseapp.com",
  projectId: "netflix-clone-eca13",
  storageBucket: "netflix-clone-eca13.firebasestorage.app",
  messagingSenderId: "942246142026",
  appId: "1:942246142026:web:f4a0cc5d02bd895af406b3",
  measurementId: "G-TK25566089",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error.message);
    alert(error);
  }
};

const login = async (email, password) => {
  try {
    signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error.message);
    alert(error);
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, signup, login, logout };
