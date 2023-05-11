import styles from './TaskItem.module.css';
import Button from '../Button/Button';

function TaskItem({ id, text, completed, onDelete, onChange }) {
  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={completed}
        onChange={(e) => onChange(id, e.target.checked)}
      />

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
