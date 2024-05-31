import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      Go Back to Home Page
      <Link to='/'>
        {' '}
        <button>HomePage</button>
      </Link>
    </div>
  );
};

export default NotFound;
