import React, { Component } from "react";
import "./App.css";
import fire from "firebase/firebase-app";

class App extends Component {
  authListender() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }

  render() {
    return <div>Hellow World!</div>;
  }
}
export default App;
