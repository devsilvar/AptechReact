import React from 'react';
import { BASE_URL } from './api/api';
import UseCustom from './custom/UseCustom';
const Jordan = () => {
  const { products, loading } = UseCustom(`${BASE_URL}/users`);

  console.log(products);
  return <div>Jordan</div>;
};

export default Jordan;
