import { Button } from '@material-ui/core';

export default {
  title: 'Building Blocks / Buttons',
  component: Button,
  argTypes: {
    color: {
      options: ['default', 'primary', 'secondary'],
      control: { type: 'radio' }
    }
  }
};

const Template = args => <Button {...args}>Button</Button>;

export const Default = Template.bind({});
Default.args = {
  color: 'default'
};

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary'
};
