import { useState, useEffect } from 'react';
import { BASE_URL } from './api/api';

const Products = () => {
  const [userProduct, setUserProduct] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, seterror] = useState('');

  useEffect(() => {
    const getProducts = async () => {
      try {
        let response = await fetch(`${BASE_URL}/products`);
        let data = await response.json();
        console.log(data.roducts);
        setUserProduct(data.products);
        setisLoading(false);
      } catch (err) {
        console.log(err.message, ': Message');
        seterror(err.message);
        console.log('here is the Error we are facing');
        setisLoading(false);
      }
    };
    console.log(userProduct);
    getProducts();
  }, []);

  //   if (isLoading) {
  //     return <h1>Loading....</h1>;
  //   }

  return (
    <section>
      {isLoading == false ? (
        userProduct.map((item) => {
          return (
            <>
              <p>{item.title}</p>
              scs
            </>
          );
        })
      ) : (
        <h1>LOading....</h1>
      )}
    </section>
  );
};

export default Products;
