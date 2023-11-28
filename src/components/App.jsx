import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import TaskList from './TaskList/TaskList';
import TaskEditor from './TaskEditor/TaskEditor';
import Container from './Container/Container';
import Input from './Input/Input';
import { addTaskAction, removeTaskAction } from '../redux/tasks/tasksActions';
import { selectTasks } from '../redux/tasks/tasksSelectors';

function App() {
  const [query, setQuery] = useState('');
  const tasks = useSelector(selectTasks);

  const dispatch = useDispatch();

  function addTask(text) {
    const existingTask = tasks.find((task) => task.text === text);
    if (existingTask) {
      alert('Task already exists');
      return;
    }

    const newTask = {
      id: nanoid(),
      text,
      completed: false,
    };

    dispatch(addTaskAction(newTask));
  }

  function removeTask(id) {
    dispatch(removeTaskAction(id));
  }

  function updateTask(id, completed) {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed,
          };
        }

        return task;
      })
    );
  }

  const filteredTasks = tasks.filter((task) => task.text.includes(query));

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
      <TaskList
        tasks={filteredTasks}
        onDelete={removeTask}
        onChange={updateTask}
      />
    </Container>
  );
}

export default App;
