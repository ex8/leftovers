import React from 'react';

import Hero from './Hero';
import Steps from './Steps';
import Featured from './Featured';

const Home = () => {
  return (
    <div>
      <Hero />
      <Steps />
      <Featured />
      <Steps />
    </div>
  );
}

export default Home;
