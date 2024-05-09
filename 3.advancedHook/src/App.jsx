import './App.css';
import { FamilyContext } from './useContext/Context';
import GetCurrentValue from './useRef/GetCurrentValue';
import UseRefChangeColor from './useRef/UseRefChangeColor';
import UseRefHook from './useRef/UseRefHook';
function App() {
  return (
    <>
      <FamilyContext />
      <UseRefHook />
      <GetCurrentValue />
      <UseRefChangeColor />
    </>
  );
}

export default App;
