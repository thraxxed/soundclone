import { connect } from 'react-redux';

import TrackShow from './track_show.jsx';

import { requestAllTracks, deleteTrack, updateTrack } from '../../actions/track.js';

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
  // updateTrack: track => dispatch(updateTrack(track))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackShow);
