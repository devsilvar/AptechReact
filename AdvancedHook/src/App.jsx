import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './components/Counter';
import BgChanger from './components/BgChanger';
import ReducerState from './components/ReducerState';
import UseRefSample from './userefs/UseRefSample';
import NeedContext from './usecontext/NeedContext';
import { FamilyContext } from './usecontext/Context';
import PropSample from './propdrill/PropSample';
import Formreducer from './reducer/Formreducer';
import CounterReducer from './practiceClass/CounterReducer';
import InputReducer from './practiceClass/InputReducer';

function App() {
  return (
    <>
      {/* <CounterReducer /> */}
      {/* <ReducerState /> */}
      {/* <FamilyContext /> */}
      {/* <PropSample /> */}
      {/* <Formreducer /> */}
      <CounterReducer />
      <InputReducer />
    </>
  );
}

export default App;
