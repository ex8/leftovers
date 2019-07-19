import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Home from './components/home/Home';

import theme from './theme';
import { CssBaseline } from '@material-ui/core';

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Footer />
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

export default App;
