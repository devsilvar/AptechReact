import { useRef, useState } from 'react';

const UseRefSample = () => {
  const [count, setcount] = useState(0);
  const getDivTag = useRef(null);

  function addds() {
    setcount(count + 1);
    getDivTag.current++;
    console.log(count, 'usestate');
    console.log(getDivTag.current, 'useref');
    // setcount(count + 1);
    // getDivTag.current = getDivTag.current + 1;
    // console.log('Hello');
    // console.log(getDivTag.current);
  }
  return (
    <section>
      <div>
        <h2>USEREF TUTORIAL</h2>
        <button onClick={addds}>click</button>
        {/* <button ref={getDivTag} onClick={addds}>
          click
        </button> */}
        useRefValue : {getDivTag.current}
        <br />
        useStateValues: {count}
      </div>
    </section>
  );
};

export default UseRefSample;
