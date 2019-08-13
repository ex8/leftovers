import React from 'react';
import { Divider } from '@material-ui/core';

import Hero from './Hero';
import Featured from './Featured';
import Footer from '../layout/Footer';
import Strip from './Strip';

const Home = () => {
  return (
    <div>
      <Hero />
      <Featured title="Popular dishes on Leftovers" cards={[1, 2, 3]} />
      <Divider variant="middle" />
      <Featured title="New dishes on Leftovers" cards={[1, 2, 3]} />
      <Footer />
    </div>
  );
}

export default Home;
