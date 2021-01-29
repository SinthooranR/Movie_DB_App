import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface State{
    login: boolean;
    userId: string;
    movieId: number | null;
}

const initialState: State = {
    login: false,
    userId: "",
    movieId: null,
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{
        setMovieId: (state: State, {payload}: PayloadAction<number>) => {
            state.movieId = payload;
        },
        setLogin: (state: State, {payload}: PayloadAction<string>) => {
            state.userId = payload;
            state.login = true;
        },
        setLogout: (state: State, {payload}: PayloadAction<string>) => {
            state.userId = payload;
            state.login = false;
        }
    }
});

export const {setMovieId, setLogin, setLogout} = loginSlice.actions;
export const mainSelector = (state: {loginStore: State}) => state.loginStore;
export default loginSlice.reducer;