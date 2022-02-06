import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookmarks: [],
  isChanged: false,
};

const bookmarksSilce = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    setBookmarks: (state, action) => {
      const { bookmarks } = action.payload;
      state.bookmarks = bookmarks || [];
      state.isChanged = false;
      console.log(bookmarks, 'ALERT SET BOOKMARK!!');
    },

    resetBookmarks: (state) => {
      state.bookmarks = [];
    },

    addBookmark: (state, action) => {
      const { bookmark } = action.payload;
      state.bookmarks.push({
        id: Date.now(), // DUMYY_ID
        title: bookmark.title,
        url: bookmark.url,
        tags: bookmark.tags,
        notes: bookmark.notes,
        date: `${new Date().getDate()}/${
          new Date().getMonth() + 1
        }/${new Date().getFullYear()}`,
      });
      state.isChanged = true;
      console.log('ADD ONE!!');
    },

    updateBookmark: (state, action) => {
      const { bookmark } = action.payload;
      const indexToRemove = state.bookmarks.findIndex(
        (single) => single.id === bookmark.id
      );
      state.bookmarks.splice(indexToRemove, 1, bookmark);
      state.isChanged = true;

      console.log('UPDATE!!');
    },

    deleteBookmark: (state, action) => {
      const { id } = action.payload;
      state.bookmarks = state.bookmarks.filter((single) => single.id !== id);
      state.isChanged = true;
      console.log('DELETE ONE!!');
    },
  },
});

export const bookmarksAction = bookmarksSilce.actions;

export default bookmarksSilce.reducer;
