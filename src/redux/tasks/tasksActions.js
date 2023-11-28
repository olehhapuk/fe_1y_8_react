import { createAction } from '@reduxjs/toolkit';

export const addTaskAction = createAction('TASKS_ADD');
export const updateTaskAction = createAction('TASKS_UPDATE');
export const removeTaskAction = createAction('TASKS_REMOVE');
