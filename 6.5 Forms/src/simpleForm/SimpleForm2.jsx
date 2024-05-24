import { useRef } from 'react';
const SimpleForm2 = () => {
  const formEmail = useRef('');
  const formPassword = useRef('');

  return (
    <section>
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
          <input
            type='password'
            id='password'
            value={userData.password}
            placeholder='Enter Your Password'
            onChange={handleChange}
            className='form-control mt-3 px-4 py-2'
          />
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
    </section>
  );
};

export default SimpleForm2;
