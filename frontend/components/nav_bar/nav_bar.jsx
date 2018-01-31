import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
const display = currentUser ? (
    <div className="nav-buttons">
      <Link id="signout-btn" className="btn" to="/">
        <img id="nav-prof-img" height="25" width="25" src="https://res.cloudinary.com/dbk2furpp/image/upload/v1517363601/default_profile_pic_heczvd.jpg"></img>
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
      <Link className="logo" to="/" className="logo">
        <img id="logo" height="46" width="70" src="https://res.cloudinary.com/dbk2furpp/image/upload/v1517376539/soundcloud_favicon_rzwavo.png"></img>
      </Link>
      <div className="nav-buttons">
        {display}
      </div>
    </header>
  )
}
