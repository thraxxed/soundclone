import React from 'react';
import {connect} from 'react-redux';
import FooterPlayer from './footer_player.jsx';

import { requestAllTracks } from '../../actions/track.js';


const mapStateToProps = (state) => ({
  currentTrack: state.player.currentTrack,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  requestAllTracks: () => dispatch(requestAllTracks())
})

export default connect(mapStateToProps, mapDispatchToProps)(FooterPlayer);
