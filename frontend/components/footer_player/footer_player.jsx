import React from 'react';
import { Link } from 'react-router-dom';

import { updateUser } from '../../utils/session.js';

import FaFastForward from 'react-icons/lib/fa/fast-forward';
import FaFastBackward from 'react-icons/lib/fa/fast-backward';
import FaPlay from 'react-icons/lib/fa/play';
import FaPause from 'react-icons/lib/fa/pause';


class FooterPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.playNextTrack = this.playNextTrack.bind(this);
    this.pause = this.pause.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  componentWillMount() {
    this.props.requestAllTracks();
  }

  playNextTrack() {

    if (this.props.nextTracksArr && this.props.nextTracksArr.length > 0) {
      this.props.shiftNextTrack();
      this.props.receiveCurrentTrack(this.props.nextTracksArr[0]);
    }
  }

  pause() {
    this.props.pause();
  }

  goBack() {
    if (this.props.lastTrack && this.props.lastTrack.id !== this.props.currentTrack.id) {
      this.props.nextTracksArr.unshift(this.props.currentTrack);
      this.props.receiveCurrentTrack(this.props.lastTrack);
    }
  }

  render() {
    if (!this.props.currentTrack) return (
      <div className="footer-player">
      </div>
    );
    return (
      <div className="footer-player">
        <FaFastBackward className="fa-footer" onClick={() => this.goBack()}/>
        <FaFastForward className="fa-footer" onClick={() => this.playNextTrack()}/>
        {document.getElementById('audio-element') && document.getElementById('audio-element').paused ?
          <FaPlay className="fa-footer-play" onClick={() => document.getElementById('audio-element').play()}/>
        :
          <FaPause className="fa-footer-play" onClick={() => document.getElementById('audio-element').pause()}/>
        }

        <div className="audioplayer-container">

          {this.props.currentTrack ?
            <audio
              id="audio-element"
              className="audioplayer"
              controlsList="nodownload"
              controls
              autoPlay
              volume="0.5"
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
