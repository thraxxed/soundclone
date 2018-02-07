import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TrackShow from './track_show.jsx';
import { requestAllTracks, deleteTrack, updateTrack } from '../../actions/track.js';
import { requestComments, createComment } from '../../actions/comment.js';
import { receiveCurrentTrack } from '../../actions/player.js';

const mapStateToProps = (state, ownProps) => {
  let track = state.entities.tracks[ownProps.match.params.trackId];
  let user = {};
  if (track) {
    user = state.entities.users[track.uploader_id];
  }
  return {
    track,
    user,
    comments: state.entities.comments,
    tracks: state.entities.tracks,
    users: state.entities.users,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  requestAllTracks: () => dispatch(requestAllTracks()),
  requestComments: () => dispatch(requestComments()),
  deleteTrack: id => dispatch(deleteTrack(id)),
  updateTrack: track => dispatch(updateTrack(track)),
  createComment: formComment => dispatch(createComment(formComment)),
  receiveCurrentTrack: (track) => dispatch(receiveCurrentTrack(track))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TrackShow));
