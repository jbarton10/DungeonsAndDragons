import React, { Component } from "react";
import axios from "axios";

class Create extends Component {
  state = {
    userName: "",
    password: "",
    roomID: ""
  };

  render() {
    return (
      <div>
        <h1>Create your character!</h1>
      </div>
    );
  }
}

export default Create;
