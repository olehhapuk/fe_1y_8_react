import { createReducer } from '@reduxjs/toolkit';
import {
  addTaskAction,
  removeTaskAction,
  updateTaskAction,
} from './tasksActions';

export const tasksReducer = createReducer([], (builder) => {
  builder
    .addCase(addTaskAction, (state, action) => {
      state.unshift(action.payload);
    })
    .addCase(removeTaskAction, (state, action) => {
      // Splice, findIndex
      return state.filter((task) => task.id !== action.payload);
    });
});
