import { useRef, useState } from 'react';

const GetCurrentValue = () => {
  const [count, setcount] = useState(0);
  const countRef = useRef(0);

  const increase = () => {
    setcount((prev) => prev + 1);
    console.log(count);
  };
  console.log(count);
  return (
    <section>
      <h2>State Value : {count}</h2>

      <button onClick={increase}>Increase</button>
    </section>
  );
};

export default GetCurrentValue;
