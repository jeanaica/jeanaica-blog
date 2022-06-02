import React from 'react';
import { ComponentStory } from '@storybook/react';

import SectionTitle from './SectionTitle';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/SectionTitle',
  component: SectionTitle,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SectionTitle> = args => (
  <SectionTitle {...args} />
);
export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  text: 'The Most Recent',
  highlight: 'Posts',
};
