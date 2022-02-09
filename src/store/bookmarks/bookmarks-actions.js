import { bookmarksActions } from './bookmarks-slice';
import { getDocs, addDoc, deleteDoc, collection, doc, setDoc } from 'firebase/firestore';
import { firestore } from '../../firebase';

// ----------------- Fectch All BookMarks ------------------- //
export const fetchBookmarks = (uid) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const bookmarksRef = collection(firestore, `users/${uid}/bookmarks`);
      const docSnap = await getDocs(bookmarksRef);
      const bookmarks = [];
      docSnap.forEach((doc) => bookmarks.push({ id: doc.id, ...doc.data() }));
      return bookmarks;
    };

    try {
      const bookmarks = await fetchData();
      dispatch(bookmarksActions.setBookmarks({ bookmarks }));
    } catch (e) {
      // console.log(e.message);
    }
  };
};

// ----------------- Add One BookMark ------------------- //
export const addOneBookmark = (uid, bookmark) => {
  return async (dispatch) => {
    const bookmarksRef = collection(firestore, `users/${uid}/bookmarks/`);
    const docID = await addDoc(bookmarksRef, {
      ...bookmark,
    });
    dispatch(bookmarksActions.addBookmark({ bookmark: { id: docID.id, ...bookmark } }));
    console.log('Add Single!');
  };
};

// ----------------- Delete One BookMark ------------------- //
export const deleteOneBookmark = (uid, id) => {
  return async (dispatch) => {
    const bookmarksRef = doc(firestore, `users/${uid}/bookmarks/${id}`);
    deleteDoc(bookmarksRef);
    dispatch(bookmarksActions.deleteBookmark({ id }));
    console.log('Delete Single!');
  };
};

// ----------------- Delete One BookMark ------------------- //
export const UpdateOneBookmark = (uid, bookmark) => {
  return async (dispatch) => {
    const bookmarksRef = doc(firestore, `users/${uid}/bookmarks/${bookmark.id}`);
    setDoc(bookmarksRef, { ...bookmark });
    dispatch(bookmarksActions.updateBookmark({ bookmark }));
    console.log('Update Single!');
  };
};
