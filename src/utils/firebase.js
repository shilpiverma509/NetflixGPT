// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa-GR9vGqppsAb4pz8V2blbPvTp_ZraQs",
  authDomain: "netflixgpt-3ff7b.firebaseapp.com",
  projectId: "netflixgpt-3ff7b",
  storageBucket: "netflixgpt-3ff7b.appspot.com",
  messagingSenderId: "287346138145",
  appId: "1:287346138145:web:834ffb531842212849d760",
  measurementId: "G-RXCDZRYE97",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
