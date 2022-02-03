// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAbZXTe2lkGapahmiEZgZ7iLlkf0MUB1uw',
  authDomain: 'my-react-http-test.firebaseapp.com',
  databaseURL:
    'https://my-react-http-test-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'my-react-http-test',
  storageBucket: 'my-react-http-test.appspot.com',
  messagingSenderId: '171127813795',
  appId: '1:171127813795:web:6399e8f36b72cb9f327116',
};

const firebase = initializeApp(firebaseConfig);
const firestore = getFirestore(firebase);
const auth = getAuth();

export { firebase, firestore, auth };
