import React from "react";

export default function eventsCard(props) {
  return (
    <div>
      <h1>Event Title: {props.title}</h1>
      <p>Plot: {props.plot}</p>
    </div>
  );
}

export default MovieCard;