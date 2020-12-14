import firebase from "firebase";

const firebaseConfig = {
/*  apiKey: "AIzaSyCw-li0IscS2rJr68dSjoJL3KM3eFq5PfE",
  authDomain: "twitter-clone-1faac.firebaseapp.com",
  databaseURL: "",
  projectId: "twitter-clone-1faac",
  storageBucket: "twitter-clone-1faac.appspot.com",
  messagingSenderId: "316208638057",
  appId: "1:316208638057:web:75a37bf24fab32ff145af8",
  measurementId: "G-HGFP2LDXP9",*/

    apiKey: "AIzaSyCk9H7hZxGP1ehDRIULM1GfSkTLQiAcxdw",
    authDomain: "twitter-clone-bddb7.firebaseapp.com",
    databaseURL: "https://twitter-clone-bddb7.firebaseio.com",
    projectId: "twitter-clone-bddb7",
    storageBucket: "twitter-clone-bddb7.appspot.com",
    messagingSenderId: "135667678724",
    appId: "1:135667678724:web:4bb65f023f11112eb93f51",


};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
