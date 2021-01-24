import {configureStore} from '@reduxjs/toolkit';
import loginSlice from './slices/loginSlice';

const store = configureStore({
    reducer: {
        loginStore: loginSlice
    }
});
export type RootState = ReturnType<typeof loginSlice>


export type AppDispatch = typeof store.dispatch;

export default store;