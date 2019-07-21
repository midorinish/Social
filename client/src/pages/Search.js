import React from "react";
import SearchResults from "../components/SearchResults";
import ResultsHolder from "../components/ResultsHolder";
import API from "../utils/api"

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventInput: "",
            eventData: []
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({ eventInput: e.target.value })
    }

    handleSearchClick = (e) => {
        e.preventDefault();

        console.log(this.state.eventInput);
        API.searchEvents(this.state.eventInput)
            .then(
                (data) => {
                    console.log("response ", data)
                    this.setState({ eventData: data, eventInput: "" });
                    console.log(this.state.eventData)
                }
            ).catch((err) => console.log(err));
    }

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
