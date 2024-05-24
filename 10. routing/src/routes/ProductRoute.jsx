import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Productlayout from '../pages/Productlayout';
import Products from '../pages/Products';
import ProductDetail from '../components/ProductDetail';
import NotFound from '../pages/NotFound';

const ProductRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/products' element={<Productlayout />} />
        <Route path="/products" element={<Products />} />
        <Route path='/products/:id' element={<ProductDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default ProductRoute;
