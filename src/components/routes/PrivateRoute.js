import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, isChef, ...rest }) => (
  <Route { ...rest } component={() => (
    (isAuthenticated && !isChef) ? <Component { ...rest } /> : <Redirect to="/account/login" />
  )} />
);

const mapStateToProps = state => ({
  isAuthenticated: state.userReducer.isAuthenticated,
  isChef: state.userReducer.isChef,
});

export default connect(mapStateToProps)(PrivateRoute);
