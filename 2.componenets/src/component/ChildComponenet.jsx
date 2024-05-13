import React from 'react';
import LittleChild from './LittleChild';

const ChildComponenet = ({ name, age, gender }) => {
  return (
    <div>
      Name : {name}
      Age: {age}
      Gnder:{gender}
      <LittleChild />
    </div>
  );
};

export default ChildComponenet;
