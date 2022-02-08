import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from './store/auth/auth-slice';
import { fetchBookmarks, sendBookmarks } from './store/bookmarks/bookmarks-actions';

import HomePage from './pages/HomePage';
import DashBoard from './pages/DashBoard';
import AddBookmark from './pages/AddBookmark';
import MyBookMarks from './pages/MyBookmarks';
import Layout from './components/Layout/Layout';
import EditBookmark from './pages/EditBookmark';

function App() {
  const dispatch = useDispatch();
  const { isLogin, uid } = useSelector((state) => state.auth);
  const { bookmarks } = useSelector((state) => state.bookmarks);

  useEffect(() => {
    const IDENTIFIERS = localStorage.getItem('IDENTIFIERS');
    if (!IDENTIFIERS) return;
    const { uid, name } = JSON.parse(IDENTIFIERS);

    if (!isLogin && uid) {
      dispatch(authActions.reConnect({ uid, name }));
    }
  }, [isLogin, dispatch]);

  useEffect(() => {
    dispatch(fetchBookmarks(uid));
  }, [dispatch, uid]);

  useEffect(() => {
    if (!uid || !bookmarks.length) return console.log('No Uid');
    dispatch(sendBookmarks(bookmarks, uid));
  }, [bookmarks, dispatch, uid]);

  // useEffect(() => {
  //   debugger;
  //   if (isChanged) {
  //     dispatch(sendBookmarks(bookmarks, uid));
  //   }
  //   debugger;
  // }, [bookmarks, dispatch, uid, isChanged]);

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Navigate replace to='/home' />} />
        {!isLogin && <Route path='/home' element={<HomePage />} />}
        {isLogin && <Route path='/dashboard' element={<DashBoard />} />}
        {isLogin && (
          <Route path='/myBookmarks' element={<MyBookMarks />}>
            <Route path='/myBookmarks/:id' element={<EditBookmark />} />
            <Route path='/myBookmarks/add' element={<AddBookmark />} />
          </Route>
        )}
        <Route path='/*' element={<p className='notFound'>404 This Page Not Found</p>} />
      </Routes>
    </Layout>
  );
}

export default App;
