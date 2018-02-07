import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const main = document.getElementById('main');
  }

  render() {
    return (
      <div  className="hero-img">
        <div className="hero-flex">
          <div className="hero-buttons">
            <Link id="hero-signin-btn" className="btn" to="/login"><span className="button-text">Sign In</span></Link>
            <Link id="hero-signup-btn" className="btn" to="/signup">Create Account</Link>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <h2>Connect on Soundclone</h2>
          <br></br>
          <br></br>
          <br></br>
          <p>
            Discover, stream, and share a constantly expanding mix of music
            <br></br>
            from emerging and major artists around the world.
          </p>
          <br></br>
          <Link id="hero-bottom-signup-btn" className="btn" to="/signup">Sign up for free</Link>
        </div>
      </div>
    );
  }
}

export default Splash;
