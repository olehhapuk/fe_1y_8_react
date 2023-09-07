import styles from './Navbar.module.css';
import NavbarLink from './NavbarLink';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <NavbarLink to="/">Home</NavbarLink>
      <NavbarLink to="/about">About</NavbarLink>
      <NavbarLink to="/shows">Shows</NavbarLink>
    </nav>
  );
}

export default Navbar;
