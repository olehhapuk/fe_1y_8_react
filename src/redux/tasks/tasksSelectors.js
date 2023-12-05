export const selectTasks = (state) => state.tasks.items;
export const selectQuery = (state) => state.tasks.query;

export const selectFilteredTasks = (state) =>
  selectTasks(state).filter((task) =>
    task.text.toLowerCase().includes(selectQuery(state).toLowerCase())
  );
