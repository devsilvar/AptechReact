import CounterFc from './Components/CounterFc';
import Countercl from './Components/Countercl';

function App() {
  return (
    <>
      <Countercl />
      <CounterFc />
    </>
  );

  // --steps
  // React DOm creates a Root
  // The id root inside the HTML is located and selected
  // The app componenet is rendered  in main.jsx
  // The result of the rendering is sent to the Root   - index.html
}
export default App;
