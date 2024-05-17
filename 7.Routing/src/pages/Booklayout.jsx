import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Booklayout = () => {
  return (
    <>
      <section>
        <ol style={{ display: 'flex', gap: '10px', listStyleType: 'none' }}>
          <li>
            {' '}
            <Link to='/books/1'>Book 1 </Link>{' '}
          </li>
          <li>
            <Link to='/books/2'>Book 2 </Link>
          </li>
          <li>
            <Link to='/books/3'>Book 3 </Link>
          </li>
          <li>
            <Link to='/books/4'>Book 4 </Link>
          </li>
          <li>
            <Link to='/books/5'>Book 5 </Link>
          </li>
          <li>
            <Link to='/books/new'> Create New Book </Link>
          </li>
        </ol>
        <Outlet />
      </section>
    </>
  );
};

export default Booklayout;
