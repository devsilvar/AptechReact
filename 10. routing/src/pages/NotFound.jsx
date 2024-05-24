import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className='h-100 w-100 d-flex justify-content-center align-items-center'>
      <div>
        <h3>Page Not Found Go to the Home Page</h3>
        <Link to='/'>
          {' '}
          <button className='btn btn-success m-auto'>Go to Home Page</button>
        </Link>
      </div>
    </section>
  );
};
export default NotFound;
