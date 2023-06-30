import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <header>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/movies'>Movies</Link>
      </nav>
      <Suspense to={<p>Loading...</p>}>
        <Outlet/>
      </Suspense>
    </header>
  )
}

export default SharedLayout