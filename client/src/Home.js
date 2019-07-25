import React, { Component } from "react";
import fire from "./config/fire";

class Home extends Component {
  logout() {
    console.log("hi");
    fire.auth().signOut();
  }

  render() {
    return (
      <div className="col-md-6">
        <h1>You Are Now Signed In!</h1>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}
export default Home;
