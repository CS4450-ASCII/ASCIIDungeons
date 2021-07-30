import { themeVariables } from '../../../../../muiAsciiTheme';
import ToolbarOptionMenu from './ToolbarOptionMenu';

export default {
  title: 'Editor / Toolbar / ToolbarOptionMenu',
  component: ToolbarOptionMenu,
};

const Template = (args) => (
  <div
    style={{
      backgroundColor: themeVariables.palette.gray.light,
      width: 'min-content',
    }}
  >
    <ToolbarOptionMenu {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  menuGroups: [
    [
      {
        label: 'New Game',
      },
      {
        label: 'Open',
      },
    ],
    [{ label: 'Save', hotkey: 'Ctrl-S' }, { label: 'Save As' }],
  ],
};
Default.story = {
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/tiPrq3wkELLGSmfhAF8co4/ASCIIDungeons?node-id=227%3A215',
    },
  },
};
