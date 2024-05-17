import { useState } from 'react';

const NeedContext = () => {
  const [SurName, setSurName] = useState('Tinubu');
  return <Father name={SurName} />;
};

const Father = ({ name }) => {
  return (
    <>
      <p>My Name is Ahmed {name}</p>
      <Mother name={name} />
    </>
  );
};

const Mother = ({ name }) => {
  return (
    <>
      <p>My name is Funmilayo {name}</p>
      <Girlfriend1 name={name} />
    </>
  );
};

const Girlfriend1 = ({ name }) => {
  return (
    <>
      <Girlfriend2 name={name} />
    </>
  );
};

const Girlfriend2 = ({ name }) => {
  return (
    <>
      <FirstChild name={name} />
    </>
  );
};

const FirstChild = ({ name }) => {
  return (
    <>
      <p>My name is Bello {name}</p>
      <SecondChild name={name} />
    </>
  );
};

const SecondChild = ({ name }) => {
  return (
    <>
      <p>My name is Oladele {name}</p>
    </>
  );
};

export default NeedContext;
