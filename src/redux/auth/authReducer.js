import { createReducer } from '@reduxjs/toolkit';
import { login } from './authActions';

export const authReducer = createReducer(
  {
    username: 'user1',
    password: 'password1',
  },
  (builder) => {
    builder.addCase(login, (state, action) => {
      state.username = 'updateduser1';
    });
  }
);
