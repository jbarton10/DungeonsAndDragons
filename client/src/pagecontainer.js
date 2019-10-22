import React, { Component } from "react";
import CreateAccount from "./pages/create/create";
import Login from "./pages/login/login";
import HomePage from "./pages/homepage/homepage";

class PageContainer extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: "Homepage",
      currentUser: "",
      group: []
    };
  }

  renderPage() {
    if (this.currentPage === "Homepage") {
      this.setState({
        currentPage: "Homepage"
      });
    } else if (this.currentPage === "Create") {
      this.setState({
        currentPage: "Create"
      });
    } else if (this.currentPage === "Login") {
      this.setState({
        currentPage: "login"
      });
    }
  }

  render() {
    retrurn(<div>{this.renderPage}</div>);
  }
}

export default PageContainer;
