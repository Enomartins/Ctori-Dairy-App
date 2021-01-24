import { firebase } from "firebase/app";
import "firebase/firestore";
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBByX0rx4KFUSx9Snm8JYuEHh6Fm-S_jPs",
    authDomain: "ctori-39579.firebaseapp.com",
    projectId: "ctori-39579",
    storageBucket: "ctori-39579.appspot.com",
    messagingSenderId: "551866823960",
    appId: "1:551866823960:web:0ebc4a2af9fb49e9735a6d",
    measurementId: "G-CHQKWTF9XX"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.initializeApp({timestampsInSnapshots: true})
  firebase.analytics();

  export default firebase