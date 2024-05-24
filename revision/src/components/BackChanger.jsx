import { useEffect, useState } from 'react';
const BackChanger = () => {
  const [color, setColor] = useState('white');

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <section>
      <button onClick={() => setColor('red')}>Red</button>
      <button onClick={() => setColor('green')}>Green</button>
      <button onClick={() => setColor('yellow')}>Yellow</button>
      <button onClick={() => setColor('blue')}>Blue</button>
      <button onClick={() => setColor('orange')}>Orange</button>{' '}
    </section>
  );
};



export default BackChanger;
