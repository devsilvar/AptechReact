import { Component } from 'react';

const Countercl = ({ startNum, increseNum, decreseNum }) => {
  return (
    <>
      <div
        className='counter'
        style={{
          padding: '20px',
          backgroundColor: 'orange',
          fontSize: '4rem',
          color: 'black',
          width: '20%',
          margin: 'auto',
          textAlign: 'center',
        }}
      >
        {startNum}

        <div className='btns'>
          <button onClick={increseNum}>+</button>
          <button onClick={decreseNum}>-</button>
        </div>
      </div>
    </>
  );
};

export default Countercl;
