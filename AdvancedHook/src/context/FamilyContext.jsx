import { useState } from 'react';

const Family = () => {
  const [familyName, setfamilyName] = useState('Tinubu');
  return <Father surname={familyName} />;
};

const Father = (props) => {
  return (
    <div>
      My name is Ahmed {props.surname}
      <Mother name={props.surname} />
    </div>
  );
};

const Mother = (props) => {
  return (
    <div>
      My name is Oluremi {props.name}
      <FGF collectedName={props.name} />
    </div>
  );
};

const FGF = (props) => {
  return (
    <div>
      My Name is Julia
      <SGF notMyName={props.collectedName} />
    </div>
  );
};

const SGF = (props) => {
  return (
    <div>
      MY Name is Janet
      <Firstchild myFamilyName={props.notMyName} />
    </div>
  );
};

const Firstchild = (props) => {
  return (
    <div>
      My Name is Kola {props.myFamilyName}
      <SecondChild name={props.myFamilyName} />
    </div>
  );
};

const SecondChild = (props) => {
  return <div>My name is Kunle {props.name}</div>;
};

export { Family };
