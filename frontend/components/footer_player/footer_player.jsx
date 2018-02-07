import React from 'react';
import { Link } from 'react-router-dom';

import { updateUser } from '../../utils/session.js';

class FooterPlayer extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  componentWillMount() {
    this.props.requestAllTracks();
  }

  componentWillReceiveProps(newprops) {
    if (newprops.tracks) console.log(newprops.tracks);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="footer-player">
        <h1>FOOTER PLAYER</h1>
        {this.props.currentTrack ?
        <h1>Song Loaded! {this.props.currentTrack.title}</h1>
          :
        <h1>No song loaded yet!</h1>
        }
      </div>
    );
  }
}

export default FooterPlayer;
