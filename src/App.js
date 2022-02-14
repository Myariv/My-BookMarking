import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from './store/auth/auth-slice';
import { fetchBookmarks } from './store/bookmarks/bookmarks-actions';
import { fetchCategories } from './store/categories/categories-actions';
import { fetchLinks } from './store/links/links-actions';

import HomePage from './pages/HomePage';
import DashBoard from './pages/DashBoard';
import AddCategory from './pages/AddCategory';
import AddCategoryLink from './pages/AddCategoryLink';
import AddBookmark from './pages/AddBookmark';
import MyBookMarks from './pages/MyBookmarks';
import Layout from './components/Layout/Layout';
import EditBookmark from './pages/EditBookmark';

function App() {
  const dispatch = useDispatch();
  const { isLogin, uid } = useSelector((state) => state.auth);

  useEffect(() => {
    // Remember To Refctor To FireStore
    const IDENTIFIERS = localStorage.getItem('IDENTIFIERS');
    if (!IDENTIFIERS) return;
    const { uid, name } = JSON.parse(IDENTIFIERS);

    if (!isLogin && uid) {
      dispatch(authActions.reConnect({ uid, name }));
    }
  }, [isLogin, dispatch]);

  useEffect(() => {
    if (!uid) return;
    dispatch(fetchBookmarks(uid));
    dispatch(fetchCategories(uid));
    dispatch(fetchLinks(uid));
  }, [dispatch, uid]);

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Navigate replace to='/home' />} />
        {!isLogin && <Route path='/home' element={<HomePage />} />}
        {isLogin && (
          <Route path='/dashboard' element={<DashBoard />}>
            <Route path='/dashboard/addcategory' element={<AddCategory />} />
            <Route path='/dashboard/:categoryId/addlink' element={<AddCategoryLink />} />
          </Route>
        )}
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
