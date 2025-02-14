import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2t-Nwzy6W1mNajrS_FX1OxJKxm4sJPvM",
  authDomain: "mkb4a-b5498.firebaseapp.com",
  projectId: "mkb4a-b5498",
  storageBucket: "mkb4a-b5498.firebasestorage.app",
  messagingSenderId: "1056318653155",
  appId: "1:1056318653155:web:de03baf7f11b03100c3bd6",
  measurementId: "G-QRZ86BMRK7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);

export default app; 