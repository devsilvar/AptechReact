import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MondayClass from './states/MondayClass';
import ApiComp from './states/ApiComp';
import BackChanger from './components/BackChanger';
import Grocery from './Grpcery/Grocery';

function App() {
  return (
    <section>
      <div>
        {/* <MondayClass />
        <ApiComp /> */}
        {/* <BackChanger /> */}
        <Grocery />
      </div>
    </section>
  );
}

export default App;
