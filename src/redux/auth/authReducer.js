import { createReducer } from '@reduxjs/toolkit';
import { login, logout } from './authActions';

export const authReducer = createReducer(
  {
    username: 'user1',
    password: 'password1',
  },
  (builder) => {
    builder
      .addCase(login, (state, action) => {
        return action.payload;
      })
      .addCase(logout, () => {
        return null;
      });
  }
);
