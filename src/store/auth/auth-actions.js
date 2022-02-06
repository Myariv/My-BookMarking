// import { authActions } from './auth-slice';
import { getDoc, doc, setDoc } from 'firebase/firestore';
import { firestore } from '../../firebase';

export const setUserCredencialsInDB = (credentials) => {
  const { uid } = credentials;
  return async () => {
    localStorage.setItem('IDENTIFIERS', JSON.stringify(credentials));
    const userRef = doc(firestore, 'users', uid);
    await setDoc(userRef, { credentials }, { merge: true });
    console.log('User Created!');
  };
};

export const fetchUserCredencialsFromDB = (credentials) => {
  const { uid } = credentials;
  return async () => {
    const fetchData = async () => {
      const userRef = doc(firestore, 'users', uid);
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        const { credentials } = docSnap.data();
        return credentials;
      } else {
        console.log('NO USER CREDENTAILS');
        throw new Error('NO CREDENTAILS TO FETCH!!');
      }
    };
    try {
      const credentials = await fetchData();
      localStorage.setItem('IDENTIFIERS', JSON.stringify(credentials));
      return credentials;
    } catch (e) {
      // console.log(e.message);
    }
  };
};
