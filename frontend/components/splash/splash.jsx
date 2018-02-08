import React from 'react';
import { Link } from 'react-router-dom';



class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestAllTracks();
  }

  componentDidMount() {
    const main = document.getElementById('main');
  }

  render() {
    if (Object.keys(this.props.tracks).length < 0) {
      return null;
    }
    // console.log(this.props.tracks);
    const tracks = Object.values(this.props.tracks).slice(0, 6);
    const users = this.props.users;
    console.log(tracks);
    return (
      <div className="splash-flex">
        <div  className="hero-img">
          <div className="hero-flex">
            <div className="hero-buttons">
              <Link id="hero-signin-btn" className="btn" to="/login"><span className="button-text">Sign In</span></Link>
              <Link id="hero-signup-btn" className="btn" to="/signup">Create Account</Link>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <h2>Connect on SoundClone</h2>
            <br></br>
            <p>
              Discover, stream, and share a constantly expanding mix of music
              <br></br>
              from emerging and major artists around the world.
            </p>
            <br></br>
            <br></br>
            <Link id="hero-bottom-signup-btn" className="btn" to="/signup">Sign up for free</Link>
          </div>
        </div>
        <h1 className="splash-header">Hear what’s trending for free in the SoundClone community</h1>
        <ul className="splash-tracks-list">
          {tracks.map(track => (
            <li className="splash-track" key={track.id}>
              <Link to="/login">
                <img className="splash-track-img" src={track.img_url}/>
              </Link>
              <div >
                <Link to="/login" className="splash-track-info">
                  <span className="splash-track-title">{track.title}</span>

                  <span className="splash-track-username">
                    {this.props.users[track.uploader_id].username}
                  </span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Splash;
