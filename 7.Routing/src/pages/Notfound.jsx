import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <section>
      <h2>Disisnt Find what you were looking for </h2>

      <Link to='/'>
        {' '}
        <button> Go to HomePage</button>
      </Link>
    </section>
  );
};

export default Notfound;
