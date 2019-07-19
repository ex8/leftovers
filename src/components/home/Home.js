import React from 'react';

import Hero from './Hero';
import Strip from './Strip';
import Featured from './Featured';

const Home = () => {
  return (
    <div>
      <Hero />
      <Strip />
      <Featured />
      <Strip />
    </div>
  );
}

export default Home;
