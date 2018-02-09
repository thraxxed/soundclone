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
    // if (newprops.nextTracksArr) console.log(newprops.nextTracksArr);
  }

  componentDidMount() {
    document.body.onkeyup = function(e) {
      $(document).on("keydown", (event) => {
        if (event.which == 32) {
          let audioEl = document.getElementById('audio-element');
          if (audioEl) {
            if (audioEl.paused) {
              console.log("play audio");
              audioEl.play();
            } else {
              console.log("pause audio");
              audioEl.pause();
            }
          }
        }
      })
    }
  }

  playNextTrack() {

    this.props.shiftNextTrack();
    // if (Object.keys(this.props.nextTracks).length > 0) {
    //   this.props.receiveCurrentTrack(Object.values(this.props.nextTracks)[0]);
    // }
    // console.log(this.props.nextTracksArr);
    if (this.props.nextTracksArr && this.props.nextTracksArr.length > 0) {
      this.props.receiveCurrentTrack(this.props.nextTracksArr[0]);
    }
  }

  pause() {
    // console.log("pausing");
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
            <Link to={`/tracks/${this.props.currentTrack.id}/show`}>
              <img className="footer-img" src={this.props.currentTrack.img_url}></img>
            </Link>
            <div className="current-track-text">
              <Link className="footer-username" to={`/users/${this.props.trackUser.username}`}>
                <span>{this.props.trackUser.username}</span>
              </Link>
              <Link className="footer-title" to={`/tracks/${this.props.currentTrack.id}/show`}>
                <span>{this.props.currentTrack.title}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterPlayer;
