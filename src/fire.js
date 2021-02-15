import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBRgB-7QxtMU6eiSBrXO9TxuwkTEoFP2lk",
    authDomain: "logincrud-31440.firebaseapp.com",
    databaseURL: "https://logincrud-31440-default-rtdb.firebaseio.com",
    projectId: "logincrud-31440",
    storageBucket: "logincrud-31440.appspot.com",
    messagingSenderId: "157444980047",
    appId: "1:157444980047:web:d1f4325bc0b41cdfbad93a"
  };
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

export default firebase;