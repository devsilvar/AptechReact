import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './components/Counter';
import CounterReducer from './components/CounterReducer';
import BgChanger from './components/BgChanger';
import ReducerState from './components/ReducerState';

function App() {
  return (
    <>
      <Counter />
      {/* <CounterReducer /> */}
      {/* <ReducerState /> */}
      <BgChanger />
    </>
  );
}

export default App;
