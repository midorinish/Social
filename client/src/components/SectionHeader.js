import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SectionHeader extends Component {
  render() {
    return (
      <h2 className="site-title">
        {this.props.title}
        {this.props.children}
      </h2>
    )
  }
}

SectionHeader.propTypes = {
  title: PropTypes.string
}

export default SectionHeader;
