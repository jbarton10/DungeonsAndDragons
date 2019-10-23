import React, { Component } from "react";
import axios from "axios";

class RoomCreate extends Component {
  state = {
    roomID: ""
  };
  onChangeRoomID = event => {
    this.setState({
      roomID: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>Please enter a room name for your group!</h1>
        <h3>(Only one person needs to do this)</h3>
        <form>
          <label>
            <input
              className="roomID"
              placeholder="Room Name"
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
            onClick={this.onSubmit}
          >
            Play
          </button>
        </form>
      </div>
    );
  }
}

export default RoomCreate;
