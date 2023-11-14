import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { AUTH_LOGIN, AUTH_LOGOUT } from './auth.actions';

export const userReducer = createReducer(null, (builder) => {
  builder
    .addCase(AUTH_LOGIN, (state, action) => {
      console.log({ state, action });
    })
    .addCase(AUTH_LOGOUT, (state, action) => {
      console.log({ state, action });
    });
});

export const authReducer = combineReducers({
  user: userReducer,
});
