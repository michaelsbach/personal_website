import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders intro', () => {
  const { getByText } = render(<App />);
  expect(getByText(/Hi, I'm Michael/)).toBeInTheDocument();
});
