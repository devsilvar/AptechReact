import React from 'react';
import { useFormik } from 'formik';

const FormFormik = () => {
  const submitForm = () => {
    const formik = useFormik(
      {},
      (onSubmit = (values) => {
        console.log(values);
      })
    );
  };
  return (
    <section>
      <form action=''>
        <div>
          <label htmlFor=''>Email</label>
          <input type='email' id='email' />
        </div>

        <div>
          <label htmlFor=''>Password</label>
          <input type='password' id='password' />
        </div>
      </form>
    </section>
  );
};

export default FormFormik;
