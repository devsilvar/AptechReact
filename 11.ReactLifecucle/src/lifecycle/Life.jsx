import { useState } from 'react';
import Counter from './Counter';

const Life = () => {
  const [initNum, setinitNum] = useState(0);
  const [isDisplayed, setisDisplayed] = useState(true);

  
  return (
    <section>
      <button
        className='btns-toggle'
        onClick={() => setisDisplayed((prev) => !prev)}
      >
        Toogle App
      </button>

      {isDisplayed && (
        <Counter startNum={initNum} changeStartNum={setinitNum} />
      )}
    </section>
  );
};

export default Life;
