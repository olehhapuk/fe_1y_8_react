import { useState } from 'react';

import styles from './TaskEditor.module.css';
import Button from '../Button/Button';

function TaskEditor({ onCreate }) {
  const [text, setText] = useState('');
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const isTextEmpty = text === '';
    setError(isTextEmpty);

    if (isTextEmpty) {
      return;
    }

    onCreate(text);
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <textarea
        className={error ? styles.error : styles.input}
        placeholder="Enter todo text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {error && <p className={styles['form-error']}>Error</p>}

      <Button type="submit">Create</Button>
    </form>
  );
}

export default TaskEditor;
