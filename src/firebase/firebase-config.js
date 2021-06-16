import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_C7IxdD8CJvha9LYl81vUiJoE1NBuyxM",
    authDomain: "react-app-prueba-cursos.firebaseapp.com",
    projectId: "react-app-prueba-cursos",
    storageBucket: "react-app-prueba-cursos.appspot.com",
    messagingSenderId: "1065410168897",
    appId: "1:1065410168897:web:861bde70de5f3535099ec0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
