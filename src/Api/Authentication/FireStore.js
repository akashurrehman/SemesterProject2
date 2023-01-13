// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore';
import {getFirestore} from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCsc_33fP6FU_X_TfzLfepe-wxIl7mxg0o",
  authDomain: "firstproject-cb949.firebaseapp.com",
  projectId: "firstproject-cb949",
  storageBucket: "firstproject-cb949.appspot.com",
  messagingSenderId: "539715990282",
  appId: "1:539715990282:web:cab1ee9647b4f1116f00f3",
  measurementId: "G-V5EGGW6LTK"
};


// Initialize Firebase

// let app;
// if(firebase.apps.length===0)
// {
// 	app=firebase.initializeApp(firebaseConfig);
// }
// else
// {
// 	app=firebase.app();
// }
// const auth=firebase.auth();
// export {auth};

// Initialize Firestore
const app = firebase.initializeApp(firebaseConfig);
export const db=getFirestore(app);