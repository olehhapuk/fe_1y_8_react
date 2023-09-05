import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        About
      </NavLink>
    </nav>
  );
}

export default Navbar;
