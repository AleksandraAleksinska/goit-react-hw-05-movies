import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { Suspense } from 'react';
import css from './SharedLayout.module.css'

const SharedLayout = () => {
  return (
    <header >
      <nav className={css.nav}>
        <Link to='/'><button className={css.navButton}>Home</button></Link>
        <Link to='/movies'><button className={css.navButton}>Movies</button></Link>
      </nav>
      <Suspense to={<p>Loading...</p>}>
        <Outlet/>
      </Suspense>
    </header>
  )
}

export default SharedLayout