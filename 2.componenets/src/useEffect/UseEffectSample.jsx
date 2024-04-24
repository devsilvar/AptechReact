import { useEffect, useState } from 'react';
import './useEffectStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const UseEffectSample = () => {
  const [hideBox, sethideBox] = useState(false);
  const [data, setdata] = useState([]);

  function print() {
    function sum() {
      return 'Hello how are you doing';
    }
    sum(); // it is not a sode effcet since it implenetation is coming fom the function scope..
    console.log('hello how are you'); // console.log is a sode effect   but this is a side effext
  }

  useEffect(() => {
    let buttonID = document.getElementById('effects');
    console.log(buttonID);
  }, []);

  useEffect(() => {
    //  let getData;
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then((response) => response.json())
      .then((json) => (json = setdata(json)));
    // console.log(getData);
  }, []);

  return (
    <section>
      <h2>useEffect Exmaples </h2>
      {hideBox && <div className='effect-box'></div>}
      <button
        id='effects'
        className='btn btn-danger m-auto d-flex justify-content-center'
        onClick={() => sethideBox(!hideBox)}
      >
        Click Me
      </button>
      <div>{JSON.stringify(data, null, 2)}</div>
    </section>
  );
};

export default UseEffectSample;
