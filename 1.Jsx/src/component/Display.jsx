import { useState, useEffect } from 'react';
function Display() {
  const [count, setCount] = useState(0);
  const [monitor, setmonitor] = useState(0);

  useEffect(() => {
    console.log('i will only show if count is divisble by 5');
  }, [monitor]);

  const AddTen = () => {
    //if count is divisble by 5 then monitor will change which will trigger the useEffet
    setCount((prev) => prev + 2);
    if (count % 5 == 0) {
      setmonitor((prev) => prev + 1);
    }
    console.log(count);
  };

  return (
    <div className='App'>
      <p>Count is: {count}</p>

      <div>
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          Add 1
        </button>

        <button onClick={() => setCount(count - 1)}>Decrease 1</button>

        <button onClick={AddTen}>Add 10</button>
        <button onClick={() => setCount(count - 10)}>Decrease 10</button>

        <button onClick={() => setCount(0)}>Reset count</button>
      </div>
    </div>
  );
}

export default Display;
