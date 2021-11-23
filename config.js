import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCcLsIuG4NqLC2T3XQdPU3DZx60M8nvuPc",
    authDomain: "e-ride-stage-4-f31ce.firebaseapp.com",
    projectId: "e-ride-stage-4-f31ce",
    storageBucket: "e-ride-stage-4-f31ce.appspot.com",
    messagingSenderId: "783387454148",
    appId: "1:783387454148:web:19d0b78959649f090ef791"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


