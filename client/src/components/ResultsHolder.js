import React from "react";
import EventResult from "../components/SearchResults";

export default function ResultsHolder(props) {
    if (props.path === "/") {
        return (
            <div id="resultsHolder">
                <h3>Results Found</h3>
                {props.eventData.map((event) => {
                    const eventInfo = event.volumeinfo;
                    return <EventResult
                        title={eventInfo.title}
                    />
                })}
            </div>
        )
    } else if (props.path === "/saved") {
        if (props.savedEvent.length > 0) {
            return (
                <div id="resultsHolder">
                    <h3>Saved Events</h3>
                    {props.savedEvent.map((event) => {
                        return <EventResult
                            title={event.title} />
                    })}
                </div>
            )
        } else {
            return (
                <div id="resultHolder">
                    <h3>Saved Events</h3>
                    <p>No saved books</p>
                </div>
            );
        }
    }
}