import { useState, useEffect } from 'react';

const StateExe = () => {
  const [counter, setCounter] = useState(10);
  const [mutiplesOfFive, setMultiplesOfFive] = useState(1);
  useEffect(
    function () {
      console.log(counter, 'i am From UseEffect');
    },
    [counter]
  );

  function IncreseAge() {
    setCounter((prev) => prev + 1);
    console.log(counter);
    //anytime we increse counter and we get to a number that is divisble by 5 we want to increse MutiplesOfFive
    if (counter % 5 == 0) {
      setMultiplesOfFive((prev) => prev + 1);
    }

    console.log(counter, 'i am not From UseEffect');
  }
  return (
    <section>
      I am {counter} years old
      <p>Multiples of Five i am come arosss : {mutiplesOfFive} </p>
      <button onClick={IncreseAge}>Increse Age</button>
    </section>
  );
};

export default StateExe;
