import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './auth/auth-slice';
import BookmarksReducer from './bookmarks/bookmarks-slice';
import LinksReducer from './links/links-slice';
import CategoriesReducer from './categories/categories-slice';

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    bookmarks: BookmarksReducer,
    categories: CategoriesReducer,
    links: LinksReducer,
  },
});

export default store;
