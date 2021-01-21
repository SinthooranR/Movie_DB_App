import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  login: false,
  movieId: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setMovieId: (state, action) => {
        state.movieId = action.payload;
    }
  },
});

export const {setMovieId} = loginSlice.actions;
export const movieSelector = state => state.loginSlice;
export default loginSlice.reducer;
