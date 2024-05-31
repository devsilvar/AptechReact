import { createContext, useState, useEffect, useContext } from 'react';

export const ModeContext = createContext();

const DarkModeContext = ({ children }) => {
  const [mode, setmode] = useState(false);

  useEffect(() => {
    if (mode) {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    } else {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    }
  }, [mode]);

  const toggleMode = () => {
    setmode((prev) => !prev);
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useTheme = () => useContext(ModeContext);
export default DarkModeContext;
