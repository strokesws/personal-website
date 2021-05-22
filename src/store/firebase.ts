import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// firebase init
const firebaseConfig = {
  apiKey: 'AIzaSyA2RxrBp1ytif_vJEPPT8TwQdECLVYQdck',
  authDomain: 'personal-website-faf6c.firebaseapp.com',
  databaseURL:
    'https://personal-website-faf6c-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'personal-website-faf6c',
  storageBucket: 'personal-website-faf6c.appspot.com',
  messagingSenderId: '920838486190',
  appId: '1:920838486190:web:5817fc14a003500dead53f',
  measurementId: 'G-72C1GJY85C',
};

const firebase = initializeApp(firebaseConfig);

// utils
const db = getFirestore(firebase);

export { db };
