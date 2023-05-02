import TaskItem from '../TaskItem/TaskItem';
import styles from './TaskList.module.css';

function TaskList({ tasks }) {
  return (
    <ul className={styles.list}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          completed={task.completed}
          text={task.text}
          // {...task} - Передати всі властивості у відповідні пропси
        />
      ))}
    </ul>
  );
}

export default TaskList;
