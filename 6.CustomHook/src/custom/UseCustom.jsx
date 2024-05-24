import { useState, useEffect } from 'react';

const UseCustom = (url) => {
  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(true);

  const getProducts = async () => {
    try {
      let response = await fetch(url);
      let data = await response.json();
      setproducts(data);
      setloading(false);
    } catch (err) {
      setloading(false);
      console.log(err.message, ': Message');
      
    }
  };

  useEffect(() => {
    getProducts();
  }, [url]);

  return { products, loading };
};

export default UseCustom;
