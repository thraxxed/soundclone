import { connect } from 'react-redux';

import TracksIndex from './tracks_index.jsx';

import { requestAllTracks, deleteTrack, updateTrack } from '../../actions/track.js';
import { requestComments } from '../../actions/comment.js';

const mapStateToProps = state => {
  return {
    tracks: state.entities.tracks,
    users: state.entities.users,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  requestAllTracks: () => dispatch(requestAllTracks()),
  deleteTrack: id => dispatch(deleteTrack(id)),
  requestComments: () => dispatch(requestComments())
  // updateTrack: track => dispatch(updateTrack(track))
});

export default connect(mapStateToProps, mapDispatchToProps)(TracksIndex);
