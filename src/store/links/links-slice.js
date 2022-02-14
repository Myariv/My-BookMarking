import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  links: [],
};

const linksSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {
    setLinks: (state, action) => {
      const { links } = action.payload;
      state.links = links;
    },
    addLink: (state, action) => {
      const { link } = action.payload;
      state.links.push(link);
    },
    deleteLink: (state, action) => {
      const { id } = action.payload;
      state.links = state.links.filter((link) => link.id !== id);
    },
  },
});

export const linksActions = linksSlice.actions;
export default linksSlice.reducer;
