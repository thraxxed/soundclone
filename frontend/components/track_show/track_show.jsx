import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';


class TrackShow extends React.Component {
  constructor(props) {
    super(props);
    this.badId = false;
    if (!this.props.track) {
      this.badId = true;
    }
    console.log(this.props.track);
  }

  componentWillMount() {
    this.props.requestAllTracks();
  }

  componentDidMount() {
    if (this.props.track) document.title = this.props.track.title;
  }

  componentWillUnmount() {
    document.title = "Soundclone";
  }

  render() {

    const tracks = Object.values(this.props.tracks);
    const users = this.props.users;
    if (this.badId || !this.props.track || !this.props.user) return ( <Redirect to="/stream"/> );
    return (
      <div>
        <div className="trackshow-header">

          <div className="track-content-container">

            <div className="track-show-meta">

              <div className="artist-title">
                <Link to={`/users/${this.props.user.username}`} className="artist-flex">
                  <span className="artist-span">{this.props.user.username}</span>
                </Link>
                <div className="title-flex">
                  <span className="title-span">{this.props.track.title}</span>
                </div>
              </div>

              <div className="meta-info">
                <div className="track-show-created-at">
                  <span>{this.props.track.created_at}</span>
                </div>
                <div className="track-show-genre">
                  <span># {this.props.track.genre}</span>
                </div>
              </div>

            </div>

            <div className="trackshow-audioplayer-container">
              <audio className="trackshow-audioplayer" controlsList="nodownload" controls src={this.props.track.track_url}></audio>
            </div>

            {(this.props.user.id === this.props.currentUser.id) ?
                <div className="current-user-track-buttons">
                  <Link to={`/tracks/${this.props.track.id}/edit`} className="delete-track">
                    <span>Edit</span>
                  </Link>
                  <button className="delete-track" onClick={() => deleteTrack(this.props.track.id)}>Delete</button>
                </div>
            :
              null
            }

          </div>



          <div className="track-art-container">
            <img className="track-art" src={this.props.track.img_url}></img>
          </div>


        </div>

        <h1 className="user-tracks-header">Write a comment goes here</h1>
        <h1 className="user-tracks-header">comments go here</h1>
        <ul className="tracks-list">

        </ul>
      </div>
    );
  }

}

export default TrackShow;
