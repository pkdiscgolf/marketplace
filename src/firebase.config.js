import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABxaZ0bWgnkhTdXIsJceUshGeUdwiI81E",
  authDomain: "marketplace-80d1c.firebaseapp.com",
  projectId: "marketplace-80d1c",
  storageBucket: "marketplace-80d1c.appspot.com",
  messagingSenderId: "993255047083",
  appId: "1:993255047083:web:00630e364de68745b59cee"
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()