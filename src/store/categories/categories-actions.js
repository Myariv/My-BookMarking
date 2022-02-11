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

export const fetchCategories = (uid) => {
  return async (dispatch) => {
    const categoriesRef = collection(firestore, `users/${uid}/categories/`);
    const docSnap = await getDocs(categoriesRef);
    const categories = [];
    docSnap.forEach((doc) => categories.push({ id: doc.id, ...doc.data() }));
    dispatch(categoriesActions.setCategories({ categories }));
  };
};

// ----------------- Add One BookMark ------------------- //
export const addOneCategory = (uid, category) => {
  return async (dispatch) => {
    const categoriesRef = collection(firestore, `users/${uid}/categories/`);
    const docID = await addDoc(categoriesRef, { category });
    dispatch(
      categoriesActions.addCategory({
        category: { id: docID.id, category },
      })
    );
    console.log('Category Added!');
    return;
  };
};

// ----------------- Delete One BookMark ------------------- //
export const deleteOneCategory = (uid, id) => {
  return async (dispatch) => {
    const categoriesRef = doc(firestore, `users/${uid}/categories/${id}`);
    deleteDoc(categoriesRef);
    dispatch(categoriesActions.deleteCategory({ id }));
    console.log('Category Deleted!');
  };
};

// ----------------- Update One BookMark ------------------- //
export const UpdateOneCategory = (uid, id, name) => {
  return async (dispatch) => {
    const categoriesRef = doc(firestore, `users/${uid}/categories/${id}`);
    updateDoc(categoriesRef, { category: name });
    console.log('Category Updated!');
  };
};
