import styles from './Button.module.css';

function Button({ type = 'button', children, onClick, ...otherProps }) {
  return (
    <button
      type={type}
      className={styles.btn}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
