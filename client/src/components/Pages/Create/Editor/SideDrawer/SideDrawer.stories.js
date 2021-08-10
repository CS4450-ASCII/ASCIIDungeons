import { BrowserRouter } from 'react-router-dom';
import { dummyGameData } from '../../../../../stories/dummyData';
import SideDrawer from './SideDrawer';

export default {
  title: 'Editor / SideDrawer / SideDrawer',
  component: SideDrawer,
};

const Template = (args) => (
  <BrowserRouter>
    <SideDrawer {...args} currentGame={dummyGameData[0]} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
