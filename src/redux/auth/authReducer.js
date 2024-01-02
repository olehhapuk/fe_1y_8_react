import { createReducer } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { loginAction, logoutAction, updateUserAction } from './authActions';
import { setToken } from '../../config/axios';

const initialState = {
  user: null,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginAction, (state, action) => {
      setToken(action.payload.token);
      state.user = action.payload.user;
    })
    .addCase(logoutAction, () => {
      return initialState;
    })
    .addCase(updateUserAction, (state, action) => {
      state.user = action.payload;
    });
});

export default persistReducer(
  {
    key: 'auth',
    storage,
  },
  authReducer
);
