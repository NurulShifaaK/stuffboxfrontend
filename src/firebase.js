// import firebase from 'firebase/compat/app'
// import 'firebase/compat/auth'
// import 'firebase/compat/firestore'


// const firebaseConfig = {
//   apiKey: "AIzaSyBWFfw1EBwHf_Yrg6Fly6twqDaltbkJ1k0",
//   authDomain: "mailbulkerlogin.firebaseapp.com",
//   projectId: "mailbulkerlogin",
//   storageBucket: "mailbulkerlogin.firebasestorage.app",
//   messagingSenderId: "167305260340",
//   appId: "1:167305260340:web:7ebdad40e667b7cceb8961"
// };


// const authApp = !firebase.apps.length
//   ? firebase.initializeApp(authConfig, "authApp")
//   : firebase.app("authApp");

// const app = firebase.initializeApp(firebaseConfig);

// export const auth = authApp.auth();

// // Google provider
// export const googleProvider = new firebase.auth.GoogleAuthProvider();


// export default app;

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const authConfig = {
  apiKey: "AIzaSyBWFfw1EBwHf_Yrg6Fly6twqDaltbkJ1k0",
  authDomain: "mailbulkerlogin.firebaseapp.com",
  projectId: "mailbulkerlogin",
  storageBucket: "mailbulkerlogin.firebasestorage.app",
  messagingSenderId: "167305260340",
  appId: "1:167305260340:web:7ebdad40e667b7cceb8961"
};

// ✅ Only one named app
const authApp = !firebase.apps.some(a => a.name === "authApp")
  ? firebase.initializeApp(authConfig, "authApp")
  : firebase.app("authApp");

export const auth = authApp.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
