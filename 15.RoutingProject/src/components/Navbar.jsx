import React from 'react';
import './styles.css';
import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className='shadow bg-light mb-5'>
        <Link to={'/'} className='logo-nav'>
          Git Explorer
        </Link>
        <div className='link-cont'>
          <Link to={'/'}>Repos</Link>
          <Link to={'/users'}>Users</Link>
        </div>
      </nav>
      <main className='my-5'>
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;
