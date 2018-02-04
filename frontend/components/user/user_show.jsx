import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router';

const UserShow = ({ user, currentUser }) => {
  if (!user) return (<p>Loading...</p>);
  console.log(user);
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
    </div>
  )
};

export default UserShow;
