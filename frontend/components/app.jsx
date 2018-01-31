import React from 'react';
import { Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './session/signup_container.jsx';
import LoginContainer from './session/login_container.jsx';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

export default () => (
  <div className="main">
    <Route path="/" component={NavBarContainer}/>
    <AuthRoute path="/signup" component={SignupContainer}/>
    <AuthRoute path="/login" component={LoginContainer}/>
  </div>
);
