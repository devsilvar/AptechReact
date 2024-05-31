import { createContext, useContext, useState } from 'react';

const Authenticate = createContext();

const AuthContext = ({ children }) => {
  const [AuthState, setAuthState] = useState('loggedout');

  return (
    <Authenticate.Provider value={{ AuthState, setAuthState }}>
      {children}
    </Authenticate.Provider>
  );
};

export default AuthContext;
export const useAutheticate = () => useContext(Authenticate);
