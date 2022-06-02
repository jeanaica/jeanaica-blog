import React from 'react';
import { ComponentStory } from '@storybook/react';

import Image from './Image';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Image',
  component: Image,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Image> = args => <Image {...args} />;
export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  src: '/default-image.png',
  size: 'square',
};
