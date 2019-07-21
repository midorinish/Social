import React from "react";

export default function SearchResults({ handleChange, handleSearchClick }) {
    return (
        <div id="searchContainer">
            <h3>Event Search</h3>
            <form id="eventSearch">
                <label htmlFor="eventInput" form="eventSearch"></label>
                <br></br>
                <input type="text" name="eventInput" id="eventInput" form="eventInput" onChange={handleChange} placeholder="Event Title" required></input>
                <br></br>
                <button type="submit" onClick={handleSearchClick}>Search</button>
            </form>
        </div>
    )
}
