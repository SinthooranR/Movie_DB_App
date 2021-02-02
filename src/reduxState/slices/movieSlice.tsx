import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface State {
  login: boolean;
  searchMovieString: string;
  movieId: number | null;
}

const initialState: State = {
  login: false,
  searchMovieString: "",
  movieId: null,
};

const movieSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setMovieId: (state: State, { payload }: PayloadAction<number>) => {
      state.movieId = payload;
    },
    setSearchString: (state: State, { payload }: PayloadAction<string>) => {
      state.searchMovieString = payload;
    },
  },
});

export const { setMovieId, setSearchString } = movieSlice.actions;
export const mainSelector = (state: { movieStore: State }) => state.movieStore;
export default movieSlice.reducer;
