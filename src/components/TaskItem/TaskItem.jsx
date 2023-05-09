import styles from './TaskItem.module.css';
import Button from '../Button/Button';

function TaskItem({ id, text, completed, onDelete }) {
  return (
    <li className={styles.item}>
      <p className={styles.text}>{text}</p>

      <div className={styles.actions}>
        <Button type="button" onClick={() => onDelete(id)}>
          Remove
        </Button>
      </div>
    </li>
  );
}

export default TaskItem;
