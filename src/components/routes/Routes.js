import React from 'react';
import { Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Checkout from '../checkout/Checkout';
import Dashboard from '../account/dashboard/Dashboard';
import Dishes from '../account/dishes/Dishes';
import DishDetail from '../search/DishDetail';
import DishList from '../search/DishList';
import Home from '../home/Home';
import Login from '../account/auth/Login';
import Orders from '../account/orders/Orders';
import OrderDetails from '../account/orders/OrderDetails';
import Profile from '../profile/Profile';
import Signup from '../account/auth/Signup';
import AddDish from '../account/dishes/AddDish';
import Gateways from '../account/Gateways';
import ForgotPassword from '../account/auth/ForgotPassword';
import Settings from '../account/Settings';
import ChefDashboard from '../chef-account/ChefDashboard';
import ChefLogin from '../chef-account/auth/ChefLogin';
import ChefSignup from '../chef-account/auth/ChefSignup';
import ChefForgotPassword from '../chef-account/auth/ChefForgotPassword';
import ChefDishList from '../chef-account/ChefDishList';
import ChefOrderList from '../chef-account/ChefOrderList';
import Eaters from '../home/Eaters';
import Chefs from '../home/Chefs';

const Routes = () => {
  return (
    <div>
      {/* Main Routes */}
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={DishList} />
      <Route exact path="/search/:id" component={DishDetail} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/eaters" component={Eaters} />
      <Route exact path="/chefs" component={Chefs} />
      <Route exact path="/profile/:username" component={Profile} />

      {/* Account Routes */}
      <PrivateRoute exact path="/account" component={Dashboard} />
      <PrivateRoute exact path="/account/orders/:id" component={OrderDetails} />
      <PrivateRoute exact path="/account/orders" component={Orders} />
      <PrivateRoute exact path="/account/payment" component={Gateways} /> 
      <PrivateRoute exact path="/account/settings" component={Settings} /> 
      <Route exact path="/account/login" component={Login} />
      <Route exact path="/account/signup" component={Signup} />
      <Route exact path="/account/forgot-password" component={ForgotPassword} />

      {/* Chef Account Routes */}
      <Route exact path="/chef" component={ChefDashboard} />
      <Route exact path="/chef/dishes" component={ChefDishList} />
      <Route exact path="/chef/orders" component={ChefOrderList} />
      <Route exact path="/chef/login" component={ChefLogin} />
      <Route exact path="/chef/signup" component={ChefSignup} />
      <Route exact path="/chef/forgot-password" component={ChefForgotPassword} />
    </div>
  );
};

export default Routes;
