import React from 'react';
import {connect} from 'react-redux';
import FooterPlayer from './footer_player.jsx';

import { requestAllTracks } from '../../actions/track.js';
import { receiveCurrentTrack, shiftNextTrack } from '../../actions/player.js'


const mapStateToProps = (state) => {
  let trackUser;
  if (state.player.currentTrack) trackUser = state.entities.users[state.player.currentTrack.uploader_id];
  return {
    currentTrack: state.player.currentTrack,
    currentUser: state.session.currentUser,
    nextTracks: state.player.nextTracks,
    trackUser: trackUser
  }
};

const mapDispatchToProps = (dispatch) => ({
  requestAllTracks: () => dispatch(requestAllTracks()),
  receiveCurrentTrack: (track) => dispatch(receiveCurrentTrack(track)),
  shiftNextTrack: () => dispatch(shiftNextTrack())
})

export default connect(mapStateToProps, mapDispatchToProps)(FooterPlayer);
