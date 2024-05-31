import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='shadow py-3'>
      <div className='container d-flex justify-content-between '>
        <h2>
          <Link to='/' className='text-decoration-none'>
            MixMaster{' '}
          </Link>
        </h2>
        <ul className='d-flex gap-4'>
          <li className='list-unstyled'>
            <NavLink to='/' className='text-decoration-none'>
              {' '}
              Home
            </NavLink>
          </li>
          <li className='list-unstyled'>
            <NavLink to='/about' className='text-decoration-none'>
              {' '}
              About
            </NavLink>
          </li>
          <li className='list-unstyled'>
            <NavLink to='/newsletter' className='text-decoration-none'>
              NewsLetter
            </NavLink>{' '}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
