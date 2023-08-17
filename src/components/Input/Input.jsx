import styles from './Input.module.css';
import HeightAnim from '../HeightAnim';

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

      <HeightAnim active={!!error}>
        <p className={styles['form-error']}>{error}</p>
      </HeightAnim>
    </div>
  );
}

export default Input;
