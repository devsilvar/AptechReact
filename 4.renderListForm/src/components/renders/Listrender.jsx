import React from 'react';
import codeImage from '../../assets/code.jpg';
const Listrender = () => {
  const studentList = [
    'Uthman',
    'Lotti',
    'Gideon',
    'Azi',
    'Emmanuel',
    'Eniola',
  ];

  const coder = [
    { id: 1, language: 'Javascript', img: codeImage },
    { id: 2, language: 'Java', img: codeImage },
  ];
  return (
    <section>
      <ol>
        {['uthman', 'Lotti', 'Emmanuel', 'Eniola'].map((item, index, arr) => {
          return <li key={index}> {item} </li>;
        })}
      </ol>

      <section style={{ display: 'flex' }}>
        {coder.map((item) => (
          <div key={item.id} style={{ width: '200px' }}>
            <img src={item.img} style={{ width: '100%' }} alt='' />
            <p>Language: {item.language}</p>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Listrender;
