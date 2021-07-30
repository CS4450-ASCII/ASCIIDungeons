import { dummyLevelData } from '../../../../../../stories/dummyData';
import LevelList from './LevelList';

export default {
  title: 'Editor / SideDrawer / LevelList',
  component: LevelList,
};

const Template = (args) => <LevelList {...args} />;

export const Default = Template.bind({});
Default.args = {
  rows: dummyLevelData,
};
