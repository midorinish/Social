import React, { Component } from 'react';

import ItemFooterCalendar from 'components/ItemFooterCalendar';
import ItemFooterSocial from 'components/ItemFooterSocial';

class ItemFooter extends Component {
  render() {
    return (
      <div className="social clearfix">
        <ItemFooterCalendar />
        <ItemFooterSocial />
      </div>
    );
  }
}

export default ItemFooter;
