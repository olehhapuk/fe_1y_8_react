import { createReducer } from '@reduxjs/toolkit';

export const authReducer = createReducer(
  {
    username: 'user1',
    password: 'password1',
  },
  () => {}
);
