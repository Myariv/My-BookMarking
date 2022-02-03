import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  uid: '',
  isLogin: false,
  isRegister: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { uid } = action.payload;

      state.uid = uid;
      state.isLogin = true;

      localStorage.setItem('UniqeId', uid);
    },

    logout: (state) => {
      state.isLogin = false;

      localStorage.removeItem('UniqeId');
    },

    register: (state, action) => {
      state.isRegister = action.payload;
    },

    reConnect: (state, action) => {
      const { uid } = action.payload;
      state.uid = uid;
      state.isLogin = true;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
