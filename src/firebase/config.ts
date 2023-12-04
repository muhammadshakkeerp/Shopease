// Import the functions you need from the SDKs you need'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  // authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  // storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGE_SENDER_ID,
  // appId: import.meta.env.VITE_FIREBASE_APP_ID,
  apiKey: "AIzaSyCIMR8fUv1NMFf3G1_veC3_-OdjAPMnF9E",
  authDomain: "flipkartclone-bd94a.firebaseapp.com",
  projectId: "flipkartclone-bd94a",
  storageBucket: "flipkartclone-bd94a.appspot.com",
  messagingSenderId: "49350568372",
  appId: "1:49350568372:web:52a52424fb37b173676ae1"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app)
 export {app, auth}




