import React from 'react';
import EntityIconGroup from '../components/Pages/Create/Editor/EntityIcons/EntityIconGroup';
import { dummyEntities } from './dummyData';

export default {
  title: 'Editor / SideDrawer / EntityIconGroup',
  component: EntityIconGroup,
  argTypes: {
    onSelectedEntityChange: {
      action: 'clicked',
    },
  },
};

const Template = (args) => <EntityIconGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  entities: dummyEntities,
};
