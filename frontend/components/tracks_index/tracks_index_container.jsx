import { connect } from 'react-redux';

import TracksIndex from './tracks_index.jsx';

import { requestAllTracks } from '../../actions/track.js';

const mapStateToProps = state => {
  return {
    tracks: state.entities.tracks,
    users: state.entities.users
  };
};

const mapDispatchToProps = dispatch => ({
  requestAllTracks: () => dispatch(requestAllTracks())
});

export default connect(mapStateToProps, mapDispatchToProps)(TracksIndex);
