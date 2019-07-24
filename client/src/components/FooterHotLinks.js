import React, { Component } from 'react';
import { connect } from 'react-redux';

class FooterHotLinks extends Component {
  renderHotLinks() {
    return this.props.tickets.map(ticket => (
      <li key={ticket.id}>
        <a href="">{ticket.name}</a>
      </li>
    ));
  }

  render() {
    return (
      <div className="col-sm-3">
        <h6>Popular Events</h6>
        <ul>
          {this.renderHotLinks()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tickets: state.tickets
  }
}

export default connect(mapStateToProps)(FooterHotLinks);
