import Toolbar from './Toolbar';

export default {
  title: 'Editor / Toolbar',
  component: Toolbar,
};

const Template = (args) => <Toolbar {...args} />;
export const Default = Template.bind({});
Default.args = {};
Default.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/tiPrq3wkELLGSmfhAF8co4/ASCIIDungeons?node-id=227%3A140',
    },
  },
};
