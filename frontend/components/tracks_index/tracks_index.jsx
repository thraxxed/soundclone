import React from 'react';
import { Route } from 'react-router-dom';


class TracksIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestAllTracks();
  }

  render() {
    const tracks = Object.values(this.props.tracks);
    const users = Object.values(this.props.users)
    console.log(tracks);
    console.log(users);
    if (tracks.length === 0) return ( <h1>Loading...</h1> );
    return (
      <ul className="tracks-list">
        {tracks.map(track => (
          <p>{track.title}</p>
        ))}
      </ul>
    );
  }

}

export default TracksIndex;
