import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './components/Counter';
import CounterReducer from './components/CounterReducer';
import BgChanger from './components/BgChanger';
import ReducerState from './components/ReducerState';
import UseRefSample from './userefs/UseRefSample';
import NeedContext from './usecontext/NeedContext';
import { FamilyContext } from './usecontext/Context';
import PropSample from './propdrill/PropSample';

function App() {
  return (
    <>
      {/* <CounterReducer /> */}
      {/* <ReducerState /> */}
      {/* <FamilyContext /> */}
      <PropSample />
    </>
  );
}

export default App;
