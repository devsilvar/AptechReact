import React from 'react';
import { useAutheticate } from '../Context/AuthContext';

const Login = () => {
  const { AuthState, setAuthState } = useAutheticate();
  return (
    <form action=''>
      <input type='text' />
      <br />
      <input type='text' />
      <button onClick={setAuthState((prev) => !prev)}>Sign Up</button>
    </form>
  );
};

export default Login;
