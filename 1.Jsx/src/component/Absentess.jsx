import React from 'react';
import Special from './Special';

const Absentess = ({totalSTudentNumber}) => {
  return (
    <>
      <p>Out of {totalSTudentNumber} only These two were absenst</p>
      <h2>Eniola</h2>
      <h2>Jordan</h2>

      <Special studentsNumber={totalSTudentNumber} />
    </>
  );
};

export default Absentess;
