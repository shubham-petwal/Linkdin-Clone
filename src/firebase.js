// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyB8ashvQzWkGdafY3ZAZv6ZPad_TWyZUvo",
    authDomain: "linkdinclone-ca1c5.firebaseapp.com",
    projectId: "linkdinclone-ca1c5",
    storageBucket: "linkdinclone-ca1c5.appspot.com",
    messagingSenderId: "748609069662",
    appId: "1:748609069662:web:13ea40421b40713f2f8acf",
    measurementId: "G-TREMHGENNP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore();
  const auth = firebaseApp.auth()

  export {auth};
  export default db;