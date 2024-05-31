import { useContext } from 'react';
import { ToogleModeContext } from '../Contexts/DarkContext';
const Signup = () => {
  const { darkmode, toggleMode } = useContext(ToogleModeContext);
  return (
    <section>
      <div>
        SIgn Up Page <button onClick={toggleMode}>Click</button>{' '}
      </div>
    </section>
  );
};

export default Signup;
