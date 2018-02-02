import React from 'react';
import { Link } from 'react-router-dom';

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
    console.log("dispatch an action which creates this song:");
    console.log(this.state);
    // this.props.login(this.state)
      // .then(() => this.props.history.push('/'));
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

  render() {
    return (
      <div className="upload-page">
        <h1>Upload to SoundCloud</h1>
        <label>Audio File
          <input type="file" onChange={this.updateAudioFile}/>
        </label>
        <label>Track Image
          <input type="file" onChange={this.updateImageFile}/>
        </label>
        {this.state.imageUrl ? <img className="upload-img" src={this.state.imageUrl}/> : null}
        <label>Title
          <input
            className="form-input"
            type="text"
            value={this.state.title}
            onChange={this.handleInput('title')}
          />
        </label>
        <label>Genre
          <input
            className="form-input"
            type="text"
            value={this.state.genre}
            onChange={this.handleInput('genre')}
          />
        </label>
        <button className="upload-submit-btn" onClick={this.handleSubmit}>Create Song</button>
      </div>
    );
  }
}

export default Upload;
