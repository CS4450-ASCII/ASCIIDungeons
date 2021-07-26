import React from 'react';

import ScrollList from '../components/Common/ScrollList';

export default {
  title: 'Building Blocks / Scroll List',
  component: ScrollList
};

export const Default = () => (
  <ScrollList
    {...{
      rows: [...Array(20).keys()].map(n => ({
        title: `Row ${n}`
      }))
    }}
  />
);
