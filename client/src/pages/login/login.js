import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  state = {
    userName: "",
    password: ""
  };

  onChangeUserName = () => {
    this.setState({
      userName: event.target.value
    });
  };
  onChangePassword = () => {
    this.setState({
      password: event.target.value
    });
  };
  onChange = event => {
    event.preventDefault();
    if (this.state.userName === "" || this.state.password === "") {
      alert("Please enter a User Name and Password");
    } else {
    }
  };

  render() {
    <div>
      <div className="loginCradentials">
        <form>
          <label>
            <input
              className="userName"
              placeholder="User Name"
              type="text"
              value={this.state.userName}
              onChange={this.onChangeUserName}
            />
          </label>

          <label>
            <input
              className="loginPW"
              placeholder="Password"
              type="text"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </label>

          <button
            className="loginBtn"
            variant="primary"
            type="submit"
            value="Submit"
            onClick={this.handleSubmit}
          >
            Play
          </button>
        </form>
      </div>
    </div>;
  }
}

export default Login;
