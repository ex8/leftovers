import React from 'react';
import { Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Home from '../home/Home';
import Search from '../search/Search';
import Login from '../account/Login';
import Signup from '../account/Signup';
import Dashboard from '../account/Dashboard';
import Dishes from '../account/Dishes';

const Routes = () => {
  return (
    <div>
      {/* Main Routes */}
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={Search} />

      {/* Account Routes */}
      <PrivateRoute exact path="/account" component={Dashboard} />
      <PrivateRoute exact path="/account/dishes" component={Dishes} />
      <Route exact path="/account/login" component={Login} />
      <Route exact path="/account/signup" component={Signup} />
    </div>
  );
};

export default Routes;
