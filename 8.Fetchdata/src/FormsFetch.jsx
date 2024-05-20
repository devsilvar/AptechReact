import { useState, useEffect } from 'react';
import axios from 'axios';

const FormsFetch = () => {
  const [Data, setData] = useState([]);
  const [formData, setformData] = useState({ name: 'qqq', job: 'qqq' });
  const [PostData, setPostData] = useState({ name: '', job: '' });
  const [APiResource, setAPiResource] = useState('users?page=2');

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/${APiResource}`)
      .then((response) => setData(response.data.data))
      .catch((err) => console.log(err));
  }, [APiResource]);

  const handleChange = (e) => {
    setformData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const PostRequest = (e) => {
    setAPiResource('users');
    e.preventDefault();
    axios
      .post(
        `https://reqres.in/api/${APiResource}`,
        JSON.stringify({
          name: formData.name,
          job: formData.job,
        })
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const updateUser = (e) => {
    e.preventDefault();
    axios
      .patch(
        'https://reqres.in/api/users/2',
        JSON.stringify({ name: formData.name, job: formData.job })
      )
      .then((res) => console.log(res));
  };

  return (
    <section>
      <form action='' onSubmit={updateUser}>
        <label htmlFor=''>Enter Your Name</label>
        <input
          type='text'
          id='name'
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor=''>Enter Your Job</label>
        <input
          type='text'
          id='job'
          value={formData.job}
          onChange={handleChange}
        />
        <button type='submit'>Submit Post</button>
      </form>

      {Data.map((item) => (
        <div
          key={item.id}
          style={{ backgroundColor: 'orange', padding: '10px', margin: '10px' }}
        >
          <p>{item.first_name}</p>
          <p>{item.last_name}</p>
          <p>{item.email}</p>
        </div>
      ))}
    </section>
  );
};

export default FormsFetch;
