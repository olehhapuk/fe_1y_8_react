import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import axios from 'axios';

import TaskList from './TaskList/TaskList';
import TaskEditor from './TaskEditor/TaskEditor';
import Container from './Container/Container';
import Input from './Input/Input';

function initTasks() {
  const tasks = localStorage.getItem('tasks');
  if (tasks) {
    return JSON.parse(tasks);
  } else {
    return [];
  }
}

function App() {
  const [tasks, setTasks] = useState(initTasks);
  const [query, setQuery] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/tasks').then((res) => {
      setTasks(res.data);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function addTask(text) {
    const existingTask = tasks.find((task) => task.text === text); // Шукаємо чи існує завдання по text
    if (existingTask) {
      alert('Task already exists');
      return;
    }

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
