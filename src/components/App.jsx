import { useState } from 'react';
import { nanoid } from 'nanoid';

import TaskList from './TaskList/TaskList';
import TaskEditor from './TaskEditor/TaskEditor';
import Container from './Container/Container';

const people = ['John', 'Marry', 'Dmytro'];
// const newPeople = people.filter((person) => {
//   if (person === 'John') {
//     return false;
//   } else {
//     return true;
//   }
// });
const newPeople = people.filter((person) => person !== 'John');

console.log(newPeople);

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

  function removeTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  return (
    <Container>
      <h1>Todo App</h1>

      <TaskEditor onCreate={addTask} />
      {tasks.length !== 0 && <TaskList tasks={tasks} onDelete={removeTask} />}
    </Container>
  );
}

export default App;
