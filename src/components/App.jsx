import { useState } from 'react';
import { nanoid } from 'nanoid';

import TaskList from './TaskList/TaskList';
import TaskEditor from './TaskEditor/TaskEditor';
import Container from './Container/Container';
import Input from './Input/Input';

function App() {
  const [tasks, setTasks] = useState([]);
  const [query, setQuery] = useState('');

  function addTask(text) {
    const newTask = {
      id: nanoid(),
      text,
      completed: false,
    };

    setTasks((prevTasks) => [newTask, ...prevTasks]);
  }

  function removeTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  function updateTask(id, completed) {
    const newArray = tasks.map((task) => {
      if (task.id === id) {
        const updatedTask = {
          id: task.id,
          text: task.text,
          completed: completed,
        };

        return updatedTask;
      } else {
        return task;
      }
    });

    setTasks(newArray);
  }

  const filteredTasks = tasks.filter((task) => {
    if (task.text.includes(query)) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <Container>
      <h1>Todo App</h1>

      <TaskEditor onCreate={addTask} />

      <br />

      <Input
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {filteredTasks.length !== 0 && (
        <TaskList
          tasks={filteredTasks}
          onDelete={removeTask}
          onChange={updateTask}
        />
      )}
    </Container>
  );
}

export default App;
