import React, { Component } from "react";
import axios from "axios";
import { appendFile } from "fs";
import eventsCard from "./eventsCard";

const URL =
  " https://api.stubhub.com/sellers/oauth/accesstoken?name=&eventLocalDate=&venue=&city=&state=&country=";
const APIKEY = "&apikey=7FbUF2V6b5URGnMS8cySMMGCepFal5GC";

class Event extends Component {
  state = {
    eventInformation: {},
    title: ""
  };

  // lifecyle methods
  componentDidMount() {
    this.searchEvent("Raptors Game");
  }

  searchEvent(query) {
    axios
      .get(URL + query + APIKEY)
      .then(result => {
        this.setState({
          eventInformation: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        HI
        <eventsCard
          title={this.state.eventInformation.Title}
          plot={this.state.eventInformation.Plot}
        />
        {this.state.eventInformation.Rated === "G" && (
          <img src={this.state.eventInformation.Poster} alt={"event"} />
        )}
        <h2>Searching for this event... {this.state.title}</h2>
        <input
          type="text"
          placeholder="Enter event"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <button onClick={() => this.searchevent(this.state.title)}>
          Search event
        </button>
      </div>
    );
  }
}

export default Event;
