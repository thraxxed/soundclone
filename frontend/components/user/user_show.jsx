import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import TracksIndexItem from '../tracks_index/tracks_index_item.jsx';

class UserShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.user) document.title = this.props.user.username;
  }

  componentWillUnmount() {
    document.title = 'Soundclone';
  }

  componentWillReceiveProps(newProps) {
    // console.log("new props");
    // console.log(newProps);
    // if (Object.keys(newProps.userTrackz).length > 0) this.props.receiveNextTracks(newProps.userTrackz);
  }

  render() {
    if (!this.props.user) return (<p>Loading...</p>);
    if (!this.props.user) return (<Redirect to="/"/>)
    return (
      <div>
        <div className="profile-header">
          <div className="prof-pic-flex">
            {(this.props.user.id === this.props.currentUser.id) ?
              <Link className="prof-pic-container" to="/profilepicture">
                <img className="header-profile-img" src={this.props.user.img_url}></img>
                <span className="update-profile-img">Update image</span>
              </Link>
              :
              <div className="prof-pic-container">
                <img className="header-profile-img" src={this.props.user.img_url}></img>
              </div>
            }
          </div>
          <div className="header-username-flex">
            <p className="header-username">{this.props.user.username}</p>
          </div>
        </div>
        <h1 className="user-tracks-header">Tracks</h1>
          <ul className="tracks-list">
            {this.props.userTracks.map(track => (
              <TracksIndexItem
                key={track.id}
                context="userShow"
                deleteTrack={this.props.deleteTrack}
                currentUser={this.props.currentUser}
                track={track}
                user={this.props.users[track.uploader_id]}
                receiveCurrentTrack={this.props.receiveCurrentTrack}
                />
            ))}
          </ul>
      </div>
    )
  }
}

export default UserShow;
