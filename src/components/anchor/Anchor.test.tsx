import React from 'react';
import { render, screen } from '@testing-library/react';

import Anchor from './Anchor';

test('renders anchor component', () => {
  render(<Anchor href='sample link'>Sample Anchor</Anchor>);
  expect(screen.getByText('Sample Anchor')).toBeDefined();
  expect(screen.getByText('Sample Anchor')).toHaveAttribute(
    'href',
    'sample link'
  );
});
