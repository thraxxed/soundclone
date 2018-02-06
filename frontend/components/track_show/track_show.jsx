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
    if (this.props.track) {
      this.state = {
        body: "",
        track_id: this.props.track.id
      };
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    if (this.props.track) {
      // console.log("hey");
      // this.props.requestComments();
      // console.log(this.props);
    }
    this.props.requestAllTracks();
  }

  componentDidMount() {
    if (this.props.track) document.title = this.props.track.title;
  }

  componentWillUnmount() {
    document.title = "Soundclone";
  }

  componentWillReceiveProps(newProps) {
    // if (this.)
    // console.log(newProps);
  }

  handleInput() {
    return (e) => {
      this.setState({ body: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.body) {
      this.props.createComment(this.state);
      this.setState({ body: "" });
      // console.log(this.state);
    }
  }

  render() {

    const tracks = Object.values(this.props.tracks);
    const users = this.props.users;
    if (this.badId || !this.props.track || !this.props.user) return ( <Redirect to="/stream"/> );

    const comments = this.props.comments;
    const commentKeys = Object.keys(comments);
    console.log(comments);
    console.log(commentKeys);
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
          </div>



          <div className="track-art-container">
            <img className="track-art" src={this.props.track.img_url}></img>
          </div>


        </div>

        {/* COMMENT FORM */}
        <div className="comment-form-container">
          <img className="comment-form-profile-pic" src={this.props.currentUser.img_url}></img>
          <form onSubmit={this.handleSubmit} className="comment-form">

              <div className="comment-input-container">
                <input
                  className="comment-input"
                  type="text"
                  placeholder="Write a comment"
                  value={this.state.body}
                  onChange={this.handleInput()}
                />
              </div>

          </form>
        </div>

        <div className="comments-container">
          {commentKeys.map((key) => (
            (comments[key].track_id === this.props.track.id) ?
              <div className="comment">
                <span>{comments[key].body}</span>
              </div>
            :
              null
          ))}
        </div>

        <h1 className="user-tracks-header">comments go here</h1>

      </div>
    );
  }

}

export default TrackShow;
