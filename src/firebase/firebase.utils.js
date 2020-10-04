import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyBJaaaC4aR2JPv1hDbMCYnrSHyTpVJ7-Ww",
  authDomain: "crwn-db-a8dc4.firebaseapp.com",
  databaseURL: "https://crwn-db-a8dc4.firebaseio.com",
  projectId: "crwn-db-a8dc4",
  storageBucket: "crwn-db-a8dc4.appspot.com",
  messagingSenderId: "861078031651",
  appId: "1:861078031651:web:fe61de4f732fef378a9096",
  measurementId: "G-BLTYVPVGL5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore;

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;