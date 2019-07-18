import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from './components/navigation/Navigation';
import Footer from './components/layout/Footer';
import Home from './components/home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Route exact path='/' component={Home} />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
