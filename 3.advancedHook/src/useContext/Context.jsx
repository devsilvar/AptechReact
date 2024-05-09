import { useState, createContext, useContext } from 'react';
//now we will send the conteext to the Main Componenet feeding other compoennets
const userContext = createContext();

export const FamilyContext = () => {
  const [surname, setsurname] = useState('Tinubu');

  return (
    <userContext.Provider value={surname}>
      <FatherFamily />
    </userContext.Provider>
  );
};

export const FatherFamily = () => {
  const familyName = useContext(userContext);
  return (
    <>
      <h2>My Name is Bola Ahmed {familyName}</h2>
      <FirstWife />
    </>
  );
};

const FirstWife = () => {
  const FamilySurname = useContext(userContext);
  return (
    <>
      <div>My name is Oluremi {FamilySurname} </div>
      <FirstGFriend />
    </>
  );
};

const FirstGFriend = () => {
  return (
    <>
      <div>my name is Janet </div>
      <SecondGFriend />
    </>
  );
};

const SecondGFriend = () => {
  return (
    <>
      <div>my name is Pristine </div>
      <FirstChild />
    </>
  );
};

const FirstChild = () => {
  const FamilySurname = useContext(userContext);
  return 'my name is Babalola' + FamilySurname;
};
