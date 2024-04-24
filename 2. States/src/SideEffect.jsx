import { useState, useEffect } from 'react';

const SideEffect = () => {
  const [show, setshow] = useState(false);

  return (
    <div>
      <button onClick={() => setshow(!show)}>Toogle Show</button>
      {show && <Child />}
    </div>
  );
};

function Child() {
  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      console.log('hello' + i);
      i++;
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <h2>child</h2>;
}
export default SideEffect;
