import React from 'react';
import {connect} from 'react-redux';
import Upload from './upload.jsx';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  // logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
