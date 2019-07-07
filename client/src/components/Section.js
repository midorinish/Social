import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SectionHeader from 'components/SectionHeader';
import SectionSubheader from 'components/SectionSubheader';
import SectionContents from 'components/SectionContents';
import SectionDiscoverMore from 'components/SectionDiscoverMore';

class Section extends Component {
  render() {
    const {
      headerTitle,
      subHeaderTitle,
      items
    } = this.props;

    return (
      <section className="hot-ticket-sec ticket-boxes">
        <div className="container">
          <SectionHeader title={headerTitle}>
            <SectionSubheader title={subHeaderTitle} />
          </SectionHeader>
          <SectionContents items={items} />
          <SectionDiscoverMore />
        </div>
      </section>
    );
  }
}

Section.propTypes = {
  headerTitle: PropTypes.string,
  subHeaderTitle: PropTypes.string,
  items: PropTypes.array
}

export default Section;
