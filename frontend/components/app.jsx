import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './session/signup_container.jsx';
import LoginContainer from './session/login_container.jsx';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import SplashContainer from './splash_container.jsx';

export default () => (
  <div className="main">
    <Switch>
      {window.currentUser ? <Route path="/" component={NavBarContainer}/> : <AuthRoute path="/" component={SplashContainer}/>}
    </Switch>
    <AuthRoute path="/signup" component={SignupContainer}/>
    <AuthRoute path="/login" component={LoginContainer}/>
  </div>
);
