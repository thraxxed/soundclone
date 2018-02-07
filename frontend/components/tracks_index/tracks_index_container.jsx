import { connect } from 'react-redux';

import TracksIndex from './tracks_index.jsx';

import { requestAllTracks, deleteTrack, updateTrack } from '../../actions/track.js';
import { requestComments } from '../../actions/comment.js';
import { receiveCurrentTrack, receiveNextTracks } from '../../actions/player.js';

const mapStateToProps = state => {
  return {
    tracks: state.entities.tracks,
    users: state.entities.users,
    currentUser: state.session.currentUser,
    currentTrack: state.player.currentTrack,
    paused: state.player.paused
  };
};

const mapDispatchToProps = dispatch => ({
  requestAllTracks: () => dispatch(requestAllTracks()),
  deleteTrack: id => dispatch(deleteTrack(id)),
  requestComments: () => dispatch(requestComments()),
  receiveCurrentTrack: (track) => dispatch(receiveCurrentTrack(track)),
  receiveNextTracks: (nextTracks) => dispatch(receiveNextTracks(nextTracks))
});

export default connect(mapStateToProps, mapDispatchToProps)(TracksIndex);
