import { useState, useEffect } from 'react';
import CorrectStopWatch from './component/CorrectStopWatch';
// import Counter from './Counter';
// import StopWatch from './StopWatch';
// import StopTime from './StopTime';
// import UseEffectSample from './useEffect/UseEffectSample';
// import UseRefSamples from './useRef/UseRefSamples';
// import ResizeSc from './screenResize/ResizeSc';
// import ParentComp from './ParentComp';
import StateExe from './component/StateExe';
import Todo from './Todo/Todo';
import COunter from './counter/COunter';
function App() {
  return (
    <>
      <CorrectStopWatch />
      {/* <StopTime />
      <UseEffectSample />
      <UseRefSamples />
      <ResizeSc /> */}
      {/* <ParentComp /> */}
      {/* <StateExe /> */}
      <COunter />
    </>
  );
}

export default App;
