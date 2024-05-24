import { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SimpleForm = () => {
  const [formData, setformData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const validation = useRef('');

  const [isValid, setisValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.name + formData.email + formData.password);
  };

  const handleChange = (e) => {
    setformData((prev) => ({ ...prev, [e.target.id]: e.target.value }));

    if (validation.current.value.length <= 8) {
      setisValid(false);
    } else {
      setisValid(true);
    }
  };

  return (
    <section className='mt-5 w-25 m-auto'>
      <form action='' className=' bg-warning p-3' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter Your name'
          className='form-control'
          id='name'
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type='email'
          id='email'
          placeholder='Enter Your email'
          className='form-control my-4'
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type='password'
          id='password'
          placeholder='Enter Your password'
          className='form-control'
          value={formData.password}
          ref={validation}
          onChange={handleChange}
        />
        {isValid == true ? (
          ''
        ) : (
          <div className='text-danger' style={{ fontSize: '0.8rem' }}>
            Paswword less than 8 Characters
          </div>
        )}

        <button className='btn btn-dark mt-3' type='submit'>
          Submit
        </button>
      </form>

      <div>Name: {validation.current.length}</div>
      <div>Email: {validation.current.length}</div>
      <div>Password: {validation.current.length}</div>
    </section>
  );
};

export default SimpleForm;
