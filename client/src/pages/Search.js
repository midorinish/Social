import React from "react";
import SearchResults from "../components/SearchResults";
import ResultsHolder from "../components/ResultsHolder";
import API from "../utils/api"

export default class Search extends React.Component {
    state = {
        events: [],
        eventInput: "",
        eventData: []
    }

    handleChange = (e) => {
        e.preventDefault();
        API.searchEvents(this.state.eventData)
            .then(
                (data) =>
                    this.setState({ events: data })

            ).catch((err) => console.log(err))

    }

    handleSearchClick = (e) => {
        e.preventDefault();
        API.searchEvents(this.state.eventInput)
            .then(
                (data) => {
                    this.setState({ eventData: data, eventInput: "" });
                    console.log(this.state.eventData)
                }
            ).catch((err) => console.log(err));

    }

    // handleEvents = (e) => {
    //     e.preventDefault();
    //     this.setState({ events: Response.data.events })
    //     console.log(this.state.events)
    // }

    render() {
        return (
            <main>
                <h4>Title</h4>
                <p>Description</p>
                {/* <input typeof="text" placeholder="Event Name"></input>
                <button onChange={this.handleChange} onClick={this.handleSearchClick}>Submit</button> */}

                {/* <SearchResults handleChange={this.handleChange} handleSearchClick={this.handleSearchClick} />
                {(this.state.eventData.length > 0) ?
                    <ResultsHolder eventData={this.state.eventData} path={this.props.match.path} /> : null
                } */}
            </main>
        )
    }
}
