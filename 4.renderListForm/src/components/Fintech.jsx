import { useRef, useEffect } from 'react';

const Fintech = () => {
  const InitialFocus = useRef(null);

  useEffect(() => {
    FocuseOnInput();
  }, []);

  const FocuseOnInput = () => {
    return InitialFocus.current.focus();
  };

  return (
    <section>
      <p>Enter Your 4 Digit Pin</p>
      <input type='number' ref={InitialFocus} />
    </section>
  );
};

export default Fintech;
