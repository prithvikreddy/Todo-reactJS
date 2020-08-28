import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBqdQptqas4OSmOVkfIXAZE1m5NlAi2_R8",
  authDomain: "to-do-app-ad6be.firebaseapp.com",
  databaseURL: "https://to-do-app-ad6be.firebaseio.com",
  projectId: "to-do-app-ad6be",
  storageBucket: "to-do-app-ad6be.appspot.com",
  messagingSenderId: "455301263385",
  appId: "1:455301263385:web:9c78772318006c7323fa88",
  measurementId: "G-194N5R15HC",
});

const db = firebaseApp.firestore();

export default db;
