import React from 'react';
import { useFormik } from 'formik';

const FormFormik = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      firstname: '',
      lastname: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form action='' onSubmit={formik.handleSubmit}>
      <label htmlFor=''>Enter Your Email Adress</label>
      <input
        type='email'
        id='email'
        onChange={formik.handleChange}
        value={formik.values.email}
        placeholder='enter your email'
      />

      <label htmlFor=''>Enter Your FirstName</label>
      <input
        type='text'
        id='firstname'
        onChange={formik.handleChange}
        value={formik.values.firstname}
        placeholder='enter your firstname'
      />

      <label htmlFor=''>Enter Your Last name</label>
      <input
        type='text'
        id='lastname'
        onChange={formik.handleChange}
        value={formik.values.lastname}
        placeholder='enter your lastname'
      />

      <button type='submit'>Submit</button>
    </form>
  );
};

export default FormFormik;
