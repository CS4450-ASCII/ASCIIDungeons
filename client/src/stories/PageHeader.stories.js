import figlet from 'figlet';
import Slant from 'figlet/importable-fonts/Slant';
import SmSlant from 'figlet/importable-fonts/Small Slant';
import React from 'react';
import { PageHeaderDisplay } from '../components/Common/PageHeader';

figlet.parseFont('Slant', Slant);
figlet.parseFont('SmSlant', SmSlant);

export default {
  title: 'Components / PageHeader',
  component: PageHeaderDisplay
};

const Template = args => <PageHeaderDisplay {...args} />;

export const NoLocation = Template.bind({});
NoLocation.args = {
  text: 'Ascii Dungeons'
};

export const WithLocation = Template.bind({});
WithLocation.args = {
  text: 'Ascii Dungeons',
  location: 'create'
};

export const WithErrors = Template.bind({});
WithErrors.args = {
  text: 'Ascii Dungeons',
  location: 'play',
  errors: ['Oops! Something went wrong', 'Something else went wrong!']
};

export const Small = Template.bind({});
Small.args = {
  text: 'Small Header',
  small: true
};
