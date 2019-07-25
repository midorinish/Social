import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import fire from "./config/fire";
import Login from "./Login";
import Home from "./Home";
import Main from "./Main/Main";
import SearchPage from "./components/SearchPage";
import Event from "./components/events";
import "../src/Login.css";

import Geocode from "./Geocode";
import { geolocated } from "react-geolocated";

require("firebase/auth");

export default class App extends Component {
  render() {
    // console.log(this.state.user);
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route exact path="/searchpage" component={SearchPage} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/main" component={Main} />
              <Route exact path="/events" component={Event} />
            </Switch>
          </div>
        </Router>

        {/*<Geocode />*/}
      </div>
    );
  }
}
