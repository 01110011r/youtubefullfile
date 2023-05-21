import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBTe-EsuCJsJMRY7uxzxNQU0_hCpO5x9Tw",
  authDomain: "fir-38243.firebaseapp.com",
  projectId: "fir-38243",
  storageBucket: "fir-38243.appspot.com",
  messagingSenderId: "530687963096",
  appId: "1:530687963096:web:5f7e2f7f0ed8a49998ccad",
});

const auth = app.auth();
export { auth };
export default app;
