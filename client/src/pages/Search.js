import React from "react";
import SearchResults from "../components/SearchResults";
import API from "../utils/api"

export default class Search extends React.Component {
    state = {
        eventInput: "",
        eventsData: []
    }


    handleChange = (e) => {
        e.preventDefault();
        this.setState({ eventInput: e.target.value })
    }

    handleSearchClick = (e) => {
        e.preventDefault();
        API.searchEvents(this.state.eventInput)
            .then(response => {
                console.log("response ", response)
                this.setState({
                    eventsData: response.data
                })
                this.setState({ eventInput: "" });
            })
    }

    render() {
        const { eventsData } = this.state;
        const eventsList = eventsData.length ? (
            eventsData.map(eventsData => {
                return (
                    <div className="post card" key={eventsData.id}>
                        <div className="card-content">{eventsData.name}</div>
                        <p>{eventsData.description}</p>
                    </div>
                )
            })
        ) : (
                <div> className="center"> No posts yet </div>)
        return (
            <main>
                <div className="container">
                    <h4 className="center">Home</h4>
                    <SearchResults handleChange={this.handleChange} handleSearchClick={this.handleSearchClick} />
                    {eventsList}
                </div>
            </main>
        )
    }
}
