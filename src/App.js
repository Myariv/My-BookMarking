import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from './store/auth/auth-slice';
import { fetchBookmarks, sendBookmarks } from './store/bookmarks/bookmarks-actions';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import AddBookmark from './pages/AddBookmark';
import MyBookMarks from './pages/MyBookmarks';
import Layout from './components/layout/Layout';
import EditBookmark from './components/editBookmark/EditBookmark';

function App() {
  const dispatch = useDispatch();
  const { isLogin, uid } = useSelector((state) => state.auth);
  const { bookmarks, isChanged } = useSelector((state) => state.bookmarks);

  useEffect(() => {
    // REMEMBER TO AUTH THROW THE FIRESTORE -----------
    const uidStorage = localStorage.getItem('UniqeId');

    if (!isLogin && uidStorage) {
      dispatch(authActions.reConnect({ uid: uidStorage }));
    }
  }, [isLogin, dispatch]);

  useEffect(() => {
    dispatch(fetchBookmarks(uid));
  }, [dispatch, uid]);

  useEffect(() => {
    if (isChanged) {
      dispatch(sendBookmarks(bookmarks, uid));
    }
  }, [bookmarks, dispatch, uid, isChanged]);

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Navigate replace to='/home' />} />
        {!isLogin && <Route path='/home' element={<HomePage />} />}
        {isLogin && <Route path='/dashboard' element={<Dashboard />} />}
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

//  <Routes>
//    <Route path='/' element={<Navigate replace to='/home' />} />
//    {!isLogin && <Route path='/home' element={<HomePage />} />}
//    {isLogin && <Route path='/dashboard' element={<Dashboard />} />}
//    {isLogin && <Route path='/addBookmark' element={<AddBookmark />} />}
//    {isLogin && (
//      <Route path='/myBookmarks' element={<MyBookMarks />}>
//        <Route path='/myBookmarks/:id' element={<EditBookmark />} />
//      </Route>
//    )}
//    <Route path='/*' element={<p className='notFound'>404 This Page Not Found</p>} />
//  </Routes>;
