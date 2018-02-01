import { connect } from 'react-redux';
import { login, clearErrorsThunk } from '../../actions/session';
import Login from './login';

const mapStateToProps = (state) => {
  console.log(state.errors);
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  }
};

const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(login(formUser)),
  demoLogin: demoUser => dispatch(login(demoUser)),
  clearErrors: () => dispatch(clearErrorsThunk())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
