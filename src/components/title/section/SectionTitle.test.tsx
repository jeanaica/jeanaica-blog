import React from 'react';
import { render } from '@testing-library/react';

import SectionTitle from './SectionTitle';

test('renders section title component - Header', () => {
  const { container } = render(<SectionTitle text='SectionTitle' />);
  expect(container.getElementsByClassName('outer')).toBeDefined();
});
