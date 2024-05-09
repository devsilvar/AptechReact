import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(8);
  const [monitor, setmonitor] = useState(0);
  const [product, setProduct] = useState([]);
  function reduce() {
    setCount(count + 1);

    if (count % 5 == 0) {
      setmonitor(monitor + 1);
    }
  }

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((data) => data.json())
      .then((json) => setProduct(json));

    console.log(product);
  }, []);

  return (
    <section>
      <h3> The counter value is {JSON.stringify(product, null, 2)}</h3>
      <button id='btn' onClick={reduce}>
        Click me
      </button>
    </section>
  );
}

export default Counter;
