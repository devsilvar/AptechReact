import React from 'react';
import { useState, useEffect } from 'react';

const ResizeSc = () => {
  const [screenWidth, setscreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeScreen = () => {
      setscreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', resizeScreen);

    return window.removeEventListener('resize', resizeScreen);
  }, []);

  return <section> {screenWidth} </section>;
};

export default ResizeSc;
