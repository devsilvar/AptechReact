import { useState, useRef } from 'react';

const CounterReducer = () => {
  const count = useRef(0);
  const [temprature, settemprature] = useState('warm');

  const changeTemp = () => {
    //   settemprature((prev) => (prev == 'warm' ? 'Hot' : 'warm'));
    count.current = count.current + 1;
    console.log(count.current);
  };

  return (
    <section>
      <h2>Temprature is {count.current} </h2>

      <button onClick={changeTemp}>Change Temprature</button>
    </section>
  );
};

export default CounterReducer;
