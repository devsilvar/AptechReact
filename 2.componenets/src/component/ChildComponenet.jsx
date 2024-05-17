import React from 'react';
import LittleChild from './LittleChild';

const ChildComponenet = ({ name, age, gender }) => {
  return (
    <div>
      Name : {name}
      Age: {age}
      Gnder:{gender}
      <LittleChild gender={gender} />
    </div>
  );
};

export default ChildComponenet;
