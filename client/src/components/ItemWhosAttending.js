import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemWhosAttending extends Component {
  renderWhosAttending() {
    return this.props.attendees.map(attendee => (
      <a key={attendee.id} href="">
        <img src="{attendee.avatarURL}" alt="" />
      </a>
    ));
  }

  render() {
    if(!this.props.attendees.length > 0) {
      return null;
    }

    return (
      <div className="dropdown visiter-icon">
        <a href="" className="dropdown-toggle" type="button" data-toggle="dropdown">
          <span className="glyphicon glyphicon-user" aria-hidden="true">
          </span>
        </a>
        <div className="dropdown-menu">
          <p>Who's attending ({this.props.attendees.length})</p>
          {this.renderWhosAttending()}
        </div>
      </div>
    );
  }
}

ItemWhosAttending.propTypes = {
  attendees: PropTypes.array.isRequired
}

export default ItemWhosAttending;
