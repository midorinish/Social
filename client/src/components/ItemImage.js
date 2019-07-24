import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemImage extends Component {
  render() {
    return(
      <div className="ticket-img">
        <img src={this.props.img} alt="" />
        <span>{this.props.children}</span>
      </div>
    )
  }
}

ItemImage.propTypes = {
  img: PropTypes.string.isRequired
}

export default ItemImage;
