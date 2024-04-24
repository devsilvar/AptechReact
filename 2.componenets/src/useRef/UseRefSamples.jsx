import { useState, useRef } from 'react';

const UseRefSamples = () => {
  const [getClicke, setgetClicke] = useState(0);
  const countRef = useRef(0);

  const handle = () => {
    setgetClicke((prev) => prev + 1);
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
    console.log(`Clicked ${getClicke} times`);
  };

  console.log('I rendered!');

  return <button onClick={handle}>Click me</button>;
};

export default UseRefSamples;
