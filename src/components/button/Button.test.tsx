import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button component', () => {
  render(<Button type="submit">Sample</Button>);
  expect(screen.getByText('Sample')).toBeDefined();
  expect(screen.getByText('Sample')).toHaveAttribute('type', 'submit');
});
