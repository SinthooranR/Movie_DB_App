import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface State {
  theme: boolean;
  searchMovieString: string;
  movieId: number | null;
}

const initialState: State = {
  theme: true,
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
    setTheme: (state: State, { payload }: PayloadAction<boolean>) => {
      state.theme = !state.theme;
    },
  },
});

export const { setMovieId, setSearchString, setTheme } = movieSlice.actions;
export const mainSelector = (state: { movieStore: State }) => state.movieStore;
export default movieSlice.reducer;
