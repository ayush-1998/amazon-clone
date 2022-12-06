import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBW844By8llbs8QQAtyRZ6iNUzi2KxNN0s",
    authDomain: "clone-401c6.firebaseapp.com",
    projectId: "clone-401c6",
    storageBucket: "clone-401c6.appspot.com",
    messagingSenderId: "679550909858",
    appId: "1:679550909858:web:4d27ad25dc54e9f8dbc6fb",
    measurementId: "G-LTWJDPCN0P"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };