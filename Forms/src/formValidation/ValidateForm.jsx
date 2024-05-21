import { useState } from 'react';
import './validate.css';
import { validateEmail, validatePassword } from './validate';

const ValidateForm = () => {
  const [formData, setformData] = useState({
    username: '',
    email: '',
    password: '',
    cpassword: '',
  });

  const errorMsg = {
    username:
      formData.username.length <= 7 && formData.username.length > 0
        ? 'You need to enter at least 8 charaters'
        : '',
    email: validateEmail(formData.email) == true ? '' : 'email is invalid',
    password: validatePassword(formData.password)
      ? ''
      : 'you need to enter one lower case, one upper case, one special charter and at least 8 words',
    cpassword: 'your password so not match',
  };

  const handleChange = (e) => {
    setformData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <section>
      <form action='' className='valid' style={{ padding: '20px' }}>
        <div>
          <label htmlFor=''>Enter your UserName</label>
          <input
            type='text'
            id='username'
            value={formData.username}
            placeholder=''
            onChange={handleChange}
            required
          />
          <sub className='danger'>{errorMsg.username}</sub>
        </div>

        <div>
          <label htmlFor=''>Enter Your Email</label>
          <input
            type='email'
            id='email'
            value={formData.email}
            onChange={handleChange}
          />
          <sub className='danger'>
            {formData.email.length > 0 && errorMsg.email}
          </sub>
        </div>
        <div>
          <label htmlFor=''>Enter Your Password</label>
          <input
            type='password'
            id='password'
            value={formData.password}
            onChange={handleChange}
          />
          <sub className='danger'>
            {formData.password.length > 0 && errorMsg.password}
          </sub>
        </div>
        <div>
          <label htmlFor=''>Confirm Your Password</label>
          <input
            type='password'
            id='cpassword'
            value={formData.cpassword}
            onChange={handleChange}
          />
        </div>
        <button>Submit</button>
      </form>
    </section>
  );
};

export default ValidateForm;
