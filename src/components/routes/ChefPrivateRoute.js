import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const ChefPrivateRoute = ({ component: Component, isAuthenticated, isChef, ...rest }) => (
  <Route { ...rest } component={() => (
    (isChef && isAuthenticated) ? <Component { ...rest } /> : <Redirect to="/chef/login" />
  )} />
);

const mapStateToProps = state => ({
  isAuthenticated: state.userReducer.isAuthenticated,
  isChef: state.userReducer.isChef,
});

export default connect(mapStateToProps)(ChefPrivateRoute);
