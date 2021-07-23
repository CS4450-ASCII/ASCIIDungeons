import React from 'react';
import EntityIcon from '../components/Pages/Create/Editor/EntityIcons/EntityIcon';

export default {
  title: 'Editor / SideDrawer / EntityIcons',
  component: EntityIcon,
};

const Template = (args) => <EntityIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  entity: {
    character: '<',
  },
};

export const Selected = Template.bind({});
Selected.args = {
  ...Default.args,
  isSelected: true,
};
