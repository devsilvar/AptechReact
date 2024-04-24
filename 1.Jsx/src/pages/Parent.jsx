import React from 'react';
import Staless from '../component/Staless';

const Parent = ({ status }) => {
  return (
    <div>
      I am a Parent but i am the child of {status}
      <Staless getStatus={status} />
    </div>
  );
};

export default Parent;
