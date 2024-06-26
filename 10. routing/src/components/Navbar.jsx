import React from 'react';
import { NavLink } from 'react-router-dom';
import './component.css';
import { useTheme } from '../Context/DarkModeContext';
import { useAutheticate } from '../Context/AuthContext';
const Navbar = () => {
  const { mode, toggleMode } = useTheme();
  const { AuthState, setAuthState } = useAutheticate();

  return (
    <>
      <nav className='navbar navbar-expand-lg bg-body-tertiary p-3 '>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            Navbar
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <NavLink className='nav-NavLink' aria-current='page' to='/'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-NavLink' to='/about'>
                  About
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-NavLink' to='/contact'>
                  Contact
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-NavLink' to='/products'>
                  Products
                </NavLink>
              </li>
            </ul>
            <div className='d-flex gap-3' role='search'>
              <button onClick={toggleMode}>ChangeMode</button>
              {AuthState == 'loggedout' ? (
                <button
                  className='btn btn-warning'
                  onClick={setAuthState('loggedin')}
                >
                  Sign in
                </button>
              ) : (
                <button
                  className='btn btn-danger'
                  onClick={setAuthState('loggedout')}
                  type='submit'
                >
                  Sign Out
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
