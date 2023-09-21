import { Outlet, NavLink } from 'react-router-dom';

function MainLayout() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
