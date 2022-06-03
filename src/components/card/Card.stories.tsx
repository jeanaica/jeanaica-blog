import React from 'react';
import { ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import Card from './Card';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Card',
  component: Card,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = args => (
  <MemoryRouter>
    <Card {...args} />
    <Card
      title="How to Pack for Your Next Vacation"
      summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper."
      date="April 1, 2022"
      right
    />
  </MemoryRouter>
);
export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: 'How to Pack for Your Next Vacation',
  summary:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper.',
  date: 'April 1, 2022',
  route: '/',
};
