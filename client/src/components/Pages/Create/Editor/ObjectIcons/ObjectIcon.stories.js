import React from 'react';
import ObjectIcon from './ObjectIcon';

export default {
  title: 'Editor / SideDrawer / ObjectIcons',
  component: ObjectIcon,
};

const Template = (args) => <ObjectIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  object: {
    character: '<',
  },
};

export const Selected = Template.bind({});
Selected.args = {
  ...Default.args,
  isSelected: true,
};
