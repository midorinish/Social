import React, { Component } from "react";
import fire from "./config/fire";
import "../src/Login.css";
import Home from "../src/Home";
import SearchPage from "./components/SearchPage";
import Search from "./pages/Search";
import App from "./App";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: "",
      password: "",
      user: {}
    };
  }

  componentDidMount() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        console.log(u);
      })
      .catch(error => {
        console.log(error);
      });
  }

  signup(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => {
        console.log(error);
      });
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <body>
        <div className="col-md-6">
          <div className="height" />
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail">Email Address </label>
              <input
                value={this.state.email}
                onChange={this.handleChange}
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail"
                aria-describedby="emailHelp"
                placeholder="Enter Email"
              />
              <br />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password </label>
              <input
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
                name="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              onClick={this.login}
              className="btn btn-primary lrg"
            >
              Login
            </button>
            <button
              onClick={this.signup}
              style={{ marginLeft: "25px" }}
              className="btn btn-success"
            >
              Signup
            </button>
          </form>
          {this.state.user ? <Home /> : <SearchPage />}
        </div>
      </body>
    );
  }
}
export default Login;
