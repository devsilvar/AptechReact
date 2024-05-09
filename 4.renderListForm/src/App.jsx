import { useState } from 'react';
import './App.css';
import ResizeWindow from './components/ResizeWindow';
import Count from './components/Count';
import Fintech from './components/Fintech';
import Changer from './components/Changer';
import Listrender from './components/renders/Listrender';

function App() {
  return (
    <>
      <Fintech />
      <Changer />
      <Listrender />
    </>
  );
}

export default App;
