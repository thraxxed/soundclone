import React from 'react';
import { Route, Redirect } from 'react-router-dom';



class TrackShow extends React.Component {
  constructor(props) {
    super(props);
    this.badId = false;
    if (!this.props.track) {
      this.badId = true;
    }
    console.log(this.props.track);
  }

  componentWillMount() {
    this.props.requestAllTracks();
  }

  componentDidMount() {
    if (this.props.track) document.title = this.props.track.title;
  }

  componentWillUnmount() {
    document.title = "Soundclone";
  }

  render() {

    const tracks = Object.values(this.props.tracks);
    const users = this.props.users;
    if (this.badId || !this.props.track) return ( <Redirect to="/stream"/> );
    return (
      <div>
        <div className="trackshow-header">
          <div className="track-content-container">
          </div>
          <div className="track-art-container">
            <img className="track-art" src={this.props.track.img_url}></img>
          </div>
        </div>

        <h1 className="user-tracks-header">Track Show Page</h1>

        <ul className="tracks-list">

        </ul>
      </div>
    );
  }

}

export default TrackShow;
