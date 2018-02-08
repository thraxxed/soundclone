import React from 'react';
import { Link } from 'react-router-dom';

import FaPlayCircle from 'react-icons/lib/fa/play-circle';
import FaPauseCircle from 'react-icons/lib/fa/pause-circle';

import * as FontAwesome from 'react-icons/lib/fa';

// import FontAwesome from 'react-fontawesome';

const TracksIndexItem = ({ track, user, currentUser, currentTrack, paused,
                           deleteTrack, context, receiveCurrentTrack }) => {

  return (
    <div>
      <div>
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
      </div>
      <li className="track">

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


            {(currentTrack && track.id === currentTrack.id && !paused) ?
              <FaPauseCircle className="fa-play" onClick={() => receiveCurrentTrack(track)}/>
            :
              <FaPlayCircle className="fa-play" onClick={() => receiveCurrentTrack(track)}/>
            }



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
              <div className="lol">
              </div>
            }

          </div>

          <div className="track-tag">
            <p className="tag-p"># {track.genre}</p>
          </div>

        </div>
      </li>
    </div>
  )
};

export default TracksIndexItem;
