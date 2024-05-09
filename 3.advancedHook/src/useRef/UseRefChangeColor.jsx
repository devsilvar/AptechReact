import { useRef } from 'react';
const UseRefChangeColor = () => {
  //create the useRef Variable
  const getDivtoToggle = useRef(null);

  const ToggleColor = () => {
    let currentColor = getDivtoToggle.current.style.backgroundColor;
    getDivtoToggle.current.style.backgroundColor =
      currentColor == 'red' ? 'green' : 'red';
  };

  const blackColor = () => {
    getDivtoToggle.current.style.backgroundColor = 'black';
  };
  return (
    <section>
      <div
        align='center'
        ref={getDivtoToggle}
        style={{ height: '100px', width: '100px' }}
      ></div>

      <button
        onClick={ToggleColor}
        align='center'
        style={{ backgroundColor: 'teal', padding: '7px 16px' }}
      >
        ChangeColor
      </button>

      <button
        onClick={blackColor}
        align='center'
        style={{ backgroundColor: 'red', padding: '7px 16px' }}
      >
        ChangeToBlack
      </button>
    </section>
  );
};

export default UseRefChangeColor;
