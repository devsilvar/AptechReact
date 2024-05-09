import { useState } from 'react';

const Family = () => {
  const [FamilyName, setFamilyName] = useState('Tinubu');
  return (
    <div>
      <p>MY name is Bola Ahmed {FamilyName}</p>
      <FirstWife firstWifeSurname={FamilyName} />
    </div>
  );
};

const FirstWife = ({ firstWifeSurname }) => {
  return (
    <>
      <div>My name is Oluremi {firstWifeSurname} </div>
      <FirstGFriend FamilySurname={firstWifeSurname} />
    </>
  );
};

const FirstGFriend = ({ FamilySurname }) => {
  return (
    <>
      <div>my name is Janet </div>
      <SecondGFriend FamilySurname={FamilySurname} />
    </>
  );
};

const SecondGFriend = ({ FamilySurname }) => {
  return (
    <>
      <div>my name is Pristine </div>
      <FirstChild FamilyName={FamilySurname} />
    </>
  );
};

const FirstChild = ({ FamilySurname }) => {
  return 'my name is Oluyemi' + FamilySurname;
};

export { Family };
