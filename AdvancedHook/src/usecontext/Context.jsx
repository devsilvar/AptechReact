import { createContext, useContext, useState } from 'react';

//cretion of the maon componenet that will be feeding other
const userContext = createContext();

export const FamilyContext = () => {
  const [SurName, setSurName] = useState('Tinubu');

  return (
    <userContext.Provider value={SurName}>
      <NeedContext />
    </userContext.Provider>
  );
};

const NeedContext = () => {
  return <Father />;
};

const Father = () => {
  const familyname = useContext(userContext);
  return (
    <>
      <p>My Name is Ahmed {familyname}</p>
      <Mother />
    </>
  );
};

const Mother = () => {
  const familyname = useContext(userContext);
  return (
    <>
      <p>My name is Funmilayo {familyname}</p>
      <Girlfriend1 />
    </>
  );
};

const Girlfriend1 = () => {
  return (
    <>
      <Girlfriend2 />
    </>
  );
};

const Girlfriend2 = () => {
  return (
    <>
      <FirstChild />
    </>
  );
};

const FirstChild = () => {
  const familyname = useContext(userContext);
  return (
    <>
      <p>My name is Bello {familyname}</p>
      <SecondChild />
    </>
  );
};

const SecondChild = () => {
  const familyname = useContext(userContext);

  return (
    <>
      <p>My name is Oladele {familyname}</p>
    </>
  );
};

export default NeedContext;
