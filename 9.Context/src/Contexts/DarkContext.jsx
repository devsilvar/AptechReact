import { createContext, useState, useEffect } from 'react';

//we are creting a useContext that convert all the componenet inside it Black
export const ToogleModeContext = createContext();

const DarkContext = ({ children }) => {
  const [darkmode, setdarkmode] = useState(false);
  useEffect(() => {
    if (darkmode) {
      document.body.style.backgroundColor = 'white';
    } else {
      document.body.style.backgroundColor = 'black';
    }
  }, [darkmode]);

  const toggleMode = () => {
    setdarkmode(!darkmode);
    console.log(darkmode);
  };

  return (
    <ToogleModeContext.Provider value={{ darkmode, toggleMode }}>
      {children}
    </ToogleModeContext.Provider>
  );
};

export default DarkContext;
