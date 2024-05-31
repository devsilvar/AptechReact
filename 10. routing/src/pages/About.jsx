import React from 'react';
import { useTheme } from '../Context/DarkModeContext';

const About = () => {
  const { mode, toggleMode } = useTheme();

  return (
    <div>
      About Page Section has a collor to change whne you click this button{' '}
      <button onClick={toggleMode}>Chnage Color</button>
    </div>
  );
};

export default About;
