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
        <Route path='/' element={<Productlayout />}>
          <Route index element={<Products />} />
          <Route path=':id' element={<ProductDetail />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default ProductRoute;
