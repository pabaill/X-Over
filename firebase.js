import * as firebase from '@firebase/app';
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA7arYiOL6Kh4UuE-Yx6nA3FJuhRj8GXnk",
  authDomain: "x-over-ff2ae.firebaseapp.com",
  databaseURL: "https://x-over-ff2ae-default-rtdb.firebaseio.com",
  projectId: "x-over-ff2ae",
  storageBucket: "x-over-ff2ae.appspot.com",
  messagingSenderId: "413398666120",
  appId: "1:413398666120:web:57e917262abc3a8f03483d",
  measurementId: "G-FNYLQY0GWH"
};

const app = firebase.initializeApp(firebaseConfig);

const auth = getAuth(app);
export {auth};