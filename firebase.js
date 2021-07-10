import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC3A4akXdxNHjNTgPCMBnw8mfcz35Ylw-Y",
  authDomain: "facebook-clone-dcaa5.firebaseapp.com",
  projectId: "facebook-clone-dcaa5",
  storageBucket: "facebook-clone-dcaa5.appspot.com",
  messagingSenderId: "822392106963",
  appId: "1:822392106963:web:481c14538cfa0869ad8926",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
