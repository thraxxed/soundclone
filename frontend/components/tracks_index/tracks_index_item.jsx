import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

const TracksIndexItem = ({ track, user }) => {
  if (track.id === 23) {
    console.log(track);
    console.log(user);
  }

  return (
    <li className="track">
      <p>{user.username} posted a track {track.created_at}</p>
      <div>
        <img className="track-img" src={track.img_url}></img>
        <audio controls src={track.track_url}></audio>
        <h2>{track.title}</h2>
      </div>
      <p>#{track.genre}</p>
    </li>
  )
};

export default TracksIndexItem;
