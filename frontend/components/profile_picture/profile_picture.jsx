import React from 'react';
import { Link } from 'react-router-dom';

import { updateUser } from '../../utils/session.js';

class ProfilePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: this.props.currentUser.img_url,
      errors: []
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
    formData.append("user[avatar]", this.state.imageFile);
    formData.append("user[id]", this.props.currentUser.id)
    updateUser(formData)
      .then(() => {
        this.props.currentUser.img_url = this.state.imageUrl;
        this.props.history.push('/users/' + this.props.currentUser.username);
      },
      (errors) => {
        this.setState({errors: ["Upload Failed"]})
      });
  }

  renderErrors() {
    if (this.state.errors.length < 1) return;
    return (
      <ul className="form-errors">
        {this.state.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  updateImageFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState( { imageFile: file, imageUrl: fileReader.result } );
    };
    if (file) fileReader.readAsDataURL(file);
  }

  componentDidMount() {
    document.title = "Update Profile Picture";
  }

  componentWillUnmount() {
    document.title = "Soundclone";
  }

  render() {
    return (
      <div className="upload-page">
        <h1>Upload Profile Picture</h1>
        <br></br><br></br>
        <label>Image
          <input type="file" onChange={this.updateImageFile}/>
        </label>
        <br></br>
        {this.state.imageUrl ? <img className="upload-img" src={this.state.imageUrl}/> : null}
        {this.renderErrors()}
        <button className="upload-submit-btn" onClick={this.handleSubmit}>Upload</button>
      </div>
    );
  }
}

export default ProfilePicture;
