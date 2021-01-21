import {configureStore} from '@reduxjs/toolkit';
import loginSlice from './features/loginSlice';
// import {combineReducers} from 'redux';
import rootReducer from "./features/loginSlice";

const store = configureStore({
reducer: {
    loginSlice: loginSlice
}
})

export default store;