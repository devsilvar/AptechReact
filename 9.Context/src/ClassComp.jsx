// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  return (
    <div>
      <ChildComponent name='Cas' />;
      <ChildComponent name='Nuel' />;
      <ChildComponent name='Abbey' />;
    </div>
  );
};

export default ParentComponent;
