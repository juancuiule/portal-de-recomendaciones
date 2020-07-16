import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders recomendaciones link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Recomendaciones/i);
  expect(linkElement).toBeInTheDocument();
});
