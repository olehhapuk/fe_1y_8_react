import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasks/tasksReducer';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
