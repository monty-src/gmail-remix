/**
 * firebase
 *
 *
 *
 */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

console.log("process env: ", process.env);

/**
 * Firebase API keys
 *
 *
 * @type {Object} FirebaseConfig
 */
const firebaseConfig = {
  apiKey: process.env.REACT_APP_GOOGLE_REMIX_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_GOOGLE_REMIX_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_GOOGLE_REMIX_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_GOOGLE_REMIX_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_GOOGLE_REMIX_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_GOOGLE_REMIX_FIREBASE_APP_ID,
};

/** Firebase app instance */
const app = initializeApp(firebaseConfig);

/** Firestore instance */
const db = getFirestore();

/** Firebase Auth instance */
const auth = getAuth();

/** Google Auth provider instance */
const provider = new GoogleAuthProvider();

/** exporting */
export { db, auth, provider };
