import TaskItem from '../TaskItem/TaskItem';
import styles from './TaskList.module.css';

// prop drilling
function TaskList({ tasks, onDelete, onChange }) {
  return (
    <ul className={styles.list}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          completed={task.completed}
          text={task.text}
          onDelete={onDelete}
          onChange={onChange}
        />
      ))}
    </ul>
  );
}

export default TaskList;
