import {connect} from 'react-redux';

import ProfilePicture from './profile_picture.jsx';



const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePicture);
