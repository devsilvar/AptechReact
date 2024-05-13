import React from 'react';
import GrandChild from './GrandChild';

const LittleChild = ({ gender }) => {
  return (
    <div>
      Little child
      <GrandChild gender={gender} />
    </div>
  );
};

export default LittleChild;
