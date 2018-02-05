import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import Edit from './edit.jsx';
import { updateTrack } from '../../actions/track.js';

const mapStateToProps = (state, ownProps) => {
  let track = state.entities.tracks[ownProps.match.params.trackId];
  return {
    track,
    currentUser: state.session.currentUser
  }
};

const mapDispatchToProps = (dispatch) => ({
  updateTrack: (formTrack) => dispatch(updateTrack(formTrack))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit));
