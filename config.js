import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCOLosC0d0dHNSjz9hMQsoXxzfWaCZLCVc",
  authDomain: "notesapp-77e0c.firebaseapp.com",
  projectId: "notesapp-77e0c",
  storageBucket: "notesapp-77e0c.appspot.com",
  messagingSenderId: "11417182644",
  appId: "1:11417182644:web:a282e1f26a6de40c8612e1",
  measurementId: "G-3NC4CFNL81"
}

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { firebase };