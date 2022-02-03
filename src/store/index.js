import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './auth/auth-slice';
import BookmarksReducer from './bookmarks/bookmarks-slice';

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    bookmarks: BookmarksReducer,
  },
});

export default store;
