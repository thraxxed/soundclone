import React from 'react';
import { Link } from 'react-router-dom';

import { updateUser } from '../../utils/session.js';

class FooterPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.playNextTrack = this.playNextTrack.bind(this);
    this.pause = this.pause.bind(this);
  }

  componentWillMount() {
    this.props.requestAllTracks();
  }

  componentWillReceiveProps(newprops) {
    // if (newprops.currentTrack) console.log(newprops.currentTrack);
    // console.log("old");
    // console.log(this.props);
    // console.log("new");
    // console.log(newprops);
  }

  componentDidMount() {

  }

  playNextTrack() {
    // console.log("play the next track");
    this.props.shiftNextTrack();
    if (Object.keys(this.props.nextTracks).length > 0) {
      this.props.receiveCurrentTrack(Object.values(this.props.nextTracks)[0]);
    }
  }

  pause() {
    // console.log("paused the song");
    this.props.pause();
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
              onEnded={() => this.playNextTrack()}
              onPause={() => this.pause()}
              onPlay={() => this.pause()}
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
