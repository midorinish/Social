import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SectionItem from 'components/SectionItem';

class SectionContents extends Component {
  renderSectionItems() {
    return this.props.items.map(item => (
      <div key={item.id}>
        <SectionItem item={item} />
      </div>
    ));
  }

  render() {
    return(
      <div className="row">
        {this.renderSectionItems()}
      </div>
    );
  }
}

SectionContents.propTypes = {
  items: PropTypes.array.isRequired
}

export default SectionContents;
