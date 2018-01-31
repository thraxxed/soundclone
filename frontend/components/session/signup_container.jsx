import { connect } from 'react-redux';
import { createNewUser, clearErrorsThunk } from '../../actions/session';
import Signup from './signup';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  }
};

const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
  clearErrors: () => dispatch(clearErrorsThunk())

});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
