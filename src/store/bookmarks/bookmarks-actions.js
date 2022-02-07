import { bookmarksAction } from './bookmarks-slice';
import { getDoc, doc, setDoc } from 'firebase/firestore';
import { firestore } from '../../firebase';

export const fetchBookmarks = (uid) => {
  return async (dispatch) => {
    /// TRY INDICATOR IF EMPTY ARRAY
    const fetchData = async () => {
      const userRef = doc(firestore, 'users', uid);
      const docSnap = await getDoc(userRef);

      if (docSnap.exists()) {
        const { bookmarks } = docSnap.data();
        return bookmarks;
      } else {
        console.log('NO DATA');
        throw new Error('NO DATA TO FETCH!!');
      }
    };

    try {
      const bookmarks = await fetchData();
      dispatch(bookmarksAction.setBookmarks({ bookmarks }));
    } catch (e) {
      // console.log(e.message);
    }
  };
};

export const sendBookmarks = (bookmarks, uid) => {
  return async () => {
    const userRef = doc(firestore, 'users', uid);
    await setDoc(userRef, { bookmarks }, { merge: true });
    console.log('SEND!');
  };
};
