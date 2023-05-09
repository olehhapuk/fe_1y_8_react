import TaskItem from '../TaskItem/TaskItem';
import styles from './TaskList.module.css';

function TaskList({ tasks, onDelete }) {
  return (
    <ul className={styles.list}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          completed={task.completed}
          text={task.text}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TaskList;
