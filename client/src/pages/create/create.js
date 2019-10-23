import React, { Component } from "react";
import axios from "axios";

class Create extends Component {
  state = {
    userName: "",
    password: "",
    passwordConf: "",
    roomID: ""
  };

  onChangeUserName = event => {
    this.setState({
      userName: event.target.value
    });
  };
  onChangePassword = event => {
    this.setState({
      password: event.target.value
    });
  };
  onChangePasswordConf = event => {
    this.setState({
      passwordConf: event.target.value
    });
  };
  onChangeRoomID = event => {
    this.setState({
      roomID: event.target.value
    });
  };

  onChange = event => {
    console.log("on change been clicked");
    event.preventDefault();
    if (
      this.state.userName === "" ||
      this.state.password === "" ||
      this.state.roomID === ""
    ) {
      alert("Please enter a User Name and Password and Room ID");
    } else {
      if (this.state.password === this.state.passwordConf) {
        //Create character logic here!
      } else {
        alert("Please make sure your passwords match!");
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Create your character!</h1>
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
          <label>
            <input
              className="loginPW"
              placeholder="Password Confirmation"
              type="text"
              value={this.state.passwordConf}
              onChange={this.onChangePasswordConf}
            />
          </label>
          <label>
            <input
              className="roomID"
              placeholder="Room ID"
              type="text"
              value={this.state.roomID}
              onChange={this.onChangeRoomID}
            />
          </label>

          <button
            className="loginBtn"
            variant="primary"
            type="submit"
            value="Submit"
            onClick={this.onChange}
          >
            Play
          </button>
        </form>
      </div>
    );
  }
}

export default Create;
