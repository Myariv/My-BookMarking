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
      state.bookmarks = bookmarks || [];
      console.log(bookmarks, 'ALERT SET BOOKMARK!!');
    },

    resetBookMarks: (state) => {
      state.bookmarks = [];
      console.log('BOOKMARKS RESET');
    },

    addBookmark: (state, action) => {
      const { bookmark } = action.payload;
      state.bookmarks.push(bookmark);
      console.log('ADD ONE!!');
    },

    updateBookmark: (state, action) => {
      const { bookmark } = action.payload;
      const indexToRemove = state.bookmarks.findIndex(
        (single) => single.id === bookmark.id
      );
      state.bookmarks.splice(indexToRemove, 1, bookmark);
      console.log('UPDATE!!');
    },

    deleteBookmark: (state, action) => {
      const { id } = action.payload;

      state.bookmarks = state.bookmarks.filter((single) => single.id !== id);
      console.log('DELETE ONE!!');
    },
  },
});

export const bookmarksActions = bookmarksSilce.actions;

export default bookmarksSilce.reducer;
