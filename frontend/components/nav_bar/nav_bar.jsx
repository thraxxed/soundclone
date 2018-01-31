import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
const display = currentUser ? (
    <div>
      <h3>Welcome {currentUser.username}!</h3>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div className="logged-in-buttons">
      <Link id="signin-btn" className="btn" to="/login">Sign In</Link>
      <Link id="signup-btn" className="btn" to="/signup">Create Account</Link>
    </div>
  );
  return (
    <header className="nav-bar">
      <h1 className="logo">SOUNDCLONE</h1>
      <div className="nav-buttons">
        {display}
      </div>
    </header>
  )
}
