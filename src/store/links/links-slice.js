import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  links: [],
};

const linksSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {
    addLink: () => {},
    removeLink: () => {},
    updateLink: () => {},
  },
});

export const linksActions = linksSlice.actions;
export default linksSlice.reducer;
