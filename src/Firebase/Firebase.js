import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyD6kt31gCKyXEty1PW9ALC37TKJ0gIpTOE",
    authDomain: "reservation-1156f.firebaseapp.com",
    projectId: "reservation-1156f",
    storageBucket: "reservation-1156f.appspot.com",
    messagingSenderId: "330086791791",
    appId: "1:330086791791:web:70ebb2552954c021b56b9a"
};
// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig);

export default db;