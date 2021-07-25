import React from 'react';
import { dummyObjects } from '../../../../../stories/dummyData';
import ObjectIconGroup from './ObjectIconGroup';

export default {
  title: 'Editor / SideDrawer / ObjectIconGroup',
  component: ObjectIconGroup,
  argTypes: {
    onSelectedObjectChange: {
      action: 'clicked',
    },
  },
};

const Template = (args) => <ObjectIconGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  gameObjects: dummyObjects,
};
