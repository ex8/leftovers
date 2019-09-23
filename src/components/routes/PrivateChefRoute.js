import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import NotAChefUser from '../layout/NotAChefUser';

const PrivateChefRoute = ({ component: Component, isAuthenticated, user, ...rest }) => {
  return <Route {...rest} component={() => {
    if (isAuthenticated) {
      if (user.isChef) {
        return <Component {...rest} />
      }
      else {
        return <NotAChefUser />
      }
    }
    else {
      return <Redirect to="/account/login" />
    }
  }} />
}

const mapStateToProps = state => ({
  isAuthenticated: state.userReducer.isAuthenticated,
  user: state.userReducer.user,
});

export default connect(mapStateToProps)(PrivateChefRoute);
