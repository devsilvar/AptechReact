import { useState } from 'react';
import './form.css';
const MultipleVal = () => {
  const [formValues, setformValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setformValues((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const displayInput = (e) => {
    e.preventDefault();
    alert(formValues.name, formValues.email, formValues.message);
  };

  return (
    <fieldset>
      <form action='' onSubmit={displayInput}>
        <label htmlFor=''> Enter Your Name</label>
        <input
          type='text'
          id='name'
          value={formValues.name}
          onChange={handleChange}
        />

        <label htmlFor=''> Enter Your Email</label>
        <input
          type='email'
          id='email'
          value={formValues.email}
          onChange={handleChange}
        />

        <label htmlFor=''>Enter Your Message</label>
        <textarea
          name=''
          cols='30'
          rows='10'
          id='message'
          value={formValues.message}
          onChange={handleChange}
        ></textarea>

        <button type='submit'>Submit</button>
      </form>

      <div>
        <ul>
          <li>Name: {formValues.name}</li>
          <li>Email: {formValues.email}</li>
          <li>Message; {formValues.message}</li>
        </ul>
      </div>
    </fieldset>
  );
};

export default MultipleVal;
