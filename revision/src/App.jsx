import { useState } from 'react';
import './App.css';
import MondayClass from './states/MondayClass';
import ApiComp from './states/ApiComp';
import BackChanger from './components/BackChanger';

function App() {
  return (
    <section>
      <div>
        {/* <MondayClass />
        <ApiComp /> */}
        <BackChanger />
      </div>
    </section>
  );
}

export default App;
