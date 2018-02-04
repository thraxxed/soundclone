import React from 'react';
import { Link } from 'react-router-dom';

import { updateUser } from '../../utils/session.js';

class ProfilePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: this.props.currentUser.img_url
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
    console.log(formData);
    updateUser(formData)
      .then(() => {
        this.props.currentUser.img_url = this.state.imageUrl;
        this.props.history.push('/stream');
      })
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
        <button className="upload-submit-btn" onClick={this.handleSubmit}>Upload</button>
      </div>
    );
  }
}

export default ProfilePicture;
