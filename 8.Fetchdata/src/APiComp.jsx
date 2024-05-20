import { useEffect, useState } from 'react';
import axios from 'axios';

const APiComp = () => {
  const [data, setdata] = useState([]);
  const [formData, setformData] = useState({ name: '', job: '' });

  const handleChange = (e) => {
    setformData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://reqres.in/api/users/950`, JSON.stringify(formData))
      .then((response) => console.log(response));
  };

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users`)
      .then((res) => setdata(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2>Using Rest Apis</h2>

      <form action='' onSubmit={handleSubmit}>
        <input
          type='text'
          id='name'
          onChange={handleChange}
          value={formData.name}
          placeholder='enter your name'
        />
        <input
          type='text'
          id='job'
          onChange={handleChange}
          value={formData.job}
          placeholder='enter your job'
        />

        <button type='submit'>Add Entry</button>
      </form>
      <section className='users'>
        {data.map((items) => {
          return (
            <div key={items.id}>
              <img src={items.avatar} width='300px' height='300px' alt='' />
              <p>Name: {items.first_name}</p>
              <p>email: {items.email}</p>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default APiComp;
