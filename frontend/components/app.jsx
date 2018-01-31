import React from 'react';
import { Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';

export default () => (
  <div>
    <Route path="/" component={NavBarContainer}/>
    <h1>my react app</h1>
  </div>
);
