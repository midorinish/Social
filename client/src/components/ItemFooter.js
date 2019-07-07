import React, { Component } from 'react';

import ItemFooterCalendar from './ItemFooterCalendar';
import ItemFooterSocial from './ItemFooterSocial';

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
