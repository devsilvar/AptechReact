import './App.css';
import { useState } from 'react';
import Counter from './Counter';
import SideEffect from './SideEffect';

function App() {
  return (
    <>
      {/* <h2>Hello</h2> */}
      <Counter />

      <SideEffect />
    </>
  );
}

export default App;
