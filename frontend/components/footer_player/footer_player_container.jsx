import React from 'react';
import {connect} from 'react-redux';
import FooterPlayer from './footer_player.jsx';

import { requestAllTracks } from '../../actions/track.js';


const mapStateToProps = (state) => {
  let trackUser;
  if (state.player.currentTrack) trackUser = state.entities.users[state.player.currentTrack.uploader_id];
  return {
    currentTrack: state.player.currentTrack,
    currentUser: state.session.currentUser,
    trackUser: trackUser
  }
};

const mapDispatchToProps = (dispatch) => ({
  requestAllTracks: () => dispatch(requestAllTracks())
})

export default connect(mapStateToProps, mapDispatchToProps)(FooterPlayer);
