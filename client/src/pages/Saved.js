import React from "react";
import API from "../utils/api";
import ResultsHolder from "../components/ResultsHolder";

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
                <ResultsHolder savedEvents={this.state.savedEvents} path={this.props.match.path} />
            </main>
        )
    }

}
