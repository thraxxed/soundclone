import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserShow from './user_show.jsx';
import { requestAllTracks, deleteTrack } from '../../actions/track.js';
import { receiveCurrentTrack, receiveNextTracks } from '../../actions/player.js';

const mapStateToProps = (state, ownProps) => {
  let users = state.entities.users;
  let user;
  for (let key in users) {
    if (users[key].username === ownProps.match.params.username) user = users[key];
  }
  let tracks = state.entities.tracks;
  let userTracks = {};
  for (let trackKey in tracks) {
    if (tracks[trackKey].uploader_id === user.id) {
      userTracks[trackKey] = tracks[trackKey];
    }
  }

  return {
    user,
    users,
    userTrackz: userTracks,
    userTracks: Object.values(userTracks),
    currentUser: state.session.currentUser,
  }
};

const mapDispatchToProps = (dispatch) => ({
  requestAllTracks: () => dispatch(requestAllTracks()),
  deleteTrack: id => dispatch(deleteTrack(id)),
  receiveCurrentTrack: (track) => dispatch(receiveCurrentTrack(track)),
  receiveNextTracks: (nextTracks) => dispatch(receiveNextTracks(nextTracks))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));
