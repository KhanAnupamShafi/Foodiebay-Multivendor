// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoIgTFnh57Ng-Rrzgxx4QahpG_RYbemDI",
  authDomain: "foodiebay-multivendor.firebaseapp.com",
  projectId: "foodiebay-multivendor",
  storageBucket: "foodiebay-multivendor.appspot.com",
  messagingSenderId: "752056786957",
  appId: "1:752056786957:web:4542a7c6e30dec0a907544"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;