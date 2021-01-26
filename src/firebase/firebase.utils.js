import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyA6TB4AYJBIxTHO0IL3h0gkFFlZ1zN1HEo",
  authDomain: "crwn-db-c15b1.firebaseapp.com",
  projectId: "crwn-db-c15b1",
  storageBucket: "crwn-db-c15b1.appspot.com",
  messagingSenderId: "688585757318",
  appId: "1:688585757318:web:765cb2a5616c651d2ef707",
  measurementId: "G-54KKMDYMRD"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  
  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error created a message', error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;