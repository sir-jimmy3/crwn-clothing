import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDpp0JUIIn1bP2BpdaRVcASTB1vNNjZOpI",    
    authDomain: "crwn-db-fd88c.firebaseapp.com",
    projectId: "crwn-db-fd88c",
    storageBucket: "crwn-db-fd88c.appspot.com",
    messagingSenderId: "868123835575",
    appId: "1:868123835575:web:b5a235450144fc8a81e132",
    measurementId: "G-M81HXLHTZN"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;