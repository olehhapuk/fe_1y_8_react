import { AnimatePresence, motion } from 'framer-motion';
import TaskItem from '../TaskItem/TaskItem';
import styles from './TaskList.module.css';

function TaskList({ tasks, onDelete, onChange }) {
  return (
    <AnimatePresence>
      {tasks.length !== 0 && (
        <motion.ul
          className={styles.list}
          initial={{
            scaleY: 0,
          }}
          animate={{
            scaleY: 1,
          }}
          exit={{
            scaleY: 0,
          }}
          transition={{
            duration: 0.3,
          }}
          style={{
            transformOrigin: 'top',
          }}
        >
          <AnimatePresence initial={false}>
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
          </AnimatePresence>
        </motion.ul>
      )}
    </AnimatePresence>
  );
}

export default TaskList;
