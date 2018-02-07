import { connect } from 'react-redux';
import { login, clearErrorsThunk } from '../../actions/session';
import Login from './login';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
