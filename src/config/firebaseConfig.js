import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyA5aWZ4KPKYgKBw8AY1BN9DIZX4lXwy9R0",
    authDomain: "projectplan-b5f58.firebaseapp.com",
    databaseURL: "https://projectplan-b5f58.firebaseio.com",
    projectId: "projectplan-b5f58",
    storageBucket: "projectplan-b5f58.appspot.com",
    messagingSenderId: "456569848107"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;
