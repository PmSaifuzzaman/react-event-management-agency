// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAANqdYWjypQyjlsf0qL_miOWCL5-cICzg",
  authDomain: "react-event-management-agency.firebaseapp.com",
  projectId: "react-event-management-agency",
  storageBucket: "react-event-management-agency.appspot.com",
  messagingSenderId: "971164348676",
  appId: "1:971164348676:web:b832f1191942a474436051"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;