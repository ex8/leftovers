import React from 'react';

import Hero from './Hero';
import Featured from './Featured';
import Footer from '../layout/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <Featured title="Popular dishes on Leftovers" type="popular" />
      <Featured title="New dishes on Leftovers" type="newest" />
      <Footer />
    </div>
  );
}

export default Home;
