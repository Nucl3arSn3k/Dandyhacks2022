// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDff9ONa6JleLuAMICtnYDUK8f4c_hsdi0',
  authDomain: 'dandyhacks2022.firebaseapp.com',
  projectId: 'dandyhacks2022',
  storageBucket: 'dandyhacks2022.appspot.com',
  messagingSenderId: '679186052460',
  appId: '1:679186052460:web:79ec3c05d9429529abef49',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
