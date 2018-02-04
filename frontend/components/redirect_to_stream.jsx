import React from 'react';
import { withRouter, Redirect } from 'react-router';

const RedirectToStream = () => {
  return (
    <Redirect to="/stream/"/>
  );
};

export default withRouter(RedirectToStream);
