import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TrackShow from './track_show.jsx';
import { requestAllTracks, deleteTrack, updateTrack } from '../../actions/track.js';

const mapStateToProps = (state, ownProps) => {
  let track = state.entities.tracks[ownProps.match.params.trackId];
  console.log(track);
  // let user = state.entities.users[track.uploader_id];
  // console.log(user);
  return {
    track,
    tracks: state.entities.tracks,
    users: state.entities.users,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  requestAllTracks: () => dispatch(requestAllTracks()),
  deleteTrack: id => dispatch(deleteTrack(id)),
  updateTrack: track => dispatch(updateTrack(track))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TrackShow));
