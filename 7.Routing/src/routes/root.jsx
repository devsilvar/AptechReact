import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Footer';

const Root = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            {' '}
            <Link to='/'>Home </Link>{' '}
          </li>
          <li>
            <Link to='/about'>About </Link>
          </li>
          <li>
            <Link to='/contact'>Contact </Link>
          </li>
          <li>
            <Link to='/books'>Booklist </Link>
          </li>
        </ul>
      </nav>
      <Outlet />

      <Footer />
    </>
  );
};

export default Root;
