import React from 'react';
import { Link } from 'react-router-dom';

import { postTrack } from '../../utils/track_util.js';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      genre: "",
      audioFile: null,
      audioUrl: null,
      imageFile: null,
      imageUrl: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.updateImageFile = this.updateImageFile.bind(this);
    this.updateAudioFile = this.updateAudioFile.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    let formData = new FormData();
    formData.append("track[title]", this.state.title);
    formData.append("track[genre]", this.state.genre);
    formData.append("track[track]", this.state.audioFile);
    formData.append("track[image]", this.state.imageFile);
    this.props.createNewTrack(formData)
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

  updateAudioFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState( { audioFile: file, audioUrl: fileReader.result } );
    };
    if (file) fileReader.readAsDataURL(file);
  }

  componentDidMount() {
    this.props.clearErrors();
    document.title = "Upload";
    let home = document.getElementsByClassName("nav-upload");
    if (home[0]) {
      home[0].firstChild.classList.add("white-text");
      home[0].classList.add("home-selected");
    }
  }

  componentWillUnmount() {
    document.title = "Soundclone";
    let home = document.getElementsByClassName("nav-upload");
    if (home[0]) {
      home[0].firstChild.classList.remove("white-text");
      home[0].classList.remove("home-selected");
    }
  }

  renderErrors() {
    if (this.props.errors.length < 1) return;
    return (
      <ul className="form-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="upload-page">
        <h1>Upload to SoundCloud</h1>
        <br></br><br></br>
        <label>Audio File
          <input type="file" onChange={this.updateAudioFile}/>
        </label>
        <br></br>
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
        {this.renderErrors()}
        <button className="upload-submit-btn" onClick={this.handleSubmit}>Create Song</button>
      </div>
    );
  }
}

export default Upload;
