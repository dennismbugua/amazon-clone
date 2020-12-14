import firebase from "firebase";

const firebaseConfig = {

    apiKey: "AIzaSyDX0xSalwDs5hc9I6Y9BRC4LzX4WM75Dq4",
    authDomain: "clone-3221b.firebaseapp.com",
    databaseURL: "https://clone-3221b.firebaseio.com",
    projectId: "clone-3221b",
    storageBucket: "clone-3221b.appspot.com",
    messagingSenderId: "306032674437",
    appId: "1:306032674437:web:e3ff75d232b9edc558cbec"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
