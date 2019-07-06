import React from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  authListender() {
    fire.auth().onAuthStateChanged(user => {
      console.log(user);
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
    return <div className="App" />;
  }
}
export default App;
