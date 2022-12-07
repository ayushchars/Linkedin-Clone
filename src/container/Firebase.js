import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import "firebase/compat/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyDC3cIhNoACiC2edTbRGG4BP5de651Dal8",
    authDomain: "likedin-clone-7e57d.firebaseapp.com",
    databaseURL: "https://likedin-clone-7e57d-default-rtdb.firebaseio.com",
    projectId: "likedin-clone-7e57d",
    storageBucket: "likedin-clone-7e57d.appspot.com",
    messagingSenderId: "457105460568",
    appId: "1:457105460568:web:6e4e816ac328797b26692d"
  };   

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db , auth};