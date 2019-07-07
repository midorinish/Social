import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ItemImage from 'components/ItemImage';
import ItemWhosAttending from 'components/ItemWhosAttending';
import ItemPriceRange from 'components/ItemPriceRange';
import ItemDetails from 'components/ItemDetails';
import ItemFooter from 'components/ItemFooter';

class SectionItem extends Component {
  render() {
    const {
      imageURL,
      priceRange,
      name,
      datetime,
      venue,
      attendees
    } = this.props.item;

    return(
      <div className="col-xs-12 col-sm-6 col-lg-4">
        <div className="box">
          <ItemWhosAttending
            attendees={attendees}
          />
          <a href="" className="block-link">
            <ItemImage img={imageURL}>
              <ItemPriceRange range={priceRange} />
            </ItemImage>
            <ItemDetails
              name={name}
              datetime={datetime}
              venue={venue}
            />
            <ItemFooter />
          </a>
        </div>
      </div>
    );
  }
}

SectionItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default SectionItem;
