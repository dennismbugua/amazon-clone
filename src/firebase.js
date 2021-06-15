import firebase from "firebase";

const firebaseConfig = {
/*  apiKey: "AIzaSyCcPSKlYtpdzBoAC8soeSmIARMzVKzrf5I",
  authDomain: "challenge-4b2b2.firebaseapp.com",
  databaseURL: "",
  projectId: "challenge-4b2b2",
  storageBucket: "challenge-4b2b2.appspot.com",
  messagingSenderId: "962418448875",
  appId: "1:962418448875:web:f6cce5eeaf819481f661ae",*/

/*    apiKey: "AIzaSyAGwTGLQ7dnJd-1wMd35rRzPhDxWpxqgPo",
    authDomain: "clone-c2033.firebaseapp.com",
    projectId: "clone-c2033",
    storageBucket: "clone-c2033.appspot.com",
    messagingSenderId: "7276015817",
    appId: "1:7276015817:web:177a6898500379c1ac9d18"*/

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