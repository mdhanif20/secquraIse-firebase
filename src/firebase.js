import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
        apiKey: "AIzaSyAAJNecg6GchYe4h_t7Nn9RuiopVSoCS9Q",
        authDomain: "secquraise-firebase.firebaseapp.com",
        projectId: "secquraise-firebase",
        storageBucket: "secquraise-firebase.appspot.com",
        messagingSenderId: "324901659656",
        appId: "1:324901659656:web:172ee6eab08645de439dbd"
      };

firebase.initializeApp(firebaseConfig);
export const dataRef = firebase.database();
export default firebase;