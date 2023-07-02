import React from 'react';
import { Outlet, NavLink } from "react-router-dom";
import { Suspense } from 'react';
import css from './SharedLayout.module.css';


const SharedLayout = () => {
  return (
    <header >
      <nav className={css.nav}>
        <NavLink className={(navData) => (navData.isActive ? css.active : css.navLink)} to='/'>Home</NavLink>
        <NavLink className={(navData) => (navData.isActive ? css.active : css.navLink)} to='/movies'>Movies</NavLink>
      </nav>
      <Suspense to={<p>Loading...</p>}>
        <Outlet/>
      </Suspense>
    </header>
  )
}

export default SharedLayout