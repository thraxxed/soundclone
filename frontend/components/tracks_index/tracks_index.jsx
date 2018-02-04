import React from 'react';
import { Route } from 'react-router-dom';

import TracksIndexItem from './tracks_index_item.jsx';

class TracksIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestAllTracks();
  }

  componentDidMount() {
    document.title = "Your Stream";
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
        <h1 className="stream-header">Stream</h1>
        <ul className="tracks-list">
          {tracks.map(track => (
            <TracksIndexItem key={track.id} deleteTrack={this.props.deleteTrack} currentUser={this.props.currentUser} track={track} user={users[track.uploader_id]}/>
          ))}
        </ul>
      </div>
    );
  }

}

export default TracksIndex;