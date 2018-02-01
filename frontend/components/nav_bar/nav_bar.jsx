import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
const display = currentUser ? (
    <div className="nav-buttons">
      <Link className="upload-btn" to="/upload">Upload</Link>
      <Link className="profile-link" to="/">
        <img className="nav-prof-img" src={currentUser.img_url}></img>
        <span>{currentUser.username}</span>
      </Link>
      <Link id="signout-btn" className="btn" to="/" onClick={logout}>Sign out</Link>
    </div>
  ) : (
    <div className="logged-out-buttons">
      <Link id="signin-btn" className="btn" to="/login"><span className="button-text">Sign In</span></Link>
      <Link id="signup-btn" className="btn" to="/signup">Create Account</Link>
    </div>
  );
  return (
    <header className="nav-bar">
      <Link to="/">
        <img className="nav-logo" src="https://res.cloudinary.com/dbk2furpp/image/upload/v1517458622/nav-logo_xni5nn.png"></img>
      </Link>
      <div className="nav-buttons">
        {display}
      </div>
    </header>
  )
}
