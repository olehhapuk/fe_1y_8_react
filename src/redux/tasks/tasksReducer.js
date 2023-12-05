import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  addTaskAction,
  removeTaskAction,
  updateTaskAction,
  setQueryAction,
} from './tasksActions';

const itemsReducer = createReducer([], (builder) => {
  builder
    .addCase(addTaskAction, (state, action) => {
      state.unshift(action.payload);
    })
    .addCase(removeTaskAction, (state, action) => {
      // Immutable
      return state.filter((task) => task.id !== action.payload);

      // Mutable aproach
      // Splice, findIndex
      // const idx = state.findIndex((task) => task.id === action.payload);
      // state.splice(idx, 1);
    })
    .addCase(updateTaskAction, (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            completed: action.payload.completed,
          };
        }

        return task;
      });
    });
});

const queryReducer = createReducer('', (builder) => {
  builder.addCase(setQueryAction, (_, action) => action.payload);
});

export default combineReducers({
  items: itemsReducer,
  query: queryReducer,
});
