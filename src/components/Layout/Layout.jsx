import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: white;

  &.active {
    color: #0bb5e0;
  }
`;

export const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.headerNav}>
          <ul className={css.headerList}>
            <li className={css.Item}>
              <StyledLink className={css.Link} to="/">
                Home
              </StyledLink>
            </li>
            <li>
              <StyledLink className={css.Link} to="moovies">
                Moovies
              </StyledLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className={css.main}>
        <div className={css.mainContainer}>
          <Outlet />
        </div>
      </main>
    </>
  );
};
