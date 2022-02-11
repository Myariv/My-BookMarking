import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      const { categories } = action.payload;
      state.categories = categories;
    },
    addCategory: (state, action) => {
      const { category } = action.payload;
      state.categories.push(category);
    },
    deleteCategory: (state, action) => {
      const { id } = action.payload;
      state.categories = state.categories.filter((category) => category.id !== id);
    },
    updateCategory: () => {},
  },
});

export const categoriesActions = categoriesSlice.actions;
export default categoriesSlice.reducer;
