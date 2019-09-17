import React from 'react';
import { Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Checkout from '../checkout/Checkout';
import Dashboard from '../account/dashboard/Dashboard';
import Dishes from '../account/dishes/Dishes';
import DishDetail from '../search/DishDetail';
import DishList from '../search/DishList';
import Home from '../home/Home';
import Login from '../account/Login';
import OrderDetails from '../account/OrderDetails';
import Orders from '../account/Orders';
import Profile from '../profile/Profile';
import Signup from '../account/Signup';
import AddDish from '../account/dishes/AddDish';
import Gateways from '../account/Gateways';

const Routes = () => {
  return (
    <div>
      {/* Main Routes */}
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={DishList} />
      <Route exact path="/search/:id" component={DishDetail} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/profile/:username" component={Profile} />

      {/* Account Routes */}
      <PrivateRoute exact path="/account" component={Dashboard} />
      <PrivateRoute exact path="/account/dishes" component={Dishes} />
      <PrivateRoute exact path="/account/dishes/add" component={AddDish} />
      <PrivateRoute exact path="/account/orders/:id" component={OrderDetails} />
      <PrivateRoute exact path="/account/orders" component={Orders} />
      <PrivateRoute exact path="/account/payments" component={Gateways} /> 
      <Route exact path="/account/login" component={Login} />
      <Route exact path="/account/signup" component={Signup} />
    </div>
  );
};

export default Routes;
