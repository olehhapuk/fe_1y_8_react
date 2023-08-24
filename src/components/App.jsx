import { useState, useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';
import TaskList from './TaskList/TaskList';
import TaskEditor from './TaskEditor/TaskEditor';
import Container from './Container/Container';
import Input from './Input/Input';
import {
  getTasksService,
  addTaskService,
  updateTaskService,
  removeTaskService,
} from '../services/tasksService';

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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getTasksService().then((data) => setTasks(data));
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

    addTaskService(text).then((newTask) => {
      setTasks((prevTasks) => [newTask, ...prevTasks]);
    });
  }

  function removeTask(id) {
    removeTaskService(id).then(() => {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    });
  }

  function updateTask(id, completed) {
    updateTaskService(id, completed).then((updatedTask) => {
      const newArray = tasks.map((task) => {
        if (task.id === id) {
          return updatedTask;
        } else {
          return task;
        }
      });

      setTasks(newArray);
    });
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
      {isLoading && <TailSpin />}
      <TaskList
        tasks={filteredTasks}
        onDelete={removeTask}
        onChange={updateTask}
      />
    </Container>
  );
}

export default App;
