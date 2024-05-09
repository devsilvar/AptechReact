import { useRef } from 'react';

//what we are trying to do hereis that when we clikc a button the Input is focused on

const UseRefHook = () => {
  const inputFocus = useRef(null);

  const focusOnInput = () => {
    inputFocus.current.focus();
  };

  return (
    <section>
      <input type='text' ref={inputFocus} />

      <button onClick={focusOnInput}> Focus on Button</button>
    </section>
  );
};

export default UseRefHook;
