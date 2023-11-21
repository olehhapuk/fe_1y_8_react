import { createReducer } from '@reduxjs/toolkit';
import { login } from './authActions';

export const authReducer = createReducer(
  {
    username: 'user1',
    password: 'password1',
  },
  (builder) => {
    builder.addCase(login, (state, action) => {
      // ✅ Можна перезаписувати властивості стейту
      // state.username = action.payload.username;
      // state.password = action.payload.password;

      // ❌ Не можна перезаписувати state
      // state = action.payload;

      return action.payload;
    });
  }
);
