import {connect} from 'react-redux';

import ProfilePicture from './profile_picture.jsx';

// import { createNewTrack } from '../../actions/track.js';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  // createNewTrack: (formTrack) => dispatch(createNewTrack(formTrack))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePicture);
