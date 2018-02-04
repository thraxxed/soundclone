import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router';

const UserShow = ({ user, currentUser }) => {
  console.log("made it this far");
  console.log(user);
  if (!user) return (<Redirect to="/"/>)
  return (
    <div>
      <div className="profile-header">
        <div className="prof-pic-flex">
          <Link to="/profilepicture">
            <img className="header-profile-img" src={user.img_url}></img>
          </Link>
        </div>
        <div className="header-username-flex">
          <p className="header-username">{user.username}</p>
        </div>
      </div>
    </div>
  )
};

export default UserShow;
