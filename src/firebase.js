import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
import { getAuth } from 'firebase/auth';

const provider = new GoogleAuthProvider();

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const firebaseConfig = {
    apiKey: 'AIzaSyBoqnQMSsa9j4kCZ2ZdJDAO4rRTPtDD7zo',
    authDomain: 'tiktok-b977d.firebaseapp.com',
    projectId: 'tiktok-b977d',
    storageBucket: 'tiktok-b977d.appspot.com',
    messagingSenderId: '220289102838',
    appId: '1:220289102838:web:e7011f002ced6c550a8dd7',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.languageCode = 'it';
const db = getFirestore(app);
console.log('firestore connected');
export { auth, provider };
export default db;
