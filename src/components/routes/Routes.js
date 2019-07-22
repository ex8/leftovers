import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../home/Home';
import Search from '../search/Search';
import Login from '../account/Login';
import Signup from '../account/Signup';
import Dashboard from '../account/Dashboard';

const Routes = () => {
  return (
    <div>
      {/* Main Routes */}
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={Search} />

      {/* Account Routes */}
      <Route exact path="/account" component={Dashboard} />
      <Route exact path="/account/login" component={Login} />
      <Route exact path="/account/signup" component={Signup} />
    </div>
  );
};

export default Routes;
