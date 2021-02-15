import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyBRrwUeakDozySsvsEohk6GbYipwg3ykKU",
    authDomain: "everyauth-boilerplate.firebaseapp.com",
    projectId: "everyauth-boilerplate",
    storageBucket: "everyauth-boilerplate.appspot.com",
    messagingSenderId: "147326229411",
    appId: "1:147326229411:web:296a0cabb3ba079856d816",
    measurementId: "G-FEXTESB8PV"
};
firebase.initializeApp(firebaseConfig);

export default firebase;