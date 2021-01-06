import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userLogin: {
    email: "",
    password: "",
  },

  userSignup: {
    userName: "",
    email: "",
    password: "",
  },
  authenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.userLogin = action.payload;
      state.authenticated = true;
    },

    signup: (state, action) => {
      state.userSignup = action.payload;
      state.authenticated = true;
    },

    logout: (state, action) => {
      state.userLogin = null;
      state.userSignup = null;
      state.authenticated = false;
    },
  },
});

// export the actions
export const { login, logout } = authSlice.actions;

export const setUser = (state) => state.user.user;
export const setAuth = (state) => state.authenticated;

export default authSlice.reducer;
