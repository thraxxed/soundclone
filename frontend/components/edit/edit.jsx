import React from 'react';
import { Link } from 'react-router-dom';

import { Route, Redirect } from 'react-router';

import { updateTrack } from '../../utils/track_util.js';

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.track.title,
      genre: this.props.track.genre,
      imageFile: null,
      imageUrl: this.props.track.img_url
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.updateImageFile = this.updateImageFile.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    console.log(this.props.track.id + " hey");
    formData.append("track[id]", this.props.track.id);
    formData.append("track[title]", this.state.title);
    formData.append("track[genre]", this.state.genre);
    if (this.state.imageFile) formData.append("track[image]", this.state.imageFile);
    this.props.updateTrack(formData)
      .then(() => this.props.history.push('/stream'));
  }

  updateImageFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState( { imageFile: file, imageUrl: fileReader.result } );
    };
    if (file) fileReader.readAsDataURL(file);
  }

  componentWillMount() {
    document.title = "Edit Track";
  }

  componentWillUnmount() {
    document.title = "Soundclone";
  }

  render() {
    if (this.props.track.uploader_id !== this.props.currentUser.id) {
      return (
        <Redirect to="/stream"/>
      )
    }
    return (
      <div className="upload-page">
        <h1>Edit Track</h1>
        <br></br><br></br>
        <label>Track Image
          <input type="file" onChange={this.updateImageFile}/>
        </label>
        <br></br>
        {this.state.imageUrl ? <img className="upload-img" src={this.state.imageUrl}/> : null}
        <label className="upload-form-inputs">
          <input
            className="upload-form-input"
            type="text"
            placeholder="Title *"
            value={this.state.title}
            onChange={this.handleInput('title')}
          />
        </label>
        <label className="upload-form-inputs">
          <input
            className="upload-form-input"
            type="text"
            placeholder="Genre *"
            value={this.state.genre}
            onChange={this.handleInput('genre')}
          />
        </label>
        <button className="upload-submit-btn" onClick={this.handleSubmit}>Update Track</button>
      </div>
    );
  }
}

export default Edit;
