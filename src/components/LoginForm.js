import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.state.username !== "" && this.state.password !== ""
      ? this.props.handleLogin(this.state)
      : null;
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          {/* {this.state.username !== "" && this.state.password !== "" ? (
            <button type="submit">Log in</button>
          ) : (
            <button type="submit" disabled>
              Log in
            </button>
          )} */}
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
