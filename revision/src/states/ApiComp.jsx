import { useEffect, useState } from 'react';

let BASE_URL = 'https://jsonplaceholder.typicode.com/comments';
const ApiComp = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch(BASE_URL)
      .then(function (data) {
        return data.json();
      })
      .then(function (response) {
        setdata(response);
      });
  }, []);

  return (
    <section>
      {data.map((item) => {
        return (
          <section style={{ backgroundColor: 'teal', margin: '10px' }}>
            Name : {item.name}
            <br />
            email : {item.email}
          </section>
        );
      })}
    </section>
  );
};

export default ApiComp;
