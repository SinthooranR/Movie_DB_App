import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface State{
    login: boolean,
    movieId: number | null,
}

const initialState: State = {
    login: false,
    movieId: null,
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{
        setMovieId: (state: State, {payload}: PayloadAction<number>) => {
            state.movieId = payload;
        },
        setLogin: (state: State, {payload}: PayloadAction<boolean>) => {
            state.login = payload;
        }
    }
});

export const {setMovieId, setLogin} = loginSlice.actions;
export const mainSelector = (state: {loginStore: State}) => state.loginStore;
export default loginSlice.reducer;