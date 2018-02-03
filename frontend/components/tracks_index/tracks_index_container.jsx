import { connect } from 'react-redux';

import TracksIndex from './tracks_index.jsx';

import { requestAllTracks, deleteTrack } from '../../actions/track.js';

const mapStateToProps = state => {
  return {
    tracks: state.entities.tracks,
    users: state.entities.users,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  requestAllTracks: () => dispatch(requestAllTracks()),
  deleteTrack: id => dispatch(deleteTrack(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TracksIndex);
