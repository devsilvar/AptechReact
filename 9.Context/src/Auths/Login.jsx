import { useContext, useEffect } from 'react';
import { ToogleModeContext } from '../Contexts/DarkContext';
const Login = () => {
  const { darkmode, toggleMode } = useContext(ToogleModeContext);

  return (
    <div>
      <div>
        Login Page <button onClick={toggleMode}>Change Mode</button>
      </div>
    </div>
  );
};

export default Login;
