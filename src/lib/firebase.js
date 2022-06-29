// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLrDEiSak8L7vLdPILQVTCsgiIyWKbSK4",
  authDomain: "itss-std-react-todo-k63-47558.firebaseapp.com",
  projectId: "itss-std-react-todo-k63-47558",
  storageBucket: "itss-std-react-todo-k63-47558.appspot.com",
  messagingSenderId: "961395719793",
  appId: "1:961395719793:web:5101896df604fc1cca65d0",
  measurementId: "G-PKNKP9XFQE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);