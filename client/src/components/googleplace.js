import React from "react";
import { GoogleComponent } from "react-google-location";
const API_KEY = "AIzaSyB1qeZFoSkHJmUbUq9Y2vLsV8B5M09nMRc";

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: null
    };
  }

  render() {
    return (
      <div>
        <GoogleComponent
          apiKey={API_KEY}
          language={"en"}
          country={"country:in|country:us"}
          coordinates={true}
          locationBoxStyle={"custom-style"}
          locationListStyle={"custom-style-list"}
          onChange={e => {
            this.setState({ place: e });
          }}
        />
      </div>
    );
  }
}

export default HomeComponent;
