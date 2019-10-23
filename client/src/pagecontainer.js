import React, { Component } from "react";
//Current Pages for react app
import Create from "./pages/create/create";
import Login from "./pages/login/login";
import Homepage from "./pages/homepage/homepage";
import RoomCreate from "./pages/roomCreate/roomCreate";

class PageContainer extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: "Homepage",
      currentUser: "",
      group: []
    };
  }
  //Functions that handle changing the page through the state
  toHomePage = () => {
    this.setState({
      currentPage: "Homepage"
    });
  };
  toCreate = () => {
    this.setState({
      currentPage: "Create"
    });
  };
  toLogin = () => {
    this.setState({
      currentPage: "Login"
    });
  };
  toRoomCreate = () => {
    this.setState({
      currentPage: "RoomCreate"
    });
  };

  renderPage() {
    if (this.state.currentPage === "Homepage") {
      return (
        <Homepage
          toCreate={this.toCreate}
          toRoomCreate={this.toRoomCreate}
          toLogin={this.toLogin}
        />
      );
    } else if (this.state.currentPage === "Create") {
      return <Create />;
    } else if (this.state.currentPage === "Login") {
      return <Login />;
    } else if (this.state.currentPage === "RoomCreate") {
      return <RoomCreate toCreate={this.toCreate} />;
    }
  }

  render() {
    console.log(this.state.currentPage);
    return <div>{this.renderPage()}</div>;
  }
}

export default PageContainer;
