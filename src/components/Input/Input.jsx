import styles from './Input.module.css';

function Input({ error, value, onChange, placeholder, isTextArea }) {
  return (
    <div>
      {isTextArea ? (
        <textarea
          className={error ? styles.error : styles.input}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          className={error ? styles.error : styles.input}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}

      {error && <p className={styles['form-error']}>{error}</p>}
    </div>
  );
}

export default Input;
