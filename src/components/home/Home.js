import React from 'react';

import Hero from './Hero';
import Strip from './Strip';
import Featured from './Featured';
import Footer from '../layout/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <Strip />
      <Featured />
      <Strip />
      <Footer />
    </div>
  );
}

export default Home;
