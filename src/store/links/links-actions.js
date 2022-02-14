import { linksActions } from './links-slice';
import { getDocs, addDoc, deleteDoc, collection, doc } from 'firebase/firestore';
import { firestore } from '../../firebase';

// ----------------- Fetch All Links ------------------- //
export const fetchLinks = (uid) => {
  return async (dispatch) => {
    const linksRef = collection(firestore, `users/${uid}/links/`);
    const docSnap = await getDocs(linksRef);
    const links = [];
    docSnap.forEach((doc) => links.push({ id: doc.id, ...doc.data() }));
    dispatch(linksActions.setLinks({ links }));
  };
};

// ----------------- Add One Link ------------------- //
export const addOneLink = (uid, link) => {
  return async (dispatch) => {
    const linksRef = collection(firestore, `users/${uid}/links/`);
    const docID = await addDoc(linksRef, link);
    dispatch(
      linksActions.addLink({
        link: { id: docID.id, ...link },
      })
    );
    console.log('Link Added!');
    return;
  };
};

// ----------------- Delete One Link ------------------- //
export const deleteOneLink = (uid, id) => {
  return async (dispatch) => {
    const linksRef = doc(firestore, `users/${uid}/links/${id}`);
    await deleteDoc(linksRef);
    dispatch(linksActions.deleteLink({ id }));
    console.log('Link Deleted!');
    return;
  };
};
