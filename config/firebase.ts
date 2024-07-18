// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Constants from 'expo-constants';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: Constants.manifest?.extra?.firebaseApiKey,
  apiKey: "AIzaSyDqM9xHFvFpL-x_pbtthq4CLyRphWFXy2Q",

  authDomain: "react-native-auth-4323c.firebaseapp.com",
  projectId: "react-native-auth-4323c",
  storageBucket: "react-native-auth-4323c.appspot.com",
  messagingSenderId: "202219082813",
  appId: "1:202219082813:web:2de88a98df601052d20654",
  measurementId: "G-REF5CQJSHC"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;