import { useState, useRef } from 'react';

const MondayClass = () => {
  const [counter, setCounter] = useState(0);
  const count = useRef(0);

  const addUp = () => {
    setCounter(counter + 1);
  };

  const reduce = () => {
    setCounter(counter - 1);
  };

  function inc() {
    count.current = count.current + 1;
    console.log(count.current);
  }



  

  return (
    <section>
      <h2>Counter Values is : {counter} </h2>
      <div>
        <button onClick={addUp}>Increse</button>
        <button onClick={reduce}>Reduce</button>
        <button>Reset</button>
      </div>
    </section>
  );
};

export default MondayClass;
