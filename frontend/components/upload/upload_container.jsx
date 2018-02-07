import {connect} from 'react-redux';

import Upload from './upload.jsx';

import { createNewTrack, clearErrorsThunk } from '../../actions/track.js';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors.tracks
  }
};

const mapDispatchToProps = (dispatch) => ({
  createNewTrack: (formTrack) => dispatch(createNewTrack(formTrack)),
  clearErrors: () => dispatch(clearErrorsThunk())
});

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
