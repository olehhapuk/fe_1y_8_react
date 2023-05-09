import styles from './Button.module.css';

function Button({ type = 'button', children, onClick }) {
  return (
    <button type={type} className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
