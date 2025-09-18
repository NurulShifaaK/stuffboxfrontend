
// import { initializeApp } from "firebase/app";
// import {getFirestore} from "firebase/firestore"

// const blogConfig = {
//   apiKey: "AIzaSyB6QiO894Y-AbW_uZp4Sq9o0CJH2Wf2hng",
//   authDomain: "blogdata-f33f2.firebaseapp.com",
//   projectId: "blogdata-f33f2",
//   storageBucket: "blogdata-f33f2.firebasestorage.app",
//   messagingSenderId: "760204907757",
//   appId: "1:760204907757:web:5aa50babbef5032dc8e8e4",
//   measurementId: "G-N4XKTNWRLR"
// };

// const blogApp = !getApps().some(a => a.name === "blogApp")
//   ? initializeApp(blogConfig, "blogApp")
//   : getApp("blogApp");


// const app = initializeApp(blogConfig);
// export const db = getFirestore(blogApp);

// export {db};   

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const blogConfig = {
  apiKey: "AIzaSyB6QiO894Y-AbW_uZp4Sq9o0CJH2Wf2hng",
  authDomain: "blogdata-f33f2.firebaseapp.com",
  projectId: "blogdata-f33f2",
  storageBucket: "blogdata-f33f2.firebasestorage.app",
  messagingSenderId: "760204907757",
  appId: "1:760204907757:web:5aa50babbef5032dc8e8e4",
  measurementId: "G-N4XKTNWRLR"
};

// ✅ Only one named app
const blogApp = !getApps().some(a => a.name === "blogApp")
  ? initializeApp(blogConfig, "blogApp")
  : getApp("blogApp");

export const db = getFirestore(blogApp);
