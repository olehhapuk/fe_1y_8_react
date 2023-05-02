import { useState } from 'react';

import TaskList from './TaskList/TaskList';
import TaskEditor from './TaskEditor/TaskEditor';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 'id-1',
      completed: false,
      text: 'Lorem ipsum dolores',
    },
  ]);

  return (
    <div>
      <h1>Todo App</h1>

      <TaskEditor />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
