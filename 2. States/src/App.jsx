import './App.css';
import { useState } from 'react';
import Counter from './Counter';
import SideEffect from './SideEffect';

function App() {
  console.log('App componenet was renderd');

  return (
    <>
      <Counter />
      <SideEffect />
    </>
  );
}
console.log(App);
export default App;
