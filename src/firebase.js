import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage, ref } from 'firebase/storage';
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
const storage = getStorage();
const storageRef = ref(storage);
const db = getFirestore(app);

console.log('firestore connected');

export { auth, storageRef };
export default db;
