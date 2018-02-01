import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
const display = currentUser ? (
    <div className="nav-buttons">
      <Link className="profile-link" to="/">
        <img className="nav-prof-img" src={currentUser.img_url}></img>
        <span>{currentUser.username}</span>
      </Link>
      <Link id="signout-btn" className="btn" to="/" onClick={logout}>Sign out</Link>
    </div>
  ) : (
    <div className="logged-out-buttons">
      <Link id="signin-btn" className="btn" to="/login">Sign In</Link>
      <Link id="signup-btn" className="btn" to="/signup">Create Account</Link>
    </div>
  );
  return (
    <header className="nav-bar">
      <Link to="/">
        <img className="nav-logo" src="https://res.cloudinary.com/dbk2furpp/image/upload/c_scale,h_256/v1517444486/soundcloud_favicon_rzwavo.png"></img>
      </Link>
      <div className="nav-buttons">
        {display}
      </div>
    </header>
  )
}
