import React, { Component } from 'react';

class ItemFooterCalendar extends Component {
  render() {
    return (
      <div className="pull-left">
        <a className="btn btn-default btn-xs ical" href="">
          <i className="fa fa-calendar"></i> &nbsp;iCal
        </a>
        <a className="btn btn-default btn-xs ml-10" href="">
          <i className="fa fa-calendar"></i> &nbsp;Google
        </a>
      </div>
    );
  }
}

export default ItemFooterCalendar;
