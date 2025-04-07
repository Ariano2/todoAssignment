import { createSlice } from '@reduxjs/toolkit';
const authSlice = createSlice({
  name: 'auth',
  initialState: { isLoggedIn: false },
  reducers: {
    login() {
      const newState = { isLoggedIn: true };
      return newState;
    },
    logout() {
      const newState = { isLoggedIn: false };
      return newState;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
