import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD9HB1J0_cY9XP3hvcHBoZ3Rd3EelDF0Ew",
    authDomain: "messenger-clone-93d31.firebaseapp.com",
    databaseURL: "https://messenger-clone-93d31.firebaseio.com",
    projectId: "messenger-clone-93d31",
    storageBucket: "messenger-clone-93d31.appspot.com",
    messagingSenderId: "527956489136",
    appId: "1:527956489136:web:2cc1a32d4a5c7401661c75",
    measurementId: "G-2FS3FWG6NX"
});

const db = firebaseApp.firestore();

export default db;
