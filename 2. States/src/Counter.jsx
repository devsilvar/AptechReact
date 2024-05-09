import React, { Component } from 'react';
import { useState } from 'react';

const Counter = () => {
  console.log('Counter componenet was renderd');
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className='counter'>
      <h1 align='center'> {count} </h1>
      <p align='center'>Counter</p>
      <div align='center'>
        <button onClick={decrease}> - </button>
        <button onClick={increase}> + </button>
      </div>
    </div>
  );
};

console.log(Counter);
export default Counter;
