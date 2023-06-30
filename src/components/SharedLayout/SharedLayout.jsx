import React from 'react';
import { Outlet, Link } from "react-router-dom";

const SharedLayout = () => {
  return (
    <header>
        <nav>
        <Link to='/'>Home</Link>
        <Link to='/movies'>Movies</Link>
        </nav>
    <Outlet/>
    </header>
  )
}

export default SharedLayout