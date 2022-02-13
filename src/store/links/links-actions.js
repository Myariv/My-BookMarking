import { categoriesActions } from './categories-slice';
import {
  getDocs,
  addDoc,
  deleteDoc,
  collection,
  doc,
  updateDoc,
} from 'firebase/firestore';
import { firestore } from '../../firebase';

// ----------------- Add One BookMark ------------------- //
export const addOneLink = (uid) => {
  return async (dispatch) => {
    console.log(uid);
    // const categoriesRef = collection(firestore, `users/${uid}/categories/`);
    // const docID = await addDoc(categoriesRef, { category });
    // dispatch(
    //   categoriesActions.addCategory({
    //     category: { id: docID.id, category },
    //   })
    // );
    // console.log('Category Added!');
    return;
  };
};
