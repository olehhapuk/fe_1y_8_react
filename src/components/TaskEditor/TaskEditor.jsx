import styles from './TaskEditor.module.css';
import Button from '../Button/Button';

function TaskEditor() {
  return (
    <form className={styles.container}>
      <textarea
        className={styles.input}
        placeholder="Enter todo text"
        required
      />

      <Button type="submit">Create</Button>
    </form>
  );
}

export default TaskEditor;
