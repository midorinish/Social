import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SectionSubheader extends Component {
  render() {
    return (
      <small>
        {this.props.title}
      </small>
    )
  }
}

SectionSubheader.propTypes = {
  title: PropTypes.string
}

export default SectionSubheader;
