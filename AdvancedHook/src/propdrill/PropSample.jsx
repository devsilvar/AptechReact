import { useContext, createContext, useState } from 'react';

const presidentialContext = createContext();

const PropSample = () => {
  const [familyData, setfamilyData] = useState({ name: 'Tinubu', age: 100 });
  return (
    <presidentialContext.Provider value={familyData}>
      <Father />
    </presidentialContext.Provider>
  );
};

const Father = () => {
  const { name, age } = useContext(presidentialContext);
  return (
    <>
      <p>
        MY name is AHmed {name} and i am {age} years old
      </p>
      <Wife />
    </>
  );
};

const Wife = () => {
  const { name } = useContext(presidentialContext);
  return (
    <>
      <p>MY name is Funmilayo {name}</p>
      <FirstGF />
    </>
  );
};

const FirstGF = () => {
  return (
    <>
      <SecondGF />
    </>
  );
};

const SecondGF = () => {
  return (
    <>
      <FIrstChild />
    </>
  );
};

const FIrstChild = () => {
  const { name } = useContext(presidentialContext);
  return (
    <>
      <p>MY name is Bayo {name} and i ma the first child</p>
      <Secondchild />
    </>
  );
};

const Secondchild = () => {
  const { name } = useContext(presidentialContext);
  return (
    <>
      <p>MY name is Kenny {name} and i am the last child </p>
    </>
  );
};

export default PropSample;
