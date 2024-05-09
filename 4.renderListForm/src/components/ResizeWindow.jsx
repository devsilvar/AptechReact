import { useState, useEffect } from 'react';
const ResizeWindow = () => {
  const [width, setwidth] = useState(window.innerWidth);

  useEffect(() => {
    const GetInnerWidth = () => {
      setwidth(window.innerWidth);
    };

    window.addEventListener('resize', GetInnerWidth);

    return () => {
      window.removeEventListener('resize', GetInnerWidth);
    };
  }, []);

  return <section>The Width of Your Current Browser is {width}</section>;
};

export default ResizeWindow;
