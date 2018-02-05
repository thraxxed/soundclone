import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import TracksIndexItem from '../tracks_index/tracks_index_item.jsx';

const UserShow = ({ user, currentUser, userTracks, users, deleteTrack }) => {
  if (!user) return (<p>Loading...</p>);
  console.log(userTracks);
  if (!user) return (<Redirect to="/"/>)
  return (
    <div>
      <div className="profile-header">
        <div className="prof-pic-flex">
          {(user.id === currentUser.id) ?
            <Link className="prof-pic-container" to="/profilepicture">
              <img className="header-profile-img" src={user.img_url}></img>
              <span className="update-profile-img">Update image</span>
            </Link>
            :
            <div className="prof-pic-container">
              <img className="header-profile-img" src={user.img_url}></img>
            </div>
          }
        </div>
        <div className="header-username-flex">
          <p className="header-username">{user.username}</p>
        </div>
      </div>
      <h1 className="user-tracks-header">Tracks</h1>
        <ul className="tracks-list">
          {userTracks.map(track => (
            <TracksIndexItem key={track.id} context="userShow" deleteTrack={deleteTrack} currentUser={currentUser} track={track} user={users[track.uploader_id]}/>
          ))}
        </ul>
    </div>
  )
};

export default UserShow;
