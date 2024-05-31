import { createContext, useState } from 'react';

//create the context
export const SurnameContext = createContext();

const FamilyContexts = ({ children }) => {
  const [surname, setsurname] = useState('Tinubu');

  return (
    <SurnameContext.Provider value={{ surname }}>
      {children}
    </SurnameContext.Provider>
  );
};


{/* <FamilyContexts>
    <App/>
</FamilyContexts> */}



export default FamilyContexts;
