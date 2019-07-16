import React from "react";
import SearchRes from "../components/SearchResults";
import ResultsHolder from "../components/ResultsHolder";
import API from "../utils/API"

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventInput: "",
            eventData: []
        }
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ eventInput: e.target.value })
    }

    handleSearchClick(e) {
        e.preventDefault();
        API.searchEvents(this.state.eventInput)
            .then(
                (response) => {
                    this.setState({ eventData: response.data });
                    this.setState({ eventInput: "" });
                }
            );
    }

    render() {
        return (
            <main>
                <SearchRes handleChange={this.handleChange} handleSearchClick={this.handleSearchClick} />
                {(this.state.eventData.length > 0) ?
                    <ResultsHolder eventData={this.state.eventData} path={this.props.match.path} /> : null
                }
            </main>
        )
    }
}