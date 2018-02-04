import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './session/signup_container.jsx';
import LoginContainer from './session/login_container.jsx';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import SplashContainer from './splash/splash_container.jsx';
import UploadContainer from './upload/upload_container.jsx';
import EditContainer from './edit/edit_container.jsx';
import TracksIndexContainer from './tracks_index/tracks_index_container.jsx';
import RedirectToStream from './redirect_to_stream.jsx';


export default () => (
  <div className="main">
    <ProtectedRoute path="/" component={NavBarContainer}/>
    <ProtectedRoute exact path="/stream" component={TracksIndexContainer}/>
    <AuthRoute path="/" component={SplashContainer}/>
    <AuthRoute path="/signup" component={SignupContainer}/>
    <AuthRoute path="/login" component={LoginContainer}/>
    <ProtectedRoute path="/upload" component={UploadContainer}/>
    <ProtectedRoute path="/tracks/:trackId/edit" component={EditContainer}/>
    <ProtectedRoute exact path="/" component={RedirectToStream}/>
  </div>
);
