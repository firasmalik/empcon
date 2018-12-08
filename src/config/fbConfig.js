import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var config = {
  apiKey: "AIzaSyBZNTe3hZ_xVZ8JknsRjGV-EFcG8swaMg0",
   authDomain: "empcon-6e43e.firebaseapp.com",
   databaseURL: "https://empcon-6e43e.firebaseio.com",
   projectId: "empcon-6e43e",
   storageBucket: "empcon-6e43e.appspot.com",
   messagingSenderId: "239192619837"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 
