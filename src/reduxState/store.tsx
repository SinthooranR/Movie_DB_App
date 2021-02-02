import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./slices/movieSlice";

const store = configureStore({
  reducer: {
    movieStore: movieSlice,
  },
});
export type RootState = ReturnType<typeof movieSlice>;

export type AppDispatch = typeof store.dispatch;

export default store;
