import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemPriceRange extends Component {
  render() {
    return (
      <div className="ticket-price">
        {this.props.range}
      </div>
    );
  }
}

ItemPriceRange.propTypes = {
  range: PropTypes.string.isRequired
}

export default ItemPriceRange;
