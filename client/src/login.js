import React, { Componenet } from "react";
import { Link } from "react-router-dom";
import Fire from "./config/Fire";

class Login extends Componenet {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="col-md-6">
        <form>
          <div class="form-group">
            <label for="exampleInputEamail">Email Address</label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name=" email"
              class="form-control"
              id="exampleInputEmail"
              area-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted">
              We will never share your email with anyone else
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" onClick={this.login} class="btn btn-primary">
            Login
          </button>
          <button
            onClick={this.signup}
            style={{ marginLeft: "25px" }}
            className="btn btn-success"
          >
            SignUp
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
