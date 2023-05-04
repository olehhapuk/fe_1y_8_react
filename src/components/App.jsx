import { useState } from 'react';
import { nanoid } from 'nanoid';

import TaskList from './TaskList/TaskList';
import TaskEditor from './TaskEditor/TaskEditor';

// Spread operator example
const arr1 = ['a', 'b', 'c'];
const arr2 = ['john', ...arr1];

arr1.push('d');

console.log('arr1', arr1);
console.log('arr2', arr2);

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(text) {
    const newTask = {
      id: nanoid(),
      text,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function removeTask() {}

  return (
    <div>
      <h1>Todo App</h1>

      <TaskEditor onCreate={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
