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
  const [creationIsLoading, setCreationIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTasksService()
      .then((data) => {
        setTasks(data);
      })
      .finally(() => {
        setIsLoading(false);
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

    setCreationIsLoading(true);
    addTaskService(text)
      .then((newTask) => {
        setTasks((prevTasks) => [newTask, ...prevTasks]);
      })
      .finally(() => {
        setCreationIsLoading(false);
      });
  }

  function removeTask(id) {
    setIsLoading(true);
    removeTaskService(id)
      .then(() => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function updateTask(id, completed) {
    setIsLoading(true);
    updateTaskService(id, completed)
      .then((updatedTask) => {
        const newArray = tasks.map((task) => {
          if (task.id === id) {
            return updatedTask;
          } else {
            return task;
          }
        });

        setTasks(newArray);
      })
      .finally(() => {
        setIsLoading(false);
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
      <TaskEditor onCreate={addTask} isLoading={creationIsLoading} />
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
