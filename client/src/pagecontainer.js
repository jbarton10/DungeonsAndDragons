import React, { Component } from "react";
//Current Pages for react app
import Create from "./pages/create/create";
import Login from "./pages/login/login";
import Homepage from "./pages/homepage/homepage";

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

  renderPage() {
    if (this.state.currentPage === "Homepage") {
      return <Homepage toLogin={this.toLogin} />;
    } else if (this.state.currentPage === "Create") {
      return <Create />;
    } else if (this.state.currentPage === "Login") {
      return <Login />;
    }
  }

  render() {
    console.log(this.state.currentPage);
    return <div>{this.renderPage()}</div>;
  }
}

export default PageContainer;
