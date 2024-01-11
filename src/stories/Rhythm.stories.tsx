// this is the Name.stories.jsx file
import React from 'react';
import { Rhythm } from './Rhythm';

export default {
  title: 'Rhythm',
  component: Rhythm,
};

const Template = (args) => <Rhythm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Rhythm',
};