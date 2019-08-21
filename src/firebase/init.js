import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyC6kstZCCmJ2iQzZA1zeXNz86q5KueZHME",
  authDomain: "chatter-vuejs.firebaseapp.com",
  databaseURL: "https://chatter-vuejs.firebaseio.com",
  projectId: "chatter-vuejs",
  storageBucket: "chatter-vuejs.appspot.com",
  messagingSenderId: "582298613486",
  appId: "1:582298613486:web:f1a10d4ce23ad3fa"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()
