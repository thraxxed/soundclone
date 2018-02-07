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
    if (newprops.currentTrack) console.log(newprops.currentTrack);
  }

  componentDidMount() {

  }

  render() {
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
      </div>
    );
  }
}

export default FooterPlayer;
