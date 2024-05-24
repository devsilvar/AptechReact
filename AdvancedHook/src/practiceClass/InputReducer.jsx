import { useState, useReducer } from 'react';

const initialArg = { counter: 0 };

const reducer = (state, action) => {
  //we have two actions

  //add the counter
  if (action.type == 'ADDITION') {
    return { ...state, counter: action.payload };
  }

  //minus the age
  if (action.type == 'SUBTRACTION') {
    return { ...state, counter: action.payload };
  }

  return state;
};

const InputReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialArg);

  //   const [name, setname] = useState('bayo');
  //   const [Age, setAge] = useState(12);

  return (
    <div>
      <h2>{state.counter}</h2>

      <button
        onClick={() =>
          dispatch({ type: 'ADDITION', payload: state.counter + 1 })
        }
      >
        Submit
      </button>
      <button
        onClick={() =>
          dispatch({ type: 'SUBTRACTION', payload: state.counter - 1 })
        }
      >
        Submit
      </button>
    </div>
  );
};

export default InputReducer;
