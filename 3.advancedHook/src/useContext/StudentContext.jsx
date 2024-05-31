import { useContext, createContext, useState } from 'react';
import { FamilyContext } from './Context';

//we are creting the Context that will be shared across all pages that need it
const StudentContext = createContext();

const UserContext = () => {
  const [mode, setmode] = useState('dark');

  return (
    <StudentContext.Provider value={mode}>
      <David />
    </StudentContext.Provider>
  );
};


const David = () => {
  const schName = useContext(FamilyContext);

  return <>My name is David and the name of My school is {schName}</>;
};

export default UserContext;
