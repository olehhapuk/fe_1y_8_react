import { motion } from 'framer-motion';
import styles from './TaskItem.module.css';
import Button from '../Button/Button';

function TaskItem({ id, text, completed, onDelete, onChange }) {
  return (
    <motion.li
      className={styles.item}
      initial={{
        opacity: 0,
        translateX: '100%',
      }}
      animate={{
        opacity: 1,
        translateX: 0,
      }}
      exit={{
        opacity: 0,
        translateX: '-100%',
      }}
      transition={{
        duration: 0.5,
      }}
    >
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
    </motion.li>
  );
}

export default TaskItem;
