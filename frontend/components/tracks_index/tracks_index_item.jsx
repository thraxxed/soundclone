import React from 'react';
import { Link } from 'react-router-dom';

const TracksIndexItem = ({ track, user, currentUser, deleteTrack, context }) => {
  console.log(context);
  return (
    <li className="track">
      { (context === "stream") ?
        <div className="upload-info">
          <Link className="track-profile-link" to={`/users/${user.username}`}>
              <img className="uploader-img" src={user.img_url}></img>
              <span className="when-posted">{user.username}</span>
          </Link>
          <span className="gray-text">posted a track {track.created_at}</span>
        </div>
        :
        null
      }
      <div className="upload-content">

        <Link to={`/tracks/${track.id}/show`}>
          <img className="track-img" src={track.img_url}></img>
        </Link>

        <div className="upload-body">
          <Link to={`/users/${user.username}`}>
            <h3 className="track-username">{user.username}</h3>
          </Link>
          <Link to={`/tracks/${track.id}/show`}>
            <h2 className="track-title">{track.title}</h2>
          </Link>
          <audio className="audioplayer" controlsList="nodownload" controls src={track.track_url}></audio>

          {track.uploader_id === currentUser.id ?
            (
              <div className="current-user-track-buttons">
                <Link to={`/tracks/${track.id}/edit`} className="delete-track">
                  <span>Edit</span>
                </Link>
                <button className="delete-track" onClick={() => deleteTrack(track.id)}>Delete</button>
              </div>
            )
            :
            null
          }

        </div>

        <div className="track-tag">
          <p className="tag-p"># {track.genre}</p>
        </div>

      </div>
    </li>
  )
};

export default TracksIndexItem;
