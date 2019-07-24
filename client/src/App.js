import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import fire from "./config/fire";
import Login from "./Login";
import Home from "./Home";
import Main from './Main/Main';
import SearchPage from "./components/SearchPage"

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

  render() {
    // console.log(this.state.user);
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>

              <Route exact path="/searchpage" component={SearchPage} />
              <Route exact path="/login" component={Login} />
              <Route exact path='/main' component={Main} />
            </Switch>
          </div>
        </Router>

        {/* {this.state.user ? <Home /> : <Login />} */}
        <Geocode />
      </div>
    );
  }
}
