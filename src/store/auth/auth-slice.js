import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  uid: '',
  name: '',
  isLogin: false,
  isRegister: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { uid, name } = action.payload;

      state.uid = uid;
      state.name = name;
      state.isLogin = true;
    },

    logout: (state) => {
      state.uid = '';
      state.name = '';
      state.isRegister = false;
      state.isLogin = false;
      localStorage.removeItem('IDENTIFIERS');
    },

    register: (state, action) => {
      state.isRegister = action.payload;
    },

    reConnect: (state, action) => {
      const { uid, name } = action.payload;
      state.uid = uid;
      state.name = name;
      state.isLogin = true;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
