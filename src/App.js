import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from './store/auth/auth-slice';
// import { bookmarksAction } from './store/bookmarks/bookmarks-slice';
// import { getDoc, doc } from 'firebase/firestore';
// import { firestore } from './firebase';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import AddBookmark from './pages/AddBookmark';
import MyBookMarks from './pages/MyBookmarks';
import Layout from './components/layout/Layout';
import { useEffect, useState } from 'react';
import { bookmarksAction } from './store/bookmarks/bookmarks-slice';
import EditBookmark from './editBookmark/EditBookmark';

const DUMMY_DATA = [
  {
    title: 'TEST1',
    url: 'https://TEST1.co.il',
    tags: ['TSSR', 'TERET', 'ASDASD'],
    notes: 'test this app is neccesery!',
    date: '30/03/2022',
  },
  {
    title: 'TEST2',
    url: 'https://TEST2.co.il',
    tags: ['AWDC', 'TSDSDT', 'ASDASD'],
    notes: 'test this app is neccesery!',
    date: '30/03/2022',
  },
  {
    title: 'TEST3',
    url: 'https://TEST3.co.il',
    tags: ['AWDC', 'TSDSDT', 'ASDASD'],
    notes: 'test this app is neccesery!',
    date: '30/03/2022',
  },
  {
    title: 'TEST4',
    url: 'https://TEST4.co.il',
    tags: ['AWDC', 'TSDSDT', 'ASDASD'],
    notes: 'test this app is neccesery!',
    date: '30/03/2022',
  },
];

function App() {
  const dispatch = useDispatch();
  const { isLogin, uid } = useSelector((state) => state.auth);
  // const { bookmarks } = useSelector((state) => state.bookmarks);

  useEffect(() => {
    const uidStorage = localStorage.getItem('UniqeId');

    if (!isLogin && uidStorage) {
      dispatch(authActions.reConnect({ uid: uidStorage }));
    }
  }, [isLogin, dispatch]);

  // useEffect(() => {
  //   const getBookmarks = async () => {
  //     try {
  //       const userRef = doc(firestore, 'users', uid);
  //       const docSnap = await getDoc(userRef);

  //       if (docSnap.exists()) {
  //         const { bookmarks } = docSnap.data();
  //         dispatch(bookmarksAction.setBookmarks({ bookmarks }));
  //       } else {
  //         return;
  //       }
  //     } catch (error) {
  //       // console.log(error); // handle this later to see whats is mean
  //     }
  //   };

  //   getBookmarks();
  // }, [uid, dispatch, bookmarks]);

  useEffect(() => {
    const getDummyData = () => {
      if (DUMMY_DATA) {
        dispatch(bookmarksAction.setBookmarks({ bookmarks: DUMMY_DATA }));
      }
    };

    getDummyData();
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Navigate replace to='/home' />} />
        {!isLogin && <Route path='/home' element={<HomePage />} />}
        {isLogin && <Route path='/dashboard' element={<Dashboard />} />}
        {isLogin && <Route path='/addBookmark' element={<AddBookmark />} />}
        {isLogin && <Route path='/myBookmarks' element={<MyBookMarks />} />}
        {isLogin && <Route path='/myBookmarks/:id' element={<EditBookmark />} />}
        <Route path='/*' element={<p className='notFound'>404 This Page Not Found</p>} />
      </Routes>
    </Layout>
  );
}

export default App;
