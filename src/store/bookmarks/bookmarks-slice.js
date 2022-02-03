import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookmarks: [],
};

const bookmarksSilce = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    setBookmarks: (state, action) => {
      const { bookmarks } = action.payload;
      state.bookmarks = bookmarks;
    },
    deleteBookmark: (state, action) => {
      const { id } = action.payload;
      state.bookmarks = state.bookmarks.filter((_, index) => index !== id);
    },
  },
});

export const bookmarksAction = bookmarksSilce.actions;

export default bookmarksSilce.reducer;
