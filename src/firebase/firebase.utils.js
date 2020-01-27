import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC9FWk2oo5oKuS8JUaJENpu1RJuH1beuzU",
    authDomain: "ecom-react-c4aa8.firebaseapp.com",
    databaseURL: "https://ecom-react-c4aa8.firebaseio.com",
    projectId: "ecom-react-c4aa8",
    storageBucket: "ecom-react-c4aa8.appspot.com",
    messagingSenderId: "335893298627",
    appId: "1:335893298627:web:0e9b5d7a4f38b312605176",
    measurementId: "G-5XBJCNNPFW"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;