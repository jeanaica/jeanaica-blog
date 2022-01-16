import React from 'react';
import { render, screen } from '@testing-library/react';
import Link from './Link';

test('renders link component', () => {
  render(<Link href="sample link">Sample Link</Link>);
  expect(screen.getByText('Sample Link')).toBeDefined();
  expect(screen.getByText('Sample Link')).toHaveAttribute(
    'href',
    'sample link'
  );
});
