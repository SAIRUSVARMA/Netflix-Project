// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2gRLSyQEmDa4mmjKeKE7K2i0pZaiYWkQ",
  authDomain: "netflix-project-9a007.firebaseapp.com",
  projectId: "netflix-project-9a007",
  storageBucket: "netflix-project-9a007.firebasestorage.app",
  messagingSenderId: "102814287951",
  appId: "1:102814287951:web:3ad2793b5df3096e98423a",
  measurementId: "G-KPB987EENG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
