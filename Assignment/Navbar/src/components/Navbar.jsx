import './navbar.css';
import { useState } from 'react';
import { BsList } from 'react-icons/bs';
import { FaFacebook, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const [isNavOpen, setisNavOpen] = useState(false);
  return (
    <nav>
      <div className='logo'>Coding Addict</div>
      <div className='link'>
        <ul>
          <li>
            <NavLink to='/'>Home </NavLink>{' '}
          </li>
          <li>
            <NavLink to='/about'> About</NavLink>{' '}
          </li>
          <li>
            {' '}
            <NavLink to='/project'> Project</NavLink>{' '}
          </li>
          <li>Contact</li>
          <li>
            {' '}
            <NavLink to='/profile'>Profile</NavLink>{' '}
          </li>
        </ul>
      </div>
      <div className='icons'>
        <a href='https://www.facebook.com' target='_blank'>
          <FaFacebook color='#8BCBF9' className='icon' />
        </a>

        <FaTwitter color='#8BCBF9' className='icon' />
        <FaLinkedinIn color='#8BCBF9' className='icon' />
      </div>
      <div className='smallNav'>
        <div className='navicon'>
          <BsList
            onClick={() => setisNavOpen(!isNavOpen)}
            className='small-icon'
            color='orange'
          />

          <div
            className={isNavOpen == true ? 'smallLink' : 'smallLink hidenav'}
          >
            <ul>
              <li>
                <NavLink to='/'>Home </NavLink>{' '}
              </li>
              <li>
                <NavLink to='/about'> About</NavLink>{' '}
              </li>
              <li>
                {' '}
                <NavLink to='/project'> Project</NavLink>{' '}
              </li>
              <li>Contact</li>
              <li>
                {' '}
                <NavLink to='/profile'>Profile</NavLink>{' '}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
