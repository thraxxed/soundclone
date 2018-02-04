import React from 'react';
import { Link } from 'react-router-dom';

const UserShow = ({ user, currentUser }) => {
  console.log("made it this far");
  console.log(user);
  return (
    <div>
      <h1>{user.username}</h1>
    </div>
  )
};

export default UserShow;
