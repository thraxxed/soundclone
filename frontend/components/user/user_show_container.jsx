import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserShow from './user_show.jsx';

const mapStateToProps = (state, ownProps) => {
  let users = state.entities.users;
  let user;
  for (let key in users) {
    if (users[key].username === ownProps.match.params.username) user = users[key];
  }
  return {
    user,
    currentUser: state.session.currentUser
  }
};

const mapDispatchToProps = (dispatch) => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));
