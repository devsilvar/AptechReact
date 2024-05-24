import { useRef } from 'react';

const UncontrolledForm = () => {
  const formName = useRef();
  const formEmail = useRef();
  const formOption = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formName.current.value);
    console.log(formEmail.current.value);
    console.log(formOption.current.value);
  };

  return (
    <fieldset style={{ margin: 'auto', width: '40%' }}>
      <form action='' onSubmit={handleSubmit}>
        <label htmlFor=''>Enter Your Name</label>
        <input ref={formName} type='text' />

        <label htmlFor=''>Enter Your Email</label>
        <input type='text' ref={formEmail} />

        <label htmlFor=''>Where Do you Live</label>
        <select name='' id='' ref={formOption}>
          <option value='Abuja'>Abuja</option>
          <option value='Lagos'>Lagos</option>
          <option value='Ibadan'>Ibadan</option>
        </select>

        <button type='submit'>Submit</button>
      </form>
    </fieldset>
  );
};

export default UncontrolledForm;
