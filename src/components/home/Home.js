import React from 'react';
import { Divider, Container } from '@material-ui/core';

import Hero from './Hero';
import Featured from './Featured';
import Footer from '../layout/Footer';
import Strip from './Strip';

const Home = () => {
  return (
    <Container>
      <Hero />
      <Featured title="Popular dishes on Leftovers" cards={[1, 2, 3]} />
      <Divider variant="middle" />
      <Strip />
      <Divider variant="middle" />
      <Featured title="New dishes on Leftovers" cards={[1, 2, 3]} />
      <Footer />
    </Container>
  );
}

export default Home;
