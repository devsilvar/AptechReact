import { useReducer } from 'react';

const initialValues = { name: '', email: '', age: '' };
const reducer = (state, action) => {
  //actions

  //for updating the email

  if (action.type == 'UPDATE_EMAIL') {
    return { ...state, email: action };
  }

  if (action.type == 'UPDATE_AGE') {
    return { ...state, age: action.payload };
  }

  if (action.type == 'UPDATE_NAME') {
    return { ...state, name: action.payload };
  }
};

const Formreducer = () => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  function handleSubmit() {
    console.log(state);
  }
  return (
    <section>
      <label htmlFor=''>Enter Your Name</label>
      <input
        type='text'
        name=''
        id='name'
        value={state.name}
        onChange={(e) =>
          dispatch({ type: 'UPDATE_NAME', payload: e.target.value })
        }
      />

      <label htmlFor=''>Enter Your Email</label>
      <input
        type='text'
        name=''
        id='email'
        value={state.email}
        onChange={(e) =>
          dispatch({ type: 'UPDATE_EMAIL', payload: e.target.value })
        }
      />

      <label htmlFor=''>Enter Your Age</label>
      <input
        type='text'
        id='age'
        onChange={(e) =>
          dispatch({ type: 'UPDATE_AGE', payload: e.target.value })
        }
      />

      <button onClick={handleSubmit}>Submit Details</button>
    </section>
  );
};

export default Formreducer;
