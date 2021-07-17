import React from 'react';

import ScrollList from './ScrollList';

export default {
  title: 'Building Blocks / Scroll List',
  component: ScrollList,
  argTypes: {
    alignItems: {
      control: { type: 'radio' },
      options: ['left', 'center', 'right'],
    },
  },
};

export const Default = (args) => (
  <ScrollList
    {...args}
    {...{
      rows: [...Array(20).keys()].map((n) => ({
        title: `Row ${n}`,
      })),
    }}
  />
);
