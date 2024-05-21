import './formvalidate.css';
import { useState } from 'react';
const FormValidate = () => {
  const [formData, setformData] = useState({
    username: '',
    email: '',
    password: '',
    cpassword: '',
  });

  const validatePassword = (password) => {
    return String(password).match(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
    );
  };

  const ErrorMsg = {
    username: 'Your Username is Invalid',
    email: 'Your Email is Invalid',
    password:
      'Your password should contain at least one lower case, one upper case , one number and a special character',
    cpassword: 'your password do not match',
  };

  const ValidateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = () => {};

  const handleChnage = (e) => {
    setformData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <>
      <form action='' onSubmit={handleSubmit}>
        <div>
          <label htmlFor=''>Enter Your Username</label>
          <input
            type='text'
            id='username'
            value={formData.username}
            onChange={handleChnage}
          />
          <sub className='danger'>
            {formData.username.length == 0
              ? ''
              : formData.username.length <= 7
              ? ErrorMsg.username
              : ''}
          </sub>
        </div>

        <div>
          <label htmlFor=''>Enter Your Email Adress</label>
          <input
            type='email'
            id='email'
            value={formData.email}
            onChange={handleChnage}
          />
          <sub className='danger'>
            {' '}
            {formData.email.length == 0
              ? ''
              : ValidateEmail(formData.email)
              ? ''
              : ErrorMsg.email}
          </sub>
        </div>

        <div>
          <label htmlFor=''>Password</label>
          <input
            type='password'
            id='password'
            value={formData.password}
            onChange={handleChnage}
          />
          <sub className='danger'>
            {' '}
            {formData.password.length == 0
              ? ''
              : validatePassword(formData.password)
              ? ''
              : ErrorMsg.password}
          </sub>
        </div>

        <div>
          <label htmlFor=''>Confirm Password</label>
          <input
            type='password'
            id='cpassword'
            value={formData.cpassword}
            onChange={handleChnage}
          />
          <sub className='danger'>
            {' '}
            {formData.cpassword.length == 0
              ? ''
              : formData.password == formData.cpassword
              ? ''
              : ErrorMsg.cpassword}
          </sub>
        </div>

        <button className='btn'>Submit Form</button>
      </form>
    </>
  );
};

export default FormValidate;
