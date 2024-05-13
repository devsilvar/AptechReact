import React from 'react';
import { useParams } from 'react-router-dom';
import { productData } from '../utils/data';

const ProductDetail = () => {
  const { id } = useParams();

  const filteredProduct = productData.filter((item) => {
    return item.id == id;
  });

  return (
    <section className='w-50 bg-warning p-5 m-auto my-4'>
      <div>Name : {filteredProduct[0].name} </div>
      <div>Price : {filteredProduct[0].price} </div>

      <button>Buy Our Product Now</button>
    </section>
  );
};

export default ProductDetail;
