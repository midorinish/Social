import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemDetails extends Component {
  render() {
    const {
      datetime,
      name,
      venue
    } = this.props;

    return (
      <div className="ticket-info">
        <span className="time-info">{datetime}</span>
        <h3 className="ticket-title">{name}</h3>
        <p className="venue-info">{venue}</p>
      </div>
    );
  }
}

ItemDetails.propTypes = {
  datetime: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired
}

export default ItemDetails;
