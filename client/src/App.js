import React, { Component } from "../node_modules/react";
import "./App.css";
import fire from "./config/fire";
import Login from "./Login";
import Home from "./Home";
import Geocode from "./Geocode";
import { geolocated } from "react-geolocated";
require("firebase/auth");

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    fire.auth().onAuthStateChanged(user => {
      //console.log(user);
      if (user) {
        this.setState({ user });
        //localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        // localStorage.removeItem("user");
      }
    });
  }

  authListener() {}

  render() {
    console.log(this.state.user);
    return (
      <div className="App">
        <div>Hellow World!</div>
        {this.state.user ? <Home /> : <Login />}
        <Geocode />
      </div>
    );
  }
}
