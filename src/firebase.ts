import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZkx53FXxEHRNOGspYRY1VXXdgX5PVipg",
  authDomain: "ntwitter-1488d.firebaseapp.com",
  projectId: "ntwitter-1488d",
  storageBucket: "ntwitter-1488d.firebasestorage.app",
  messagingSenderId: "359832973537",
  appId: "1:359832973537:web:e30642b20615c2f0fb07a0",
  measurementId: "G-4197G1C6YR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);