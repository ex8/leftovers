import React from 'react';

import Hero from './Hero';
import Featured from './Featured';
import Footer from '../layout/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <Featured title="Popular dishes" type="popular" />
      <Featured title="New dishes" type="newest" />
      <Footer />
    </div>
  );
}

export default Home;
