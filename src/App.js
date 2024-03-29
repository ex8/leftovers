import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import Navigation from './components/layout/Navigation';
import Routes from './components/routes/Routes';
import theme from './theme';
import CartNotification from './components/cart/CartNotification';
import CartDialog from './components/cart/CartDialog';

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Navigation />
        <Routes />
        <CartNotification />
        <CartDialog />
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

export default App;
