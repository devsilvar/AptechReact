import React from 'react';
import pics from '../assets/pics.png';
const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${pics})`,
        height: '400px',
        objectFit: 'contain',
        objectPosition: 'center',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      Hero
    </section>
  );
};

export default Hero;
