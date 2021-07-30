import Checkbox from './Checkbox';

export default {
  title: 'Building Blocks / Checkbox',
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  initiallyChecked: true,
  variant: 'light',
  endLabel: '',
  startLabel: '',
};
Default.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/tiPrq3wkELLGSmfhAF8co4/ASCIIDungeons?node-id=492%3A1687',
    },
  },
};

export const StartLabel = Template.bind({});
StartLabel.args = {
  startLabel: 'Published?',
};

export const EndLabel = Template.bind({});
EndLabel.args = {
  endLabel: 'Show Grid',
};
