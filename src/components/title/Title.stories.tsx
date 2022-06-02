import React from 'react';
import { ComponentStory } from '@storybook/react';

import Title from './Title';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Title',
  component: Title,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Title> = args => <Title {...args} />;
export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  header: 'Articles',
  subText: 'Tech. Travel. Life.',
};
