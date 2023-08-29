import { useState } from 'react';

import styles from './TaskEditor.module.css';
import Button from '../Button/Button';
import Input from '../Input/Input';

function TaskEditor({ onCreate, isLoading }) {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const isTextEmpty = text === '';
    if (isTextEmpty) {
      setError('Будь ласка введіть текст');
    } else {
      setError('');
      onCreate(text);
      setText('');
    }
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <Input
        placeholder="Enter todo text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        error={error}
        isTextArea
      />

      <Button type="submit" disabled={isLoading}>
        Create
      </Button>
    </form>
  );
}

export default TaskEditor;
