import React, { useState } from 'react';

const StudentList = () => {
  return (
    <section>
      <ol>
        {['ade', 'tunde', 'bayo', 'kunle', 'segun'].map((item) => {
          return <li> {item} </li>;
        })}
      </ol>
    </section>
  );
};

export default StudentList;
