import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Details = { email: 'yusuf@gmail.com', password: 'secretPassword' };

const SimpleForms = () => {
  const [userData, setuserData] = useState({ email: '', password: '' });
  const [active, setActive] = useState(false);
  const [validate, setvalidate] = useState({ email: false, password: false });
  const handleChange = (e) => {
    setuserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    setActive(false);
  };

  const submitForm = (e) => {
    // we wwant to check for an error and validate it
    e.preventDefault();

    if (userData.email == Details.email) {
      setvalidate((prev) => ({ ...prev, email: true }));
    } else {
      setvalidate((prev) => ({ ...prev, email: false }));
    }

    if (userData.password == Details.password) {
      setvalidate((prev) => ({ ...prev, password: true }));
    } else {
      setvalidate((prev) => ({ ...prev, password: false }));
    }

    console.log(
      `Your Email is ${userData.email} , Your Password is ${userData.password}`
    );
    setActive(true);
  };

  return (
    <div>
      <form
        action=''
        onSubmit={submitForm}
        className='p-4 w-25 m-auto mt-4 bg-warning'
      >
        <input
          type='email'
          id='email'
          className='form-control px-4 py-2'
          value={userData.email}
          onChange={handleChange}
          placeholder='Enter Your Email'
        />

        {validate.email ? (
          ''
        ) : (
          <small className='text-danger text-small'>email Invalid</small>
        )}
        <input
          type='password'
          id='password'
          value={userData.password}
          placeholder='Enter Your Password'
          onChange={handleChange}
          className='form-control mt-3 px-4 py-2'
        />
        {validate.password == true ? (
          ''
        ) : (
          <small className='text-danger text-small'>password Invalid</small>
        )}
        <button
          type='submit'
          className='btn btn-dark m-auto d-flex justify-content-center mt-4 text-warning px-4 py-2'
        >
          Submit
        </button>
      </form>

      <div className='m-auto w-25 mt-4'>
        <p>Email: {active && userData.email}</p>
        <p>Passowrd : {active && userData.password}</p>
      </div>
    </div>
  );
};

export default SimpleForms;
