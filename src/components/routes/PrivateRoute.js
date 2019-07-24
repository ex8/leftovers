import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route { ...rest } component={() => (
    isAuthenticated ? <Component { ...rest } /> : <Redirect to="/account/login" />
  )} />
);

const mapStateToProps = state => ({
  isAuthenticated: state.loginReducer.isAuthenticated,
});

export default connect(mapStateToProps)(PrivateRoute);
