import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const Counter = () => {
  const [counter, SetCounter] = useState(1);
  const [monitor, setmonitor] = useState(0);
  const [render, setrender] = useState(true);

  useEffect(() => {
    if (render) setrender(false);
    if (!render) {
      console.log('Monitor has changed');
    }
  }, [monitor]);

  function incresesCounter() {
    SetCounter((prev) => prev + 1);
    console.log(counter);
    if (counter % 5 == 0) {
      setmonitor((prev) => prev + 1);
    }
  }

  function decreseCounter() {
    SetCounter((prev) => prev - 1);
  }

  function reset() {
    SetCounter(0);
  }
  return (
    <section>
      <h2 className='text-center mt-5'>{counter}</h2>
      <p className='text-center'>Counter</p>

      <h2 className='text-center mt-5'>{monitor}</h2>

      <p className='text-center'>Monitor</p>

      <div className='d-flex justify-content-center gap-2'>
        <button className='btn btn-success' onClick={incresesCounter}>
          Increse
        </button>
        <button className='btn btn-secondary' onClick={decreseCounter}>
          Decrese
        </button>
        <button className='btn btn-danger' onClick={reset}>
          Reset
        </button>
      </div>
    </section>
  );
};

export default Counter;
