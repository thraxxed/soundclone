import React from 'react';
import { Route } from 'react-router-dom';

import TracksIndexItem from './tracks_index_item.jsx';

class TracksIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestAllTracks();
    this.props.requestComments();
  }

  componentDidMount() {
    document.title = "Your Stream";
    let home = document.getElementsByClassName("nav-home");
    if (home[0]) {
      home[0].firstChild.classList.add("white-text");
      home[0].classList.add("home-selected");
    }
  }

  componentWillUnmount() {
    document.title = "Soundclone";
    let home = document.getElementsByClassName("nav-home");
    if (home[0]) {
      home[0].firstChild.classList.remove("white-text");
      home[0].classList.remove("home-selected");
    }
  }

  componentWillReceiveProps(newProps) {
    let newTracks = {};
    if (Object.keys(newProps.tracks).length > 0 && newProps.currentTrack) {
      let newTrackValues = Object.values(newProps.tracks);
      for (var i = 0; i < newTrackValues.length; i++) {
        if (newTrackValues[i].id > newProps.currentTrack.id) {
          newTracks[newTrackValues[i].id] = newTrackValues[i];
        }
      }
    }
    if (Object.keys(newProps.tracks).length > 0 && !this.props.currentTrack) this.props.receiveNextTracks(newTracks);
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
            <TracksIndexItem
              key={track.id}
              context="stream"
              deleteTrack={this.props.deleteTrack}
              currentUser={this.props.currentUser}
              track={track}
              user={users[track.uploader_id]}
              currentTrack={this.props.currentTrack}
              receiveCurrentTrack={this.props.receiveCurrentTrack}
              paused={this.props.paused}
            />
          ))}
        </ul>
        <br></br>
        <div className=""></div>
      </div>
    );
  }

}

export default TracksIndex;
