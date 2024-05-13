import React from 'react';
import ChildComponenet from './ChildComponenet';

const ParentComp = () => {
  let name = 'Bisi';
  let name2 = 'shade';
  return (
    <div>
      <ChildComponenet name={name} age={56} gender='male' />
      <ChildComponenet name={name2} age={16} gender='female' />
    </div>
  );
};

export default ParentComp;
