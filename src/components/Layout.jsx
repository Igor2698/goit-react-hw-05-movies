import { NavLink, Outlet } from 'react-router-dom';
// import styled from 'styled-components';

// const StyledLink = styled(NavLink)`
//   color: #212121;

//   &.active {
//     color: orangered;
//   }
// `;

export const Layout = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="moovies">Moovies</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
