import { useState, useEffect } from 'react';

import Counter from './Counter';
import StopWatch from './StopWatch';
import StopTime from './StopTime';
import UseEffectSample from './useEffect/UseEffectSample';
import CorrectStopWatch from './CorrectStopWatch';
import UseRefSamples from './useRef/UseRefSamples';
import ResizeSc from './screenResize/ResizeSc';

function App() {
  return (
    <>
      <StopTime />
      <CorrectStopWatch />
      <UseEffectSample />
      <UseRefSamples />
      <ResizeSc />
    </>
  );
}

export default App;
