import styles from './Button.module.css';

function Button({ type = 'button', children }) {
  return (
    <button type={type} className={styles.btn}>
      {children}
    </button>
  );
}
export default Button;
