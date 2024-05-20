import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
let BASE_URL = 'https://jsonplaceholder.typicode.com';

function FetchApiComp() {
  const [Data, setData] = useState([]);
  const [urlResource, seturlResource] = useState('users');
  const [sent, setsent] = useState(false);
  const [formData, setformData] = useState({ name: '', email: '' });

  useEffect(() => {
    axios
      .get(`${BASE_URL}/${urlResource}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [urlResource, sent]);

  const handleChnage = (e) => {
    setformData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const postRequest = (e) => {
    e.preventDefault();
    axios
      .post(
        `${BASE_URL}/${urlResource}`,
        JSON.stringify({
          first_name: formData.name,
          last_name: 'ANyValue',
          email: formData.email,
          avatar: '',
        })
      )
      .then((res) => {
        console.log(res), setsent(!sent);
      })
      .catch((err) => console.log(err));
  };

  // const fecthData = async (e) => {
  //   e.preventDefault();
  //   let dataToPost = await fetch(`${BASE_URL}/posts`, {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       userId: 1,
  //       title: stateData.title,
  //       body: stateData.body,
  //       userID: stateData.userID,
  //     }),
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     },
  //   });
  //   let response = await dataToPost.json();

  //   userId.current = userId.current + 1;
  //   response.id = userId.current;
  //   console.log(console.log(response));
  //   setData([response, ...Data]);
  // };

  return (
    <section className='App'>
      <h2 align='center'>All Posts</h2>

      <div>
        <form action='' onSubmit={postRequest}>
          <div>
            <label htmlFor=''>Title</label>
            <input
              type='text'
              value={formData.name}
              onChange={handleChnage}
              id='name'
            />
          </div>

          <div>
            <label htmlFor=''>Body</label>
            <input
              type='text'
              id='email'
              value={formData.email}
              onChange={handleChnage}
              name=''
            />{' '}
          </div>

          <button>Submit Post</button>
        </form>
      </div>

      <div className='posts'>
        {Data.map((item) => {
          return (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.email}</p>
              <button type='submit'>Delete Post</button>
              <button>add Post</button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FetchApiComp;
