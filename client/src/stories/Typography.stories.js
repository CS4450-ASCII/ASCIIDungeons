import { Typography } from '@material-ui/core';

export default {
  title: 'Ascii Mui / Typography',
  component: Typography,
  argTypes: {
    variant: {
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
      ],
      control: {
        type: 'select',
      },
    },
  },
};

const Template = ({ text, ...args }) => (
  <Typography {...args}>{text}</Typography>
);

export const Default = Template.bind({});
Default.args = {
  text: 'Default',
  variant: '',
};
