import React from 'react';
import { Route } from 'react-router-dom';

// import TracksIndexItem from './tracks_index_item.jsx';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestAllTracks();
  }

  componentDidMount() {
    document.title = "Track Show Page";
  }

  componentWillUnmount() {
    document.title = "Soundclone";
  }

  render() {

    const tracks = Object.values(this.props.tracks);
    const users = this.props.users;
    if (tracks.length === 0) return ( <h1>Loading...</h1> );
    return (
      <div>
        <div className="profile-header">

        </div>

        <h1 className="user-tracks-header">Track Show Page</h1>

        <ul className="tracks-list">
          
        </ul>
      </div>
    );
  }

}

export default TrackShow;
