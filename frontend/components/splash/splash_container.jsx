import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Splash from './splash';

import { requestAllTracks } from '../../actions/track.js';

const mapStateToProps = state => {
  return {
      tracks: state.entities.tracks,
      users: state.entities.users
  };
};

const mapDispatchToProps = dispatch => ({
  requestAllTracks: () => dispatch(requestAllTracks())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Splash));
