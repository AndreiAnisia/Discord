import firebase from 'firebase';

const firebaseConfig = {
   apiKey: 'AIzaSyCPzyIuptnVIR3hAiVfwXI5muPemU_OlRE',
   authDomain: 'discord-clone-2ed0e.firebaseapp.com',
   projectId: 'discord-clone-2ed0e',
   storageBucket: 'discord-clone-2ed0e.appspot.com',
   messagingSenderId: '577245672996',
   appId: '1:577245672996:web:3d30e9ca572f3c4ac5cab1',
   measurementId: 'G-D7BPHH5FJK',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
