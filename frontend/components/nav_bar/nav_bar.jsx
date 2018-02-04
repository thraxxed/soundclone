import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
const display = currentUser ? (
    <div className="nav-buttons">
      <div className="nav-upload">
        <Link className="upload-btn" to="/upload">Upload</Link>
      </div>
      <Link className="profile-link" to={`/users/${currentUser.username}`}>
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
      <Link className="stream-link" to="/stream">
        <img className="nav-logo" src="https://res.cloudinary.com/dbk2furpp/image/upload/v1517435130/soundcloud_logo_gbztnk.png"></img>
        <div className="nav-home"><span>Home</span></div>
      </Link>
      <div className="nav-buttons">
        {display}
      </div>
    </header>
  )
}
