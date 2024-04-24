import React from 'react';

const Navbar = () => {
  return (
    <section>
      <ul
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          backgroundColor: 'pink',
          width: '100%',
          margin: 'auto',
          padding: '10px',
          listStyleType: 'none',
          marginTop: '20px',
        }}
      >
        <li>ABout</li>
        <li>Contact</li>
        <li>Login</li>
        <li>Menu</li>
      </ul>
    </section>
  );
};

export default Navbar;
