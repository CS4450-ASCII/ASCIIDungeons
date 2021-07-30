import { Button, Typography } from '@material-ui/core';
import SideDrawerGroup from './SideDrawerGroup';

export default {
  title: 'Editor / SideDrawer / SideDrawerGroup',
  component: SideDrawerGroup,
};

const Template = ({ children, ...args }) => (
  <SideDrawerGroup {...args}>
    {children || <Typography>{'<children prop shows here>'}</Typography>}
  </SideDrawerGroup>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Some Title',
};

export const WithAction = Template.bind({});
WithAction.args = {
  title: 'With Action',
  action: (
    <div onClick={() => alert('Action clicked!')} style={{ cursor: 'pointer' }}>
      +
    </div>
  ),
};
