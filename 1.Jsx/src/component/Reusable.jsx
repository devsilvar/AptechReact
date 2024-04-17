import React from 'react';
import '../App.css';
const Reusable = ({ heading, centerText, Ptext }) => {
  return (
    <div className='boxes'>
      <h1>{heading}</h1>

      <div>{centerText}</div>

      <p>{Ptext}</p>
    </div>
  );
};

export default Reusable;
