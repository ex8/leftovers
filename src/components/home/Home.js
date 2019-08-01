import React from 'react';

import Hero from './Hero';
import Featured from './Featured';
import Footer from '../layout/Footer';
import Strip from './Strip';

const Home = () => {
  return (
    <div>
      <Hero />
      <Featured title="Popular dishes in San Francisco" cards={[1, 2, 3]} />
      <Featured title="New dishes on Leftovers" cards={[1, 2, 3]} />
      <Footer />
    </div>
  );
}

export default Home;
