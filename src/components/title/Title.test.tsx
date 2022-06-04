import React from 'react';
import { render } from '@testing-library/react';

import Title from './Title';

test('renders title component - Header', () => {
  const { container } = render(<Title header='Title' />);
  expect(container.getElementsByClassName('outer')).toBeDefined();
});

test('renders title component - subText', () => {
  const { getByText } = render(
    <Title
      header='Title'
      subText='sub text'
    />
  );
  expect(getByText('sub text')).toBeDefined();
});
