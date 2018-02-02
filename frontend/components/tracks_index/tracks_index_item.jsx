import React from 'react';
import { Link } from 'react-router-dom';

const TracksIndexItem = ({ track, user }) => {
  console.log(track);
  console.log(user);
  return (
    <li className="track">
      <p>{user.username} posted a track {track.created_at}</p>
      <div>
        <img className="track-img" src={track.img_url}></img>
        <h2>{track.title}</h2>
      </div>
      <p>#{track.genre}</p>
    </li>
  )
};

export default TracksIndexItem;
