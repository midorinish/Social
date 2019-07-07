import React, { Component } from 'react';
import { connect } from 'react-redux';

import Section from 'components/Section';

class App extends Component {
  render() {
    return (
      <div>
        <Section
          headerTitle={'Popular Events'}
          subHeaderTitle={'Get tickets to your favourite events'}
          items={this.props.tickets}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tickets: state.tickets
  }
}

export default connect(mapStateToProps)(App);
