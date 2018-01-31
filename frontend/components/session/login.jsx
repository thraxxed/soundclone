import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
    console.log();
    $("body").addClass("gray-out")
  }

  componentWillUnmount() {
    $("body").removeClass("gray-out")
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.push('/'));
  }

  renderErrors() {
    if (!this.props.errors) return;
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
      <div className="modal is-open">
        <form className="modal-form">
          <Link id="close-modal-button" to="/">X</Link>
          <img id="logo" height="100" width="200" src="https://res.cloudinary.com/dbk2furpp/image/upload/v1517435130/soundcloud_logo_gbztnk.png"></img>
          <label>
            <input
              placeholder="Your username *"
              className="form-input"
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
            />
          </label>
          <label>
            <input
              placeholder="Your Password *"
              className="form-input"
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
          </label>
          {this.renderErrors()}
          <button className="submit-btn" onClick={this.handleSubmit}>Sign in</button>
        </form>
      </div>
    );
  }
}

export default Login;
