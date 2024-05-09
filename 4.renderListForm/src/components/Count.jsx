import { useState, useRef, useEffect } from 'react';
const Count = () => {
  const [getClicke, setgetClicke] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    console.log(`Clicked ${getClicke} times`);
  }, [getClicke]);

  const handle = () => {
    setgetClicke((prev) => prev + 1);
    countRef.current++;
    console.log(countRef);
  };

  //   console.log('I rendered!');
  return <button onClick={handle}>Click me {getClicke}</button>;
};
export default Count;
