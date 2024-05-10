import { useState } from 'react';
import { Link } from 'react-router-dom';
import Productlayout from './Productlayout';

export let productData = [
  { id: '1', name: 'Rice', price: 'N2000' },
  { id: '2', name: 'Beans', price: 'N2000' },
  { id: '3', name: 'Yam', price: 'N2000' },
  { id: '4', name: 'Shawa', price: 'N2000' },
  { id: '5', name: 'Ponmo', price: 'N2000' },
  { id: '6', name: 'Fuku', price: 'N2000' },
];

const Products = () => {
  const goToDetails = (index) => {
    console.log(index);
  };
  return (
    <section>
      <h2 className='text-center'>My Products List</h2>
    </section>
  );
};

export default Products;
