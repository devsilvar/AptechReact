// Getting values in and out of form state
// Validation and error messages
// Handling form submission
import './form.css';
import { useState } from 'react';
import { useFormik } from 'formik';
import eyeIcon from '../assets/eye.svg';
import closeye from '../assets/closeEye.svg';
const Formikforms = () => {
  const [isActive, setisActive] = useState(false);
  const validate = (values) => {
    const errors = {};
    if (!values.firstname) {
      errors.firstname = 'Required';
    } else if (values.firstname.length > 15) {
      errors.firstname = 'You Firstname has to be less than 15 characters';
    }

    if (!values.email) {
      errors.email = 'required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid Email Adress';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form action='' onSubmit={formik.handleSubmit}>
      <div className='form-block'>
        <label htmlFor=''>FirstName</label>
        <input
          type='text'
          id='firstname'
          value={formik.values.firstname}
          onChange={formik.handleChange}
        />
        <div onClick={() => setisActive((prev) => !prev)}>
          {isActive ? (
            <img src={eyeIcon} alt='' width={20} height={20} />
          ) : (
            <img src={closeye} alt='' width={20} height={20} />
          )}
        </div>
      </div>
      <sub style={{ color: 'red' }}>
        {formik.errors.firstname ? formik.errors.firstname : ''}
      </sub>

      <label htmlFor=''>lastName</label>
      <input
        type='text'
        id='lastname'
        value={formik.values.lastname}
        onChange={formik.handleChange}
      />

      <label htmlFor=''>Email</label>
      <input
        type='email'
        id='email'
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <sub>{formik.errors.email ? formik.errors.email : ''}</sub>

      <button type='submit'>Submit</button>
    </form>
  );
};

export default Formikforms;
