import { useState } from 'react';
import './simpleform.css';
const SimpleForm = () => {
  //   const [username, setusername] = useState('');
  //   const [password, setpassword] = useState('');

  const [formData, setformData] = useState({
    username: '',
    password: '',
    question: '',
    cpassword: '',
  });

  const [passwordActive, setpasswordActive] = useState(false);
  const [cpasswordActive, setcpasswordActive] = useState(false);
  const [usernameActive, setusernameActive] = useState(false);
  //   const cpassword = useRef('');

  const handleChange = (e) => {
    setformData((prev) => ({ ...prev, [e.target.id]: e.target.value }));

    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    console.log(passwordPattern.test(formData.password));

    if (passwordPattern.test(formData.password) == false) {
      setpasswordActive(true);
    } else {
      setpasswordActive(false);
    }

    if (formData.password !== formData.cpassword) {
      setcpasswordActive(true);
    } else {
      setcpasswordActive(false);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <form action='' onSubmit={submitForm}>
        <div>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            value={formData.username}
            onChange={handleChange}
            onBlur={() => setusernameActive((prev) => !prev)}
            pattern='^[a-zA-Z]d{0,8}$'
          />
        </div>
        {usernameActive && (
          <small>Enter a Username with 8 charaters and no number</small>
        )}

        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='text'
            id='password'
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {passwordActive && (
          <small>
            Your password should contain one small caps, one Capital letter, one
            number
          </small>
        )}

        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='text'
            id='cpassword'
            value={formData.cpassword}
            onChange={handleChange}
          />
        </div>
        {cpasswordActive && (
          <small>Your Password shoudl match each other</small>
        )}
        <div>
          <label htmlFor=''>Who is president of Nigeri</label>
          <select
            name='question'
            id='question'
            defaultValue={formData.question}
            onChange={handleChange}
          >
            <option value=''>Any</option>
            <option value='Tinubu'>Tinubu</option>
            <option value='Atiku'>Atiku</option>
            <option value='Obasanjo'>Obasanjo</option>
            <option value='Peter Obi'>Peter Obi</option>
          </select>
        </div>
        <button type='submit'>Submit Form</button>
      </form>
    </>
  );
};

export default SimpleForm;
