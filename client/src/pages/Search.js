import React from "react";
import SearchResults from "../components/SearchResults";
import ResultsHolder from "../components/ResultsHolder";
import API from "../utils/api"

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        state = {
            Events: [],
            eventInput: "",
            eventData: []
        }
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({ eventInput: e.target.value })
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
        this.setState({ events: Response.data.Events })
    }

    // handleEvents = (e) => {
    //     e.preventDefault();
    //     this.setState({ events: Response.data.events })
    //     console.log(this.state.events)
    // }

    render() {
        return (
            <main>
                <SearchResults handleChange={this.handleChange} handleSearchClick={this.handleSearchClick} />
                {(this.state.eventData.length > 0) ?
                    <ResultsHolder eventData={this.state.eventData} path={this.props.match.path} /> : null
                }
            </main>
        )
    }
}
