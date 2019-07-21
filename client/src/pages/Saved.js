import React from "react";
import SearchRes from "../components/searchRes"
import API from "../utils/API";

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
                <SearchRes savedEvents={this.state.savedEvents} path={this.props.match.path} />
            </main>
        )
    }

}
