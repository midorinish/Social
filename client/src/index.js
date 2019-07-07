import React from 'react';
import ReactDOM from 'react-dom';

import Root from 'Root';
import App from 'components/App';
import FooterHotLinks from 'components/FooterHotLinks';
import hot_tickets from 'dummy_data.json';

ReactDOM.render(
  <Root initialState={{tickets: hot_tickets}}>
    <App />
  </Root>
  , document.querySelector('#hot_tickets')
);
ReactDOM.render(
  <Root initialState={{tickets: hot_tickets}}>
    <FooterHotLinks />
  </Root>
  , document.querySelector('#footer_hot_links')
);
