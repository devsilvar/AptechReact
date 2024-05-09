import { useRef, useState } from 'react';

const Changer = () => {
  const [count, setcount] = useState(false);
  const changeBag = useRef(null);

  console.log(changeBag.current);

  const black = () => {
    changeBag.current.style.backgroundColor = 'black';
  };

  return (
    <section>
      <div
        style={{ backgroundColor: 'red', width: '100px', height: '50px' }}
        ref={changeBag}
      ></div>

      <button onClick={black}>Change to Black</button>
    </section>
  );
};

export default Changer;
