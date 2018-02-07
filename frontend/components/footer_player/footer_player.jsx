import React from 'react';
import { Link } from 'react-router-dom';

import { updateUser } from '../../utils/session.js';

class FooterPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestAllTracks();
  }

  componentWillReceiveProps(newprops) {
    // if (newprops.currentTrack) console.log(newprops.currentTrack);
    console.log("old");
    console.log(this.props);
    console.log("new");
    console.log(newprops);
  }

  componentDidMount() {

  }

  render() {
    if (!this.props.currentTrack) return (
      <div className="footer-player">
      </div>
    );
    return (
      <div className="footer-player">
        <div className="audioplayer-container">
          {this.props.currentTrack ?
            <audio
              id="audio-element"
              className="audioplayer"
              controlsList="nodownload"
              controls
              autoPlay
              src={this.props.currentTrack.track_url}
            />
            :
            null
          }
        </div>
        <div className="flex-column">
          <div className="current-track-info">
            <img className="footer-img" src={this.props.currentTrack.img_url}></img>
            <div className="current-track-text">
              <span className="footer-username">{this.props.trackUser.username}</span>
              <span className="footer-title">{this.props.currentTrack.title}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterPlayer;
