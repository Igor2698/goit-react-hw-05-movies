import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.headerNav}>
          <ul className={css.headerList}>
            <li className={css.Item}>
              <NavLink className={css.Link} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className={css.Link} to="moovies">Moovies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className={css.main}>
        <Outlet />
      </main>
    </>
  );
};
