import React from "react";
import SearchResults from "../components/SearchResults"
import API from "../utils/api";

export default class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            savedEvents: []
        }
    }

    componentWillMount() {
        API.getEvents().then(
            (response) => {
                this.setState({ savedEvents: response.data });
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );

    }
    render() {
        console.log(this.state.savedEvents);
        return (
            <main>
                <SearchResults savedEvents={this.state.savedEvents} path={this.props.match.path} />
            </main>
        )
    }

}
